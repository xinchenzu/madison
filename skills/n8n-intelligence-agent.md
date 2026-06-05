# Skill: n8n Intelligence Agent

## Executive Summary

This skill is an agent-readable conversion of an imported n8n workflow. The
original workflow JSON is preserved at `data/madison-main/n8n-workflows/originals/Intelligence-Agent/n8n_workflow.json`. Use this skill to understand
and reimplement the workflow with verified local data, vetted scripts, explicit
phase gates, and human-readable handoffs before running automation.

## Original Workflow

- **Source file:** `data/madison-main/n8n-workflows/originals/Intelligence-Agent/n8n_workflow.json`
- **Workflow name:** Intelligence Agent
- **Node count:** 47
- **Detected triggers:** Webhook Trigger, Respond with JSON, Respond No New Items

## Phase Gates

1. **Problem gate:** Name the business or book workflow this automation should perform.
2. **Local evidence gate:** Check `data/madison-main/` and existing reports before external lookup.
3. **Stored script gate:** Check `scripts/madison-main/` and root `scripts/` before writing new code.
4. **Credential gate:** Identify required n8n credentials, API keys, sheets, webhooks, or external services without exposing secrets.
5. **Small-run gate:** Run one representative item manually or in a sandbox before enabling the full workflow.
6. **Verification gate:** Capture outputs, errors, and expected artifacts.
7. **Logging gate:** Record meaningful runs or blockers in `skills/RUN_LOG.md`.

## Nodes

| Node | Type |
|---|---|
| Fetch Apple Press Releases1 | `n8n-nodes-base.httpRequest` |
| Parse Apple Press XML1 | `n8n-nodes-base.xml` |
| Extract Apple Press1 | `n8n-nodes-base.code` |
| Fetch Google News RSS1 | `n8n-nodes-base.httpRequest` |
| Parse Google News XML1 | `n8n-nodes-base.xml` |
| Extract Google News1 | `n8n-nodes-base.code` |
| Merge All News2 | `n8n-nodes-base.merge` |
| Read Processed Links1 | `n8n-nodes-base.googleSheets` |
| Combine Data1 | `n8n-nodes-base.merge` |
| Deduplicate with Sheets1 | `n8n-nodes-base.code` |
| Multi-Brand Config1 | `n8n-nodes-base.code` |
| Split In Batches1 | `n8n-nodes-base.splitInBatches` |
| Prepare Subreddits | `n8n-nodes-base.code` |
| Fetch Reddit Posts | `n8n-nodes-base.httpRequest` |
| Extract & Format Reddit Data | `n8n-nodes-base.code` |
| Split In Batches | `n8n-nodes-base.splitInBatches` |
| Webhook Trigger | `n8n-nodes-base.webhook` |
| Parse XML1 | `n8n-nodes-base.xml` |
| Filter Source Type | `n8n-nodes-base.if` |
| Fetch Regulatory News1 | `n8n-nodes-base.httpRequest` |
| Regulatory Sources Config1 | `n8n-nodes-base.code` |
| Merge Data Streams | `n8n-nodes-base.merge` |
| Save to Compliance Sheet | `n8n-nodes-base.googleSheets` |
| Extract Content1 | `n8n-nodes-base.code` |
| Read Existing Articles1 | `n8n-nodes-base.googleSheets` |
| Deduplicate Articles1 | `n8n-nodes-base.code` |
| Check New Articles1 | `n8n-nodes-base.if` |
| OpenAI Sentiment | `n8n-nodes-base.openAi` |
| Merge Analysis Results1 | `n8n-nodes-base.code` |
| Calculate Baseline Metrics | `n8n-nodes-base.code` |
| Build Knowledge Graph | `n8n-nodes-base.code` |
| Multi-Brand Competitor Analysis | `n8n-nodes-base.code` |
| Detect Anomalies | `n8n-nodes-base.code` |
| Format Drift Metrics | `n8n-nodes-base.code` |
| Alert Trigger | `n8n-nodes-base.code` |
| Format Knowledge Graph for Sheets | `n8n-nodes-base.code` |
| Format Competitor Analysis for Sheets | `n8n-nodes-base.code` |
| Check New Items | `n8n-nodes-base.if` |
| OpenAI Sentiment2 | `n8n-nodes-base.openAi` |
| Combine Data | `n8n-nodes-base.code` |
| Save Drift Metrics1 | `n8n-nodes-base.googleSheets` |
| Save to Google Sheets | `n8n-nodes-base.googleSheets` |
| Create JSON1 | `n8n-nodes-base.code` |
| Respond with JSON | `n8n-nodes-base.respondToWebhook` |
| Respond No New Items | `n8n-nodes-base.respondToWebhook` |
| Save Knowledge Graph to Sheets | `n8n-nodes-base.googleSheets` |
| Save Competitor Analysis to Sheets | `n8n-nodes-base.googleSheets` |

## Agent Conversion Notes

- Prefer stored scripts over recreating code nodes from scratch.
- Treat HTTP, webhook, Google Sheets, OpenAI, Slack, and command-execution nodes as side-effecting until reviewed.
- Replace hard-coded credentials with environment variables or documented secret handling.
- Preserve the original JSON as evidence; do not edit it in place.
- If this workflow becomes active, create a tested script or documented n8n import path and link it here.

## Output Contract

When using this skill, report:

- input data used;
- scripts or workflow nodes used;
- external services required;
- artifacts produced;
- verification performed;
- remaining human approval needed.
