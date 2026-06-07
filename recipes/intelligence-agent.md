# intelligence-agent

## Purpose

The intelligence-agent monitors brand, competitor, Reddit, and regulatory signals for Apple and adjacent technology brands. It normalizes source items, deduplicates them against prior state, applies local sentiment and compliance-risk analysis, computes drift and anomaly metrics, builds knowledge graph and competitor summaries, and emits local report contracts in place of live Google Sheets writes or webhook responses.

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
| Original n8n workflow JSON | JSON | data/madison-main/n8n-workflows/originals/intelligence-agent/workflow.json | Yes |
| Brand config | JSON array | `scripts/tools/intelligence-agent-config.py` | Yes |
| Apple press items | RSS/JSON rows | `scripts/ingest/intelligence-agent-get-news.py` | Yes |
| Google News items | RSS/JSON rows | `scripts/ingest/intelligence-agent-get-news.py` | Yes |
| Reddit posts | JSON rows | `scripts/ingest/intelligence-agent-get-reddit.py` | Yes |
| Regulatory items | RSS/JSON rows | `scripts/ingest/intelligence-agent-get-regulatory.py` | Yes |
| Prior processed links/articles | JSON rows | `scripts/ingest/intelligence-agent-get-prior-state.py` | Yes |
| Human-cleared analysis scope | Text/JSON | Conductor gate | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "data/madison-main/n8n-workflows/originals/intelligence-agent/workflow.json"`.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/intelligence-agent.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run intelligence-agent --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/intelligence-agent data/verified/intelligence-agent -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/intelligence-agent.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: data/madison-main/n8n-workflows/originals/intelligence-agent/workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/intelligence-agent__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/intelligence-agent__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/intelligence-agent-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/intelligence-agent-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `intelligence-agent` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the original JSON is missing.
- Stop if live ingest is requested before sample ingest passes.
- Stop if source items cannot be normalized to title/link/source/fullText rows.
- Stop if dedupe cannot access prior-state data or a human-approved fallback.
- Stop if live OpenAI sentiment is requested without human clearance.
- Stop if regulatory risk is used as final compliance advice without human review.
- Stop if alert payloads would post live without explicit clearance.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run intelligence-agent --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run intelligence-agent --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Map workflow or specification to scripts | `snickerdoodle run intelligence-agent --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run intelligence-agent --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate intelligence-agent --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate intelligence-agent --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate intelligence-agent --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/intelligence-agent__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/intelligence-agent__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/intelligence-agent/` | JSON |
| Verified data | `data/verified/intelligence-agent/` | JSON |
| Agent log | `logs/intelligence-agent-[DATE].json` | JSON |
| Human report | `reports/generated/intelligence-agent-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `data/madison-main/n8n-workflows/originals/intelligence-agent/workflow.json`
