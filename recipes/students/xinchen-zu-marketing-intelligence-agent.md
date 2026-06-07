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

## Node Classification

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

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/zuxinchen_405407_41801846_Zu_Xinchen_A3_Workflow.json"`.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/students/xinchen-zu-marketing-intelligence-agent.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run xinchen-zu-marketing-intelligence-agent --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/xinchen-zu-marketing-intelligence-agent data/verified/xinchen-zu-marketing-intelligence-agent -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/xinchen-zu-marketing-intelligence-agent.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/zuxinchen_405407_41801846_Zu_Xinchen_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/xinchen-zu-marketing-intelligence-agent__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/xinchen-zu-marketing-intelligence-agent__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/xinchen-zu-marketing-intelligence-agent-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/xinchen-zu-marketing-intelligence-agent-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Xinchen Zu - Marketing Intelligence Agent For Social Media And Industry Trends` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

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
| Map workflow or specification to scripts | `snickerdoodle run xinchen-zu-marketing-intelligence-agent --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run xinchen-zu-marketing-intelligence-agent --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate xinchen-zu-marketing-intelligence-agent --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate xinchen-zu-marketing-intelligence-agent --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate xinchen-zu-marketing-intelligence-agent --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/xinchen-zu-marketing-intelligence-agent__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/xinchen-zu-marketing-intelligence-agent__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/xinchen-zu-marketing-intelligence-agent/` | JSON |
| Verified data | `data/verified/xinchen-zu-marketing-intelligence-agent/` | JSON |
| Agent log | `logs/xinchen-zu-marketing-intelligence-agent-[DATE].json` | JSON |
| Human report | `reports/generated/xinchen-zu-marketing-intelligence-agent-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/zuxinchen_405407_41801846_Zu_Xinchen_A3_Workflow.json`
