# Madison Campaign Construction

## Purpose

Builds the campaign skeleton from the approved brief and personas. The Campaign Builder Agent and Experience Builder and Insights Agent define channel mix, A/B test structure, send schedule, and journey branches.

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Client brief | JSON | `data/raw/madison-branding-marketing-pipeline/brief.json` | Yes |
| Verified personas | JSON | `data/verified/madison-branding-marketing-pipeline/personas-verified.json` | Yes |

## Phase Gates

1. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/madison-campaign-construction.md`.
   Human capacity: [PA].
2. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run madison-campaign-construction --mode dialogic --sample`.
   Human capacity: [TO].
3. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/madison-campaign-construction data/verified/madison-campaign-construction -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
4. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/madison-campaign-construction.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify persona approval. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: logs/gate-G2-personas.json.
   Output: approval check with gate status and reviewer_capacity.
   Where output goes: logs/gate-decisions/.
2. Step name: Build campaign structure. Labor: AI with Human gate.
   Script called: `scripts/gigo/madison-gigo-campaign-structure.py`
   Input: brief.json and personas-verified.json.
   Output: campaign-structure-verified JSON fields: channel_mix, ab_tests, send_schedule, journey_branches, budget_flags, ctv_threshold_status.
   Where output goes: data/verified/madison-branding-marketing-pipeline/.
3. Step name: Gate G3 review. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: campaign-structure-verified.json.
   Output: gate decision with structure changes, channel approvals, and approval status.
   Where output goes: logs/gate-G3-campaign-structure.json.

## Output Contract

### Agent output
File: `logs/madison-campaign-construction-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/madison-campaign-construction-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Madison Campaign Construction` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if Gate G2 is missing or not approved.
- Stop if requested channels are missing from the campaign structure.
- Stop if campaign branches cannot be mapped to personas or segments.
- Stop if CTV is included and budget threshold evidence is missing; add `[TODO: DEFINE] confirm Madison CTV minimums`.
- Stop if Gate G3 is not approved.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run madison-campaign-construction --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run madison-campaign-construction --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Build campaign structure | `snickerdoodle run madison-campaign-construction --step build-campaign-structure` |  |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate madison-campaign-construction --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate madison-campaign-construction --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate madison-campaign-construction --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Build campaign structure | `scripts/gigo/madison-gigo-campaign-structure.py` | gigo |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/madison-campaign-construction/` | JSON |
| Verified data | `data/verified/madison-campaign-construction/` | JSON |
| Agent log | `logs/madison-campaign-construction-[DATE].json` | JSON |
| Human report | `reports/generated/madison-campaign-construction-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |
