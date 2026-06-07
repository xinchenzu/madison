# Xinchen Zu - Marketing Intelligence Agent For Social Media And Industry Trends

## Purpose

Xinchen Zu built a Marketing Intelligence Agent that collects marketing and social-media articles from multiple industry RSS feeds, standardizes them, and exports structured datasets. Assignment 3 collected 135 records from five sources. Assignment 4 v2 adds Google Gemini AI analysis, random article selection, category detection, priority scoring, marketing recommendations, error handling, and human-readable CSV outputs.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| HubSpot Marketing Blog RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for HubSpot Marketing Blog RSS. | Verify feed URL and date/author fields. |
| Sprout Social Insights RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Sprout Social Insights RSS. | Verify feed and source labels. |
| Hootsuite Blog RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Hootsuite Blog RSS. | Verify feed and source labels. |
| Social Media Examiner RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Social Media Examiner RSS. | Verify feed and source labels. |
| Search Engine Journal RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Search Engine Journal RSS. | Verify duplicate feed node and whether duplication is intentional. |
| Google Gemini AI | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Google Gemini AI. | Approve API key, prompt, error handling, and output format. |

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |
## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/zuxinchen_405407_41801846_Zu_Xinchen_A3_Workflow.json | Yes |
| HubSpot Marketing Blog RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for HubSpot Marketing Blog RSS. | Yes |
| Sprout Social Insights RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Sprout Social Insights RSS. | Yes |
| Hootsuite Blog RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Hootsuite Blog RSS. | Yes |
| Social Media Examiner RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Social Media Examiner RSS. | Yes |
| Search Engine Journal RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Search Engine Journal RSS. | Yes |
| Google Gemini AI | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Google Gemini AI. | Yes |

## Phase Gates

1. Source gate: All required source paths are present or explicitly marked with a typed TODO. Test: `test -f "recipes/xinchen-zu-marketing-intelligence-agent.md" && rg -n "\[TODO: DEFINE]" "recipes/xinchen-zu-marketing-intelligence-agent.md" || true`. Human capacity: [TO].
2. Scope gate: The run declares `sample` mode or an approved live mode before ingest begins. Test: `python3 -m json.tool data/raw/xinchen-zu-marketing-intelligence-agent/run-envelope.json`. Human capacity: [PF].
3. Data-shape gate: Every raw and verified JSON output parses before downstream scripts run. Test: `find data/raw/xinchen-zu-marketing-intelligence-agent data/verified/xinchen-zu-marketing-intelligence-agent -name "*.json" -print -exec python3 -m json.tool {} \;`. Human capacity: [PA].
4. Script-readiness gate: Every step script exists or is represented by a typed development TODO. Test: `test -f scripts/ingest/xinchen-zu-marketing-intelligence-agent-ingest-inputs.py || rg --fixed-strings "[TODO: DEV]" "recipes/xinchen-zu-marketing-intelligence-agent.md"`. Human capacity: [IJ].
5. Approval gate: Live network calls, external writes, credentials, production databases, emails, dashboards, publishing, or model calls with sensitive data require an approval record. Test: `test -f logs/gate-decisions/xinchen-zu-marketing-intelligence-agent-approval.json || rg --fixed-strings "[TODO: APPROVE]" "recipes/xinchen-zu-marketing-intelligence-agent.md"`. Human capacity: [EI].
6. Report gate: Agent log and human report are written with the required fields and sections. Test: `test -f logs/xinchen-zu-marketing-intelligence-agent-[DATE].json && test -f reports/generated/xinchen-zu-marketing-intelligence-agent-[DATE].md`. Human capacity: [TO].

## Steps

1. Step name: Verify provenance. Labor: AI with Human gate.
   Script called: `scripts/tools/xinchen-zu-marketing-intelligence-agent-verify-provenance.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `xinchen-zu-marketing-intelligence-agent`.
   Output: workflow, source_paths, exists, parsed_ok, approval_state, checked_at.
   Where output goes: `logs/`
2. Step name: Ingest declared inputs. Labor: AI with Human gate.
   Script called: `scripts/ingest/xinchen-zu-marketing-intelligence-agent-ingest-inputs.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `xinchen-zu-marketing-intelligence-agent`.
   Output: records, source_name, source_type, fetched_at, sample_mode, rejects.
   Where output goes: `data/raw/xinchen-zu-marketing-intelligence-agent/`
3. Step name: Validate data shape. Labor: AI with Human gate.
   Script called: `scripts/gigo/xinchen-zu-marketing-intelligence-agent-validate-data-shape.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `xinchen-zu-marketing-intelligence-agent`.
   Output: record_count, required_fields_present, missing_fields, parse_errors, schema_version.
   Where output goes: `data/verified/xinchen-zu-marketing-intelligence-agent/`
4. Step name: Transform and quality check. Labor: AI with Human gate.
   Script called: `scripts/gigo/xinchen-zu-marketing-intelligence-agent-transform-quality-check.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `xinchen-zu-marketing-intelligence-agent`.
   Output: verified_records, record_count, duplicates, rejects, flags, quality_notes.
   Where output goes: `data/verified/xinchen-zu-marketing-intelligence-agent/`
5. Step name: Run approved tools. Labor: AI with Human gate.
   Script called: `scripts/tools/xinchen-zu-marketing-intelligence-agent-run-approved-tools.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `xinchen-zu-marketing-intelligence-agent`.
   Output: tool_name, input_path, output_path, action_taken, approval_id, no_write_mode.
   Where output goes: `logs/`
6. Step name: Produce human report. Labor: AI with Human gate.
   Script called: `scripts/tools/xinchen-zu-marketing-intelligence-agent-produce-human-report.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `xinchen-zu-marketing-intelligence-agent`.
   Output: summary, sources_checked, gate_results, findings, typed_todos, next_decision.
   Where output goes: `reports/generated/`

## Output Contract

### Agent output
File: `logs/xinchen-zu-marketing-intelligence-agent-[DATE].json`
Fields: workflow, run_id, mode, steps_completed, records_seen, rejects, duplicates, flags, stop_conditions, todo_items, source_files, gate_decisions, generated_at, raw_output_paths, verified_output_paths, report_path.

### Human report
File: `reports/generated/xinchen-zu-marketing-intelligence-agent-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Xinchen Zu - Marketing Intelligence Agent For Social Media And Industry Trends` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: run summary, purpose, source inventory, inputs used, phase-gate results, steps completed, records seen, rejects, duplicates, flags, typed TODOs, human approvals, verified findings, inferred findings, decision recommendation.

## Stop Conditions

- RSS source unavailable without fallback.
- Duplicate Search Engine Journal source inflates counts without disclosure.
- AI output has only free-form text and no parseable fields.
- Gemini key appears in workflow/log/output.
- Recommendation not tied to source article.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run xinchen-zu-marketing-intelligence-agent --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run xinchen-zu-marketing-intelligence-agent --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Verify provenance | `snickerdoodle run xinchen-zu-marketing-intelligence-agent --step verify-provenance` | `--sample` `--no-write` |
| Ingest declared inputs | `snickerdoodle run xinchen-zu-marketing-intelligence-agent --step ingest-inputs` | `--sample` |
| Validate data shape | `snickerdoodle run xinchen-zu-marketing-intelligence-agent --step validate-data-shape` | `--sample` |
| Transform and quality check | `snickerdoodle run xinchen-zu-marketing-intelligence-agent --step transform-quality-check` | `--sample` |
| Run approved tools | `snickerdoodle run xinchen-zu-marketing-intelligence-agent --step run-approved-tools` | `--sample` `--no-write` |
| Produce human report | `snickerdoodle run xinchen-zu-marketing-intelligence-agent --step produce-human-report` | `--sample` `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - Source gate | `snickerdoodle gate xinchen-zu-marketing-intelligence-agent --gate 1 --decision approve --note "Sources checked"` |
| Gate 2 - Scope gate | `snickerdoodle gate xinchen-zu-marketing-intelligence-agent --gate 2 --decision approve --note "Scope and mode approved"` |
| Gate 3 - Data-shape gate | `snickerdoodle gate xinchen-zu-marketing-intelligence-agent --gate 3 --decision approve --note "Outputs parse"` |
| Gate 4 - Script-readiness gate | `snickerdoodle gate xinchen-zu-marketing-intelligence-agent --gate 4 --decision approve --note "Scripts ready or TODO DEV accepted"` |
| Gate 5 - Approval gate | `snickerdoodle gate xinchen-zu-marketing-intelligence-agent --gate 5 --decision approve --note "Live or sensitive actions approved"` |
| Gate 6 - Report gate | `snickerdoodle gate xinchen-zu-marketing-intelligence-agent --gate 6 --decision approve --note "Report and log complete"` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Verify provenance | `scripts/tools/xinchen-zu-marketing-intelligence-agent-verify-provenance.py` | tools |
| Ingest declared inputs | `scripts/ingest/xinchen-zu-marketing-intelligence-agent-ingest-inputs.py` | ingest |
| Validate data shape | `scripts/gigo/xinchen-zu-marketing-intelligence-agent-validate-data-shape.py` | gigo |
| Transform and quality check | `scripts/gigo/xinchen-zu-marketing-intelligence-agent-transform-quality-check.py` | gigo |
| Run approved tools | `scripts/tools/xinchen-zu-marketing-intelligence-agent-run-approved-tools.py` | tools |
| Produce human report | `scripts/tools/xinchen-zu-marketing-intelligence-agent-produce-human-report.py` | tools |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/xinchen-zu-marketing-intelligence-agent/` | JSON |
| Verified data | `data/verified/xinchen-zu-marketing-intelligence-agent/` | JSON |
| Agent log | `logs/xinchen-zu-marketing-intelligence-agent-[DATE].json` | JSON |
| Human report | `reports/generated/xinchen-zu-marketing-intelligence-agent-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

| Source | Verification command | Notes |
|---|---|---|
| `recipes/xinchen-zu-marketing-intelligence-agent.md` | `test -f "recipes/xinchen-zu-marketing-intelligence-agent.md"` | Current recipe file used as spec-first provenance. |

## Existing Recipe Notes Preserved For Implementation

### Extracted Notes

Xinchen Zu built a Marketing Intelligence Agent that collects marketing and social-media articles from multiple industry RSS feeds, standardizes them, and exports structured datasets. Assignment 3 collected 135 records from five sources. Assignment 4 v2 adds Google Gemini AI analysis, random article selection, category detection, priority scoring, marketing recommendations, error handling, and human-readable CSV outputs.

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/zuxinchen_405407_41801846_Zu_Xinchen_A3_Workflow.json"`.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/xinchen-zu-marketing-intelligence-agent.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run xinchen-zu-marketing-intelligence-agent --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/xinchen-zu-marketing-intelligence-agent data/verified/xinchen-zu-marketing-intelligence-agent -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/xinchen-zu-marketing-intelligence-agent.md`.
   Human capacity: [EI].

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/zuxinchen_405407_41801846_Zu_Xinchen_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/xinchen-zu-marketing-intelligence-agent-map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/xinchen-zu-marketing-intelligence-agent-produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.
