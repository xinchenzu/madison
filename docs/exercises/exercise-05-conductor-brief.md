# Exercise Five — The Conductor Brief

**Course:** INFO 7375 Branding & AI · guest-lecture exercise · backs **Assignment 5 (The Conductor Brief)**
**Format:** I run it **live in class** — write the brief in two forms, run the conductor against the machine form, show where they diverge. You have the recording. You have a week to do the same on *your* tool.
**What you'll build:** the AI-age strategic brief — your tool stated **once, in two forms**: a **narrative brief** for the human audience (boss, client, hiring manager) and a **structured config** for the machine audience (the conductor). Then you run the conductor against the config on your real Exercise Four data and produce the **divergence log**: where the alibi (prose) and the actuator (rules) disagree, and what the run actually did.
**Time:** one sitting to write both forms + run; the divergence reconciliation at your pace within the week.
**You need:** Exercises Three (PRD + DRAFT recipe) and Four (verified data in `data/verified/`) done; Claude Code as the conductor; your Madison fork.

The whole exercise turns on one fact about the AI age (this is P5 — two customers — made load-bearing): **a strategic brief now has two audiences who want opposite forms.** Your boss wants *narrative* — intent, the why, what it means, plain English. The conductor wants *declaration* — JSON, YAML, `RULES.md`, the exact shape and the hard rules. Not the same content pitched higher or lower. Different mother tongues. And the danger is new: a human reader fills your gaps *in your direction*; the conductor fills them in *its* direction — its training prior — confidently. **Vagueness isn't softened; it's hallucinated.**

> **The alibi and the actuator.** The narrative is the alibi — where you told yourself what you meant. The config is the actuator — what actually runs. When they disagree, the conductor obeys the actuator, full stop. So you can ship something your boss approved (the prose) that your AI didn't build (the rules), both honestly traceable to "the brief." This exercise makes that gap visible and grades it.

---

## Move 1 — The sentence: the seam (A5 Part 1)

Write the single sentence: `[Tool] helps [specific user] [specific action] so they can [specific outcome].` No jargon, no tech stack, no agent names.

This is the hardest deliverable in the course, and the reason is precise: **it's the one place the two audiences refuse to separate.** It has to be the boss's *tagline* (prose enough to remember, "oh, that sounds useful") **and** the conductor's *prime directive* (unambiguous enough to prioritize against at a branch point). Everything else in the brief cleaves cleanly into narrative-for-humans or rules-for-machines. The sentence can't. The difficulty isn't brevity — it's that both readers read the *same words* and both must be fully served.

Test it both ways: read it to a human who's never seen your tool (do they get it?), and check that the conductor could use it to decide what to prioritize when the recipe hits something ambiguous (is it directive enough?). No partial credit for almost clear.

**Artifact:** one sentence — it goes at the top of the narrative brief AND as the `mission` field in the config. Same words, both forms.

## Move 2 — The narrative brief: for the human audience (A5 Parts 2, 6)

Prose. For the boss, the client, the hiring manager, your future self. `brief.md`:

- **The user and their situation** (A5 Part 2A): named role, what they're trying to do when they reach for this, what they do *instead* right now, why that's not good enough.
- **Three user stories** (A5 Part 2B): `As a [real role], I want [thing the tool actually does] so that [outcome the person actually cares about].` Core job, secondary use, power-user edge.
- **The One Thing** (A5 Part 6): three competitors with honest gaps and *sources cited* (tried it / demo / G2 reviews), the gap all three share, and one defensible claim — `the only [category] that [capability] for [user] without [the trade-off competitors impose]` — connected back to your user, with why a competitor can't copy it in a week.

This is the alibi half. It's where intent lives in human-readable form. A smart person who never saw your PRD should finish `brief.md` and understand the tool completely.

**Artifact:** `brief.md` — narrative, jargon-free, the why.

## Move 3 — The structured config: for the machine audience (A5 Parts 3, 4, 5)

Declarative. For the conductor. This is the half most students entering the AI world have never written — and the half that actually runs. **You cannot delegate it to the conductor, because the conductor is its reader, not its author** (asking the AI to write its own rules is asking the prisoner to write the prison). Two files:

**`brand_config.json`** — the data contract (A5 Part 3). Per source: name, what it is (type, count, update freq), what it *represents* in plain English, the **quality standard a human could actually check** ("every record has a date, a source URL, ≥20 words"), and `local_path: data/verified/…`. (Your Exercise Four `data/verified/` files are the inputs; the quality standards are your Exercise Four validation gate, formalized.)

**`gates.yml`** (or `RULES.md`) — the phase gates, A5 Parts 4 and 5 turned into conformance rules. For each major step, `good_looks_like` (the condition that lets the run proceed) and `bad_looks_like` (the trigger) with an explicit `response: hard_stop | flag_for_review | log_and_continue`. This is Madison's verification stack as a file: conformance checks halt; gates are hard stops. *This formalization is also what a recipe needs to reach `RUNNABLE-LIVE` — a human can only clear a gate that's been written down.*

```yaml
# gates.yml (shape)
- step: ingestion
  good_looks_like: "≥50 records, each with date + source + ≥20 words"
  bad_looks_like: "any source returned 0 records, or >20% missing dates"
  response: hard_stop
- step: validation
  good_looks_like: "0 duplicates, all dates YYYY-MM-DD, 0 empty critical fields"
  bad_looks_like: "coercion dropped >10% of rows"
  response: flag_for_review
- step: ai_processing
  good_looks_like: "every claim cites a source record by id"
  bad_looks_like: "any claim with no citable source"
  response: hard_stop
```

**Artifacts:** `brand_config.json` and `gates.yml` — declarative, the exact shape and the hard rules.

## Move 4 — Run the conductor against the config (the actuator fires)

Point Claude Code at the recipe and the config, on your real Exercise Four `data/verified/` file. The conductor executes against `gates.yml` and `brand_config.json` — **not** against `brief.md`. The gates pass or halt; the `bad_looks_like` triggers fire or don't. Read the run: which gates passed, which fired, what the conductor did at each branch.

Crucially, watch the conductor at the points your config was *silent*. Wherever `gates.yml` didn't specify, the conductor chose — and its choice is the training prior, not your intent. Those silences are where the divergence lives.

**Artifact:** the run output + the gate-by-gate result (passed / fired / halted / chose-in-a-silence).

## Move 5 — The divergence log: the graded attestation

This is the new thing this exercise teaches, and it's the grade. For each claim your **narrative** made, ask: did the **config** encode it, and did the **run** do it? Three outcomes per row:

| Claim (from `brief.md`) | Encoded in config? | What the run did | Verdict |
|---|---|---|---|
| "prioritizes recent, credible sources" | `min_date: 2024` only — no credibility rule | kept a low-credibility 2025 source | **DRIFT** — prose promised credibility, config didn't encode it |
| "every insight is sourced" | gate: claim must cite a record id | gate fired, halted one uncited claim | **ALIGNED** — prose, config, run agree |
| "handles a quiet brand gracefully" | *config silent* | conductor invented filler to fill the report | **GAP** — prose vague, the prior filled it |

- **ALIGNED** — prose, config, and run agree. The actuator did what the alibi promised.
- **DRIFT** — the prose claims something the config doesn't encode (or encodes differently). Your boss approved one thing; your AI built another. *Fix the config, or fix the prose — and say which is now authoritative.*
- **GAP** — the prose was vague, the config was silent, the conductor filled it from its prior. The run *revealed* an intent you never stated. *Decide what you actually wanted, and write it into the config.*

The attestation here isn't "I checked." It's **"the run proved the brief — or caught it lying."** Every DRIFT and GAP gets resolved: amend the config (most often), amend the prose, or declare the conductor's choice acceptable *on purpose*. A reconciled divergence log is the artifact.

**Artifacts:** `divergence-log.md` — every narrative claim reconciled against config and run, each DRIFT/GAP resolved with a reason.

## Move 6 — Log it

One `logs/RUN_LOG.md` entry: the one-sentence mission, count of ALIGNED / DRIFT / GAP, what you changed to reconcile, recipe status. No credentials.

**Lifecycle note:** the brief is the **intent layer** — above the PRD. The PRD was technical intent ("what to build"); the brief is strategic intent ("what it means, what good looks like, for whom"). It's the root that A5 feeds downstream into 5A (interface), 5B (recipe exec summary + gates), A6 (brand), and the pitch. Formalizing the gates (Move 3) is also what lets the recipe clear human gates toward `RUNNABLE-LIVE`.

---

## Grading — 25 points

**Mechanics — 20 points, itemized:**

| # | Mechanical component | Pts |
|---|---|---|
| 1 | The sentence: jargon-free, names real user + real outcome; works as **both** human tagline and conductor prime directive | 3 |
| 2 | `brief.md` (narrative): user + situation + 3 stories in standard format + the One Thing | 3 |
| 3 | The One Thing: 3 competitors with honest gaps and **sources cited**; one defensible claim tied to the user | 2 |
| 4 | `brand_config.json`: every `data/verified/` source with plain-English meaning + a checkable quality standard | 3 |
| 5 | `gates.yml`: ≥3 steps, each with `good_looks_like` + `bad_looks_like` + an explicit `response` | 3 |
| 6 | Conductor **run against the config** (not the prose) on real Exercise Four data; gate-by-gate result recorded | 2 |
| 7 | **Divergence log**: every narrative claim reconciled against config + run; each row verdicted ALIGNED / DRIFT / GAP | 2 |
| 8 | Every DRIFT and GAP **resolved** with a reason (amend config / amend prose / accept the conductor's choice on purpose) | 1 |
| 9 | RUN_LOG entry (mission, A/D/G counts, what changed, status); no credentials | 1 |
| | **Mechanics total** | **20** |

**Glimmer — 5 points, comparative & capped.** Graded on:

- *The sentence as seam* — does it genuinely serve both readers at full strength, or is it a tagline that's undirective, or a directive that's unreadable?
- *Divergence depth* — did the student surface real DRIFT and GAP (every honest brief has some), or claim suspiciously perfect alignment? Zero divergence on a first pass is a red flag, not an A — it usually means the run was against the prose's *vibe*, not the config.
- *The One Thing's defensibility* — a real, copy-resistant claim vs. "we use AI."
- *Reconciliation reasoning* — when prose and config disagreed, was the choice of which is authoritative *reasoned*, or reflexive?

Same bands/cap as Exercises One–Four (top quartile 4–5, descending; shallow cohort capped at 1–2). *(Instructor's option: one targeted AI question at the weakest dimension — almost always the sentence or a hand-waved GAP — graded on the revision.)*

The thing the live demo most needs to model: **finding a DRIFT on camera.** I'll write a brief I believe is clear, run the conductor against my own config, and show you the place where the actuator did something my alibi never authorized — because it will. The gap between what I *wrote* and what the conductor *did* is the entire lesson of entering the AI world: you now author for two readers, and only one of them runs.

## What can go wrong

| Symptom | What it means | Fix |
|---|---|---|
| One doc with prose + a few code blocks | you wrote one form, not two | split: `brief.md` (narrative) and `brand_config.json` + `gates.yml` (declarative) — different readers, different files |
| Conductor "run" was really you reading the prose | the actuator never fired | run Claude Code against `gates.yml`/`brand_config.json`, not `brief.md` |
| Divergence log shows perfect alignment | suspicious — every honest first brief drifts somewhere | check the config's *silences*; the conductor chose there, and you didn't notice |
| Sentence is a clean tagline but undirective | serves the human, fails the conductor | add the constraint that lets it prioritize at a branch — without adding jargon |
| Gates say "output looks right" | too vague to execute — the prose smuggled into the config | a gate is a condition a machine can evaluate: a count, a field, a parse, a citation |
| Asked the conductor to write `gates.yml` | the prisoner wrote the prison | the config is *your* intent for the AI to read; you author it, the conductor obeys it |
| DRIFT found, prose quietly edited to match | you moved the alibi to fit the actuator without deciding | state which is authoritative and why — the reconciliation is the graded thinking |
