# Madison Pre-Launch Simulation

## Purpose

Runs a read-only pre-launch forecast for the approved campaign before budget commitment. The Simulator, using the Athena Agentic App, models expected outcomes such as open rate, CTR, conversion, and revenue.

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| QA gate | JSON | `logs/gate-G4-qa.json` | Yes |
| Campaign package | JSON/files | Verified campaign, copy, and QA outputs | Yes |
| Propensity score metadata | JSON | Madison score metadata | No |

## Phase Gates

1. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/madison-pre-launch-simulation.md`.
   Human capacity: [PA].
2. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run madison-pre-launch-simulation --mode dialogic --sample`.
   Human capacity: [TO].
3. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/madison-pre-launch-simulation data/verified/madison-pre-launch-simulation -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
4. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/madison-pre-launch-simulation.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify QA approval. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: logs/gate-G4-qa.json.
   Output: approval check with gate status and reviewer_capacity.
   Where output goes: logs/gate-decisions/.
2. Step name: Run simulator forecast. Labor: AI with Human gate.
   Script called: `scripts/tools/madison-tool-simulator-forecast.py`
   Input: approved campaign package and score metadata.
   Output: forecast JSON fields: open_rate_estimate, ctr_estimate, conversion_estimate, revenue_estimate, score_age_days, staleness_warning, assumptions.
   Where output goes: logs/.

## Output Contract

### Agent output
File: `logs/madison-pre-launch-simulation-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/madison-pre-launch-simulation-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Madison Pre-Launch Simulation` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if Gate G4 is missing or not approved.
- Stop if the simulator tool attempts live activation, budget commitment, or production mutation.
- Stop if score age is unknown in production without `[TODO: DEFINE] confirm score refresh date`.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run madison-pre-launch-simulation --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run madison-pre-launch-simulation --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Run simulator forecast | `snickerdoodle run madison-pre-launch-simulation --step run-simulator-forecast` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate madison-pre-launch-simulation --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate madison-pre-launch-simulation --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate madison-pre-launch-simulation --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Run simulator forecast | `scripts/tools/madison-tool-simulator-forecast.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/madison-pre-launch-simulation/` | JSON |
| Verified data | `data/verified/madison-pre-launch-simulation/` | JSON |
| Agent log | `logs/madison-pre-launch-simulation-[DATE].json` | JSON |
| Human report | `reports/generated/madison-pre-launch-simulation-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |
