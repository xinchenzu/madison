# Accessibility Standards And Rules Monitor

## Purpose

Collects axe-core rule metadata, W3C WCAG criteria, WebAIM posts, and A11y Project posts into a deduplicated accessibility monitoring dataset. The business question is: what signals from these specific sources are reliable enough for a human boss to use in accessibility intelligence decisions?

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| W3C WCAG JSON - Success Criteria | `n8n-nodes-base.httpRequest` | `https://www.w3.org/WAI/WCAG21/wcag.json` | Confirm source is allowed, current, and rate-safe before live fetch. |
| RSS - WebAIM Blog | `n8n-nodes-base.rssFeedRead` | `https://webaim.org/blog/feed/` | Confirm source is allowed, current, and rate-safe before live fetch. |
| RSS - A11y Project | `n8n-nodes-base.rssFeedRead` | `https://www.a11yproject.com/feed/feed.xml` | Confirm source is allowed, current, and rate-safe before live fetch. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| Manual Trigger | `n8n-nodes-base.manualTrigger` | conductor |
| GitHub API - Axe-core Rules | `n8n-nodes-base.code` | gigo |
| W3C WCAG JSON - Success Criteria | `n8n-nodes-base.httpRequest` | ingest |
| RSS - WebAIM Blog | `n8n-nodes-base.rssFeedRead` | ingest |
| RSS - A11y Project | `n8n-nodes-base.rssFeedRead` | ingest |
| Merge + Normalize + Deduplicate | `n8n-nodes-base.code` | gigo |
| Quality Gate - Min 50 Records | `n8n-nodes-base.if` | conductor |
| Save to CSV | `n8n-nodes-base.spreadsheetFile` | tool |
| Write Error Log | `n8n-nodes-base.set` | gigo |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | [TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json | Yes |
| W3C WCAG JSON - Success Criteria | Source payload | `https://www.w3.org/WAI/WCAG21/wcag.json` | Yes |
| RSS - WebAIM Blog | Source payload | `https://webaim.org/blog/feed/` | Yes |
| RSS - A11y Project | Source payload | `https://www.a11yproject.com/feed/feed.xml` | Yes |

## Phase Gates

1. Source identity gate: Original workflow JSON exists and is the intended source. Test: `test -f "pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json"`; if this fails, close [TODO: DATA SOURCE] by restoring or moving the workflow JSON before live mode.
   Human capacity: [PF].
2. Input readiness gate: Every required input in this recipe exists or is marked with a typed TODO. Test: `rg -n "TODO:" recipes/accessibility-standards-and-rules-monitor.md`.
   Human capacity: [PA].
3. Sample run gate: Ingest and tool steps run without live side effects before live mode. Test: `snickerdoodle run accessibility-standards-and-rules-monitor --mode dialogic --sample`.
   Human capacity: [TO].
4. Data-shape gate: Raw and verified outputs parse as JSON where applicable. Test: `find data/raw/accessibility-standards-and-rules-monitor data/verified/accessibility-standards-and-rules-monitor -name "*.json" -print -exec python3 -m json.tool {} \;`.
   Human capacity: [IJ].
5. Report contract gate: Human report defines reader, decision enabled, and sections. Test: `rg -n "Reader:|Decision enabled:|Sections:" recipes/accessibility-standards-and-rules-monitor.md`.
   Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: Human.
   Human action: Record approval, rejection, or requested changes with supervisory capacity label [TODO: DEFINE].
   Input: pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json.
   Output: provenance fields: workflow_path, exists, parsed_ok, title_matches_pipeline, source_inventory_checked.
   Where output goes: logs/gate-decisions/.
2. Step name: GitHub API - Axe-core Rules. Labor: AI with Human gate.
   Script called: `scripts/gigo/accessibility-standards-and-rules-monitor__github-api-axe-core-rules.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
3. Step name: W3C WCAG JSON - Success Criteria. Labor: AI with Human gate.
   Script called: `scripts/ingest/accessibility-standards-and-rules-monitor__w3c-wcag-json-success-criteria.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
4. Step name: RSS - WebAIM Blog. Labor: AI with Human gate.
   Script called: `scripts/ingest/accessibility-standards-and-rules-monitor__rss-webaim-blog.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
5. Step name: RSS - A11y Project. Labor: AI with Human gate.
   Script called: `scripts/ingest/accessibility-standards-and-rules-monitor__rss-a11y-project.py`
   Input: approved upstream output or sample fixture.
   Output: raw JSON fields: source_name, source_url_or_path, fetched_at, record_count, records, errors.
   Where output goes: data/raw/.
6. Step name: Merge + Normalize + Deduplicate. Labor: AI with Human gate.
   Script called: `scripts/gigo/accessibility-standards-and-rules-monitor__merge-normalize-deduplicate.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
7. Step name: Save to CSV. Labor: AI with Human gate.
   Script called: `scripts/tools/accessibility-standards-and-rules-monitor__save-to-csv.py`
   Input: approved upstream output or sample fixture.
   Output: local handoff JSON fields: action, approved_for_live_action:false, input_refs, output_refs, flags.
   Where output goes: logs/.
8. Step name: Write Error Log. Labor: AI with Human gate.
   Script called: `scripts/gigo/accessibility-standards-and-rules-monitor__write-error-log.py`
   Input: approved upstream output or sample fixture.
   Output: verified JSON fields: record_count, records, rejects, duplicates, missing_fields, validation_flags.
   Where output goes: data/verified/.
9. Step name: Produce human report. Labor: AI with Human review.
   Script called: `scripts/tools/accessibility-standards-and-rules-monitor__produce-human-report.py`
   Input: agent log plus raw and verified outputs.
   Output: markdown report sections: run summary, source inventory, inputs used, validation results, flags, typed TODOs, decision recommendation.
   Where output goes: reports/generated/.

## Output Contract

### Agent output
File: `logs/accessibility-standards-and-rules-monitor-[DATE].json`
Fields: `workflow`, `run_id`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `flags`, `stop_conditions`, `todo_items`, `source_files`, `gate_decisions`, `generated_at`.

### Human report
File: `reports/generated/accessibility-standards-and-rules-monitor-[DATE].md`
Reader: domain lead or human boss responsible for accepting the `Accessibility Standards And Rules Monitor` run.
Decision enabled: approve the run for the next phase, request source/schema fixes, or block live execution.
Sections: Run summary, source inventory, inputs used, steps completed, records seen, rejects, duplicates, flags, typed TODOs, gate decisions, evidence-backed findings, decision recommendation.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TODO: APPROVE] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TODO: DEFINE] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run accessibility-standards-and-rules-monitor --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run accessibility-standards-and-rules-monitor --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| GitHub API - Axe-core Rules | `snickerdoodle run accessibility-standards-and-rules-monitor --step github-api-axe-core-rules` |  |
| W3C WCAG JSON - Success Criteria | `snickerdoodle run accessibility-standards-and-rules-monitor --step w3c-wcag-json-success-criteria` | `--sample` |
| RSS - WebAIM Blog | `snickerdoodle run accessibility-standards-and-rules-monitor --step rss-webaim-blog` | `--sample` |
| RSS - A11y Project | `snickerdoodle run accessibility-standards-and-rules-monitor --step rss-a11y-project` | `--sample` |
| Merge + Normalize + Deduplicate | `snickerdoodle run accessibility-standards-and-rules-monitor --step merge-normalize-deduplicate` |  |
| Save to CSV | `snickerdoodle run accessibility-standards-and-rules-monitor --step save-to-csv` | `--no-write` |
| Write Error Log | `snickerdoodle run accessibility-standards-and-rules-monitor --step write-error-log` |  |
| Produce human report | `snickerdoodle run accessibility-standards-and-rules-monitor --step produce-human-report` | `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate 1 - source/input readiness | `snickerdoodle gate accessibility-standards-and-rules-monitor --gate 1 --decision approve --note "..."` |
| Gate 2 - sample run | `snickerdoodle gate accessibility-standards-and-rules-monitor --gate 2 --decision approve --note "..."` |
| Gate 3 - report contract | `snickerdoodle gate accessibility-standards-and-rules-monitor --gate 3 --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| GitHub API - Axe-core Rules | `scripts/gigo/accessibility-standards-and-rules-monitor__github-api-axe-core-rules.py` | gigo |
| W3C WCAG JSON - Success Criteria | `scripts/ingest/accessibility-standards-and-rules-monitor__w3c-wcag-json-success-criteria.py` | ingest |
| RSS - WebAIM Blog | `scripts/ingest/accessibility-standards-and-rules-monitor__rss-webaim-blog.py` | ingest |
| RSS - A11y Project | `scripts/ingest/accessibility-standards-and-rules-monitor__rss-a11y-project.py` | ingest |
| Merge + Normalize + Deduplicate | `scripts/gigo/accessibility-standards-and-rules-monitor__merge-normalize-deduplicate.py` | gigo |
| Save to CSV | `scripts/tools/accessibility-standards-and-rules-monitor__save-to-csv.py` | tool |
| Write Error Log | `scripts/gigo/accessibility-standards-and-rules-monitor__write-error-log.py` | gigo |
| Produce human report | `scripts/tools/accessibility-standards-and-rules-monitor__produce-human-report.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/accessibility-standards-and-rules-monitor/` | JSON |
| Verified data | `data/verified/accessibility-standards-and-rules-monitor/` | JSON |
| Agent log | `logs/accessibility-standards-and-rules-monitor-[DATE].json` | JSON |
| Human report | `reports/generated/accessibility-standards-and-rules-monitor-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance

Original workflow JSON: `[TODO: DATA SOURCE] Restore or move original workflow JSON to a repo-local path. Last documented path: pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json`
