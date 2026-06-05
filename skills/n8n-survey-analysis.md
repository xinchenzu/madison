# Skill: n8n Survey Analysis

## Executive Summary

This skill is an agent-readable conversion of an imported n8n workflow. The
original workflow JSON is preserved at `data/madison-main/n8n-workflows/originals/SurveyAnalysis/workflow.json`. Use this skill to understand
and reimplement the workflow with verified local data, vetted scripts, explicit
phase gates, and human-readable handoffs before running automation.

## Original Workflow

- **Source file:** `data/madison-main/n8n-workflows/originals/SurveyAnalysis/workflow.json`
- **Workflow name:** Survey Analysis
- **Node count:** 21
- **Detected triggers:** Survey Data Webhook, Daily Survey Check

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
| Survey Data Webhook | `n8n-nodes-base.webhook` |
| Daily Survey Check | `n8n-nodes-base.cron` |
| Validate Survey Data | `n8n-nodes-base.code` |
| Clean and Preprocess Data | `n8n-nodes-base.code` |
| Prepare Analysis Prompt | `n8n-nodes-base.code` |
| Prepare Segmentation Prompt | `n8n-nodes-base.code` |
| Aggregate and Enrich Results | `n8n-nodes-base.code` |
| Prepare Slack Notification | `n8n-nodes-base.code` |
| Send Slack Notification | `n8n-nodes-base.slack` |
| HTTP Request | `n8n-nodes-base.httpRequest` |
| Extract from File | `n8n-nodes-base.extractFromFile` |
| Message a model | `@n8n/n8n-nodes-langchain.openAi` |
| Message a model1 | `@n8n/n8n-nodes-langchain.openAi` |
| Update Grafana Dashboards | `n8n-nodes-base.httpRequest` |
| Prepare Grafana Config | `n8n-nodes-base.code` |
| Code | `n8n-nodes-base.code` |
| Switch | `n8n-nodes-base.switch` |
| Code1 | `n8n-nodes-base.code` |
| Insert Sentiment Distribution | `n8n-nodes-base.mySql` |
| Insert NPS Score | `n8n-nodes-base.mySql` |
| Fetch UID | `n8n-nodes-base.httpRequest` |

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
