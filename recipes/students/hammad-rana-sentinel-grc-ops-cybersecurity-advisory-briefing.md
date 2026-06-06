# Hammad Rana - Sentinel GRC Ops Cybersecurity Advisory Briefing

## What This Project Is

Hammad Rana built Sentinel GRC Ops, a Madison-pattern multi-agent assistant for governance, risk, and compliance. Assignment 3 created a 467-record data layer from historical breach data, Kaggle cybersecurity dataset discovery, and CISA advisories, producing 465 clean records and 2 rejects. Assignment 4 focused on live CISA advisories, using Groq AI to map each advisory to ISO 27001 / SOC 2 / GDPR-style controls and generate a browser-readable GRC briefing.

## Long-Term Goal

The project aligns with a WHOOP Governance, Risk, and Compliance Analyst role. The long-term goal is an assistant that routes vendor questionnaires, breach disclosures, and regulatory advisories through specialized agents mapped to a 10-control catalog from ISO 27001 Annex A, SOC 2 Trust Service Criteria, and GDPR Articles.

## Evidence Used To Build This Recipe

| Artifact | What it contributes |
| --- | --- |
| A3 documentation/demo PDFs | Project context, three-source inventory, 467 normalized records, 99.6% pass rate, quality flags. |
| A3 clean JSON | Clean cybersecurity/GRC data output. |
| A4 demo PDF | Six-node live CISA workflow, Groq API, 10 advisory cards, under-600ms run, retry/on-error settings. |
| A4 output gallery PDF | 10 generated CISA advisory analysis cards with control mapping and recommended actions. |
| A4 HTML briefing | Browser-readable Sentinel GRC briefing. |

## Data Sources And Verification

| Source | Type | Records / Scope | Use In Project | Verification / Human Check |
| --- | --- | --- | --- | --- |
| Information is Beautiful breach catalog | Local CSV / historical breach data | 417 records retained in A3 docs | Historical breach patterns and sector exposure profiles. | Verify source license, sensitivity mapping, and no arbitrary downsampling. |
| Kaggle cybersecurity dataset catalog API | Authenticated/public API pattern | 20 records in A3 docs | Programmatic discovery of cybersecurity evidence sources. | Credential/auth boundary must be approved; verify dataset relevance. |
| CISA Cybersecurity Advisories RSS | Public RSS | 30 records in A3; 10 live records analyzed in A4 demo | Current vulnerability/advisory context. | Verify CISA URL, dates, vendors, severity, CVE/KEV fields. |
| Groq llama-3.1-8b-instant | AI service | 10/10 success at production demo batch; rate limit around larger batches | Maps advisory to controls, severity, recommended action. | Approve API key, prompt, control catalog, retry behavior. |

## Data Schema And Quality Checks

A3 normalizes three source types to a shared GRC schema and reports 467 normalized records, 465 clean records, 2 rejects, and 99.6% pass rate. A4 narrows scope to live CISA advisories and produces control_mapping, severity_assessment, and recommended_action per record. Demo scale notes show 10 records at full success; larger batches hit Groq free-tier/rate-limit constraints. Human review must check that AI control mappings are plausible, not authoritative compliance determinations.

## Recipe Steps

| Step | Labor | Input | Output | Human Check |
| --- | --- | --- | --- | --- |
| Confirm GRC scope | Human | A3/A4 docs | Approved control catalog and use case | Confirm this is advisory triage support, not legal/compliance certification. |
| Load historical breach data | AI | Local breach CSV | Raw breach records | Check sensitivity mapping and source license. |
| Fetch dataset catalog | AI | Kaggle API | Cybersecurity dataset discovery records | Check authentication and relevance. |
| Fetch CISA advisories | AI | CISA RSS | Current advisory records | Check advisory date, entity/vendor, severity/CVE fields. |
| Normalize and deduplicate | AI | Three source branches | Unified GRC records | Review rejects and quality flags. |
| Split clean/rejects | AI + Human | Deduplicated records | Clean and rejected datasets | Human verifies reject reasons are traceable. |
| Run Groq GRC analysis | AI with Human gate | CISA advisory records | Control mapping, severity, action | Human reviews control mapping against ISO/SOC2/GDPR catalog. |
| Generate HTML briefing | AI | AI-analyzed advisories | Sentinel GRC briefing HTML | Human checks every recommendation before operational use. |

## AI Layer And Human Judgment

Groq llama-3.1-8b-instant receives a structured GRC analyst prompt and returns JSON with control_mapping, severity_assessment, and recommended_action. The AI layer is useful for triage, but a human GRC reviewer must validate mappings because standards interpretation is high-stakes.

## Reports, Logs, And Outputs

| Output | Audience | Purpose | Required Checks |
| --- | --- | --- | --- |
| A3 clean/reject JSON | Data reviewer | Validated evidence corpus for Sentinel agents. | Check pass rate, reject reasons, dedupe keys. |
| A4 Sentinel GRC briefing HTML | Compliance officer / analyst | Readable advisory cards with controls and actions. | Validate control mappings and severity. |
| Output gallery PDF | Reviewer | Evidence of 10 generated advisory cards. | Check examples against live CISA advisories. |
| Scale/performance notes | Operator | Documents batch behavior and rate limits. | Do not exceed stable batch without queue/backoff. |

## Phase Gates

1. Control catalog gate: human approves ISO/SOC2/GDPR/NIST mapping vocabulary. [IJ]
2. Source gate: CISA and breach/catalog sources verified before analysis. [PA]
3. Reject gate: 2 rejected records or future rejects have traceable quality flags. [IJ]
4. AI gate: Groq credential and prompt approved; AI mapping treated as advisory. [EI]
5. Operational gate: no recommendation sent to production GRC process without human sign-off. [EI]

## Stop Conditions

- AI returns invalid JSON without fallback.
- Control mapping appears unsupported or fabricated.
- CISA feed date/source cannot be verified.
- Kaggle/API credential handling is unclear.
- Report implies compliance certification.

## [TO DO] Items Before Production

- [TO DO] Store the 10-control catalog as a verified local reference.
- [TO DO] Add citations from each advisory card to source CISA URL.
- [TO DO] Add stable batch/rate-limit policy for Groq.
- [TO DO] Replace Windows local paths with Madison repo paths.

## Provenance

- pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json
- pantry/ranahammad_320831_41799388_Rana_Hammad_A3_Documentation.pdf
- pantry/ranahammad_320831_41799390_Rana_Hammad_a3_data_clean.json
- pantry/ranahammad_320831_41882330_Rana_Hammad_A4_Demo.pdf
- pantry/ranahammad_320831_41882337_Rana_Hammad_A4_Workflow.json
- pantry/ranahammad_320831_41882338_sentinel_grc_briefing.html
