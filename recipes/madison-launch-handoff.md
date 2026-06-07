# Madison Launch Handoff

## Purpose

Assembles the complete launch package for human review. This recipe creates a launch-ready handoff JSON but never activates the campaign.

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Verified audience | JSON | `data/verified/madison-branding-marketing-pipeline/audience-verified.json` | Yes |
| Campaign structure | JSON | `data/verified/madison-branding-marketing-pipeline/campaign-structure-verified.json` | Yes |
| Copy variants | JSON/files | `copy-variants-verified.json` and email templates | Yes |
| QA report | JSON/markdown | QA outputs | Yes |
| Forecast | JSON/markdown | Simulator outputs | No |

## Phase Gates

1. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/madison-launch-handoff.md`.
   Human capacity: [PA].
2. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run madison-launch-handoff --mode dialogic --sample`.
   Human capacity: [TO].
3. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/madison-launch-handoff data/verified/madison-launch-handoff -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
4. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/madison-launch-handoff.md`.
   Human capacity: [EI].

## Steps

1. Step name: Assemble launch package. Labor: AI with Human gate.
   Script called: `scripts/tools/madison-tool-launch-handoff.py`
   Input: verified audience, campaign structure, copy variants, QA report, and forecast.
   Output: launch package JSON fields: audience_ref, campaign_structure_ref, copy_refs, qa_ref, forecast_ref, activates_campaign:false, missing_items.
   Where output goes: logs/.
2. Step name: Gate G5 launch approval. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: madison-launch-package JSON.
   Output: approval JSON fields: decision, reviewer_capacity, note, approved_at, activation_owner.
   Where output goes: logs/gate-G5-launch.json.

## Output Contract

### Agent output
File: `logs/madison-launch-handoff-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/madison-launch-handoff-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Madison Launch Handoff` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if required launch package components are missing.
- Stop if QA has open FAIL items.
- Stop if the handoff script attempts campaign activation.
- Stop if Gate G5 is not approved.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run madison-launch-handoff --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run madison-launch-handoff --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Assemble launch package | `snickerdoodle run madison-launch-handoff --step assemble-launch-package` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate madison-launch-handoff --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate madison-launch-handoff --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate madison-launch-handoff --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Assemble launch package | `scripts/tools/madison-tool-launch-handoff.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/madison-launch-handoff/` | JSON |
| Verified data | `data/verified/madison-launch-handoff/` | JSON |
| Agent log | `logs/madison-launch-handoff-[DATE].json` | JSON |
| Human report | `reports/generated/madison-launch-handoff-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |
