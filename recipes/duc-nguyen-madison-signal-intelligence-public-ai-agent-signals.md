# Duc Nguyen - Madison Signal Intelligence for Public AI-Agent Signals

## Purpose

Duc Nguyen built a reusable public-signal ingest and intelligence layer for Madison. Assignment 3 collected public AI-agent and automation signals from Hacker News, DEV Community, and GitHub, normalized them into one schema, deduplicated records, validated required fields, and exported a reusable CSV. Assignment 4 upgraded that collector into Madison Signal Intelligence: an AI-ranked workflow that classifies signals, assigns priority and confidence, explains why they matter, and recommends actions for founders or engineers.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Hacker News Algolia API | Public API | [TODO: DATA SOURCE] Confirm source URL/path for Hacker News Algolia API. | Verify URL, query ai agents, hitsPerPage=60, date normalization, and completeness of record_id/title/url/posted_at. |
| DEV Community API | Public API | [TODO: DATA SOURCE] Confirm source URL/path for DEV Community API. | Verify source availability, author/title/url/date fields, and engagement/comment fields. |
| GitHub Search API | Public API | [TODO: DATA SOURCE] Confirm source URL/path for GitHub Search API. | Verify GitHub rate limits, repository URL, owner/name, updated date, language/tags, engagement score. |
| OpenAI API in A4 | AI service | [TODO: DATA SOURCE] Confirm source URL/path for OpenAI API in A4. | Human must approve model, cost, batch size, prompt, and fallback behavior before live runs. |

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |
## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/Nguyen_Duc_A3_Workflow.json | Yes |
| Hacker News Algolia API | Public API | [TODO: DATA SOURCE] Confirm source URL/path for Hacker News Algolia API. | Yes |
| DEV Community API | Public API | [TODO: DATA SOURCE] Confirm source URL/path for DEV Community API. | Yes |
| GitHub Search API | Public API | [TODO: DATA SOURCE] Confirm source URL/path for GitHub Search API. | Yes |
| OpenAI API in A4 | AI service | [TODO: DATA SOURCE] Confirm source URL/path for OpenAI API in A4. | Yes |

## Phase Gates

1. Source gate: All required source paths are present or explicitly marked with a typed TODO. Test: `test -f "recipes/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals.md" && rg -n "\[TODO: DEFINE]" "recipes/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals.md" || true`. Human capacity: [TO].
2. Scope gate: The run declares `sample` mode or an approved live mode before ingest begins. Test: `python3 -m json.tool data/raw/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals/run-envelope.json`. Human capacity: [PF].
3. Data-shape gate: Every raw and verified JSON output parses before downstream scripts run. Test: `find data/raw/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals data/verified/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals -name "*.json" -print -exec python3 -m json.tool {} \;`. Human capacity: [PA].
4. Script-readiness gate: Every step script exists or is represented by a typed development TODO. Test: `test -f scripts/ingest/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-ingest-inputs.py || rg --fixed-strings "[TODO: DEV]" "recipes/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals.md"`. Human capacity: [IJ].
5. Approval gate: Live network calls, external writes, credentials, production databases, emails, dashboards, publishing, or model calls with sensitive data require an approval record. Test: `test -f logs/gate-decisions/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-approval.json || rg --fixed-strings "[TODO: APPROVE]" "recipes/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals.md"`. Human capacity: [EI].
6. Report gate: Agent log and human report are written with the required fields and sections. Test: `test -f logs/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-[DATE].json && test -f reports/generated/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-[DATE].md`. Human capacity: [TO].

## Steps

1. Step name: Verify provenance. Labor: AI with Human gate.
   Script called: `scripts/tools/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-verify-provenance.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `duc-nguyen-madison-signal-intelligence-public-ai-agent-signals`.
   Output: workflow, source_paths, exists, parsed_ok, approval_state, checked_at.
   Where output goes: `logs/`
2. Step name: Ingest declared inputs. Labor: AI with Human gate.
   Script called: `scripts/ingest/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-ingest-inputs.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `duc-nguyen-madison-signal-intelligence-public-ai-agent-signals`.
   Output: records, source_name, source_type, fetched_at, sample_mode, rejects.
   Where output goes: `data/raw/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals/`
3. Step name: Validate data shape. Labor: AI with Human gate.
   Script called: `scripts/gigo/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-validate-data-shape.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `duc-nguyen-madison-signal-intelligence-public-ai-agent-signals`.
   Output: record_count, required_fields_present, missing_fields, parse_errors, schema_version.
   Where output goes: `data/verified/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals/`
4. Step name: Transform and quality check. Labor: AI with Human gate.
   Script called: `scripts/gigo/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-transform-quality-check.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `duc-nguyen-madison-signal-intelligence-public-ai-agent-signals`.
   Output: verified_records, record_count, duplicates, rejects, flags, quality_notes.
   Where output goes: `data/verified/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals/`
5. Step name: Run approved tools. Labor: AI with Human gate.
   Script called: `scripts/tools/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-run-approved-tools.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `duc-nguyen-madison-signal-intelligence-public-ai-agent-signals`.
   Output: tool_name, input_path, output_path, action_taken, approval_id, no_write_mode.
   Where output goes: `logs/`
6. Step name: Produce human report. Labor: AI with Human gate.
   Script called: `scripts/tools/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-produce-human-report.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `duc-nguyen-madison-signal-intelligence-public-ai-agent-signals`.
   Output: summary, sources_checked, gate_results, findings, typed_todos, next_decision.
   Where output goes: `reports/generated/`

## Output Contract

### Agent output
File: `logs/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-[DATE].json`
Fields: workflow, run_id, mode, steps_completed, records_seen, rejects, duplicates, flags, stop_conditions, todo_items, source_files, gate_decisions, generated_at, raw_output_paths, verified_output_paths, report_path.

### Human report
File: `reports/generated/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Duc Nguyen - Madison Signal Intelligence for Public AI-Agent Signals` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: run summary, purpose, source inventory, inputs used, phase-gate results, steps completed, records seen, rejects, duplicates, flags, typed TODOs, human approvals, verified findings, inferred findings, decision recommendation.

## Stop Conditions

- Public API unavailable or rate-limited without fallback.
- Required fields missing after normalization.
- AI response cannot be parsed and fallback score is not clearly marked.
- Batch size exceeds stable tested limit without queueing.
- Any report recommends investment/collaboration without traceable evidence.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Verify provenance | `snickerdoodle run duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --step verify-provenance` | `--sample` `--no-write` |
| Ingest declared inputs | `snickerdoodle run duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --step ingest-inputs` | `--sample` |
| Validate data shape | `snickerdoodle run duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --step validate-data-shape` | `--sample` |
| Transform and quality check | `snickerdoodle run duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --step transform-quality-check` | `--sample` |
| Run approved tools | `snickerdoodle run duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --step run-approved-tools` | `--sample` `--no-write` |
| Produce human report | `snickerdoodle run duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --step produce-human-report` | `--sample` `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - Source gate | `snickerdoodle gate duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --gate 1 --decision approve --note "Sources checked"` |
| Gate 2 - Scope gate | `snickerdoodle gate duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --gate 2 --decision approve --note "Scope and mode approved"` |
| Gate 3 - Data-shape gate | `snickerdoodle gate duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --gate 3 --decision approve --note "Outputs parse"` |
| Gate 4 - Script-readiness gate | `snickerdoodle gate duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --gate 4 --decision approve --note "Scripts ready or TODO DEV accepted"` |
| Gate 5 - Approval gate | `snickerdoodle gate duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --gate 5 --decision approve --note "Live or sensitive actions approved"` |
| Gate 6 - Report gate | `snickerdoodle gate duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --gate 6 --decision approve --note "Report and log complete"` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Verify provenance | `scripts/tools/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-verify-provenance.py` | tools |
| Ingest declared inputs | `scripts/ingest/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-ingest-inputs.py` | ingest |
| Validate data shape | `scripts/gigo/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-validate-data-shape.py` | gigo |
| Transform and quality check | `scripts/gigo/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-transform-quality-check.py` | gigo |
| Run approved tools | `scripts/tools/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-run-approved-tools.py` | tools |
| Produce human report | `scripts/tools/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-produce-human-report.py` | tools |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals/` | JSON |
| Verified data | `data/verified/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals/` | JSON |
| Agent log | `logs/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-[DATE].json` | JSON |
| Human report | `reports/generated/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

| Source | Verification command | Notes |
|---|---|---|
| `recipes/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals.md` | `test -f "recipes/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals.md"` | Current recipe file used as spec-first provenance. |

## Existing Recipe Notes Preserved For Implementation

### Extracted Notes

Duc Nguyen built a reusable public-signal ingest and intelligence layer for Madison. Assignment 3 collected public AI-agent and automation signals from Hacker News, DEV Community, and GitHub, normalized them into one schema, deduplicated records, validated required fields, and exported a reusable CSV. Assignment 4 upgraded that collector into Madison Signal Intelligence: an AI-ranked workflow that classifies signals, assigns priority and confidence, explains why they matter, and recommends actions for founders or engineers.

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/Nguyen_Duc_A3_Workflow.json"`.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals data/verified/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals.md`.
   Human capacity: [EI].

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/Nguyen_Duc_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.
