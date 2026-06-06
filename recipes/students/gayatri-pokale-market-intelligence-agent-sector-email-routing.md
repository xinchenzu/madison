# Gayatri Pokale - Market Intelligence Agent With AI Sector Routing

## What This Project Is

Gayatri Pokale built a Market Intelligence Agent that monitors business, Amazon, and AI news from public RSS feeds. Assignment 3 collected and cleaned 66 records from CNBC Business, Amazon News, and TechCrunch AI. Assignment 4 extends the workflow into Market Intelligence Agent v2: Groq AI analyzes articles for sentiment, urgency, and sector; routes items to sector-specific emails; and flags high-urgency news for action.

## Long-Term Goal

The A2 career target is Amazon Software Development Engineer, with backend Java, AWS services, distributed systems, microservices, CI/CD, and debugging as core growth areas. The project demonstrates automated monitoring, backend workflow orchestration, AI classification, and business-impact routing aligned with cloud-native operational systems.

## Evidence Used To Build This Recipe

| Artifact | What it contributes |
| --- | --- |
| A2 PDF | Career target: Amazon SDE; focus on Java, AWS Lambda/DynamoDB/SQS/S3/CloudWatch, distributed systems, CI/CD. |
| A3 documentation PDF | Market Intelligence Agent; 66 records, 100% quality, 3 public RSS sources, setup/errors. |
| A3 demo PDF | Workflow screenshots for CNBC, Amazon, TechCrunch, merge, cleanup, final Excel/CSV output. |
| A4 executive summary/architecture PDFs | Groq AI classification, six sector emails, urgency, performance metrics, error handling. |
| A4 workflow v2 JSON | Market Intelligence Agent v2 workflow. |

## Data Sources And Verification

| Source | Type | Records / Scope | Use In Project | Verification / Human Check |
| --- | --- | --- | --- | --- |
| CNBC Business RSS | Public RSS | 20 records in A3 docs | Business trends, company news, market updates. | Verify RSS availability and business relevance. |
| Amazon News RSS | Public RSS | 36 records in A3 docs | Amazon corporate news, AWS developments, sustainability, community investment. | Verify source is aboutamazon.com/news/rss and source labels are preserved. |
| TechCrunch AI RSS | Public RSS | 10 records in A3 docs | AI, startups, cloud, emerging technology. | Verify feed category and article dates. |
| Groq llama-3.1-8b-instant | AI service | A4 analysis at 10-100 article test sizes | Sentiment, urgency, sector classification, routing. | Approve API key, prompt, free-tier limits, sector labels, and email destinations. |
| Gmail / sector email outputs | External delivery | Healthcare, Tech, Retail, Finance, Legal, General | Live email requires human approval and non-sensitive recipient configuration. |

## Data Schema And Quality Checks

A3 reports 66 total clean records and 100% quality. The A3 Data CSV in pantry could not be parsed by the local CSV reader, so a production run must verify the exported format. A4 claims 6000+ articles collected, 60% positive sentiment, 34s per 10-article run, six sector emails, and error handling for rate limits/timeouts. Human verification must distinguish demo/scale claims from the currently available parseable dataset.

## Recipe Steps

| Step | Labor | Input | Output | Human Check |
| --- | --- | --- | --- | --- |
| Confirm market-monitoring scope | Human | A2/A3/A4 docs | Approved business sectors and recipients | Confirm this is market/news intelligence, not investment advice. |
| Read RSS sources | AI | CNBC, Amazon News, TechCrunch AI feeds | Raw article records | Check feeds are reachable and source counts make sense. |
| Merge feeds | AI | Three raw RSS branches | Combined article stream | Check no source branch is empty before merge. |
| Clean and standardize | AI | Merged records | Structured market records | Review headline, date, category/source, URL, and missing fields. |
| Export A3 data | AI | Clean records | CSV/Excel market dataset | Human checks file parses correctly; current pantry CSV needs repair or replacement. |
| Run Groq analysis | AI with Human gate | Clean articles | Sentiment, urgency, sector labels | Approve model, sector taxonomy, and urgency threshold. |
| Route sector emails | AI with Human gate | AI labels and article summaries | Email payloads per sector | Human approves recipients and content before live Gmail send. |
| Generate run report | AI | Clean and AI-labeled records | Market intelligence report/log | Human checks high-urgency claims and source links. |

## AI Layer And Human Judgment

Market Intelligence Agent v2 uses Groq llama-3.1-8b-instant to classify sentiment, urgency, and business sector, then route items to sector-specific email outputs. This can save manual monitoring time, but routing and urgency labels must be checked by a human before messages reach real teams.

## Reports, Logs, And Outputs

| Output | Audience | Purpose | Required Checks |
| --- | --- | --- | --- |
| A3 market dataset | Market analyst | Clean combined records from three RSS sources. | Must parse, show 66 records or explain discrepancy. |
| AI classification log | Operator | Sentiment, urgency, sector per article. | Check model errors and sector confusion. |
| Sector email payloads | Team recipients | Personalized news routing. | Live email disabled until approved. |
| Executive/architecture PDFs | Reviewer | Business value, performance, and architecture evidence. | Verify claims against logs and data. |

## Phase Gates

1. RSS gate: each feed must return records before merge. [TO]
2. CSV gate: exported A3 data must parse; current pantry CSV parse failed locally. [PA]
3. AI gate: approve Groq key, prompt, urgency threshold, and sector taxonomy. [EI]
4. Email gate: no Gmail send without approved recipients and reviewed content. [EI]
5. Claim gate: performance metrics must cite run logs. [IJ]

## Stop Conditions

- Any RSS source returns zero records without explanation.
- CSV export cannot be parsed.
- Groq output missing sentiment/urgency/sector.
- Email would be sent to real inbox without approval.
- Report states business urgency without article evidence.

## [TO DO] Items Before Production

- [TO DO] Repair or replace parse-failing A3 CSV.
- [TO DO] Move Gmail recipient(s) to approved config/env and avoid personal emails in repo.
- [TO DO] Add sector taxonomy document.
- [TO DO] Add run-level article counts for 6000+ article claim.

## Provenance

- pantry/pokalegayatri_333110_41727597_Pokale_Gayatri_Week2.pdf
- pantry/pokalegayatri_333110_41799405_Pokale_Gayatri_A3_Workflow.json
- pantry/pokalegayatri_333110_41799407_Pokale_Gayatri_A3_Documentation.pdf
- pantry/pokalegayatri_333110_41799410_Pokale_Gayatri_A3_Demo.pdf
- pantry/pokalegayatri_333110_41925102_Executive_Summary_Figma-2.pdf
- pantry/pokalegayatri_333110_41925106_workflow_v2.json
