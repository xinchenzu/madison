# Data Defense — worked example (Exercise Three live-demo specimen)

> Instructor's own example, performed in class. Students produce their own against their own project. This is the artifact Exercise Three grades: the **conformance numbers** (machine produced, human read) plus the **adequacy argument** (irreducibly human). See `docs/exercises/exercise-03-gather-validate-defend.md`.

**Project:** brand-reputation news intelligence (Madison `recipes/brand-reputation-news-intelligence-pipeline.md`, taken `DRAFT → RUNNABLE-SAMPLE` in this run)
**Problem (from Assignment 2):** which signals from named sources are reliable enough for a human to use in brand-reputation decisions?
**Run date:** 2026-06-19

---

## 1. Provenance — per source (where, why this tier, what it does and doesn't measure)

| Source | Node | Tier | Why this tier | Measures | Does NOT measure |
|---|---|---|---|---|---|
| TechCrunch RSS | `rssFeedRead` | 1 | no login, no rate limit, re-runnable | tech-press coverage volume + headline framing | sentiment; reach; whether anyone read it |
| Ars Technica RSS | `rssFeedRead` | 1 | same | deeper-tech coverage | consumer perception |
| Google News brand query (RSS) | `rssFeedRead` | 1 | RSS endpoint, citable | breadth of mention across outlets | outlet credibility weighting |

**Boundary note (Computational Skepticism, Ch 5):** each RSS item *links to* a full article off-schema. I pulled headline + summary + link only; I did **not** fetch article bodies (would extend the boundary to third-party text I haven't licensed or reviewed). Flagged for the privacy/licensing review before any publish.

## 2. Conformance — the audit numbers (machine produced, I read them)

```
total gathered (data/raw):     188
duplicates removed:             19   (same story, multiple feeds)
empty critical-field dropped:    7   (no date or no source)
date-coercion: failed to parse: 12   ← looked at these (see below)
verified (data/verified):      150
clean rate:                     150 / 188 = 79.8%
```

**Coercion audit (GIGO, Ch 6) — I looked at the 12 that failed to parse.** Eight were RSS items with a non-standard `pubDate` ("just now", "2 hours ago") — *a pattern, not junk*: a finding about feed freshness, recoverable by mapping relative times to the fetch timestamp. Four were genuinely empty. So: 4 correctly dropped, 8 recoverable — **I did not silently lose 12 real records under the banner of cleaning.** (Recovering the 8 is a `[TODO]` for the LIVE promotion.)

## 3. Adequacy — the argument (only I can make this, against the problem)

**Why exactly 150 rows?** Started at 188 across three feeds over a 14-day window. Lost 19 to dedup (the *same* story surfaces in all three feeds — expected, not a defect), 7 to missing critical fields, 12 to date-coercion (4 truly empty, 8 a freshness pattern). 150 is the deduped, complete, date-valid set for *this* window. It is **not** "all brand coverage" — it's three tech-press feeds over two weeks, which is the right slice for a *tech-brand* reputation question and the wrong slice for a *consumer-brand* one. I can defend it for the former; I would not for the latter.

**Fitness scorecard (GIGO, Ch 2):** the data carries headline, source, date, link — the fields the problem needs to ask "which sources are reliable." It can support a source-reliability comparison. It **cannot** support a sentiment claim (no sentiment field) or a reach claim (no readership data). **One risk to investigate:** the three feeds skew tech-press, so a brand strong in consumer channels would look quiet here for a reason that is about *my sources*, not the brand — selection, not signal.

**Cleaning report (GIGO, Ch 12) — the assumption column is the attestation:**

| Raw state | Diagnostic evidence | Action | **Assumption introduced** | Validation check |
|---|---|---|---|---|
| same story in 3 feeds | 19 title+date matches | dedup, keep earliest | "same title + same day = same story" | spot-checked 5 dedup pairs by hand — all genuine dups |
| `pubDate` = "2 hours ago" | 8 relative-time strings | dropped for now, `[TODO]` recover | "relative times are recoverable, not junk" | mapped 2 by hand against fetch time — recovered correctly |
| blank `source` | 7 records | dropped | "a record with no source can't support a *source*-reliability question" | confirmed all 7 also lacked a usable link |

**Metric, labeled:** none cited as a fact about the world in this run. (If I later claim "tech brands get 3× the coverage of consumer brands in these feeds," that's a **projected target** from my own 150 rows until I source an external study — not a cited fact.)

## 4. What I'm standing behind

150 clean, deduped, date-valid records from three citable Tier-1 feeds over a named 14-day window, sufficient to compare source reliability for a **tech**-brand reputation question, not a consumer one, with sentiment and reach explicitly out of scope and the freshness-recovery `[TODO]` logged. I would *not* have traded this for 1,000 rows I couldn't have walked you through — and the reason I can defend these and couldn't defend those is the whole point.

**Recipe status:** `DRAFT → RUNNABLE-SAMPLE` (this run + this audit are the cited evidence). Next stop `RUNNABLE-LIVE` when the agent consumes it (Assignment 4).
