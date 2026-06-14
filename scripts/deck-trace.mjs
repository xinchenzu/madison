#!/usr/bin/env node
// deck-trace.mjs
// The machine pre-check behind the slide-deck trace audit (Exercise 6A + Final).
// A pitch/portfolio slide may only assert what you can point to. This confirms
// every slide carries a TRACE: line and that each referenced artifact resolves.
//
// Spec convention (extends build-deck.mjs): inside a slide, after the body, add
//   TRACE: path/to/artifact.json, brand/brand.yml, recipes/marketmind.md
// listing the verified artifact(s) the slide's claim rests on. Paths resolve
// relative to the deck file's directory, then the repo root. A slide whose claim
// is an aspiration (not yet evidenced) should say so:  TRACE: ASPIRATION
//
// Usage:
//   node scripts/deck-trace.mjs deck.md [--root .] [--lenient]
//     --lenient   warn instead of failing (untraced/unresolved -> warnings, exit 0)
//
// Exit 1 if any slide is untraced or any TRACE ref doesn't resolve (the gate).
// The MACHINE confirms the artifact exists; whether it actually supports the
// claim is still the human half of the trace audit.

import fs from 'node:fs';
import path from 'node:path';

function parseSlides(spec) {
  return spec.split(/^\s*---\s*$/m).map((block) => {
    const t = block.trim();
    if (!t) return null;
    // strip speaker notes; TRACE lives in the body part (before NOTES:)
    const [bodyPart] = t.split(/^\s*NOTES:\s*$/m);
    const lines = bodyPart.trim().split('\n');
    let headline = '';
    if (lines[0] && /^#\s+/.test(lines[0])) headline = lines[0].replace(/^#\s+/, '').trim();
    const traceLine = lines.find((l) => /^\s*TRACE:\s*/i.test(l));
    const refs = traceLine
      ? traceLine.replace(/^\s*TRACE:\s*/i, '').split(',').map((s) => s.trim()).filter(Boolean)
      : null;
    return { headline: headline || '(untitled slide)', refs };
  }).filter(Boolean);
}

function resolveRef(ref, deckDir, root) {
  if (/^ASPIRATION$/i.test(ref)) return 'aspiration';
  for (const base of [deckDir, root]) {
    const p = path.resolve(base, ref);
    if (fs.existsSync(p)) return 'ok';
  }
  return 'missing';
}

function main() {
  const args = process.argv.slice(2);
  const deck = args.find((a) => !a.startsWith('--'));
  const ri = args.indexOf('--root'); const root = path.resolve(ri >= 0 ? args[ri + 1] : '.');
  const lenient = args.includes('--lenient');
  if (!deck || !fs.existsSync(deck)) { console.error('Usage: deck-trace.mjs deck.md [--root .] [--lenient]'); process.exit(2); }

  const deckDir = path.dirname(path.resolve(deck));
  const slides = parseSlides(fs.readFileSync(deck, 'utf8'));
  let untraced = 0, unresolved = 0, aspir = 0;

  console.log(`Trace audit — ${slides.length} slide(s) in ${path.relative(process.cwd(), deck)}\n`);
  slides.forEach((s, i) => {
    const n = String(i + 1).padStart(2);
    if (!s.refs) { untraced++; console.log(`  ${n}. ✗ NO TRACE   ${s.headline}`); return; }
    const parts = s.refs.map((ref) => {
      const st = resolveRef(ref, deckDir, root);
      if (st === 'missing') unresolved++;
      if (st === 'aspiration') aspir++;
      return `${st === 'ok' ? '✓' : st === 'aspiration' ? '◷' : '✗'} ${ref}`;
    });
    console.log(`  ${n}. ${s.headline}\n        ${parts.join('   ')}`);
  });

  const problems = untraced + unresolved;
  console.log('');
  console.log(`untraced slides: ${untraced} · unresolved refs: ${unresolved} · aspirations (flagged): ${aspir}`);
  if (problems === 0) { console.log('✓ every slide traces to a resolvable artifact (or a flagged aspiration). Human half: confirm each artifact actually backs its claim.'); return; }
  const msg = `✗ ${untraced} untraced slide(s), ${unresolved} unresolved ref(s) — every claim must point to a real artifact or be flagged TRACE: ASPIRATION and moved off the slide.`;
  if (lenient) { console.warn(msg + '  (lenient: not failing)'); return; }
  console.error(msg);
  process.exit(1);
}

main();
