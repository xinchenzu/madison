# Cloud Platform Release And Jobs Monitor - Conductor Flow

## Mode

Dialogic (default). Silent mode is not available until this flow is in `conductor/verified/`.

## Entry Point

Triggered when a human asks to test or run the `Cloud Platform Release And Jobs Monitor` recipe using local Madison data, sample handoffs, or explicitly approved live sources.

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
- AI task: Run `test -f "pantry/manyaratanaka_312461_41801533_Tanaka_A3_Workflow.json"`; list every URL/path in the Source Inventory.
- Handoff condition: Original JSON exists and each source is approved, replaced, redacted, or marked `[TO DO]`.
- On failure: Stop and report the missing or unapproved source.

### Step 3 - Source 1: AWS Blog RSS

- Labor: AI with Human gate
- Depends on: Step 2
- AI task: Run `python3 scripts/ingest/cloud-platform-release-and-jobs-monitor__source-1-aws-blog-rss.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 4 - Source 2: Google Cloud RSS

- Labor: AI with Human gate
- Depends on: Step 3
- AI task: Run `python3 scripts/ingest/cloud-platform-release-and-jobs-monitor__source-2-google-cloud-rss.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 5 - Source 3: Cloud Jobs CSV (HTTP)

- Labor: AI with Human gate
- Depends on: Step 4
- AI task: Run `python3 scripts/ingest/cloud-platform-release-and-jobs-monitor__source-3-cloud-jobs-csv-http.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 6 - Clean & Standardize

- Labor: AI with Human gate
- Depends on: Step 5
- AI task: Run `python3 scripts/gigo/cloud-platform-release-and-jobs-monitor__clean-standardize.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Review rejects, duplicates, missing fields, and cleanup assumptions. Capacity: [IJ].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 7 - Quality Check

- Labor: AI with Human gate
- Depends on: Step 6
- AI task: Run `python3 scripts/gigo/cloud-platform-release-and-jobs-monitor__quality-check.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Review rejects, duplicates, missing fields, and cleanup assumptions. Capacity: [IJ].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 8 - Save to CSV

- Labor: AI with Human gate
- Depends on: Step 7
- AI task: Run `python3 scripts/tools/cloud-platform-release-and-jobs-monitor__save-to-csv.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 9 - Write File to Disk

- Labor: AI with Human gate
- Depends on: Step 8
- AI task: Run `python3 scripts/tools/cloud-platform-release-and-jobs-monitor__write-file-to-disk.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 10 - Write Human Report

- Labor: AI with Human review
- Depends on: Step 9
- AI task: Fill `reports/templates/cloud-platform-release-and-jobs-monitor.md` and save the completed report under `reports/generated/`.
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
