# Madison Persona Generation

## Purpose

Generates 3-5 buyer personas from the approved audience definition. Personas must map back to segments in `audience-verified.json` and remain grounded in verified audience telemetry.

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Verified audience | JSON | `data/verified/madison-branding-marketing-pipeline/audience-verified.json` | Yes |
| Client brief | JSON | `data/raw/madison-branding-marketing-pipeline/brief.json` | Yes |

## Phase Gates

1. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/madison-persona-generation.md`.
   Human capacity: [PA].
2. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run madison-persona-generation --mode dialogic --sample`.
   Human capacity: [TO].
3. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/madison-persona-generation data/verified/madison-persona-generation -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
4. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/madison-persona-generation.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify audience approval. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: logs/gate-G1-audience.json.
   Output: approval check with gate status and reviewer_capacity.
   Where output goes: logs/gate-decisions/.
2. Step name: Generate personas. Labor: AI with Human gate.
   Script called: `scripts/gigo/madison-gigo-persona-generation.py`
   Input: audience-verified.json and brief.json.
   Output: personas-verified JSON array with persona_id, name, segment_id, motivations, pain_points, channel_preference, messaging_implications, generational_cohort.
   Where output goes: data/verified/madison-branding-marketing-pipeline/.
3. Step name: Gate G2 review. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: personas-verified.json.
   Output: gate decision with persona corrections, assumptions flagged, and approval status.
   Where output goes: logs/gate-G2-personas.json.

## Output Contract

### Agent output
File: `logs/madison-persona-generation-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/madison-persona-generation-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Madison Persona Generation` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if Gate G1 is missing or not approved.
- Stop if fewer than 3 or more than 5 personas are generated without human approval.
- Stop if any persona lacks a valid `segment_id`.
- Stop if personas contain unsupported demographic assumptions.
- Stop if Gate G2 is not approved.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run madison-persona-generation --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run madison-persona-generation --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Generate personas | `snickerdoodle run madison-persona-generation --step generate-personas` |  |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate madison-persona-generation --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate madison-persona-generation --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate madison-persona-generation --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Generate personas | `scripts/gigo/madison-gigo-persona-generation.py` | gigo |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/madison-persona-generation/` | JSON |
| Verified data | `data/verified/madison-persona-generation/` | JSON |
| Agent log | `logs/madison-persona-generation-[DATE].json` | JSON |
| Human report | `reports/generated/madison-persona-generation-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |
