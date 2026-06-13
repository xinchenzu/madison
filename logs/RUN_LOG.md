# Recipe Run Log

Human-readable history for recipe-driven work. Short, concrete entries; no
secrets, personal contact details, or private notes.

## 2026-06-12 — Drafted Exercise Two (Madison talks to Figma)

- **Recipe:** manual (author-directed; design settled in prior discussion)
- **Inputs:** Exercise One's Step 5 flags (untraceable board claims = test data); the Figma API book (Ch 1 snapshot/drift, Ch 2 API surfaces and ping, Ch 3 document graph and fixtures, Ch 5/11 audit pattern); author decision to dedicate a full exercise to Madison↔Figma rather than keep craft work in Exercise One
- **Outputs:** `docs/exercises/exercise-02-madison-talks-to-figma.md` — Steps 0–6 (token discipline → ping → fixture → claims extraction → trace adjudication → recipe wrap → log), 20/5 grading (10 itemized mechanics lines; Glimmer on articulating the conformance/adequacy gap for the student's own board), what-can-go-wrong table; DOMAIN.md course-exercises section updated
- **Result:** Audit-direction only (REST read, free plans, no Enterprise gate) — verify before automating writes; Plugin-API render named as an ungraded semester-build candidate. The human-adjudication gate (every trace row) is the exercise's P1 lesson: extraction and table-completeness are machine work; whether a match is *true* is not. Recipe-with-evidence gives students a legitimately promoted recipe and dogfoods the gaps→build loop.
- **Open issues:** not yet run against a real student board (FigJam vs design-file node types asserted, not verified — first real run should confirm STICKY/TEXT handling); positioned as a lab between A1 and A2, pending author confirmation; quartile tie rule still open from Exercise One.

## 2026-06-12 — Exercise One Step 5 rewritten: snapshot-or-build

- **Recipe:** manual (author-directed after course-data review)
- **Inputs:** Canvas export of INFO 7375 (Figma appears in 10 of 15 assignments; A6/A7 "Updated Figma Board Link" = the board is a running surface); author decisions: Exercise One runs mid-semester so most students already have an A1 board; Figma craft work removed from this exercise; Exercise Two will be dedicated to Madison↔Figma
- **Outputs:** Exercise One Step 5 rewritten — students with an existing board snapshot it (dated, in the fork) and run one reconciliation pass (each board claim → `brand/` pointer or *flagged untraceable*); students without one hand-build the minimal version; either way logged as a snapshot. Header, rubric line 11, and what-can-go-wrong row updated to match.
- **Result:** Step 5 no longer violates the exercise's own thesis (a hand-rendered board is a manual crossing producing a snapshot — the drift problem, committed by the exercise itself). Pre-existing boards are the better specimen: board-first/truth-second means untraceable claims already exist, and they become Exercise Two's first test data.
- **Open issues:** Exercise Two (Madison reads the board via Figma REST, audits traceability against `brand/`) not yet drafted; decide whether it backs A2 or sits as a lab between A1 and A2; audit-only vs. optional Plugin-API render.

## 2026-06-12 — Added 20/5 grading scheme to Exercise One

- **Recipe:** manual (author-specified)
- **Inputs:** author's grading design (20 mechanics / 5 Glimmer); Glimmer framework chapter (guest speaker's parallel material — five reasoning dimensions, one-question revision)
- **Outputs:** Grading section in `docs/exercises/exercise-01-brand-personal-layer.md` — 12 itemized mechanical components summing to 20 (partial completion grades cleanly), Glimmer 5 points ranked by depth of reasoning against the cohort (top quartile 4–5, descending), with the low-effort cap (a shallow cohort lands at 1–2 regardless of relative rank)
- **Result:** Mechanics = conformance (checkable line items); Glimmer = adequacy (TA/prof judgment on five dimensions, norm-referenced). One-question AI pre-review noted as instructor's option, not requirement.
- **Open issues:** quartile banding needs a tie/borderline rule once a real cohort exists; whether the cap announcement changes cohort behavior is its own little experiment.

## 2026-06-12 — Created Exercise One (brand personal layer)

- **Recipe:** manual (author-directed after design discussion)
- **Inputs:** the-reallocation-engine Tutorial 00 pattern; INFO 7375 Assignment 1; author decisions: media targeted by *aspiration* (financial engineer ≠ PhD student ≠ contractor — derive, don't ask); more evidence the better *when cited*; self-ratings = private personal reflection (combinable later, by choice); positioning via Dunford frame + optional Jungian/archetype instruments labeled as the imperfect self-tests they are
- **Outputs:** `docs/exercises/exercise-01-brand-personal-layer.md`; DOMAIN.md section added
- **Result:** Assignment 1's rubric lines now each have a checkable artifact (`brand/` = truth, Figma = report); the Part 2 project proposal derives from gaps.md's Madison-build column instead of floating free; migration rule gives the semester its loop (build ships → resume.json entry → published to target medium → gap row deleted).
- **Open issues:** `brand/private-reflection.md` gitignore line assumes student forks adopt it — sync/manifest question later; exercise not yet run against a real student record; Madison-monitor step optional pending recipe status promotion.

## 2026-06-12 — Refactored to mirror the-reallocation-engine (Mycroft pattern)

- **Recipe:** manual (author-directed; executed by agent)
- **Inputs:** the-reallocation-engine/MYCROFT.md (constitution pattern); survey of recipes/ vs conductor/ vs skills/ (recipes/ uniformly newest)
- **Outputs:** `MYCROFT.md` (vendored, v0.1.0 — Madison is Mycroft's second domain instance), `DOMAIN.md` (new), `CLAUDE.md`/`AGENTS.md` rewritten as pointers, lifecycle frontmatter (status: DRAFT) added to all 48 recipes, `logs/RUN_LOG.md` established as canonical log
- **Result:** Triplication resolved — `conductor/` (older duplicates of 16 recipes) deleted; `skills/` dissolved: n8n provenance files + old `_shared.md`/`README.md` moved to `pantry/n8n-provenance/`, old RUN_LOG content preserved below. `cover.jpg.placeholder` and empty `_working/` removed.
- **Open issues:** recipes carry `data/raw`/`data/verified` paths — unlike the reallocation engine, those directories EXIST here (the v2 layout was partially built); verify which recipes actually ran (see `logs/gate-decisions/`, `logs/student-recipe-evidence/`) and promote their status above DRAFT with evidence. `scripts/` holds cowork-* prompt files rather than code — DOMAIN.md describes this honestly; consider moving prompts to recipes/ or docs/ later. README still book-centric; docs/repo-structure.md not yet reconciled with MYCROFT.md.

---

# Prior log (from skills/RUN_LOG.md, preserved verbatim)

# Run Log

Use this file for meaningful skill runs, blockers, generated artifacts, and
workflow changes.

## Template

```markdown
## YYYY-MM-DD -- Short task name

- **Skill:** ...
- **Inputs:** ...
- **Commands:** ...
- **Outputs:** ...
- **Result:** ...
- **Open issues:** ...
```

## 2026-06-06 -- Convert pantry n8n workflows to Madison recipes

- **Skill:** n8n workflow conversion to Madison recipe/conductor/report/script artifacts.
- **Inputs:** Ten n8n workflow JSON files in `pantry/`; existing Madison recipe conventions in `recipes/`, `conductor/`, and `reports/templates/`.
- **Commands:** Generated recipe, conductor, report template, and node-level Python adapters; compiled all scripts; scanned for hardcoded credentials and external-read imports outside ingest.
- **Outputs:** `logs/n8n-pantry-conversion-summary.json`, ten new recipe files, ten new conductor files, ten new report templates, and 98 new scripts across `scripts/ingest/`, `scripts/gigo/`, and `scripts/tools/`.
- **Result:** Conversion complete; 138 total Madison ingest/gigo/tool scripts compile with zero failures; no credential literals or GIGO/tool network imports found.
- **Open issues:** Generated adapters are deterministic local handoff implementations; live external source calls and production side effects still require dialogic test runs and explicit human approval.

## 2026-06-06 -- Rename and sharpen pantry n8n recipes

- **Skill:** Human-readable recipe correction for converted pantry n8n workflows.
- **Inputs:** User review feedback, ten converted pantry recipes, source n8n JSON node URLs/paths/code labels.
- **Commands:** Rewrote recipe titles, slugs, source inventories, node classifications, phase gates, human checks, conductor steps, report templates, and node-level script names; redacted credential-bearing source URLs; recompiled scripts; rescanned credentials and GIGO/tool network imports.
- **Outputs:** Meaningful workflow names such as `data-center-hiring-signal-monitor`, `brand-reputation-news-intelligence-pipeline`, and `accessibility-standards-and-rules-monitor`; refreshed `logs/n8n-pantry-conversion-summary.json`.
- **Result:** Correction complete; 135 total Madison ingest/gigo/tool scripts compile with zero failures; no credential literals or GIGO/tool network imports found in generated recipe/script surfaces.
- **Open issues:** Original n8n JSON files remain untouched and may still contain submitted machine paths or embedded credentials; recipes mark those as human-gated `[TO DO]` replacements before live execution.

## 2026-06-06 -- Build comprehensive student project recipes

- **Skill:** Student-level Madison project recipe synthesis from workflows, documentation PDFs, CSVs, HTML reports, and zip outputs.
- **Inputs:** Pantry A2/A3/A4 PDFs, n8n JSON workflows, CSV outputs, HTML reports, and expanded zip submissions for ten students.
- **Commands:** Extracted PDF text with bundled `pypdf`, summarized CSVs with bundled `pandas`, parsed HTML/zip artifacts, built per-student evidence caches under `logs/student-recipe-evidence/`, and wrote one stranger-readable recipe per student under `recipes/students/`.
- **Outputs:** Ten student recipes plus `logs/student-recipes-summary.json`.
- **Result:** Student recipes created with student name, project purpose, long-term goal, evidence inventory, data sources, verification, quality checks, step-by-step AI/human workflow, reports/logs, phase gates, stop conditions, and `[TO DO]` production gaps.
- **Open issues:** Several original submissions contain local machine paths, zipped artifacts, row-count discrepancies, or embedded credentials in source workflows; student recipes flag these as `[TO DO]` before production.
