# Madison Audience Definition

## Purpose

Defines and validates the campaign audience from `brief.json`. The Audience Builder Agent translates the natural-language audience description into executable Boolean logic and behavioral criteria for Madison ZMP, while GIGO checks segment size, suppression overlap, and geography/propensity-score fit.

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Client brief | JSON | `data/raw/madison-branding-marketing-pipeline/brief.json` | Yes |
| Madison Data Cloud propensity scores | Query result | Madison Data Cloud | Yes |
| SuperGraph profiles | Query result | Madison SuperGraph | Yes |
| Suppression rules | JSON array | `brief.json` | No |

## Phase Gates

1. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/madison-audience-definition.md`.
   Human capacity: [PA].
2. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run madison-audience-definition --mode dialogic --sample`.
   Human capacity: [TO].
3. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/madison-audience-definition data/verified/madison-audience-definition -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
4. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/madison-audience-definition.md`.
   Human capacity: [EI].

## Steps

1. Step name: Load brief. Labor: AI with Human gate.
   Script called: `scripts/gigo/madison-audience-definition__load-brief.py`
   Input: data/raw/madison-branding-marketing-pipeline/brief.json.
   Output: brief readiness fields: brand, objective, audience_description, channels, suppressions, geography_flags.
   Where output goes: logs/.
2. Step name: Query audience explorer. Labor: AI with Human gate.
   Script called: `scripts/ingest/madison-ingest-audience-explorer.py`
   Input: approved brief parameters.
   Output: audience-raw JSON fields: segment_id, query_logic, profile_count, propensity_score_metadata, suppression_overlap.
   Where output goes: data/raw/madison-branding-marketing-pipeline/.
3. Step name: Validate audience. Labor: AI with Human gate.
   Script called: `scripts/gigo/madison-gigo-audience-validation.py`
   Input: audience-raw.json, brief.json, suppression rules.
   Output: audience-verified JSON fields: segment_id, criteria, segment_size, suppressions_applied, geography_flags, score_provenance, validation_flags.
   Where output goes: data/verified/madison-branding-marketing-pipeline/.
4. Step name: Gate G1 review. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: audience-verified.json.
   Output: gate decision with decision, reviewer_capacity, note, approved_at.
   Where output goes: logs/gate-G1-audience.json.

## Output Contract

### Agent output
File: `logs/madison-audience-definition-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/madison-audience-definition-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Madison Audience Definition` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if `brief.json` is missing or invalid.
- Stop if audience description is missing.
- Stop if verified segment size is below 1,000 profiles.
- Stop if suppression rules cannot be applied.
- Stop if U.S.-only retail scores are being treated as valid for a non-U.S. client without human approval.
- Stop if Gate G1 is not approved.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run madison-audience-definition --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run madison-audience-definition --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Load brief | `snickerdoodle run madison-audience-definition --step load-brief` |  |
| Query audience explorer | `snickerdoodle run madison-audience-definition --step query-audience-explorer` | `--sample` |
| Validate audience | `snickerdoodle run madison-audience-definition --step validate-audience` |  |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate madison-audience-definition --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate madison-audience-definition --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate madison-audience-definition --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Load brief | `scripts/gigo/madison-audience-definition__load-brief.py` | gigo |
| Query audience explorer | `scripts/ingest/madison-ingest-audience-explorer.py` | ingest |
| Validate audience | `scripts/gigo/madison-gigo-audience-validation.py` | gigo |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/madison-audience-definition/` | JSON |
| Verified data | `data/verified/madison-audience-definition/` | JSON |
| Agent log | `logs/madison-audience-definition-[DATE].json` | JSON |
| Human report | `reports/generated/madison-audience-definition-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |
