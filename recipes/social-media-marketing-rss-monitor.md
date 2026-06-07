# Social Media Marketing RSS Monitor

## Purpose

Aggregates social-media and marketing RSS sources from HubSpot, Sprout Social, Hootsuite, Social Media Examiner, and Search Engine Journal. The business question is: what signals from these specific sources are reliable enough for a human boss to use in social media marketing monitoring decisions?

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Fetch HubSpot marketing RSS | `n8n-nodes-base.rssFeedRead` | `https://blog.hubspot.com/marketing/rss.xml` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Fetch Sprout Social insights RSS | `n8n-nodes-base.rssFeedRead` | `https://sproutsocial.com/insights/feed/` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Fetch Hootsuite blog RSS | `n8n-nodes-base.rssFeedRead` | `https://blog.hootsuite.com/feed/` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Fetch Social Media Examiner RSS | `n8n-nodes-base.rssFeedRead` | `https://www.socialmediaexaminer.com/feed/` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Fetch Search Engine Journal RSS | `n8n-nodes-base.rssFeedRead` | `https://www.searchenginejournal.com/feed/` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Fetch Search Engine Journal duplicate RSS source | `n8n-nodes-base.rssFeedRead` | `https://www.searchenginejournal.com/feed/` | Confirm source is allowed, current, and rate-safe before live fetch. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| When clicking 'Execute workflow' | `n8n-nodes-base.manualTrigger` | conductor |
| Fetch HubSpot marketing RSS | `n8n-nodes-base.rssFeedRead` | ingest |
| Fetch Sprout Social insights RSS | `n8n-nodes-base.rssFeedRead` | ingest |
| Fetch Hootsuite blog RSS | `n8n-nodes-base.rssFeedRead` | ingest |
| Merge | `n8n-nodes-base.merge` | conductor |
| Merge1 | `n8n-nodes-base.merge` | conductor |
| Normalize social-media marketing RSS fields | `n8n-nodes-base.set` | gigo |
| Prepare social-media marketing feed export | `n8n-nodes-base.convertToFile` | tool |
| Fetch Social Media Examiner RSS | `n8n-nodes-base.rssFeedRead` | ingest |
| Fetch Search Engine Journal RSS | `n8n-nodes-base.rssFeedRead` | ingest |
| Fetch Search Engine Journal duplicate RSS source | `n8n-nodes-base.rssFeedRead` | ingest |
| Merge2 | `n8n-nodes-base.merge` | conductor |
| Merge3 | `n8n-nodes-base.merge` | conductor |
| Merge4 | `n8n-nodes-base.merge` | conductor |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/zuxinchen_405407_41801846_Zu_Xinchen_A3_Workflow.json | Yes |
| Fetch HubSpot marketing RSS | Source payload | `https://blog.hubspot.com/marketing/rss.xml` | Yes |
| Fetch Sprout Social insights RSS | Source payload | `https://sproutsocial.com/insights/feed/` | Yes |
| Fetch Hootsuite blog RSS | Source payload | `https://blog.hootsuite.com/feed/` | Yes |
| Fetch Social Media Examiner RSS | Source payload | `https://www.socialmediaexaminer.com/feed/` | Yes |
| Fetch Search Engine Journal RSS | Source payload | `https://www.searchenginejournal.com/feed/` | Yes |
| Fetch Search Engine Journal duplicate RSS source | Source payload | `https://www.searchenginejournal.com/feed/` | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/zuxinchen_405407_41801846_Zu_Xinchen_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/social-media-marketing-rss-monitor.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run social-media-marketing-rss-monitor --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/social-media-marketing-rss-monitor data/verified/social-media-marketing-rss-monitor -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/social-media-marketing-rss-monitor.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/zuxinchen_405407_41801846_Zu_Xinchen_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Fetch HubSpot marketing RSS. Labor: AI with Human gate.
   Script called: `scripts/ingest/social-media-marketing-rss-monitor__fetch-hubspot-marketing-rss.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
3. Step name: Fetch Sprout Social insights RSS. Labor: AI with Human gate.
   Script called: `scripts/ingest/social-media-marketing-rss-monitor__fetch-sprout-social-insights-rss.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
4. Step name: Fetch Hootsuite blog RSS. Labor: AI with Human gate.
   Script called: `scripts/ingest/social-media-marketing-rss-monitor__fetch-hootsuite-blog-rss.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
5. Step name: Normalize social-media marketing RSS fields. Labor: AI with Human gate.
   Script called: `scripts/gigo/social-media-marketing-rss-monitor__normalize-social-media-marketing-rss-fields.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
6. Step name: Prepare social-media marketing feed export. Labor: AI with Human gate.
   Script called: `scripts/tools/social-media-marketing-rss-monitor__prepare-social-media-marketing-feed-export.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
7. Step name: Fetch Social Media Examiner RSS. Labor: AI with Human gate.
   Script called: `scripts/ingest/social-media-marketing-rss-monitor__fetch-social-media-examiner-rss.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
8. Step name: Fetch Search Engine Journal RSS. Labor: AI with Human gate.
   Script called: `scripts/ingest/social-media-marketing-rss-monitor__fetch-search-engine-journal-rss.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
9. Step name: Fetch Search Engine Journal duplicate RSS source. Labor: AI with Human gate.
   Script called: `scripts/ingest/social-media-marketing-rss-monitor__fetch-search-engine-journal-duplicate-rss-source.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
10. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/social-media-marketing-rss-monitor__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/social-media-marketing-rss-monitor-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/social-media-marketing-rss-monitor-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Social Media Marketing RSS Monitor` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/zuxinchen_405407_41801846_Zu_Xinchen_A3_Workflow.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TODO: APPROVE] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TODO: DEFINE] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run social-media-marketing-rss-monitor --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run social-media-marketing-rss-monitor --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Fetch HubSpot marketing RSS | `snickerdoodle run social-media-marketing-rss-monitor --step fetch-hubspot-marketing-rss` | `--sample` |
| Fetch Sprout Social insights RSS | `snickerdoodle run social-media-marketing-rss-monitor --step fetch-sprout-social-insights-rss` | `--sample` |
| Fetch Hootsuite blog RSS | `snickerdoodle run social-media-marketing-rss-monitor --step fetch-hootsuite-blog-rss` | `--sample` |
| Normalize social-media marketing RSS fields | `snickerdoodle run social-media-marketing-rss-monitor --step normalize-social-media-marketing-rss-fields` |  |
| Prepare social-media marketing feed export | `snickerdoodle run social-media-marketing-rss-monitor --step prepare-social-media-marketing-feed-export` | `--no-write` |
| Fetch Social Media Examiner RSS | `snickerdoodle run social-media-marketing-rss-monitor --step fetch-social-media-examiner-rss` | `--sample` |
| Fetch Search Engine Journal RSS | `snickerdoodle run social-media-marketing-rss-monitor --step fetch-search-engine-journal-rss` | `--sample` |
| Fetch Search Engine Journal duplicate RSS source | `snickerdoodle run social-media-marketing-rss-monitor --step fetch-search-engine-journal-duplicate-rss-source` | `--sample` |
| Produce human report | `snickerdoodle run social-media-marketing-rss-monitor --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate social-media-marketing-rss-monitor --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate social-media-marketing-rss-monitor --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate social-media-marketing-rss-monitor --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Fetch HubSpot marketing RSS | `scripts/ingest/social-media-marketing-rss-monitor__fetch-hubspot-marketing-rss.py` | ingest |
| Fetch Sprout Social insights RSS | `scripts/ingest/social-media-marketing-rss-monitor__fetch-sprout-social-insights-rss.py` | ingest |
| Fetch Hootsuite blog RSS | `scripts/ingest/social-media-marketing-rss-monitor__fetch-hootsuite-blog-rss.py` | ingest |
| Normalize social-media marketing RSS fields | `scripts/gigo/social-media-marketing-rss-monitor__normalize-social-media-marketing-rss-fields.py` | gigo |
| Prepare social-media marketing feed export | `scripts/tools/social-media-marketing-rss-monitor__prepare-social-media-marketing-feed-export.py` | tool |
| Fetch Social Media Examiner RSS | `scripts/ingest/social-media-marketing-rss-monitor__fetch-social-media-examiner-rss.py` | ingest |
| Fetch Search Engine Journal RSS | `scripts/ingest/social-media-marketing-rss-monitor__fetch-search-engine-journal-rss.py` | ingest |
| Fetch Search Engine Journal duplicate RSS source | `scripts/ingest/social-media-marketing-rss-monitor__fetch-search-engine-journal-duplicate-rss-source.py` | ingest |
| Produce human report | `scripts/tools/social-media-marketing-rss-monitor__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/social-media-marketing-rss-monitor/` | JSON |
| Verified data | `data/verified/social-media-marketing-rss-monitor/` | JSON |
| Agent log | `logs/social-media-marketing-rss-monitor-[DATE].json` | JSON |
| Human report | `reports/generated/social-media-marketing-rss-monitor-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/zuxinchen_405407_41801846_Zu_Xinchen_A3_Workflow.json`
