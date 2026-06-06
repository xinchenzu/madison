# Vaibhav Singh - Brand Reputation Intelligence Agent

## What This Project Is

Vaibhav Singh built an open-source Madison Intelligence Agent for brand reputation monitoring. Assignment 3 collected brand-relevant text from RSS feeds, Google News, NewsAPI, and Hugging Face rows, normalized records into a nine-field schema, deduplicated them, and exported a CSV. Assignment 4 added AI-powered sentiment analysis, entity extraction, cited brand-health reporting, analysis cards, scale testing, and email delivery.

## Long-Term Goal

The A2 evidence targets a Boston Sr. AI Engineer role at Validity, emphasizing production agentic AI, TypeScript/agent frameworks, data quality, evaluation, and customer-facing consequences of bad AI outputs. The project demonstrates a measurable AI monitoring product rather than a toy scraper.

## Evidence Used To Build This Recipe

| Artifact | What it contributes |
| --- | --- |
| A2 PDF | Target role: Sr. AI Engineer; production agentic AI, Mastra willingness, quality/eval thinking. |
| A3 documentation/demo PDFs | Brand Reputation Monitor data inventory, 271 clean records in demo, source quality, 18-node workflow. |
| A3 CSV | 134 parseable records in pantry with id, title, source_name, source_url, published_date, topic_category, content_snippet, reliability_score, collection_method. |
| A4 zip PDF/report/CSVs | 271 articles, 55% positive sentiment, 30-node workflow, enriched CSV, sentiment summary, entity frequency, scale tests, brand health report. |
| A4 workflow v2 JSON | 30-node collection plus AI workflow. |

## Data Sources And Verification

| Source | Type | Records / Scope | Use In Project | Verification / Human Check |
| --- | --- | --- | --- | --- |
| TechCrunch RSS | Public RSS | 20 articles in A3 docs/demo | Technology and company news corpus. | Verify feed, dates, content snippets. |
| Ars Technica RSS | Public RSS | 20 articles in A3 docs/demo | Technology coverage. | Verify feed and date parsing. |
| The Verge RSS | Public RSS | 10 articles in A3 docs/demo | Technology/product coverage. | Verify feed and date parsing. |
| Google News brand query RSS | Public RSS | 100 records in A3 demo | Brand reputation/monitoring/voice AI query results. | Verify query, source titles, duplicate handling. |
| NewsAPI | API | 80 records in A3 demo | News corpus with query parameters. | Credential via env var only; validate relevance and API limits. |
| Hugging Face SetFit/20 Newsgroups rows | Public dataset API | 44 records in A3 demo | Supplemental text classification corpus. | Check dataset terms and relevance to brand monitoring. |
| GPT/Claude model in A4 | AI service | Enriched 271 records; scale tests up to 50 batch | Sentiment, entities, relevance, topic tags, report generation. | Approve model, cost, prompt, and email delivery. |

## Data Schema And Quality Checks

A3 documentation reports 274 raw records, 3 duplicates removed, 0 invalid, 271 clean records, 98.9% quality, and a 9-column schema. The pantry A3 CSV currently has 134 rows, so production must reconcile the submitted CSV with the documented 271-row demo/A4 enriched output. A4 enriched_data.csv uses 21 columns including AI sentiment, confidence, brands, products, people, competitors, relevance, topic tags, off-brand flag, summary, latency, and status. Scale tests show batches 1, 5, 10, 25, and 50 with 90-100% success and estimated costs.

## Recipe Steps

| Step | Labor | Input | Output | Human Check |
| --- | --- | --- | --- | --- |
| Confirm brand-monitoring use case | Human | A2/A3/A4 docs | Approved brand/reputation scope | Confirm target stakeholders and that outputs are not PR/legal advice. |
| Collect source text | AI | RSS, Google News, NewsAPI, Hugging Face | Raw text records | Check source permissions, API keys, source counts. |
| Normalize each source | AI | Raw payloads | Nine-field records | Review dates, source_name, source_url, topic_category, reliability_score. |
| Merge and deduplicate | AI | Normalized branches | Clean corpus | Review duplicate count and invalid records. |
| Export A3 CSV | AI | Clean corpus | Brand reputation data CSV | Reconcile 134 parseable pantry rows vs 271 documented records. |
| Run AI enrichment | AI with Human gate | Clean corpus | Sentiment/entities/relevance summaries | Approve model, prompt, cost, and failure handling. |
| Generate brand-health report | AI | AI-enriched records | HTML/Markdown report, analysis cards | Human verifies findings cite articles and entity extraction is plausible. |
| Deliver/email report | AI with Human gate | Report and CSV attachments | Email payload or sent report | Live email requires explicit approval. |

## AI Layer And Human Judgment

A4 uses an AI model to classify sentiment, extract brands/products/people/competitors, score relevance, create topic tags, detect off-brand content, summarize articles, and generate a brand-health report. The evidence mentions GPT-4o/GitHub Models in the PDF and Claude Sonnet 4 in scale-test output, so production must pin the actual provider/model before live runs.

## Reports, Logs, And Outputs

| Output | Audience | Purpose | Required Checks |
| --- | --- | --- | --- |
| A3 brand data CSV | Data reviewer | Clean source corpus for brand monitoring. | Reconcile row count and required fields. |
| A4 enriched_data.csv | Analyst / agent | AI-enriched 21-column records. | Check ai_status, latency, confidence, entity correctness. |
| Sentiment summary CSV | Marketing stakeholder | Sentiment distribution: 55.2% positive in sample. | Check denominator and date range. |
| Entity frequency CSV | Brand analyst | Top mentioned brands/entities. | Verify extraction against article text. |
| Brand health HTML report and cards | Human decision-maker | Readable cited report and gallery. | Check recommendations and citations before action. |
| Scale test results | Operator | Latency, p95, errors, throughput, cost. | Model/provider discrepancy must be resolved. |

## Phase Gates

1. Source gate: each RSS/API/dataset source approved and credential-safe. [TO], [EI]
2. Row-count gate: reconcile 134 local CSV rows, 271 documented clean records, and A4 enriched outputs. [PA]
3. Model gate: pin actual AI provider/model and cost. [EI]
4. Claim gate: sentiment/entity claims must cite articles and confidence. [IJ]
5. Delivery gate: no email delivery without reviewed content and approved recipients. [EI]

## Stop Conditions

- NewsAPI or model credentials appear in files/logs.
- Row count discrepancy remains unexplained.
- AI entity/sentiment output lacks confidence/status.
- Report recommends brand action without cited evidence.
- Email sends before approval.

## [TO DO] Items Before Production

- [TO DO] Reconcile 134-row pantry CSV with 271-record A3/A4 documentation.
- [TO DO] Pin actual A4 model/provider.
- [TO DO] Add citation IDs from report findings to source rows.
- [TO DO] Move email settings to approved config/env.

## Provenance

- pantry/singhvaibhav_351998_41725346_Assignment 2.pdf
- pantry/singhvaibhav_351998_41799854_Singh_Vaibhav_A3_Documentation.pdf
- pantry/singhvaibhav_351998_41799855_Singh_Vaibhav_A3_workflow.json
- pantry/singhvaibhav_351998_41799856_Singh_Vaibhav_A3_Data.csv
- pantry/Singh_Vaibhav_A4_Workflow_v2.json
- pantry/singhvaibhav_351998_41924237_Assignment 4 Vaibhav Singh.zip
