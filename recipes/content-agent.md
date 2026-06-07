# content-agent

## Purpose

The content-agent workflow turns a marketing brief into three brand-aligned content variants, scores those variants for production readiness, produces visual concepts for approved variants, and runs a weekly Reddit engagement scan for content intelligence. This recipe preserves the imported workflow behavior while replacing live webhooks, OpenAI calls, Discord posts, and binary responses with explicit local contracts and human phase gates.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Original workflow sources | [TODO: DEV] Parse original workflow node types. | [TODO: DATA SOURCE] Extract source URLs or paths from original workflow JSON. | Confirm source is allowed, current, and rate-safe before live fetch. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | data/madison-main/n8n-workflows/originals/content-agent-full-workflow.json | Yes |
| Brief payload | JSON object | Webhook body or local sample | Yes |
| Brand voice | JSON object | `scripts/tools/content-agent-brand-voice.py` | Yes |
| Generation output | JSON object or text | Approved model response or sample fixture | Yes |
| Reddit search rows | JSON array | Reddit API export via `scripts/ingest/content-agent-get-reddit-posts.py` | Yes |
| Quality threshold | Number | Local argument, default `130` | Yes |
| Alert destination | Local JSON/Markdown contract | Report tool | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "data/madison-main/n8n-workflows/originals/content-agent-full-workflow.json"`.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/content-agent.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run content-agent --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/content-agent data/verified/content-agent -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/content-agent.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: data/madison-main/n8n-workflows/originals/content-agent-full-workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/content-agent__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/content-agent__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/content-agent-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/content-agent-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `content-agent` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the original JSON is missing or no longer matches the documented provenance path.
- Stop if a live OpenAI or Discord action is requested without human clearance.
- Stop if the generated response is not valid JSON after normalization.
- Stop if the generation output does not contain exactly three variants.
- Stop if any required variant field is empty.
- Stop if the prompt includes forbidden brand claims, taboos, or unverifiable superlatives.
- Stop if Reddit ingest fails or returns data that cannot be normalized.
- Stop if an alert would publish live without an approved destination and explicit human clearance.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run content-agent --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run content-agent --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Map workflow or specification to scripts | `snickerdoodle run content-agent --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run content-agent --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate content-agent --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate content-agent --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate content-agent --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/content-agent__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/content-agent__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/content-agent/` | JSON |
| Verified data | `data/verified/content-agent/` | JSON |
| Agent log | `logs/content-agent-[DATE].json` | JSON |
| Human report | `reports/generated/content-agent-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `data/madison-main/n8n-workflows/originals/content-agent-full-workflow.json`
