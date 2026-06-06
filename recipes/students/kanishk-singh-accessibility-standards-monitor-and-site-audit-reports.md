# Kanishk Singh - Accessibility Standards Monitor And Site Audit Reports

## What This Project Is

Kanishk Singh built an Accessibility Monitor that collects accessibility rules, WCAG criteria, and accessibility-community updates, then extends into site-level accessibility reports. Assignment 3 produced a standards/rules dataset from axe-core, W3C WCAG JSON, WebAIM, and A11y Project sources. Assignment 4 generated accessibility audit reports for many sample domains, with human-readable HTML output.

## Long-Term Goal

The A2 evidence frames Kanishk around product-quality engineering, full-stack systems, RAG/LLM orchestration, and problem-first engineering judgment. This project is long-term proof that he can build an evidence-backed accessibility intelligence layer, not just run superficial audits.

## Evidence Used To Build This Recipe

| Artifact | What it contributes |
| --- | --- |
| A2 PDF | Skills/context around React, TypeScript, Node, Java/Spring, AWS, LangChain, RAG, embeddings, and problem diagnosis. |
| A3 workflow JSON and HTML | Accessibility data collection pipeline and presentation. |
| A3 CSV | 184 accessibility records with record_id, source, type, rule_id, wcag_criterion, conformance_level, title, description, help_url, tags. |
| A4 HTML documentation/demo | Accessibility Monitor v2 workflow and walkthrough. |
| A4 report gallery | HTML reports for many domains such as tempo-music.app, ironclad-legal.com, orchard-health.org, nimbus-cloud.io, etc. |

## Data Sources And Verification

| Source | Type | Records / Scope | Use In Project | Verification / Human Check |
| --- | --- | --- | --- | --- |
| axe-core rules via GitHub/raw content | Code/API source | [TO DO] exact count from workflow run | Automated accessibility rule metadata. | Verify GitHub URLs, rate limits, rule JSON parsing, and license. |
| W3C WCAG 2.1 JSON | Public JSON | [TO DO] source count | Official success criteria and conformance levels. | Verify URL https://www.w3.org/WAI/WCAG21/wcag.json and schema. |
| WebAIM Blog RSS | Public RSS | [TO DO] source count | Practical accessibility guidance and updates. | Verify feed and article relevance. |
| A11y Project RSS | Public RSS | [TO DO] source count | Community accessibility education and patterns. | Verify feed and article relevance. |
| Sample domain audit targets | HTML/site report inputs | A4 gallery includes many domains | Generates site-level reports from accessibility knowledge. | Human must approve target list and testing ethics before live audits. |

## Data Schema And Quality Checks

A3 CSV has 184 rows with rule/source/type metadata, WCAG criterion, conformance level, description, help URL, and tags. The workflow includes a quality gate requiring at least 50 records. Quality checks should include deduplication, required field validation, rule-to-WCAG mapping, minimum record count, and separation between standards evidence and site-specific findings. A4 reports need source citations for each flagged issue and must not imply legal compliance certification.

## Recipe Steps

| Step | Labor | Input | Output | Human Check |
| --- | --- | --- | --- | --- |
| Confirm accessibility objective | Human | A2/A3/A4 artifacts | Approved audit/monitor scope | Confirm whether run is standards monitoring, site auditing, or both. |
| Collect accessibility standards | AI | axe-core, WCAG JSON, WebAIM, A11y Project | Raw rule/article records | Check source availability, license, and no forbidden scraping. |
| Normalize and deduplicate | AI | Raw records | Canonical accessibility dataset | Review rule_id, wcag_criterion, conformance_level, help_url, tags. |
| Run quality gate | AI + Human | Canonical dataset | Pass/fail quality log | Minimum 50 records and required fields must pass. |
| Export standards dataset | AI | Verified dataset | Accessibility CSV | Human checks 184-row evidence and source mix. |
| Prepare site audit targets | Human + AI | Approved domain list | Audit target queue | Human confirms permission/ethical boundary for targets. |
| Generate site reports | AI | Audit results plus standards dataset | HTML accessibility reports | Human checks findings, severity, and remediation advice. |

## AI Layer And Human Judgment

The available evidence emphasizes deterministic accessibility standards and HTML reports rather than a clearly named LLM step. If an AI layer is used in v2 to summarize or prioritize issues, it must cite the underlying rule/WCAG criterion and mark uncertain interpretations as [TO DO] needs review.

## Reports, Logs, And Outputs

| Output | Audience | Purpose | Required Checks |
| --- | --- | --- | --- |
| Accessibility standards CSV | Accessibility engineer | Reusable standards/rules knowledge base. | Check 184 rows and required fields. |
| Quality gate log | Operator | Minimum records and validation pass/fail. | Stop if under 50 records. |
| Site accessibility HTML reports | Product/site owners | Readable audit output for each target domain. | Check target permission, issue evidence, severity, remediation. |
| Demo/walkthrough HTML | Reviewer | Explains workflow behavior. | Check claims against generated reports. |

## Phase Gates

1. Source gate: W3C/GitHub/RSS sources verified and license-safe. [PA]
2. Minimum-record gate: fail if standards dataset has fewer than 50 usable records. [TO]
3. Mapping gate: each rule maps to WCAG/help_url or is marked [TO DO]. [IJ]
4. Audit ethics gate: domain targets approved before live scanning. [EI]
5. Report gate: no legal compliance claim without human accessibility expert review. [EI]

## Stop Conditions

- Standards source unavailable or schema changed.
- Dataset below 50 records.
- Rule lacks source/help_url and is not marked [TO DO].
- Target domain not approved.
- Report implies ADA/WCAG legal compliance certification.

## [TO DO] Items Before Production

- [TO DO] Extract exact A4 audit scoring algorithm from HTML/JS if needed.
- [TO DO] Add source citations per issue in every report.
- [TO DO] Add target approval log for domain gallery.
- [TO DO] Define severity rubric.

## Provenance

- pantry/singhkanishknagendra_348738_41723979_Singh_Kanishk_Week2.pdf
- pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json
- pantry/singhkanishknagendra_348738_41749684_Assignment3_Singh_Kanishk.html
- pantry/singhkanishknagendra_348738_41749685_accessibility_data_latest.csv
- pantry/singhkanishknagendra_348738_41876941_Assignment4_Singh_Kanishk.html
- pantry/singhkanishknagendra_348738_41876944_workflow_v2.json
- pantry/singhkanishknagendra_348738_41876946_report_tempo-music.app_2026-06-04.html and related report gallery
