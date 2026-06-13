# DOMAIN — Madison Plus One

**Domain:** branding and marketing intelligence — monitor pipelines (brand reputation, market signals, accessibility standards, hiring signals), content and concierge agents, and student-built intelligence projects; plus the *Madison Plus One* book manuscript and course materials (Branding & AI; INFO 7375; Principles of Marketing).
**Governed by:** `MYCROFT.md` (read it first — Madison is Mycroft's second domain instance, after the-reallocation-engine). This file states what is specific to this repository.

## What this domain does

Turns marketing-relevant signals into verified, auditable intelligence: ingest from feeds and sources, validate into a verified layer, run analysis/monitor recipes, and produce reports for human judgment. The book teaches the method (fluency is the first sign of trouble; the human's irreducible part); the courses supply the student projects that become recipes.

## Layout (actual, current — post-refactor 2026-06-12)

| Path | What it is |
|---|---|
| `data/raw/`, `data/verified/` | **the two-layer data architecture — exists here** (unlike the reallocation engine, where it is roadmap); nothing enters verified without validation |
| `data/madison-main/` | upstream source export (n8n workflows, originals) — provenance, do not rewrite |
| `recipes/` | the operating surface: 48 recipes — monitor/pipeline recipes, agent recipes (marketmind, content-agent, ai-concierge, restaurant-agent…), `madison-*` brand recipes, and student-named project recipes (flat in this directory). All carry lifecycle frontmatter, currently `status: DRAFT` |
| `pantry/n8n-provenance/` | the original n8n-derived skill files + old shared contract (provenance from the skills/ era) |
| `logs/` | RUN_LOG.md (canonical log), `gate-decisions/`, `student-recipe-evidence/`, run artifacts (JSON responses, reports) — **this repo has real run history** |
| `scripts/` | currently cowork-* *prompt* files, not code — a naming debt: prompts may belong in recipes/ or docs/; decide before adding real code here |
| `chapters/` | the book (early draft) + course subdirectories |
| `docs/`, `writing-tools/`, `d3/`, `images/` | documentation, authoring tools, figures |

## Lifecycle status (honest)

All 48 recipes are marked DRAFT as a starting point, but `logs/` contains gate decisions and run artifacts predating the lifecycle system — several recipes (marketmind, content-agent, restaurant-agent, survey-analysis, intelligence-agent, ai-concierge) have evidence of real runs. **Next maintenance task:** match `logs/` evidence to recipes and promote statuses with citations, rather than re-running blind.

## Known gaps and debts (2026-06-12)

1. `scripts/` contains prompts, not code — naming/placement decision pending.
2. README is book-centric and predates MYCROFT.md — needs a pointer and an architecture section.
3. `docs/repo-structure.md` not yet reconciled with the Mycroft layout.
4. Student recipes flag embedded credentials, local paths, and row-count discrepancies in original submissions (see RUN_LOG 2026-06-06) — review before any production run.
5. The old `conductor/` (deleted, in git history) and `pantry/n8n-provenance/` represent two earlier generations of the same recipes — recipes/ is canonical; do not resurrect without diffing.

## Privacy

Student-named recipes in `recipes/` and `logs/student-recipe-evidence/` contain student names and project details; original submissions in `data/madison-main/` may contain credentials and personal paths. Review before publishing or syncing anything outward.

## Course exercises

Guest-lecture weekly sessions, each 25 pts (20 mechanics + 5 capped Glimmer), each a live-demo with a worked specimen. **Numbering tracks the Canvas assignment it backs:** exercise-0**N** backs **A**N (Figma is `01a`, a lab off A1). The `04` slot is intentionally empty — no exercise backs **A4** (the AI/build session) yet; that's the natural next one.

`docs/exercises/exercise-01-brand-personal-layer.md` — Exercise One (backs INFO 7375 Assignment 1): build `brand/` — attested `resume.json` (same convention as other Mycroft domains), `brand.yml` (aspiration → audience → Dunford-frame positioning, instruments cited as the self-tests they are), media targets *derived* from aspiration-keyed evidence, and `gaps.md` with every gap mapped to the Madison build that would close it (the semester project proposal falls out of the top row). The Figma board is snapshotted (or minimally hand-built) and logged as what it is — a snapshot that will drift; the files are the truth.

`docs/exercises/exercise-01a-madison-talks-to-figma.md` — Exercise 1A (lab between A1 and A2): the **board-audit recipe**. Madison reads the student's Figma board over the REST API (token in `.env`, never in chat) and machine-checks that every board claim traces to a `brand/` artifact: ping → dated fixture → `board-claims.json` → agent-proposed trace table → **human adjudication of every row** (the gate). Untraceable claims resolved with reasons; the whole thing wrapped as `recipes/board-audit.md` with run evidence — most students' first recipe promoted above DRAFT. Conceptual source text: the Figma API book (chapters 1–3: snapshot/drift, what the API exposes, the file as document graph). Write-direction (Plugin API render) deliberately out of scope — verify before automating writes.

`docs/exercises/exercise-02-target-gap-prd-recipe.md` — Exercise Two (one 25-pt live-demo, backs A2): target → gap → PRD → recipe-at-DRAFT, the A2 chain mapped onto the Mycroft lifecycle. `targets.json` (machine captures + SOC/O*NET-maps a real posting; human selects top-3, attests the SOC code), the gap table *run* by the agent and *audited* by the student (three correction directions), the PRD *defended* from resume+aspiration+target (no fun-but-orphaned build), the architecture as a recipe at `status: DRAFT` with real attested n8n nodes + a WON'T-build list. Worked specimen: `examples/targets.json`. Canonical-profile aggregation is the multi-week arc (N postings → the lane's real demands).

`docs/exercises/exercise-03-gather-validate-defend.md` — Exercise Three (one 25-pt live-demo, backs A3): the **build** — the Exercise Two DRAFT recipe walked to `RUNNABLE-SAMPLE`. A working n8n pipeline that *gathers* from 3+ Tier-1 sources **and validates** (the `data/raw → data/verified` gate: dedup, date-standardize, critical-field, **coercion audit**), then the graded human work: the **data defense** = conformance numbers (machine) + adequacy argument (human — "why exactly N rows?", fitness scorecard, cleaning report with the *assumption* column filled). Forcing function: *you cannot defend what you did not validate* — kills quantity-over-quality structurally. Reference texts: *GIGO* (validation tooling — coercion audit, cleaning report) and *Computational Skepticism for AI* (interrogation — four skeptical moves, "why N rows", access/boundary). Worked specimen: `examples/data-defense.md`. Ships the data layer; the agent that consumes it is A4 (`RUNNABLE-SAMPLE → VERIFIED`).

`docs/exercises/exercise-05-conductor-brief.md` — Exercise Five (one 25-pt live-demo, backs A5 "The Conductor Brief"): the AI-age strategic brief — the tool stated **once, in two forms** for **two audiences** (P5). A **narrative brief** (`brief.md` — for the boss/client: the sentence, user, stories, the One Thing) and a **structured config** (`brand_config.json` + `gates.yml` — for the conductor: data contract, good/bad-looks-like as conformance rules). The conductor runs against the **config, not the prose**, on real Exercise Three data; the graded artifact is the **divergence log** — every narrative claim reconciled against config + run as ALIGNED / DRIFT / GAP, each resolved. Core teaching: the prose is the alibi, the config is the actuator, vagueness is *hallucinated* not filled in, and the differentiator you're proudest of is worthless until it's in the actuator. The sentence (A5 Part 1) is the *seam* — the one place both audiences read the same words. The brief is the **intent layer** above the PRD; formalizing the gates is what lets the recipe reach `RUNNABLE-LIVE`. Worked specimen: `examples/conductor-brief-divergence.md` (a DRIFT caught on camera — the whole "grades source reliability" One Thing lived only in the prose).

`docs/exercises/exercise-05a-wrap-your-tool.md` — Exercise 5A (one 25-pt live-demo, backs A5A "Wrap Your Tool", Path A): ship the tool in the fenced `templates/wrap-your-tool/` scaffold at a public URL, run 3 real-stranger user tests, produce the **usability divergence log** — what the Conductor Brief's Part-2 user *promised* to do vs. what real users *actually* did (ALIGNED / DRIFT / GAP), then sharpen the One Thing + a 2×2. The real user is the conductor; their confusion is the run. Fence discipline (clean diff — didn't let the conductor break the scaffold) is graded. Worked artifacts pending first cohort test.

`docs/exercises/exercise-05b-build-the-recipe.md` — Exercise 5B (one 25-pt live-demo, backs A5B "Build the Recipe", Path B): the twin of 5A. Where 5A makes the tool *visible* (a URL a stranger uses), 5B makes it *accountable* (a recipe a conductor runs and knows when to stop). Six moves: map the pipeline onto the **four layers** (external → `data/raw` → `data/verified` → `logs/reports`) with a contract per handoff → **extend** the Ex-Five `brand_config.json` (add `local_path`, `judgment_type`, `conductor_note` — don't rebuild) → name the **five judgment types** at every gate (PA/PF/TO/IJ/EI — "human reviews here" is an unfinished gate; *which* human deciding *what*) → write the **recipe file** a stranger conductor could run (exec summary + four layers + typed phase gates + typed TODOs) → the **audit loop** (`/snickerdoodle` → Claude Code adds typed TODOs → resolve each with a decision → `/claude` confirms) → log. Core teaching: *conductor-ready is named-stops, not flow* — the machine finds the gaps, the human types and closes them. Worked specimen: `examples/recipe-and-config-walkthrough.md` (same brand-reputation pipeline as Ex 3 + Ex 5; the audit catches a `Hard stop` gate with no decision-maker named behind it). v1 draft, will change after a cohort runs it.

`templates/wrap-your-tool/` — the **fenced React/Vercel/Neon template** (the "shovel" for A5A): a working Next.js 14 + Neon scaffold deployed as-is, with `CLAUDE.md` as the machine-facing actuator (DO-NOT-TOUCH zones *with reasons*, one open seam in `lib/tool.ts`). Teaches the habit gradio/streamlit can't — working inside a professional codebase you didn't write. v1 draft, will change after testing.

## First win (zero-config)

Read one recipe end to end (`recipes/marketmind.md`), then its run evidence in `logs/marketmind-run.json` and `logs/gate-decisions/` — this repo's distinguishing feature is that the trail already exists; learn the system by reading a real run before attempting one.
