# Kanishk Singh - Accessibility Standards Monitor And Site Audit Reports

## Purpose

Kanishk Singh built an Accessibility Monitor that collects accessibility rules, WCAG criteria, and accessibility-community updates, then extends into site-level accessibility reports. Assignment 3 produced a standards/rules dataset from axe-core, W3C WCAG JSON, WebAIM, and A11y Project sources. Assignment 4 generated accessibility audit reports for many sample domains, with human-readable HTML output.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| axe-core rules via GitHub/raw content | Code/API source | [TODO: DATA SOURCE] Confirm source URL/path for axe-core rules via GitHub/raw content. | Verify GitHub URLs, rate limits, rule JSON parsing, and license. |
| W3C WCAG 2.1 JSON | Public JSON | [TODO: DATA SOURCE] Confirm source URL/path for W3C WCAG 2.1 JSON. | Verify URL https://www.w3.org/WAI/WCAG21/wcag.json and schema. |
| WebAIM Blog RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for WebAIM Blog RSS. | Verify feed and article relevance. |
| A11y Project RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for A11y Project RSS. | Verify feed and article relevance. |
| Sample domain audit targets | HTML/site report inputs | [TODO: DATA SOURCE] Confirm source URL/path for Sample domain audit targets. | Human must approve target list and testing ethics before live audits. |

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |
## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json | Yes |
| axe-core rules via GitHub/raw content | Code/API source | [TODO: DATA SOURCE] Confirm source URL/path for axe-core rules via GitHub/raw content. | Yes |
| W3C WCAG 2.1 JSON | Public JSON | [TODO: DATA SOURCE] Confirm source URL/path for W3C WCAG 2.1 JSON. | Yes |
| WebAIM Blog RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for WebAIM Blog RSS. | Yes |
| A11y Project RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for A11y Project RSS. | Yes |
| Sample domain audit targets | HTML/site report inputs | [TODO: DATA SOURCE] Confirm source URL/path for Sample domain audit targets. | Yes |

## Phase Gates

1. Source gate: All required source paths are present or explicitly marked with a typed TODO. Test: `test -f "recipes/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports.md" && rg -n "\[TODO: DEFINE]" "recipes/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports.md" || true`. Human capacity: [TO].
2. Scope gate: The run declares `sample` mode or an approved live mode before ingest begins. Test: `python3 -m json.tool data/raw/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports/run-envelope.json`. Human capacity: [PF].
3. Data-shape gate: Every raw and verified JSON output parses before downstream scripts run. Test: `find data/raw/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports data/verified/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports -name "*.json" -print -exec python3 -m json.tool {} \;`. Human capacity: [PA].
4. Script-readiness gate: Every step script exists or is represented by a typed development TODO. Test: `test -f scripts/ingest/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-ingest-inputs.py || rg --fixed-strings "[TODO: DEV]" "recipes/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports.md"`. Human capacity: [IJ].
5. Approval gate: Live network calls, external writes, credentials, production databases, emails, dashboards, publishing, or model calls with sensitive data require an approval record. Test: `test -f logs/gate-decisions/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-approval.json || rg --fixed-strings "[TODO: APPROVE]" "recipes/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports.md"`. Human capacity: [EI].
6. Report gate: Agent log and human report are written with the required fields and sections. Test: `test -f logs/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-[DATE].json && test -f reports/generated/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-[DATE].md`. Human capacity: [TO].

## Steps

1. Step name: Verify provenance. Labor: AI with Human gate.
   Script called: `scripts/tools/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-verify-provenance.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `kanishk-singh-accessibility-standards-monitor-and-site-audit-reports`.
   Output: workflow, source_paths, exists, parsed_ok, approval_state, checked_at.
   Where output goes: `logs/`
2. Step name: Ingest declared inputs. Labor: AI with Human gate.
   Script called: `scripts/ingest/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-ingest-inputs.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `kanishk-singh-accessibility-standards-monitor-and-site-audit-reports`.
   Output: records, source_name, source_type, fetched_at, sample_mode, rejects.
   Where output goes: `data/raw/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports/`
3. Step name: Validate data shape. Labor: AI with Human gate.
   Script called: `scripts/gigo/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-validate-data-shape.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `kanishk-singh-accessibility-standards-monitor-and-site-audit-reports`.
   Output: record_count, required_fields_present, missing_fields, parse_errors, schema_version.
   Where output goes: `data/verified/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports/`
4. Step name: Transform and quality check. Labor: AI with Human gate.
   Script called: `scripts/gigo/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-transform-quality-check.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `kanishk-singh-accessibility-standards-monitor-and-site-audit-reports`.
   Output: verified_records, record_count, duplicates, rejects, flags, quality_notes.
   Where output goes: `data/verified/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports/`
5. Step name: Run approved tools. Labor: AI with Human gate.
   Script called: `scripts/tools/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-run-approved-tools.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `kanishk-singh-accessibility-standards-monitor-and-site-audit-reports`.
   Output: tool_name, input_path, output_path, action_taken, approval_id, no_write_mode.
   Where output goes: `logs/`
6. Step name: Produce human report. Labor: AI with Human gate.
   Script called: `scripts/tools/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-produce-human-report.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `kanishk-singh-accessibility-standards-monitor-and-site-audit-reports`.
   Output: summary, sources_checked, gate_results, findings, typed_todos, next_decision.
   Where output goes: `reports/generated/`

## Output Contract

### Agent output
File: `logs/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-[DATE].json`
Fields: workflow, run_id, mode, steps_completed, records_seen, rejects, duplicates, flags, stop_conditions, todo_items, source_files, gate_decisions, generated_at, raw_output_paths, verified_output_paths, report_path.

### Human report
File: `reports/generated/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Kanishk Singh - Accessibility Standards Monitor And Site Audit Reports` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: run summary, purpose, source inventory, inputs used, phase-gate results, steps completed, records seen, rejects, duplicates, flags, typed TODOs, human approvals, verified findings, inferred findings, decision recommendation.

## Stop Conditions

- Standards source unavailable or schema changed.
- Dataset below 50 records.
- Rule lacks source/help_url and is not marked [TODO: DEFINE] .
- Target domain not approved.
- Report implies ADA/WCAG legal compliance certification.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Verify provenance | `snickerdoodle run kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --step verify-provenance` | `--sample` `--no-write` |
| Ingest declared inputs | `snickerdoodle run kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --step ingest-inputs` | `--sample` |
| Validate data shape | `snickerdoodle run kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --step validate-data-shape` | `--sample` |
| Transform and quality check | `snickerdoodle run kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --step transform-quality-check` | `--sample` |
| Run approved tools | `snickerdoodle run kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --step run-approved-tools` | `--sample` `--no-write` |
| Produce human report | `snickerdoodle run kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --step produce-human-report` | `--sample` `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - Source gate | `snickerdoodle gate kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --gate 1 --decision approve --note "Sources checked"` |
| Gate 2 - Scope gate | `snickerdoodle gate kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --gate 2 --decision approve --note "Scope and mode approved"` |
| Gate 3 - Data-shape gate | `snickerdoodle gate kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --gate 3 --decision approve --note "Outputs parse"` |
| Gate 4 - Script-readiness gate | `snickerdoodle gate kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --gate 4 --decision approve --note "Scripts ready or TODO DEV accepted"` |
| Gate 5 - Approval gate | `snickerdoodle gate kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --gate 5 --decision approve --note "Live or sensitive actions approved"` |
| Gate 6 - Report gate | `snickerdoodle gate kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --gate 6 --decision approve --note "Report and log complete"` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Verify provenance | `scripts/tools/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-verify-provenance.py` | tools |
| Ingest declared inputs | `scripts/ingest/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-ingest-inputs.py` | ingest |
| Validate data shape | `scripts/gigo/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-validate-data-shape.py` | gigo |
| Transform and quality check | `scripts/gigo/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-transform-quality-check.py` | gigo |
| Run approved tools | `scripts/tools/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-run-approved-tools.py` | tools |
| Produce human report | `scripts/tools/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-produce-human-report.py` | tools |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports/` | JSON |
| Verified data | `data/verified/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports/` | JSON |
| Agent log | `logs/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-[DATE].json` | JSON |
| Human report | `reports/generated/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

| Source | Verification command | Notes |
|---|---|---|
| `recipes/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports.md` | `test -f "recipes/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports.md"` | Current recipe file used as spec-first provenance. |

## Existing Recipe Notes Preserved For Implementation

### Extracted Notes

Kanishk Singh built an Accessibility Monitor that collects accessibility rules, WCAG criteria, and accessibility-community updates, then extends into site-level accessibility reports. Assignment 3 produced a standards/rules dataset from axe-core, W3C WCAG JSON, WebAIM, and A11y Project sources. Assignment 4 generated accessibility audit reports for many sample domains, with human-readable HTML output.

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports data/verified/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports.md`.
   Human capacity: [EI].

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.
