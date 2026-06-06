# Madison Launch Handoff

## Purpose

Assembles the complete launch package for human review. This recipe creates a launch-ready handoff JSON but never activates the campaign.

This is Phase 8 of the draft Madison branding marketing pipeline.

## Node Classification

| Node Name | Node Type | Classification | Snickerdoodle |
|---|---|---|---|
| Launch Handoff | `launch-package-builder` | tool | Needs script: `scripts/tools/madison-tool-launch-handoff.py`; output local handoff JSON: `logs/madison-launch-package-[timestamp].json`. |
| Gate G5 Launch Approval | `human-review` | conductor | Needs approval file: `logs/gate-G5-launch.json`; only a human operator may trigger activation after approval. |

## Inputs

| Input | Type | Source | Required? | Human Check |
|---|---|---|---|---|
| Verified audience | JSON | `data/verified/madison-branding-marketing-pipeline/audience-verified.json` | Yes | Confirm Gate G1 passed. |
| Campaign structure | JSON | `data/verified/madison-branding-marketing-pipeline/campaign-structure-verified.json` | Yes | Confirm Gate G3 passed. |
| Copy variants | JSON/files | `copy-variants-verified.json` and email templates | Yes | Confirm copy is approved for launch package. |
| QA report | JSON/markdown | QA outputs | Yes | Confirm Gate G4 passed with no blockers. |
| Forecast | JSON/markdown | Simulator outputs | No | Confirm forecast is directional only. |

## Tool Constraints

This script does not activate the campaign. Activation requires explicit human action in the ZMP UI or a separate authorized script. This script never activates autonomously.

## Phase Gates

1. Package completeness gate: verified audience, campaign structure, copy variants, QA report, and forecast status must be included. Human capacity: [PA].
2. Activation safety gate: output contract must say `activates_campaign: false`. Human capacity: [EI].
3. Gate G5: human reviews full launch package and signs `logs/gate-G5-launch.json`. Human capacity: [PF].

## Steps

1. Step name: Assemble launch package. Labor: AI with Human gate. Script called: `scripts/tools/madison-tool-launch-handoff.py`. Input: verified audience, campaign structure, copy variants, QA report, forecast. Output: launch package JSON. Where output goes: `logs/madison-launch-package-[timestamp].json`.
2. Step name: Gate G5 launch approval. Labor: Human. Script called: none. Input: launch package JSON. Output: approval decision. Where output goes: `logs/gate-G5-launch.json`.

## Outputs

`logs/gate-G5-launch.json`

`logs/madison-launch-package-[timestamp].json`

## Stop Conditions

- Stop if required launch package components are missing.
- Stop if QA has open FAIL items.
- Stop if the handoff script attempts campaign activation.
- Stop if Gate G5 is not approved.

## [TO DO] Items Before Production

- [TO DO] Define launch package schema.
- [TO DO] Define required human signoff fields for `gate-G5-launch.json`.
- [TO DO] Define separate authorized activation procedure.
