# ai-concierge

## Purpose

The ai-concierge workflow answers customer questions for a cafe-style service experience: it handles greetings, FAQ lookup, inventory-aware recommendations, order status checks, and booking/order support. For a marketing or experience lead, the workflow is a bounded customer-facing assistant that can use approved operational data while keeping staff escalation clear for cancellations, unavailable items, and uncertain answers.

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
| Original n8n workflow JSON | JSON | data/madison-main/n8n-workflows/originals/archives/cicerone/ai-concierge.json | Yes |
| Customer message | Text | Chat trigger | Yes |
| Customer name | Text | Conversation state | No |
| Inventory sheet | Tabular rows | Google Sheets export via `scripts/ingest/ai-concierge-get-inventory.py` | Yes |
| FAQ sheet | Tabular rows | Google Sheets export via `scripts/ingest/ai-concierge-get-faq.py` | Yes |
| Orders sheet | Tabular rows | Google Sheets export via `scripts/ingest/ai-concierge-get-orders.py` | Yes |
| Brand/service rules | Text | Original workflow system message | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "data/madison-main/n8n-workflows/originals/archives/cicerone/ai-concierge.json"`.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/ai-concierge.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run ai-concierge --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/ai-concierge data/verified/ai-concierge -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/ai-concierge.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: data/madison-main/n8n-workflows/originals/archives/cicerone/ai-concierge.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/ai-concierge__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/ai-concierge__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/ai-concierge-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/ai-concierge-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `ai-concierge` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the original JSON is missing or differs from the provenance path.
- Stop if live ingest is requested without a spreadsheet id or required access.
- Stop if inventory, FAQ, or order data cannot be parsed as JSON arrays of objects.
- Stop if a user asks for cancellation that policy says staff must handle.
- Stop if the requested item is unavailable and no available alternatives are present in inventory.
- Stop if the response would claim a booking/order is confirmed before a human-approved write path exists.
- Stop if a customer-facing message contains unverified policy, price, allergen, availability, or booking information.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run ai-concierge --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run ai-concierge --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Map workflow or specification to scripts | `snickerdoodle run ai-concierge --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run ai-concierge --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate ai-concierge --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate ai-concierge --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate ai-concierge --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/ai-concierge__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/ai-concierge__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/ai-concierge/` | JSON |
| Verified data | `data/verified/ai-concierge/` | JSON |
| Agent log | `logs/ai-concierge-[DATE].json` | JSON |
| Human report | `reports/generated/ai-concierge-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `data/madison-main/n8n-workflows/originals/archives/cicerone/ai-concierge.json`
