# Madison Documentation

This directory is the human-facing documentation hub for the Madison Plus One
book and agentic marketing framework repository.

Madison has two connected products:

- a manuscript and course/book corpus about branding, marketing, AI, and the
  Madison framework;
- an operational repository of imported workflows, skills, scripts, data,
  figures, and review gates that make the framework inspectable.

Use these docs when changing structure, revising chapters, running workflow
skills, generating figures, promoting scripts, or reviewing imported Madison
source material.

## Start Here

- `repo-structure.md`: where files belong.
- `operations.md`: normal operating workflow and stop conditions.
- `phase-gates.md`: gates that must pass before automation expands.
- `data-and-provenance.md`: source data, imported material, generated evidence,
  and audit rules.
- `scripts.md`: maintained automation and script documentation rules.
- `skills.md`: agent-facing recipe expectations and imported n8n workflow
  skills.
- `workflows.md`: summary of the Madison n8n workflow import and skill layer.
- `figures-and-assets.md`: D3, SVG, PNG, cover, and image asset rules.
- `manuscript.md`: how the chapter sets relate to the operating repository.
- `contributing.md`: review checklist for humans and agents.
- `Documentation.md`: standard for writing future docs.

## Operating Model

Madison follows the same verified-agent pattern as the other book systems:

1. Read the local docs and agent instructions.
2. Check verified local data and imported source material.
3. Prefer maintained scripts under lowercase `scripts/`.
4. Run the smallest useful test.
5. Verify generated outputs.
6. Keep human review points for brand, marketing, publication, and workflow
   decisions.
7. Log meaningful runs in `skills/RUN_LOG.md`.

The short rule: scripts and audits before prompts; humans decide when a polished
artifact is trustworthy.

## Durable Records

Do not leave durable decisions only in chat. Use:

- `skills/RUN_LOG.md` for meaningful workflow or agent runs;
- generated audits beside the data they inspect;
- `docs/` for system documentation;
- `enrichment-log.md` for manuscript enrichment activity;
- `docs/madison-main/MOVED-FROM-PANTRY.md` for the Madison-main import record.
