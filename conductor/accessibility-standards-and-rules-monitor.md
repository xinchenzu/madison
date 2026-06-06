# Accessibility Standards And Rules Monitor - Conductor Flow

## Mode

Dialogic (default). Silent mode is not available until this flow is in `conductor/verified/`.

## Entry Point

Triggered when a human asks to test or run the `Accessibility Standards And Rules Monitor` recipe using local Madison data, sample handoffs, or explicitly approved live sources.

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
- AI task: Run `test -f "pantry/singhkanishknagendra_348738_41749683_Singh_Kanishk_A3_Workflow.json"`; list every URL/path in the Source Inventory.
- Handoff condition: Original JSON exists and each source is approved, replaced, redacted, or marked `[TO DO]`.
- On failure: Stop and report the missing or unapproved source.

### Step 3 - GitHub API - Axe-core Rules

- Labor: AI with Human gate
- Depends on: Step 2
- AI task: Run `python3 scripts/gigo/accessibility-standards-and-rules-monitor__github-api-axe-core-rules.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Review rejects, duplicates, missing fields, and cleanup assumptions. Capacity: [IJ].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 4 - W3C WCAG JSON - Success Criteria

- Labor: AI with Human gate
- Depends on: Step 3
- AI task: Run `python3 scripts/ingest/accessibility-standards-and-rules-monitor__w3c-wcag-json-success-criteria.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 5 - RSS - WebAIM Blog

- Labor: AI with Human gate
- Depends on: Step 4
- AI task: Run `python3 scripts/ingest/accessibility-standards-and-rules-monitor__rss-webaim-blog.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 6 - RSS - A11y Project

- Labor: AI with Human gate
- Depends on: Step 5
- AI task: Run `python3 scripts/ingest/accessibility-standards-and-rules-monitor__rss-a11y-project.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Confirm source permission, credential boundary, and sample/live boundary. Capacity: [PA], [TO].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 7 - Merge + Normalize + Deduplicate

- Labor: AI with Human gate
- Depends on: Step 6
- AI task: Run `python3 scripts/gigo/accessibility-standards-and-rules-monitor__merge-normalize-deduplicate.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Review rejects, duplicates, missing fields, and cleanup assumptions. Capacity: [IJ].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 8 - Save to CSV

- Labor: AI with Human gate
- Depends on: Step 7
- AI task: Run `python3 scripts/tools/accessibility-standards-and-rules-monitor__save-to-csv.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Approve output contract and keep live side effects disabled unless signed off. Capacity: [EI].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 9 - Write Error Log

- Labor: AI with Human gate
- Depends on: Step 8
- AI task: Run `python3 scripts/gigo/accessibility-standards-and-rules-monitor__write-error-log.py --no-write` for dry-run verification; only write outputs after the prior handoff passes.
- Human task: Review rejects, duplicates, missing fields, and cleanup assumptions. Capacity: [IJ].
- Handoff condition: Script exits successfully, output is parseable JSON, and the human check is recorded or a `[TO DO]` blocker is added.
- On failure: Stop, preserve the failing payload, and report the node name plus script path.

### Step 10 - Write Human Report

- Labor: AI with Human review
- Depends on: Step 9
- AI task: Fill `reports/templates/accessibility-standards-and-rules-monitor.md` and save the completed report under `reports/generated/`.
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
