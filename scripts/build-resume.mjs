#!/usr/bin/env node
// build-resume.mjs
// Render the attested brand/resume.json into the two Assignment-8 resumes —
// an ATS-friendly version (single-column .pdf + .docx) and a visually branded
// version (.pdf) — from one verified content source.
//
// THE GATE (the point): a resume is the one document where the fluency trap
// gets you caught. This refuses to render while resume.json is unresolved —
//   1. identity.canonical_email is null,
//   2. any issues[].resolution is null,
//   3. any render-bound field still carries a [CONFLICT] or [Unverifiable] tag.
// You cannot ship a resume built on conflicting credentials. Resolve the gates
// in Exercise 1, then it builds.
//
// Usage:
//   node scripts/build-resume.mjs [brand/resume.json] [--out-dir dir] [--accent "#C8102E"] [--check]
//     --check    report the gate only; never render
//
// Machine half of P4: this checks well-formedness + gate closure. Whether the
// resume reads well and targets the right keywords is the human gate.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execSync } from 'node:child_process';

// --- gate evaluation -----------------------------------------------------
const TAG = /\[(CONFLICT|Unverifiable)/i;

// Walk every string leaf, remembering its dotted path, to find residual tags.
function* strings(obj, trail = '') {
  if (obj == null) return;
  if (typeof obj === 'string') { yield [trail, obj]; return; }
  if (Array.isArray(obj)) { for (let i = 0; i < obj.length; i++) yield* strings(obj[i], `${trail}[${i}]`); return; }
  if (typeof obj === 'object') for (const [k, v] of Object.entries(obj)) {
    if (k.startsWith('_')) continue;            // skip metadata (_label_key documents the tags themselves)
    yield* strings(v, trail ? `${trail}.${k}` : k);
  }
}

function checkGates(r) {
  const open = [];
  if (r.identity?.canonical_email == null)
    open.push('identity.canonical_email is null — pick the one brand contact (issue #5)');
  for (const it of r.issues || [])
    if (it.resolution == null)
      open.push(`issues[#${it.id}] (${it.severity}) unresolved — ${it.field}: ${it.problem}`);
  for (const [where, s] of strings(r))
    if (TAG.test(s)) open.push(`${where} still tagged ${s.match(TAG)[0]}…] — resolve or relabel before it reaches a resume`);
  return open;
}

// --- content selection (only attested, tag-free text reaches the page) ---
const clean = (s) => String(s ?? '').replace(/\s*\[[^\]]*\]\s*/g, ' ').replace(/\s+/g, ' ').trim();
const esc = (s) => clean(s).replace(/([#*_`<>])/g, '\\$1');

function pickContent(r) {
  const id = r.identity || {};
  const contact = [id.canonical_email, id.links?.linkedin, id.links?.github, id.links?.website]
    .filter(Boolean).map(clean);
  const exp = (r.experience || []).map((e) => ({
    title: clean(e.title), org: clean(e.org),
    dates: [clean(e.start), clean(e.end)].filter(Boolean).join(' – '),
  }));
  const edu = (r.education || []).map((e) => ({
    degree: clean(e.degree), school: clean(e.school), years: clean(e.years),
  }));
  const pubs = (r.selected_publications || []).filter((p) => p.cite).map((p) => clean(p.cite));
  const projects = (r.projects?.items || []).map((p) => ({
    name: clean(p.name), what: clean(p.what), url: clean(p.live_url || p.repo),
  }));
  const awards = (r.awards || []).map((a) => `${clean(a.name)}${a.year ? ` (${clean(a.year)})` : ''}`);
  const skills = (r.skills_top || []).map(clean);
  return { name: clean(id.name), headline: clean(id.headline), location: clean(id.location),
           contact, exp, edu, pubs, projects, awards, skills };
}

// --- ATS markdown: single column, plain, parse-friendly -------------------
function atsMarkdown(c) {
  const o = [];
  o.push('---'); o.push(`title: "${c.name} — Résumé"`); o.push('geometry: margin=0.75in'); o.push('fontsize: 11pt'); o.push('---');
  o.push(`# ${c.name}`);
  o.push(`${c.headline}`);
  o.push(`${[c.location, ...c.contact].filter(Boolean).join(' · ')}`);
  if (c.skills.length) { o.push('\n## Skills'); o.push(c.skills.join(', ')); }
  if (c.exp.length) {
    o.push('\n## Experience');
    for (const e of c.exp) o.push(`**${e.title}**, ${e.org}${e.dates ? ` — ${e.dates}` : ''}`);
  }
  if (c.edu.length) {
    o.push('\n## Education');
    for (const e of c.edu) o.push(`**${e.degree}**, ${e.school}${e.years ? ` (${e.years})` : ''}`);
  }
  if (c.projects.length) {
    o.push('\n## Selected Projects');
    for (const p of c.projects) o.push(`**${p.name}** — ${p.what}${p.url ? ` (${p.url})` : ''}`);
  }
  if (c.pubs.length) { o.push('\n## Selected Publications'); for (const p of c.pubs) o.push(`- ${p}`); }
  if (c.awards.length) { o.push('\n## Awards'); o.push(c.awards.join(' · ')); }
  return o.join('\n\n') + '\n';
}

// --- visual markdown: same content, branded accent header -----------------
function visualMarkdown(c, accent) {
  const o = [];
  o.push('---'); o.push(`title: "${c.name}"`); o.push('geometry: margin=0.7in'); o.push('fontsize: 11pt');
  o.push(`header-includes: |`);
  o.push(`  \\usepackage{xcolor}`);
  o.push(`  \\definecolor{brand}{HTML}{${accent.replace('#', '')}}`);
  o.push('---');
  o.push(`\\noindent{\\color{brand}\\Huge\\textbf{${c.name}}}\\par`);
  o.push(`\\noindent{\\large ${c.headline}}\\par`);
  o.push(`\\noindent\\textcolor{brand}{\\rule{\\linewidth}{2pt}}\\par`);
  o.push(`${[c.location, ...c.contact].filter(Boolean).join('  ·  ')}`);
  if (c.skills.length) { o.push('\n## {\\color{brand}Skills}'); o.push(c.skills.join('  ·  ')); }
  if (c.exp.length) { o.push('\n## {\\color{brand}Experience}'); for (const e of c.exp) o.push(`**${e.title}** — ${e.org}${e.dates ? ` *(${e.dates})*` : ''}`); }
  if (c.projects.length) { o.push('\n## {\\color{brand}Selected Projects}'); for (const p of c.projects) o.push(`**${p.name}** — ${p.what}${p.url ? ` (${p.url})` : ''}`); }
  if (c.edu.length) { o.push('\n## {\\color{brand}Education}'); for (const e of c.edu) o.push(`**${e.degree}** — ${e.school}${e.years ? ` *(${e.years})*` : ''}`); }
  if (c.awards.length) { o.push('\n## {\\color{brand}Awards}'); o.push(c.awards.join('  ·  ')); }
  return o.join('\n\n') + '\n';
}

// --- render helpers (build in /tmp; FUSE mount blocks some in-place writes)
function renderPdf(md, outPdf) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'resume-'));
  const mdFile = path.join(tmp, 'r.md');
  fs.writeFileSync(mdFile, md);
  try {
    execSync(`pandoc "${mdFile}" -o "${path.join(tmp, 'o.pdf')}" --pdf-engine=xelatex`, { stdio: 'pipe' });
    fs.copyFileSync(path.join(tmp, 'o.pdf'), outPdf); return 'pandoc+xelatex';
  } catch {}
  try {
    execSync(`pandoc "${mdFile}" -s -o "${path.join(tmp, 'o.html')}"`, { stdio: 'pipe' });
    execSync(`soffice --headless --convert-to pdf --outdir "${tmp}" "${path.join(tmp, 'o.html')}"`, { stdio: 'pipe' });
    fs.copyFileSync(path.join(tmp, 'o.pdf'), outPdf); return 'pandoc+libreoffice';
  } catch {}
  fs.copyFileSync(mdFile, outPdf.replace(/\.pdf$/, '.md'));
  return 'NO-PDF-ENGINE (wrote .md)';
}
function renderDocx(md, outDocx) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'resume-'));
  const mdFile = path.join(tmp, 'r.md');
  fs.writeFileSync(mdFile, md);
  try {
    execSync(`pandoc "${mdFile}" -o "${path.join(tmp, 'o.docx')}"`, { stdio: 'pipe' });
    fs.copyFileSync(path.join(tmp, 'o.docx'), outDocx); return 'pandoc';
  } catch { fs.copyFileSync(mdFile, outDocx.replace(/\.docx$/, '.md')); return 'NO-PANDOC (wrote .md)'; }
}

// --- main ----------------------------------------------------------------
function main() {
  const args = process.argv.slice(2);
  const src = args.find((a) => !a.startsWith('--')) || 'brand/resume.json';
  const od = args.indexOf('--out-dir'); const outDir = path.resolve(od >= 0 ? args[od + 1] : 'brand/resume-out');
  const ai = args.indexOf('--accent'); const accent = ai >= 0 ? args[ai + 1] : '#C8102E';
  const checkOnly = args.includes('--check');

  if (!fs.existsSync(src)) { console.error(`No resume at ${src}`); process.exit(2); }
  const r = JSON.parse(fs.readFileSync(src, 'utf8'));

  const open = checkGates(r);
  if (open.length) {
    console.error(`REFUSING to build — resume.json has ${open.length} open gate(s). You cannot ship a resume on conflicting credentials:\n`);
    for (const o of open) console.error('  • ' + o);
    console.error('\nResolve these in Exercise 1 (set canonical_email, fill every issues[].resolution,');
    console.error('and relabel any [CONFLICT]/[Unverifiable] field), then run again.');
    process.exit(1);
  }
  if (checkOnly) { console.log('✓ gate clean — resume.json is ready to render.'); return; }

  fs.mkdirSync(outDir, { recursive: true });
  const c = pickContent(r);
  const ats = atsMarkdown(c), vis = visualMarkdown(c, accent);
  const e1 = renderPdf(ats, path.join(outDir, 'resume-ats.pdf'));
  const e2 = renderDocx(ats, path.join(outDir, 'resume-ats.docx'));
  const e3 = renderPdf(vis, path.join(outDir, 'resume-visual.pdf'));
  console.log(`✓ gate clean — built into ${path.relative(process.cwd(), outDir)}/`);
  console.log(`  resume-ats.pdf   (${e1})`);
  console.log(`  resume-ats.docx  (${e2})`);
  console.log(`  resume-visual.pdf(${e3})`);
}

main();
