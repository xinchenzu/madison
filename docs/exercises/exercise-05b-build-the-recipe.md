# Exercise 5B — Build the Recipe (the conductor-ready pipeline)

> **v1 draft — will change after a cohort runs it.** The audit loop names Nik's own tooling (`/snickerdoodle`, `/claude` in Gru); the *pattern* — a machine audits your recipe and proposes typed TODOs, you resolve them, a confirmation gate passes — is general and survives whatever tool you run it in. The spine — *turn the brief into a recipe a stranger conductor can run and knows when to stop* — is settled.

**Course:** INFO 7375 Branding & AI · guest-lecture exercise · backs **Assignment 5B (Build the Recipe, Path B)**
**Format:** I run it **live** — take my own Conductor Brief and verified data, assemble the recipe, run the audit, and resolve on camera the TODO the machine found that I hadn't. You have the recording; you do the same on your own pipeline in a week.
**What you'll build:** your Madison tool as a **conductor-ready recipe** — the four-layer pipeline wired to verified data, a `brand_config.json` with every phase gate's **judgment type named**, a recipe file a conductor unfamiliar with your project can pick up and run, and an audit pass that surfaces and resolves every typed TODO.
**You need:** Exercise Five done (the Conductor Brief — `brief.md` + `brand_config.json` + `gates.yml`), Exercise Three's `data/verified/…` (25+ verified records per source), Claude Code as the conductor, your Madison fork. Optional: Gru for `/snickerdoodle` + `/claude`.

This is 5A's twin, and the contrast is the lesson. **5A makes the tool *visible*** — a URL a stranger opens, the brief tested against a human's hands. **5B makes the tool *accountable*** — a recipe a conductor runs, the brief tested against an architecture that knows when to stop and ask. 5A has something to show in an interview; 5B has a JSON file and a recipe. Nina's right that the second is harder to show and rarer to have: most people who use AI never define what *good* looks like before they run, and never name *which human* must decide *what* when it breaks. That naming is the whole exercise.

> **The recipe is conductor-ready not when it runs — when every place it must *stop* is named, and every open question is typed by who must answer it.** A pipeline that runs end-to-end with no human gates isn't finished; it's unsupervised. This exercise grades the stops, not the flow.

---

## Move 1 — The four-layer spine (map what you already have)

You are not building a new architecture. You're naming the one Madison already runs, in the four layers A5B asks for, and putting a **contract** on every handoff (P2 — verified data structurally; nothing crosses a layer unchecked):

| Layer | Where | What lives here | The contract on the way in |
|---|---|---|---|
| External sources | APIs, feeds, CSVs | raw, untrusted input | *never trust* — validate before anything downstream |
| `data/raw/` | your fork | unverified data as received | **ingest**: did we get what we expected? (shape, count) |
| `data/verified/` | your fork | cleaned, validated data | **GIGO gate**: does this meet the quality standard in your brief? |
| `logs/reports/` | your fork | outputs, run logs, alerts | **human review**: does the output make sense for the user? |

Your Exercise Three work already lives in two of these: `data/raw/` and `data/verified/` exist, with the validation gate between them. Your Conductor Brief's Part 3 (data contract) and Parts 4–5 (good/bad-looks-like) are the source material for the contracts. Move 1 is mostly *recognition* — the layers aren't new, the naming is.

**Artifact:** a one-paragraph map of your pipeline onto the four layers, naming the contract at each of the three handoffs.

## Move 2 — Extend the config: every gate gets a judgment type (A5B Part 1)

You already wrote `brand_config.json` in Exercise Five. A5B's schema is the same file with three additions — do **not** start over; extend:

- `data_sources[].local_path` → point each source at its `data/verified/[folder]`.
- `phase_gates[]` → your `gates.yml` steps, now carrying **`judgment_type`** (Move 3) alongside `good_looks_like` / `bad_looks_like` / `response`.
- `conductor_note` → one sentence of domain knowledge the recipe can't capture ("run Monday and expect ~20% fewer records — weekend feed gaps").

The rule from Exercise Five still holds: **if a field is vague, your brief is vague — fix the brief first.** An empty `one_thing` isn't a config problem; it's a Part-6B problem surfacing. The config is a conformance check on the brief.

**Artifact:** `brand_config.json` — valid JSON (run a validator; invalid JSON isn't gradeable), every field populated, every phase gate carrying a judgment type.

## Move 3 — Name the judgment type at every gate (the heart of Path B)

This is the node that doesn't exist anywhere earlier in the course, and it's where the points are. Exercise Five's gates had a `response` — *what the pipeline does* (`hard_stop` / `flag` / `log_and_continue`). A5B asks a second, orthogonal question at every stop: **which human judgment is this, exactly?** "A human reviews here" is an unfinished gate. *Which* human, deciding *what*, is the finished one.

The five types — keep them straight, they are not interchangeable:

| Type | Name | The human is deciding… | Maps to Madison |
|---|---|---|---|
| **PA** | Pipeline Approval | *should this whole run start?* (before step 1) | P1 — the human authorizes the labor |
| **PF** | Pipeline Failure | *the pipeline errored — now what?* | the `bad_looks_like` → human branch |
| **TO** | Tool Output review | *is this AI-generated output fit to use?* | P5 — the report is for a human |
| **IJ** | Ingest Judgment | *does this incoming data meet the standard?* | P2 — the GIGO gate, as a decision |
| **EI** | Exception Intervention | *the recipe hit an edge it can't resolve — I'll handle it* | P6 — intent lives in the recipe; the exception lives with me |

The discipline: at each gate, the `response` says what *happens*, the `judgment_type` says who *owns the call*. A `hard_stop` with no judgment type is a wall with no door — the run halts and nobody is named to open it. **A gate that says "human reviews here" without a type loses 10 points on the assignment and, worse, fails in practice: the conductor stops and waits for a decision-maker the recipe never identified.**

**Artifact:** every phase gate in the config and the recipe tagged with exactly one judgment type, defensible against the table above.

## Move 4 — The recipe file: the conductor's score (A5B Part 3)

The recipe is a **plain-language document a conductor who has never seen your project can pick up and follow.** Not pseudocode, not a flowchart — a score. It is organized around the four layers, and it carries its own open questions as **typed TODOs**.

The five TODO types — every unresolved decision is typed by *who resolves it*, which is the whole point: an open question with no owner is how pipelines rot.

| TODO type | Who resolves | Means |
|---|---|---|
| `TODO: DATA SOURCE` | you | a source the recipe needs isn't wired yet |
| `TODO: DEFINE` | you | a threshold/parameter needs your decision before it can run |
| `TODO: DEV` | a developer | needs code — your hand-off if you're not the dev |
| `TODO: APPROVE` | you (judgment) | the conductor stops and waits for your explicit call |
| `TODO: REPORT FIELD` | you | an output field needs a human label before it's user-facing |

Required structure (the A5B template, abbreviated): an **executive summary** (3–5 sentences: what it does, who runs it, how often, what a successful run produces), then **one entry per step organized by layer**, a **typed phase gate after every layer transition** (good / bad / response / judgment type), the **open TODOs** typed, and a **conductor note** paragraph.

The bar is precise and worth saying plainly: **could a colleague who's never seen your project run this without you in the room?** That is the exact Path-B analogue of 5A's "could a stranger use the URL without you?" — same test, pointed at the conductor instead of the end user. The recipe is the alibi *and* the actuator written for one reader who is both: a conductor reads prose but executes literally.

**Artifact:** `recipe_[lastname].md` — four layers, executive summary, every phase gate typed, every open decision a typed TODO, a conductor note.

## Move 5 — The audit loop: let the machine find your gaps (A5B Part 4)

Here's the course spine one more time, in its Path-B form: **the machine does the fluent work of finding what you left unresolved; you do the irreducible work of resolving it.** You don't audit your own recipe for holes — you're the worst-placed person to see them. You hand it to a conductor and let it surface the TODOs.

The loop (Nik's tooling named; the pattern is general):

1. Run `/snickerdoodle` in Gru with a 3–5 sentence plain-language description of your pipeline. It produces a Claude Code agent prompt. *Your Conductor Brief Parts 3–5 are the intake form — if you wrote them well, you've already answered most of what it asks. Students who rushed the brief meet their shortcuts here, as fresh TODOs.*
2. Paste the prompt into Claude Code. It audits your recipe and **adds typed TODOs for everything unresolved** — the unwired source, the undefined threshold, the gate with no judgment type.
3. Resolve each TODO with a **decision** (not "I'll decide later" — that's the one unacceptable answer). Then run `/claude`; it confirms the recipe is ready, or names the specific blocker still open.

An open TODO is acceptable *only* with a typed blocker someone else owns: `TODO: DEV` awaiting implementation, external access not yet granted. "I haven't decided" is never acceptable — that's not a blocker, it's the work.

**Artifact:** the audit documented — the pipeline description you gave, every TODO the machine generated (by type), each resolved TODO *with its decision*, each still-open TODO *with its owning blocker*, and the `/claude` confirmation (or the named blockers).

## Move 6 — Log it

One `logs/RUN_LOG.md` entry: the recipe name and version, how many TODOs the audit surfaced and how many you closed, the judgment-type count by gate, recipe status (`DRAFT → RUNNABLE-SAMPLE`/`-LIVE` as the run + gates justify), and the single change you're proudest the audit forced. No credentials.

**Lifecycle note:** Exercise Five formalized the gates so the recipe *could* reach `RUNNABLE-LIVE`; 5B is where a human actually clears them — a gate is only clearable once its judgment type names who clears it. This recipe is the artifact every prior exercise was feeding: the target (Ex Two) set the aim, the data (Ex Three) filled the verified layer, the brief (Ex Five) wrote the intent, and here it becomes a thing a conductor runs with confidence and stops with judgment.

---

## Grading — 25 points

**Mechanics — 20 points, itemized:**

| # | Mechanical component | Pts |
|---|---|---|
| 1 | Four-layer map: pipeline named across all four layers, the contract stated at each of the three handoffs | 2 |
| 2 | `brand_config.json` extended (not rebuilt): valid JSON, all fields populated, `local_path` + `conductor_note` present | 3 |
| 3 | Every phase gate carries a **judgment type** (PA / PF / TO / IJ / EI), defensible against the table | 3 |
| 4 | `data/verified/` referenced correctly — 25+ records per source, the GIGO gate from Ex Three stated | 2 |
| 5 | Recipe file: executive summary + all four layers, one step entry per layer | 3 |
| 6 | Every layer transition has a **typed phase gate** (good / bad / response / judgment type) — none missing | 3 |
| 7 | Open decisions carried as **typed TODOs** (the five types), none left as bare prose | 2 |
| 8 | Audit loop documented: description, generated TODOs by type, resolved ones **with decisions**, open ones **with blockers** | 2 |
| 9 | RUN_LOG entry (recipe, TODO counts, judgment-type counts, status); no credentials | 1 |
| | **Mechanics total** | **20** |

**Glimmer — 5 points, comparative & capped.** Graded on:

- *Recipe runnability* — could a stranger conductor actually run this, or is it a skeleton with the hard decisions deferred? (The A5B top-quartile line: "precise enough to run. This is a portfolio piece.")
- *Judgment-type precision* — are the five types used *correctly and distinctly* (an IJ where data-quality is decided, an EI where an edge is handled), or stamped uniformly to fill the field?
- *TODO honesty* — did the audit surface real holes the student then closed with reasoned decisions, or a suspiciously clean recipe with one cosmetic TODO? A recipe the machine found nothing to fix usually means the description it audited was as vague as the recipe.
- *Config–brief consistency* — does the config trace cleanly back to the Conductor Brief, or has it drifted into a separate, prettier story?

Same bands/cap as Exercises One–Five (top quartile 4–5, descending; a cohort that all phoned in the same skeleton caps at 1–2). *(Instructor's option: one targeted question at the weakest dimension — usually a gate stamped with the wrong judgment type, or a TODO that's really an undecided design choice — graded on the revision.)*

The thing the live demo most needs to model: **the TODO the audit found that I hadn't.** I'll bring a recipe I believe is complete, run `/snickerdoodle` and Claude Code against it, and show you the gate where I wrote `hard_stop` but never named *who* clears it — the conductor caught a stop with no decision-maker behind it. The gap between a recipe that *runs* and a recipe that *knows when to stop and who decides* is the entire skill A5B is buying you, and the only honest way to find that gap is to let a machine read your work back to you.

## What can go wrong

| Symptom | What it means | Fix |
|---|---|---|
| Started `brand_config.json` from scratch | you ignored Exercise Five's config | extend the existing file — add `local_path`, `judgment_type`, `conductor_note`; if a field's empty, fix the *brief* |
| Gate says "human reviews here" | the judgment type is unnamed — an unfinished gate | name exactly one of PA / PF / TO / IJ / EI; *which* human, deciding *what* |
| Every gate tagged the same type | you stamped, didn't think | a GIGO gate is IJ; an AI-output check is TO; a pre-run go/no-go is PA — they're different decisions |
| Recipe is pseudocode / a flowchart | it's for a machine, not a conductor | rewrite as a plain-language score a colleague could follow without you |
| A layer transition with no phase gate | data crossed a contract uninspected | every handoff gets a gate; that's the whole architecture |
| Open TODO: "haven't decided the threshold yet" | that's the work, not a blocker | decide it, or type it `TODO: DEV`/`DATA SOURCE` with a real owner; "undecided" isn't a valid open state |
| Audit found nothing to fix | the description you fed it was as vague as the recipe | feed `/snickerdoodle` the real specifics from your brief; a good audit always finds something on a first pass |
| `data/verified/` has <25 records or no README | the inputs aren't proven | finish the Exercise Three gate; the recipe is only as real as its verified layer |
