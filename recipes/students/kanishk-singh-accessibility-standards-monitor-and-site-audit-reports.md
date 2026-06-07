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

## Node Classification

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

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/students/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports data/verified/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Kanishk Singh - Accessibility Standards Monitor And Site Audit Reports` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

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
| Map workflow or specification to scripts | `snickerdoodle run kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate kanishk-singh-accessibility-standards-monitor-and-site-audit-reports --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports/` | JSON |
| Verified data | `data/verified/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports/` | JSON |
| Agent log | `logs/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-[DATE].json` | JSON |
| Human report | `reports/generated/kanishk-singh-accessibility-standards-monitor-and-site-audit-reports-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json`
