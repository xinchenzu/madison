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

## Node Classification

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

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/Nguyen_Duc_A3_Workflow.json"`.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/students/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals data/verified/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/Nguyen_Duc_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Duc Nguyen - Madison Signal Intelligence for Public AI-Agent Signals` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

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
| Map workflow or specification to scripts | `snickerdoodle run duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate duc-nguyen-madison-signal-intelligence-public-ai-agent-signals --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals/` | JSON |
| Verified data | `data/verified/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals/` | JSON |
| Agent log | `logs/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-[DATE].json` | JSON |
| Human report | `reports/generated/duc-nguyen-madison-signal-intelligence-public-ai-agent-signals-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/Nguyen_Duc_A3_Workflow.json`
