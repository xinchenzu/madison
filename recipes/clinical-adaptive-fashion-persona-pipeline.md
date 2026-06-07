# Clinical Adaptive Fashion Persona Pipeline

## Purpose

Combines CDC data, local healthcare CSV records, Hugging Face clinical notes, and breast-cancer research RSS to build quality-checked adaptive-fashion persona evidence. The business question is: what signals from these specific sources are reliable enough for a human boss to use in clinical persona synthesis decisions?

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Fetch data.cdc.gov source | `n8n-nodes-base.httpRequest` | `https://data.cdc.gov/resource/hksd-2xuw.json?$limit=100` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Fetch datasets-server.huggingface.co source | `n8n-nodes-base.httpRequest` | `https://datasets-server.huggingface.co/rows?dataset=AGBonnet%2Faugmented-clinical-notes&config=default&split=train&offset=0&limit=100` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Fetch sciencedaily.com source | `n8n-nodes-base.httpRequest` | `https://www.sciencedaily.com/rss/health_medicine/breast_cancer.xml` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Read/Write Files from Disk | `n8n-nodes-base.readWriteFile` | [TODO: DATA SOURCE] Replace machine-specific local path with repo-local path or confirmed fixture: `/Users/rakshakrishnamoorthy/.n8n-files/kaggle_healthcare.csv` | Confirm local file exists in the Madison repo or replace machine-specific path. |
| Extract from File | `n8n-nodes-base.extractFromFile` | `[TODO: DATA SOURCE] Source not explicit in n8n node.` | Human must identify or replace this source before first real run. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| Node Name | Node Type | [TODO: DEFINE] Choose one of ingest, gigo, tool, conductor, report. |
| When clicking 'Execute workflow' | `n8n-nodes-base.manualTrigger` | conductor |
| Fetch data.cdc.gov source | `n8n-nodes-base.httpRequest` | ingest |
| Code: Parse CDC | `n8n-nodes-base.code` | gigo |
| Code: Parse Kaggle | `n8n-nodes-base.code` | gigo |
| Fetch datasets-server.huggingface.co source | `n8n-nodes-base.httpRequest` | ingest |
| Code: Parse HuggingFace | `n8n-nodes-base.code` | gigo |
| Fetch sciencedaily.com source | `n8n-nodes-base.httpRequest` | ingest |
| Code: Parse RSS | `n8n-nodes-base.code` | gigo |
| Code: Merge + Quality Check | `n8n-nodes-base.code` | gigo |
| Code: Summary Report | `n8n-nodes-base.code` | gigo |
| Read/Write Files from Disk | `n8n-nodes-base.readWriteFile` | ingest |
| Extract from File | `n8n-nodes-base.extractFromFile` | ingest |
| Merge | `n8n-nodes-base.merge` | conductor |
| Code: Generate HTML Report | `n8n-nodes-base.code` | gigo |
| Read/Write Files from Disk1 | `n8n-nodes-base.readWriteFile` | tool |
| Sticky Note | `n8n-nodes-base.stickyNote` | conductor |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json | Yes |
| Fetch data.cdc.gov source | Source payload | `https://data.cdc.gov/resource/hksd-2xuw.json?$limit=100` | Yes |
| Fetch datasets-server.huggingface.co source | Source payload | `https://datasets-server.huggingface.co/rows?dataset=AGBonnet%2Faugmented-clinical-notes&config=default&split=train&offset=0&limit=100` | Yes |
| Fetch sciencedaily.com source | Source payload | `https://www.sciencedaily.com/rss/health_medicine/breast_cancer.xml` | Yes |
| Read/Write Files from Disk | Source payload | [TODO: DATA SOURCE] Replace machine-specific local path with repo-local path or confirmed fixture: `/Users/rakshakrishnamoorthy/.n8n-files/kaggle_healthcare.csv` | Yes |
| Extract from File | Source payload | `[TODO: DATA SOURCE] Source not explicit in n8n node.` | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/clinical-adaptive-fashion-persona-pipeline.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/clinical-adaptive-fashion-persona-pipeline data/verified/clinical-adaptive-fashion-persona-pipeline -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/clinical-adaptive-fashion-persona-pipeline.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Fetch data.cdc.gov source. Labor: AI with Human gate.
   Script called: `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__fetch-data-cdc-gov-source.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
3. Step name: Code: Parse CDC. Labor: AI with Human gate.
   Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-parse-cdc.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
4. Step name: Code: Parse Kaggle. Labor: AI with Human gate.
   Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-parse-kaggle.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
5. Step name: Fetch datasets-server.huggingface.co source. Labor: AI with Human gate.
   Script called: `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__fetch-datasets-server-huggingface-co-source.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
6. Step name: Code: Parse HuggingFace. Labor: AI with Human gate.
   Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-parse-huggingface.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
7. Step name: Fetch sciencedaily.com source. Labor: AI with Human gate.
   Script called: `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__fetch-sciencedaily-com-source.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
8. Step name: Code: Parse RSS. Labor: AI with Human gate.
   Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-parse-rss.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
9. Step name: Code: Merge + Quality Check. Labor: AI with Human gate.
   Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-merge-quality-check.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
10. Step name: Code: Summary Report. Labor: AI with Human gate.
   Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-summary-report.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
11. Step name: Read/Write Files from Disk. Labor: AI with Human gate.
   Script called: `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__read-write-files-from-disk.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
12. Step name: Extract from File. Labor: AI with Human gate.
   Script called: `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__extract-from-file.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
13. Step name: Code: Generate HTML Report. Labor: AI with Human gate.
   Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-generate-html-report.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
14. Step name: Read/Write Files from Disk1. Labor: AI with Human gate.
   Script called: `scripts/tools/clinical-adaptive-fashion-persona-pipeline__read-write-files-from-disk1.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
15. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/clinical-adaptive-fashion-persona-pipeline__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/clinical-adaptive-fashion-persona-pipeline-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/clinical-adaptive-fashion-persona-pipeline-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Clinical Adaptive Fashion Persona Pipeline` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TODO: APPROVE] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TODO: DEFINE] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run clinical-adaptive-fashion-persona-pipeline --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run clinical-adaptive-fashion-persona-pipeline --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Fetch data.cdc.gov source | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step fetch-data-cdc-gov-source` | `--sample` |
| Code: Parse CDC | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step code-parse-cdc` |  |
| Code: Parse Kaggle | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step code-parse-kaggle` |  |
| Fetch datasets-server.huggingface.co source | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step fetch-datasets-server-huggingface-co-source` | `--sample` |
| Code: Parse HuggingFace | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step code-parse-huggingface` |  |
| Fetch sciencedaily.com source | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step fetch-sciencedaily-com-source` | `--sample` |
| Code: Parse RSS | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step code-parse-rss` |  |
| Code: Merge + Quality Check | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step code-merge-quality-check` |  |
| Code: Summary Report | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step code-summary-report` |  |
| Read/Write Files from Disk | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step read-write-files-from-disk` | `--sample` |
| Extract from File | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step extract-from-file` | `--sample` |
| Code: Generate HTML Report | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step code-generate-html-report` |  |
| Read/Write Files from Disk1 | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step read-write-files-from-disk1` | `--no-write` |
| Produce human report | `snickerdoodle run clinical-adaptive-fashion-persona-pipeline --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate clinical-adaptive-fashion-persona-pipeline --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate clinical-adaptive-fashion-persona-pipeline --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate clinical-adaptive-fashion-persona-pipeline --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Fetch data.cdc.gov source | `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__fetch-data-cdc-gov-source.py` | ingest |
| Code: Parse CDC | `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-parse-cdc.py` | gigo |
| Code: Parse Kaggle | `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-parse-kaggle.py` | gigo |
| Fetch datasets-server.huggingface.co source | `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__fetch-datasets-server-huggingface-co-source.py` | ingest |
| Code: Parse HuggingFace | `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-parse-huggingface.py` | gigo |
| Fetch sciencedaily.com source | `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__fetch-sciencedaily-com-source.py` | ingest |
| Code: Parse RSS | `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-parse-rss.py` | gigo |
| Code: Merge + Quality Check | `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-merge-quality-check.py` | gigo |
| Code: Summary Report | `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-summary-report.py` | gigo |
| Read/Write Files from Disk | `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__read-write-files-from-disk.py` | ingest |
| Extract from File | `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__extract-from-file.py` | ingest |
| Code: Generate HTML Report | `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-generate-html-report.py` | gigo |
| Read/Write Files from Disk1 | `scripts/tools/clinical-adaptive-fashion-persona-pipeline__read-write-files-from-disk1.py` | tool |
| Produce human report | `scripts/tools/clinical-adaptive-fashion-persona-pipeline__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/clinical-adaptive-fashion-persona-pipeline/` | JSON |
| Verified data | `data/verified/clinical-adaptive-fashion-persona-pipeline/` | JSON |
| Agent log | `logs/clinical-adaptive-fashion-persona-pipeline-[DATE].json` | JSON |
| Human report | `reports/generated/clinical-adaptive-fashion-persona-pipeline-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json`
