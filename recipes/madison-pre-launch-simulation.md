# Madison Pre-Launch Simulation

## Purpose

Runs a read-only pre-launch forecast for the approved campaign before budget commitment. The Simulator, using the Athena Agentic App, models expected outcomes such as open rate, CTR, conversion, and revenue.

This is Phase 7 of the draft Madison branding marketing pipeline.

## Node Classification

| Node Name | Node Type | Classification | Snickerdoodle |
|---|---|---|---|
| Simulator Forecast | `athena-simulator` | tool | Needs script: `scripts/tools/madison-tool-simulator-forecast.py`; writes local handoff JSON and markdown report only. |

## Inputs

| Input | Type | Source | Required? | Human Check |
|---|---|---|---|---|
| QA gate | JSON | `logs/gate-G4-qa.json` | Yes | Confirm QA passed with no blockers. |
| Campaign package | JSON/files | Verified campaign, copy, and QA outputs | Yes | Confirm package is the approved pre-launch version. |
| Propensity score metadata | JSON | Madison score metadata | No | Confirm score refresh date if available. |

## Tool Constraints

This recipe is read-only and makes no external activation calls. It writes forecast outputs to local handoff files only. It does not commit budget, activate a campaign, update audiences, or write to production systems.

## Simulation Note

Simulation draws on propensity scores that refresh monthly. If scores are more than 30 days old, the script logs a staleness warning. Simulation results are directional, not precise.

## Phase Gates

1. QA gate: Gate G4 must be approved before simulation. Human capacity: [PF].
2. Read-only gate: simulator script must not activate or mutate campaigns. Human capacity: [EI].
3. Score-staleness gate: log score age; warn if older than 30 days. Human capacity: [TO].

## Steps

1. Step name: Verify QA approval. Labor: AI. Script called: none. Input: `logs/gate-G4-qa.json`. Output: gate readiness check. Where output goes: `logs/`.
2. Step name: Run simulator forecast. Labor: AI with Human gate. Script called: `scripts/tools/madison-tool-simulator-forecast.py`. Input: approved campaign package. Output: forecast JSON and markdown report. Where output goes: `logs/` and `reports/generated/`.

## Outputs

`logs/madison-simulator-forecast-[timestamp].json`

`reports/generated/madison-prelaunch-forecast-[timestamp].md`

## Stop Conditions

- Stop if Gate G4 is missing or not approved.
- Stop if the simulator tool attempts live activation, budget commitment, or production mutation.
- Stop if score age is unknown in production without `[TO DO] confirm score refresh date`.

## [TO DO] Items Before Production

- [TO DO] Define simulator input schema.
- [TO DO] Define forecast metrics and confidence language.
- [TO DO] Define score metadata source.
