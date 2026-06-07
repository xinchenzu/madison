# Madison Branding Marketing Pipeline

## Purpose

Draft Snickerdoodle recipe for a Madison branding and marketing pipeline. The first defined step ingests a client brief and converts it into structured JSON that later audience, channel, creative, budget, compliance, and reporting steps can use.

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Client brief | PDF, document, or JSON | `[TODO: DATA SOURCE] intake location` | Yes |
| Channel list | Structured field or extracted text | Client brief | Yes |
| Audience description | Structured field or extracted text | Client brief | Yes |
| Suppression rules | Structured field or extracted text | Client brief | No |
| Brand safety constraints | Structured field or extracted text | Client brief | No |

## Phase Gates

1. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/madison-branding-marketing-pipeline.md`.
   Human capacity: [PA].
2. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run madison-branding-marketing-pipeline --mode dialogic --sample`.
   Human capacity: [TO].
3. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/madison-branding-marketing-pipeline data/verified/madison-branding-marketing-pipeline -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
4. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/madison-branding-marketing-pipeline.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify brief provenance. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: approved intake file.
   Output: provenance entry with source_file, source_checksum, and approval status.
   Where output goes: logs/gate-decisions/.
2. Step name: Ingest Client Brief. Labor: AI with Human gate.
   Script called: `scripts/ingest/madison-ingest-client-brief.py`
   Input: PDF, document, or structured JSON intake form.
   Output: brief JSON fields: brand, objective, audience_description, channels, budget_range, timeline, suppressions, brand_safety_notes.
   Where output goes: data/raw/madison-branding-marketing-pipeline/.
3. Step name: Produce ingest report. Labor: AI with Human review.
   Script called: `scripts/tools/madison-branding-marketing-pipeline__produce-ingest-report.py`
   Input: brief.json and run log.
   Output: markdown sections: brief summary, missing fields, suppressions, brand safety constraints, next-step readiness.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/madison-branding-marketing-pipeline-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/madison-branding-marketing-pipeline-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Madison Branding Marketing Pipeline` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the client brief is missing or cannot be read.
- Stop if `objective`, `channels`, or `audience_description` is missing.
- Stop if the extracted text is garbled or materially incomplete.
- Stop if suppressions or brand safety constraints are present in the source but missing from `brief.json`.
- Stop if the brief contains credentials, private tokens, or unapproved personal data that would be copied into outputs.
- Stop if any downstream live campaign action is requested before human approval.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run madison-branding-marketing-pipeline --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run madison-branding-marketing-pipeline --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Ingest Client Brief | `snickerdoodle run madison-branding-marketing-pipeline --step ingest-client-brief` | `--sample` |
| Produce ingest report | `snickerdoodle run madison-branding-marketing-pipeline --step produce-ingest-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate madison-branding-marketing-pipeline --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate madison-branding-marketing-pipeline --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate madison-branding-marketing-pipeline --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Ingest Client Brief | `scripts/ingest/madison-ingest-client-brief.py` | ingest |
| Produce ingest report | `scripts/tools/madison-branding-marketing-pipeline__produce-ingest-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/madison-branding-marketing-pipeline/` | JSON |
| Verified data | `data/verified/madison-branding-marketing-pipeline/` | JSON |
| Agent log | `logs/madison-branding-marketing-pipeline-[DATE].json` | JSON |
| Human report | `reports/generated/madison-branding-marketing-pipeline-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |
