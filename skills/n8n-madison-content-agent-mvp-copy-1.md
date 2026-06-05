# Skill: n8n Madison_Content_Agent_MVP copy 1

## Executive Summary

This skill is an agent-readable conversion of an imported n8n workflow. The
original workflow JSON is preserved at `data/madison-main/n8n-workflows/originals/Content_Agent_full_workflow.json`. Use this skill to understand
and reimplement the workflow with verified local data, vetted scripts, explicit
phase gates, and human-readable handoffs before running automation.

## Original Workflow

- **Source file:** `data/madison-main/n8n-workflows/originals/Content_Agent_full_workflow.json`
- **Workflow name:** Madison_Content_Agent_MVP copy 1
- **Node count:** 26
- **Detected triggers:** Webhook, Respond to Webhook1, Respond to Webhook, Schedule Trigger

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
| Webhook | `n8n-nodes-base.webhook` |
| Convert to File | `n8n-nodes-base.convertToFile` |
| Prompt | `n8n-nodes-base.code` |
| Quality check | `n8n-nodes-base.code` |
| Generation | `@n8n/n8n-nodes-langchain.openAi` |
| Convert to File1 | `n8n-nodes-base.convertToFile` |
| Respond to Webhook1 | `n8n-nodes-base.respondToWebhook` |
| Visual Concepts | `n8n-nodes-base.code` |
| Respond to Webhook | `n8n-nodes-base.respondToWebhook` |
| brand voice | `n8n-nodes-base.set` |
| Schedule Trigger | `n8n-nodes-base.scheduleTrigger` |
| HTTP Request | `n8n-nodes-base.httpRequest` |
| Edit Fields | `n8n-nodes-base.set` |
| Convert to File4 | `n8n-nodes-base.convertToFile` |
| Split Out | `n8n-nodes-base.splitOut` |
| Convert to File5 | `n8n-nodes-base.convertToFile` |
| Compute Engagement | `n8n-nodes-base.code` |
| Filter Flagged | `n8n-nodes-base.code` |
| Filter Unflagged | `n8n-nodes-base.code` |
| Scoring Logic | `n8n-nodes-base.code` |
| Filter | `n8n-nodes-base.filter` |
| Filter1 | `n8n-nodes-base.filter` |
| Discord1 | `n8n-nodes-base.httpRequest` |
| Discord2 | `n8n-nodes-base.httpRequest` |
| Discord3 | `n8n-nodes-base.httpRequest` |
| Discord4 | `n8n-nodes-base.httpRequest` |

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
