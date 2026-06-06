# Cybersecurity Breach And Advisory Dataset Pipeline - Conductor Flow

## Mode

Dialogic (default). Silent mode is not available until this flow is in `conductor/verified/`.

## Entry Point

Triggered when a human asks to test or run the `Cybersecurity Breach And Advisory Dataset Pipeline` recipe using local Madison data, sample handoffs, or explicitly approved live sources.

## Flow Steps

### Step 1 - Confirm Workflow Intent

- Labor: Human
- Depends on: none
- Human task: Read the recipe title, purpose, Source Inventory, and Node Classification; confirm this is what the workflow does.
- Handoff condition: `logs/gate-decisions/` records that the workflow title and source list are accepted, or lists `[TO DO]` corrections.
- On failure: Stop and rename/rewrite the recipe before any run.

### Step 2 - Verify Provenance And Sources

- Labor: AI
- Depends on: Step 1
- AI task: Run `test -f "pantry/ranahammad_320831_41799387_Rana_Hammad_A3_Workflow.json"`; list every URL/path in the Source Inventory.
- Handoff condition: Original JSON exists and each source is approved, replaced, redacted, or marked `[TO DO]`.
- On failure: Stop and report the missing or unapproved source.

### Step 3 - Read local breach CSV source

- Labor: AI with Human gate
- Depends on: Step 2
- AI task: Run `python3 scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__read-local-breach-csv-source.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 4 - Extract local breach CSV rows

- Labor: AI with Human gate
- Depends on: Step 3
- AI task: Run `python3 scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__extract-local-breach-csv-rows.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 5 - Normalize local breach records

- Labor: AI with Human gate
- Depends on: Step 4
- AI task: Run `python3 scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__normalize-local-breach-records.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Review rejects, duplicates, missing fields, and cleanup assumptions. Capacity: [IJ].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 6 - Prepare normalized breach JSON

- Labor: AI with Human gate
- Depends on: Step 5
- AI task: Run `python3 scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-normalized-breach-json.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 7 - Write normalized breach JSON handoff

- Labor: AI with Human gate
- Depends on: Step 6
- AI task: Run `python3 scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-normalized-breach-json-handoff.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 8 - Fetch CISA cybersecurity advisories

- Labor: AI with Human gate
- Depends on: Step 7
- AI task: Run `python3 scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__fetch-cisa-cybersecurity-advisories.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 9 - Normalize CISA advisory records

- Labor: AI with Human gate
- Depends on: Step 8
- AI task: Run `python3 scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__normalize-cisa-advisory-records.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Review rejects, duplicates, missing fields, and cleanup assumptions. Capacity: [IJ].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 10 - Prepare normalized CISA advisory JSON

- Labor: AI with Human gate
- Depends on: Step 9
- AI task: Run `python3 scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-normalized-cisa-advisory-json.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 11 - Write normalized CISA advisory JSON handoff

- Labor: AI with Human gate
- Depends on: Step 10
- AI task: Run `python3 scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-normalized-cisa-advisory-json-handoff.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 12 - Fetch Kaggle cybersecurity dataset catalog

- Labor: AI with Human gate
- Depends on: Step 11
- AI task: Run `python3 scripts/ingest/cybersecurity-breach-and-advisory-dataset-pipeline__fetch-kaggle-cybersecurity-dataset-catalog.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 13 - Normalize Kaggle cybersecurity catalog records

- Labor: AI with Human gate
- Depends on: Step 12
- AI task: Run `python3 scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__normalize-kaggle-cybersecurity-catalog-records.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Review rejects, duplicates, missing fields, and cleanup assumptions. Capacity: [IJ].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 14 - Prepare normalized cybersecurity catalog JSON

- Labor: AI with Human gate
- Depends on: Step 13
- AI task: Run `python3 scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-normalized-cybersecurity-catalog-json.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 15 - Write normalized cybersecurity catalog JSON handoff

- Labor: AI with Human gate
- Depends on: Step 14
- AI task: Run `python3 scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-normalized-cybersecurity-catalog-json-handoff.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 16 - Deduplicate merged cybersecurity records

- Labor: AI with Human gate
- Depends on: Step 15
- AI task: Run `python3 scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__deduplicate-merged-cybersecurity-records.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Review rejects, duplicates, missing fields, and cleanup assumptions. Capacity: [IJ].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 17 - Split clean and rejected cybersecurity records

- Labor: AI with Human gate
- Depends on: Step 16
- AI task: Run `python3 scripts/gigo/cybersecurity-breach-and-advisory-dataset-pipeline__split-clean-and-rejected-cybersecurity-records.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Review rejects, duplicates, missing fields, and cleanup assumptions. Capacity: [IJ].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 18 - Prepare clean cybersecurity JSON

- Labor: AI with Human gate
- Depends on: Step 17
- AI task: Run `python3 scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-clean-cybersecurity-json.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 19 - Write clean cybersecurity JSON handoff

- Labor: AI with Human gate
- Depends on: Step 18
- AI task: Run `python3 scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-clean-cybersecurity-json-handoff.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 20 - Prepare rejected cybersecurity JSON

- Labor: AI with Human gate
- Depends on: Step 19
- AI task: Run `python3 scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__prepare-rejected-cybersecurity-json.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 21 - Write rejected cybersecurity JSON handoff

- Labor: AI with Human gate
- Depends on: Step 20
- AI task: Run `python3 scripts/tools/cybersecurity-breach-and-advisory-dataset-pipeline__write-rejected-cybersecurity-json-handoff.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 22 - Write Human Report

- Labor: AI with Human review
- Depends on: Step 21
- AI task: Fill `reports/templates/cybersecurity-breach-and-advisory-dataset-pipeline.md` and save the completed report under `reports/generated/`.
- Human task: Confirm the report distinguishes evidence, interpretation, anomalies, decisions, and `[TO DO]` gaps. Capacity: [IJ], [EI].
- Handoff condition: Report links to source JSON, generated logs, verified outputs, and gate decisions.
- On failure: Stop and report missing report fields.

## Phase Gates

Intent, source permission, sample ingest, cleanup quality, claim support, and live-action approval are hard gates. The conductor stops at each gate until a human records a decision or `[TO DO]` blocker.

## Silent Mode Requirements

- At least three successful dialogic sample runs.
- Every `[TO DO]` source, field, credential, or claim placeholder resolved.
- Gate decisions logged in `logs/gate-decisions/`.
- Human sign-off documented for any live source or external side effect.
- Completed flow moved to `conductor/verified/` only after the evidence above exists.
