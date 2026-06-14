# Repo audit — missing prompts/skills & tools/scripts (2026-06-13)

**Verdict:** structurally healthy. All 11 prompt suites resolve (manifest → body → knowledge files), **no referenced script is missing**, `package.json` scripts all resolve, and skill builds are fresh except one. The gaps are (1) **stale discoverability docs** — the `help` menu undersells the toolkit by ~70% — and (2) a few **planned-but-unbuilt helper tools**. Nothing is broken; several things are out of date or never built.

## What's clean (no action)
- **Prompt suites (11):** assignment6, brandy, cajal, caze, courses, madison-pitch, nina, ogilvy, paper, review, slides-deck — every `manifest.yml` body exists and every `knowledge_file` resolves (suite-local or `_shared/`).
- **Scripts referenced vs. present:** every `scripts/*.mjs` cited in `docs/`, `DOMAIN.md`, `README.md`, `package.json` exists. No dangling references.
- **`package.json`:** `verify`, `build-prompts`, `svg-to-png` all resolve.

## P1 — Stale `help` menu (fix first; it's the demo's first screen)
The deterministic `help` block is hard-coded **identically in `CLAUDE.md` and `AGENTS.md`** and is badly out of date. Someone who opens Madison and types `help` sees a fraction of what exists:

| | Help menu lists | Actually on disk | Missing from help |
|---|---|---|---|
| **prompts** | courses, assignment6 (2) | 11 suites | nina, brandy, madison-pitch, cajal, caze, paper, ogilvy, review, slides-deck |
| **exercises** | Ex 1→1A→2→3→5→5A/5B | 13 exercises | 6A, 7, 8, 9, 10, **Final** |

This is the single highest-value fix — the live demo opens on this screen, and it currently advertises ~30% of the work. **Fix:** update the fenced block in both files (they must stay identical).

## P2 — Planned-but-unbuilt tools (genuine missing scripts)
Each was proposed in an exercise as the tool that would make it fully machine-backed; none exists yet. The exercises work without them (they fall back to human gates), so these are enhancements, not blockers.

| Tool | Would back | Value |
|---|---|---|
| `scripts/build-resume.mjs` | **Ex 8** — render `brand/resume.json` → ATS PDF+Word + visual PDF, **refusing while the `_human_gate`/`[CONFLICT]` is open** | High — makes A8's resumes deterministic from the attested source; closes the Ex-1 loop in code |
| `scripts/contrast-check.mjs` | **Ex 8** — compute WCAG ratios from `brand.yml` hexes | Med — the machine half of the accessibility deliverable |
| `scripts/deck-trace.mjs` | **Ex 6A + Final** — check every slide claim points to a known artifact | Low — the trace audit is a human gate by design |
| `build-pitch` command | chain `madison-pitch` → `build-deck.mjs` | Low — convenience |

## P3 — Pre-existing backlog (from `NEXT-AFTER-DEMO.md`)
- **CI not wired:** `npm run verify` (the machine half of P4) isn't enforced — no `.github/workflows/` or pre-commit hook. Med — conformance is run by hand, not gated automatically.
- **`prompts/authoring/`** single-file prompts could reference `_shared/` (factcheck / figure-checker de-fork pass). Low.
- **`archetypes.md`:** point the book's archetype chapter at `_shared/archetypes.md` so lab tool and textbook stop diverging. Low.
- **Assignment-6 `build-pdf`** emits the PDF but not the Figma competitive chart. Low.

## P4 — Minor / housekeeping
- **One stale build:** `prompts/review/.build/json-review.skill` is older than its source (`review.md`). Rebuild: `node scripts/build-prompts.mjs review`. Trivial.
- **No `exercise-04`:** the A4 "build session" slot has no exercise. Confirm whether A4 is meant to have one or is intentionally tool-only.
- **`prompts/README.md`** uses `courses/` as its only example — doesn't enumerate the 11 suites. Could add a suite index. Low.
- **Possible cruft (not a gap):** `scripts/factcheck-info5100.mjs`, `research-info5100.mjs`, `write-info5100-chapters.mjs`, `new_book.py` are INFO 5100 pipeline scripts living in this repo. They're documented in `DOMAIN.md` + `docs/scripts.md`, so not orphaned — but confirm they belong here vs. the 5100 book.

## Recommended order
1. **Fix the `help` menu** in `CLAUDE.md` + `AGENTS.md` (P1) — biggest impact, ~10 min.
2. **Rebuild the stale `review` skill** (P4) — 1 command.
3. **Build `build-resume.mjs` + `contrast-check.mjs`** (P2) — the two that materially upgrade Exercise 8.
4. **Wire CI** for `npm run verify` (P3) — makes the P4 machine-gate automatic.
5. The rest (de-fork passes, Figma chart, deck-trace, README index) as time allows.
