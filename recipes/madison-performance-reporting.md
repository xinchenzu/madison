# Madison Performance Reporting

## Purpose

Generates post-launch performance reporting after a campaign has been live for a defined window. The Analytics - Insights Studio Agent queries cross-channel performance data and produces comparative trend breakdowns.

This is Phase 9 of the draft Madison branding marketing pipeline.

## Node Classification

| Node Name | Node Type | Classification | Snickerdoodle |
|---|---|---|---|
| Performance Report | `insights-studio-agent` | tool | Needs script: `scripts/tools/madison-tool-performance-report.py`; outputs markdown report and JSON log. |

## Inputs

| Input | Type | Source | Required? | Human Check |
|---|---|---|---|---|
| Launch approval | JSON | `logs/gate-G5-launch.json` | Yes | Confirm campaign was approved for launch. |
| Campaign ID | String | `[TO DO] campaign tracking source` | Yes | Confirm the ID maps to the correct launched campaign. |
| Reporting window | Date range | `[TO DO] define window` | Yes | Confirm campaign has been live long enough for meaningful reporting. |
| Insights Studio data | Query result | Madison Insights Studio | Yes | Confirm query is read-only and authorized. |

## Reporting Limitation

Madison does not measure downstream real-world performance for propensity scores. It provides internal AUC validation only and no closed-loop outcome tracking. Every performance report must note this gap explicitly.

## Phase Gates

1. Launch gate: Gate G5 must exist before post-launch reporting. Human capacity: [PF].
2. Reporting-window gate: run manually after a defined campaign-live window. Human capacity: [TO].
3. Read-only gate: Insights Studio query must not mutate campaign state. Human capacity: [EI].
4. Limitation gate: report must disclose the propensity-score closed-loop tracking gap. Human capacity: [IJ].

## Steps

1. Step name: Verify launch record. Labor: AI plus Human. Script called: none. Input: `logs/gate-G5-launch.json` and campaign ID. Output: reporting readiness check. Where output goes: `logs/`.
2. Step name: Generate performance report. Labor: AI with Human review. Script called: `scripts/tools/madison-tool-performance-report.py`. Input: campaign ID, reporting window, Insights Studio data. Output: markdown report and JSON log. Where output goes: `reports/generated/` and `logs/`.

## Outputs

`reports/generated/madison-performance-report-[timestamp].md`

`logs/madison-performance-log-[timestamp].json`

## Stop Conditions

- Stop if campaign ID is missing or ambiguous.
- Stop if reporting window is undefined.
- Stop if Insights Studio access is not approved.
- Stop if report omits the limitation about propensity-score outcome tracking.
- Stop if the tool attempts to mutate campaign state.

## [TO DO] Items Before Production

- [TO DO] Define post-launch reporting window.
- [TO DO] Define campaign ID source.
- [TO DO] Define Insights Studio query schema.
- [TO DO] Define required trend breakdown fields.
