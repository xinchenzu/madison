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
| Original n8n workflow JSON | JSON | `pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json` | Yes |
| RSS - TechCrunch | Source payload | `https://techcrunch.com/feed/` | Yes |
| RSS - Ars Technica | Source payload | `https://feeds.arstechnica.com/arstechnica/index` | Yes |
| RSS - The Verge | Source payload | `https://www.theverge.com/rss/index.xml` | Yes |
| RSS - Google News (Brand) | Source payload | `https://news.google.com/rss/search?q=brand+reputation+OR+brand+monitoring+OR+brand+voice+AI&hl=en-US&gl=US&ceid=US:en` | Yes |
| Fetch NewsAPI brand-reputation articles | Source payload | `https://newsapi.org/v2/everything` | Yes |
| Fetch Hugging Face text dataset rows | Source payload | `https://datasets-server.huggingface.co/rows?dataset=SetFit%2F20_newsgroups&config=default&split=train&offset=0&length=80` | Yes |

## Phase Gates

1. Source identity gate: verify that `pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json` is the intended workflow and that this recipe title describes the actual work. Test: `test -f "pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json"` and compare the Source Inventory against the original n8n JSON. Human capacity: [PF], [TO].
2. Source permission gate: approve, replace, or mark `[TO DO]` for every URL, API, RSS feed, local file, and machine-specific path. Test: gate decision recorded in `logs/gate-decisions/`; any embedded credential is redacted and migrated to an env var before live use. Human capacity: [EI].
3. Sample ingest gate: run every ingest node in local/sample handoff mode before live requests. Test: `python3 <ingest-script> --no-write` exits successfully and reports `live_call_performed: false`. Human capacity: [PA], [TO].
4. Data-shape gate: raw outputs parse as JSON and contain the fields needed by cleanup. Test: `python3 -m json.tool <raw-output>` plus human spot check of three records. Human capacity: [PA], [IJ].
5. Cleanup rule gate: GIGO outputs expose record count, rejects, duplicates, missing fields, and required-field assumptions. Test: inspect `data/verified/brand-reputation-news-intelligence-pipeline/`; if critical fields are undefined, add `[TO DO] define required fields` and stop. Human capacity: [IJ].
6. Claim gate: reports must separate source-backed claims from interpretation. Test: every finding cites source/verified records or is marked `[TO DO] needs evidence`. Human capacity: [IJ], [EI].
7. Live-action gate: file exports, dashboards, emails, model calls, API writes, and local machine paths remain local handoff contracts until explicitly approved. Test: output contract says `approved_for_live_action: false` unless signed off. Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: AI plus Human. Script called: none. Input: `pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json`. Output: provenance and title check. Where output goes: `logs/`. Human check: confirm this recipe is named for the work it does and not for a submitter or assignment label.
2. Step name: RSS - TechCrunch. Labor: AI with Human gate. Script called: `scripts/ingest/brand-reputation-news-intelligence-pipeline__rss-techcrunch.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
3. Step name: RSS - Ars Technica. Labor: AI with Human gate. Script called: `scripts/ingest/brand-reputation-news-intelligence-pipeline__rss-ars-technica.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
4. Step name: RSS - The Verge. Labor: AI with Human gate. Script called: `scripts/ingest/brand-reputation-news-intelligence-pipeline__rss-the-verge.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
5. Step name: RSS - Google News (Brand). Labor: AI with Human gate. Script called: `scripts/ingest/brand-reputation-news-intelligence-pipeline__rss-google-news-brand.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
6. Step name: Fetch NewsAPI brand-reputation articles. Labor: AI with Human gate. Script called: `scripts/ingest/brand-reputation-news-intelligence-pipeline__fetch-newsapi-brand-reputation-articles.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
7. Step name: Fetch Hugging Face text dataset rows. Labor: AI with Human gate. Script called: `scripts/ingest/brand-reputation-news-intelligence-pipeline__fetch-hugging-face-text-dataset-rows.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
8. Step name: Norm TechCrunch. Labor: AI with Human gate. Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-techcrunch.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
9. Step name: Norm Ars Technica. Labor: AI with Human gate. Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-ars-technica.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
10. Step name: Norm The Verge. Labor: AI with Human gate. Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-the-verge.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
11. Step name: Norm Google News. Labor: AI with Human gate. Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-google-news.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
12. Step name: Norm NewsAPI. Labor: AI with Human gate. Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__norm-newsapi.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
13. Step name: Norm HuggingFace. Labor: AI with Human gate. Script called: `scripts/gigo/brand-reputation-news-intelligence-pipeline__norm-huggingface.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
14. Step name: Deduplicate & Validate. Labor: AI with Human gate. Script called: `scripts/gigo/brand-reputation-news-intelligence-pipeline__deduplicate-validate.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
15. Step name: Prepare brand-reputation CSV export. Labor: AI with Human gate. Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__prepare-brand-reputation-csv-export.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
16. Step name: Write brand-reputation CSV handoff. Labor: AI with Human gate. Script called: `scripts/tools/brand-reputation-news-intelligence-pipeline__write-brand-reputation-csv-handoff.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
17. Step name: Produce human report. Labor: AI with Human review. Script called: none; conductor fills `reports/templates/brand-reputation-news-intelligence-pipeline.md`. Input: run log and verified outputs. Output: decision report. Where output goes: `reports/generated/`. Human check: read sources, findings, anomalies, `[TO DO]` gaps, and decisions before treating findings as evidence.

## Human Review Checklist

- Confirm the title and purpose match what the workflow actually does.
- Confirm each source is approved, still reachable, and appropriate for the intended use.
- Replace machine-specific local paths with Madison repo paths or mark `[TO DO] replace source`.
- Replace any credential embedded in the original n8n JSON with an environment variable before live use.
- Inspect at least three raw records and three verified records before accepting a run.
- Review duplicate, rejected, and missing-field counts.
- Confirm the final report separates evidence from interpretation.
- Confirm no live export, API call, file write outside the repo, or credentialed action occurs without approval.

## Output Contract

### Agent output

The agent output goes to `logs/brand-reputation-news-intelligence-pipeline-[DATE].json` and contains `workflow`, `source_json`, `source_inventory`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `handoffs`, `flags`, `todo_items`, `stop_conditions`, and `generated_at`.

### Human report

The human report goes to `reports/generated/brand-reputation-news-intelligence-pipeline-[DATE].md`. It surfaces the source list, cleanup changes, supported claims, `[TO DO]` gaps, and decisions that require a human boss.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TO DO] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TO DO] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Provenance

Original workflow JSON: `pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json`
