# Madison QA And Accessibility Audit

## Purpose

Audits generated campaign templates before launch handoff. The Email QA Agent checks links, variables, scheduling logic, HTML validity, copy, and launch readiness. The Email Accessibility Agent checks WCAG, ADA, AODA, Section 508, and EN 301 549.

This is Phase 6 of the draft Madison branding marketing pipeline.

## Node Classification

| Node Name | Node Type | Classification | Snickerdoodle |
|---|---|---|---|
| QA Audit | `email-qa-agent` | gigo | Needs script: `scripts/gigo/madison-gigo-qa-audit.py`; output JSON: `data/verified/madison-branding-marketing-pipeline/qa-audit-report.json`. |
| Accessibility Audit | `email-accessibility-agent` | gigo | Included in `madison-gigo-qa-audit.py`; outputs field-by-field accessibility results. |
| Gate G4 Review | `human-review` | conductor | Needs gate log: `logs/gate-G4-qa.json`; all FAIL items must be resolved and re-run. |

## Inputs

| Input | Type | Source | Required? | Human Check |
|---|---|---|---|---|
| Copy variants | JSON | `data/verified/madison-branding-marketing-pipeline/copy-variants-verified.json` | Yes | Confirm variants are final enough for QA. |
| Email templates | ZML/HTML files | `data/verified/madison-branding-marketing-pipeline/email-templates/` | Yes | Confirm all campaign variants have templates. |
| Campaign structure | JSON | `data/verified/madison-branding-marketing-pipeline/campaign-structure-verified.json` | Yes | Confirm schedule and journey logic are available. |

## Validation Rules

- Check links.
- Check variables and personalization logic.
- Check scheduling logic.
- Check HTML validity.
- Check launch readiness.
- Check WCAG, ADA, AODA, Section 508, and EN 301 549.
- Any item marked FAIL is a blocker.

## Phase Gates

1. Template gate: all expected templates must exist before QA. Human capacity: [PA].
2. Accessibility gate: accessibility results must be field-by-field, not summary-only. Human capacity: [IJ].
3. Blocker gate: any FAIL item blocks launch handoff. Human capacity: [EI].
4. Gate G4: human reviews QA report; gate does not pass with open blockers. Human capacity: [PF].

## Steps

1. Step name: Run QA and accessibility audit. Labor: AI with Human gate. Script called: `scripts/gigo/madison-gigo-qa-audit.py`. Input: copy variants, email templates, campaign structure. Output: `qa-audit-report.json` and human QA report. Where output goes: `data/verified/madison-branding-marketing-pipeline/` and `reports/generated/`.
2. Step name: Gate G4 review. Labor: Human. Script called: none. Input: `qa-audit-report.json` and generated QA markdown. Output: gate decision. Where output goes: `logs/gate-G4-qa.json`.

## Outputs

`data/verified/madison-branding-marketing-pipeline/qa-audit-report.json`

`reports/generated/madison-qa-audit-[timestamp].md`

## Stop Conditions

- Stop if templates are missing.
- Stop if QA results are summary-only and do not identify failing fields.
- Stop if any FAIL item is open.
- Stop if Gate G4 is not approved.

## [TO DO] Items Before Production

- [TO DO] Define QA report schema.
- [TO DO] Define accessibility checklist fields.
- [TO DO] Add re-run protocol after FAIL remediation.
