# Vaibhav Singh - Brand Reputation Intelligence Agent

## Purpose

Vaibhav Singh built an open-source Madison Intelligence Agent for brand reputation monitoring. Assignment 3 collected brand-relevant text from RSS feeds, Google News, NewsAPI, and Hugging Face rows, normalized records into a nine-field schema, deduplicated them, and exported a CSV. Assignment 4 added AI-powered sentiment analysis, entity extraction, cited brand-health reporting, analysis cards, scale testing, and email delivery.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| TechCrunch RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for TechCrunch RSS. | Verify feed, dates, content snippets. |
| Ars Technica RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Ars Technica RSS. | Verify feed and date parsing. |
| The Verge RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for The Verge RSS. | Verify feed and date parsing. |
| Google News brand query RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Google News brand query RSS. | Verify query, source titles, duplicate handling. |
| NewsAPI | API | [TODO: DATA SOURCE] Confirm source URL/path for NewsAPI. | Credential via env var only; validate relevance and API limits. |
| Hugging Face SetFit/20 Newsgroups rows | Public dataset API | [TODO: DATA SOURCE] Confirm source URL/path for Hugging Face SetFit/20 Newsgroups rows. | Check dataset terms and relevance to brand monitoring. |
| GPT/Claude model in A4 | AI service | [TODO: DATA SOURCE] Confirm source URL/path for GPT/Claude model in A4. | Approve model, cost, prompt, and email delivery. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json | Yes |
| TechCrunch RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for TechCrunch RSS. | Yes |
| Ars Technica RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Ars Technica RSS. | Yes |
| The Verge RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for The Verge RSS. | Yes |
| Google News brand query RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Google News brand query RSS. | Yes |
| NewsAPI | API | [TODO: DATA SOURCE] Confirm source URL/path for NewsAPI. | Yes |
| Hugging Face SetFit/20 Newsgroups rows | Public dataset API | [TODO: DATA SOURCE] Confirm source URL/path for Hugging Face SetFit/20 Newsgroups rows. | Yes |
| GPT/Claude model in A4 | AI service | [TODO: DATA SOURCE] Confirm source URL/path for GPT/Claude model in A4. | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/students/vaibhav-singh-brand-reputation-intelligence-agent.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run vaibhav-singh-brand-reputation-intelligence-agent --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/vaibhav-singh-brand-reputation-intelligence-agent data/verified/vaibhav-singh-brand-reputation-intelligence-agent -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/vaibhav-singh-brand-reputation-intelligence-agent.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/vaibhav-singh-brand-reputation-intelligence-agent__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/vaibhav-singh-brand-reputation-intelligence-agent__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/vaibhav-singh-brand-reputation-intelligence-agent-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/vaibhav-singh-brand-reputation-intelligence-agent-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Vaibhav Singh - Brand Reputation Intelligence Agent` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- NewsAPI or model credentials appear in files/logs.
- Row count discrepancy remains unexplained.
- AI entity/sentiment output lacks confidence/status.
- Report recommends brand action without cited evidence.
- Email sends before approval.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run vaibhav-singh-brand-reputation-intelligence-agent --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run vaibhav-singh-brand-reputation-intelligence-agent --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Map workflow or specification to scripts | `snickerdoodle run vaibhav-singh-brand-reputation-intelligence-agent --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run vaibhav-singh-brand-reputation-intelligence-agent --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate vaibhav-singh-brand-reputation-intelligence-agent --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate vaibhav-singh-brand-reputation-intelligence-agent --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate vaibhav-singh-brand-reputation-intelligence-agent --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/vaibhav-singh-brand-reputation-intelligence-agent__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/vaibhav-singh-brand-reputation-intelligence-agent__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/vaibhav-singh-brand-reputation-intelligence-agent/` | JSON |
| Verified data | `data/verified/vaibhav-singh-brand-reputation-intelligence-agent/` | JSON |
| Agent log | `logs/vaibhav-singh-brand-reputation-intelligence-agent-[DATE].json` | JSON |
| Human report | `reports/generated/vaibhav-singh-brand-reputation-intelligence-agent-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json`
