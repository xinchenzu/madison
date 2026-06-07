# Hammad Rana - Sentinel GRC Ops Cybersecurity Advisory Briefing

## Purpose

Hammad Rana built Sentinel GRC Ops, a Madison-pattern multi-agent assistant for governance, risk, and compliance. Assignment 3 created a 467-record data layer from historical breach data, Kaggle cybersecurity dataset discovery, and CISA advisories, producing 465 clean records and 2 rejects. Assignment 4 focused on live CISA advisories, using Groq AI to map each advisory to ISO 27001 / SOC 2 / GDPR-style controls and generate a browser-readable GRC briefing.

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Information is Beautiful breach catalog | Local CSV / historical breach data | [TODO: DATA SOURCE] Confirm source URL/path for Information is Beautiful breach catalog. | Verify source license, sensitivity mapping, and no arbitrary downsampling. |
| Kaggle cybersecurity dataset catalog API | Authenticated/public API pattern | [TODO: DATA SOURCE] Confirm source URL/path for Kaggle cybersecurity dataset catalog API. | Credential/auth boundary must be approved; verify dataset relevance. |
| CISA Cybersecurity Advisories RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for CISA Cybersecurity Advisories RSS. | Verify CISA URL, dates, vendors, severity, CVE/KEV fields. |
| Groq llama-3.1-8b-instant | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Groq llama-3.1-8b-instant. | Approve API key, prompt, control catalog, retry behavior. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| Original workflow node map | [TODO: DEV] Parse original n8n JSON. | [TODO: DEFINE] Classify parsed nodes as ingest, gigo, tool, conductor, or report. |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json | Yes |
| Information is Beautiful breach catalog | Local CSV / historical breach data | [TODO: DATA SOURCE] Confirm source URL/path for Information is Beautiful breach catalog. | Yes |
| Kaggle cybersecurity dataset catalog API | Authenticated/public API pattern | [TODO: DATA SOURCE] Confirm source URL/path for Kaggle cybersecurity dataset catalog API. | Yes |
| CISA Cybersecurity Advisories RSS | Public RSS | [TODO: DATA SOURCE] Confirm source URL/path for CISA Cybersecurity Advisories RSS. | Yes |
| Groq llama-3.1-8b-instant | AI service | [TODO: DATA SOURCE] Confirm source URL/path for Groq llama-3.1-8b-instant. | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json"`.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/students/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing data/verified/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing__map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Hammad Rana - Sentinel GRC Ops Cybersecurity Advisory Briefing` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- AI returns invalid JSON without fallback.
- Control mapping appears unsupported or fabricated.
- CISA feed date/source cannot be verified.
- Kaggle/API credential handling is unclear.
- Report implies compliance certification.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| Map workflow or specification to scripts | `snickerdoodle run hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --step map-workflow-or-specification-to-scripts` |  |
| Produce human report | `snickerdoodle run hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Map workflow or specification to scripts | `scripts/gigo/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing__map-workflow-or-specification-to-scripts.py` | gigo |
| Produce human report | `scripts/tools/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing/` | JSON |
| Verified data | `data/verified/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing/` | JSON |
| Agent log | `logs/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-[DATE].json` | JSON |
| Human report | `reports/generated/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json`
