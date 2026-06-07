You are working in a repository that contains pipeline recipes under `recipes/`.

TASK: For each recipe file, audit it against the standard recipe format,
rewrite it in that format, and insert typed [TODO] items wherever the recipe
cannot yet support script generation or developer implementation without
guessing.

BEFORE YOU START:
1. Read `CLAUDE.md`
2. Read `AGENTS.md`
3. Read `DATA_CONTRACT.md`
4. Read `recipes/README.md`
5. List every `.md` file under `recipes/` and report the list to the human
   before proceeding.

STOP after step 5. Do not proceed until the human confirms the recipe list.

---

## TODO TAXONOMY

Every [TODO] you insert uses exactly one of these five types.
The type tells the human what kind of action closes it — never use
plain [TODO] without a type.

```
[TODO: DATA SOURCE]
The human needs to locate, confirm, or obtain access to this data before
this step can run. Until closed, any script for this step uses sample/fixture
data only. Common triggers: machine-specific local paths, embedded credentials
in source URLs, unknown or stale endpoints, files that no longer exist at the
documented location.

[TODO: DEFINE]
A field, column, threshold, schema, or decision rule is named in the recipe
but has no specific value. The CLI cannot generate a correct script until this
is closed. Common triggers: "sufficient records", "reasonable threshold",
"appropriate fields", any place the recipe names a concept without specifying it.

[TODO: DEV]
The step is conceptually clear but not specified at the level where the CLI
can generate a working script. Input schema, output schema, transformation
logic, or error handling is missing. Common triggers: normalization steps
with no field mapping, merge steps with no deduplication key, report steps
with no column list.

[TODO: APPROVE]
A live action, external write, credential, or production behavior that
requires explicit human sign-off before the recipe can run in live mode.
Common triggers: embedded API keys, OAuth tokens, write operations to
external services, any step that posts, emails, or publishes.

[TODO: REPORT FIELD]
A report step that names an output but does not specify ALL THREE of:
(1) exact columns or sections that appear in the output,
(2) who reads this report (role, not name),
(3) what decision this report enables or blocks.
"Generate a report" fails all three. Insert one [TODO: REPORT FIELD] per
missing element, inline at the exact location.
```

---

## STANDARD RECIPE FORMAT

Every recipe must conform to this structure after standardization.
Sections that are missing are added. Sections that are present but
nonconforming are rewritten. Prose the human wrote is preserved unless
it contains a factual error or contradicts another section of the same recipe.

```markdown
# <Pipeline Name>

## Purpose
One paragraph. What business or research question does this pipeline answer?
Written for a domain expert — no implementation detail, no node names,
no script paths. Specific enough that a domain expert could say "yes,
that's what I need" or "no, it should answer X not Y."
NOT vague enough to describe ten different pipelines.
NOT "generate a report" as a terminal purpose statement.

## Source Inventory
(Present only for n8n-sourced recipes. Omit for spec-first recipes.)

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| [name] | [n8n node type] | [URL or path, or [TODO: DATA SOURCE] note] | Confirm source is allowed, current, and rate-safe before live fetch. |

## Node Classification
(Present only for n8n-sourced recipes. Omit for spec-first recipes.)

| Node Name | Node Type | Classification |
|---|---|---|
| [name] | [type] | ingest / gigo / tool / conductor / report |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| [name] | [JSON / CSV / RSS / text / etc.] | [URL, file path, API, or [TODO: DATA SOURCE]] | Yes / No |

## Phase Gates

1. [Gate name]: [What must be true]. Test: [exact command or check — not "review output"].
   Human capacity: [[PA] / [PF] / [TO] / [IJ] / [EI]].
2. [Gate name]: ...

## Steps

1. Step name: [name]. Labor: [AI / Human / AI with Human gate].
   Script called: [scripts/ingest|gigo|tools/<workflow-name>__<step-slug>.py]
   OR Human action: [exact action + supervisory capacity label].
   Input: [what it reads — specific file path or data description].
   Output: [what it produces — specific fields or schema, not "cleaned data"].
   Where output goes: [data/raw/ | data/verified/ | logs/ | reports/generated/].
2. ...

## Output Contract

### Agent output
File: `logs/<workflow-name>-[DATE].json`
Fields: [exact field list — workflow, run_id, mode, steps_completed,
records_seen, rejects, duplicates, flags, stop_conditions, generated_at,
plus any pipeline-specific fields]

### Human report
File: `reports/generated/<workflow-name>-[DATE].md`
Reader: [role — e.g. "marketing lead", "data team", "client"]
Decision enabled: [what the reader does differently after reading this]
Sections: [exact section or column list]

## Stop Conditions

- Stop if [specific behavioral condition — not "a step fails" but what
  condition causes it to fail and why that requires human intervention].
- ...

## Snickerdoodle

### Run Commands
Full dialogic run:
`snickerdoodle run <workflow-name> --mode dialogic`

Sample mode (no live network calls, no writes):
`snickerdoodle run <workflow-name> --mode dialogic --sample`

### Step Commands

| Step | CLI Command | Flags |
|---|---|---|
| [step name] | `snickerdoodle run <workflow-name> --step <step-slug>` | `--sample` `--no-write` |

### Gate Commands

| Gate | CLI Command |
|---|---|
| Gate [N] — [name] | `snickerdoodle gate <workflow-name> --gate <N> --decision approve --note "..."` |

### Script Locations

| Step | Script Path | Layer |
|---|---|---|
| [step name] | `scripts/ingest/<workflow-name>__<step-slug>.py` | ingest |
| [step name] | `scripts/gigo/<workflow-name>__<step-slug>.py` | gigo |
| [step name] | `scripts/tools/<workflow-name>__<step-slug>.py` | tool |

### Output Locations

| Output | Path | Format |
|---|---|---|
| Raw ingest | `data/raw/<workflow-name>/` | JSON |
| Verified data | `data/verified/<workflow-name>/` | JSON |
| Agent log | `logs/<workflow-name>-[DATE].json` | JSON |
| Human report | `reports/generated/<workflow-name>-[DATE].md` | Markdown |
| Gate decisions | `logs/gate-decisions/` | JSON |

## Provenance
(Present only for n8n-sourced recipes.)
Original workflow JSON: `data/madison-main/n8n-workflows/originals/<filename>.json`
OR pantry path if pantry-sourced.
```

---

## AUDIT CRITERIA

Run every criterion against each recipe. For each failure: insert the
appropriate [TODO] inline at the exact location of the gap.
Do not move on until every criterion is addressed with either a fill or a [TODO].

**Purpose**
- Written for a domain expert — no node names, no script paths, no
  implementation detail
- Specific enough to distinguish this pipeline from similar ones
- Does NOT end with "generate a report" as its terminal statement
- If vague: rewrite to be specific; if the recipe gives no basis for
  specificity, insert `[TODO: DEFINE] Purpose — rewrite to name the
  specific business or research question this pipeline answers`

**Inputs table**
- Every input has name, type, source, and required/optional
- Any machine-specific local path → `[TODO: DATA SOURCE] Replace
  <path> with repo-local path or confirm file location`
- Any embedded credential in a URL → `[TODO: APPROVE] Migrate
  credential to env var; propose name: <WORKFLOW_NAME>_<SERVICE>_KEY`
- Any unknown format → `[TODO: DEV] Define input format for <input name>`

**Steps**
- Every AI step names the exact script path
- Every Human step names the supervisory capacity label
- Every step output names specific fields or schema — not "cleaned data",
  not "normalized records", not "output JSON"
- Steps are in dependency order

**Report steps — the bar is higher**
Every report step must name ALL THREE:
1. Exact columns or sections in the output
2. Who reads it (role)
3. What decision it enables or blocks
Insert `[TODO: REPORT FIELD]` for each missing element, inline.
Do not insert a single TODO and move on — insert one per gap.

**Phase gates**
- Every gate has a specific testable verification command or check
- "Review output" is not a valid test — rewrite or insert `[TODO: DEFINE]`
- Every gate names the supervisory capacity label

**Output contract**
- Agent log section: names file path, naming convention, exact fields
- Human report section: names file path, reader role, decision enabled,
  section/column list
- These two sections are separate — one artifact serving both fails the audit

**Stop conditions**
- Behavioral, not structural: "stop if X is true" not "stop if a step fails"
- Each condition names what is wrong and why human intervention is required

**Snickerdoodle section**
- Present and complete
- Every AI step has a CLI command mapping
- Every Human gate has a gate command mapping
- `--sample` flag defined for every ingest step
- `--no-write` flag defined for every tool step

**n8n-sourced only**
- Pantry/provenance file path is correct and exists
- Title is the pipeline's function — not a submitter name or student ID
  (if the title is a person's name, rewrite it and note the change)
- All machine-specific paths flagged `[TODO: DATA SOURCE]`
- All embedded credentials flagged `[TODO: APPROVE]`

**Spec-first only**
- All `[TODO]` items from the original draft have a type assigned
- Gate log file names specified
- Downstream dependencies documented where known

---

## PROCESS — WORKING ONE RECIPE AT A TIME

Work through each recipe in the list, one at a time.

FOR EACH RECIPE:

### Step 1 — Classify the recipe
State:
- Recipe name
- Origin: n8n-sourced (has pantry provenance) / spec-first / unknown
- Current status: which sections are present, which are missing

### Step 2 — Standardize the structure
Rewrite the recipe in the standard format.
- Add missing sections
- Rewrite nonconforming sections
- Preserve human-written prose unless it is factually wrong or contradictory
- Do NOT delete content — if something doesn't fit the standard format,
  find the right section for it or note it as a candidate for removal

### Step 3 — Insert [TODO] items
Run every audit criterion.
Insert typed [TODO] items inline at the exact location of each gap.
Do not summarize TODOs at the end — insert them where the gap is.

### Step 4 — Produce the TODO summary
After standardizing and inserting TODOs, produce this block:

```
---
RECIPE AUDIT SUMMARY
Recipe: [name]
Origin: [n8n-sourced | spec-first | unknown]
Date: [date]

STATUS: [DRAFT | RUNNABLE IN SAMPLE MODE | RUNNABLE LIVE]

TODO COUNTS:
  [TODO: DATA SOURCE]   [N]
  [TODO: DEFINE]        [N]
  [TODO: DEV]           [N]
  [TODO: APPROVE]       [N]
  [TODO: REPORT FIELD]  [N]
  TOTAL                 [N]

WHAT THE HUMAN NEEDS TO DO NEXT (ordered by blocking severity):
  1. [TODO: DATA SOURCE] — [list each: what is missing, what finding it
     enables, whether sample mode is blocked without it]
  2. [TODO: DEFINE] — [list each: what needs a value, what script it unblocks]
  3. [TODO: REPORT FIELD] — [list each: which report step, which of the
     three elements is missing]
  4. [TODO: APPROVE] — [list each: what credential or action, what live
     behavior it gates]
  5. [TODO: DEV] — [list each: what specification is needed, what the
     CLI will stub without it]

SNICKERDOODLE STATUS: [Present / Missing / Partial]

GRADUATION BLOCKERS:
  Sample mode: [what must close before this recipe can run --sample]
  Live mode:   [what additional items must close before --no-sample]
---
```

### Step 5 — Write the standardized recipe to file
Write the complete standardized recipe (with [TODO] items inserted)
to `recipes/<workflow-name>.md`.
Do not overwrite the original until the human confirms.
Write to `recipes/<workflow-name>-standardized.md` and report the path.

### Step 6 — Stop and report
Present the TODO summary to the human.
Ask: "Does this look right? If yes, I'll rename
`recipes/<workflow-name>-standardized.md` to replace the original
and move to the next recipe. If no, tell me what to fix."

Do not begin the next recipe until the human confirms.

---

## WHEN ALL RECIPES ARE COMPLETE

Produce a summary table:

| Recipe | Origin | TODOs | Status | Snickerdoodle |
|---|---|---|---|---|
| <name> | n8n-sourced / spec-first | N total (D/Df/Dev/A/R) | DRAFT / SAMPLE / LIVE | Present / Missing |

Column key: D = DATA SOURCE, Df = DEFINE, Dev = DEV, A = APPROVE, R = REPORT FIELD

Then report:
- How many recipes are RUNNABLE IN SAMPLE MODE with no changes
- How many require human data-source work before any run is possible
- How many have unspecified report steps
- Which recipe has the fewest TODOs (best candidate for a first dialogic test run)

Ask the human:
"Which of these recipes do you want to work on first?
I recommend starting with the one closest to RUNNABLE IN SAMPLE MODE —
that gets you a working pipeline fastest and gives you a reference point
for the harder ones."
