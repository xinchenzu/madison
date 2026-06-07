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

1. Source gate: All required source paths are present or explicitly marked with a typed TODO. Test: `test -f "recipes/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing.md" && rg -n "\[TODO: DEFINE]" "recipes/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing.md" || true`. Human capacity: [TO].
2. Scope gate: The run declares `sample` mode or an approved live mode before ingest begins. Test: `python3 -m json.tool data/raw/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing/run-envelope.json`. Human capacity: [PF].
3. Data-shape gate: Every raw and verified JSON output parses before downstream scripts run. Test: `find data/raw/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing data/verified/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing -name "*.json" -print -exec python3 -m json.tool {} \;`. Human capacity: [PA].
4. Script-readiness gate: Every step script exists or is represented by a typed development TODO. Test: `test -f scripts/ingest/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-ingest-inputs.py || rg --fixed-strings "[TODO: DEV]" "recipes/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing.md"`. Human capacity: [IJ].
5. Approval gate: Live network calls, external writes, credentials, production databases, emails, dashboards, publishing, or model calls with sensitive data require an approval record. Test: `test -f logs/gate-decisions/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-approval.json || rg --fixed-strings "[TODO: APPROVE]" "recipes/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing.md"`. Human capacity: [EI].
6. Report gate: Agent log and human report are written with the required fields and sections. Test: `test -f logs/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-[DATE].json && test -f reports/generated/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-[DATE].md`. Human capacity: [TO].

## Steps

1. Step name: Verify provenance. Labor: AI with Human gate.
   Script called: `scripts/tools/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-verify-provenance.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing`.
   Output: workflow, source_paths, exists, parsed_ok, approval_state, checked_at.
   Where output goes: `logs/`
2. Step name: Ingest declared inputs. Labor: AI with Human gate.
   Script called: `scripts/ingest/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-ingest-inputs.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing`.
   Output: records, source_name, source_type, fetched_at, sample_mode, rejects.
   Where output goes: `data/raw/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing/`
3. Step name: Validate data shape. Labor: AI with Human gate.
   Script called: `scripts/gigo/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-validate-data-shape.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing`.
   Output: record_count, required_fields_present, missing_fields, parse_errors, schema_version.
   Where output goes: `data/verified/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing/`
4. Step name: Transform and quality check. Labor: AI with Human gate.
   Script called: `scripts/gigo/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-transform-quality-check.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing`.
   Output: verified_records, record_count, duplicates, rejects, flags, quality_notes.
   Where output goes: `data/verified/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing/`
5. Step name: Run approved tools. Labor: AI with Human gate.
   Script called: `scripts/tools/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-run-approved-tools.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing`.
   Output: tool_name, input_path, output_path, action_taken, approval_id, no_write_mode.
   Where output goes: `logs/`
6. Step name: Produce human report. Labor: AI with Human gate.
   Script called: `scripts/tools/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-produce-human-report.py` [TODO: DEV] Define input schema, output schema, transformation logic, and error handling for this script before implementation.
   Input: declared recipe inputs, prior step outputs, and gate decisions for `hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing`.
   Output: summary, sources_checked, gate_results, findings, typed_todos, next_decision.
   Where output goes: `reports/generated/`

## Output Contract

### Agent output
File: `logs/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-[DATE].json`
Fields: workflow, run_id, mode, steps_completed, records_seen, rejects, duplicates, flags, stop_conditions, todo_items, source_files, gate_decisions, generated_at, raw_output_paths, verified_output_paths, report_path.

### Human report
File: `reports/generated/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Hammad Rana - Sentinel GRC Ops Cybersecurity Advisory Briefing` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: run summary, purpose, source inventory, inputs used, phase-gate results, steps completed, records seen, rejects, duplicates, flags, typed TODOs, human approvals, verified findings, inferred findings, decision recommendation.

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
| Verify provenance | `snickerdoodle run hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --step verify-provenance` | `--sample` `--no-write` |
| Ingest declared inputs | `snickerdoodle run hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --step ingest-inputs` | `--sample` |
| Validate data shape | `snickerdoodle run hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --step validate-data-shape` | `--sample` |
| Transform and quality check | `snickerdoodle run hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --step transform-quality-check` | `--sample` |
| Run approved tools | `snickerdoodle run hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --step run-approved-tools` | `--sample` `--no-write` |
| Produce human report | `snickerdoodle run hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --step produce-human-report` | `--sample` `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - Source gate | `snickerdoodle gate hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --gate 1 --decision approve --note "Sources checked"` |
| Gate 2 - Scope gate | `snickerdoodle gate hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --gate 2 --decision approve --note "Scope and mode approved"` |
| Gate 3 - Data-shape gate | `snickerdoodle gate hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --gate 3 --decision approve --note "Outputs parse"` |
| Gate 4 - Script-readiness gate | `snickerdoodle gate hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --gate 4 --decision approve --note "Scripts ready or TODO DEV accepted"` |
| Gate 5 - Approval gate | `snickerdoodle gate hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --gate 5 --decision approve --note "Live or sensitive actions approved"` |
| Gate 6 - Report gate | `snickerdoodle gate hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --gate 6 --decision approve --note "Report and log complete"` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| Verify provenance | `scripts/tools/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-verify-provenance.py` | tools |
| Ingest declared inputs | `scripts/ingest/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-ingest-inputs.py` | ingest |
| Validate data shape | `scripts/gigo/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-validate-data-shape.py` | gigo |
| Transform and quality check | `scripts/gigo/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-transform-quality-check.py` | gigo |
| Run approved tools | `scripts/tools/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-run-approved-tools.py` | tools |
| Produce human report | `scripts/tools/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-produce-human-report.py` | tools |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing/` | JSON |
| Verified data | `data/verified/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing/` | JSON |
| Agent log | `logs/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-[DATE].json` | JSON |
| Human report | `reports/generated/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

| Source | Verification command | Notes |
|---|---|---|
| `recipes/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing.md` | `test -f "recipes/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing.md"` | Current recipe file used as spec-first provenance. |

## Existing Recipe Notes Preserved For Implementation

### Extracted Notes

Hammad Rana built Sentinel GRC Ops, a Madison-pattern multi-agent assistant for governance, risk, and compliance. Assignment 3 created a 467-record data layer from historical breach data, Kaggle cybersecurity dataset discovery, and CISA advisories, producing 465 clean records and 2 rejects. Assignment 4 focused on live CISA advisories, using Groq AI to map each advisory to ISO 27001 / SOC 2 / GDPR-style controls and generate a browser-readable GRC briefing.

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json"`.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing data/verified/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing.md`.
   Human capacity: [EI].

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: Map workflow or specification to scripts. Labor: AI with Human gate.
   Script called: `scripts/gigo/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-map-workflow-or-specification-to-scripts.py`
   Input: recipe inputs and provenance evidence.
   Output: implementation map fields: steps, script_paths, missing_specs, typed_todos.
   Where output goes: data/verified/.
3. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/hammad-rana-sentinel-grc-ops-cybersecurity-advisory-briefing-produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.
