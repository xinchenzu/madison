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

`docs/exercises/exercise-01-brand-personal-layer.md` — Exercise One (backs INFO 7375 Assignment 1): build `brand/` — attested `resume.json` (same convention as other Mycroft domains), `brand.yml` (aspiration → audience → Dunford-frame positioning, instruments cited as the self-tests they are), media targets *derived* from aspiration-keyed evidence, and `gaps.md` with every gap mapped to the Madison build that would close it (the semester project proposal falls out of the top row). The Figma board is snapshotted (or minimally hand-built) and logged as what it is — a snapshot that will drift; the files are the truth.

`docs/exercises/exercise-02-madison-talks-to-figma.md` — Exercise Two (lab between A1 and A2): the **board-audit recipe**. Madison reads the student's Figma board over the REST API (token in `.env`, never in chat) and machine-checks that every board claim traces to a `brand/` artifact: ping → dated fixture → `board-claims.json` → agent-proposed trace table → **human adjudication of every row** (the gate). Untraceable claims resolved with reasons; the whole thing wrapped as `recipes/board-audit.md` with run evidence — most students' first recipe promoted above DRAFT. Conceptual source text: the Figma API book (chapters 1–3: snapshot/drift, what the API exposes, the file as document graph). Write-direction (Plugin API render) deliberately out of scope — verify before automating writes.

## First win (zero-config)

Read one recipe end to end (`recipes/marketmind.md`), then its run evidence in `logs/marketmind-run.json` and `logs/gate-decisions/` — this repo's distinguishing feature is that the trail already exists; learn the system by reading a real run before attempting one.
