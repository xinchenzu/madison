# Raksha KrishnaMoorthy - Clinical Adaptive Fashion Persona Pipeline

## What This Project Is

Raksha KrishnaMoorthy built a Madison SyntheticPersonas pipeline for clinically grounded patient personas in health-fashion contexts. Assignment 3 collected, validated, deduplicated, and standardized 125 records across five health-fashion categories. Assignment 4 generated Claude-powered persona cards, a strategic brand intelligence report, email/output packaging, and scale tests with fallback personas for API failures.

## Long-Term Goal

The project is positioned for health-fashion brands such as Tommy Hilfiger Adaptive, Aerie, and MastMe that need personas grounded in clinical context rather than stereotypes. Its long-term goal is a trustworthy persona generation layer for adaptive apparel, recovery, and inclusive design decisions.

## Evidence Used To Build This Recipe

| Artifact | What it contributes |
| --- | --- |
| A3 documentation PDF | Executive summary, 125-record total, four sources, five categories, 100% quality threshold pass. |
| Quality metrics PDF | 10-field schema, nulls instead of fabricated demographics, no duplicates, quality principles. |
| A3 CSV | 125 records with record_id, source, category, age, gender, condition, treatment_stage, fashion_signal, date_collected, notes. |
| A3 report PDF | Breakdown: 30 post-mastectomy, 30 alopecia, 12 diabetes, 23 adaptive mobility, 30 cancer recovery; 48 Kaggle, 40 CDC, 25 HuggingFace, 12 RSS. |
| A4 outputs zip | Generated persona HTML files, strategy report, workflow_v2, scale tests, fallback behavior. |

## Data Sources And Verification

| Source | Type | Records / Scope | Use In Project | Verification / Human Check |
| --- | --- | --- | --- | --- |
| Kaggle healthcare CSV | Local CSV | 48 records in final A3 report | Clinical/fashion category examples and demographic/context records. | Verify local file path and source license; no fabricated demographics. |
| CDC data API | Public data API | 40 records in final A3 report | Public health records for category grounding. | Verify endpoint and field mapping. |
| Hugging Face clinical notes | Public dataset API | 25 records in final A3 report | Clinical-note context for condition/treatment-stage signals. | Verify dataset terms and no sensitive/private data. |
| ScienceDaily breast cancer RSS | Public RSS | 12 records in final A3 report | Current breast-cancer/recovery context. | Verify article relevance and date. |
| Claude API in A4 | AI service | Up to 15 requests before rate-limit issues | Generate persona cards and strategy report. | Approve model, prompt, category rules, and fallback persona behavior. |

## Data Schema And Quality Checks

Unified schema has 10 fields: record_id, source, category, age, gender, condition, treatment_stage, fashion_signal, date_collected, and notes. Categories are post-mastectomy, alopecia, diabetes, adaptive-mobility, and cancer-recovery. The documented quality rate is 100%, with a threshold of 80%+, no duplicates removed in A3, and ISO-style dates. Critical quality principle: unknown demographic fields should remain null rather than invented. A4 scale tests show 1-15 persona requests succeed, 25 requests caused 9 failures, and 50 caused 35 failures due to Claude rate limits; fallback personas were generated for failures.

## Recipe Steps

| Step | Labor | Input | Output | Human Check |
| --- | --- | --- | --- | --- |
| Confirm persona use case | Human | A3 docs and target brand context | Approved categories and ethical boundary | Human confirms personas support inclusive design and do not make clinical recommendations. |
| Load clinical sources | AI | Kaggle, CDC, HuggingFace, RSS | Raw source records | Check public-source permission and de-identification. |
| Parse each source | AI | Raw payloads | Source-specific clinical/fashion records | Check source labels and category mapping. |
| Merge and quality-check | AI | Parsed records | 125-record persona-ready dataset | Review category counts, duplicates, null demographics, and date format. |
| Generate summary report | AI | Verified dataset | A3 report and metrics | Human reviews health-fashion claims for evidence. |
| Generate persona cards | AI + Human | Verified records plus Claude prompt | HTML persona cards | Human checks empathy, safety, non-diagnosis, and evidence traceability. |
| Aggregate strategy report | AI | Persona outputs | Brand intelligence report | Human checks recommendations are design/brand focused, not medical advice. |
| Send/save outputs | AI with Human gate | HTML reports and email payload | Saved persona files, email handoff | Email/live delivery requires explicit approval. |

## AI Layer And Human Judgment

The A4 workflow uses Claude to generate persona cards and a strategic report from the verified persona dataset. It includes error handling for API 429 failures and fallback persona generation. AI outputs must be treated as interpretive design artifacts grounded in records, not as medical or demographic truth.

## Reports, Logs, And Outputs

| Output | Audience | Purpose | Required Checks |
| --- | --- | --- | --- |
| A3 persona CSV | Data reviewer | Persona-ready clinical-fashion evidence. | Check 125 records, 10 fields, categories, null handling. |
| Quality metrics report | Human boss / instructor | Shows completeness, schema, duplicate, and threshold status. | Confirm quality rate and category/source counts. |
| Persona HTML cards | Brand strategist / designer | Usable persona examples for adaptive fashion. | Check empathy, evidence, and no clinical overreach. |
| Strategic brand intelligence report | Decision-maker | Summarizes persona implications for health-fashion brands. | Recommendations must cite categories and record patterns. |
| Scale test log | Operator | Documents rate-limit threshold and fallback behavior. | Production must space requests by 2+ seconds or queue. |

## Phase Gates

1. Ethics gate: no persona may infer protected traits beyond source evidence. [IJ], [EI]
2. Source gate: all health/clinical sources must be public, de-identified, and appropriate. [PA]
3. Schema gate: all records use the 10-field schema; unknowns stay null. [IJ]
4. AI gate: Claude persona generation requires approved prompt, rate-limit plan, and fallback disclosure. [EI]
5. Report gate: strategy recommendations must be design/brand recommendations, not medical advice. [IJ]

## Stop Conditions

- Any source contains private patient data or uncertain license.
- AI fabricates demographic/clinical details not in source records.
- Category mapping cannot be justified.
- Claude rate limits cause unmarked fallback personas.
- Report makes medical claims or diagnosis-adjacent recommendations.

## [TO DO] Items Before Production

- [TO DO] Replace student local file paths with Madison repo paths.
- [TO DO] Add per-persona citation IDs back to source records.
- [TO DO] Add production queue/rate limiter for more than 15 persona requests.
- [TO DO] Document source licenses for Kaggle/HuggingFace data.

## Provenance

- pantry/krishnamoorthyraksha_333078_41797105_KrishnaMoorthy_Raksha_A3_Documentation-1.pdf
- pantry/krishnamoorthyraksha_333078_41797106_KrishnaMoorthy_Raksha_A3_QualityMetrics.pdf
- pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json
- pantry/krishnamoorthyraksha_333078_41797108_madison_personas_data-1.csv
- pantry/krishnamoorthyraksha_333078_41923950_outputs-2.zip
