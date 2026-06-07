# Denis Bykov - Job Market Intelligence And Multi-Agent Career Debate

## Purpose

Denis Bykov built Madison as a job-market intelligence agent for data-center and cloud-infrastructure roles. Assignment 3 collected job postings, BLS labor market data, and hiring-trend news to map real requirements for roles like AWS Data Center Technician. Assignment 4 turned the data pipeline into a multi-agent debate system that uses a harsh hiring manager, a candidate advocate, and a synthesis judge to produce browser-readable career intelligence reports.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Kaggle / LinkedIn job postings sample | CSV / code sample | [TODO: DATA SOURCE] Confirm source URL/path for Kaggle / LinkedIn job postings sample. | Check source provenance and whether hardcoded sample represents the intended market. |
| BLS public API | Public labor API | [TODO: DATA SOURCE] Confirm source URL/path for BLS public API. | Verify series IDs, date range, and no authentication needed. |
| NewsAPI data-center hiring query | News API | [TODO: DATA SOURCE] Confirm source URL/path for NewsAPI data-center hiring query. | Credential must be moved to env var; verify article relevance and source quality. |
| Claude / Anthropic API in A4 | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Claude / Anthropic API in A4. | Approve model, prompt roles, cost, and fairness/risk boundaries. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/bykovdenis_454895_41780985_Bykov_Denis_A3_Workflow.json | Yes |
| Kaggle / LinkedIn job postings sample | CSV / code sample | [TODO: DATA SOURCE] Confirm source URL/path for Kaggle / LinkedIn job postings sample. | Yes |
| BLS public API | Public labor API | [TODO: DATA SOURCE] Confirm source URL/path for BLS public API. | Yes |
| NewsAPI data-center hiring query | News API | [TODO: DATA SOURCE] Confirm source URL/path for NewsAPI data-center hiring query. | Yes |
| Claude / Anthropic API in A4 | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Claude / Anthropic API in A4. | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/bykovdenis_454895_41780985_Bykov_Denis_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/students/denis-bykov-job-market-intelligence-multi-agent-career-debate.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/denis-bykov-job-market-intelligence-multi-agent-career-debate data/verified/denis-bykov-job-market-intelligence-multi-agent-career-debate -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/denis-bykov-job-market-intelligence-multi-agent-career-debate.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/bykovdenis_454895_41780985_Bykov_Denis_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/denis-bykov-job-market-intelligence-multi-agent-career-debate__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/denis-bykov-job-market-intelligence-multi-agent-career-debate__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/denis-bykov-job-market-intelligence-multi-agent-career-debate-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/denis-bykov-job-market-intelligence-multi-agent-career-debate-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Denis Bykov - Job Market Intelligence And Multi-Agent Career Debate` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Credential appears in URL, logs, recipe, or report.
- Job records lack provenance or are too stale for the role target.
- AI judge invents experience, credentials, or job requirements.
- NewsAPI tier is exceeded without cache/fallback.
- Report gives career advice without evidence-backed gap/action mapping.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Map workflow or specification to scripts | `snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run denis-bykov-job-market-intelligence-multi-agent-career-debate --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate denis-bykov-job-market-intelligence-multi-agent-career-debate --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate denis-bykov-job-market-intelligence-multi-agent-career-debate --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate denis-bykov-job-market-intelligence-multi-agent-career-debate --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/denis-bykov-job-market-intelligence-multi-agent-career-debate__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/denis-bykov-job-market-intelligence-multi-agent-career-debate__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/denis-bykov-job-market-intelligence-multi-agent-career-debate/` | JSON |
| Verified data | `data/verified/denis-bykov-job-market-intelligence-multi-agent-career-debate/` | JSON |
| Agent log | `logs/denis-bykov-job-market-intelligence-multi-agent-career-debate-[DATE].json` | JSON |
| Human report | `reports/generated/denis-bykov-job-market-intelligence-multi-agent-career-debate-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/bykovdenis_454895_41780985_Bykov_Denis_A3_Workflow.json`
