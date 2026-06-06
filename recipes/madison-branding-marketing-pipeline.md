# Madison Branding Marketing Pipeline

## Purpose

Draft Snickerdoodle recipe for a Madison branding and marketing pipeline. The first defined step ingests a client brief and converts it into structured JSON that later audience, channel, creative, budget, compliance, and reporting steps can use.

This is a rough starting recipe that will be expanded later. Anything not yet specified is marked `[TO DO]`.

## Node Classification

| Node Name | Node Type | Classification | Snickerdoodle |
|---|---|---|---|
| Ingest Client Brief | `client-brief-intake` | ingest | Needs script: `scripts/ingest/madison-ingest-client-brief.py`; output is JSON at `data/raw/madison-branding-marketing-pipeline/brief.json`. |
| Pipeline Conductor | `[TO DO]` | conductor | This recipe is the draft conductor markdown; later add run order, downstream steps, and phase gates. |
| Human Report | `[TO DO]` | conductor | Needs markdown template at `reports/templates/madison-branding-marketing-pipeline.md`; generated report should go to `reports/generated/`. |

## Ingest Brief

Role: ingest

Script: `scripts/ingest/madison-ingest-client-brief.py`

What it does: reads the client brief as PDF, document, or structured JSON intake form. Extracts brand name, campaign objective, target audience description, requested channels, budget range, timeline, suppression rules, and brand safety constraints.

Output: `data/raw/madison-branding-marketing-pipeline/brief.json`

Rejects: if the brief is missing objective, channel list, or audience description, the run stops and logs the error.

## Minimum `brief.json` Schema

```json
{
  "brand": "string",
  "objective": "string",
  "audience_description": "string",
  "channels": ["email", "sms", "push", "paid_social", "display", "ctv"],
  "budget_range": "string",
  "timeline": "string",
  "suppressions": [],
  "brand_safety_notes": "string"
}
```

## Inputs

| Input | Type | Source | Required? | Human Check |
|---|---|---|---|---|
| Client brief | PDF, document, or JSON | `[TO DO] intake location` | Yes | Confirm this is the approved client brief and not a draft, duplicate, or stale version. |
| Channel list | Structured field or extracted text | Client brief | Yes | Confirm requested channels are allowed for the campaign and client relationship. |
| Audience description | Structured field or extracted text | Client brief | Yes | Confirm audience language is usable, non-discriminatory, and not inferred beyond the brief. |
| Suppression rules | Structured field or extracted text | Client brief | No | Confirm opt-outs, category exclusions, and legal constraints are preserved exactly. |
| Brand safety constraints | Structured field or extracted text | Client brief | No | Confirm sensitive topics, prohibited claims, and approval rules are captured. |

## Phase Gates

1. Brief identity gate: verify the intake file is the intended client brief. Test: source path exists and the run log records filename, timestamp, and checksum. Human capacity: [PF], [TO].
2. Required-field gate: stop if `objective`, `channels`, or `audience_description` is missing or empty. Test: `brief.json` validates against the minimum schema. Human capacity: [PA].
3. Source-format gate: PDF/doc extraction must preserve enough text for human review; if extraction is garbled, add `[TO DO] manual brief transcription` and stop. Human capacity: [IJ].
4. Brand-safety gate: suppressions and brand safety notes must be copied into the JSON before downstream generation begins. Test: human compares source brief to `brief.json`. Human capacity: [EI].
5. Live-action gate: no campaign send, ad upload, audience export, model call, dashboard write, or client-facing report happens from this ingest step. Human capacity: [EI].

## Steps

1. Step name: Verify brief provenance. Labor: AI plus Human. Script called: none. Input: approved intake file. Output: provenance entry. Where output goes: `logs/`. Human check: confirm source is the current client-approved brief.
2. Step name: Ingest Client Brief. Labor: AI with Human gate. Script called: `scripts/ingest/madison-ingest-client-brief.py`. Input: PDF, document, or structured JSON intake form. Output: `brief.json`. Where output goes: `data/raw/madison-branding-marketing-pipeline/`. Human check: confirm objective, audience, channels, suppressions, and brand-safety constraints are accurate.
3. Step name: Produce ingest report. Labor: AI with Human review. Script called: none; conductor fills `[TO DO] reports/templates/madison-branding-marketing-pipeline.md`. Input: run log and `brief.json`. Output: concise markdown report. Where output goes: `reports/generated/`. Human check: review rejects, missing fields, assumptions, and `[TO DO]` gaps.

## Output Contract

### Raw Data

`data/raw/madison-branding-marketing-pipeline/brief.json` contains the minimum schema fields and may include later optional fields as the recipe expands.

### Run Log

`logs/madison-branding-marketing-pipeline-[DATE].json` should contain `workflow`, `mode`, `source_file`, `source_checksum`, `steps_completed`, `rejects`, `flags`, `todo_items`, `stop_conditions`, and `generated_at`.

### Human Report

`reports/generated/madison-branding-marketing-pipeline-[DATE].md` should summarize what was ingested, what was rejected, what constraints were captured, and what the next downstream step needs.

## Stop Conditions

- Stop if the client brief is missing or cannot be read.
- Stop if `objective`, `channels`, or `audience_description` is missing.
- Stop if the extracted text is garbled or materially incomplete.
- Stop if suppressions or brand safety constraints are present in the source but missing from `brief.json`.
- Stop if the brief contains credentials, private tokens, or unapproved personal data that would be copied into outputs.
- Stop if any downstream live campaign action is requested before human approval.

## [TO DO] Items Before Production

- [TO DO] Create `scripts/ingest/madison-ingest-client-brief.py`.
- [TO DO] Define approved intake folder and filename convention.
- [TO DO] Add JSON schema validation for `brief.json`.
- [TO DO] Create `reports/templates/madison-branding-marketing-pipeline.md`.
- [TO DO] Add downstream GIGO steps for audience, channel, budget, claims, and brand-safety validation.
- [TO DO] Add downstream tool handoffs for campaign plan, report draft, and approval packet.
