# Workflows

Madison includes imported n8n workflows converted into agent-readable skills.
These workflows are educational and operational artifacts for studying agentic
marketing, branding, customer experience, and market intelligence.

## Source and Generated Artifacts

- Import record: `docs/madison-main/MOVED-FROM-PANTRY.md`
- Source docs: `docs/madison-main/`
- Imported data/assets: `data/madison-main/`
- Original n8n workflow JSON: `data/madison-main/n8n-workflows/originals/`
- Converted skills: `skills/n8n-*.md`
- Skill index: `skills/README.md`

## Converted Workflows

The Madison-main import currently records six converted workflow skills:

| Skill | Workflow |
|---|---|
| `skills/n8n-ai-concierge.md` | AI Concierge |
| `skills/n8n-restaurant-agent.md` | Restaurant Agent |
| `skills/n8n-madison-content-agent-mvp-copy-1.md` | Madison content agent |
| `skills/n8n-intelligence-agent.md` | Intelligence Agent |
| `skills/n8n-marketmind-run-analysis-webhook.md` | MarketMind webhook analysis |
| `skills/n8n-survey-analysis.md` | Survey analysis |

## Workflow Families

The imported workflows map to Madison's agentic marketing layers:

- intelligence agents for market and competitive research;
- content agents for brand and campaign material;
- research agents for survey and audience analysis;
- experience agents for concierge and customer interaction workflows;
- performance agents for optimization and analysis.

## Use Rule

Before using a workflow skill:

1. Read the skill card.
2. Read `docs/madison-main/MOVED-FROM-PANTRY.md`.
3. Check the original workflow JSON when behavior is unclear.
4. Confirm phase gates.
5. Run only a small test unless the workflow has been verified in the current
   environment.
6. Log meaningful runs in `skills/RUN_LOG.md`.

## Review Questions

Before treating workflow output as evidence, ask:

- Which source workflow generated this skill?
- Which inputs did the workflow expect?
- Does it require credentials or external services?
- Is the output a draft, analysis, or reviewed conclusion?
- Are brand, market, customer, or performance claims backed by evidence?
