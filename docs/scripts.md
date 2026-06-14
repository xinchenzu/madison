# Scripts

`scripts/` is the maintained automation layer. Durable automation belongs here,
not in `chapters/`, `data/`, or chat history.

## Current Command Surface

Run from the repository root:

```bash
npm run verify
npm run svg-to-png
```

`npm run verify` is currently a placeholder:

```bash
echo "Add repo-specific verification scripts under scripts/"
```

`npm run svg-to-png` runs:

```bash
node scripts/svg-to-png.mjs
```

## Script Areas

- `scripts/svg-to-png.mjs`: converts `images/**/*.svg` to 300dpi PNG output
  when the PNG is missing or older than the source SVG.
- `scripts/madison-main/`: imported source/configuration from Madison-main,
  retained for review and possible promotion.
- `scripts/build-prompts.mjs`: compiles a CLI-agnostic prompt suite in
  `prompts/<suite>/` (manifest + body + knowledge files) into a tool-native
  adapter — e.g. a Claude/Cowork `.skill`. Run `node scripts/build-prompts.mjs
  courses`.
- `scripts/build-resume.mjs`: renders `brand/resume.json` → ATS résumé
  (`.pdf` + `.docx`) and a branded visual `.pdf` from one verified source.
  **Refuses** while the `_human_gate` is open, any `issues[].resolution` is
  null, or any field still carries a `[CONFLICT]`/`[Unverifiable]` tag. Backs
  Exercise 8. `node scripts/build-resume.mjs [brand/resume.json] [--out-dir d]
  [--accent "#C8102E"] [--check]`.
- `scripts/contrast-check.mjs`: WCAG 2.x contrast ratios for a palette — the
  machine half of the Exercise-8 accessibility deliverable. `--pair fg bg`
  (gate, exit 1 on AA fail) or a palette file / hex list (matrix). `--large`
  for large-text thresholds.
- `scripts/deck-trace.mjs`: the machine pre-check behind the slide trace audit
  (Exercise 6A + Final). Confirms every slide carries a `TRACE:` line and each
  referenced artifact resolves; `TRACE: ASPIRATION` flags an unevidenced claim.
  Exit 1 on any untraced slide or unresolved ref.
- `scripts/build-pitch.mjs`: the deterministic tail of madison-pitch →
  build-deck. Validates pitch constraints (~10 slides, speaker NOTES), runs
  `deck-trace` if the deck is annotated, then renders with the Madison preset.
- `scripts/*info5100*.mjs`: INFO 7375 research/fact-checking/chapter generation
  helpers.
- `prompts/`: the CLI-agnostic prompt sets (writing/production prompts and
  command suites). **Prompts live here, not in `scripts/`** — `scripts/` is
  executable code only.
- `prompts/authoring/`: reusable writing workflow cards (book appendix prompts)
  for drafting, research, fact-checking, figure checks, and enrichment.

## Script Rules

- Use lowercase `scripts/`.
- Do not create or reference uppercase `SCRIPTS/`.
- `scripts/` is executable code (`.mjs`, `.py`, `.sh`, …). Prompts go in
  `prompts/`, not here.
- Check existing scripts before creating ad hoc code.
- Document inputs, outputs, side effects, and verification.
- Run a small sample before broad execution.
- Update docs and skills when a script becomes part of a workflow.

## Verification Questions

Before treating script output as usable, answer:

- What files did the script read?
- What files did it write?
- Can the script be rerun safely?
- What proves the output is current and complete?
- Should the run be logged in `skills/RUN_LOG.md` or `enrichment-log.md`?
