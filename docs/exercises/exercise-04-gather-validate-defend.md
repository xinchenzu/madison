# Exercise Four — Gather, Validate, Defend

**Course:** INFO 7375 Branding & AI · guest-lecture exercise · backs **Assignment 3** ("Build Your Data Pipeline")
**Format:** I run it **live in class** on my own project — gather, validate, defend — start to finish. You have the recording. You have a week to do the same on *your* data.
**What you'll build:** your Exercise Three `DRAFT` recipe walked to **`RUNNABLE-SAMPLE`** — a working n8n data pipeline that *gathers* from 3+ Tier-1 sources **and validates** what it gathered, writing raw to `data/raw/` and the verified, defended file to `data/verified/`. Plus the artifact that earns the grade: the **data defense** — the audit numbers *and* the argument that this is the right data for your problem.
**Time:** one sitting to gather + validate; the defense and cleanup at your pace within the week.
**You need:** Exercise Three done (a `DRAFT` recipe exists), n8n installed (`npm install -g n8n`, `n8n start`, open `localhost:5678`), your Madison fork, your Assignment-2 problem in front of you.

The spine (from `MYCROFT.md`, P1 and P2): **the machine gathers and runs the checks; you select the sources, attest the numbers, and argue the adequacy.** *Verified data is structural* — nothing enters `data/verified/` without passing the validation gate. And the rule that makes the whole thing honest: **you cannot defend what you did not validate.** A 1,000-row scrape you can't stand behind scores *below* 100 clean rows you can. Quality wins because it's the only thing you can argue for.

> **Two reference texts for this exercise.** *GIGO* is the validation tooling — the coercion audit, the cleaning report, the defect taxonomy (mechanical / analytical / judgment). *Computational Skepticism for AI* is the interrogation — the four skeptical moves, "why are there exactly N rows?", the access/boundary question. Procedural checks are necessary but not sufficient; the interrogation is the human part, and it is the defense.

---

## Two rules, before you touch a source

**Quality over quantity.** 50–100 clean, *defensible* records beat 1,000 messy ones. The grade comes from defending the data; messy data is indefensible. This isn't a style preference — it's structural. Don't chase volume.

**Collect once, reuse forever.** Run the pipeline once, save the raw pull to `data/raw/`, then work against the *saved* data. This is the fixture discipline you already used in Exercise Two (fetch the board once to a dated file). It's why you don't get rate-limited, blocked, or cut off mid-project — and it's why every refresh must be *re-validated*, not trusted because the source was good last time (the turkey was fed for 1,000 days).

## Where to get your data (provenance is a grade, not a footnote)

- **Tier 1 — start here.** Public datasets (Kaggle, HuggingFace, Data.gov, GitHub), RSS feeds (no login, no limits), generous-free APIs (YouTube, NewsAPI). Sources you can cite, keep, and re-run — provenance you can stand behind.
- **Tier 2 — with caution.** Pre-saved archive datasets (Twitter/Reddit *archives*, not live scraping). Useful, needs extra cleaning.
- **Tier 3 — avoid.** LinkedIn API, Twitter/X free tier, live Reddit scraping. These block or cut you off mid-project. A recipe whose source blocks it can't be attested — naming this boundary *is* the honesty (it's the same move as the recipe's WON'T-build list).

Document, per source: **where it came from, why this tier, and what it does and does not measure.** That last clause is P3 (provenance or it isn't evidence) applied to inputs.

---

## Move 1 — Gather: the machine collects, you choose and cite (A3 Part 1)

Build the n8n workflow — a 6-step pipeline is perfectly fine: start → source 1 → source 2 → source 3 → cleanup → save. The agent can draft the node graph; you choose the three Tier-1 sources keyed to your Assignment-2 problem (relevant data, not filler) and you write the provenance line for each.

The machine gathers *everything* the sources return into `data/raw/<source>-YYYY-MM-DD.json` — the fixture. Aim for 50–200 records *relevant to your problem*. Save raw first; validate next.

**The boundary check (from *Computational Skepticism*, Ch 5):** the boundary of your data is the schema **plus everything its rows reference.** An RSS item links to a fuller article; a record quotes a third party. Note what your rows reach into — you may be pulling in PII, third parties, or unlicensed text you never modeled. Flag it now; it's part of the defense (and the privacy review before anything publishes).

**Artifacts:** the n8n workflow; `data/raw/` fixtures, dated; a per-source provenance table (source, tier, why, what-it-measures, what-it-doesn't).

## Move 2 — Validate: the gate from raw to verified (A3 Part 1, the *AND validate* half)

This is what makes it a *tool* and not a scraper. The validation is a **step in the workflow** (A3 pays 3 Excellence points for exactly this — "checks built into the workflow"). In Mycroft terms, the cleanup node **is** the `data/raw → data/verified` gate. Build, at minimum:

1. **Dedup** — no repeated records.
2. **Date-standardize** — one format (`YYYY-MM-DD`), and assert dates parse and fall in range.
3. **Critical-field check** — every record has title/source/date (or your problem's required fields); flag or drop the empties.
4. **The coercion audit (GIGO, Ch 6 — build this one first).** When a `code` node parses `"45.3%"` → number, or standardizes a date, or casts a string, **count what failed to parse and became empty, and *look* at the values.** GIGO's line: *"a column that quietly gained two hundred new nulls during cleaning has had two hundred real values deleted under the banner of cleaning."* This is the anti-quantity check *in code* — a 1,000-row scrape that loses 400 rows to coercion is exposed on the spot, in one number you read and defend.

Only records that pass the gate get written to `data/verified/`. Save the verified file as CSV/JSON with a schema consistent row 1 to row N.

**Artifact:** `data/verified/<project>-YYYY-MM-DD.csv` (or .json) — deduped, date-standardized, complete-fielded; plus the validation node(s) in the workflow.

## Move 3 — Audit: produce the numbers (A3 Part 3, the conformance half)

The agent counts; you read. Produce the audit — the numbers a boss could use:

- total records, clean records, **% clean**, per-source breakdown
- duplicates removed, dates standardized, empty-field records dropped
- the coercion-audit count: how many values failed to parse, and what they were (junk → correct to drop; pattern → a finding)

These are **conformance** — the machine genuinely can judge them (does this date parse? is this a duplicate? is this field empty?). Counted, not estimated.

**Artifact:** a data-inventory block (A3's template) with real numbers.

## Move 4 — Defend: argue the adequacy (the graded human work)

Here's the part the numbers can't make for you. **"Defend the quality" is not "assert it's clean" — it's the attestation: here is how clean, here is how I know, and here is *why it's the right data for my problem*.** It splits exactly along P1:

- **Conformance (machine produced, you read):** the audit numbers from Move 3. *"94% complete on 140 records, here's the breakdown."*
- **Adequacy (only you, only against the problem):** *are these the **right** records?* 100 spotless rows of the wrong industry pass every check and fail the problem. Whether the data serves your Assignment-2 problem is not a machine question.

Run the interrogation (from *Computational Skepticism*) and write the answers — this is the defense:

- **"Why are there exactly N rows?"** Why 140 and not 500? What did the source exclude? What did a date-filter or a dedup silently drop? If you can't answer, you *collected*, not validated.
- **The fitness scorecard (GIGO, Ch 2):** does this data carry the fields my problem needs, in a form I can trust? One paragraph: what it can support, what it cannot, one risk to investigate.
- **The cleaning report (GIGO, Ch 12) — the five-column row, per non-trivial cleaning decision:** raw state · diagnostic evidence · action · **assumption introduced** · validation check. The fourth column is the one only you can fill — the claim about the world you're betting on (e.g., "I treated a blank `salary` as *not disclosed*, not *collection failed* — assumption: postings omit salary deliberately"). The agent can draft the diagnostic and action columns; the *assumption* is the attestation.
- **One labeled metric, if you cite any.** A number about the world is a **cited fact** (real source) or a **projected target** (your estimate) — never the second dressed as the first.

The forcing function, stated plainly: **you cannot defend what you did not validate.** This is why the defense kills quantity-over-quality structurally — a 1,000-row mess is indefensible, so quality is the only thing you *can* argue for.

**Artifacts:** the data defense — fitness scorecard + the "why N rows" answer + the cleaning report with assumptions + any metric labeled. (A3's setup guide and demo are the Canvas deliverables; this defense is what the exercise grades.)

## Move 5 — Promote the recipe and log it

Your Exercise Three recipe goes `DRAFT → RUNNABLE-SAMPLE`: the sample run completed, conformance checks passed, the audit was generated and read. Update the frontmatter *with the evidence cited* (the run, the audit file) — status is a claim, and a claim needs a logged artifact (P3). Then one `logs/RUN_LOG.md` entry: sources + tiers, records gathered/verified, % clean, the coercion-audit count, the top adequacy risk, recipe status. No credentials, ever.

**Honest lifecycle note:** this ships the **data layer** — real, validated, defensible, a genuine portfolio piece. The gap doesn't *fully* close yet: the agent that consumes this data is Assignment 4, where the recipe goes `RUNNABLE-SAMPLE → RUNNABLE-LIVE → VERIFIED`. Partial progress, logged as such — which is itself the lesson.

---

## Grading — 25 points

**Mechanics — 20 points, itemized** (each checkable; partial completion earns partial credit):

| # | Mechanical component | Pts |
|---|---|---|
| 1 | Recipe taken `DRAFT → RUNNABLE-SAMPLE`: sample run completes; status updated with logged evidence | 2 |
| 2 | Workflow runs without major errors and is repeatable | 2 |
| 3 | 3+ Tier-1 sources; **provenance documented per source** (where, why this tier, what it does/doesn't measure) | 2 |
| 4 | 50–200 records **relevant to the Assignment-2 problem** (not filler); raw saved to `data/raw/` as dated fixtures | 2 |
| 5 | **Validation built into the workflow** — dedup + date-standardization + critical-field check (the `raw → verified` gate) | 3 |
| 6 | **Coercion audit**: cleaning counts what it destroyed and the lost values were looked at, not silently dropped | 2 |
| 7 | Audit numbers produced — total / clean / % / per-source — counted, not estimated | 2 |
| 8 | **Data defense (the attestation)** — conformance numbers **and** the adequacy argument: "why N rows" answered, fitness scorecard, cleaning report with the *assumption* column filled | 3 |
| 9 | Verified file in `data/verified/`, consistent schema; "collect once" honored (downstream work uses the saved file) | 1 |
| 10 | RUN_LOG entry (sources, counts, %, coercion count, top risk, status); no credentials anywhere | 1 |
| | **Mechanics total** | **20** |

**Glimmer — 5 points, comparative & capped** (A3's Excellence section *is* the Glimmer scheme — "these points are comparative… the top work rises… we look at the whole class side by side"). Graded on:

- *Care* — cleanest, most thoughtfully organized data; does it look like someone cared about every record?
- *Craft* — graceful failure (a source returns nothing → the workflow logs "source unavailable" and keeps the others running, rather than crashing); sources connected coherently, not bolted on.
- *Defensibility / specificity* — the "why N rows" answer is real; the cleaning report's *assumption* column is honest, not "added entry" by reflex; quality numbers detailed enough to *see the work*.
- *Presentation* — clear, professional, replicable by a peer.

Same bands/cap as Exercises One–Three:

| Band | Pts |
|---|---|
| Top quartile of the cohort's reasoning depth | 4–5 |
| Second quartile | 3 |
| Third quartile | 2 |
| Bottom quartile | 0–1 |

**The cap:** a low-effort cohort lands at 1–2 regardless of relative rank — being the cleanest of a careless pool doesn't earn 4–5. *(Instructor's option: one targeted AI question at the weakest dimension — almost always the adequacy defense — graded on the revision.)*

The single hardest thing, and the thing the live demo most needs to model: **the adequacy defense under the pull of volume.** The fun-but-impressive 1,000-row scrape is the data-form of the fluency trap — it *looks* like a lot of work. Watching me choose 140 clean, defended rows over 1,000 messy ones, *and say out loud why*, on the recording, is the teaching.

## What can go wrong

| Symptom | What it means | Fix |
|---|---|---|
| 1,000+ rows, can't say why that many | collected, not validated — the defense will expose it | run the coercion audit; answer "why N rows"; cut to what you can defend |
| Cleaning quietly shrank the dataset | coercion deleted real values under the banner of cleaning | count what became null and *look* at it; junk → correct to drop, pattern → a finding |
| Data is spotless but off-topic | conformance passed, adequacy failed | the fitness scorecard catches it: is this the right data for *my* problem? |
| Source blocked the pipeline mid-run | a Tier-3 source; can't be attested | move to Tier 1; name the boundary in the provenance table |
| Cleaning report is all "added entry" | the assumption column filled by reflex, not thought | name the actual claim about the world each cleaning step bets on |
| Metric stated as fact, no source | the fluency trap — a confident invented number | label it cited-fact (with source) or projected-target; never the second as the first |
| Validation done by hand after the fact | it's not a tool, it's a manual clean | the validation must be a *node in the workflow* — that's the 3-point line |
| Recipe promoted to RUNNABLE-SAMPLE, no evidence | status is a claim, not a record | cite the run and the audit file in the frontmatter |
