# Conductor Brief — worked divergence example (Exercise Five live-demo specimen)

> Instructor's own example, performed in class. The point of the demo is **finding a DRIFT on camera**: I wrote a brief I believed was clear, ran the conductor against my config (not my prose), and showed where the actuator did something my alibi never authorized. See `docs/exercises/exercise-05-conductor-brief.md`.

**Tool:** brand-reputation news intelligence (the recipe from Exercises Three/Four)
**Run date:** 2026-06-19 · data: `data/verified/brand-reputation-2026-06-19.csv` (150 records)

---

## The sentence (the seam — same words, both forms)

> **BrandPulse helps a solo brand strategist see which sources are actually talking about a brand, so they can tell signal from noise before a client call.**

- *Human test:* read it cold to a non-technical friend — "oh, that's useful." ✓
- *Conductor test:* directive enough to prioritize? *"which sources are actually talking"* tells the conductor to weight source reliability over raw mention volume at an ambiguous branch. ✓ (This is the field that catches a DRIFT below.)

## The two forms (sketched — full files in the fork)

- **`brief.md`** (narrative, for the human): solo strategist, no research team, currently skims Google manually before a call, misses coverage and can't tell a credible outlet from a content farm. The One Thing: *the only brand-monitor that grades source reliability for a solo operator without an enterprise seat.*
- **`brand_config.json`** + **`gates.yml`** (declarative, for the conductor): three RSS sources with quality standards; gates for ingestion / validation / ai_processing.

## The run (conductor executed against the config, not the prose)

```
ingestion gate    → PASS (150 records, all have date+source+link)
validation gate   → PASS (0 dups, dates YYYY-MM-DD)
ai_processing gate→ FIRED once → HALTED: 1 "insight" had no citable source record
```

## The divergence log (the graded attestation)

| Claim in `brief.md` | Encoded in config? | What the run did | Verdict | Resolution |
|---|---|---|---|---|
| "every insight is sourced" | `ai_processing` gate: each claim must cite a record id; `response: hard_stop` | gate fired, halted the one uncited claim | **ALIGNED** | none needed — the actuator did what the alibi promised |
| "grades **source reliability** — signal from noise" | `brand_config.json` has source name + recency, **but no reliability field or rule** | conductor ranked sources by *mention count* — the prior's default — so a content-farm with 9 mentions outranked a credible outlet with 2 | **DRIFT** | the whole One Thing was unencoded. Added a `reliability` tier to each source in `brand_config.json` + a gate that weights by it. **Config is now authoritative; prose was a promise the actuator couldn't keep.** |
| "see which sources are *actually talking*" (for a quiet brand) | *config silent on the empty case* | conductor wrote a smooth "no significant coverage this period" paragraph — plausible, invented framing I never specified | **GAP** | decided I *want* the explicit empty-state, but on *my* terms: added `bad_looks_like: <10 records → flag_for_review` so a human sees the quiet result instead of the conductor narrating it away |

**A/D/G: 1 aligned, 1 drift, 1 gap.** The DRIFT is the one that matters: **my entire differentiator — "grades source reliability" — lived only in the alibi.** The boss-facing brief sold reliability grading; the actuator ranked by mention count because that's what the config left it to do, and that's the prior's default. Nobody would have caught it from reading `brief.md` (it's right there in prose) — the run caught it, because the run obeys the config, and the config never mentioned reliability.

That's the lesson on camera: **the prose is the alibi, the config is the actuator, and the differentiator you're proudest of is worthless until it's in the actuator.** Fixed: reliability is now a field and a gate. The brief is true again — because I changed the actuator, not the alibi.

**Recipe status:** gates now formalized (Move 3) → eligible for `RUNNABLE-LIVE` (a human can clear each written gate). Logged.
