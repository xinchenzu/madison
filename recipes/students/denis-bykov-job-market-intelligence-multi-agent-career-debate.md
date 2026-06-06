# Denis Bykov - Job Market Intelligence And Multi-Agent Career Debate

## What This Project Is

Denis Bykov built Madison as a job-market intelligence agent for data-center and cloud-infrastructure roles. Assignment 3 collected job postings, BLS labor market data, and hiring-trend news to map real requirements for roles like AWS Data Center Technician. Assignment 4 turned the data pipeline into a multi-agent debate system that uses a harsh hiring manager, a candidate advocate, and a synthesis judge to produce browser-readable career intelligence reports.

## Long-Term Goal

The career target is hands-on data center infrastructure as a foundation for cloud architecture and systems engineering. The A2 evidence names AWS Data Center Technician / ADC InfraOps DCO, with gaps around hardware troubleshooting, rack/cabling/decommissioning, networking, OSI/CCNA knowledge, and security clearance expectations. The project is meant to compress role-specific preparation from many hours into a personalized gap analysis and action plan.

## Evidence Used To Build This Recipe

| Artifact | What it contributes |
| --- | --- |
| A2 PDF | Dream role: AWS Data Center Technician; long-term cloud architecture and systems engineering goal. |
| A3 documentation PDF | Project overview, data inventory, BLS and NewsAPI role, Kaggle/LinkedIn filtered job records, and setup guide. |
| A3 demo PDF | Screenshots show BLS API success, NewsAPI returned 16 articles, and 10 job records generated/merged. |
| A3 CSV | 10 local job-market records with title, source, date, source_type, description, and url. |
| A4 workflow/demo/report HTML files | Madison v2 multi-agent debate workflow, 10 generated HTML role reports, cost and bottleneck notes. |

## Data Sources And Verification

| Source | Type | Records / Scope | Use In Project | Verification / Human Check |
| --- | --- | --- | --- | --- |
| Kaggle / LinkedIn job postings sample | CSV / code sample | 10 records filtered for data center, cloud infrastructure, NOC, DC metro | Defines role requirements and skills for JobAnalyzer. | Check source provenance and whether hardcoded sample represents the intended market. |
| BLS public API | Public labor API | Employment/labor time-series records | Gives labor-market context and demand signals. | Verify series IDs, date range, and no authentication needed. |
| NewsAPI data-center hiring query | News API | 16 articles in demo; credential embedded in original n8n URL | Surfaces real-time AWS/data-center hiring signals. | Credential must be moved to env var; verify article relevance and source quality. |
| Claude / Anthropic API in A4 | AI service | 3 calls per report | Hiring Manager, Advocate, and Synthesis Judge debate candidate readiness. | Approve model, prompt roles, cost, and fairness/risk boundaries. |

## Data Schema And Quality Checks

A3 job-market records use `title`, `source`, `date`, `source_type`, `description`, and `url`. The workflow merges BLS, NewsAPI, and job records, standardizes dates, removes duplicates, and exports a CSV. A4 reports show debate-report cost around $0.063 per report and identify NewsAPI free tier as the first bottleneck. Quality checks should include role-title relevance, source freshness, date standardization, duplicate removal, article relevance to data-center hiring, and explicit separation of evidence from career advice.

## Recipe Steps

| Step | Labor | Input | Output | Human Check |
| --- | --- | --- | --- | --- |
| Confirm career lane | Human | A2 role target plus A3 docs | Approved target roles and assumptions | Confirm roles are data-center/cloud-infrastructure roles and not generic software jobs. |
| Load job-posting sample | AI | Kaggle/LinkedIn filtered sample CSV/code records | Structured job requirements | Check each record has title, company/source, location/date, description, and URL/provenance. |
| Fetch BLS labor data | AI | BLS API | Labor market context | Verify series IDs and date range match the question. |
| Fetch hiring news | AI | NewsAPI query for AWS data center hiring | Hiring trend article records | Move API key to env var and spot-check article relevance. |
| Merge and clean | AI | Job, labor, and news records | Deduplicated hiring signal dataset | Review duplicate count, source_type, and date normalization. |
| Build debate prompts | AI + Human | Clean records plus candidate target profile | Prompt pack for three agents | Human approves tone: tough but fair, no fabricated qualifications. |
| Run multi-agent debate | AI | Claude/Anthropic API | Agent A, Agent B, Judge outputs | Check disagreements, unsupported claims, and whether final verdict is actionable. |
| Generate HTML role reports | AI | Debate outputs | Browser-readable reports for 10 roles | Human verifies recommendations map to evidence and do not overstate employability. |

## AI Layer And Human Judgment

Assignment 4 uses three Claude calls: Agent A as harsh hiring manager, Agent B as candidate advocate, and a synthesis judge. This is useful because job readiness is interpretive, but it must remain auditable: each gap, strength, and action item should cite a job requirement, BLS/news signal, or profile fact.

## Reports, Logs, And Outputs

| Output | Audience | Purpose | Required Checks |
| --- | --- | --- | --- |
| A3 job market CSV | Career analyst / data reviewer | Raw evidence base for Madison JobAnalyzer. | Verify 10 records and source fields. |
| BLS and NewsAPI logs | Operator | Proof that live labor/news sources returned data. | Check no credentials are logged. |
| Multi-agent debate HTML reports | Job seeker / career coach | Actionable role-specific readiness reports. | Check evidence traceability and fairness. |
| Cost/bottleneck notes | Operator | Production planning for NewsAPI caching and Claude cost. | Add cache and rate-limit plan before production. |

## Phase Gates

1. Credential gate: NewsAPI key embedded in original workflow must be removed and loaded from env. [EI]
2. Source relevance gate: human verifies every article/job record is about target data-center/cloud-infra roles. [IJ]
3. Debate fairness gate: human reviews agent prompts for bias, exaggeration, and unsupported claims. [IJ]
4. Cost/rate gate: human approves NewsAPI caching and Claude monthly-cost estimate before scale. [TO], [EI]
5. Report gate: final recommendations must cite job requirements or source records. [IJ]

## Stop Conditions

- Credential appears in URL, logs, recipe, or report.
- Job records lack provenance or are too stale for the role target.
- AI judge invents experience, credentials, or job requirements.
- NewsAPI tier is exceeded without cache/fallback.
- Report gives career advice without evidence-backed gap/action mapping.

## [TO DO] Items Before Production

- [TO DO] Replace embedded NewsAPI key with NEWSAPI_KEY env var.
- [TO DO] Move local/user output paths into Madison reports/generated/.
- [TO DO] Add cache for NewsAPI results.
- [TO DO] Add structured citation IDs in each HTML report.

## Provenance

- pantry/bykovdenis_454895_41724957_Bykov_Denis_Week2.png.pdf
- pantry/bykovdenis_454895_41780985_Bykov_Denis_A3_Workflow.json
- pantry/bykovdenis_454895_41780986_Bykov_Denis_A3_Documentation.pdf
- pantry/bykovdenis_454895_41780984_job_market_data_bykov.csv
- pantry/bykovdenis_454895_41914929_workflow_v2.json
- pantry/bykovdenis_454895_41914930_demo_walkthrough.pdf
- pantry/bykovdenis_454895_41914934_madison_report_01_aws_data_center_technician.html through report_10
