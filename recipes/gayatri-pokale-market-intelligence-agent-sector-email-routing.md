# Gayatri Pokale - Market Intelligence Agent With AI Sector Routing

## Purpose

Gayatri Pokale built a Market Intelligence Agent that monitors business, Amazon, and AI news from public RSS feeds. Assignment 3 collected and cleaned 66 records from CNBC Business, Amazon News, and TechCrunch AI. Assignment 4 extends the workflow into Market Intelligence Agent v2: Groq AI analyzes articles for sentiment, urgency, and sector; routes items to sector-specific emails; and flags high-urgency news for action.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| CNBC Business RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for CNBC Business RSS. | Verify RSS availability and business relevance. |
| Amazon News RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Amazon News RSS. | Verify source is aboutamazon.com/news/rss and source labels are preserved. |
| TechCrunch AI RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for TechCrunch AI RSS. | Verify feed category and article dates. |
| Groq llama-3.1-8b-instant | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Groq llama-3.1-8b-instant. | Approve API key, prompt, free-tier limits, sector labels, and email destinations. |

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |
## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/pokalegayatri_333110_41799405_Pokale_Gayatri_A3_Workflow.json | Yes |
| CNBC Business RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for CNBC Business RSS. | Yes |
| Amazon News RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Amazon News RSS. | Yes |
| TechCrunch AI RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for TechCrunch AI RSS. | Yes |
| Groq llama-3.1-8b-instant | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Groq llama-3.1-8b-instant. | Yes |
| Gmail / sector email outputs | External delivery | [TODO: DATA SOURCE] Confirm source URL/path for Gmail / sector email outputs. | Yes |

## Phase Gates

1. Source gate: All required source paths are present or explicitly marked with a typed TODO. Test: `test -f "recipes/gayatri-pokale-market-intelligence-agent-sector-email-routing.md" && rg -n "\[TODO: DEFINE]" "recipes/gayatri-pokale-market-intelligence-agent-sector-email-routing.md" || true`. Human capacity: [TO].
2. Scope gate: The run declares `sample` mode or an approved live mode before ingest begins. Test: `python3 -m json.tool data/raw/gayatri-pokale-market-intelligence-agent-sector-email-routing/run-envelope.json`. Human capacity: [PF].
3. Data-shape gate: Every raw and verified JSON output parses before downstream scripts run. Test: `find data/raw/gayatri-pokale-market-intelligence-agent-sector-email-routing data/verified/gayatri-pokale-market-intelligence-agent-sector-email-routing -name "*.json" -print -exec python3 -m json.tool {} \;`. Human capacity: [PA].
4. Script-readiness gate: Every step script exists or is represented by a typed development TODO. Test: `test -f scripts/ingest/gayatri-pokale-market-intelligence-agent-sector-email-routing-ingest-inputs.py || rg --fixed-strings "[TODO: DEV]" "recipes/gayatri-pokale-market-intelligence-agent-sector-email-routing.md"`. Human capacity: [IJ].
5. Approval gate: Live network calls, external writes, credentials, production databases, emails, dashboards, publishing, or model calls with sensitive data require an approval record. Test: `test -f logs/gate-decisions/gayatri-pokale-market-intelligence-agent-sector-email-routing-approval.json || rg --fixed-strings "[TODO: APPROVE]" "recipes/gayatri-pokale-market-intelligence-agent-sector-email-routing.md"`. Human capacity: [EI].
6. Report gate: Agent log and human report are written with the required fields and sections. Test: `test -f logs/gayatri-pokale-market-intelligence-agent-sector-email-routing-[DATE].json && test -f reports/generated/gayatri-pokale-market-intelligence-agent-sector-email-routing-[DATE].md`. Human capacity: [TO].

## Steps

1. Step name: Verify provenance. Labor: AI with Human gate.
   Script called: `scripts/tools/gayatri-pokale-market-intelligence-agent-sector-email-routing-verify-provenance.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `gayatri-pokale-market-intelligence-agent-sector-email-routing`.
   Output: workflow, source_paths, exists, parsed_ok, approval_state, checked_at.
   Where output goes: `logs/`
2. Step name: Ingest declared inputs. Labor: AI with Human gate.
   Script called: `scripts/ingest/gayatri-pokale-market-intelligence-agent-sector-email-routing-ingest-inputs.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `gayatri-pokale-market-intelligence-agent-sector-email-routing`.
   Output: records, source_name, source_type, fetched_at, sample_mode, rejects.
   Where output goes: `data/raw/gayatri-pokale-market-intelligence-agent-sector-email-routing/`
3. Step name: Validate data shape. Labor: AI with Human gate.
   Script called: `scripts/gigo/gayatri-pokale-market-intelligence-agent-sector-email-routing-validate-data-shape.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `gayatri-pokale-market-intelligence-agent-sector-email-routing`.
   Output: record_count, required_fields_present, missing_fields, parse_errors, schema_version.
   Where output goes: `data/verified/gayatri-pokale-market-intelligence-agent-sector-email-routing/`
4. Step name: Transform and quality check. Labor: AI with Human gate.
   Script called: `scripts/gigo/gayatri-pokale-market-intelligence-agent-sector-email-routing-transform-quality-check.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `gayatri-pokale-market-intelligence-agent-sector-email-routing`.
   Output: verified_records, record_count, duplicates, rejects, flags, quality_notes.
   Where output goes: `data/verified/gayatri-pokale-market-intelligence-agent-sector-email-routing/`
5. Step name: Run approved tools. Labor: AI with Human gate.
   Script called: `scripts/tools/gayatri-pokale-market-intelligence-agent-sector-email-routing-run-approved-tools.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `gayatri-pokale-market-intelligence-agent-sector-email-routing`.
   Output: tool_name, input_path, output_path, action_taken, approval_id, no_write_mode.
   Where output goes: `logs/`
6. Step name: Produce human report. Labor: AI with Human gate.
   Script called: `scripts/tools/gayatri-pokale-market-intelligence-agent-sector-email-routing-produce-human-report.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `gayatri-pokale-market-intelligence-agent-sector-email-routing`.
   Output: summary, sources_checked, gate_results, findings, typed_todos, next_decision.
   Where output goes: `reports/generated/`

## Output Contract

### Agent output
File: `logs/gayatri-pokale-market-intelligence-agent-sector-email-routing-[DATE].json`
Fields: workflow, run_id, mode, steps_completed, records_seen, rejects, duplicates, flags, stop_conditions, todo_items, source_files, gate_decisions, generated_at, raw_output_paths, verified_output_paths, report_path.

### Human report
File: `reports/generated/gayatri-pokale-market-intelligence-agent-sector-email-routing-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Gayatri Pokale - Market Intelligence Agent With AI Sector Routing` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: run summary, purpose, source inventory, inputs used, phase-gate results, steps completed, records seen, rejects, duplicates, flags, typed TODOs, human approvals, verified findings, inferred findings, decision recommendation.

## Stop Conditions

- Any RSS source returns zero records without explanation.
- CSV export cannot be parsed.
- Groq output missing sentiment/urgency/sector.
- Email would be sent to real inbox without approval.
- Report states business urgency without article evidence.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Verify provenance | `snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --step verify-provenance` | `--sample` `--no-write` |
| Ingest declared inputs | `snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --step ingest-inputs` | `--sample` |
| Validate data shape | `snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --step validate-data-shape` | `--sample` |
| Transform and quality check | `snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --step transform-quality-check` | `--sample` |
| Run approved tools | `snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --step run-approved-tools` | `--sample` `--no-write` |
| Produce human report | `snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --step produce-human-report` | `--sample` `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - Source gate | `snickerdoodle gate gayatri-pokale-market-intelligence-agent-sector-email-routing --gate 1 --decision approve --note "Sources checked"` |
| Gate 2 - Scope gate | `snickerdoodle gate gayatri-pokale-market-intelligence-agent-sector-email-routing --gate 2 --decision approve --note "Scope and mode approved"` |
| Gate 3 - Data-shape gate | `snickerdoodle gate gayatri-pokale-market-intelligence-agent-sector-email-routing --gate 3 --decision approve --note "Outputs parse"` |
| Gate 4 - Script-readiness gate | `snickerdoodle gate gayatri-pokale-market-intelligence-agent-sector-email-routing --gate 4 --decision approve --note "Scripts ready or TODO DEV accepted"` |
| Gate 5 - Approval gate | `snickerdoodle gate gayatri-pokale-market-intelligence-agent-sector-email-routing --gate 5 --decision approve --note "Live or sensitive actions approved"` |
| Gate 6 - Report gate | `snickerdoodle gate gayatri-pokale-market-intelligence-agent-sector-email-routing --gate 6 --decision approve --note "Report and log complete"` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Verify provenance | `scripts/tools/gayatri-pokale-market-intelligence-agent-sector-email-routing-verify-provenance.py` | tools |
| Ingest declared inputs | `scripts/ingest/gayatri-pokale-market-intelligence-agent-sector-email-routing-ingest-inputs.py` | ingest |
| Validate data shape | `scripts/gigo/gayatri-pokale-market-intelligence-agent-sector-email-routing-validate-data-shape.py` | gigo |
| Transform and quality check | `scripts/gigo/gayatri-pokale-market-intelligence-agent-sector-email-routing-transform-quality-check.py` | gigo |
| Run approved tools | `scripts/tools/gayatri-pokale-market-intelligence-agent-sector-email-routing-run-approved-tools.py` | tools |
| Produce human report | `scripts/tools/gayatri-pokale-market-intelligence-agent-sector-email-routing-produce-human-report.py` | tools |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/gayatri-pokale-market-intelligence-agent-sector-email-routing/` | JSON |
| Verified data | `data/verified/gayatri-pokale-market-intelligence-agent-sector-email-routing/` | JSON |
| Agent log | `logs/gayatri-pokale-market-intelligence-agent-sector-email-routing-[DATE].json` | JSON |
| Human report | `reports/generated/gayatri-pokale-market-intelligence-agent-sector-email-routing-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

| Source | Verification command | Notes |
|---|---|---|
| `recipes/gayatri-pokale-market-intelligence-agent-sector-email-routing.md` | `test -f "recipes/gayatri-pokale-market-intelligence-agent-sector-email-routing.md"` | Current recipe file used as spec-first provenance. |

## Existing Recipe Notes Preserved For Implementation

### Extracted Notes

Gayatri Pokale built a Market Intelligence Agent that monitors business, Amazon, and AI news from public RSS feeds. Assignment 3 collected and cleaned 66 records from CNBC Business, Amazon News, and TechCrunch AI. Assignment 4 extends the workflow into Market Intelligence Agent v2: Groq AI analyzes articles for sentiment, urgency, and sector; routes items to sector-specific emails; and flags high-urgency news for action.

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/pokalegayatri_333110_41799405_Pokale_Gayatri_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/gayatri-pokale-market-intelligence-agent-sector-email-routing.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/gayatri-pokale-market-intelligence-agent-sector-email-routing data/verified/gayatri-pokale-market-intelligence-agent-sector-email-routing -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/gayatri-pokale-market-intelligence-agent-sector-email-routing.md`.
   Human capacity: [EI].

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/pokalegayatri_333110_41799405_Pokale_Gayatri_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/gayatri-pokale-market-intelligence-agent-sector-email-routing-map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/gayatri-pokale-market-intelligence-agent-sector-email-routing-produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.
