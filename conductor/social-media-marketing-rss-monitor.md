# Social Media Marketing RSS Monitor - Conductor Flow

## Mode

Dialogic (default). Silent mode is not available until this flow is in `conductor/verified/`.

## Entry Point

Triggered when a human asks to test or run the `Social Media Marketing RSS Monitor` recipe using local Madison data, sample handoffs, or explicitly approved live sources.

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
- AI task: Run `test -f "pantry/zuxinchen_405407_41801846_Zu_Xinchen_A3_Workflow.json"`; list every URL/path in the Source Inventory.
- Handoff condition: Original JSON exists and each source is approved, replaced, redacted, or marked `[TO DO]`.
- On failure: Stop and report the missing or unapproved source.

### Step 3 - Fetch HubSpot marketing RSS

- Labor: AI with Human gate
- Depends on: Step 2
- AI task: Run `python3 scripts/ingest/social-media-marketing-rss-monitor__fetch-hubspot-marketing-rss.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 4 - Fetch Sprout Social insights RSS

- Labor: AI with Human gate
- Depends on: Step 3
- AI task: Run `python3 scripts/ingest/social-media-marketing-rss-monitor__fetch-sprout-social-insights-rss.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 5 - Fetch Hootsuite blog RSS

- Labor: AI with Human gate
- Depends on: Step 4
- AI task: Run `python3 scripts/ingest/social-media-marketing-rss-monitor__fetch-hootsuite-blog-rss.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 6 - Normalize social-media marketing RSS fields

- Labor: AI with Human gate
- Depends on: Step 5
- AI task: Run `python3 scripts/gigo/social-media-marketing-rss-monitor__normalize-social-media-marketing-rss-fields.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Review rejects, duplicates, missing fields, and cleanup assumptions. Capacity: [IJ].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 7 - Prepare social-media marketing feed export

- Labor: AI with Human gate
- Depends on: Step 6
- AI task: Run `python3 scripts/tools/social-media-marketing-rss-monitor__prepare-social-media-marketing-feed-export.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 8 - Fetch Social Media Examiner RSS

- Labor: AI with Human gate
- Depends on: Step 7
- AI task: Run `python3 scripts/ingest/social-media-marketing-rss-monitor__fetch-social-media-examiner-rss.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 9 - Fetch Search Engine Journal RSS

- Labor: AI with Human gate
- Depends on: Step 8
- AI task: Run `python3 scripts/ingest/social-media-marketing-rss-monitor__fetch-search-engine-journal-rss.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 10 - Fetch Search Engine Journal duplicate RSS source

- Labor: AI with Human gate
- Depends on: Step 9
- AI task: Run `python3 scripts/ingest/social-media-marketing-rss-monitor__fetch-search-engine-journal-duplicate-rss-source.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 11 - Write Human Report

- Labor: AI with Human review
- Depends on: Step 10
- AI task: Fill `reports/templates/social-media-marketing-rss-monitor.md` and save the completed report under `reports/generated/`.
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
