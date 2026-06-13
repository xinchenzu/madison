# Recipe + Config — worked example (Exercise 5B live-demo specimen)

> Instructor's own example, performed in class on the same brand-reputation pipeline that ran through the Exercise Three data defense and the Exercise Five Conductor Brief. Students produce their own against their own project. This is the artifact 5B grades: the **config with judgment types named**, the **recipe a stranger conductor could run**, and the **audit that found the TODO I'd missed**. See `docs/exercises/exercise-05b-build-the-recipe.md`.

**Project:** brand-reputation news intelligence (`recipes/brand-reputation-news-intelligence-pipeline.md`)
**Inputs:** `data/verified/brand-news/` — 150 verified records (from the Exercise Three run)
**Brief:** `brief.md` + `brand_config.json` + `gates.yml` (from the Exercise Five Conductor Brief)
**Run date:** 2026-06-19

---

## 1. The four-layer map (Move 1)

| Layer | This pipeline | Contract on the way in |
|---|---|---|
| External | 3 RSS feeds (TechCrunch, Ars Technica, Google News brand query) | never trust — every item validated before it crosses |
| `data/raw/brand-news/` | 188 gathered items, as received | **ingest:** ≥1 item per feed, each with a title + link |
| `data/verified/brand-news/` | 150 cleaned, deduped, date-valid records | **GIGO gate:** date + source + ≥20-word summary, no dups |
| `logs/reports/brand-news/` | daily reliability digest | **human review:** does the ranking make sense for a strategist? |

Three handoffs, three contracts. The middle one is the Exercise Three validation gate, already built and run.

## 2. `brand_config.json` — extended from the Conductor Brief (Move 2 + 3)

Same file as Exercise Five, with `local_path`, `judgment_type`, and `conductor_note` added. Abbreviated to one source and the gates:

```json
{
  "tool_summary": "A reliability lens that tells a solo brand strategist which sources in the day's coverage are worth trusting, in one look.",
  "primary_user": {
    "role": "Solo brand strategist at a small tech firm",
    "situation": "Monday morning, scanning what was said about the brand over the weekend",
    "workaround": "Skimming a Google News tab and guessing which outlets matter"
  },
  "data_sources": [
    {
      "name": "Brand news (3 tech-press RSS feeds)",
      "local_path": "data/verified/brand-news",
      "record_type": "one news item: title, source, date, summary, link",
      "update_freq": "daily (14-day rolling window)",
      "quality_gate": "Every record has a parseable date, a source, a link, and a >=20-word summary; deduped on title+day."
    }
  ],
  "phase_gates": [
    {
      "step": "Ingest from feeds",
      "good_looks_like": ">=1 item per feed, each with title + link",
      "bad_looks_like": "any feed returns 0 items, or >20% missing dates",
      "response": "Hard stop",
      "judgment_type": "PA"
    },
    {
      "step": "Validate raw -> verified (GIGO gate)",
      "good_looks_like": "0 duplicates, all dates YYYY-MM-DD, 0 empty critical fields",
      "bad_looks_like": "date-coercion drops >10% of rows",
      "response": "Flag for review",
      "judgment_type": "IJ"
    },
    {
      "step": "AI reliability ranking",
      "good_looks_like": "every ranked source cites the record ids that justify its score",
      "bad_looks_like": "any score with no citable records behind it",
      "response": "Hard stop",
      "judgment_type": "TO"
    },
    {
      "step": "Deliver digest",
      "good_looks_like": "report names sources + scores + the evidence count per source",
      "bad_looks_like": "a quiet-brand day yields a thin or padded report",
      "response": "Flag for review",
      "judgment_type": "EI"
    }
  ],
  "one_thing": "The only brand-news lens that grades source reliability, not just collects mentions, for a strategist with no analyst to delegate to.",
  "conductor_note": "Run Monday and expect ~20% fewer records than midweek - weekend feed gaps are normal, not a pipeline failure."
}
```

Note the judgment types are *distinct, not stamped*: the go/no-go before the run is **PA**; the data-quality call is **IJ**; the check on AI-generated scores is **TO**; the quiet-brand edge case is **EI**. Same `response: Hard stop` sits on two different gates with two different owners — which is exactly why the type is a separate field.

## 3. Recipe file — excerpt (Move 4)

```
RECIPE: Brand-Reputation Reliability Digest
Version: 1.0 | Last run: 2026-06-19 | Run frequency: Daily

--- EXECUTIVE SUMMARY ---
Reads the day's brand coverage from three tech-press feeds, validates it into a
clean verified set, ranks each source by reliability with citable evidence, and
delivers a one-look digest. A solo strategist runs it each morning. A successful
run produces a ranked, sourced reliability digest in logs/reports/brand-news/.

--- LAYER 1: EXTERNAL -> data/raw/ ---
Step 1.1  Fetch three RSS feeds
  Action:  rssFeedRead x3 over a 14-day window
  Output:  data/raw/brand-news/YYYY-MM-DD.json
  TODO:    RESOLVED: relative-time pubDates ("2 hours ago") mapped to fetch timestamp

PHASE GATE 1 | Judgment type: PA
  Good looks like: >=1 item per feed, each with title + link
  Bad looks like:  any feed returns 0 items, or >20% missing dates
  Response:        Hard stop

--- LAYER 2: data/raw/ -> data/verified/ ---
Step 2.1  Validate and dedupe
  Action:  drop empty critical fields, standardize dates, dedupe on title+day,
           run the coercion audit (count what cleaning destroyed)
  Output:  data/verified/brand-news/
  Rejects: data/raw/rejected/brand-news/ with reason logged

PHASE GATE 2 | Judgment type: IJ
  Good looks like: 0 duplicates, all dates YYYY-MM-DD, 0 empty critical fields
  Bad looks like:  coercion dropped >10% of rows
  Response:        Flag for review

--- LAYER 3: TOOL / AI PROCESSING ---
Step 3.1  Rank sources by reliability
  Action:  Claude scores each source from its verified records; must cite ids
  Model:   Claude (reads evidence + explains the score in plain English)
  Output:  scored-sources.json
  TODO:    DEFINE - the reliability rubric weights (see audit, below)

PHASE GATE 3 | Judgment type: TO
  Good looks like: every score cites the record ids that justify it
  Bad looks like:  any score with no citable records behind it
  Response:        Hard stop

--- LAYER 4: logs/reports/ -> USER ---
Step 4.1  Generate the digest
  Action:  render scores + evidence counts as a one-look human-readable digest
  Output:  logs/reports/brand-news/YYYY-MM-DD-digest.md
  TODO:    REPORT FIELD - label the score column for a non-analyst

PHASE GATE 4 | Judgment type: EI
  Good looks like: report names sources + scores + evidence count per source
  Bad looks like:  a quiet-brand day yields a thin or padded report
  Response:        Flag for review

--- CONDUCTOR NOTE ---
This pipeline is sensitive to weekend gaps - a Monday run will look thin and
that is the data, not a fault. Do not let a low Monday count trigger a re-fetch
loop; flag it (EI) and let the human decide whether the quiet is real.

--- OPEN TODOs ---
  TODO: DEFINE        Reliability rubric weights (recency vs. outlet vs. corroboration)
  TODO: REPORT FIELD  Plain-English label for the "reliability score" column
  TODO: DEV           Recover the 8 relative-time pubDates for the LIVE promotion
```

## 4. The audit — what `/snickerdoodle` + Claude Code caught (Move 5)

**Pipeline description I gave `/snickerdoodle`:** *"A daily recipe that pulls brand coverage from three tech-press RSS feeds, validates it into a verified set, has Claude rank each source by reliability with cited evidence, and delivers a one-look digest to a solo strategist."*

**TODOs the audit generated, and what I did with each:**

| TODO (machine-generated) | Type | Resolution |
|---|---|---|
| Reliability rubric undefined — how is a "reliability score" computed? | `DEFINE` | **Resolved:** recency 0.3 / outlet-track-record 0.3 / cross-feed corroboration 0.4 — corroboration weighted highest because it's the one signal a strategist can't eyeball |
| Score column has no human label | `REPORT FIELD` | **Resolved:** "Trust signal (0–100) — how many independent feeds carried it, weighted by recency" |
| **Phase Gate 1 is `Hard stop` but names no decision-maker** | `APPROVE` | **Resolved — this is the one I'd missed:** the run halts if a feed returns zero, but I never said *who* approves the restart. Tagged **PA**, named the strategist as approver. The conductor was about to stop at a wall with no door. |
| 8 relative-time dates still dropped, not recovered | `DEV` | **Left open with a blocker:** awaiting the `code`-node fix; acceptable because it's owned (DEV) and logged, not undecided |

**`/claude` confirmation:** *"Recipe is runnable for a SAMPLE promotion. One open TODO (DEV — date recovery) blocks LIVE; all human-judgment gates are typed and owned."*

## 5. What I'm standing behind

A recipe a colleague could run Monday morning without me: four layers, four typed gates each with a named decision-maker, three open TODOs all owned (none "undecided"), and a config that traces field-by-field back to the Conductor Brief. The thing I'm proudest the audit forced: it caught a `Hard stop` with no human behind it — Gate 1 would have halted the pipeline and waited for an approver I'd never named. That's the difference between a recipe that *runs* and one that *knows when to stop and who decides* — and I couldn't see it until a machine read my own recipe back to me.

**Recipe status:** `RUNNABLE-SAMPLE` (this run + audit are the cited evidence). `RUNNABLE-LIVE` waits on the one DEV TODO and a live PA approval.
