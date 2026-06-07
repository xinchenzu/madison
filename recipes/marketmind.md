# marketmind

## Purpose

The marketmind workflow accepts a product-analysis request, normalizes market-analysis inputs, runs the stored marketmind implementation, extracts `outputs/final-market-strategy-report.md`, and returns a webhook-style JSON response. This recipe preserves the imported command flow while adding explicit phase gates around command execution, credentials, generated artifacts, and human-readable reporting.

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
| Original n8n workflow JSON | JSON | data/madison-main/n8n-workflows/originals/marketmind/marketmind-run-analysis-webhook.json | Yes |
| Product name | Text | Webhook body field `product_name`; default `EcoWave Smart Bottle` | Yes |
| Industry | Text | Webhook body field `industry`; default `Consumer Goods` | Yes |
| Geography | Text | Webhook body field `geography`; default `Global` | Yes |
| Scale | Text | Webhook body field `scale`; default `SME` | Yes |
| Repository path | Path | Stored marketmind code path | Yes |
| OpenAI API key | Environment variable | `OPENAI_API_KEY` | Only for live run |
| Serper API key | Environment variable | `SERPER_API_KEY` | Only for live run |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "data/madison-main/n8n-workflows/originals/marketmind/marketmind-run-analysis-webhook.json"`.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/marketmind.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run marketmind --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/marketmind data/verified/marketmind -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/marketmind.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: data/madison-main/n8n-workflows/originals/marketmind/marketmind-run-analysis-webhook.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/marketmind__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/marketmind__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/marketmind-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/marketmind-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `marketmind` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the original workflow JSON is missing.
- Stop if stored marketmind code is missing.
- Stop if live mode is requested without explicit human clearance.
- Stop if live mode is requested without required environment variables.
- Stop if `main.py` exits nonzero or no final report is produced.
- Stop if the response contract would expose API keys, raw credentials, or full unreviewed stdout.
- Stop if the final report contains unverified claims that need human review before publication.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run marketmind --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run marketmind --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Map workflow or specification to scripts | `snickerdoodle run marketmind --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run marketmind --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate marketmind --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate marketmind --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate marketmind --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/marketmind__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/marketmind__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/marketmind/` | JSON |
| Verified data | `data/verified/marketmind/` | JSON |
| Agent log | `logs/marketmind-[DATE].json` | JSON |
| Human report | `reports/generated/marketmind-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `data/madison-main/n8n-workflows/originals/marketmind/marketmind-run-analysis-webhook.json`
