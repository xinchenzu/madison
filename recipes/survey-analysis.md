# survey-analysis

## Purpose

The survey-analysis workflow ingests survey responses, validates and cleans rows, prepares analysis and segmentation prompts, derives sentiment distribution and NPS, and prepares Slack, MySQL, and Grafana output contracts. This recipe preserves the imported workflow while replacing live OpenAI, Slack, MySQL, and Grafana side effects with local, auditable artifacts unless a human explicitly clears live execution.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Original workflow sources | [TODO: DEV] Parse original workflow node types. | [TODO: DATA SOURCE] Extract source URLs or paths from original workflow JSON. | Confirm source is allowed, current, and rate-safe before live fetch. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | data/madison-main/n8n-workflows/originals/survey-analysis/workflow.json | Yes |
| Survey CSV | CSV rows | Published Google Sheet export, local CSV, or sample rows | Yes |
| Survey row | JSON object | Webhook payload or CSV extraction | Yes |
| Respondent fields | Text/number | `respondent_id`, `age`, `gender`, `q1_satisfaction`, `q2_easeofuse`, `q3_recommend` | Yes |
| Grafana datasource UID | Text | Grafana API or approved env var | Only for live dashboard update |
| Slack destination | Text | `#survey-analysis` in original workflow | Only for live Slack send |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "data/madison-main/n8n-workflows/originals/survey-analysis/workflow.json"`.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/survey-analysis.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run survey-analysis --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/survey-analysis data/verified/survey-analysis -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/survey-analysis.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: data/madison-main/n8n-workflows/originals/survey-analysis/workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/survey-analysis__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/survey-analysis__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/survey-analysis-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/survey-analysis-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `survey-analysis` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the original JSON is missing.
- Stop if live ingest is requested before sample ingest passes.
- Stop if required survey columns are missing or cannot be normalized.
- Stop if live model calls, Slack sends, MySQL inserts, or Grafana updates are requested without explicit clearance.
- Stop if output contracts would expose credentials, bearer tokens, webhook IDs, or raw PII beyond the approved fields.
- Stop if the NPS or sentiment summary cannot be reproduced from clean rows.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run survey-analysis --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run survey-analysis --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Map workflow or specification to scripts | `snickerdoodle run survey-analysis --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run survey-analysis --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate survey-analysis --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate survey-analysis --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate survey-analysis --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/survey-analysis__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/survey-analysis__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/survey-analysis/` | JSON |
| Verified data | `data/verified/survey-analysis/` | JSON |
| Agent log | `logs/survey-analysis-[DATE].json` | JSON |
| Human report | `reports/generated/survey-analysis-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `data/madison-main/n8n-workflows/originals/survey-analysis/workflow.json`
