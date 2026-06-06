# Madison Copy And Content Generation

## Purpose

Generates channel, persona, and A/B variant copy from the approved campaign structure. The recipe uses Madison copy agents for subject lines, pre-headers, generational messaging, SMS, ZML, and campaign development.

This is Phase 5 of the draft Madison branding marketing pipeline.

## Node Classification

| Node Name | Node Type | Classification | Snickerdoodle |
|---|---|---|---|
| Copy Generation | `copy-agent-bundle` | gigo | Needs script: `scripts/gigo/madison-gigo-copy-generation.py`; output JSON: `data/verified/madison-branding-marketing-pipeline/copy-variants-verified.json`. |
| Email Template Generation | `zml-agent` | gigo | Included in `madison-gigo-copy-generation.py`; output files under `data/verified/madison-branding-marketing-pipeline/email-templates/`. |

## Madison Agents

- Subject Line Generator
- Pre-Header Text Generator
- Generational Messaging Optimizer
- SMS Copy Generator
- ZML Agent
- Campaign Developer Agent

## Inputs

| Input | Type | Source | Required? | Human Check |
|---|---|---|---|---|
| Approved campaign structure | JSON | `data/verified/madison-branding-marketing-pipeline/campaign-structure-verified.json` | Yes | Confirm Gate G3 passed. |
| Verified personas | JSON | `data/verified/madison-branding-marketing-pipeline/personas-verified.json` | Yes | Confirm persona IDs and cohorts are available. |
| Client brief | JSON | `data/raw/madison-branding-marketing-pipeline/brief.json` | Yes | Confirm brand safety, suppressions, objective, and channels. |

## Validation Rules

- For each channel x persona x A/B variant, generate appropriate copy.
- Subject Line Generator must produce variants with spam-risk scores.
- Reject copy variants with spam score above threshold.
- Flag SMS copy exceeding character limits.
- Flag duplicate subject lines across variants.
- ZML Agent generates conditional personalization logic for email templates.
- Brand safety notes and suppressions must remain visible in the copy-generation context.

## Phase Gates

1. Campaign gate: Gate G3 must be approved before copy generation. Human capacity: [PF].
2. Spam-risk gate: spam threshold must be defined before production. Human capacity: [TO].
3. SMS gate: SMS copy must satisfy character and carrier constraints. Human capacity: [PA].
4. Template gate: generated ZML/HTML files remain local verified outputs until QA passes. Human capacity: [EI].

## Steps

1. Step name: Verify campaign approval. Labor: AI. Script called: none. Input: `logs/gate-G3-campaign-structure.json`. Output: gate readiness check. Where output goes: `logs/`.
2. Step name: Generate copy variants. Labor: AI with Human gate. Script called: `scripts/gigo/madison-gigo-copy-generation.py`. Input: approved campaign structure, personas, and brief. Output: `copy-variants-verified.json` and email templates. Where output goes: `data/verified/madison-branding-marketing-pipeline/`.

## Outputs

`data/verified/madison-branding-marketing-pipeline/copy-variants-verified.json`

`data/verified/madison-branding-marketing-pipeline/email-templates/`

## Stop Conditions

- Stop if Gate G3 is missing or not approved.
- Stop if spam threshold is undefined in production; add `[TO DO] define threshold`.
- Stop if SMS variants exceed character limits.
- Stop if duplicate subject lines are not resolved or flagged.
- Stop if generated copy violates brand safety notes or suppressions.

## [TO DO] Items Before Production

- [TO DO] Define spam-risk score threshold.
- [TO DO] Define SMS character limit and carrier filtering contract.
- [TO DO] Define copy variant schema.
- [TO DO] Define email template file naming convention.
