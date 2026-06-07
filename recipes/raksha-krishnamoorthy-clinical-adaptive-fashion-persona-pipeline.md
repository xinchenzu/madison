# Raksha KrishnaMoorthy - Clinical Adaptive Fashion Persona Pipeline

## Purpose

Raksha KrishnaMoorthy built a Madison SyntheticPersonas pipeline for clinically grounded patient personas in health-fashion contexts. Assignment 3 collected, validated, deduplicated, and standardized 125 records across five health-fashion categories. Assignment 4 generated Claude-powered persona cards, a strategic brand intelligence report, email/output packaging, and scale tests with fallback personas for API failures.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Kaggle healthcare CSV | Local CSV | [TODO: DATA SOURCE] Confirm source URL/path for Kaggle healthcare CSV. | Verify local file path and source license; no fabricated demographics. |
| CDC data API | Public data API | [TODO: DATA SOURCE] Confirm source URL/path for CDC data API. | Verify endpoint and field mapping. |
| Hugging Face clinical notes | Public dataset API | [TODO: DATA SOURCE] Confirm source URL/path for Hugging Face clinical notes. | Verify dataset terms and no sensitive/private data. |
| ScienceDaily breast cancer RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for ScienceDaily breast cancer RSS. | Verify article relevance and date. |
| Claude API in A4 | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Claude API in A4. | Approve model, prompt, category rules, and fallback persona behavior. |

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |
## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json | Yes |
| Kaggle healthcare CSV | Local CSV | [TODO: DATA SOURCE] Confirm source URL/path for Kaggle healthcare CSV. | Yes |
| CDC data API | Public data API | [TODO: DATA SOURCE] Confirm source URL/path for CDC data API. | Yes |
| Hugging Face clinical notes | Public dataset API | [TODO: DATA SOURCE] Confirm source URL/path for Hugging Face clinical notes. | Yes |
| ScienceDaily breast cancer RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for ScienceDaily breast cancer RSS. | Yes |
| Claude API in A4 | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Claude API in A4. | Yes |

## Phase Gates

1. Source gate: All required source paths are present or explicitly marked with a typed TODO. Test: `test -f "recipes/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline.md" && rg -n "\[TODO: DEFINE]" "recipes/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline.md" || true`. Human capacity: [TO].
2. Scope gate: The run declares `sample` mode or an approved live mode before ingest begins. Test: `python3 -m json.tool data/raw/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline/run-envelope.json`. Human capacity: [PF].
3. Data-shape gate: Every raw and verified JSON output parses before downstream scripts run. Test: `find data/raw/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline data/verified/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline -name "*.json" -print -exec python3 -m json.tool {} \;`. Human capacity: [PA].
4. Script-readiness gate: Every step script exists or is represented by a typed development TODO. Test: `test -f scripts/ingest/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-ingest-inputs.py || rg --fixed-strings "[TODO: DEV]" "recipes/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline.md"`. Human capacity: [IJ].
5. Approval gate: Live network calls, external writes, credentials, production databases, emails, dashboards, publishing, or model calls with sensitive data require an approval record. Test: `test -f logs/gate-decisions/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-approval.json || rg --fixed-strings "[TODO: APPROVE]" "recipes/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline.md"`. Human capacity: [EI].
6. Report gate: Agent log and human report are written with the required fields and sections. Test: `test -f logs/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-[DATE].json && test -f reports/generated/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-[DATE].md`. Human capacity: [TO].

## Steps

1. Step name: Verify provenance. Labor: AI with Human gate.
   Script called: `scripts/tools/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-verify-provenance.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline`.
   Output: workflow, source_paths, exists, parsed_ok, approval_state, checked_at.
   Where output goes: `logs/`
2. Step name: Ingest declared inputs. Labor: AI with Human gate.
   Script called: `scripts/ingest/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-ingest-inputs.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline`.
   Output: records, source_name, source_type, fetched_at, sample_mode, rejects.
   Where output goes: `data/raw/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline/`
3. Step name: Validate data shape. Labor: AI with Human gate.
   Script called: `scripts/gigo/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-validate-data-shape.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline`.
   Output: record_count, required_fields_present, missing_fields, parse_errors, schema_version.
   Where output goes: `data/verified/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline/`
4. Step name: Transform and quality check. Labor: AI with Human gate.
   Script called: `scripts/gigo/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-transform-quality-check.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline`.
   Output: verified_records, record_count, duplicates, rejects, flags, quality_notes.
   Where output goes: `data/verified/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline/`
5. Step name: Run approved tools. Labor: AI with Human gate.
   Script called: `scripts/tools/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-run-approved-tools.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline`.
   Output: tool_name, input_path, output_path, action_taken, approval_id, no_write_mode.
   Where output goes: `logs/`
6. Step name: Produce human report. Labor: AI with Human gate.
   Script called: `scripts/tools/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-produce-human-report.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline`.
   Output: summary, sources_checked, gate_results, findings, typed_todos, next_decision.
   Where output goes: `reports/generated/`

## Output Contract

### Agent output
File: `logs/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-[DATE].json`
Fields: workflow, run_id, mode, steps_completed, records_seen, rejects, duplicates, flags, stop_conditions, todo_items, source_files, gate_decisions, generated_at, raw_output_paths, verified_output_paths, report_path.

### Human report
File: `reports/generated/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Raksha KrishnaMoorthy - Clinical Adaptive Fashion Persona Pipeline` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: run summary, purpose, source inventory, inputs used, phase-gate results, steps completed, records seen, rejects, duplicates, flags, typed TODOs, human approvals, verified findings, inferred findings, decision recommendation.

## Stop Conditions

- Any source contains private patient data or uncertain license.
- AI fabricates demographic/clinical details not in source records.
- Category mapping cannot be justified.
- Claude rate limits cause unmarked fallback personas.
- Report makes medical claims or diagnosis-adjacent recommendations.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Verify provenance | `snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --step verify-provenance` | `--sample` `--no-write` |
| Ingest declared inputs | `snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --step ingest-inputs` | `--sample` |
| Validate data shape | `snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --step validate-data-shape` | `--sample` |
| Transform and quality check | `snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --step transform-quality-check` | `--sample` |
| Run approved tools | `snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --step run-approved-tools` | `--sample` `--no-write` |
| Produce human report | `snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --step produce-human-report` | `--sample` `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - Source gate | `snickerdoodle gate raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --gate 1 --decision approve --note "Sources checked"` |
| Gate 2 - Scope gate | `snickerdoodle gate raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --gate 2 --decision approve --note "Scope and mode approved"` |
| Gate 3 - Data-shape gate | `snickerdoodle gate raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --gate 3 --decision approve --note "Outputs parse"` |
| Gate 4 - Script-readiness gate | `snickerdoodle gate raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --gate 4 --decision approve --note "Scripts ready or TODO DEV accepted"` |
| Gate 5 - Approval gate | `snickerdoodle gate raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --gate 5 --decision approve --note "Live or sensitive actions approved"` |
| Gate 6 - Report gate | `snickerdoodle gate raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --gate 6 --decision approve --note "Report and log complete"` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Verify provenance | `scripts/tools/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-verify-provenance.py` | tools |
| Ingest declared inputs | `scripts/ingest/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-ingest-inputs.py` | ingest |
| Validate data shape | `scripts/gigo/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-validate-data-shape.py` | gigo |
| Transform and quality check | `scripts/gigo/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-transform-quality-check.py` | gigo |
| Run approved tools | `scripts/tools/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-run-approved-tools.py` | tools |
| Produce human report | `scripts/tools/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-produce-human-report.py` | tools |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline/` | JSON |
| Verified data | `data/verified/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline/` | JSON |
| Agent log | `logs/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-[DATE].json` | JSON |
| Human report | `reports/generated/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

| Source | Verification command | Notes |
|---|---|---|
| `recipes/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline.md` | `test -f "recipes/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline.md"` | Current recipe file used as spec-first provenance. |

## Existing Recipe Notes Preserved For Implementation

### Extracted Notes

Raksha KrishnaMoorthy built a Madison SyntheticPersonas pipeline for clinically grounded patient personas in health-fashion contexts. Assignment 3 collected, validated, deduplicated, and standardized 125 records across five health-fashion categories. Assignment 4 generated Claude-powered persona cards, a strategic brand intelligence report, email/output packaging, and scale tests with fallback personas for API failures.

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline data/verified/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline.md`.
   Human capacity: [EI].

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.
