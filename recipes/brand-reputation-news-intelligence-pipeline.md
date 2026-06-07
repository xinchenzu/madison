# Brand Reputation News Intelligence Pipeline

## Purpose

Combines TechCrunch, Ars Technica, The Verge, Google News brand queries, NewsAPI, and Hugging Face text rows into a deduplicated brand-reputation intelligence dataset. The business question is: what signals from these specific sources are reliable enough for a human boss to use in brand reputation intelligence decisions?

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| RSS - TechCrunch | `n8n-nodes-base.rssFeedRead` | `https://techcrunch.com/feed/` | Confirm source is allowed, current, and rate-safe before live fetch. |
| RSS - Ars Technica | `n8n-nodes-base.rssFeedRead` | `https://feeds.arstechnica.com/arstechnica/index` | Confirm source is allowed, current, and rate-safe before live fetch. |
| RSS - The Verge | `n8n-nodes-base.rssFeedRead` | `https://www.theverge.com/rss/index.xml` | Confirm source is allowed, current, and rate-safe before live fetch. |
| RSS - Google News (Brand) | `n8n-nodes-base.rssFeedRead` | `https://news.google.com/rss/search?q=brand+reputation+OR+brand+monitoring+OR+brand+voice+AI&hl=en-US&gl=US&ceid=US:en` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Fetch NewsAPI brand-reputation articles | `n8n-nodes-base.httpRequest` | `https://newsapi.org/v2/everything` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Fetch Hugging Face text dataset rows | `n8n-nodes-base.httpRequest` | `https://datasets-server.huggingface.co/rows?dataset=SetFit%2F20_newsgroups&config=default&split=train&offset=0&length=80` | Confirm source is allowed, current, and rate-safe before live fetch. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| Run Workflow | `n8n-nodes-base.manualTrigger` | conductor |
| RSS - TechCrunch | `n8n-nodes-base.rssFeedRead` | ingest |
| RSS - Ars Technica | `n8n-nodes-base.rssFeedRead` | ingest |
| RSS - The Verge | `n8n-nodes-base.rssFeedRead` | ingest |
| RSS - Google News (Brand) | `n8n-nodes-base.rssFeedRead` | ingest |
| Fetch NewsAPI brand-reputation articles | `n8n-nodes-base.httpRequest` | ingest |
| Fetch Hugging Face text dataset rows | `n8n-nodes-base.httpRequest` | ingest |
| Norm TechCrunch | `n8n-nodes-base.code` | tool |
| Norm Ars Technica | `n8n-nodes-base.code` | tool |
| Norm The Verge | `n8n-nodes-base.code` | tool |
| Norm Google News | `n8n-nodes-base.code` | tool |
| Norm NewsAPI | `n8n-nodes-base.code` | tool |
| Norm HuggingFace | `n8n-nodes-base.code` | gigo |
| Merge TC+Ars | `n8n-nodes-base.merge` | conductor |
| Merge +Verge | `n8n-nodes-base.merge` | conductor |
| Merge +GNews | `n8n-nodes-base.merge` | conductor |
| Merge +NewsAPI | `n8n-nodes-base.merge` | conductor |
| Merge +HF | `n8n-nodes-base.merge` | conductor |
| Deduplicate & Validate | `n8n-nodes-base.code` | gigo |
| Prepare brand-reputation CSV export | `n8n-nodes-base.convertToFile` | tool |
| Write brand-reputation CSV handoff | `n8n-nodes-base.readWriteFile` | tool |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json | Yes |
| RSS - TechCrunch | Source payload | `https://techcrunch.com/feed/` | Yes |
| RSS - Ars Technica | Source payload | `https://feeds.arstechnica.com/arstechnica/index` | Yes |
| RSS - The Verge | Source payload | `https://www.theverge.com/rss/index.xml` | Yes |
| RSS - Google News (Brand) | Source payload | `https://news.google.com/rss/search?q=brand+reputation+OR+brand+monitoring+OR+brand+voice+AI&hl=en-US&gl=US&ceid=US:en` | Yes |
| Fetch NewsAPI brand-reputation articles | Source payload | `https://newsapi.org/v2/everything` | Yes |
| Fetch Hugging Face text dataset rows | Source payload | `https://datasets-server.huggingface.co/rows?dataset=SetFit%2F20_newsgroups&config=default&split=train&offset=0&length=80` | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/brand-reputation-news-intelligence-pipeline.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run brand-reputation-news-intelligence-pipeline --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/brand-reputation-news-intelligence-pipeline data/verified/brand-reputation-news-intelligence-pipeline -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/brand-reputation-news-intelligence-pipeline.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: RSS - TechCrunch. Labor: AI with Human gate.
   Script called: `scripts/ingest/brand-reputation-news-intelligence-pipeline__rss-techcrunch.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
3. Step name: RSS - Ars Technica. Labor: AI with Human gate.
   Script called: `scripts/ingest/brand-reputation-news-intelligence-pipeline__rss-ars-technica.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
4. Step name: RSS - The Verge. Labor: AI with Human gate.
   Script called: `scripts/ingest/brand-reputation-news-intelligence-pipeline__rss-the-verge.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
5. Step name: RSS - Google News (Brand). Labor: AI with Human gate.
   Script called: `scripts/ingest/brand-reputation-news-intelligence-pipeline__rss-google-news-brand.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
6. Step name: Fetch NewsAPI brand-reputation articles. Labor: AI with Human gate.
   Script called: `scripts/ingest/brand-reputation-news-intelligence-pipeline__fetch-newsapi-brand-reputation-articles.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
7. Step name: Fetch Hugging Face text dataset rows. Labor: AI with Human gate.
   Script called: `scripts/ingest/brand-reputation-news-intelligence-pipeline__fetch-hugging-face-text-dataset-rows.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
8. Step name: Norm TechCrunch. Labor: AI with Human gate.
   Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-techcrunch.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
9. Step name: Norm Ars Technica. Labor: AI with Human gate.
   Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-ars-technica.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
10. Step name: Norm The Verge. Labor: AI with Human gate.
   Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-the-verge.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
11. Step name: Norm Google News. Labor: AI with Human gate.
   Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-google-news.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
12. Step name: Norm NewsAPI. Labor: AI with Human gate.
   Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-newsapi.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
13. Step name: Norm HuggingFace. Labor: AI with Human gate.
   Script called: `scripts/gigo/brand-reputation-news-intelligence-pipeline__norm-huggingface.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
14. Step name: Deduplicate & Validate. Labor: AI with Human gate.
   Script called: `scripts/gigo/brand-reputation-news-intelligence-pipeline__deduplicate-and-validate.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
15. Step name: Prepare brand-reputation CSV export. Labor: AI with Human gate.
   Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__prepare-brand-reputation-csv-export.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
16. Step name: Write brand-reputation CSV handoff. Labor: AI with Human gate.
   Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__write-brand-reputation-csv-handoff.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
17. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/brand-reputation-news-intelligence-pipeline-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/brand-reputation-news-intelligence-pipeline-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Brand Reputation News Intelligence Pipeline` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TODO: APPROVE] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TODO: DEFINE] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run brand-reputation-news-intelligence-pipeline --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run brand-reputation-news-intelligence-pipeline --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| RSS - TechCrunch | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step rss-techcrunch` | `--sample` |
| RSS - Ars Technica | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step rss-ars-technica` | `--sample` |
| RSS - The Verge | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step rss-the-verge` | `--sample` |
| RSS - Google News (Brand) | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step rss-google-news-brand` | `--sample` |
| Fetch NewsAPI brand-reputation articles | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step fetch-newsapi-brand-reputation-articles` | `--sample` |
| Fetch Hugging Face text dataset rows | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step fetch-hugging-face-text-dataset-rows` | `--sample` |
| Norm TechCrunch | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step norm-techcrunch` | `--no-write` |
| Norm Ars Technica | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step norm-ars-technica` | `--no-write` |
| Norm The Verge | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step norm-the-verge` | `--no-write` |
| Norm Google News | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step norm-google-news` | `--no-write` |
| Norm NewsAPI | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step norm-newsapi` | `--no-write` |
| Norm HuggingFace | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step norm-huggingface` |  |
| Deduplicate & Validate | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step deduplicate-and-validate` |  |
| Prepare brand-reputation CSV export | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step prepare-brand-reputation-csv-export` | `--no-write` |
| Write brand-reputation CSV handoff | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step write-brand-reputation-csv-handoff` | `--no-write` |
| Produce human report | `snickerdoodle run brand-reputation-news-intelligence-pipeline --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate brand-reputation-news-intelligence-pipeline --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate brand-reputation-news-intelligence-pipeline --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate brand-reputation-news-intelligence-pipeline --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| RSS - TechCrunch | `scripts/ingest/brand-reputation-news-intelligence-pipeline__rss-techcrunch.py` | ingest |
| RSS - Ars Technica | `scripts/ingest/brand-reputation-news-intelligence-pipeline__rss-ars-technica.py` | ingest |
| RSS - The Verge | `scripts/ingest/brand-reputation-news-intelligence-pipeline__rss-the-verge.py` | ingest |
| RSS - Google News (Brand) | `scripts/ingest/brand-reputation-news-intelligence-pipeline__rss-google-news-brand.py` | ingest |
| Fetch NewsAPI brand-reputation articles | `scripts/ingest/brand-reputation-news-intelligence-pipeline__fetch-newsapi-brand-reputation-articles.py` | ingest |
| Fetch Hugging Face text dataset rows | `scripts/ingest/brand-reputation-news-intelligence-pipeline__fetch-hugging-face-text-dataset-rows.py` | ingest |
| Norm TechCrunch | `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-techcrunch.py` | tool |
| Norm Ars Technica | `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-ars-technica.py` | tool |
| Norm The Verge | `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-the-verge.py` | tool |
| Norm Google News | `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-google-news.py` | tool |
| Norm NewsAPI | `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-newsapi.py` | tool |
| Norm HuggingFace | `scripts/gigo/brand-reputation-news-intelligence-pipeline__norm-huggingface.py` | gigo |
| Deduplicate & Validate | `scripts/gigo/brand-reputation-news-intelligence-pipeline__deduplicate-and-validate.py` | gigo |
| Prepare brand-reputation CSV export | `scripts/tools/brand-reputation-news-intelligence-pipeline__prepare-brand-reputation-csv-export.py` | tool |
| Write brand-reputation CSV handoff | `scripts/tools/brand-reputation-news-intelligence-pipeline__write-brand-reputation-csv-handoff.py` | tool |
| Produce human report | `scripts/tools/brand-reputation-news-intelligence-pipeline__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/brand-reputation-news-intelligence-pipeline/` | JSON |
| Verified data | `data/verified/brand-reputation-news-intelligence-pipeline/` | JSON |
| Agent log | `logs/brand-reputation-news-intelligence-pipeline-[DATE].json` | JSON |
| Human report | `reports/generated/brand-reputation-news-intelligence-pipeline-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json`
