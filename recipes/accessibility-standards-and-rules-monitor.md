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
| Original n8n workflow JSON | JSON | `pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json` | Yes |
| W3C WCAG JSON - Success Criteria | Source payload | `https://www.w3.org/WAI/WCAG21/wcag.json` | Yes |
| RSS - WebAIM Blog | Source payload | `https://webaim.org/blog/feed/` | Yes |
| RSS - A11y Project | Source payload | `https://www.a11yproject.com/feed/feed.xml` | Yes |

## Phase Gates

1. Source identity gate: verify that `pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json` is the intended workflow and that this recipe title describes the actual work. Test: `test -f "pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json"` and compare the Source Inventory against the original n8n JSON. Human capacity: [PF], [TO].
2. Source permission gate: approve, replace, or mark `[TO DO]` for every URL, API, RSS feed, local file, and machine-specific path. Test: gate decision recorded in `logs/gate-decisions/`; any embedded credential is redacted and migrated to an env var before live use. Human capacity: [EI].
3. Sample ingest gate: run every ingest node in local/sample handoff mode before live requests. Test: `python3 <ingest-script> --no-write` exits successfully and reports `live_call_performed: false`. Human capacity: [PA], [TO].
4. Data-shape gate: raw outputs parse as JSON and contain the fields needed by cleanup. Test: `python3 -m json.tool <raw-output>` plus human spot check of three records. Human capacity: [PA], [IJ].
5. Cleanup rule gate: GIGO outputs expose record count, rejects, duplicates, missing fields, and required-field assumptions. Test: inspect `data/verified/accessibility-standards-and-rules-monitor/`; if critical fields are undefined, add `[TO DO] define required fields` and stop. Human capacity: [IJ].
6. Claim gate: reports must separate source-backed claims from interpretation. Test: every finding cites source/verified records or is marked `[TO DO] needs evidence`. Human capacity: [IJ], [EI].
7. Live-action gate: file exports, dashboards, emails, model calls, API writes, and local machine paths remain local handoff contracts until explicitly approved. Test: output contract says `approved_for_live_action: false` unless signed off. Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: AI plus Human. Script called: none. Input: `pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json`. Output: provenance and title check. Where output goes: `logs/`. Human check: confirm this recipe is named for the work it does and not for a submitter or assignment label.
2. Step name: GitHub API - Axe-core Rules. Labor: AI with Human gate. Script called: `scripts/gigo/accessibility-standards-and-rules-monitor__github-api-axe-core-rules.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
3. Step name: W3C WCAG JSON - Success Criteria. Labor: AI with Human gate. Script called: `scripts/ingest/accessibility-standards-and-rules-monitor__w3c-wcag-json-success-criteria.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
4. Step name: RSS - WebAIM Blog. Labor: AI with Human gate. Script called: `scripts/ingest/accessibility-standards-and-rules-monitor__rss-webaim-blog.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
5. Step name: RSS - A11y Project. Labor: AI with Human gate. Script called: `scripts/ingest/accessibility-standards-and-rules-monitor__rss-a11y-project.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
6. Step name: Merge + Normalize + Deduplicate. Labor: AI with Human gate. Script called: `scripts/gigo/accessibility-standards-and-rules-monitor__merge-normalize-deduplicate.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
7. Step name: Save to CSV. Labor: AI with Human gate. Script called: `scripts/tools/accessibility-standards-and-rules-monitor__save-to-csv.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
8. Step name: Write Error Log. Labor: AI with Human gate. Script called: `scripts/gigo/accessibility-standards-and-rules-monitor__write-error-log.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
9. Step name: Produce human report. Labor: AI with Human review. Script called: none; conductor fills `reports/templates/accessibility-standards-and-rules-monitor.md`. Input: run log and verified outputs. Output: decision report. Where output goes: `reports/generated/`. Human check: read sources, findings, anomalies, `[TO DO]` gaps, and decisions before treating findings as evidence.

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

The agent output goes to `logs/accessibility-standards-and-rules-monitor-[DATE].json` and contains `workflow`, `source_json`, `source_inventory`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `handoffs`, `flags`, `todo_items`, `stop_conditions`, and `generated_at`.

### Human report

The human report goes to `reports/generated/accessibility-standards-and-rules-monitor-[DATE].md`. It surfaces the source list, cleanup changes, supported claims, `[TO DO]` gaps, and decisions that require a human boss.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TO DO] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TO DO] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Provenance

Original workflow JSON: `pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json`
