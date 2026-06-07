# Gayatri Pokale - Market Intelligence Agent With AI Sector Routing

## Purpose

Gayatri Pokale built a Market Intelligence Agent that monitors business, Amazon, and AI news from public RSS feeds. Assignment 3 collected and cleaned 66 records from CNBC Business, Amazon News, and TechCrunch AI. Assignment 4 extends the workflow into Market Intelligence Agent v2: Groq AI analyzes articles for sentiment, urgency, and sector; routes items to sector-specific emails; and flags high-urgency news for action.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| CNBC Business RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for CNBC Business RSS. | Verify RSS availability and business relevance. |
| Amazon News RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Amazon News RSS. | Verify source is aboutamazon.com/news/rss and source labels are preserved. |
| TechCrunch AI RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for TechCrunch AI RSS. | Verify feed category and article dates. |
| Groq llama-3.1-8b-instant | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Groq llama-3.1-8b-instant. | Approve API key, prompt, free-tier limits, sector labels, and email destinations. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/pokalegayatri_333110_41799405_Pokale_Gayatri_A3_Workflow.json | Yes |
| CNBC Business RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for CNBC Business RSS. | Yes |
| Amazon News RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for Amazon News RSS. | Yes |
| TechCrunch AI RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for TechCrunch AI RSS. | Yes |
| Groq llama-3.1-8b-instant | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Groq llama-3.1-8b-instant. | Yes |
| Gmail / sector email outputs | External delivery | [TODO: DATA SOURCE] Confirm source URL/path for Gmail / sector email outputs. | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/pokalegayatri_333110_41799405_Pokale_Gayatri_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/students/gayatri-pokale-market-intelligence-agent-sector-email-routing.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/gayatri-pokale-market-intelligence-agent-sector-email-routing data/verified/gayatri-pokale-market-intelligence-agent-sector-email-routing -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/gayatri-pokale-market-intelligence-agent-sector-email-routing.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/pokalegayatri_333110_41799405_Pokale_Gayatri_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/gayatri-pokale-market-intelligence-agent-sector-email-routing__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/gayatri-pokale-market-intelligence-agent-sector-email-routing__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/gayatri-pokale-market-intelligence-agent-sector-email-routing-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/gayatri-pokale-market-intelligence-agent-sector-email-routing-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Gayatri Pokale - Market Intelligence Agent With AI Sector Routing` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Any RSS source returns zero records without explanation.
- CSV export cannot be parsed.
- Groq output missing sentiment/urgency/sector.
- Email would be sent to real inbox without approval.
- Report states business urgency without article evidence.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Map workflow or specification to scripts | `snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run gayatri-pokale-market-intelligence-agent-sector-email-routing --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate gayatri-pokale-market-intelligence-agent-sector-email-routing --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate gayatri-pokale-market-intelligence-agent-sector-email-routing --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate gayatri-pokale-market-intelligence-agent-sector-email-routing --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/gayatri-pokale-market-intelligence-agent-sector-email-routing__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/gayatri-pokale-market-intelligence-agent-sector-email-routing__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/gayatri-pokale-market-intelligence-agent-sector-email-routing/` | JSON |
| Verified data | `data/verified/gayatri-pokale-market-intelligence-agent-sector-email-routing/` | JSON |
| Agent log | `logs/gayatri-pokale-market-intelligence-agent-sector-email-routing-[DATE].json` | JSON |
| Human report | `reports/generated/gayatri-pokale-market-intelligence-agent-sector-email-routing-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/pokalegayatri_333110_41799405_Pokale_Gayatri_A3_Workflow.json`
