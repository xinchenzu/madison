# Skills

Skills are agent-facing recipes with human-readable executive summaries.

Each skill should include:

1. Executive summary
2. Required reads
3. Phase gates
4. Primary stored scripts or a clear "not implemented yet"
5. Workflow
6. Output contract
7. Logging rule
8. Stop conditions

## Purpose

Skills turn repeatable Madison work into inspectable instructions. They should
be specific enough for an agent to execute and clear enough for a human to
audit.

Use a skill when a workflow:

- will be repeated;
- has multiple steps or tools;
- depends on imported workflow JSON or local data;
- produces brand, marketing, research, or customer-facing drafts;
- needs phase gates, review points, or logging.

## Imported n8n Skills

Imported n8n workflow skills live in `skills/n8n-*.md`. Their original workflow
JSON is preserved under `data/madison-main/n8n-workflows/originals/`, and the
import record is `docs/madison-main/MOVED-FROM-PANTRY.md`.

## Output Contract

A skill output contract should say:

- what files or messages are produced;
- whether the output is concept, draft, generated analysis, or reviewed
  conclusion;
- where the output should be stored;
- how it should be verified;
- what must be logged.

## Stop Conditions

A skill should stop when:

- required input data or source workflow material is missing;
- credentials or external services are required but unavailable;
- brand, customer, market, or performance claims are unsupported;
- outputs cannot be verified;
- the workflow would publish, email, post, delete, or commit without review.
