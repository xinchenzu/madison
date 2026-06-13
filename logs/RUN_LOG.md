# Recipe Run Log

Human-readable history for recipe-driven work. Short, concrete entries; no
secrets, personal contact details, or private notes.

## 2026-06-13 — Drafted Exercise 5B "Build the Recipe" (Path B twin of 5A) + worked specimen

- **Recipe:** manual (author-directed). Backs Canvas Assignment 5B; the conductor-ready-recipe counterpart to 5A's wrap-the-tool. Slots into the empty A5B-side of the A5 fork — A5=Conductor Brief (ex-05), A5A=Wrap (ex-05a, Path A), A5B=Recipe (ex-05b, Path B).
- **New files:** `docs/exercises/exercise-05b-build-the-recipe.md` (six moves, 25 pts = 20 itemized mechanics + 5 capped Glimmer, live-demo format) and `examples/recipe-and-config-walkthrough.md` (worked specimen on the same brand-reputation pipeline as the Ex-3 data defense + Ex-5 Conductor Brief — one coherent project end to end).
- **What's genuinely new vs. reused:** config (`brand_config.json`) and verified data already exist from ex-05/ex-03, so 5B frames those as *extend*, not rebuild. The new nodes: the **four-layer map** with a contract per handoff; the **five judgment types** (PA/PF/TO/IJ/EI) named at every gate (orthogonal to the existing `response:` field — `response` = what happens, `judgment_type` = who owns the call); the **five typed TODOs** (DATA SOURCE/DEFINE/DEV/APPROVE/REPORT FIELD); the **audit loop** (`/snickerdoodle` → Claude Code → `/claude`, Nik's tooling named but the pattern kept general).
- **Spine preserved:** machine does the fluent work (audits the recipe, proposes typed TODOs); human does the irreducible work (resolves them, names the judgment type, decides when to stop). The demo's modeled moment: the audit catches a `Hard stop` gate with no decision-maker behind it — a recipe that *runs* vs. one that *knows when to stop and who decides*.
- **DOMAIN.md** course-exercises list updated with the ex-05b entry.
- **Status:** v1 draft; not given for a couple of weeks; expected to change after a cohort runs it.

## 2026-06-12 — Renumbered exercises so number = backed assignment

- **Recipe:** manual (author-directed). The Figma exercise was an inserted *lab*, which had decoupled exercise-number from Canvas-assignment-number (e.g. exercise-03 backed A2).
- **Change:** Figma → `01a` (a lab off A1); the rest realigned so **exercise-0N backs AN**. File renames: `exercise-02-madison-talks-to-figma` → `exercise-01a-…`; `exercise-03-target-gap-prd-recipe` → `exercise-02-…`; `exercise-04-gather-validate-defend` → `exercise-03-…`. (05-conductor-brief and 05a-wrap-your-tool unchanged.) In-text teaching names remapped with collision-safe sed (Figma "Exercise Two" → "Exercise 1A"; target-gap "Exercise Three" → "Exercise Two"; gather-validate "Exercise Four" → "Exercise Three"); filename references in DOMAIN.md + examples updated; DOMAIN course-exercises list + numbering note updated, plus the previously-missing 05a + template entries added.
- **Mapping (new):** 01=A1 · 01a=Figma lab · 02=A2 · 03=A3 · **04=A4 (empty — no exercise yet)** · 05=A5 · 05a=A5A.
- **Result:** number now tracks the assignment it backs; the A4 gap (AI/build session) is visible as an empty slot rather than hidden in the count. Verified: titles, cross-references, no stray sentinels, "Exercise Four" fully retired (only A4 *assignment* refs remain). *Note: prior dated log entries below kept as-is (append-only) and still name "Exercise Three/Four/Five" as drafted that day — this entry is the mapping of record.*

## 2026-06-12 — Drafted the Wrap-Your-Tool template + Exercise 5A (v1, will change after testing)

- **Recipe:** manual (author-directed after a brainstorm: gradio/streamlit are *dated*, not wrong — the friction calculus inverted now that CLI-adapts-a-working-template collapsed the cost of the better artifact)
- **Inputs:** Assignment 5A (Path A — wrap the tool in a usable UI, deploy to a public URL, run 3 real user tests, sharpen positioning); author decision to provide a fenced React/Vercel/Neon template as the "shovel" (students adapt working code, conductor reads working code well) rather than gradio/streamlit; the DO-NOT-TOUCH-with-reasons pattern (a fence with a reason holds; a bare rule doesn't); the connection that the template's `CLAUDE.md` is the machine-facing actuator (Conductor Brief two-audience split, inverted — Ex5 = author the fence, 5A = work inside a fence you didn't write); the insight that the real user is now the conductor and their confusion is the run
- **Outputs:** `templates/wrap-your-tool/` — a working Next.js 14 (App Router) + Vercel + Neon template: `CLAUDE.md` (the fence — map of touch/don't-touch zones, DO-NOT-TOUCH reasons, conductor gates), `lib/tool.ts` (the ONE open seam — student's ToolInput/ToolResult/runTool), `app/page.tsx` (UI, student zone), `lib/db.ts` + `app/api/run/route.ts` (fenced plumbing: Neon serverless HTTP driver to avoid pool exhaustion, plain-English error envelope), bundled `data/sample.json`, pinned build config, README (the human-facing alibi). Deliberately small failure surface — plain CSS (no Tailwind build step), DB optional (no DATABASE_URL → persistence no-ops, app still runs). Plus `docs/exercises/exercise-05a-wrap-your-tool.md` (6 moves: wire into the fence → deploy → 3-stranger user test → the **usability divergence log** ALIGNED/DRIFT/GAP → sharpen the One Thing + 2×2 → log; 20/5)
- **Result:** The template teaches the one habit gradio/streamlit structurally can't — working inside a professional codebase you didn't write, respecting fences, not "improving" what isn't yours — and produces a portfolio-grade artifact at near-gradio cost. 5A's graded forcing function is the usability divergence log: what the Conductor Brief *promised* the Part-2 user would do vs. what 3 real strangers *actually* did (the human version of Ex5's config-silence GAPs). The DRIFT that matters is the differentiator no tester noticed — "you don't have a differentiator, you have a paragraph." Fence discipline (clean diff) is graded, enforcing the Brutalist phase-gate logic. Imports verified consistent; full Next build not run here (no npm install) — first real test is a cohort deploy.
- **Open issues:** v1 — explicitly will change after testing; persistence optional-vs-required for accumulating-data tools is the flagged open question in CLAUDE.md; pinned versions (Next 14.2.5, Neon serverless 0.10.x) deliberate — re-pin, don't upgrade, if a future build breaks; template lives in the madison repo for now but is really a Humanitarians AI shovel (could be extracted/distributed); gradio/streamlit stays as the documented fallback for students without the JS stack.

## 2026-06-12 — Drafted Exercise Five (The Conductor Brief)

- **Recipe:** manual (author-directed; design settled in a brainstorm on the two-audience nature of an AI-age strategic brief)
- **Inputs:** INFO 7375 Assignment 5 ("The Conductor Brief" — one-sentence positioning, user+stories, data contract, good/bad-looks-like phase gates, the One Thing); author's sharpening that the two audiences want opposite *forms* — boss/client want narrative/intent/why, the AI wants JSON/YAML/RULES.md/declarative rules — and that for those entering the AI world this is the literacy gap; the insight that vagueness is *hallucinated* not filled in (the AI completes underspecified parts from its prior), so the brief is executable specification, not just communication; design converged on: narrative brief + structured config + run conductor against the config, with **divergence made visible and graded**
- **Outputs:** `docs/exercises/exercise-05-conductor-brief.md` (6 moves: the sentence-as-seam → `brief.md` narrative → `brand_config.json` + `gates.yml` config → conductor runs against the config → the **divergence log** ALIGNED/DRIFT/GAP → log; one 9-line/20-pt mechanics table + 5 comparative Glimmer); `docs/exercises/examples/conductor-brief-divergence.md` (worked specimen — a DRIFT caught on camera: the "grades source reliability" One Thing lived only in the prose; the actuator ranked by mention count from its prior; fixed by putting reliability in the config, not editing the alibi)
- **Result:** The AI-age strategic brief framed as P5 (two customers) made load-bearing: same intent, two *forms*, one per reader. New named bug class — narrative-intent and config-intent diverging silently (boss approves the prose, AI builds the rules). "The prose is the alibi, the config is the actuator; the conductor obeys the actuator." The graded forcing function is the divergence log: attestation shifts from "I checked" to "the run proved the brief — or caught it lying." The sentence (A5 Part 1) is the irreducible seam — both audiences read the same words. Brief = intent layer above the PRD (strategic intent vs. PRD's technical intent); formalizing the gates is what enables `RUNNABLE-LIVE`. Entry-level version of the Brutalist (`DESIGN.md`/`CLAUDE.md`) and Boondoggling (Minion/Gru) two-form split — first time a branding student authors for the AI in its native format.
- **Open issues:** not yet run live or by a student; "zero divergence" flagged as a red flag, not an A (usually means the run was judged against the prose's vibe, not the config) — worth watching in real cohorts; the recipe lifecycle promotion to RUNNABLE-LIVE (human clears each written gate) is enabled here but the live run on real data is still A4/later; quartile tie rule open across all five exercises; the five exercises now span A1→A5 (One: brand layer / Two: audit / Three: spec / Four: build+validate / Five: strategic brief) — a build session (RUNNABLE-SAMPLE→VERIFIED) backing A4 remains the natural next.

## 2026-06-12 — Drafted Exercise Four (Gather, Validate, Defend)

- **Recipe:** manual (author-directed; design settled across an extended discussion incl. GIGO + Computational Skepticism integration)
- **Inputs:** INFO 7375 Assignment 3 ("Build Your Data Pipeline" — gather AND validate, 3+ Tier-1 sources, 50–200 clean records, quality-over-quantity, collect-once); the *GIGO* book (defect taxonomy, coercion audit, five-column cleaning report, fitness scorecard) as validation tooling; the *Computational Skepticism for AI* book (four skeptical moves, "why N rows", access/boundary, fluency trap, strategic-delegation table) as interrogation heuristics; Madison's real two-layer architecture (`data/raw`/`data/verified` exist); n8n node types from `pantry/n8n-provenance/`; author framing: "first working recipe is a data gathering AND validating tool; they MUST defend the quality"
- **Outputs:** `docs/exercises/exercise-04-gather-validate-defend.md` (5 moves: gather+cite → validate at the raw→verified gate → audit numbers → defend adequacy → promote recipe+log; one 10-line/20-pt mechanics table + 5 comparative Glimmer mapping A3's Excellence section); `docs/exercises/examples/data-defense.md` (worked specimen on the brand-reputation pipeline — provenance table, conformance audit incl. a real coercion-audit narrative, adequacy argument with "why exactly 150 rows", fitness scorecard, assumption-column cleaning report)
- **Result:** The build week — promotes Ex3's DRAFT recipe to RUNNABLE-SAMPLE. "Defend the quality" split exactly along P1: conformance (audit numbers, machine) + adequacy ("is this the RIGHT data for my problem", human). Forcing function "you cannot defend what you did not validate" makes quality-over-quantity structural, not exhortative. Two reference texts slot cleanly: GIGO at the validation node, Computational Skepticism at the defense — conformance and adequacy each with its own text. Validation is a *node in the workflow* (the raw→verified gate), worth 3+2 of the mechanics points. Honest lifecycle: ships the data layer at RUNNABLE-SAMPLE; full gap closure (agent consumes data) is A4.
- **Open issues:** not yet run live or by a student; coercion-audit recovery of relative-time `pubDate` left as a `[TODO]` in the specimen (models the RUNNABLE-LIVE promotion); access/boundary flag (RSS items link off-schema) noted for a privacy/licensing review pass; the build session (RUNNABLE-SAMPLE → VERIFIED, agent runs on the data, gap migrates to resume.json) is the natural Assignment-4 exercise, not yet drafted; quartile tie rule still open across all four exercises.

## 2026-06-12 — Drafted Exercise Three (Target, Gap, PRD, Recipe)

- **Recipe:** manual (author-directed; design settled across an extended discussion, captured in session notes)
- **Inputs:** INFO 7375 Assignment 2 (all four parts: target / gap analysis / PRD / technical architecture); the-reallocation-engine SOC/O*NET pattern (students have awareness access); real n8n node types surveyed from `pantry/n8n-provenance/` and `recipes/` (scheduleTrigger, httpRequest, rssFeedRead, code, set, if, merge, googleSheets, respondToWebhook, openAi…); recipe lifecycle frontmatter from MYCROFT.md; author decisions: ALL of A2 is ONE 25-pt live-demo exercise (Bear runs it live on his own example, students have the recording + one week)
- **Outputs:** `docs/exercises/exercise-03-target-gap-prd-recipe.md` (6 moves: capture+SOC-map target → run+audit gap join → argue PRD from evidence → spec recipe at DRAFT → render+re-audit board → log; one 20-line/20-pt mechanics table + 5 Glimmer weighted to PRD defensibility); `docs/exercises/examples/targets.json` (worked live-demo specimen — two-layer schema: machine captures+SOC/O*NET-maps, human selects+attests; empty canonical_profile showing the multi-week aggregation arc)
- **Result:** The four A2 parts map onto the Mycroft chain — evidence (target+gap) → intent (PRD) → recipe-spec at DRAFT → (build week = the run). Three provenance disciplines reused in three costumes: SOC-attestation, PRD metric-sourcing, n8n node-existence — each the resume-import lesson again (extraction is fluent; the human attests). Gap table is RUN by the agent and AUDITED by the student (three correction directions), not hand-typed. PRD must be *defended* from resume+aspiration+target, killing the fun-but-orphaned build. Board-audit recipe from Exercise Two re-runs as the standing drift check.
- **Open issues:** not yet run live or by a student; `targets.json` lives in `brand/` per-student (gitignore/privacy consistent with Exercise One); non-job-seeker accommodation (lab opening / client brief as a valid target) stated in spirit but could be made explicit in a future pass; the build session (DRAFT → RUNNABLE-SAMPLE, gap migrates to resume.json) noted as the natural next guest exercise, not yet drafted; quartile tie rule still open across all three exercises.

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
