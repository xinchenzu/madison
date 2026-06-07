# Denis Bykov - Job Market Intelligence And Multi-Agent Career Debate

## Purpose

Denis Bykov built Madison as a job-market intelligence agent for data-center and cloud-infrastructure roles. Assignment 3 collected job postings, BLS labor market data, and hiring-trend news to map real requirements for roles like AWS Data Center Technician. Assignment 4 turned the data pipeline into a multi-agent debate system that uses a harsh hiring manager, a candidate advocate, and a synthesis judge to produce browser-readable career intelligence reports.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Kaggle / LinkedIn job postings sample | CSV / code sample | [TODO: DATA SOURCE] Confirm source URL/path for Kaggle / LinkedIn job postings sample. | Check source provenance and whether hardcoded sample represents the intended market. |
| BLS public API | Public labor API | [TODO: DATA SOURCE] Confirm source URL/path for BLS public API. | Verify series IDs, date range, and no authentication needed. |
| NewsAPI data-center hiring query | News API | [TODO: DATA SOURCE] Confirm source URL/path for NewsAPI data-center hiring query. | Credential must be moved to env var; verify article relevance and source quality. |
| Claude / Anthropic API in A4 | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Claude / Anthropic API in A4. | Approve model, prompt roles, cost, and fairness/risk boundaries. |

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |
## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/bykovdenis_454895_41780985_Bykov_Denis_A3_Workflow.json | Yes |
| Kaggle / LinkedIn job postings sample | CSV / code sample | [TODO: DATA SOURCE] Confirm source URL/path for Kaggle / LinkedIn job postings sample. | Yes |
| BLS public API | Public labor API | [TODO: DATA SOURCE] Confirm source URL/path for BLS public API. | Yes |
| NewsAPI data-center hiring query | News API | [TODO: DATA SOURCE] Confirm source URL/path for NewsAPI data-center hiring query. | Yes |
| Claude / Anthropic API in A4 | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Claude / Anthropic API in A4. | Yes |

## Phase Gates

1. Source gate: All required source paths are present or explicitly marked with a typed TODO. Test: `test -f "recipes/denis-bykov-job-market-intelligence-multi-agent-career-debate.md" && rg -n "\[TODO: DEFINE]" "recipes/denis-bykov-job-market-intelligence-multi-agent-career-debate.md" || true`. Human capacity: [TO].
2. Scope gate: The run declares `sample` mode or an approved live mode before ingest begins. Test: `python3 -m json.tool data/raw/denis-bykov-job-market-intelligence-multi-agent-career-debate/run-envelope.json`. Human capacity: [PF].
3. Data-shape gate: Every raw and verified JSON output parses before downstream scripts run. Test: `find data/raw/denis-bykov-job-market-intelligence-multi-agent-career-debate data/verified/denis-bykov-job-market-intelligence-multi-agent-career-debate -name "*.json" -print -exec python3 -m json.tool {} \;`. Human capacity: [PA].
4. Script-readiness gate: Every step script exists or is represented by a typed development TODO. Test: `test -f scripts/ingest/denis-bykov-job-market-intelligence-multi-agent-career-debate-ingest-inputs.py || rg --fixed-strings "[TODO: DEV]" "recipes/denis-bykov-job-market-intelligence-multi-agent-career-debate.md"`. Human capacity: [IJ].
5. Approval gate: Live network calls, external writes, credentials, production databases, emails, dashboards, publishing, or model calls with sensitive data require an approval record. Test: `test -f logs/gate-decisions/denis-bykov-job-market-intelligence-multi-agent-career-debate-approval.json || rg --fixed-strings "[TODO: APPROVE]" "recipes/denis-bykov-job-market-intelligence-multi-agent-career-debate.md"`. Human capacity: [EI].
6. Report gate: Agent log and human report are written with the required fields and sections. Test: `test -f logs/denis-bykov-job-market-intelligence-multi-agent-career-debate-[DATE].json && test -f reports/generated/denis-bykov-job-market-intelligence-multi-agent-career-debate-[DATE].md`. Human capacity: [TO].

## Steps

1. Step name: Verify provenance. Labor: AI with Human gate.
   Script called: `scripts/tools/denis-bykov-job-market-intelligence-multi-agent-career-debate-verify-provenance.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `denis-bykov-job-market-intelligence-multi-agent-career-debate`.
   Output: workflow, source_paths, exists, parsed_ok, approval_state, checked_at.
   Where output goes: `logs/`
2. Step name: Ingest declared inputs. Labor: AI with Human gate.
   Script called: `scripts/ingest/denis-bykov-job-market-intelligence-multi-agent-career-debate-ingest-inputs.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `denis-bykov-job-market-intelligence-multi-agent-career-debate`.
   Output: records, source_name, source_type, fetched_at, sample_mode, rejects.
   Where output goes: `data/raw/denis-bykov-job-market-intelligence-multi-agent-career-debate/`
3. Step name: Validate data shape. Labor: AI with Human gate.
   Script called: `scripts/gigo/denis-bykov-job-market-intelligence-multi-agent-career-debate-validate-data-shape.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `denis-bykov-job-market-intelligence-multi-agent-career-debate`.
   Output: record_count, required_fields_present, missing_fields, parse_errors, schema_version.
   Where output goes: `data/verified/denis-bykov-job-market-intelligence-multi-agent-career-debate/`
4. Step name: Transform and quality check. Labor: AI with Human gate.
   Script called: `scripts/gigo/denis-bykov-job-market-intelligence-multi-agent-career-debate-transform-quality-check.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `denis-bykov-job-market-intelligence-multi-agent-career-debate`.
   Output: verified_records, record_count, duplicates, rejects, flags, quality_notes.
   Where output goes: `data/verified/denis-bykov-job-market-intelligence-multi-agent-career-debate/`
5. Step name: Run approved tools. Labor: AI with Human gate.
   Script called: `scripts/tools/denis-bykov-job-market-intelligence-multi-agent-career-debate-run-approved-tools.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `denis-bykov-job-market-intelligence-multi-agent-career-debate`.
   Output: tool_name, input_path, output_path, action_taken, approval_id, no_write_mode.
   Where output goes: `logs/`
6. Step name: Produce human report. Labor: AI with Human gate.
   Script called: `scripts/tools/denis-bykov-job-market-intelligence-multi-agent-career-debate-produce-human-report.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `denis-bykov-job-market-intelligence-multi-agent-career-debate`.
   Output: summary, sources_checked, gate_results, findings, typed_todos, next_decision.
   Where output goes: `reports/generated/`

## Output Contract

### Agent output
File: `logs/denis-bykov-job-market-intelligence-multi-agent-career-debate-[DATE].json`
Fields: workflow, run_id, mode, steps_completed, records_seen, rejects, duplicates, flags, stop_conditions, todo_items, source_files, gate_decisions, generated_at, raw_output_paths, verified_output_paths, report_path.

### Human report
File: `reports/generated/denis-bykov-job-market-intelligence-multi-agent-career-debate-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Denis Bykov - Job Market Intelligence And Multi-Agent Career Debate` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: run summary, purpose, source inventory, inputs used, phase-gate results, steps completed, records seen, rejects, duplicates, flags, typed TODOs, human approvals, verified findings, inferred findings, decision recommendation.

## Stop Conditions

- Credential appears in URL, logs, recipe, or report.
- Job records lack provenance or are too stale for the role target.
- AI judge invents experience, credentials, or job requirements.
- NewsAPI tier is exceeded without cache/fallback.
- Report gives career advice without evidence-backed gap/action mapping.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Verify provenance | `snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --step verify-provenance` | `--sample` `--no-write` |
| Ingest declared inputs | `snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --step ingest-inputs` | `--sample` |
| Validate data shape | `snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --step validate-data-shape` | `--sample` |
| Transform and quality check | `snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --step transform-quality-check` | `--sample` |
| Run approved tools | `snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --step run-approved-tools` | `--sample` `--no-write` |
| Produce human report | `snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --step produce-human-report` | `--sample` `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - Source gate | `snickerdoodle gate denis-bykov-job-market-intelligence-multi-agent-career-debate --gate 1 --decision approve --note "Sources checked"` |
| Gate 2 - Scope gate | `snickerdoodle gate denis-bykov-job-market-intelligence-multi-agent-career-debate --gate 2 --decision approve --note "Scope and mode approved"` |
| Gate 3 - Data-shape gate | `snickerdoodle gate denis-bykov-job-market-intelligence-multi-agent-career-debate --gate 3 --decision approve --note "Outputs parse"` |
| Gate 4 - Script-readiness gate | `snickerdoodle gate denis-bykov-job-market-intelligence-multi-agent-career-debate --gate 4 --decision approve --note "Scripts ready or TODO DEV accepted"` |
| Gate 5 - Approval gate | `snickerdoodle gate denis-bykov-job-market-intelligence-multi-agent-career-debate --gate 5 --decision approve --note "Live or sensitive actions approved"` |
| Gate 6 - Report gate | `snickerdoodle gate denis-bykov-job-market-intelligence-multi-agent-career-debate --gate 6 --decision approve --note "Report and log complete"` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Verify provenance | `scripts/tools/denis-bykov-job-market-intelligence-multi-agent-career-debate-verify-provenance.py` | tools |
| Ingest declared inputs | `scripts/ingest/denis-bykov-job-market-intelligence-multi-agent-career-debate-ingest-inputs.py` | ingest |
| Validate data shape | `scripts/gigo/denis-bykov-job-market-intelligence-multi-agent-career-debate-validate-data-shape.py` | gigo |
| Transform and quality check | `scripts/gigo/denis-bykov-job-market-intelligence-multi-agent-career-debate-transform-quality-check.py` | gigo |
| Run approved tools | `scripts/tools/denis-bykov-job-market-intelligence-multi-agent-career-debate-run-approved-tools.py` | tools |
| Produce human report | `scripts/tools/denis-bykov-job-market-intelligence-multi-agent-career-debate-produce-human-report.py` | tools |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/denis-bykov-job-market-intelligence-multi-agent-career-debate/` | JSON |
| Verified data | `data/verified/denis-bykov-job-market-intelligence-multi-agent-career-debate/` | JSON |
| Agent log | `logs/denis-bykov-job-market-intelligence-multi-agent-career-debate-[DATE].json` | JSON |
| Human report | `reports/generated/denis-bykov-job-market-intelligence-multi-agent-career-debate-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

| Source | Verification command | Notes |
|---|---|---|
| `recipes/denis-bykov-job-market-intelligence-multi-agent-career-debate.md` | `test -f "recipes/denis-bykov-job-market-intelligence-multi-agent-career-debate.md"` | Current recipe file used as spec-first provenance. |

## Existing Recipe Notes Preserved For Implementation

### Extracted Notes

Denis Bykov built Madison as a job-market intelligence agent for data-center and cloud-infrastructure roles. Assignment 3 collected job postings, BLS labor market data, and hiring-trend news to map real requirements for roles like AWS Data Center Technician. Assignment 4 turned the data pipeline into a multi-agent debate system that uses a harsh hiring manager, a candidate advocate, and a synthesis judge to produce browser-readable career intelligence reports.

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/bykovdenis_454895_41780985_Bykov_Denis_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/denis-bykov-job-market-intelligence-multi-agent-career-debate.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/denis-bykov-job-market-intelligence-multi-agent-career-debate data/verified/denis-bykov-job-market-intelligence-multi-agent-career-debate -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/denis-bykov-job-market-intelligence-multi-agent-career-debate.md`.
   Human capacity: [EI].

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/bykovdenis_454895_41780985_Bykov_Denis_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/denis-bykov-job-market-intelligence-multi-agent-career-debate-map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/denis-bykov-job-market-intelligence-multi-agent-career-debate-produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.
