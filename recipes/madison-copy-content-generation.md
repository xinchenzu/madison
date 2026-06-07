# Madison Copy And Content Generation

## Purpose

Generates channel, persona, and A/B variant copy from the approved campaign structure. The recipe uses Madison copy agents for subject lines, pre-headers, generational messaging, SMS, ZML, and campaign development.

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Approved campaign structure | JSON | `data/verified/madison-branding-marketing-pipeline/campaign-structure-verified.json` | Yes |
| Verified personas | JSON | `data/verified/madison-branding-marketing-pipeline/personas-verified.json` | Yes |
| Client brief | JSON | `data/raw/madison-branding-marketing-pipeline/brief.json` | Yes |

## Phase Gates

1. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/madison-copy-content-generation.md`.
   Human capacity: [PA].
2. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run madison-copy-content-generation --mode dialogic --sample`.
   Human capacity: [TO].
3. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/madison-copy-content-generation data/verified/madison-copy-content-generation -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
4. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/madison-copy-content-generation.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify campaign approval. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: logs/gate-G3-campaign-structure.json.
   Output: approval check with gate status and reviewer_capacity.
   Where output goes: logs/gate-decisions/.
2. Step name: Generate copy variants. Labor: AI with Human gate.
   Script called: `scripts/gigo/madison-gigo-copy-generation.py`
   Input: campaign-structure-verified.json, personas-verified.json, and brief.json.
   Output: copy-variants-verified JSON fields: channel, persona_id, variant_id, subject_line, preheader, body_copy, sms_copy, spam_score, validation_flags plus email template files.
   Where output goes: data/verified/madison-branding-marketing-pipeline/.

## Output Contract

### Agent output
File: `logs/madison-copy-content-generation-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/madison-copy-content-generation-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Madison Copy And Content Generation` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if Gate G3 is missing or not approved.
- Stop if spam threshold is undefined in production; add `[TODO: DEFINE] define threshold`.
- Stop if SMS variants exceed character limits.
- Stop if duplicate subject lines are not resolved or flagged.
- Stop if generated copy violates brand safety notes or suppressions.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run madison-copy-content-generation --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run madison-copy-content-generation --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Generate copy variants | `snickerdoodle run madison-copy-content-generation --step generate-copy-variants` |  |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate madison-copy-content-generation --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate madison-copy-content-generation --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate madison-copy-content-generation --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Generate copy variants | `scripts/gigo/madison-gigo-copy-generation.py` | gigo |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/madison-copy-content-generation/` | JSON |
| Verified data | `data/verified/madison-copy-content-generation/` | JSON |
| Agent log | `logs/madison-copy-content-generation-[DATE].json` | JSON |
| Human report | `reports/generated/madison-copy-content-generation-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |
