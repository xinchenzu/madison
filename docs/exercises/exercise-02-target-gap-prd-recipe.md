# Exercise Two — Target, Gap, PRD, Recipe

**Course:** INFO 7375 Branding & AI · guest-lecture exercise · backs **Assignment 2** ("Plan Your Madison Project Like a Pro")
**Format:** I run this **live in class** on my own example, start to finish. You have the recording. You have one week to do the same on *your* record.
**What you'll build, in one sitting:** a primary `targets.json` (your dream job, captured and SOC-mapped), a re-keyed `gaps.md` (the join, audited), a `PRD.md` (the build argued from your evidence), and a Madison recipe at `status: DRAFT` (the architecture — specified, not yet run). The board renders all four; your Exercise 1A board-audit recipe re-runs to prove it.
**Time:** one sitting (≈ the class session); cleanup at your pace within the week.
**You need:** Exercise One done (`brand/` exists), Exercise 1A done (you have a `board-audit` recipe), a CLI agent, your Madison fork, awareness access to the-reallocation-engine (for the O*NET/SOC pattern).

The spine, four times over (from `MYCROFT.md`, P1): **the machine captures and runs; you select, attest, and argue.** Extraction, mapping, and table-joins are conformance — the machine does them better and won't fudge. Which O*NET code is right, which three requirements matter, why this build for you, what you *won't* build — those are yours. Watch where, in the live run, I hand work to the agent and where I take it back. That handoff is the whole lesson.

---

## Move 1 — Target: capture one, map it, sign it (A2 Part 1)

Pick **one** real posting you could apply for in 6–12 months — promote it from the 3–5 you already mined in Exercise One, or find a new one (with a reason). Then the split:

**The agent captures (machine layer).** Point it at the posting and have it write a record into `brand/targets.json`: company, exact title, url, **and a dated screenshot to `brand/targets/`** — because postings die, and a target whose only evidence is a dead link is an untraceable claim by midterm (the Canvas-export lesson again). It pulls *every* requirement (`requirements_full`, not a cherry-picked three) and **maps the title to a SOC code and its O*NET occupation**, pulling the standardized skills. (See `examples/targets.json` for the shape.)

**You select and sign (human layer).** Three acts the agent cannot do for you:
1. **Attest the SOC code.** The agent proposes one; you confirm it against the actual posting. A "Machine Learning Platform Engineer" maps to Systems Engineer *or* Data Scientist and only you, reading the posting, know which — in my live run, the agent guesses Data Scientist and I correct it to Systems Engineer because the posting is infra-weighted. Set `soc_attested: true` only when you've actually checked.
2. **Pick the `top_3`** from the full list, each tagged with the O*NET skill it satisfies — selection is judgment.
3. **Write `why_this_role`** in one sentence, your own words. This is the human annotation the assignment asks for.

> **Why O*NET/SOC, and why it pays off later:** a posting is one noisy, dying instance; the SOC occupation behind it is verified and permanent. Mapping to it means your *gaps* (Move 2) key to a standard skill taxonomy, not one company's phrasing — so "needs orchestration tooling" becomes "needs O*NET *Programming* at this occupation's level," which is comparable across every posting in your lane and survives this posting's death. This is the reallocation engine's move (you have awareness access to it): noisy instances → verified standardized backbone. Start with one; the file is built to accumulate. Over later sessions, N captured listings mapped to the same codes converge into a `canonical_profile` — and *that* aggregate is what your gaps eventually key to. One posting is an anecdote; a SOC-keyed aggregate is data.

**Artifacts:** `brand/targets.json` with one `primary` target — machine-captured, SOC-mapped, `soc_attested: true`, `top_3` and `why` in your words; the dated screenshot in `brand/targets/`.

## Move 2 — Gap: run the join, audit every row (A2 Part 2)

A2 asks for a *They Want | I Have | Gap | Madison Could Help By* table. **You do not type this table. The machine runs it; you audit it.** It's a join:

- *They Want* = `targets.json` (the O*NET-keyed requirements)
- *I Have* = `resume.json` (your attested record from Exercise One)
- *Gap* = the rows where a demand has no covering attestation
- *Madison Could Help By* = the gaps→build mapping

Have the agent join targets × resume and draft the table into a re-keyed `gaps.md`. Hand-filling it is busywork the machine does better and won't fudge. **Your graded work is the audit, and it cuts in three directions — this is the lesson:**

1. **Over-claim.** The join sees "React" in a course title and writes *I Have: React* — but you barely passed that module. Only you can downgrade it; the truth is in your head, not the file.
2. **Under-claim → close it the right way.** A real skill never made it into `resume.json`, so the gap is false. Don't just delete the row — *add the attested resume entry*, and the row dissolves on its own. (Migration rule, live.)
3. **Mis-map.** "Madison could help by building X" that wouldn't actually close the gap — rewrite it or kill it with a reason.

This is your Exercise 1A board-audit pattern pointed at a *derived table*: agent proposes every row, you adjudicate every row, and the row isn't done until you've signed it. Two honest reckonings will surface — some Exercise One gap rows won't survive a real posting (they die, with a reason), and the posting will demand things no row covered (new rows, target-cited). Key each surviving row to a `targets.json` entry **and its O*NET skill**, so it's portable when this posting dies.

**Artifact:** re-keyed `brand/gaps.md` — every surviving row cites a target requirement and its O*NET skill; at least one row corrected in each direction it actually occurs.

## Move 3 — PRD: argue the build from your evidence (A2 Part 3)

Now write `brand/PRD.md` — the four sections A2 asks for (Problem, Solution, User Stories, Success Metrics). But the hard rule: **the build is not whatever you want.** It is the build that fits *who you are* (`resume.json`), *what you want to become* (`brand.yml`), and *what your dream job actually demands* (`targets.json`). It can be fun; it must not be justified *by* being fun. The PRD's spine is one claim you have to win:

> *"Given my attested record, my stated aspiration, and what this target occupation actually demands — **this** build is the right move for **me**, now."*

So each section is evidence-bound, derived from Moves 1–2:
- **Problem** = a real problem the **target occupation** faces (Move 1's target + its O*NET context) — not a problem you find personally cool.
- **Solution** = the **Madison build that closes a gap you actually have** (Move 2's top row). The "why Madison vs. alternatives" is really *"why this build, for me, toward this target, vs. the other things I could build"* — positioning (the Dunford frame, your build as the product, your target as the market).
- **User Stories** = written from the **target occupation's** roles, not invented personas. Format: *"As a [role], I want [feature] so that [benefit]."*
- **Success Metrics** = how you'd know **this specific gap** closed.

**The metric provenance rule — this is the fluency trap, named.** A PRD is where AI most wants to invent confident numbers ("reduces review time 40%", "73% of teams report…"). They read like a real PRD and they are exactly the fluency the book's first page warns about. So (P3, *provenance or it isn't evidence*): **every metric is labeled as one of two kinds** —
- a **cited fact about the world** (the problem's cost — needs a real, named source, or it's `[NEEDS SOURCE]` and cut), or
- a **projected target** (what your build aims to achieve — a hypothesis, never dressed as a measured result).

The agent never invents a statistic. If it can't cite one, it writes `[NEEDS SOURCE]` and you find a real source or downgrade the claim to a labeled target. Conflating "73% of brands fail X [study]" with "my tool will cut errors 50% [my guess]" is the exact error this move grades against.

**The failure mode this move grades against** is the *fun-but-orphaned build* — a slick PRD for something with no connection to your gap or target. It fails the argument even with every section present, because the chain (who I am → what I want → what they demand → therefore this build) doesn't hold.

**Artifact:** `brand/PRD.md` — four sections, each traceable to your target/gap; every metric labeled cited-fact-with-source or projected-target; the build defensible as *yours*.

## Move 4 — Recipe: spec the architecture as a DRAFT (A2 Part 4)

The Technical Architecture is **a recipe — or a pre-recipe: the outline of a recipe that does not run yet.** That's Madison's native lifecycle. Write `recipes/<your-project>.md` with real lifecycle frontmatter and park it at `DRAFT`:

```yaml
---
status: DRAFT          # DRAFT | SPECIFIED | RUNNABLE-SAMPLE | RUNNABLE-LIVE | VERIFIED
todos_open: 0
last_gate: null
attestation: null
recipe_version: 0.1.0
---
```

The A2 fields map onto the recipe's body:

- **Agent design + how they communicate** = the recipe's steps and, crucially, the **typed data contract between them**. The Excellence ask ("data schema/format between agents") is P2 (*verified data structurally*): show the schema of what agent A hands agent B — fields and types — not "passes stuff along." Shown, it's auditable; prose, it's a wish.
- **MVP scope + what you WON'T build** is the most important part of this move. Naming what you won't build is the recipe's **scope boundary** and the direct analog of the attestation's mandatory *"Did not test."* A recipe that claims to do everything is a thin-tested recipe. *"Week-3 build does the one ingest→classify→report path; it will NOT handle auth, rate limits, or live posting yet"* is exactly the judgment this course grades — **scope honesty is signal, not incompleteness.**

**The node-provenance rule (the metric trap, in technical clothing).** "Specific n8n nodes you researched" is where the agent invents `n8n-nodes-base.doesExactlyWhatINeed`. Madison's own `pantry/n8n-provenance/` holds real n8n-derived workflows — real node types you can cite: `scheduleTrigger`, `httpRequest`, `rssFeedRead`, `code`, `set`, `if`, `merge`, `googleSheets`, `respondToWebhook`, `openAi`. **Every node you name must actually exist** — cited from the pantry or n8n's catalog — and you attest it, the same move as `soc_attested`. A short list you verified beats a long list the agent confidently made up.

This is the payoff of the whole session: you leave with a **real Madison recipe at `DRAFT`** — derived from your evidence (Moves 1–2), justified by your PRD (Move 3), scoped honestly (Move 4). The 48 anonymous DRAFT recipes in the repo get company: one you own and can promote when you build it.

**Artifact:** `recipes/<your-project>.md` at `status: DRAFT` — named agents with specific jobs, a typed inter-agent data contract, an MVP scope with an explicit WON'T-build list, and only real, attested n8n nodes.

## Move 5 — Render and verify the board

Render all four moves onto your Assignment 2 Figma board (target card, gap table, PRD sections, architecture diagram). Then — the loop — **re-run your Exercise 1A `board-audit` recipe**: every new board claim must trace to a file in `brand/` or `recipes/`. The recipe you wrote in week two is now your standing drift check; this is run #2 on changed data. Resolve any untraceable claim (add the file entry or cut the claim).

## Move 6 — Log it

One entry in your fork's `logs/RUN_LOG.md`: the target and its SOC code, gap rows corrected (and in which direction), the build you argued for, the recipe status, board-audit result. No tokens, no private-reflection contents, no third-party contact details.

---

## Grading — 25 points

**Mechanics — 20 points, itemized** (each independently checkable; partial completion earns partial credit):

| # | Mechanical component | Pts |
|---|---|---|
| 1 | `targets.json`: primary target captured (machine) — company, exact title, url, dated screenshot artifact in the fork | 2 |
| 2 | SOC/O*NET mapping present; `top_3` selected by you; `why_this_role` in your own words; **`soc_attested: true`** (code confirmed against the posting, not just accepted) | 2 |
| 3 | Gap table **run** by the agent (targets × resume join — not hand-typed) | 2 |
| 4 | Gap table **audited**: every row adjudicated; corrected in each direction it occurs (over-claim downgraded / under-claim closed by adding a resume entry / mis-mapped build fixed) — none left as the agent's unreviewed proposal | 3 |
| 5 | `gaps.md` re-keyed: surviving rows cite a `targets.json` entry **and its O*NET skill** | 2 |
| 6 | PRD: four sections present **and derived** — problem is the *target's*, solution is the *gap-closing* build (not a free-choice project) | 2 |
| 7 | PRD provenance: every metric labeled **cited-fact (sourced)** or **projected-target**; zero unsourced numbers presented as fact | 2 |
| 8 | Architecture recipe at `DRAFT`: agents named with specific jobs + **typed data contract** between them | 2 |
| 9 | MVP scope with an explicit **WON'T-build list** (scope honesty graded as signal) | 1 |
| 10 | n8n nodes named are **real** — cited from `pantry/n8n-provenance/` or n8n's catalog — and attested | 1 |
| 11 | Board renders all four moves from the files; `board-audit` recipe re-run, new claims traced; RUN_LOG entry | 1 |
| | **Mechanics total** | **20** |

**Glimmer — 5 points, ranked by reasoning depth**, weighted toward the one part that is pure judgment — **the PRD argument's defensibility**: *can you answer "why this build, for you, now?" with evidence (resume + target + gap) rather than enthusiasm?* Plus the other dimensions as they show up: *WHY* (was the problem framed from the target before the solution was chosen?), *mechanism* (does the gap→build→recipe chain hold causally?), *specificity* (real nodes, real metrics-with-sources, a real WON'T list), *usefulness* (would this recipe survive the build week?).

Same bands and cap as Exercises One and Two:

| Band | Pts |
|---|---|
| Top quartile of the cohort's reasoning depth | 4–5 |
| Second quartile | 3 |
| Third quartile | 2 |
| Bottom quartile | 0–1 |

**The cap:** if the whole cohort turns in shallow work, everyone lands at 1–2 — being the best of a shallow pool doesn't earn 4–5. *(Instructor's option, per the Glimmer framework: one targeted AI question at your weakest dimension — almost always the PRD defense — and the grade lands on the revision.)*

## What can go wrong

| Symptom | What it means | Fix |
|---|---|---|
| The gap table was typed, not run | you did the machine's busywork and skipped the audit (lines 3–4) | have the agent run the join; spend your time adjudicating rows |
| Every gap row accepted as proposed | the audit was skipped — at least one will be wrong in each direction | downgrade an over-claim, close an under-claim by adding a resume entry, fix a mis-map |
| The build is cool but unrelated to your gap | fun-but-orphaned — the chain doesn't hold | re-derive: problem from the target, solution from the top gap row, or pick a build that does |
| A PRD metric with no source, stated as fact | the fluency trap — a confident invented number | source it or label it a projected target; `[NEEDS SOURCE]` until then |
| `soc_attested: true` but you never checked the code | attestation without verification — the resume-import error, one tier up | read the posting, confirm or correct the SOC code, then sign |
| An n8n node that doesn't exist | the metric trap in technical clothing | cite it from `pantry/n8n-provenance/` or n8n's catalog, or drop it |
| Recipe claims to build everything | no WON'T list = thin scope, not strong scope | name what week 3 will NOT do — that's the graded judgment |
| Board has a claim no file backs | decoration posing as evidence | the `board-audit` re-run catches it; add the file or cut the claim |
