# Operations

This document describes how to work in the Madison repository without confusing
fluent output with verified work.

## Required Reads

Before structural, data, script, workflow, or chapter work, read:

1. `README.md`
2. `AGENTS.md`
3. `CLAUDE.md`
4. `DATA_CONTRACT.md`
5. `docs/repo-structure.md`
6. the relevant skill, script README, or manuscript guide

For imported Madison workflow material, also read:

- `docs/madison-main/MOVED-FROM-PANTRY.md`
- `docs/workflows.md`
- `skills/README.md`

## Grounding Order

Use this order when making claims or changing files:

1. Verified local data in `data/`.
2. Imported source material in `docs/madison-main/`, `data/madison-main/`, and
   `scripts/madison-main/`.
3. Vetted scripts in `scripts/`.
4. Agent recipes in `skills/`.
5. Human-facing docs in `docs/`.
6. Manuscript and planning files.
7. External lookup only when local evidence is insufficient.

If local evidence is missing, say so. Do not invent counts, rates, workflow
coverage, customer claims, market claims, confidence, or performance.

## Standard Workflow

1. State the task and success condition.
2. Identify relevant local docs, data, scripts, skills, and chapter set.
3. Run the smallest useful check or sample.
4. Inspect the output and provenance.
5. Decide whether human review is required.
6. Update docs, skills, scripts, data, figures, or manuscript files.
7. Log meaningful runs in `skills/RUN_LOG.md`.

## Command Surface

Run commands from the repository root.

```bash
npm run verify
npm run svg-to-png
```

`npm run verify` is currently a placeholder. Treat a passing placeholder as a
command-surface check, not a full repository validation.

## Stop Conditions

Stop and request review when:

- source data or imported workflow provenance is missing;
- a generated figure or chapter cannot be traced to source material;
- a workflow would publish, email, post, commit, delete, or batch-generate
  externally visible content;
- a brand, marketing, customer, or performance claim lacks evidence;
- a script would affect many files without a small-run check;
- the work touches private, credentialed, or client-specific material.

## Completion Report

When done, report:

- files changed;
- data or source material checked;
- scripts run;
- tests or verification performed;
- remaining risks or unverified assumptions.
