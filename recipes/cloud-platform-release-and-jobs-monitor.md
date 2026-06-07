# Cloud Platform Release And Jobs Monitor

## Purpose

Combines AWS blog RSS, Google Cloud release notes, and a public cloud-jobs CSV to build a cleaned cloud-platform signal dataset. The business question is: what signals from these specific sources are reliable enough for a human boss to use in cloud market intelligence decisions?

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Source 1: AWS Blog RSS | `n8n-nodes-base.rssFeedRead` | `https://aws.amazon.com/blogs/aws/feed/` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Source 2: Google Cloud RSS | `n8n-nodes-base.rssFeedRead` | `https://cloud.google.com/feeds/gcp-release-notes.xml` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Source 3: Cloud Jobs CSV (HTTP) | `n8n-nodes-base.httpRequest` | `https://raw.githubusercontent.com/cloudcertdata/public-datasets/main/cloud_jobs_sample.csv` | Confirm source is allowed, current, and rate-safe before live fetch. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| Manual Trigger | `n8n-nodes-base.manualTrigger` | conductor |
| Source 1: AWS Blog RSS | `n8n-nodes-base.rssFeedRead` | ingest |
| Source 2: Google Cloud RSS | `n8n-nodes-base.rssFeedRead` | ingest |
| Source 3: Cloud Jobs CSV (HTTP) | `n8n-nodes-base.httpRequest` | ingest |
| Merge All Sources | `n8n-nodes-base.merge` | conductor |
| Clean & Standardize | `n8n-nodes-base.code` | gigo |
| Quality Check | `n8n-nodes-base.code` | gigo |
| Save to CSV | `n8n-nodes-base.spreadsheetFile` | tool |
| Write File to Disk | `n8n-nodes-base.writeBinaryFile` | tool |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/manyaratanaka_312461_41801533_Tanaka_A3_Workflow.json | Yes |
| Source 1: AWS Blog RSS | Source payload | `https://aws.amazon.com/blogs/aws/feed/` | Yes |
| Source 2: Google Cloud RSS | Source payload | `https://cloud.google.com/feeds/gcp-release-notes.xml` | Yes |
| Source 3: Cloud Jobs CSV (HTTP) | Source payload | `https://raw.githubusercontent.com/cloudcertdata/public-datasets/main/cloud_jobs_sample.csv` | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/manyaratanaka_312461_41801533_Tanaka_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/cloud-platform-release-and-jobs-monitor.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run cloud-platform-release-and-jobs-monitor --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/cloud-platform-release-and-jobs-monitor data/verified/cloud-platform-release-and-jobs-monitor -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/cloud-platform-release-and-jobs-monitor.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/manyaratanaka_312461_41801533_Tanaka_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Source 1: AWS Blog RSS. Labor: AI with Human gate.
   Script called: `scripts/ingest/cloud-platform-release-and-jobs-monitor__source-1-aws-blog-rss.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
3. Step name: Source 2: Google Cloud RSS. Labor: AI with Human gate.
   Script called: `scripts/ingest/cloud-platform-release-and-jobs-monitor__source-2-google-cloud-rss.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
4. Step name: Source 3: Cloud Jobs CSV (HTTP). Labor: AI with Human gate.
   Script called: `scripts/ingest/cloud-platform-release-and-jobs-monitor__source-3-cloud-jobs-csv-http.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
5. Step name: Clean & Standardize. Labor: AI with Human gate.
   Script called: `scripts/gigo/cloud-platform-release-and-jobs-monitor__clean-and-standardize.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
6. Step name: Quality Check. Labor: AI with Human gate.
   Script called: `scripts/gigo/cloud-platform-release-and-jobs-monitor__quality-check.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
7. Step name: Save to CSV. Labor: AI with Human gate.
   Script called: `scripts/tools/cloud-platform-release-and-jobs-monitor__save-to-csv.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
8. Step name: Write File to Disk. Labor: AI with Human gate.
   Script called: `scripts/tools/cloud-platform-release-and-jobs-monitor__write-file-to-disk.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
9. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/cloud-platform-release-and-jobs-monitor__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/cloud-platform-release-and-jobs-monitor-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/cloud-platform-release-and-jobs-monitor-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Cloud Platform Release And Jobs Monitor` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/manyaratanaka_312461_41801533_Tanaka_A3_Workflow.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TODO: APPROVE] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TODO: DEFINE] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run cloud-platform-release-and-jobs-monitor --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run cloud-platform-release-and-jobs-monitor --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Source 1: AWS Blog RSS | `snickerdoodle run cloud-platform-release-and-jobs-monitor --step source-1-aws-blog-rss` | `--sample` |
| Source 2: Google Cloud RSS | `snickerdoodle run cloud-platform-release-and-jobs-monitor --step source-2-google-cloud-rss` | `--sample` |
| Source 3: Cloud Jobs CSV (HTTP) | `snickerdoodle run cloud-platform-release-and-jobs-monitor --step source-3-cloud-jobs-csv-http` | `--sample` |
| Clean & Standardize | `snickerdoodle run cloud-platform-release-and-jobs-monitor --step clean-and-standardize` |  |
| Quality Check | `snickerdoodle run cloud-platform-release-and-jobs-monitor --step quality-check` |  |
| Save to CSV | `snickerdoodle run cloud-platform-release-and-jobs-monitor --step save-to-csv` | `--no-write` |
| Write File to Disk | `snickerdoodle run cloud-platform-release-and-jobs-monitor --step write-file-to-disk` | `--no-write` |
| Produce human report | `snickerdoodle run cloud-platform-release-and-jobs-monitor --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate cloud-platform-release-and-jobs-monitor --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate cloud-platform-release-and-jobs-monitor --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate cloud-platform-release-and-jobs-monitor --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Source 1: AWS Blog RSS | `scripts/ingest/cloud-platform-release-and-jobs-monitor__source-1-aws-blog-rss.py` | ingest |
| Source 2: Google Cloud RSS | `scripts/ingest/cloud-platform-release-and-jobs-monitor__source-2-google-cloud-rss.py` | ingest |
| Source 3: Cloud Jobs CSV (HTTP) | `scripts/ingest/cloud-platform-release-and-jobs-monitor__source-3-cloud-jobs-csv-http.py` | ingest |
| Clean & Standardize | `scripts/gigo/cloud-platform-release-and-jobs-monitor__clean-and-standardize.py` | gigo |
| Quality Check | `scripts/gigo/cloud-platform-release-and-jobs-monitor__quality-check.py` | gigo |
| Save to CSV | `scripts/tools/cloud-platform-release-and-jobs-monitor__save-to-csv.py` | tool |
| Write File to Disk | `scripts/tools/cloud-platform-release-and-jobs-monitor__write-file-to-disk.py` | tool |
| Produce human report | `scripts/tools/cloud-platform-release-and-jobs-monitor__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/cloud-platform-release-and-jobs-monitor/` | JSON |
| Verified data | `data/verified/cloud-platform-release-and-jobs-monitor/` | JSON |
| Agent log | `logs/cloud-platform-release-and-jobs-monitor-[DATE].json` | JSON |
| Human report | `reports/generated/cloud-platform-release-and-jobs-monitor-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/manyaratanaka_312461_41801533_Tanaka_A3_Workflow.json`
