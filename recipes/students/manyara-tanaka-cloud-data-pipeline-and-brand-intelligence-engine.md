# Manyara Tanaka - Cloud Data Pipeline Module And Brand Intelligence Engine

## What This Project Is

Manyara Tanaka built a Madison Cloud Data Pipeline Module that collects cloud platform and job-market signals, then extended it into a Brand Intelligence Analysis Engine. Assignment 3 collected AWS release/blog RSS, Google Cloud release notes, and cloud jobs data into a 150-record cleaned dataset for cloud skills and certification recommendations. Assignment 4 adds GPT-4o-mini analysis for sentiment, archetype detection, anomaly detection, content recommendations, and trend forecasting.

## Long-Term Goal

The A2 evidence points toward data engineering / AI engineering work involving Airflow, dbt, BigQuery/Snowflake, ETL orchestration, observability, and production AI infrastructure. The long-term project goal is to demonstrate enterprise-scale data ingestion plus AI insight generation that non-technical users can act on.

## Evidence Used To Build This Recipe

| Artifact | What it contributes |
| --- | --- |
| A2 PDFs | Cloud data pipeline integration module tied to data engineer / AI engineer portfolio proof. |
| A3 documentation PDF | Cloud Pipeline Data Collection: AWS RSS, Google Cloud RSS, cloud jobs CSV; 150 records, 100% complete. |
| A3 demo PDF | Shows 8-node workflow, 50 live AWS/GCP items, clean/standardize, quality check, CSV export. |
| A3 CSV | 150 rows with title, platform, skill_tags, summary, source, source_url, date, record_quality. |
| A4 PDF and sample brand report HTML | Brand Intelligence Analysis Engine, GPT-4o-mini, sentiment/archetype/anomaly/content/trend outputs. |

## Data Sources And Verification

| Source | Type | Records / Scope | Use In Project | Verification / Human Check |
| --- | --- | --- | --- | --- |
| AWS Blog RSS | Public RSS | 50 records in A3 documentation | AWS service updates and certification-relevant announcements. | Verify feed URL, date format, source_url, and AWS platform tag. |
| Google Cloud release notes RSS | Public RSS | 50 records in A3 documentation | GCP service releases and technical announcements. | Verify feed URL, date format, platform=GCP, and skill tags. |
| Cloud Jobs public CSV | Public CSV / HTTP | 50 records in A3 documentation | Job-market demand for cloud skills and certifications. | Verify URL/source provenance; original docs mention representative public dataset and workflow JSON uses GitHub raw CSV. |
| BigQuery / marketing data in A4 | Structured analytics data | [TO DO] exact source table not in pantry | Input to Brand Intelligence Analysis Engine. | Human must identify dataset/table and privacy boundary before production. |
| OpenAI GPT-4o-mini | AI service | A4 intelligence layer | Sentiment, archetype, anomaly, content recommendation, trend forecast. | Approve model, cost, prompt, retry/dead-letter behavior. |

## Data Schema And Quality Checks

A3 schema includes `title`, `platform`, `skill_tags`, `summary`, `source`, `source_url`, `date`, and `record_quality`. Documentation reports 150 complete records, 0 partial records, 0 duplicates, and standardized YYYY-MM-DD dates. A4 quality shifts from data completeness to insight reliability: it needs sentiment confidence, archetype rationale, anomaly thresholds, draft-post review, and trend forecast confidence intervals. The A4 PDF claims avg 23ms latency for brand-analysis prompts and full error workflow with retry, dead-letter queue, and alerts.

## Recipe Steps

| Step | Labor | Input | Output | Human Check |
| --- | --- | --- | --- | --- |
| Confirm cloud/brand intelligence scope | Human | A2/A3/A4 docs | Approved scope and target users | Clarify whether current run is cloud-skills intelligence or brand-health intelligence. |
| Collect cloud source data | AI | AWS RSS, GCP RSS, cloud jobs CSV | Raw source payloads | Check source URLs and whether job CSV is representative/current. |
| Clean and standardize | AI | Raw source records | Unified cloud signal records | Review platform, skill_tags, dates, source_url, duplicates. |
| Run quality check | AI + Human | Clean records | Quality statistics and rejects | Verify 150 complete records or mark missing sources. |
| Export cloud pipeline CSV | AI | Verified records | Cloud pipeline data CSV | Human checks certification/job-skill conclusions. |
| Load brand analytics data | AI with Human gate | BigQuery/marketing table [TO DO] | Structured brand data | Human identifies table, privacy scope, and data freshness. |
| Run GPT-4o-mini intelligence | AI | Structured brand data | Sentiment/archetype/anomaly/recommendation/forecast outputs | Human checks confidence, threshold, and unsupported claims. |
| Generate brand report and alerts | AI | AI outputs | HTML report, Slack digest, draft posts | Human approves alerting and draft content before live delivery. |

## AI Layer And Human Judgment

A4 adds a Brand Intelligence Analysis Engine powered by GPT-4o-mini. It classifies sentiment, detects Jungian brand archetype alignment, flags z-score anomalies, generates platform-specific draft posts, and forecasts 7-day brand health. Human review is mandatory because brand actions affect public messaging and anomaly thresholds can overfire.

## Reports, Logs, And Outputs

| Output | Audience | Purpose | Required Checks |
| --- | --- | --- | --- |
| Cloud pipeline CSV | Cloud learner / advisor agent | Cloud skills, release, and job-demand evidence. | Check source mix and platform tags. |
| Quality check output | Data reviewer | Completeness, duplicates, record quality. | Verify 100% claims against generated CSV. |
| Brand intelligence HTML report | Marketing / product stakeholder | Readable AI insights from structured brand data. | Check citations, confidence, and actionability. |
| Slack digest / draft posts | Team operators | Operational alerts and content suggestions. | Live sends require approval and content review. |

## Phase Gates

1. Scope gate: choose cloud-skills pipeline or brand intelligence run; do not blend claims without source linkage. [PF]
2. Source gate: confirm cloud jobs source is real/current and not merely representative. [PA]
3. Quality gate: record_quality must be complete before AI interpretation. [IJ]
4. AI gate: approve OpenAI model, prompt, anomaly threshold, and cost. [EI]
5. Content gate: no AI-generated post or Slack alert goes live without human approval. [EI]

## Stop Conditions

- Cloud jobs source cannot be verified.
- A4 BigQuery/marketing data source is not identified.
- AI insight lacks confidence/rationale.
- Slack alert or post draft would be sent without approval.
- Report mixes cloud certification data with brand intelligence claims without explanation.

## [TO DO] Items Before Production

- [TO DO] Identify exact A4 BigQuery/table source in repo or mark unavailable.
- [TO DO] Normalize A3 source URL mismatch for cloud jobs dataset.
- [TO DO] Add citations for brand report insights.
- [TO DO] Add alert threshold test cases.

## Provenance

- pantry/manyaratanaka_312461_41725845_Manyara_Tanaka_Week2-1.pdf
- pantry/manyaratanaka_312461_41801531_Tanaka_A3_Documentation.pdf
- pantry/manyaratanaka_312461_41801532_cloud_pipeline_data.csv
- pantry/manyaratanaka_312461_41801533_Tanaka_A3_Workflow.json
- pantry/manyaratanaka_312461_41919753_Manyara_Tanaka_Assignment4.pdf
- pantry/manyaratanaka_312461_41919751_sample_brand_report.html
