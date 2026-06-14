# Exercise 6A — The Pitch Deck From the Arc

**Course:** INFO 7375 Branding & AI · a lab between **Assignment 6** and the **Madison Pitch** midterm (the way 1A is a lab off A1)
**What you'll build:** a 10-slide brutalist **HTML/D3 deck** — rendered from a spec, exported to the PDF the Madison Pitch requires — whose every claim **traces to a verified artifact you already built** in Exercises 1 → 6.
**Time:** one sitting. You are not making new claims. You are arranging proof you already have.
**You need:** your `brand/` folder, your Exercise 2/3/5/5B artifacts, your Assignment 6 name, a CLI agent, and `scripts/build-deck.mjs`.

The principle this lab runs on: **a pitch is the single most tempting place to inflate.** It is where "concept" quietly becomes "prototype," where one user becomes "traction," where a hope becomes a metric. This lab makes the deck an *auditable* artifact. Every slide either points at a file you attested, or it is flagged as an aspiration and moved off the slide — exactly the board-audit move from Exercise 1A, turned on your own pitch.

---

## Move 1 — Lay out the arc (what feeds what)

Every slide is fed by something you already shipped. Map it before you write a word:

| Slide (Kawasaki) | Fed by |
|---|---|
| 1 Title — name + one line | Assignment 6 final name + `brand.yml` one-liner |
| 2 Problem (a loss) | `gaps.md` / the target that started it (Ex 2) |
| 3 Solution (before→after) | the Madison build that closes the gap (`gaps.md` top row) |
| 4 The magic + why-now | your recipe's verification step (Ex 5B `recipe`) — the trustworthy-vs-fluent thesis |
| 5 Business model | `brand.yml` (audience) + your pricing call |
| 6 Go-to-market | `brand.yml` `media:` (cited channels) + `targets.json` (Ex 2) |
| 7 Competition | Assignment 6 competitive matrix / a `brandy` audit |
| 8 Status / roadmap | your recipe's **lifecycle stage** (DRAFT / RUNNABLE-SAMPLE…) — honest |
| 9 Proof of concept | the running recipe + the **data defense** (Ex 3) |
| 10 The ask | `gaps.md` (what the build still needs) + a 48-hour CTA |

If a row has no artifact behind it, that is the signal — you are about to pitch something you didn't build. Fix the arc, not the slide.

## Move 2 — One claim per slide, each a full-sentence assertion

Write each headline as a *claim*, not a label ("We win because we sit after the writer," not "Competition"). One idea per slide. If you can't state the claim, the slide doesn't know what it's saying — and the artifact behind it may be thin.

## Move 3 — Write the spec (the `slides-deck` skill)

Produce a slide spec (`*.md`) in the `build-deck` format — slides split on `---`, `# headline` the claim, body the *visual or 2–4 short lines*, and **everything you'll say out loud under `NOTES:`** (not on the slide — verbal-channel collision). Apply two disciplines you already know:

- **Destination, not engine** (`prompts/_shared/destination-language.md`): no n8n / API / LLM / recipe-speak on a slide for a non-technical investor. Say the outcome.
- **Provenance gate**: every statistic is sourced or labeled `[Unverified — cite or cut]`. The number you can't cite does not go on the slide as fact.

## Move 4 — Render it (10 / 20 / 30, brutalist)

```bash
node scripts/build-deck.mjs your-deck.md --out your-deck.html
```

Open it; `←/→` to move, `n` for notes, `f` fullscreen, **`p` to print to the PDF**. The renderer enforces the 30pt-minimum and one-idea layout; the 10-slide cap and the 8-minute clock are yours. Worked example: `prompts/slides-deck/examples/madison-pitch-deck.md`.

## Move 5 — The trace audit (the heart of this lab)

Build a trace table: **every on-slide claim → the artifact that backs it, or flagged.**

| Slide claim | Backing artifact (path) | Verdict |
|---|---|---|
| "scores every draft against your voice" | `recipe_lastname.md` step 3 | TRACED |
| "200 teams paying $99" | — | ASPIRATION → move to notes; do not assert |

Untraceable claim → it is an *aspiration*, not a proof. It comes off the slide and goes into the notes ("where we're headed") or into `gaps.md`. This is the same rule as `brand.yml` (no proof → it's a gap) and the Ex 1A board audit (every claim traces or is flagged), applied to the pitch. A deck where every slide traces is a deck you can defend under questioning.

**Machine pre-check.** Annotate each slide in the spec with a `TRACE:` line listing the artifact(s) it rests on (a flagged aspiration becomes `TRACE: ASPIRATION`), then let the tool confirm every reference resolves before you eyeball the table:

```bash
node scripts/deck-trace.mjs your-deck.md
```

It fails (exit 1) on any **untraced** slide or any `TRACE:` path that doesn't exist — so a slide can't quietly ship without provenance. The machine confirms the artifact *exists*; whether it actually *backs the claim* is still your half of the audit.

## Move 6 — Log it

One `logs/RUN_LOG.md` entry: the deck name, slide count, how many claims traced vs. how many you moved to aspiration, the one claim you were most tempted to inflate and didn't, and the recipe lifecycle stage you reported honestly on slide 8.

---

## Grading — 25 points

**Mechanics — 20 points, itemized** (each independently checkable):

| # | Component | Pts |
|---|---|---|
| 1 | Spec written in the `build-deck` format; renders to valid HTML (`node scripts/conformance.mjs`) | 3 |
| 2 | Exactly 10 slides; every headline a full-sentence **claim**, not a label | 3 |
| 3 | Every slide's claim **traced** to a verified artifact in the trace table — or flagged and moved off-slide | 5 |
| 4 | Destination language: zero engine jargon (n8n/API/LLM/recipe) on any slide body | 2 |
| 5 | Every statistic sourced or labeled `[Unverified — cite or cut]` (provenance gate) | 2 |
| 6 | Speaker text in `NOTES:`, not on the slide body (no verbal-channel collision) | 2 |
| 7 | Slide 8 reports the **honest** recipe lifecycle stage (no "prototype" for a DRAFT) | 1 |
| 8 | PDF exported (press `p`); RUN_LOG entry with the traced/aspiration count | 2 |
| | **Mechanics total** | **20** |

**Glimmer — 5 points, ranked by depth** (relative, capped): does the deck tell a *story* (problem → build → proof → ask), not a spec sheet? Does the One Thing from your Conductor Brief land as a single quotable line? Watching it cold, would a stranger invest — and is that belief earned by traced proof rather than by polish? Top quartile 4–5 · second 3 · third 2 · bottom 0–1. The cap holds: a shallow cohort lands at 1–2.

---

## What can go wrong

| Symptom | What it means | Fix |
|---|---|---|
| A slide claim with no artifact behind it | the pitch is inflating past what you built | move it to the notes as aspiration, or cut it; pitch what's true |
| The deck reads as a feature list | headlines are labels, not claims | rewrite each headline as a full-sentence assertion |
| A number on a slide with no source | the fluency trap, in a chart | cite it or label it `[Unverified — cite or cut]` |
| Slide 8 says "MVP" but your recipe is DRAFT | stage inflation — the exact thing the course is against | report the real lifecycle stage; honesty about stage builds credibility |
| Engine words on the slide (n8n, embeddings) | pitching the engine, not the destination | translate to the outcome the customer experiences |

## Before you submit — check it

```bash
node scripts/build-deck.mjs your-deck.md --out your-deck.html   # renders; open and press p for the PDF
node scripts/conformance.mjs your-deck.md your-deck.html        # spec + deck well-formed
node scripts/deck-trace.mjs your-deck.md                        # every slide carries a resolvable TRACE: (untraced/broken = exit 1)
```

Then run the **trace audit by hand**: read each slide's claim and point to the file that backs it. A claim you can't point at is the one to cut. The machine checks that the deck is well-formed (conformance, P4); whether every claim is *true and traced* is the human gate — which is the whole point of the lab. Full guide: `docs/exercises/HOW-TO-CHECK.md`.

**Lifecycle note:** this lab is the arc's recital. Exercise 1 made you legible (`brand/`), 2 found the target, 3 defended the data, 5/5B made the recipe conductor-ready, 6 named it and positioned it. 6A is where all of that becomes a *pitch a stranger can follow in eight minutes* — and the discipline that separates it from every other midterm deck is that yours can be audited claim by claim back to a file you attested. The pitch is fluent. The trace is what makes it trustworthy.
