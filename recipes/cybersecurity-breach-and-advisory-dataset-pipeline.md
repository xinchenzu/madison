# Cybersecurity Breach And Advisory Dataset Pipeline

## Purpose

Normalizes local breach records, CISA advisories, and Kaggle cybersecurity dataset-catalog records into clean and rejected cybersecurity data outputs. The business question is: what signals from these specific sources are reliable enough for a human boss to use in cybersecurity dataset curation decisions?

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Read local breach CSV source | `n8n-nodes-base.readWriteFile` | `C:\Users\Hammad\.n8n-files\breaches_raw.csv` | Confirm local file exists in the Madison repo or replace machine-specific path. |
| Extract local breach CSV rows | `n8n-nodes-base.extractFromFile` | `[TO DO] Source not explicit in n8n node.` | Human must identify or replace this source before first real run. |
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
| Original n8n workflow JSON | JSON | `pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json` | Yes |
| Read local breach CSV source | Source payload | `C:\Users\Hammad\.n8n-files\breaches_raw.csv` | Yes |
| Extract local breach CSV rows | Source payload | `[TO DO] Source not explicit in n8n node.` | Yes |
| Fetch CISA cybersecurity advisories | Source payload | `https://www.cisa.gov/cybersecurity-advisories/all.xml` | Yes |
| Fetch Kaggle cybersecurity dataset catalog | Source payload | `https://www.kaggle.com/api/v1/datasets/list` | Yes |

## Phase Gates

1. Source identity gate: verify that `pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json` is the intended workflow and that this recipe title describes the actual work. Test: `test -f "pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json"` and compare the Source Inventory against the original n8n JSON. Human capacity: [PF], [TO].
2. Source permission gate: approve, replace, or mark `[TO DO]` for every URL, API, RSS feed, local file, and machine-specific path. Test: gate decision recorded in `logs/gate-decisions/`; any embedded credential is redacted and migrated to an env var before live use. Human capacity: [EI].
3. Sample ingest gate: run every ingest node in local/sample handoff mode before live requests. Test: `python3 <ingest-script> --no-write` exits successfully and reports `live_call_performed: false`. Human capacity: [PA], [TO].
4. Data-shape gate: raw outputs parse as JSON and contain the fields needed by cleanup. Test: `python3 -m json.tool <raw-output>` plus human spot check of three records. Human capacity: [PA], [IJ].
5. Cleanup rule gate: GIGO outputs expose record count, rejects, duplicates, missing fields, and required-field assumptions. Test: inspect `data/verified/cybersecurity-breach-and-advisory-dataset-pipeline/`; if critical fields are undefined, add `[TO DO] define required fields` and stop. Human capacity: [IJ].
6. Claim gate: reports must separate source-backed claims from interpretation. Test: every finding cites source/verified records or is marked `[TO DO] needs evidence`. Human capacity: [IJ], [EI].
7. Live-action gate: file exports, dashboards, emails, model calls, API writes, and local machine paths remain local handoff contracts until explicitly approved. Test: output contract says `approved_for_live_action: false` unless signed off. Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: AI plus Human. Script called: none. Input: `pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json`. Output: provenance and title check. Where output goes: `logs/`. Human check: confirm this recipe is named for the work it does and not for a submitter or assignment label.
2. Step name: Read local breach CSV source. Labor: AI with Human gate. Script called: `scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__read-local-breach-csv-source.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
3. Step name: Extract local breach CSV rows. Labor: AI with Human gate. Script called: `scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__extract-local-breach-csv-rows.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
4. Step name: Normalize local breach records. Labor: AI with Human gate. Script called: `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__normalize-local-breach-records.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
5. Step name: Prepare normalized breach JSON. Labor: AI with Human gate. Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-normalized-breach-json.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
6. Step name: Write normalized breach JSON handoff. Labor: AI with Human gate. Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-normalized-breach-json-handoff.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
7. Step name: Fetch CISA cybersecurity advisories. Labor: AI with Human gate. Script called: `scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__fetch-cisa-cybersecurity-advisories.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
8. Step name: Normalize CISA advisory records. Labor: AI with Human gate. Script called: `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__normalize-cisa-advisory-records.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
9. Step name: Prepare normalized CISA advisory JSON. Labor: AI with Human gate. Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-normalized-cisa-advisory-json.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
10. Step name: Write normalized CISA advisory JSON handoff. Labor: AI with Human gate. Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-normalized-cisa-advisory-json-handoff.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
11. Step name: Fetch Kaggle cybersecurity dataset catalog. Labor: AI with Human gate. Script called: `scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__fetch-kaggle-cybersecurity-dataset-catalog.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
12. Step name: Normalize Kaggle cybersecurity catalog records. Labor: AI with Human gate. Script called: `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__normalize-kaggle-cybersecurity-catalog-records.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
13. Step name: Prepare normalized cybersecurity catalog JSON. Labor: AI with Human gate. Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-normalized-cybersecurity-catalog-json.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
14. Step name: Write normalized cybersecurity catalog JSON handoff. Labor: AI with Human gate. Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-normalized-cybersecurity-catalog-json-handoff.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
15. Step name: Deduplicate merged cybersecurity records. Labor: AI with Human gate. Script called: `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__deduplicate-merged-cybersecurity-records.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
16. Step name: Split clean and rejected cybersecurity records. Labor: AI with Human gate. Script called: `scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__split-clean-and-rejected-cybersecurity-records.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
17. Step name: Prepare clean cybersecurity JSON. Labor: AI with Human gate. Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-clean-cybersecurity-json.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
18. Step name: Write clean cybersecurity JSON handoff. Labor: AI with Human gate. Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-clean-cybersecurity-json-handoff.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
19. Step name: Prepare rejected cybersecurity JSON. Labor: AI with Human gate. Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-rejected-cybersecurity-json.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
20. Step name: Write rejected cybersecurity JSON handoff. Labor: AI with Human gate. Script called: `scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-rejected-cybersecurity-json-handoff.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
21. Step name: Produce human report. Labor: AI with Human review. Script called: none; conductor fills `reports/templates/cybersecurity-breach-and-advisory-dataset-pipeline.md`. Input: run log and verified outputs. Output: decision report. Where output goes: `reports/generated/`. Human check: read sources, findings, anomalies, `[TO DO]` gaps, and decisions before treating findings as evidence.

## Human Review Checklist

- Confirm the title and purpose match what the workflow actually does.
- Confirm each source is approved, still reachable, and appropriate for the intended use.
- Replace machine-specific local paths with Madison repo paths or mark `[TO DO] replace source`.
- Replace any credential embedded in the original n8n JSON with an environment variable before live use.
- Inspect at least three raw records and three verified records before accepting a run.
- Review duplicate, rejected, and missing-field counts.
- Confirm the final report separates evidence from interpretation.
- Confirm no live export, API call, file write outside the repo, or credentialed action occurs without approval.

## Output Contract

### Agent output

The agent output goes to `logs/cybersecurity-breach-and-advisory-dataset-pipeline-[DATE].json` and contains `workflow`, `source_json`, `source_inventory`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `handoffs`, `flags`, `todo_items`, `stop_conditions`, and `generated_at`.

### Human report

The human report goes to `reports/generated/cybersecurity-breach-and-advisory-dataset-pipeline-[DATE].md`. It surfaces the source list, cleanup changes, supported claims, `[TO DO]` gaps, and decisions that require a human boss.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TO DO] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TO DO] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Provenance

Original workflow JSON: `pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json`
