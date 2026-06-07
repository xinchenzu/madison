# Madison Performance Reporting

## Purpose

Generates post-launch performance reporting after a campaign has been live for a defined window. The Analytics - Insights Studio Agent queries cross-channel performance data and produces comparative trend breakdowns.

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Launch approval | JSON | `logs/gate-G5-launch.json` | Yes |
| Campaign ID | String | `[TODO: DATA SOURCE] campaign tracking source` | Yes |
| Reporting window | Date range | `[TODO: DEFINE] define window` | Yes |
| Insights Studio data | Query result | Madison Insights Studio | Yes |

## Phase Gates

1. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/madison-performance-reporting.md`.
   Human capacity: [PA].
2. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run madison-performance-reporting --mode dialogic --sample`.
   Human capacity: [TO].
3. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/madison-performance-reporting data/verified/madison-performance-reporting -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
4. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/madison-performance-reporting.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify launch record. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: logs/gate-G5-launch.json and campaign ID.
   Output: reporting readiness fields: campaign_id, reporting_window, launch_approval_status.
   Where output goes: logs/gate-decisions/.
2. Step name: Generate performance report. Labor: AI with Human review.
   Script called: `scripts/tools/madison-tool-performance-report.py`
   Input: campaign ID, reporting window, Insights Studio data.
   Output: markdown report sections plus JSON log fields: campaign_id, window_start, window_end, channel_metrics, trend_breakdown, propensity_score_limitation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/madison-performance-reporting-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/madison-performance-reporting-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Madison Performance Reporting` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if campaign ID is missing or ambiguous.
- Stop if reporting window is undefined.
- Stop if Insights Studio access is not approved.
- Stop if report omits the limitation about propensity-score outcome tracking.
- Stop if the tool attempts to mutate campaign state.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run madison-performance-reporting --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run madison-performance-reporting --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Generate performance report | `snickerdoodle run madison-performance-reporting --step generate-performance-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate madison-performance-reporting --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate madison-performance-reporting --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate madison-performance-reporting --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Generate performance report | `scripts/tools/madison-tool-performance-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/madison-performance-reporting/` | JSON |
| Verified data | `data/verified/madison-performance-reporting/` | JSON |
| Agent log | `logs/madison-performance-reporting-[DATE].json` | JSON |
| Human report | `reports/generated/madison-performance-reporting-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |
