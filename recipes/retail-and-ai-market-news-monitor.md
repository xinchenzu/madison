# Retail And AI Market News Monitor

## Purpose

Combines Amazon company news, TechCrunch AI stories, and CNBC business RSS into a cleaned market-intelligence feed. The business question is: what signals from these specific sources are reliable enough for a human boss to use in market news monitoring decisions?

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Amazon News RSS | `n8n-nodes-base.rssFeedRead` | `https://www.aboutamazon.com/news/rss` | Confirm source is allowed, current, and rate-safe before live fetch. |
| TechCrunch AI RSS | `n8n-nodes-base.rssFeedRead` | `https://techcrunch.com/category/artificial-intelligence/feed/` | Confirm source is allowed, current, and rate-safe before live fetch. |
| CNBC Business RSS | `n8n-nodes-base.rssFeedRead` | `https://www.cnbc.com/id/10001147/device/rss/rss.html` | Confirm source is allowed, current, and rate-safe before live fetch. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| When clicking 'Execute workflow' | `n8n-nodes-base.manualTrigger` | conductor |
| Amazon News RSS | `n8n-nodes-base.rssFeedRead` | ingest |
| Merge | `n8n-nodes-base.merge` | conductor |
| Data Cleanup | `n8n-nodes-base.set` | gigo |
| TechCrunch AI RSS | `n8n-nodes-base.rssFeedRead` | ingest |
| CNBC Business RSS | `n8n-nodes-base.rssFeedRead` | ingest |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/pokalegayatri_333110_41799405_Pokale_Gayatri_A3_Workflow.json | Yes |
| Amazon News RSS | Source payload | `https://www.aboutamazon.com/news/rss` | Yes |
| TechCrunch AI RSS | Source payload | `https://techcrunch.com/category/artificial-intelligence/feed/` | Yes |
| CNBC Business RSS | Source payload | `https://www.cnbc.com/id/10001147/device/rss/rss.html` | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/pokalegayatri_333110_41799405_Pokale_Gayatri_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/retail-and-ai-market-news-monitor.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run retail-and-ai-market-news-monitor --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/retail-and-ai-market-news-monitor data/verified/retail-and-ai-market-news-monitor -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/retail-and-ai-market-news-monitor.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/pokalegayatri_333110_41799405_Pokale_Gayatri_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Amazon News RSS. Labor: AI with Human gate.
   Script called: `scripts/ingest/retail-and-ai-market-news-monitor__amazon-news-rss.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
3. Step name: Data Cleanup. Labor: AI with Human gate.
   Script called: `scripts/gigo/retail-and-ai-market-news-monitor__data-cleanup.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
4. Step name: TechCrunch AI RSS. Labor: AI with Human gate.
   Script called: `scripts/ingest/retail-and-ai-market-news-monitor__techcrunch-ai-rss.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
5. Step name: CNBC Business RSS. Labor: AI with Human gate.
   Script called: `scripts/ingest/retail-and-ai-market-news-monitor__cnbc-business-rss.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
6. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/retail-and-ai-market-news-monitor__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/retail-and-ai-market-news-monitor-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/retail-and-ai-market-news-monitor-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Retail And AI Market News Monitor` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/pokalegayatri_333110_41799405_Pokale_Gayatri_A3_Workflow.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TODO: APPROVE] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TODO: DEFINE] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run retail-and-ai-market-news-monitor --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run retail-and-ai-market-news-monitor --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Amazon News RSS | `snickerdoodle run retail-and-ai-market-news-monitor --step amazon-news-rss` | `--sample` |
| Data Cleanup | `snickerdoodle run retail-and-ai-market-news-monitor --step data-cleanup` |  |
| TechCrunch AI RSS | `snickerdoodle run retail-and-ai-market-news-monitor --step techcrunch-ai-rss` | `--sample` |
| CNBC Business RSS | `snickerdoodle run retail-and-ai-market-news-monitor --step cnbc-business-rss` | `--sample` |
| Produce human report | `snickerdoodle run retail-and-ai-market-news-monitor --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate retail-and-ai-market-news-monitor --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate retail-and-ai-market-news-monitor --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate retail-and-ai-market-news-monitor --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Amazon News RSS | `scripts/ingest/retail-and-ai-market-news-monitor__amazon-news-rss.py` | ingest |
| Data Cleanup | `scripts/gigo/retail-and-ai-market-news-monitor__data-cleanup.py` | gigo |
| TechCrunch AI RSS | `scripts/ingest/retail-and-ai-market-news-monitor__techcrunch-ai-rss.py` | ingest |
| CNBC Business RSS | `scripts/ingest/retail-and-ai-market-news-monitor__cnbc-business-rss.py` | ingest |
| Produce human report | `scripts/tools/retail-and-ai-market-news-monitor__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/retail-and-ai-market-news-monitor/` | JSON |
| Verified data | `data/verified/retail-and-ai-market-news-monitor/` | JSON |
| Agent log | `logs/retail-and-ai-market-news-monitor-[DATE].json` | JSON |
| Human report | `reports/generated/retail-and-ai-market-news-monitor-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/pokalegayatri_333110_41799405_Pokale_Gayatri_A3_Workflow.json`
