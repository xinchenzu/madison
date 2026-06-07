# Raksha KrishnaMoorthy - Clinical Adaptive Fashion Persona Pipeline

## Purpose

Raksha KrishnaMoorthy built a Madison SyntheticPersonas pipeline for clinically grounded patient personas in health-fashion contexts. Assignment 3 collected, validated, deduplicated, and standardized 125 records across five health-fashion categories. Assignment 4 generated Claude-powered persona cards, a strategic brand intelligence report, email/output packaging, and scale tests with fallback personas for API failures.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Kaggle healthcare CSV | Local CSV | [TODO: DATA SOURCE] Confirm source URL/path for Kaggle healthcare CSV. | Verify local file path and source license; no fabricated demographics. |
| CDC data API | Public data API | [TODO: DATA SOURCE] Confirm source URL/path for CDC data API. | Verify endpoint and field mapping. |
| Hugging Face clinical notes | Public dataset API | [TODO: DATA SOURCE] Confirm source URL/path for Hugging Face clinical notes. | Verify dataset terms and no sensitive/private data. |
| ScienceDaily breast cancer RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for ScienceDaily breast cancer RSS. | Verify article relevance and date. |
| Claude API in A4 | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Claude API in A4. | Approve model, prompt, category rules, and fallback persona behavior. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json | Yes |
| Kaggle healthcare CSV | Local CSV | [TODO: DATA SOURCE] Confirm source URL/path for Kaggle healthcare CSV. | Yes |
| CDC data API | Public data API | [TODO: DATA SOURCE] Confirm source URL/path for CDC data API. | Yes |
| Hugging Face clinical notes | Public dataset API | [TODO: DATA SOURCE] Confirm source URL/path for Hugging Face clinical notes. | Yes |
| ScienceDaily breast cancer RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for ScienceDaily breast cancer RSS. | Yes |
| Claude API in A4 | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Claude API in A4. | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/students/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline data/verified/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Raksha KrishnaMoorthy - Clinical Adaptive Fashion Persona Pipeline` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Any source contains private patient data or uncertain license.
- AI fabricates demographic/clinical details not in source records.
- Category mapping cannot be justified.
- Claude rate limits cause unmarked fallback personas.
- Report makes medical claims or diagnosis-adjacent recommendations.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Map workflow or specification to scripts | `snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline/` | JSON |
| Verified data | `data/verified/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline/` | JSON |
| Agent log | `logs/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-[DATE].json` | JSON |
| Human report | `reports/generated/raksha-krishnamoorthy-clinical-adaptive-fashion-persona-pipeline-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json`
