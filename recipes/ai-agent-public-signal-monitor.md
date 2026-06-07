# AI Agent Public Signal Monitor

## Purpose

Tracks public AI-agent signals from Hacker News, DEV Community, and GitHub repository search, then normalizes and deduplicates items into a reviewable CSV-style signal set. The business question is: what signals from these specific sources are reliable enough for a human boss to use in public signal monitoring decisions?

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| HTTP - Hacker News | `n8n-nodes-base.httpRequest` | `https://hn.algolia.com/api/v1/search_by_date?query=ai%20agents&tags=story&hitsPerPage=60` | Confirm source is allowed, current, and rate-safe before live fetch. |
| HTTP - DEV Community | `n8n-nodes-base.httpRequest` | `https://dev.to/api/articles?tag=ai&per_page=60&top=30` | Confirm source is allowed, current, and rate-safe before live fetch. |
| HTTP - GitHub Search | `n8n-nodes-base.httpRequest` | `https://api.github.com/search/repositories?q=ai+agent+in:name,description&sort=updated&order=desc&per_page=60` | Confirm source is allowed, current, and rate-safe before live fetch. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| Manual Trigger | `n8n-nodes-base.manualTrigger` | conductor |
| HTTP - Hacker News | `n8n-nodes-base.httpRequest` | ingest |
| HTTP - DEV Community | `n8n-nodes-base.httpRequest` | ingest |
| HTTP - GitHub Search | `n8n-nodes-base.httpRequest` | ingest |
| Normalize - Hacker News | `n8n-nodes-base.code` | gigo |
| Normalize - DEV Community | `n8n-nodes-base.code` | gigo |
| Normalize - GitHub | `n8n-nodes-base.code` | gigo |
| Merge - HN + DEV | `n8n-nodes-base.merge` | conductor |
| Merge - All Sources | `n8n-nodes-base.merge` | conductor |
| Clean, Deduplicate, Validate | `n8n-nodes-base.code` | gigo |
| Convert to CSV | `n8n-nodes-base.convertToFile` | tool |
| Write CSV to Downloads | `n8n-nodes-base.readWriteFile` | tool |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/Nguyen_Duc_A3_Workflow.json | Yes |
| HTTP - Hacker News | Source payload | `https://hn.algolia.com/api/v1/search_by_date?query=ai%20agents&tags=story&hitsPerPage=60` | Yes |
| HTTP - DEV Community | Source payload | `https://dev.to/api/articles?tag=ai&per_page=60&top=30` | Yes |
| HTTP - GitHub Search | Source payload | `https://api.github.com/search/repositories?q=ai+agent+in:name,description&sort=updated&order=desc&per_page=60` | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/Nguyen_Duc_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/ai-agent-public-signal-monitor.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run ai-agent-public-signal-monitor --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/ai-agent-public-signal-monitor data/verified/ai-agent-public-signal-monitor -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/ai-agent-public-signal-monitor.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/Nguyen_Duc_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: HTTP - Hacker News. Labor: AI with Human gate.
   Script called: `scripts/ingest/ai-agent-public-signal-monitor__http-hacker-news.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
3. Step name: HTTP - DEV Community. Labor: AI with Human gate.
   Script called: `scripts/ingest/ai-agent-public-signal-monitor__http-dev-community.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
4. Step name: HTTP - GitHub Search. Labor: AI with Human gate.
   Script called: `scripts/ingest/ai-agent-public-signal-monitor__http-github-search.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
5. Step name: Normalize - Hacker News. Labor: AI with Human gate.
   Script called: `scripts/gigo/ai-agent-public-signal-monitor__normalize-hacker-news.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
6. Step name: Normalize - DEV Community. Labor: AI with Human gate.
   Script called: `scripts/gigo/ai-agent-public-signal-monitor__normalize-dev-community.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
7. Step name: Normalize - GitHub. Labor: AI with Human gate.
   Script called: `scripts/gigo/ai-agent-public-signal-monitor__normalize-github.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
8. Step name: Clean, Deduplicate, Validate. Labor: AI with Human gate.
   Script called: `scripts/gigo/ai-agent-public-signal-monitor__clean-deduplicate-validate.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
9. Step name: Convert to CSV. Labor: AI with Human gate.
   Script called: `scripts/tools/ai-agent-public-signal-monitor__convert-to-csv.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
10. Step name: Write CSV to Downloads. Labor: AI with Human gate.
   Script called: `scripts/tools/ai-agent-public-signal-monitor__write-csv-to-downloads.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
11. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/ai-agent-public-signal-monitor__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/ai-agent-public-signal-monitor-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/ai-agent-public-signal-monitor-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `AI Agent Public Signal Monitor` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/Nguyen_Duc_A3_Workflow.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TODO: APPROVE] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TODO: DEFINE] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run ai-agent-public-signal-monitor --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run ai-agent-public-signal-monitor --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| HTTP - Hacker News | `snickerdoodle run ai-agent-public-signal-monitor --step http-hacker-news` | `--sample` |
| HTTP - DEV Community | `snickerdoodle run ai-agent-public-signal-monitor --step http-dev-community` | `--sample` |
| HTTP - GitHub Search | `snickerdoodle run ai-agent-public-signal-monitor --step http-github-search` | `--sample` |
| Normalize - Hacker News | `snickerdoodle run ai-agent-public-signal-monitor --step normalize-hacker-news` |  |
| Normalize - DEV Community | `snickerdoodle run ai-agent-public-signal-monitor --step normalize-dev-community` |  |
| Normalize - GitHub | `snickerdoodle run ai-agent-public-signal-monitor --step normalize-github` |  |
| Clean, Deduplicate, Validate | `snickerdoodle run ai-agent-public-signal-monitor --step clean-deduplicate-validate` |  |
| Convert to CSV | `snickerdoodle run ai-agent-public-signal-monitor --step convert-to-csv` | `--no-write` |
| Write CSV to Downloads | `snickerdoodle run ai-agent-public-signal-monitor --step write-csv-to-downloads` | `--no-write` |
| Produce human report | `snickerdoodle run ai-agent-public-signal-monitor --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate ai-agent-public-signal-monitor --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate ai-agent-public-signal-monitor --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate ai-agent-public-signal-monitor --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| HTTP - Hacker News | `scripts/ingest/ai-agent-public-signal-monitor__http-hacker-news.py` | ingest |
| HTTP - DEV Community | `scripts/ingest/ai-agent-public-signal-monitor__http-dev-community.py` | ingest |
| HTTP - GitHub Search | `scripts/ingest/ai-agent-public-signal-monitor__http-github-search.py` | ingest |
| Normalize - Hacker News | `scripts/gigo/ai-agent-public-signal-monitor__normalize-hacker-news.py` | gigo |
| Normalize - DEV Community | `scripts/gigo/ai-agent-public-signal-monitor__normalize-dev-community.py` | gigo |
| Normalize - GitHub | `scripts/gigo/ai-agent-public-signal-monitor__normalize-github.py` | gigo |
| Clean, Deduplicate, Validate | `scripts/gigo/ai-agent-public-signal-monitor__clean-deduplicate-validate.py` | gigo |
| Convert to CSV | `scripts/tools/ai-agent-public-signal-monitor__convert-to-csv.py` | tool |
| Write CSV to Downloads | `scripts/tools/ai-agent-public-signal-monitor__write-csv-to-downloads.py` | tool |
| Produce human report | `scripts/tools/ai-agent-public-signal-monitor__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/ai-agent-public-signal-monitor/` | JSON |
| Verified data | `data/verified/ai-agent-public-signal-monitor/` | JSON |
| Agent log | `logs/ai-agent-public-signal-monitor-[DATE].json` | JSON |
| Human report | `reports/generated/ai-agent-public-signal-monitor-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/Nguyen_Duc_A3_Workflow.json`
