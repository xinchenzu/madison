# Cybersecurity Breach And Advisory Dataset Pipeline

## Purpose

Normalizes local breach records, CISA advisories, and Kaggle cybersecurity dataset-catalog records into clean and rejected cybersecurity data outputs. The business question is: what signals from these specific sources are reliable enough for a human boss to use in cybersecurity dataset curation decisions?

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Read local breach CSV source | `n8n-nodes-base.readWriteFile` | [TODO: DATA SOURCE] Replace machine-specific local path with repo-local path or confirmed fixture: `C:\Users\Hammad\.n8n-files\breaches_raw.csv` | Confirm local file exists in the Madison repo or replace machine-specific path. |
| Extract local breach CSV rows | `n8n-nodes-base.extractFromFile` | `[TODO: DATA SOURCE] Source not explicit in n8n node.` | Human must identify or replace this source before first real run. |
| Fetch CISA cybersecurity advisories | `n8n-nodes-base.rssFeedRead` | `https://www.cisa.gov/cybersecurity-advisories/all.xml` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Fetch Kaggle cybersecurity dataset catalog | `n8n-nodes-base.httpRequest` | `https://www.kaggle.com/api/v1/datasets/list` | Confirm source is allowed, current, and rate-safe before live fetch. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| When clicking 'Execute workflow' | `n8n-nodes-base.manualTrigger` | conductor |
| Read local breach CSV source | `n8n-nodes-base.readWriteFile` | ingest |
| Extract local breach CSV rows | `n8n-nodes-base.extractFromFile` | ingest |
| Normalize local breach records | `n8n-nodes-base.code` | gigo |
| Prepare normalized breach JSON | `n8n-nodes-base.convertToFile` | tool |
| Write normalized breach JSON handoff | `n8n-nodes-base.readWriteFile` | tool |
| Fetch CISA cybersecurity advisories | `n8n-nodes-base.rssFeedRead` | ingest |
| Normalize CISA advisory records | `n8n-nodes-base.code` | gigo |
| Prepare normalized CISA advisory JSON | `n8n-nodes-base.convertToFile` | tool |
| Write normalized CISA advisory JSON handoff | `n8n-nodes-base.readWriteFile` | tool |
| Fetch Kaggle cybersecurity dataset catalog | `n8n-nodes-base.httpRequest` | ingest |
| Normalize Kaggle cybersecurity catalog records | `n8n-nodes-base.code` | gigo |
| Prepare normalized cybersecurity catalog JSON | `n8n-nodes-base.convertToFile` | tool |
| Write normalized cybersecurity catalog JSON handoff | `n8n-nodes-base.readWriteFile` | tool |
| Merge | `n8n-nodes-base.merge` | conductor |
| Deduplicate merged cybersecurity records | `n8n-nodes-base.code` | gigo |
| Split clean and rejected cybersecurity records | `n8n-nodes-base.code` | gigo |
| If | `n8n-nodes-base.if` | conductor |
| Prepare clean cybersecurity JSON | `n8n-nodes-base.convertToFile` | tool |
| Write clean cybersecurity JSON handoff | `n8n-nodes-base.readWriteFile` | tool |
| Prepare rejected cybersecurity JSON | `n8n-nodes-base.convertToFile` | tool |
| Write rejected cybersecurity JSON handoff | `n8n-nodes-base.readWriteFile` | tool |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json | Yes |
| Read local breach CSV source | Source payload | [TODO: DATA SOURCE] Replace machine-specific local path with repo-local path or confirmed fixture: `C:\Users\Hammad\.n8n-files\breaches_raw.csv` | Yes |
| Extract local breach CSV rows | Source payload | `[TODO: DATA SOURCE] Source not explicit in n8n node.` | Yes |
| Fetch CISA cybersecurity advisories | Source payload | `https://www.cisa.gov/cybersecurity-advisories/all.xml` | Yes |
| Fetch Kaggle cybersecurity dataset catalog | Source payload | `https://www.kaggle.com/api/v1/datasets/list` | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/cybersecurity-breach-and-advisory-dataset-pipeline.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/cybersecurity-breach-and-advisory-dataset-pipeline data/verified/cybersecurity-breach-and-advisory-dataset-pipeline -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/cybersecurity-breach-and-advisory-dataset-pipeline.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Read local breach CSV source. Labor: AI with Human gate.
   Script called: `scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__read-local-breach-csv-source.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
3. Step name: Extract local breach CSV rows. Labor: AI with Human gate.
   Script called: `scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__extract-local-breach-csv-rows.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
4. Step name: Normalize local breach records. Labor: AI with Human gate.
   Script called: `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__normalize-local-breach-records.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
5. Step name: Prepare normalized breach JSON. Labor: AI with Human gate.
   Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-normalized-breach-json.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
6. Step name: Write normalized breach JSON handoff. Labor: AI with Human gate.
   Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-normalized-breach-json-handoff.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
7. Step name: Fetch CISA cybersecurity advisories. Labor: AI with Human gate.
   Script called: `scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__fetch-cisa-cybersecurity-advisories.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
8. Step name: Normalize CISA advisory records. Labor: AI with Human gate.
   Script called: `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__normalize-cisa-advisory-records.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
9. Step name: Prepare normalized CISA advisory JSON. Labor: AI with Human gate.
   Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-normalized-cisa-advisory-json.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
10. Step name: Write normalized CISA advisory JSON handoff. Labor: AI with Human gate.
   Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-normalized-cisa-advisory-json-handoff.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
11. Step name: Fetch Kaggle cybersecurity dataset catalog. Labor: AI with Human gate.
   Script called: `scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__fetch-kaggle-cybersecurity-dataset-catalog.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
12. Step name: Normalize Kaggle cybersecurity catalog records. Labor: AI with Human gate.
   Script called: `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__normalize-kaggle-cybersecurity-catalog-records.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
13. Step name: Prepare normalized cybersecurity catalog JSON. Labor: AI with Human gate.
   Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-normalized-cybersecurity-catalog-json.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
14. Step name: Write normalized cybersecurity catalog JSON handoff. Labor: AI with Human gate.
   Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-normalized-cybersecurity-catalog-json-handoff.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
15. Step name: Deduplicate merged cybersecurity records. Labor: AI with Human gate.
   Script called: `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__deduplicate-merged-cybersecurity-records.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
16. Step name: Split clean and rejected cybersecurity records. Labor: AI with Human gate.
   Script called: `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__split-clean-and-rejected-cybersecurity-records.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
17. Step name: Prepare clean cybersecurity JSON. Labor: AI with Human gate.
   Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-clean-cybersecurity-json.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
18. Step name: Write clean cybersecurity JSON handoff. Labor: AI with Human gate.
   Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-clean-cybersecurity-json-handoff.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
19. Step name: Prepare rejected cybersecurity JSON. Labor: AI with Human gate.
   Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-rejected-cybersecurity-json.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
20. Step name: Write rejected cybersecurity JSON handoff. Labor: AI with Human gate.
   Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-rejected-cybersecurity-json-handoff.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
21. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/cybersecurity-breach-and-advisory-dataset-pipeline-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/cybersecurity-breach-and-advisory-dataset-pipeline-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Cybersecurity Breach And Advisory Dataset Pipeline` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TODO: APPROVE] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TODO: DEFINE] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Read local breach CSV source | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step read-local-breach-csv-source` | `--sample` |
| Extract local breach CSV rows | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step extract-local-breach-csv-rows` | `--sample` |
| Normalize local breach records | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step normalize-local-breach-records` |  |
| Prepare normalized breach JSON | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step prepare-normalized-breach-json` | `--no-write` |
| Write normalized breach JSON handoff | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step write-normalized-breach-json-handoff` | `--no-write` |
| Fetch CISA cybersecurity advisories | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step fetch-cisa-cybersecurity-advisories` | `--sample` |
| Normalize CISA advisory records | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step normalize-cisa-advisory-records` |  |
| Prepare normalized CISA advisory JSON | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step prepare-normalized-cisa-advisory-json` | `--no-write` |
| Write normalized CISA advisory JSON handoff | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step write-normalized-cisa-advisory-json-handoff` | `--no-write` |
| Fetch Kaggle cybersecurity dataset catalog | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step fetch-kaggle-cybersecurity-dataset-catalog` | `--sample` |
| Normalize Kaggle cybersecurity catalog records | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step normalize-kaggle-cybersecurity-catalog-records` |  |
| Prepare normalized cybersecurity catalog JSON | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step prepare-normalized-cybersecurity-catalog-json` | `--no-write` |
| Write normalized cybersecurity catalog JSON handoff | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step write-normalized-cybersecurity-catalog-json-handoff` | `--no-write` |
| Deduplicate merged cybersecurity records | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step deduplicate-merged-cybersecurity-records` |  |
| Split clean and rejected cybersecurity records | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step split-clean-and-rejected-cybersecurity-records` |  |
| Prepare clean cybersecurity JSON | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step prepare-clean-cybersecurity-json` | `--no-write` |
| Write clean cybersecurity JSON handoff | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step write-clean-cybersecurity-json-handoff` | `--no-write` |
| Prepare rejected cybersecurity JSON | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step prepare-rejected-cybersecurity-json` | `--no-write` |
| Write rejected cybersecurity JSON handoff | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step write-rejected-cybersecurity-json-handoff` | `--no-write` |
| Produce human report | `snickerdoodle run cybersecurity-breach-and-advisory-dataset-pipeline --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate cybersecurity-breach-and-advisory-dataset-pipeline --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate cybersecurity-breach-and-advisory-dataset-pipeline --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate cybersecurity-breach-and-advisory-dataset-pipeline --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Read local breach CSV source | `scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__read-local-breach-csv-source.py` | ingest |
| Extract local breach CSV rows | `scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__extract-local-breach-csv-rows.py` | ingest |
| Normalize local breach records | `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__normalize-local-breach-records.py` | gigo |
| Prepare normalized breach JSON | `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-normalized-breach-json.py` | tool |
| Write normalized breach JSON handoff | `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-normalized-breach-json-handoff.py` | tool |
| Fetch CISA cybersecurity advisories | `scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__fetch-cisa-cybersecurity-advisories.py` | ingest |
| Normalize CISA advisory records | `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__normalize-cisa-advisory-records.py` | gigo |
| Prepare normalized CISA advisory JSON | `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-normalized-cisa-advisory-json.py` | tool |
| Write normalized CISA advisory JSON handoff | `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-normalized-cisa-advisory-json-handoff.py` | tool |
| Fetch Kaggle cybersecurity dataset catalog | `scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__fetch-kaggle-cybersecurity-dataset-catalog.py` | ingest |
| Normalize Kaggle cybersecurity catalog records | `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__normalize-kaggle-cybersecurity-catalog-records.py` | gigo |
| Prepare normalized cybersecurity catalog JSON | `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-normalized-cybersecurity-catalog-json.py` | tool |
| Write normalized cybersecurity catalog JSON handoff | `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-normalized-cybersecurity-catalog-json-handoff.py` | tool |
| Deduplicate merged cybersecurity records | `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__deduplicate-merged-cybersecurity-records.py` | gigo |
| Split clean and rejected cybersecurity records | `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__split-clean-and-rejected-cybersecurity-records.py` | gigo |
| Prepare clean cybersecurity JSON | `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-clean-cybersecurity-json.py` | tool |
| Write clean cybersecurity JSON handoff | `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-clean-cybersecurity-json-handoff.py` | tool |
| Prepare rejected cybersecurity JSON | `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-rejected-cybersecurity-json.py` | tool |
| Write rejected cybersecurity JSON handoff | `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-rejected-cybersecurity-json-handoff.py` | tool |
| Produce human report | `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/cybersecurity-breach-and-advisory-dataset-pipeline/` | JSON |
| Verified data | `data/verified/cybersecurity-breach-and-advisory-dataset-pipeline/` | JSON |
| Agent log | `logs/cybersecurity-breach-and-advisory-dataset-pipeline-[DATE].json` | JSON |
| Human report | `reports/generated/cybersecurity-breach-and-advisory-dataset-pipeline-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json`
