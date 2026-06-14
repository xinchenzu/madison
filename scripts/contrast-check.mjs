#!/usr/bin/env node
// contrast-check.mjs
// Compute WCAG 2.x contrast ratios for a brand palette — the machine half of
// the Assignment-8 color-accessibility deliverable. (The human still screenshots
// WebAIM for the submission proof; this tells you the answer before you do.)
//
// Two modes:
//   1. Pair (a real gate) — check one or more text-on-background pairs:
//        node scripts/contrast-check.mjs --pair "#111111" "#FFFFFF" [--pair fg bg ...] [--large]
//      Exits 1 if any pair fails AA.
//   2. Matrix (exploratory) — extract every hex from files/args, score all pairs:
//        node scripts/contrast-check.mjs brand-palette.json [more.css ...] [#A1B2C3 ...]
//
// WCAG AA: 4.5:1 normal text, 3:1 large (>=18pt or 14pt bold). AAA: 7:1 / 4.5:1.

import fs from 'node:fs';

// --- color math ----------------------------------------------------------
function parseHex(h) {
  let s = h.replace(/^#/, '');
  if (s.length === 3) s = s.split('').map((x) => x + x).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(s)) return null;
  return [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16));
}
const lin = (c) => { const s = c / 255; return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4; };
const lum = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
function ratio(h1, h2) {
  const a = parseHex(h1), b = parseHex(h2);
  if (!a || !b) return null;
  const [L1, L2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (L1 + 0.05) / (L2 + 0.05);
}
const norm = (h) => '#' + (parseHex(h) || []).map((x) => x.toString(16).padStart(2, '0')).join('').toUpperCase();
const fmt = (r) => r.toFixed(2) + ':1';
function verdict(r, large) {
  const aa = large ? 3 : 4.5, aaa = large ? 4.5 : 7;
  return r >= aaa ? 'AAA' : r >= aa ? 'AA' : 'FAIL';
}

// --- extraction ----------------------------------------------------------
function hexesFrom(text) {
  const found = text.match(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/g) || [];
  return [...new Set(found.map(norm))];
}

// --- main ----------------------------------------------------------------
function main() {
  const args = process.argv.slice(2);
  const large = args.includes('--large');

  // Pair mode --------------------------------------------------------------
  if (args.includes('--pair')) {
    const pairs = [];
    for (let i = 0; i < args.length; i++) if (args[i] === '--pair') pairs.push([args[i + 1], args[i + 2]]);
    let failed = 0;
    console.log(`WCAG contrast — ${large ? 'large' : 'normal'} text (AA ${large ? 3 : 4.5}:1, AAA ${large ? 4.5 : 7}:1)\n`);
    for (const [fg, bg] of pairs) {
      const r = ratio(fg, bg);
      if (r == null) { console.error(`  ? invalid hex in pair: ${fg} on ${bg}`); failed++; continue; }
      const v = verdict(r, large);
      if (v === 'FAIL') failed++;
      console.log(`  ${norm(fg)} on ${norm(bg)}   ${fmt(r).padStart(8)}   ${v}`);
    }
    if (failed) { console.error(`\n✗ ${failed} pair(s) fail AA — fix the shade before you ship.`); process.exit(1); }
    console.log('\n✓ all pairs pass AA.');
    return;
  }

  // Matrix mode ------------------------------------------------------------
  let hexes = [];
  for (const a of args) {
    if (a.startsWith('--')) continue;
    if (/^#?[0-9a-fA-F]{3,6}$/.test(a) && parseHex(a)) { hexes.push(norm(a)); continue; }
    if (fs.existsSync(a)) hexes.push(...hexesFrom(fs.readFileSync(a, 'utf8')));
  }
  hexes = [...new Set(hexes)];
  if (hexes.length < 2) {
    console.error('Need at least 2 colors. Give a palette file (json/yaml/css/md) or hex codes,');
    console.error('or use:  --pair "#111111" "#FFFFFF"  to check a specific text/background pair.');
    process.exit(2);
  }
  console.log(`Found ${hexes.length} colors: ${hexes.join(' ')}`);
  console.log(`\nAll pairs — ${large ? 'large' : 'normal'} text (AA ${large ? 3 : 4.5}:1):\n`);
  let passAA = 0, total = 0;
  for (let i = 0; i < hexes.length; i++) for (let j = i + 1; j < hexes.length; j++) {
    const r = ratio(hexes[i], hexes[j]); const v = verdict(r, large); total++;
    if (v !== 'FAIL') passAA++;
    console.log(`  ${hexes[i]} / ${hexes[j]}   ${fmt(r).padStart(8)}   ${v}`);
  }
  console.log(`\n${passAA}/${total} pairs pass AA. Use a passing pair for any text-on-background combination.`);
  console.log('(Then screenshot the chosen pairs in WebAIM for the submission PDF.)');
}

main();
