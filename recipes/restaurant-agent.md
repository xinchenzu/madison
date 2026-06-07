# restaurant-agent

## Purpose

The restaurant-agent workflow handles TasteBuds Cafe customer requests for food orders and table reservations. It translates the imported webhook-and-agent flow into a recipe with explicit ingest boundaries, local tool contracts, human phase gates, and auditable outputs so order and reservation writes do not happen silently.

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
| Original n8n workflow JSON | JSON | data/madison-main/n8n-workflows/originals/archives/cicerone/restaurant-agent.json | Yes |
| Customer query | Text | Webhook body field `query` | Yes |
| Menu rows | Tabular rows | Restaurant Menu workflow export via `scripts/ingest/restaurant-agent-get-menu.py` | Yes |
| Reservation availability rows | Tabular rows | Google Sheets export via `scripts/ingest/restaurant-agent-get-reservation-availability.py` | Yes |
| Confirmed reservation rows | Tabular rows | Google Sheets export via `scripts/ingest/restaurant-agent-get-confirmed-reservations.py` | Yes |
| Order rows | Tabular rows | Google Sheets export via `scripts/ingest/restaurant-agent-get-orders.py` | Yes |
| Proposed write action | JSON object | Human-cleared agent draft | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "data/madison-main/n8n-workflows/originals/archives/cicerone/restaurant-agent.json"`.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/restaurant-agent.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run restaurant-agent --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/restaurant-agent data/verified/restaurant-agent -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/restaurant-agent.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: data/madison-main/n8n-workflows/originals/archives/cicerone/restaurant-agent.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/restaurant-agent__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/restaurant-agent__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/restaurant-agent-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/restaurant-agent-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `restaurant-agent` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the original JSON is missing or no longer matches the documented provenance path.
- Stop if live ingest is requested without explicit human clearance and source identifiers.
- Stop if menu, order, reservation availability, or confirmed reservation data cannot be parsed as JSON arrays of objects.
- Stop if an order references an unavailable or unknown menu item.
- Stop if a reservation slot is unavailable, missing, malformed, or ambiguous.
- Stop if a reservation update would overwrite unrelated time slots.
- Stop if a confirmed reservation write is requested before the availability block is logged.
- Stop if customer identity is needed before sharing or modifying an existing order or reservation.
- Stop if customer-facing output contains unverified prices, allergens, delivery terms, reservation capacity, or staff promises.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run restaurant-agent --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run restaurant-agent --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Map workflow or specification to scripts | `snickerdoodle run restaurant-agent --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run restaurant-agent --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate restaurant-agent --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate restaurant-agent --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate restaurant-agent --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/restaurant-agent__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/restaurant-agent__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/restaurant-agent/` | JSON |
| Verified data | `data/verified/restaurant-agent/` | JSON |
| Agent log | `logs/restaurant-agent-[DATE].json` | JSON |
| Human report | `reports/generated/restaurant-agent-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `data/madison-main/n8n-workflows/originals/archives/cicerone/restaurant-agent.json`
