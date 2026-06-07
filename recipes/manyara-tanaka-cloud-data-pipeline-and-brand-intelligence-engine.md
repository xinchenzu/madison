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

1. Source gate: All required source paths are present or explicitly marked with a typed TODO. Test: `test -f "recipes/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine.md" && rg -n "\[TODO: DEFINE]" "recipes/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine.md" || true`. Human capacity: [TO].
2. Scope gate: The run declares `sample` mode or an approved live mode before ingest begins. Test: `python3 -m json.tool data/raw/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine/run-envelope.json`. Human capacity: [PF].
3. Data-shape gate: Every raw and verified JSON output parses before downstream scripts run. Test: `find data/raw/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine data/verified/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine -name "*.json" -print -exec python3 -m json.tool {} \;`. Human capacity: [PA].
4. Script-readiness gate: Every step script exists or is represented by a typed development TODO. Test: `test -f scripts/ingest/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-ingest-inputs.py || rg --fixed-strings "[TODO: DEV]" "recipes/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine.md"`. Human capacity: [IJ].
5. Approval gate: Live network calls, external writes, credentials, production databases, emails, dashboards, publishing, or model calls with sensitive data require an approval record. Test: `test -f logs/gate-decisions/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-approval.json || rg --fixed-strings "[TODO: APPROVE]" "recipes/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine.md"`. Human capacity: [EI].
6. Report gate: Agent log and human report are written with the required fields and sections. Test: `test -f logs/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-[DATE].json && test -f reports/generated/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-[DATE].md`. Human capacity: [TO].

## Steps

1. Step name: Verify provenance. Labor: AI with Human gate.
   Script called: `scripts/tools/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-verify-provenance.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine`.
   Output: workflow, source_paths, exists, parsed_ok, approval_state, checked_at.
   Where output goes: `logs/`
2. Step name: Ingest declared inputs. Labor: AI with Human gate.
   Script called: `scripts/ingest/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-ingest-inputs.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine`.
   Output: records, source_name, source_type, fetched_at, sample_mode, rejects.
   Where output goes: `data/raw/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine/`
3. Step name: Validate data shape. Labor: AI with Human gate.
   Script called: `scripts/gigo/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-validate-data-shape.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine`.
   Output: record_count, required_fields_present, missing_fields, parse_errors, schema_version.
   Where output goes: `data/verified/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine/`
4. Step name: Transform and quality check. Labor: AI with Human gate.
   Script called: `scripts/gigo/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-transform-quality-check.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine`.
   Output: verified_records, record_count, duplicates, rejects, flags, quality_notes.
   Where output goes: `data/verified/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine/`
5. Step name: Run approved tools. Labor: AI with Human gate.
   Script called: `scripts/tools/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-run-approved-tools.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine`.
   Output: tool_name, input_path, output_path, action_taken, approval_id, no_write_mode.
   Where output goes: `logs/`
6. Step name: Produce human report. Labor: AI with Human gate.
   Script called: `scripts/tools/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-produce-human-report.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine`.
   Output: summary, sources_checked, gate_results, findings, typed_todos, next_decision.
   Where output goes: `reports/generated/`

## Output Contract

### Agent output
File: `logs/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-[DATE].json`
Fields: workflow, run_id, mode, steps_completed, records_seen, rejects, duplicates, flags, stop_conditions, todo_items, source_files, gate_decisions, generated_at, raw_output_paths, verified_output_paths, report_path.

### Human report
File: `reports/generated/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Manyara Tanaka - Cloud Data Pipeline Module And Brand Intelligence Engine` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: run summary, purpose, source inventory, inputs used, phase-gate results, steps completed, records seen, rejects, duplicates, flags, typed TODOs, human approvals, verified findings, inferred findings, decision recommendation.

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
| Verify provenance | `snickerdoodle run manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --step verify-provenance` | `--sample` `--no-write` |
| Ingest declared inputs | `snickerdoodle run manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --step ingest-inputs` | `--sample` |
| Validate data shape | `snickerdoodle run manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --step validate-data-shape` | `--sample` |
| Transform and quality check | `snickerdoodle run manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --step transform-quality-check` | `--sample` |
| Run approved tools | `snickerdoodle run manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --step run-approved-tools` | `--sample` `--no-write` |
| Produce human report | `snickerdoodle run manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --step produce-human-report` | `--sample` `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - Source gate | `snickerdoodle gate manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --gate 1 --decision approve --note "Sources checked"` |
| Gate 2 - Scope gate | `snickerdoodle gate manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --gate 2 --decision approve --note "Scope and mode approved"` |
| Gate 3 - Data-shape gate | `snickerdoodle gate manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --gate 3 --decision approve --note "Outputs parse"` |
| Gate 4 - Script-readiness gate | `snickerdoodle gate manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --gate 4 --decision approve --note "Scripts ready or TODO DEV accepted"` |
| Gate 5 - Approval gate | `snickerdoodle gate manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --gate 5 --decision approve --note "Live or sensitive actions approved"` |
| Gate 6 - Report gate | `snickerdoodle gate manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --gate 6 --decision approve --note "Report and log complete"` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Verify provenance | `scripts/tools/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-verify-provenance.py` | tools |
| Ingest declared inputs | `scripts/ingest/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-ingest-inputs.py` | ingest |
| Validate data shape | `scripts/gigo/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-validate-data-shape.py` | gigo |
| Transform and quality check | `scripts/gigo/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-transform-quality-check.py` | gigo |
| Run approved tools | `scripts/tools/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-run-approved-tools.py` | tools |
| Produce human report | `scripts/tools/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-produce-human-report.py` | tools |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine/` | JSON |
| Verified data | `data/verified/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine/` | JSON |
| Agent log | `logs/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-[DATE].json` | JSON |
| Human report | `reports/generated/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

| Source | Verification command | Notes |
|---|---|---|
| `recipes/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine.md` | `test -f "recipes/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine.md"` | Current recipe file used as spec-first provenance. |

## Existing Recipe Notes Preserved For Implementation

### Extracted Notes

Manyara Tanaka built a Madison Cloud Data Pipeline Module that collects cloud platform and job-market signals, then extended it into a Brand Intelligence Analysis Engine. Assignment 3 collected AWS release/blog RSS, Google Cloud release notes, and cloud jobs data into a 150-record cleaned dataset for cloud skills and certification recommendations. Assignment 4 adds GPT-4o-mini analysis for sentiment, archetype detection, anomaly detection, content recommendations, and trend forecasting.

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/manyaratanaka_312461_41801533_Tanaka_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine data/verified/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine.md`.
   Human capacity: [EI].

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/manyaratanaka_312461_41801533_Tanaka_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/manyara-tanaka-cloud-data-pipeline-and-brand-intelligence-engine-produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.
