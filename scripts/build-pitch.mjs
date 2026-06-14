#!/usr/bin/env node
// build-pitch.mjs
// Convenience chain: madison-pitch (the skill writes the 10-slide spec) ->
// validate -> deck-trace -> build-deck (render). This script is the deterministic
// tail of that chain: it takes a pitch deck spec (the madison-pitch output, in
// build-deck Markdown format), checks the pitch constraints, runs the trace
// audit if any slide carries TRACE:, and renders with the Madison preset.
//
// The CONTENT (the 10 slides, the 8-minute script) comes from the madison-pitch
// skill — a prompt, run by you. This wrapper does only the mechanical part.
//
// Usage:
//   node scripts/build-pitch.mjs pitch.md [--out pitch.html] [--accent "#C8102E"] [--no-trace]
//
// Checks (warn, don't block): ~10 slides; every slide has speaker NOTES (the
// spoken script). Trace audit DOES block if TRACE: lines are present and broken.

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const SCRIPTS = path.dirname(new URL(import.meta.url).pathname);

function slidesOf(spec) {
  return spec.split(/^\s*---\s*$/m).map((b) => b.trim()).filter(Boolean).map((t) => {
    const hasNotes = /^\s*NOTES:\s*$/m.test(t);
    const hasTrace = /^\s*TRACE:\s*/im.test(t);
    const headline = (t.split('\n')[0].match(/^#\s+(.*)/) || [, '(untitled)'])[1].trim();
    return { headline, hasNotes, hasTrace };
  });
}

function main() {
  const args = process.argv.slice(2);
  const spec = args.find((a) => !a.startsWith('--'));
  if (!spec || !fs.existsSync(spec)) { console.error('Usage: build-pitch.mjs pitch.md [--out f.html] [--accent "#C8102E"] [--no-trace]'); process.exit(2); }
  const oi = args.indexOf('--out'); const out = oi >= 0 ? args[oi + 1] : spec.replace(/\.md$/, '.html');
  const ai = args.indexOf('--accent'); const accent = ai >= 0 ? args[ai + 1] : '#C8102E';
  const noTrace = args.includes('--no-trace');

  const slides = slidesOf(fs.readFileSync(spec, 'utf8'));
  console.log(`Pitch spec: ${slides.length} slides.`);

  // soft pitch constraints
  if (slides.length < 9 || slides.length > 11)
    console.warn(`  ! a Madison Pitch is 10 slides (8 minutes). You have ${slides.length} — tighten or expand.`);
  const noNotes = slides.filter((s) => !s.hasNotes).map((s) => s.headline);
  if (noNotes.length) console.warn(`  ! ${noNotes.length} slide(s) have no NOTES: (the spoken script): ${noNotes.slice(0, 4).join(' · ')}${noNotes.length > 4 ? ' …' : ''}`);

  // trace audit (blocks) — only if the deck is annotated
  const anyTrace = slides.some((s) => s.hasTrace);
  if (anyTrace && !noTrace) {
    console.log('\nRunning trace audit (slides carry TRACE:) …');
    try { execSync(`node "${path.join(SCRIPTS, 'deck-trace.mjs')}" "${spec}"`, { stdio: 'inherit' }); }
    catch { console.error('\n✗ trace audit failed — fix the slide provenance before rendering.'); process.exit(1); }
  } else if (!anyTrace) {
    console.log('  (no TRACE: lines — skipping trace audit; add them for the 6A/Final gate.)');
  }

  console.log('\nRendering with the Madison preset …');
  execSync(`node "${path.join(SCRIPTS, 'build-deck.mjs')}" "${spec}" --out "${out}" --accent "${accent}"`, { stdio: 'inherit' });
  console.log(`✓ pitch built → ${out}  (open it, press p to print the submission PDF)`);
}

main();
