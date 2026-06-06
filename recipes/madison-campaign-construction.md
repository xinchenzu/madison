# Madison Campaign Construction

## Purpose

Builds the campaign skeleton from the approved brief and personas. The Campaign Builder Agent and Experience Builder and Insights Agent define channel mix, A/B test structure, send schedule, and journey branches.

This is Phase 4 of the draft Madison branding marketing pipeline.

## Node Classification

| Node Name | Node Type | Classification | Snickerdoodle |
|---|---|---|---|
| Campaign Structure | `campaign-builder-agent` | gigo | Needs script: `scripts/gigo/madison-gigo-campaign-structure.py`; output JSON: `data/verified/madison-branding-marketing-pipeline/campaign-structure-verified.json`. |
| Journey Branch Builder | `experience-builder-agent` | gigo | Included in `madison-gigo-campaign-structure.py`; outputs journey branches inside verified campaign structure. |
| Gate G3 Review | `human-review` | conductor | Needs gate log: `logs/gate-G3-campaign-structure.json`; last review before copy is generated at scale. |

## Inputs

| Input | Type | Source | Required? | Human Check |
|---|---|---|---|---|
| Client brief | JSON | `data/raw/madison-branding-marketing-pipeline/brief.json` | Yes | Confirm requested channels, budget, and timeline. |
| Verified personas | JSON | `data/verified/madison-branding-marketing-pipeline/personas-verified.json` | Yes | Confirm Gate G2 passed. |

## Validation Rules

- Validate that all requested channels are in scope.
- Validate that every campaign branch maps to a persona or audience segment.
- Flag CTV if budget is below documented minimum threshold.
- Mark CTV budget threshold as `[TO DO]` until Madison minimums are confirmed.
- Flag channel plans that ignore suppressions or brand safety notes.

## Phase Gates

1. Persona gate: Gate G2 must be approved before campaign construction. Human capacity: [PF].
2. Channel gate: every requested channel must be allowed, supported, or marked `[TO DO]`. Human capacity: [PA].
3. Budget gate: CTV and paid-media assumptions require documented thresholds. Human capacity: [TO].
4. Gate G3: human reviews full campaign structure before copy generation. Human capacity: [EI].

## Steps

1. Step name: Verify persona approval. Labor: AI. Script called: none. Input: `logs/gate-G2-personas.json`. Output: gate readiness check. Where output goes: `logs/`.
2. Step name: Build campaign structure. Labor: AI with Human gate. Script called: `scripts/gigo/madison-gigo-campaign-structure.py`. Input: `brief.json` and `personas-verified.json`. Output: `campaign-structure-verified.json`. Where output goes: `data/verified/madison-branding-marketing-pipeline/`.
3. Step name: Gate G3 review. Labor: Human. Script called: none. Input: `campaign-structure-verified.json`. Output: gate decision. Where output goes: `logs/gate-G3-campaign-structure.json`.

## Stop Conditions

- Stop if Gate G2 is missing or not approved.
- Stop if requested channels are missing from the campaign structure.
- Stop if campaign branches cannot be mapped to personas or segments.
- Stop if CTV is included and budget threshold evidence is missing; add `[TO DO] confirm Madison CTV minimums`.
- Stop if Gate G3 is not approved.

## [TO DO] Items Before Production

- [TO DO] Confirm Madison CTV minimums.
- [TO DO] Define campaign-structure schema.
- [TO DO] Add journey branch validation rules.
