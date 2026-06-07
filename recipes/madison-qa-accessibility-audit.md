# Madison QA And Accessibility Audit

## Purpose

Audits generated campaign templates before launch handoff. The Email QA Agent checks links, variables, scheduling logic, HTML validity, copy, and launch readiness. The Email Accessibility Agent checks WCAG, ADA, AODA, Section 508, and EN 301 549.

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Copy variants | JSON | `data/verified/madison-branding-marketing-pipeline/copy-variants-verified.json` | Yes |
| Email templates | ZML/HTML files | `data/verified/madison-branding-marketing-pipeline/email-templates/` | Yes |
| Campaign structure | JSON | `data/verified/madison-branding-marketing-pipeline/campaign-structure-verified.json` | Yes |

## Phase Gates

1. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/madison-qa-accessibility-audit.md`.
   Human capacity: [PA].
2. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run madison-qa-accessibility-audit --mode dialogic --sample`.
   Human capacity: [TO].
3. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/madison-qa-accessibility-audit data/verified/madison-qa-accessibility-audit -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
4. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/madison-qa-accessibility-audit.md`.
   Human capacity: [EI].

## Steps

1. Step name: Run QA and accessibility audit. Labor: AI with Human gate.
   Script called: `scripts/gigo/madison-gigo-qa-audit.py`
   Input: copy-variants-verified.json, email templates, and campaign-structure-verified.json.
   Output: qa-audit-report JSON fields: template_id, check_id, standard, status, severity, remediation, blocker_flag plus markdown QA report.
   Where output goes: data/verified/madison-branding-marketing-pipeline/.
2. Step name: Gate G4 review. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: qa-audit-report.json and generated QA markdown.
   Output: gate decision with blocker count, remediation notes, and approval status.
   Where output goes: logs/gate-G4-qa.json.

## Output Contract

### Agent output
File: `logs/madison-qa-accessibility-audit-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/madison-qa-accessibility-audit-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Madison QA And Accessibility Audit` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if templates are missing.
- Stop if QA results are summary-only and do not identify failing fields.
- Stop if any FAIL item is open.
- Stop if Gate G4 is not approved.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run madison-qa-accessibility-audit --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run madison-qa-accessibility-audit --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Run QA and accessibility audit | `snickerdoodle run madison-qa-accessibility-audit --step run-qa-and-accessibility-audit` |  |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate madison-qa-accessibility-audit --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate madison-qa-accessibility-audit --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate madison-qa-accessibility-audit --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Run QA and accessibility audit | `scripts/gigo/madison-gigo-qa-audit.py` | gigo |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/madison-qa-accessibility-audit/` | JSON |
| Verified data | `data/verified/madison-qa-accessibility-audit/` | JSON |
| Agent log | `logs/madison-qa-accessibility-audit-[DATE].json` | JSON |
| Human report | `reports/generated/madison-qa-accessibility-audit-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |
