# Exercise One — Your Brand's Personal Layer

**Course:** INFO 7375 Branding & AI · backs **Assignment 1** (every rubric line gets a checkable artifact)
**What you'll build:** a `brand/` folder in your Madison fork — `resume.json` (your attested record), `brand.yml` (your aspiration, audience, and positioning), `gaps.md` (the delta, mapped to Madison builds) — plus your Figma board *reconciled against them* (snapshotted if you have one, hand-built if you don't).
**Time:** one sitting for the layer; the board step is ten minutes.
**You need:** a CLI agent (Cowork, Claude Code, or Codex), your Madison fork cloned, your current resume or LinkedIn profile.

The principle this exercise runs on (from `MYCROFT.md`): the agent does the extraction, drafting, and research; **you** do the attesting, choosing, and signing. The Figma board everyone sees is the *report*; the files in `brand/` are the *truth* it renders. Two customers, one source.

---

## Step 0 — Privacy first, honesty protected

```bash
mkdir -p brand
echo "brand/private-reflection.md" >> .gitignore
```

Your `brand/` folder is *meant* to become public — that's what a brand is. **Except one file:** `brand/private-reflection.md`, where your honest 1–5 self-ratings and raw gap admissions live. Personal reflection works only when it's safe to be honest, so it stays out of git. (It can still be *combined* — with other instruments, or anonymously at cohort level — but that's your call, later, not a default.) Everything else in `brand/` is written knowing a stranger may read it.

## Step 1 — resume.json: create or import, then catch the errors

Point your agent at your resume (PDF, docx) or LinkedIn profile (export or screenshot — Assignment 1 Part 3 wants the screenshot anyway) and have it extract to `brand/resume.json`: one record per job, project, degree, skill, publication, link — dates, names, verifiable details as fields.

Then the attestation pass, kept light for week one: **find the three things the import got wrong about you.** There will be at least three — a date shifted, a title "improved," a skill inferred from a course you barely passed. Fix them, then mark the file attested with today's date. The lesson is the course's thesis in miniature: *extraction is fluent; you are the source of truth.* (Same `resume.json` convention as the other Mycroft-governed projects — if you also build a job-search layer elsewhere, it's one record, two uses.)

**Artifact:** `brand/resume.json`, attested, with a one-line note of the three errors you caught.

## Step 2 — brand.yml: the aspiration, the audience, the position

Answer your agent's intake — facts, not vibes:

```
Q1  ASPIRATION. "In one sentence: what are you becoming?"
    Not your degree — the professional identity. "Financial engineer at a
    quant fund," "PhD student headed for an ML research lab," "freelance
    brand-systems contractor." This single answer drives everything below.
Q2  AUDIENCE. "Who must notice you for that to happen?"
    (recruiters / hiring managers / admissions committees & PIs / clients /
    a field's practitioners) — pick what's true, not what's flattering.
Q3  POSITIONING (the Dunford frame, adapted to people — cite: April
    Dunford, *Obviously Awesome*, positioning as context-setting):
    - Competitive alternatives: who would they consider if you didn't exist?
    - Unique attributes: what do you have that the alternatives don't?
    - Proof: which resume.json entries back each attribute? (No entry → it's
      an aspiration, not an attribute — it goes to gaps.md, not brand.yml.)
    - Who cares most: which slice of Q2 values your uniqueness highest?
Q4  OPTIONAL INSTRUMENTS. If you want a brand-archetype or personality
    self-test as a reflection prompt, use one — and label it for exactly
    what it is: "a Jungian-archetype self-test" / "an X-style instrument."
    These are widely used in branding and, like everything, imperfect:
    contested validity, no predictive guarantees. Cite the instrument,
    keep the output in private-reflection.md, and let it inform — never
    dictate — your brand.yml answers.
```

**Artifact:** `brand/brand.yml` — aspiration (verbatim, your words), audience, the four positioning fields each with proof pointers into resume.json.

## Step 3 — Target media: derived from your aspiration, never named from habit

Here's the trap this step exists to avoid: asked for target media, every student writes "LinkedIn, Instagram, a website." Asked for target *companies*, every job-seeker writes the same 20 names. The fix is the same in both cases — **derive the list from evidence keyed to your aspiration**, because you may genuinely not know where a financial engineer is discovered versus a PhD applicant versus a contractor. They are *different ecosystems*:

1. **Mine your job postings** (Assignment 1 Part 1B's 3–5 postings — or program listings, or client briefs, matching your Q1): where do they look? Is a GitHub expected? Published writing? Talks? A portfolio with case studies?
2. **Have the agent research your aspiration's actual discovery channels** — with a citation for every suggestion. More information is better *when the source is named*: "quant roles weight GitHub + SSRN/arXiv preprints + specific forums [source]" is usable; "be active online" is not.
3. **Optionally point a Madison monitor at your field** — the social-media-RSS or brand-reputation recipes pointed at "where does conversation in X actually happen" make the media list *measured*, and you've dogfooded the framework in week one.

Then **you prune, with reasons.** Each kept medium gets one line: what it's for in *your* system (discovery, proof, voice), and what "winning" there looks like. Each rejected suggestion keeps its rejection reason — that's a record of judgment, and it's gradeable.

**Artifact:** the `media:` section of `brand.yml` — each target with its cited reason and its job.

## Step 4 — gaps.md: the delta, mapped to Madison builds

Now the agent compares your attested record (Step 1) against what your aspiration and media targets demand (Steps 2–3), and drafts `brand/gaps.md`:

| Gap | Evidence the target demands it | What I have | **Madison build that would close it** | Plan |
|---|---|---|---|---|

The fourth column is this exercise's reason for existing. For each gap, name the Madison component — existing recipe to extend, or missing tool to build — whose construction would *be* the closing of the gap: portfolio piece, demonstrated skill, and framework contribution in one act. **Your top row is your Assignment 1 Part 2 project proposal** — derived from evidence, not picked from a menu. Write the 150–200-word proposal directly from it.

The migration rule, which runs all semester: a gap closes only with evidence (the build shipped, the piece published to its target medium) → the evidence becomes a new attested `resume.json` entry → the gap row is deleted. Your gaps file is a place things *leave*.

**Artifacts:** `brand/gaps.md` (agent draft + your edits — kill one wrong row, rewrite one in your own words) and the project proposal.

## Step 5 — The board: snapshot it, or build it

Most of you already have an Assignment 1 Figma board — built before your `brand/` files existed. Don't rebuild it. This step is ten minutes either way:

**Have a board?** Capture it as-is: a dated screenshot saved to your fork (`brand/board-snapshot-YYYY-MM-DD.png`) plus the board link. Then one reconciliation pass: every claim on the board either gets a pointer to the `brand/` artifact that backs it, or gets *flagged as untraceable*. Don't fix the board yet — just flag. A claim with no file behind it is decoration claiming to be evidence, and your board almost certainly has some, because the board came first and the truth came second.

**No board yet?** Hand-build the minimal version from your files: the introduction card renders `brand.yml`; the skills visualization renders `resume.json` + `gaps.md` (public columns only); the project proposal renders the top gap row; the baseline section holds the LinkedIn screenshot your import came from.

Either way, log it for what it is: a **snapshot** — a manual copy (or a pre-existing artifact) that was accurate at capture and drifts the moment a gap closes or a resume entry lands. In Exercise 1A, Madison learns to check the board against `brand/` automatically; the untraceable claims you flagged today become its first test data.

## Step 6 — Log it

One entry in your fork's `logs/RUN_LOG.md`: what was built, the three import errors (briefly), the top gap, the proposal. No private-reflection contents.

---

## Grading — 25 points

**Mechanics — 20 points, itemized.** Each line is independently checkable, so partial completion earns partial credit (the breakdown exists for exactly that case):

| # | Mechanical component | Pts |
|---|---|---|
| 1 | `brand/` folder created; `private-reflection.md` gitignored and verified | 1 |
| 2 | `resume.json` created or imported — structured records, not pasted prose | 3 |
| 3 | Attestation pass: the three import errors found, fixed, and noted; file marked attested | 2 |
| 4 | `brand.yml`: aspiration stated in the student's own words; audience named as facts | 2 |
| 5 | `brand.yml`: four positioning fields complete, each attribute with a proof pointer into resume.json (unproven attributes correctly moved to gaps) | 2 |
| 6 | Media targets *derived*: evidence-based list where every suggestion carries a cited source | 2 |
| 7 | Media targets *pruned*: each kept medium has a job and a win condition; each rejection has a reason | 2 |
| 8 | `gaps.md` drafted with evidence columns filled | 1 |
| 9 | Madison-build column answered for **every** gap; top row written up as the 150–200-word project proposal | 2 |
| 10 | Required gap edits done: one wrong row killed with a reason, one row rewritten in the student's own words | 1 |
| 11 | Board snapshotted (dated, in the fork) or hand-built; every board claim traced to a `brand/` artifact *or flagged as untraceable* | 1 |
| 12 | RUN_LOG entry: what was built, the three errors, the top gap, the proposal (no private contents) | 1 |
| | **Mechanics total** | **20** |

**Glimmer — 5 points, ranked by depth of reasoning.** Graded by the TA and/or professor on the five dimensions across the artifacts — *WHY* (was the aspiration framed before media were chosen?), *usefulness* (would this plan survive the student's actual life?), *mechanism* (does the gap→Madison-build chain hold causally?), *defensibility* (is "why not just LinkedIn?" answered; do the prunes have real reasons?), *specificity* (named deliverables, dates, and success conditions — never "be active").

These points are **relative and capped**:

| Band | Pts |
|---|---|
| Top quartile of the cohort's reasoning depth | 4–5 |
| Second quartile | 3 |
| Third quartile | 2 |
| Bottom quartile | 0–1 |

**The cap:** depth is an absolute floor under the bands. If the whole cohort turns in low-effort glimmers, everyone lands at 1–2 — being the best of a shallow pool does not earn 4–5. The mechanics points reward doing the work; these five reward *thinking* visibly better than the work strictly required, measured against the room.

*(Instructor's option, per the Glimmer framework: before the 5 points are graded, an AI reviewer asks each student one targeted question at their weakest dimension, and the grade lands on the revision.)*

## What can go wrong

| Symptom | What it means | Fix |
|---|---|---|
| Your media list could be anyone's | aspiration (Q1) too vague — "get a good job" derives nothing | sharpen Q1 until the ecosystems differ |
| Every brand.yml attribute lacks a proof pointer | you wrote aspirations as attributes | move them to gaps.md — that's what it's for |
| The archetype test result drives the whole brand | a labeled self-test treated as science | it's a reflection prompt with a citation, not a verdict |
| Agent's media suggestions have no sources | research is vibes | send it back: every suggestion cites or dies |
| Figma board has claims no file contains | decoration posing as evidence — expected, since most boards predate the files | flag it now; Exercise 1A's audit automates this check, then you add the file entry or cut the claim |
| Madison-build column is empty | gaps written as self-improvement only | every gap gets asked: "what would I *build* to close this?" |
