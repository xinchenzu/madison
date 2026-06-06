# Phase Gates

Automation expands only after explicit gates pass.

## Standard Gates

1. Problem gate: the task, scope, and success condition are explicit.
2. Local evidence gate: relevant data, imported source material, docs, and
   skills have been checked.
3. Stored script gate: existing scripts have been checked before ad hoc code.
4. Small-run gate: the smallest useful test has passed before broad execution.
5. Verification gate: outputs have been checked against source material or an
   output contract.
6. Review gate: human review exists for brand, marketing, publication,
   credentialed, or externally visible work.
7. Logging gate: meaningful runs are recorded in `skills/RUN_LOG.md`,
   `enrichment-log.md`, or a nearby audit/report.

If a gate has no failure path, it is not a gate.

## Failure Paths

- If the problem is unclear, stop and restate it.
- If source material is missing, mark it missing.
- If no stored script exists, document that before creating one.
- If the small run fails, do not scale.
- If verification is inconclusive, keep the result provisional.
- If review is required, do not present output as final.
