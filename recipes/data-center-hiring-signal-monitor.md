# Data Center Hiring Signal Monitor

## Purpose

Combines BLS labor series, NewsAPI coverage about AWS data-center hiring, and local sample job-market records to surface hiring and infrastructure demand signals. The business question is: what signals from these specific sources are reliable enough for a human boss to use in labor and hiring intelligence decisions?

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Fetch BLS labor time-series data | `n8n-nodes-base.httpRequest` | `https://api.bls.gov/publicAPI/v2/timeseries/data/` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Fetch NewsAPI AWS data-center hiring articles | `n8n-nodes-base.httpRequest` | [TODO: APPROVE] Migrate embedded credential to env var before live use: `https://newsapi.org/v2/everything?q=data+center+hiring+AWS&pageSize=100&apiKey=[REDACTED_USE_ENV]` | Credential was embedded in the original n8n URL; replace with environment variable and record `[TODO: APPROVE] credential migration` before live use. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| When clicking 'Execute workflow' | `n8n-nodes-base.manualTrigger` | conductor |
| Fetch BLS labor time-series data | `n8n-nodes-base.httpRequest` | ingest |
| Fetch NewsAPI AWS data-center hiring articles | `n8n-nodes-base.httpRequest` | ingest |
| Parse local data-center job-market sample records | `n8n-nodes-base.code` | gigo |
| Merge, clean, and deduplicate hiring signals | `n8n-nodes-base.code` | gigo |
| Prepare data-center hiring signal export | `n8n-nodes-base.convertToFile` | tool |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/bykovdenis_454895_41780985_Bykov_Denis_A3_Workflow.json | Yes |
| Fetch BLS labor time-series data | Source payload | `https://api.bls.gov/publicAPI/v2/timeseries/data/` | Yes |
| Fetch NewsAPI AWS data-center hiring articles | Source payload | [TODO: APPROVE] Migrate embedded credential to env var before live use: `https://newsapi.org/v2/everything?q=data+center+hiring+AWS&pageSize=100&apiKey=[REDACTED_USE_ENV]` | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/bykovdenis_454895_41780985_Bykov_Denis_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/data-center-hiring-signal-monitor.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run data-center-hiring-signal-monitor --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/data-center-hiring-signal-monitor data/verified/data-center-hiring-signal-monitor -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/data-center-hiring-signal-monitor.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/bykovdenis_454895_41780985_Bykov_Denis_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Fetch BLS labor time-series data. Labor: AI with Human gate.
   Script called: `scripts/ingest/data-center-hiring-signal-monitor__fetch-bls-labor-time-series-data.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
3. Step name: Fetch NewsAPI AWS data-center hiring articles. Labor: AI with Human gate.
   Script called: `scripts/ingest/data-center-hiring-signal-monitor__fetch-newsapi-aws-data-center-hiring-articles.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
4. Step name: Parse local data-center job-market sample records. Labor: AI with Human gate.
   Script called: `scripts/gigo/data-center-hiring-signal-monitor__parse-local-data-center-job-market-sample-records.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
5. Step name: Merge, clean, and deduplicate hiring signals. Labor: AI with Human gate.
   Script called: `scripts/gigo/data-center-hiring-signal-monitor__merge-clean-and-deduplicate-hiring-signals.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
6. Step name: Prepare data-center hiring signal export. Labor: AI with Human gate.
   Script called: `scripts/tools/data-center-hiring-signal-monitor__prepare-data-center-hiring-signal-export.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
7. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/data-center-hiring-signal-monitor__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/data-center-hiring-signal-monitor-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/data-center-hiring-signal-monitor-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Data Center Hiring Signal Monitor` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/bykovdenis_454895_41780985_Bykov_Denis_A3_Workflow.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TODO: APPROVE] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TODO: DEFINE] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run data-center-hiring-signal-monitor --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run data-center-hiring-signal-monitor --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Fetch BLS labor time-series data | `snickerdoodle run data-center-hiring-signal-monitor --step fetch-bls-labor-time-series-data` | `--sample` |
| Fetch NewsAPI AWS data-center hiring articles | `snickerdoodle run data-center-hiring-signal-monitor --step fetch-newsapi-aws-data-center-hiring-articles` | `--sample` |
| Parse local data-center job-market sample records | `snickerdoodle run data-center-hiring-signal-monitor --step parse-local-data-center-job-market-sample-records` |  |
| Merge, clean, and deduplicate hiring signals | `snickerdoodle run data-center-hiring-signal-monitor --step merge-clean-and-deduplicate-hiring-signals` |  |
| Prepare data-center hiring signal export | `snickerdoodle run data-center-hiring-signal-monitor --step prepare-data-center-hiring-signal-export` | `--no-write` |
| Produce human report | `snickerdoodle run data-center-hiring-signal-monitor --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate data-center-hiring-signal-monitor --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate data-center-hiring-signal-monitor --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate data-center-hiring-signal-monitor --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Fetch BLS labor time-series data | `scripts/ingest/data-center-hiring-signal-monitor__fetch-bls-labor-time-series-data.py` | ingest |
| Fetch NewsAPI AWS data-center hiring articles | `scripts/ingest/data-center-hiring-signal-monitor__fetch-newsapi-aws-data-center-hiring-articles.py` | ingest |
| Parse local data-center job-market sample records | `scripts/gigo/data-center-hiring-signal-monitor__parse-local-data-center-job-market-sample-records.py` | gigo |
| Merge, clean, and deduplicate hiring signals | `scripts/gigo/data-center-hiring-signal-monitor__merge-clean-and-deduplicate-hiring-signals.py` | gigo |
| Prepare data-center hiring signal export | `scripts/tools/data-center-hiring-signal-monitor__prepare-data-center-hiring-signal-export.py` | tool |
| Produce human report | `scripts/tools/data-center-hiring-signal-monitor__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/data-center-hiring-signal-monitor/` | JSON |
| Verified data | `data/verified/data-center-hiring-signal-monitor/` | JSON |
| Agent log | `logs/data-center-hiring-signal-monitor-[DATE].json` | JSON |
| Human report | `reports/generated/data-center-hiring-signal-monitor-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/bykovdenis_454895_41780985_Bykov_Denis_A3_Workflow.json`
