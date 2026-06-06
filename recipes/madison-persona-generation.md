# Madison Persona Generation

## Purpose

Generates 3-5 buyer personas from the approved audience definition. Personas must map back to segments in `audience-verified.json` and remain grounded in verified audience telemetry.

This is Phase 3 of the draft Madison branding marketing pipeline.

## Node Classification

| Node Name | Node Type | Classification | Snickerdoodle |
|---|---|---|---|
| Persona Generation | `persona-generator-agent` | gigo | Needs script: `scripts/gigo/madison-gigo-persona-generation.py`; output JSON: `data/verified/madison-branding-marketing-pipeline/personas-verified.json`. |
| Gate G2 Review | `human-review` | conductor | Needs gate log: `logs/gate-G2-personas.json`; human approves personas before copy generation. |

## Inputs

| Input | Type | Source | Required? | Human Check |
|---|---|---|---|---|
| Verified audience | JSON | `data/verified/madison-branding-marketing-pipeline/audience-verified.json` | Yes | Confirm Gate G1 passed. |
| Client brief | JSON | `data/raw/madison-branding-marketing-pipeline/brief.json` | Yes | Confirm brand, objective, and channels still match the persona task. |

## Persona Schema

```json
{
  "persona_id": "string",
  "name": "string",
  "segment_id": "string",
  "motivations": [],
  "pain_points": [],
  "channel_preference": [],
  "messaging_implications": "string",
  "generational_cohort": "string"
}
```

## Validation Rules

- Generate 3-5 personas.
- Each persona must map to at least one `segment_id` in `audience-verified.json`.
- Reject personas with demographic assumptions not supported by the audience definition.
- Flag personas that do not include motivations, pain points, channel preference, and messaging implications.
- Generational cohort should feed the Generational Messaging Optimizer, but must not become a stereotype shortcut.

## Phase Gates

1. Audience gate: Gate G1 must be approved before persona generation begins. Human capacity: [PF].
2. Traceability gate: every persona must map to a verified audience segment. Human capacity: [PA].
3. Assumption gate: human reviews demographic and behavioral assumptions. Human capacity: [IJ].
4. Gate G2: human approves personas for accuracy and brand fit before copy generation. Human capacity: [EI].

## Steps

1. Step name: Verify audience approval. Labor: AI. Script called: none. Input: `logs/gate-G1-audience.json`. Output: gate readiness check. Where output goes: `logs/`.
2. Step name: Generate personas. Labor: AI with Human gate. Script called: `scripts/gigo/madison-gigo-persona-generation.py`. Input: `audience-verified.json` and `brief.json`. Output: `personas-verified.json`. Where output goes: `data/verified/madison-branding-marketing-pipeline/`.
3. Step name: Gate G2 review. Labor: Human. Script called: none. Input: `personas-verified.json`. Output: gate decision. Where output goes: `logs/gate-G2-personas.json`.

## Stop Conditions

- Stop if Gate G1 is missing or not approved.
- Stop if fewer than 3 or more than 5 personas are generated without human approval.
- Stop if any persona lacks a valid `segment_id`.
- Stop if personas contain unsupported demographic assumptions.
- Stop if Gate G2 is not approved.

## [TO DO] Items Before Production

- [TO DO] Define persona validation schema.
- [TO DO] Define approved language for generational cohorts.
- [TO DO] Add persona evidence citation IDs back to audience segments.
