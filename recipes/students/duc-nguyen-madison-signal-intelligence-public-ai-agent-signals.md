# Duc Nguyen - Madison Signal Intelligence for Public AI-Agent Signals

## What This Project Is

Duc Nguyen built a reusable public-signal ingest and intelligence layer for Madison. Assignment 3 collected public AI-agent and automation signals from Hacker News, DEV Community, and GitHub, normalized them into one schema, deduplicated records, validated required fields, and exported a reusable CSV. Assignment 4 upgraded that collector into Madison Signal Intelligence: an AI-ranked workflow that classifies signals, assigns priority and confidence, explains why they matter, and recommends actions for founders or engineers.

## Long-Term Goal

The A2 career target is founding-stage AI infrastructure and distributed systems work, especially Browserbase-style backend reliability for agent runtimes. The project is long-term portfolio proof for the same problem one layer up: rate limits, retries, normalization, monitoring, and reliable public-source ingestion for downstream agents.

## Evidence Used To Build This Recipe

| Artifact | What it contributes |
| --- | --- |
| A2 PDF | Target role: Software Engineer, Distributed Systems; focus on AI infrastructure, streaming, observability, and backend reliability. |
| A3 documentation PDF | Defines the reliable public-signal pipeline, sources, 180-record schema, required fields, and quality summary. |
| A3 CSV | 181 rows: 180 data records plus a quality-summary row; fields include record_id, source_name, source_type, title, url, posted_at, engagement_score, comments_count, tags, content_hash. |
| A4 zip documentation | Adds OpenAI signal intelligence, fallback parsing/scoring, ranked CSV, HTML report, signal cards, scale tests, and optional multi-agent debate extension. |
| A4 outputs | Ranked Signal Intelligence CSV, Madison Report HTML, signal cards, and v3 multi-agent proof artifacts. |

## Data Sources And Verification

| Source | Type | Records / Scope | Use In Project | Verification / Human Check |
| --- | --- | --- | --- | --- |
| Hacker News Algolia API | Public API | 60 records | Developer discussion/news around AI agents and automation. | Verify URL, query ai agents, hitsPerPage=60, date normalization, and completeness of record_id/title/url/posted_at. |
| DEV Community API | Public API | 60 records | Developer articles and technical posts tagged AI. | Verify source availability, author/title/url/date fields, and engagement/comment fields. |
| GitHub Search API | Public API | 60 records | Open-source AI-agent repository adoption and developer attention signals. | Verify GitHub rate limits, repository URL, owner/name, updated date, language/tags, engagement score. |
| OpenAI API in A4 | AI service | 12 stable AI-scored records in final batch | Classifies trend cluster, priority, confidence, insight, and action. | Human must approve model, cost, batch size, prompt, and fallback behavior before live runs. |

## Data Schema And Quality Checks

A3 required fields are `record_id`, `source_name`, `title`, `url`, and `posted_at`; all 180 data records were reported complete. Shared schema also includes `source_type`, `text`, `author`, `engagement_score`, `comments_count`, `tags`, `content_hash`, and `quality_status`. A4 adds `trend_cluster`, `madison_priority`, `madison_score`, `confidence`, `ai_decision`, `ai_insight`, `recommended_action`, `ai_status`, and `analyzed_at`. Quality checks include deduplication, required-field validation, content hash construction, AI response parsing, fallback scoring when AI output is malformed, and scale testing. The documented breaking point is a 50-record AI batch timing out at 60 seconds; the stable final AI batch is 12 records.

## Recipe Steps

| Step | Labor | Input | Output | Human Check |
| --- | --- | --- | --- | --- |
| Verify source intent | Human + AI | A2/A3/A4 documentation and workflow JSON | Approved project scope | Confirm this is a public AI-agent signal intelligence system, not a generic RSS collector. |
| Collect HN/DEV/GitHub signals | AI | Three public APIs | Raw source payloads in data/raw/ | Check rate limits, source freshness, and that live calls are permitted. |
| Normalize each source | AI | Raw payloads | Source-specific normalized records | Spot-check dates, URLs, authors/owners, engagement fields, and missing text. |
| Merge and deduplicate | AI | Normalized records | Unified 180-record dataset | Check duplicate removal and required field failures. |
| Export A3 signal CSV | AI | Verified unified records | Public Signal Data CSV | Confirm CSV includes quality-summary row and no private data. |
| Build AI batch prompt | AI + Human | Top/selected verified records | AI prompt payload | Approve prompt, model, privacy boundary, batch size, and cost. |
| Run AI signal intelligence | AI | Prompt batch plus OpenAI credentials via env var | Ranked AI-scored records | Review fallback scoring and any malformed AI responses. |
| Generate human outputs | AI | Ranked records | HTML report, signal cards, optional multi-agent proof | Human verifies every recommendation traces back to a source record. |

## AI Layer And Human Judgment

Assignment 4 adds OpenAI-based signal analysis and an optional v3 multi-agent debate layer. The normal AI output includes trend cluster, priority, score, confidence, decision, insight, and recommended action. The wow extension adds analyst vote, skeptic risk, operator action, judge decision, feedback-learning reason, and delivery payloads. Human judgment is required to approve any strategic claim or action recommendation because engagement score is a proxy signal, not proof of market value.

## Reports, Logs, And Outputs

| Output | Audience | Purpose | Required Checks |
| --- | --- | --- | --- |
| A3 Public Signal CSV | Data reviewer / downstream agent | Reusable normalized dataset for Madison agents. | Must show 180 complete records and required fields. |
| A4 Ranked Signal Intelligence CSV | Founder / engineer / product strategist | Prioritized public signals with AI reasoning and actions. | Check ai_status, confidence, priority distribution, and source traceability. |
| Madison Signal Intelligence HTML report | Human decision-maker | Readable ranked signal report. | Findings must link to source rows and avoid unsupported claims. |
| Signal cards and multi-agent proof | Instructor / portfolio reviewer | Shows concrete output gallery and debate-style analysis. | Verify cards are not hallucinated and reflect ranked CSV. |
| Scale test log | Engineer / operator | Documents 12-record stability and 50-record timeout. | Production plan must add batching and cost/token logging. |

## Phase Gates

1. Source gate: verify all three public sources still resolve and are appropriate for public-signal monitoring. Human capacity: [TO], [PA].
2. Schema gate: no downstream AI step runs until record_id, source_name, title, url, and posted_at are complete or rejects are logged. Human capacity: [IJ].
3. AI gate: OpenAI calls require approved model, batch size, prompt, cost limit, and environment-variable credential handling. Human capacity: [EI].
4. Scale gate: production must batch records below the documented timeout threshold and log tokens/cost. Human capacity: [TO].
5. Claim gate: every recommended action must cite a source record and confidence score. Human capacity: [IJ], [EI].

## Stop Conditions

- Public API unavailable or rate-limited without fallback.
- Required fields missing after normalization.
- AI response cannot be parsed and fallback score is not clearly marked.
- Batch size exceeds stable tested limit without queueing.
- Any report recommends investment/collaboration without traceable evidence.

## [TO DO] Items Before Production

- [TO DO] Replace local download paths with Madison repo output paths.
- [TO DO] Add token/cost logging per AI call.
- [TO DO] Add batch queue for runs above 12 AI-scored records.
- [TO DO] Record human gate decisions in logs/gate-decisions/.

## Provenance

- pantry/Nguyen_Duc_A3_Workflow.json
- pantry/Nguyen_Duc_A3_Documentation.pdf
- pantry/Nguyen_Duc_A3_Public_Signal_Data.csv
- pantry/nguyenduc_318747_41724138_Nguyen_Duc_Week2.pdf
- pantry/nguyenduc_318747_41915183_submit.zip
