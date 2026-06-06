# Madison Audience Definition

## Purpose

Defines and validates the campaign audience from `brief.json`. The Audience Builder Agent translates the natural-language audience description into executable Boolean logic and behavioral criteria for Madison ZMP, while GIGO checks segment size, suppression overlap, and geography/propensity-score fit.

This is a draft recipe and will be expanded later.

## Node Classification

| Node Name | Node Type | Classification | Snickerdoodle |
|---|---|---|---|
| Ingest Audience Explorer | `madison-data-cloud-query` | ingest | Needs script: `scripts/ingest/madison-ingest-audience-explorer.py`; output JSON: `data/raw/madison-branding-marketing-pipeline/audience-raw.json`. |
| Audience Validation | `audience-builder-agent` | gigo | Needs script: `scripts/gigo/madison-gigo-audience-validation.py`; output JSON: `data/verified/madison-branding-marketing-pipeline/audience-verified.json`. |
| Gate G1 Review | `human-review` | conductor | Needs gate log: `logs/gate-G1-audience.json`; human approves audience definition and size before persona generation. |

## Inputs

| Input | Type | Source | Required? | Human Check |
|---|---|---|---|---|
| Client brief | JSON | `data/raw/madison-branding-marketing-pipeline/brief.json` | Yes | Confirm objective, audience description, channels, suppressions, and geography are correct. |
| Madison Data Cloud propensity scores | Query result | Madison Data Cloud | Yes | Confirm scores are appropriate for this client and geography. |
| SuperGraph profiles | Query result | Madison SuperGraph | Yes | Confirm query is read-only and uses approved brief parameters. |
| Suppression rules | JSON array | `brief.json` | No | Confirm opt-outs and exclusions are carried through exactly. |

## AI Role

The Audience Builder Agent converts the brief's natural-language audience description into Boolean logic and behavioral criteria executable in Madison ZMP.

The AI does not use client first-party data for propensity scoring. Madison retail scores are trained on Madison Data Cloud only, and this limitation must be written into the run log.

## Validation Rules

- Reject if verified segment size is below 1,000 profiles.
- Check suppression list overlap and log overlap count.
- Flag if retail-specific U.S. propensity scores are used for a non-U.S. client.
- Flag criteria that are too broad, too narrow, or not traceable to `brief.json`.

## Phase Gates

1. Source gate: `brief.json` must exist and parse as JSON. Human capacity: [PA].
2. Propensity-score gate: log whether scores are Madison Data Cloud scores, client first-party scores, or unavailable. Human capacity: [EI].
3. Segment-size gate: stop if segment size is below 1,000 profiles. Human capacity: [TO].
4. Suppression gate: human reviews suppression overlap and may edit suppressions or tighten criteria. Human capacity: [IJ].
5. Gate G1: pause after `audience-verified.json`; human approves audience definition and size before persona generation. Human capacity: [PF].

## Steps

1. Step name: Load brief. Labor: AI. Script called: none. Input: `data/raw/madison-branding-marketing-pipeline/brief.json`. Output: brief readiness check. Where output goes: `logs/`.
2. Step name: Query audience explorer. Labor: AI with Human gate. Script called: `scripts/ingest/madison-ingest-audience-explorer.py`. Input: approved brief parameters. Output: `audience-raw.json`. Where output goes: `data/raw/madison-branding-marketing-pipeline/`.
3. Step name: Validate audience. Labor: AI with Human gate. Script called: `scripts/gigo/madison-gigo-audience-validation.py`. Input: `audience-raw.json`, `brief.json`, suppression rules. Output: `audience-verified.json`. Where output goes: `data/verified/madison-branding-marketing-pipeline/`.
4. Step name: Gate G1 review. Labor: Human. Script called: none. Input: `audience-verified.json`. Output: gate decision. Where output goes: `logs/gate-G1-audience.json`.

## Output Contract

`data/raw/madison-branding-marketing-pipeline/audience-raw.json` contains raw segment query results.

`data/verified/madison-branding-marketing-pipeline/audience-verified.json` contains the cleaned segment definition, segment size, criteria, suppression results, geography flags, and score provenance.

## Stop Conditions

- Stop if `brief.json` is missing or invalid.
- Stop if audience description is missing.
- Stop if verified segment size is below 1,000 profiles.
- Stop if suppression rules cannot be applied.
- Stop if U.S.-only retail scores are being treated as valid for a non-U.S. client without human approval.
- Stop if Gate G1 is not approved.

## [TO DO] Items Before Production

- [TO DO] Define the exact Madison Data Cloud query contract.
- [TO DO] Define `audience-verified.json` schema.
- [TO DO] Add gate log template for `logs/gate-G1-audience.json`.
