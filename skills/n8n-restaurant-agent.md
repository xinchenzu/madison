# Skill: n8n Restaurant Agent

## Executive Summary

This skill is an agent-readable conversion of an imported n8n workflow. The
original workflow JSON is preserved at `data/madison-main/n8n-workflows/originals/Archives/Cicerone/Restaurant_Agent (1).json`. Use this skill to understand
and reimplement the workflow with verified local data, vetted scripts, explicit
phase gates, and human-readable handoffs before running automation.

## Original Workflow

- **Source file:** `data/madison-main/n8n-workflows/originals/Archives/Cicerone/Restaurant_Agent (1).json`
- **Workflow name:** Restaurant Agent
- **Node count:** 15
- **Detected triggers:** Respond to Webhook, Webhook

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
| Restaurant AI Agent | `@n8n/n8n-nodes-langchain.agent` |
| Menu | `@n8n/n8n-nodes-langchain.toolWorkflow` |
| Get Reservations Availability | `n8n-nodes-base.googleSheetsTool` |
| Update Confirmed Reservation | `n8n-nodes-base.googleSheetsTool` |
| Update Reservation Availability | `n8n-nodes-base.googleSheetsTool` |
| Get Confirmed Reservation | `n8n-nodes-base.googleSheetsTool` |
| Get Orders | `n8n-nodes-base.googleSheetsTool` |
| Update Orders | `n8n-nodes-base.googleSheetsTool` |
| Sticky Note | `n8n-nodes-base.stickyNote` |
| Sticky Note1 | `n8n-nodes-base.stickyNote` |
| Respond to Webhook | `n8n-nodes-base.respondToWebhook` |
| OpenAI Chat Model | `@n8n/n8n-nodes-langchain.lmChatOpenAi` |
| Webhook | `n8n-nodes-base.webhook` |
| Simple Memory | `@n8n/n8n-nodes-langchain.memoryBufferWindow` |
| Sticky Note2 | `n8n-nodes-base.stickyNote` |

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
