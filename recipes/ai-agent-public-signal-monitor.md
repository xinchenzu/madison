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
| Original n8n workflow JSON | JSON | `pantry/Nguyen_Duc_A3_Workflow.json` | Yes |
| HTTP - Hacker News | Source payload | `https://hn.algolia.com/api/v1/search_by_date?query=ai%20agents&tags=story&hitsPerPage=60` | Yes |
| HTTP - DEV Community | Source payload | `https://dev.to/api/articles?tag=ai&per_page=60&top=30` | Yes |
| HTTP - GitHub Search | Source payload | `https://api.github.com/search/repositories?q=ai+agent+in:name,description&sort=updated&order=desc&per_page=60` | Yes |

## Phase Gates

1. Source identity gate: verify that `pantry/Nguyen_Duc_A3_Workflow.json` is the intended workflow and that this recipe title describes the actual work. Test: `test -f "pantry/Nguyen_Duc_A3_Workflow.json"` and compare the Source Inventory against the original n8n JSON. Human capacity: [PF], [TO].
2. Source permission gate: approve, replace, or mark `[TO DO]` for every URL, API, RSS feed, local file, and machine-specific path. Test: gate decision recorded in `logs/gate-decisions/`; any embedded credential is redacted and migrated to an env var before live use. Human capacity: [EI].
3. Sample ingest gate: run every ingest node in local/sample handoff mode before live requests. Test: `python3 <ingest-script> --no-write` exits successfully and reports `live_call_performed: false`. Human capacity: [PA], [TO].
4. Data-shape gate: raw outputs parse as JSON and contain the fields needed by cleanup. Test: `python3 -m json.tool <raw-output>` plus human spot check of three records. Human capacity: [PA], [IJ].
5. Cleanup rule gate: GIGO outputs expose record count, rejects, duplicates, missing fields, and required-field assumptions. Test: inspect `data/verified/ai-agent-public-signal-monitor/`; if critical fields are undefined, add `[TO DO] define required fields` and stop. Human capacity: [IJ].
6. Claim gate: reports must separate source-backed claims from interpretation. Test: every finding cites source/verified records or is marked `[TO DO] needs evidence`. Human capacity: [IJ], [EI].
7. Live-action gate: file exports, dashboards, emails, model calls, API writes, and local machine paths remain local handoff contracts until explicitly approved. Test: output contract says `approved_for_live_action: false` unless signed off. Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: AI plus Human. Script called: none. Input: `pantry/Nguyen_Duc_A3_Workflow.json`. Output: provenance and title check. Where output goes: `logs/`. Human check: confirm this recipe is named for the work it does and not for a submitter or assignment label.
2. Step name: HTTP - Hacker News. Labor: AI with Human gate. Script called: `scripts/ingest/ai-agent-public-signal-monitor__http-hacker-news.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
3. Step name: HTTP - DEV Community. Labor: AI with Human gate. Script called: `scripts/ingest/ai-agent-public-signal-monitor__http-dev-community.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
4. Step name: HTTP - GitHub Search. Labor: AI with Human gate. Script called: `scripts/ingest/ai-agent-public-signal-monitor__http-github-search.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
5. Step name: Normalize - Hacker News. Labor: AI with Human gate. Script called: `scripts/gigo/ai-agent-public-signal-monitor__normalize-hacker-news.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
6. Step name: Normalize - DEV Community. Labor: AI with Human gate. Script called: `scripts/gigo/ai-agent-public-signal-monitor__normalize-dev-community.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
7. Step name: Normalize - GitHub. Labor: AI with Human gate. Script called: `scripts/gigo/ai-agent-public-signal-monitor__normalize-github.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
8. Step name: Clean, Deduplicate, Validate. Labor: AI with Human gate. Script called: `scripts/gigo/ai-agent-public-signal-monitor__clean-deduplicate-validate.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
9. Step name: Convert to CSV. Labor: AI with Human gate. Script called: `scripts/tools/ai-agent-public-signal-monitor__convert-to-csv.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
10. Step name: Write CSV to Downloads. Labor: AI with Human gate. Script called: `scripts/tools/ai-agent-public-signal-monitor__write-csv-to-downloads.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
11. Step name: Produce human report. Labor: AI with Human review. Script called: none; conductor fills `reports/templates/ai-agent-public-signal-monitor.md`. Input: run log and verified outputs. Output: decision report. Where output goes: `reports/generated/`. Human check: read sources, findings, anomalies, `[TO DO]` gaps, and decisions before treating findings as evidence.

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

The agent output goes to `logs/ai-agent-public-signal-monitor-[DATE].json` and contains `workflow`, `source_json`, `source_inventory`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `handoffs`, `flags`, `todo_items`, `stop_conditions`, and `generated_at`.

### Human report

The human report goes to `reports/generated/ai-agent-public-signal-monitor-[DATE].md`. It surfaces the source list, cleanup changes, supported claims, `[TO DO]` gaps, and decisions that require a human boss.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/Nguyen_Duc_A3_Workflow.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TO DO] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TO DO] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Provenance

Original workflow JSON: `pantry/Nguyen_Duc_A3_Workflow.json`
