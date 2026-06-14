# Final — Brand Portfolio Presentation, Assembled

**Course:** INFO 7375 Branding & AI · backs the **Final Exam** (Brand Portfolio Presentation — complete brand system, 200 pts + 10 bonus)
**What you'll build:** the 10-minute capstone deck that integrates *everything* — strategy, visual identity, storytelling, the live site, and the live tool — by **conducting the `slides-deck` skill → `scripts/build-deck.mjs`** to render it, `madison-pitch` to time it, and `brandy` to prove it holds together, while **you present, demo live, and own the integration.**
**Time:** one session to assemble and render the deck; then rehearse to **9:30** and make every URL live before presentation day.
**You need:** every verified artifact from **Assignments 1–10** (this is the assembly, not a fresh build), the `slides-deck` / `madison-pitch` / `nina` / `ogilvy` / `brandy` skills, `scripts/build-deck.mjs`, your **live website**, and your **live tool demo link**.

The principle this exercise runs on: **this is a demonstration of what you can do, not a summary of what you learned** — and the standard is the one every agency uses: *would this hold up in front of a client?* That standard is the whole-semester version of the discipline you've run since Exercise 1. A brand system is only as strong as its least-traceable slide: the moment one claim on screen doesn't point to something real and yours, a client feels it, and the whole thing reads as performance. So the capstone gate is the **system-level trace audit** — every slide traces to a verified artifact you already attested across A1–A10 — plus the two things that can't be faked in a live room: **brand consistency** across every touchpoint, and **demo or die** (the site is live, the tool runs in real time, no localhost, no screenshots standing in for working software).

The division of labor holds to the end. **The tools assemble and render** — `slides-deck` writes the spec, `build-deck.mjs` renders the brutalist HTML/D3 deck and the print-to-PDF, `madison-pitch` checks the timing, `brandy` audits the consistency, `nina /ready` scores it. **You do the irreducible work** — the live demo, the strategic integration, the ten minutes of presence in front of the room, and the creative risk that earns the bonus. The tools can't present. That part was always going to be yours.

---

## The assembly map — every section traces to an exercise

The final's structure follows the pro arc **Objective → Audience → Positioning → Strategy → Execution → Demo**. Each section is *already built* — you're assembling attested artifacts, not inventing:

| Final section (time) | Source exercise(s) | The artifact you already have | Tool to shape the slide |
|---|---|---|---|
| **Brand Introduction** (1 min) | A6 name + positioning · A1 brand essence | `brand.yml` positioning, the final name | Ogilvy `/tagline` (the one-slide essence) |
| **Brand Strategy** (2 min) | A6 · A2 | UVP, 3–5 pillars, ≥2 personas, competitive positioning · `targets.json` | Nina `/n3` personas, `/positioning` · `assignment6` |
| **Visual Identity Showcase** (2 min) | A7 · A8 | logo + variation, palette (hex), type system, style guide · **live site** | Nina `/n11` styleguide (the 1–2 visual slides) |
| **Brand Storytelling** (2 min) | A9 · A10 | the story arcs + named frameworks | Ogilvy `/hook`/`/emotion` (present one *in full*) |
| **Madison Tool Demo** (3 min) | A5A · A5B · the tool | **live demo link**, the recipe (the methodology) | `madison-pitch` (the demo narrative) |
| **Brand consistency** (the 40-pt spine, everywhere) | A7→A10 | every touchpoint | **BRANDY** (the cross-touchpoint matrix) |

If a cell is empty, that's the gap to close *before* the deck — and you close it by finishing the exercise, not by faking the slide.

---

## Move 0 — Inventory your verified artifacts

Stay on the path you've held all semester (A: personal brand · B: the Madison tool startup). Lay out everything A1–A10 produced: `brand/resume.json` + `brand.yml`, `targets.json`, the data defense, the recipe (A5B), the A6 name + matrix, the A7 identity system, the A8 live site + resumes, the A9 stories, the A10 publication. This pile *is* your deck — the work now is selection and assembly, not creation.

## Move 1 — Write the deck spec

```
slides-deck      # the 10-min deck, section by section, following Objective → Audience → Positioning → Strategy → Execution → Demo
```

Draft it as a `build-deck` Markdown spec: slides split on `---`, `# headline` = the assertion (one claim per slide), body = the evidence, `NOTES:` = your speaker script. Keep it to the section time budget — this is a 10-minute deck, which is roughly **10–14 slides**, not 30.

## Move 2 — Brand introduction (1 min)

Brand name + positioning statement + a **one-slide brand essence**. Pull the positioning from `brand.yml`; sharpen the essence line with Ogilvy `/tagline`. (Path B: tool name + one sentence on what it does.) One slide, one idea, no warm-up.

## Move 3 — Brand strategy (2 min)

Target audience, UVP, the 3–5 brand pillars, competitive positioning — straight from your A6 work and `targets.json`. Nina `/n3` (personas as real people) and `/positioning` keep it defensible. **Path B:** the slide that earns this section is *how your tool differs from other AI and branding tools* — the differentiation must be clear and defensible, not "we're better."

## Move 4 — Visual identity showcase (2 min)

Logo + at least one variation, palette with hex, type system — your A7 style guide condensed to 1–2 slides (Nina `/n11`). Then the **website walkthrough**: live if your nerve holds, screenshots as backup. **Path B:** show how the brand identity extends *into the tool's interface* — the through-line from style guide to product.

## Move 5 — Brand storytelling (2 min)

Present **one** A9/A10 story *in full* — name the framework, say in one line why you chose it, connect it to your brand values. This is the emotional beat of the ten minutes; don't summarize three stories, land one. (Path B: focus the story on the problem the tool solves and who it solves it for.)

## Move 6 — Madison tool demo (3 min) — demo or die

The **live** tool, running. Highlight 2–3 key features, explain the methodology powering it (your A5B recipe *is* the methodology — the four layers, the phase gates). **Path A:** show how it's part of a personal-branding practice. **Path B:** make the value proposition tangible in real time. Rehearse the exact click path; have a recorded fallback only as insurance, but the room wants to see it *work*.

## Move 7 — Render, time, and prove consistency

```bash
node scripts/build-pitch.mjs your-deck.md    # validates (10 slides, notes), runs the trace audit, then renders with the Madison preset
node scripts/conformance.mjs your-deck.md your-deck.html
```

`build-pitch` chains the checks: it flags if you're off the 10-slide budget or missing speaker notes, runs `deck-trace` on your `TRACE:` annotations (blocking the render if a slide is untraced or a reference is broken), then calls `build-deck`. Run the trace audit standalone any time with `node scripts/deck-trace.mjs your-deck.md`.
```
madison-pitch    # run the timing check — cut until it lands at 9:30, not 10:00
brandy           # consistency audit: every touchpoint reinforces one identity
/ready           # Nina's 0-100 — 80+ before you present; below 80 it names the two fixes
```

The **timing gate is real points** — practice until 9:30, because points come off for going over. The **BRANDY pass** is the 40-point Brand-Consistency criterion done to yourself: every element reinforces the brand, nothing feels out of place.

## Move 8 — Ship + log

All three live *before* you present: **slide deck uploaded**, **website URL live**, **tool demo link working**. Then one `logs/RUN_LOG.md` entry: your path, your `/ready` score, your rehearsed runtime, the live URLs, and the one slide whose claim you can trace most cleanly back to an attested artifact — and the one creative risk you're taking for the bonus.

---

## Grading — 200 points (+10 bonus)

| Criterion | Pts | What earns Exemplary | The Madison discipline behind it |
|---|---|---|---|
| **Execution** | 40 | every deliverable complete, polished; **website live** | the build tools + the "live, not localhost" gate |
| **Brand consistency** | 40 | every element reinforces the brand — nothing out of place | **BRANDY** cross-touchpoint matrix = system-level trace audit |
| **Strategic thinking** | 40 | differentiation clear and *defensible* | A6 positioning + `targets.json`, traced not asserted |
| **Storytelling mastery** | 35 | structured, emotionally compelling, brand-reinforcing | A9/A10 arc, true + named framework |
| **Creativity & innovation** | 25 | highly original; stands out | the anti-generic gate — distinct, not template |
| **Presentation & communication** | 20 | confident, organized, **within time**, engaging | the `madison-pitch` 9:30 timing gate |
| **Bonus — exceptional innovation** | +10 | does something *nobody else did* | "demo or die" — a real creative risk, not requirements-met |

The bonus is explicit that completing every requirement well earns **zero** bonus — it's reserved for the bold move. That maps exactly to the course's distinction: meeting conformance is the floor; the memorable, defensible, *yours* move is the human ceiling.

---

## What can go wrong

| Symptom | What it means | Fix |
|---|---|---|
| "It's on localhost / I'm still finishing it" | the demo-or-die gate failed | live URLs in place before you present, or Execution and Demo both collapse |
| A slide says something you can't point to | a claim that doesn't trace | system-level trace audit — every slide → an attested A1–A10 artifact, or cut it |
| The deck runs 11 minutes | timing gate failed (real points) | `madison-pitch` timing pass; cut to 9:30; one idea per slide |
| Platforms feel disjointed | brand inconsistency (40 pts) | BRANDY the touchpoints; fix the through-line before presenting |
| You completed everything well but flat | no creative risk → no bonus | the +10 is for the move nobody else made; decide what yours is |
| Storytelling is a product pitch | wrong register for the story beat | land one true story with a named framework, connected to values |
| A demo stat is unverified | provenance gap, live, in front of a client | `[VERIFY — human]` every number; only claim what's real and sourced |

## Before you present — check it

```bash
node scripts/build-pitch.mjs your-deck.md           # validate + trace audit + render (Madison preset)
node scripts/deck-trace.mjs your-deck.md            # every slide → a resolvable TRACE: (untraced/broken = exit 1)
node scripts/conformance.mjs your-deck.md your-deck.html
node scripts/to-markdown.mjs brand/resume.json brand/brand.yml   # the facts behind the slides trace here
```

Then, by hand: the **system-level trace audit** — read every slide and point its claim to an attested artifact from A1–A10 (a claim with no source is the one to cut) · run **BRANDY** and confirm the consistency matrix is labeled · **rehearse to ≤ 9:30** with the `madison-pitch` timing · confirm the **website URL and the tool demo link both resolve live** · `[VERIFY — human]` any **stat** in the deck or demo · run Nina `/ready` (80+). The machine renders the deck, checks it's well-formed, and confirms your facts are traceable; whether the *system coheres and holds up in front of a client* is the human gate — and that's the entire final. Full guide: `docs/exercises/HOW-TO-CHECK.md`.

**Lifecycle note — the whole arc, in one room.** Exercise 1 attested the facts. A2 found the gap. A3 defended the data. A5 conducted the tool and built the recipe. A6 named and positioned the brand. A7 made it visible. A8 shipped it live. A9 made it memorable. A10 gave it a home that compounds. The final is the ten minutes where you prove all of it holds together — not because you said so, but because every slide traces to something real you built, the site is live, and the tool runs while the room watches. That's the thesis of the entire course standing up in front of a client: AI did the AI-appropriate work all semester; you did the verification, the judgment, and the building; and the trace is what makes the whole system trustworthy — and yours. Ship it.
