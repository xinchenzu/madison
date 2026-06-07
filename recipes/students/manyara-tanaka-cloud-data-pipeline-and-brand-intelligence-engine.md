# Manyara Tanaka - Cloud Data Pipeline Module And Brand Intelligence Engine

## Purpose

Manyara Tanaka built a Madison Cloud Data Pipeline Module that collects cloud platform and job-market signals, then extended it into a Brand Intelligence Analysis Engine. Assignment 3 collected AWS release/blog RSS, Google Cloud release notes, and cloud jobs data into a 150-record cleaned dataset for cloud skills and certification recommendations. Assignment 4 adds GPT-4o-mini analysis for sentiment, archetype detection, anomaly detection, content recommendations, and trend forecasting.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| AWS Blog RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for AWS Blog RSS. | Verify feed URL, date format, source_url, and AWS platform tag. |
| Google Cloud release notes RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Google Cloud release notes RSS. | Verify feed URL, date format, platform=GCP, and skill tags. |
| Cloud Jobs public CSV | Public CSV / HTTP | [TODO: DATA SOURCE] Confirm source URL/path for Cloud Jobs public CSV. | Verify URL/source provenance; original docs mention representative public dataset and workflow JSON uses GitHub raw CSV. |
| BigQuery / marketing data in A4 | Structured analytics data | [TODO: DATA SOURCE] Confirm source URL/path for BigQuery / marketing data in A4. | Human must identify dataset/table and privacy boundary before production. |
| OpenAI GPT-4o-mini | AI service | [TODO: DATA SOURCE] Confirm source URL/path for OpenAI GPT-4o-mini. | Approve model, cost, prompt, retry/dead-letter behavior. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/manyaratanaka_312461_41801533_Tanaka_A3_Workflow.json | Yes |
| AWS Blog RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for AWS Blog RSS. | Yes |
| Google Cloud release notes RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Google Cloud release notes RSS. | Yes |
| Cloud Jobs public CSV | Public CSV / HTTP | [TODO: DATA SOURCE] Confirm source URL/path for Cloud Jobs public CSV. | Yes |
| BigQuery / marketing data in A4 | Structured analytics data | [TODO: DATA SOURCE] Confirm source URL/path for BigQuery / marketing data in A4. | Yes |
| OpenAI GPT-4o-mini | AI service | [TODO: DATA SOURCE] Confirm source URL/path for OpenAI GPT-4o-mini. | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/manyaratanaka_312461_41801533_Tanaka_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/students/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine data/verified/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/manyaratanaka_312461_41801533_Tanaka_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Manyara Tanaka - Cloud Data Pipeline Module And Brand Intelligence Engine` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Cloud jobs source cannot be verified.
- A4 BigQuery/marketing data source is not identified.
- AI insight lacks confidence/rationale.
- Slack alert or post draft would be sent without approval.
- Report mixes cloud certification data with brand intelligence claims without explanation.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Map workflow or specification to scripts | `snickerdoodle run manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine/` | JSON |
| Verified data | `data/verified/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine/` | JSON |
| Agent log | `logs/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-[DATE].json` | JSON |
| Human report | `reports/generated/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/manyaratanaka_312461_41801533_Tanaka_A3_Workflow.json`
