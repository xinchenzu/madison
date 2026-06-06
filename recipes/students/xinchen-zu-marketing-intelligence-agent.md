# Xinchen Zu - Marketing Intelligence Agent For Social Media And Industry Trends

## What This Project Is

Xinchen Zu built a Marketing Intelligence Agent that collects marketing and social-media articles from multiple industry RSS feeds, standardizes them, and exports structured datasets. Assignment 3 collected 135 records from five sources. Assignment 4 v2 adds Google Gemini AI analysis, random article selection, category detection, priority scoring, marketing recommendations, error handling, and human-readable CSV outputs.

## Long-Term Goal

The project goal is a reusable marketing intelligence workflow for professionals who need current industry information without manually checking many blogs. It supports trend monitoring, emerging-topic detection, and future AI-powered marketing analysis.

## Evidence Used To Build This Recipe

| Artifact | What it contributes |
| --- | --- |
| A3 documentation PDF | Project overview, five RSS sources, 135 records, data inventory, fields, setup. |
| A3 demo PDF | Workflow structure, merges, cleanup fields, final dataset. |
| A3 CSV | 135 records with title, date, author, link, source. |
| A4 demo PDF | Marketing Intelligence Agent v2 with Gemini, category, priority, summary, recommendation, error handling. |
| A4 workflow v2 and output CSV examples | Success/error examples for AI-generated marketing analysis. |

## Data Sources And Verification

| Source | Type | Records / Scope | Use In Project | Verification / Human Check |
| --- | --- | --- | --- | --- |
| HubSpot Marketing Blog RSS | Public RSS | 50 records in A3 docs | Content marketing, SEO, AI marketing, lead generation, digital marketing trends. | Verify feed URL and date/author fields. |
| Sprout Social Insights RSS | Public RSS | [TO DO] count by source in final CSV | Social media strategy and platform trends. | Verify feed and source labels. |
| Hootsuite Blog RSS | Public RSS | [TO DO] count by source in final CSV | Social media management and marketing articles. | Verify feed and source labels. |
| Social Media Examiner RSS | Public RSS | [TO DO] count by source in final CSV | Social media marketing practices and analysis. | Verify feed and source labels. |
| Search Engine Journal RSS | Public RSS | [TO DO] count; source appears duplicated in A3 workflow | SEO/search marketing updates. | Verify duplicate feed node and whether duplication is intentional. |
| Google Gemini AI | AI service | A4 selected article analysis | Category, priority, one-sentence summary, marketing recommendation. | Approve API key, prompt, error handling, and output format. |

## Data Schema And Quality Checks

A3 output keeps `title`, `date`, `author`, `link`, and `source` and removes extra RSS metadata. The documented final dataset has 135 records from five industry sources. A4 success examples use CSV text outputs, while error examples include an `error` column; this is useful but requires a clearer structured schema before production. The A3 workflow contains Search Engine Journal twice, so a human must decide whether that is a duplicate bug or intentional redundancy.

## Recipe Steps

| Step | Labor | Input | Output | Human Check |
| --- | --- | --- | --- | --- |
| Confirm marketing-intelligence scope | Human | A3/A4 docs | Approved topic scope and sources | Confirm intended users and whether AI analysis is advisory only. |
| Fetch RSS feeds | AI | HubSpot, Sprout, Hootsuite, Social Media Examiner, Search Engine Journal | Raw RSS records | Check all feeds return records; confirm duplicate SEJ source. |
| Merge records | AI | Raw source branches | Combined article set | Check no source was dropped. |
| Standardize fields | AI | Merged records | title/date/author/link/source dataset | Human spot-check three records per source. |
| Export A3 CSV | AI | Standardized records | 135-row marketing data CSV | Verify field consistency and source counts. |
| Select article for AI | AI + Human | Standardized records | AI candidate item | Confirm selection logic is representative or intentionally random. |
| Run Gemini analysis | AI with Human gate | Selected article text | Category, priority, summary, recommendation | Approve key, prompt, and fallback/error behavior. |
| Write success/error report | AI | AI response or error | Human-readable CSV output | Human checks recommendation and whether error was handled. |

## AI Layer And Human Judgment

Assignment 4 adds Gemini AI to classify marketing content, assign priority, summarize the article, and recommend marketing action. Error-handling examples show that failures are captured in output CSVs rather than crashing. Human judgment is required to decide whether random article selection is enough or whether the workflow should prioritize by source/date/topic.

## Reports, Logs, And Outputs

| Output | Audience | Purpose | Required Checks |
| --- | --- | --- | --- |
| A3 DataFile CSV | Marketing analyst | 135-record source dataset. | Check five fields and source coverage. |
| A4 success CSVs | Marketing operator | AI-generated category/priority/summary/recommendation text. | Check recommendations and source link. |
| A4 error CSVs | Operator | Failure examples with error field. | Verify error messages are useful and not leaking secrets. |
| Human report/log | Human boss | Run summary, source status, selected article, AI output, errors. | Must distinguish successful analysis from fallback/error. |

## Phase Gates

1. RSS gate: all approved feeds return data or are marked [TO DO] source unavailable. [TO]
2. Duplicate source gate: Search Engine Journal duplicate node must be resolved. [PA]
3. Schema gate: all rows have title, date, link, source; author may be [TO DO] unknown. [IJ]
4. AI gate: Gemini credential via env var and prompt approved. [EI]
5. Recommendation gate: marketing recommendation cites article source and does not overclaim. [IJ]

## Stop Conditions

- RSS source unavailable without fallback.
- Duplicate Search Engine Journal source inflates counts without disclosure.
- AI output has only free-form text and no parseable fields.
- Gemini key appears in workflow/log/output.
- Recommendation not tied to source article.

## [TO DO] Items Before Production

- [TO DO] Resolve duplicate Search Engine Journal feed node.
- [TO DO] Define structured A4 output schema beyond free-form text column.
- [TO DO] Add per-source counts to run log.
- [TO DO] Store Gemini key only in env var.

## Provenance

- pantry/zuxinchen_405407_41801846_Zu_Xinchen_A3_Workflow.json
- pantry/zuxinchen_405407_41801847_DataFile.csv
- pantry/zuxinchen_405407_41801848_Assignment 3 Documentation.pdf
- pantry/zuxinchen_405407_41801851_DEMO - Assignment 3 Screenshot Walkthrough Xinchen Zu.pdf
- pantry/zuxinchen_LATE_405407_41930874_Demo Walkthrough.pdf
- pantry/zuxinchen_LATE_405407_41930875_workflow_v2.json
- pantry/zuxinchen_LATE_405407_41930876_marketing_analysis_error_handling_example1.csv through success_example13.csv
