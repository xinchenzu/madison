# Repository Structure

This repo is organized by function and audience.

## Root Files

- `README.md` - human-facing overview.
- `AGENTS.md` - cross-agent operating rules.
- `CLAUDE.md` - Claude/Cowork operating rules.
- `DATA_CONTRACT.md` - data and evidence rules.
- `book.md`, `outline.md`, `architecture.md`, `vision.md`, `risks.md` -
  manuscript and system planning files.
- `package.json` - Node command surface.
- `metadata.yaml` - book metadata.

## Human-Facing Documentation

- `docs/` - durable system documentation.
- `docs/README.md` - documentation index.
- `docs/madison-main/` - imported Madison-main documentation and migration
  notes.

## Manuscript

- `chapters/` - top-level Madison Plus One manuscript files.
- `chapters/branding-and-ai/` - Branding and AI chapter set.
- `chapters/info-7375-branding-and-ai-spring-2026/` - course/book chapter set
  with case studies.
- `chapters/principles-marketing/` - principles of marketing chapter set.
- `pantry/` - research notes and pre-manuscript drafts.

## Agent-Facing

- `skills/` - agent-facing recipes with human-readable summaries.
- `skills/README.md` - skill index.
- `skills/RUN_LOG.md` - durable log of meaningful agent and workflow runs.
- `skills/n8n-*.md` - converted Madison-main n8n workflow skills.
- `scripts/` - vetted reusable automation and stored production prompts.
- `writing-tools/` - writing workflow cards.

## Evidence

- `data/` - source data, imported workflow JSON, and approved reference
  material.
- `data/madison-main/` - organized Madison-main import.
- `d3/` - D3/HTML figure source files.
- `images/` - rendered SVG/PNG image assets.
- generated audits and reports - evidence of runs, not automatically source of
  truth.

Use lowercase `scripts/` only.
