# Exercise Eight — Brand-Aligned Digital Presence, Shipped

**Course:** INFO 7375 Branding & AI · backs **Assignment 8** (Brand-Aligned Digital Presence)
**What you'll build:** the live thing — a responsive brand website, a color-accessibility check, a LinkedIn header, three AI brand visuals, and two resumes (ATS + visual) — by **conducting Madison's tools** to write the specs, the prompts, and the verified content, then **building, generating, and deploying yourself.**
**Time:** one session for the specs and the resume render; the build/deploy is the homework after.
**You need:** your **Assignment 6** output (`brand.yml` + final name), your **Assignment 7** visual system (palette, type, logo, style guide), your **Exercise 1** `brand/resume.json`, the `nina` skill, and a build platform (Vercel v0 / Framer / Wix / Squarespace) + an AI image tool (Canva AI / Firefly / DALL·E).

The principle this exercise runs on: **first version, not final version — but a shipped first version that is unmistakably yours.** A8 is implementation. The trap isn't that the site is unfinished; it's that the site is *generic* — a template with your name dropped in, a resume any candidate could submit, a header that says nothing. The discipline that closes it is the same one that's run through every Madison exercise: **every visual choice traces to your A7 brand system, and every line of the resume traces to the attested `resume.json`.** Functional over flawless. But coherent over decorative. Ship it — and ship *yours*.

The division of labor is the whole lesson, again. **Madison does the Tier-1 work** — the wireframe IA, the palette and type spec, the image-*generation prompts*, and the *verified resume content*. **You do the irreducible work** — building the site, deploying it, generating and choosing the images, laying out the resumes, and judging whether the whole digital presence coheres. Don't ask Madison for a finished website or a finished resume image. Ask it for the spec and the verified facts you build from.

---

## Command → deliverable map

| A8 deliverable (points) | Madison tool | What it gives you |
|---|---|---|
| **Website — sections + IA (35)** | Nina `/n10 wireframes` | the five-page IA, per-page job · hero · blocks · CTA · exit-risk, the user-flow, and the **Vercel v0 / Framer / Wix platform comparison** |
| ↳ the brand system the site implements | `/n8 palette` + `/n11 styleguide` | hex palette + Google-Fonts type + logo-usage rules to build into the theme |
| ↳ the build scaffold (if you go the Vercel/v0 route) | **`templates/wrap-your-tool`** (Exercise 5A) | a working responsive Next.js deploy scaffold — you drop your brand theme into it |
| **Color accessibility check (5)** | `/n8` (WCAG built in) + **`scripts/contrast-check.mjs`** | a palette whose text/bg pairs already pass — check the ratios locally, then confirm in WebAIM and screenshot |
| **LinkedIn header (15)** | `/n7 visual` + `/n9 logo`-style prompts | the visual world + ready-to-run AI-generation prompts; you generate at 1584×396 |
| **AI brand visuals (15)** | `/n7 visual` | the three scenes / metaphor that make the visuals a *family*, not three unrelated pictures |
| **ATS resume (15)** | **`brand/resume.json`** + **`scripts/build-resume.mjs`** | the *verified content* — `build-resume` renders ATS PDF+Word + a visual PDF from it, and **refuses while any gate is open**; you keyword-target + polish |
| **Visual resume (15)** | `brand/resume.json` + `/n8` | same verified content, full visual system + headshot |
| **Finalize / quality** | `/n12 critique` → `/ready` | gap-find and a 0–100 readiness score before you submit |

**The honest caveat — what Madison does *not* do:** it does not generate images, and it does not render your resume to a finished PDF. Nina writes the *generation prompts*; you run them in Canva/Firefly and choose. `resume.json` holds the *verified content*; you lay it out in your resume builder. The pixels and the deploy are your work — that's the judgment the course says can't be delegated.

---

## Move 0 — Point Madison at your A6 + A7

Open the `nina` skill and feed it everything you've already locked, so A8 *implements* your brand instead of inventing a new one:

> *Here is my brand.yml + final name (A6), my A7 visual system (palette, type, logo, style guide), and my brand/resume.json. We're doing Assignment 8 — the live build. Start at `/n10`.*

If your A7 visual system is thin, run `/n7`→`/n11` first to firm it up. Everyone else starts at the wireframes.

## Move 1 — The website (Part 1, 40 pts)

```
/n10     # five-page IA + user-flow + the platform comparison
/n11     # the style-guide rules you'll build into the theme
```

Pick your platform from `/n10`'s comparison. **If you go Vercel v0 / Next.js, start from `templates/wrap-your-tool`** (the Exercise 5A scaffold) — it's already responsive and deployable; you drop your `/n8` palette and `/n11` rules into the theme instead of starting from a blank box.

Build the four required sections, each **implementing your A7 system** (no placeholder grey boxes where your brand should live):

- **Hero** — name/brand, role or value proposition, one clear CTA.
- **Projects/Products** — minimum three, each with title, image, description. (Pull the three from `resume.json`'s `projects` — they're already your verified, best work.)
- **About** — your story or the company narrative (the Hero's-Journey / Quest frameworks from the brief are fair scaffolds here).
- **Contact** — professional contact + one clear action.

**Your gate — the mobile test:** open it on your phone. *If it's broken on mobile, it's not done.* Responsive is graded.

## Move 2 — Color accessibility check (Part 1, 5 pts) — the one required doc

`/n8` already gave you a WCAG-checked palette, so this should pass by construction. Check it locally first — the machine half of the deliverable:

```bash
node scripts/contrast-check.mjs --pair "#111111" "#FFFFFF"   # each real text-on-bg pair (exit 1 = fails AA)
node scripts/contrast-check.mjs your-palette.json            # or score every pair in a palette file at once
```

Then take each **text-on-background pair** your site actually uses, run it through **WebAIM** (https://webaim.org/resources/contrastchecker/) for the submission proof, and screenshot the result. Any pair that fails — fix the shade in your theme and re-check. Collect the screenshots into one **PDF**.

This is the assignment's *only* required written deliverable, and it's the course's accessibility principle made mechanical: don't trust that it *looks* readable — check the ratio.

## Move 3 — LinkedIn header (Part 2, 15 pts)

```
/n7      # the visual world: scenes, metaphor, visual hard-nos
/n9      # logo direction + the AI-generation prompt pattern
```

Take `/n7`'s visual direction + `/n9`'s prompt pattern into **Canva AI / Adobe Firefly / DALL·E**. Generate a header at exactly **1584 × 396 px** that carries your colors/type, includes your value proposition or tagline, and **works alongside your profile picture** (mock it up with your headshot in the corner before you commit). Keep it clean — headers heavy with text get ignored. Deliver the PNG/JPG **in a PDF**.

**Your gate:** iterate. The first generation is rarely the one. Generate, adjust the prompt, regenerate — and write one line on *why this one*.

## Move 4 — AI brand visuals (Part 2, 15 pts)

Using `/n7`'s **three scenes / metaphor** as the brief, generate **three** brand-aligned visuals for your site that represent your expertise, industry, values, or your startup's offering. The graded property is **family resemblance** — same palette, same visual logic, same world. Generate from one consistent prompt skeleton (vary the subject, hold the style) so they belong together. Deliver the three **in a PDF**.

**Your gate — the family test:** lay the three side by side. Could a stranger tell they're one brand? If one is an orphan, regenerate it against the other two.

## Move 5 — ATS resume (Part 3, 15 pts) — built from `resume.json`

This is the payoff of Exercise 1. Your **`brand/resume.json` is the verified content**; render it deterministically:

```bash
node scripts/build-resume.mjs brand/resume.json --out-dir brand/resume-out --accent "#C8102E"
```

`build-resume` produces **`resume-ats.pdf` + `resume-ats.docx`** (single-column, ATS-parseable) **and `resume-visual.pdf`** (branded with your accent) — *from one source*, so the two resumes can't tell different stories. Then your human work: **keyword-target** the ATS version for your specific roles (pull from `experience` + `skills_top`, phrased to match the postings), and keep the brand **subtle** — accent color and font, nothing that breaks the parse. Submit **PDF + Word**.

**Your gate — you cannot ship a resume built on conflicting facts, and the tool enforces it.** `build-resume` **refuses to render** while any `_human_gate` is open, any `issues[].resolution` is null, or any field still carries a `[CONFLICT]`/`[Unverifiable]` tag — it prints exactly what's unresolved and exits. The PhD-described-three-ways and the unverified MBA have to be fixed in Exercise 1 *first*. A polished resume on contradictory credentials is exactly the fluent-but-untrustworthy artifact this course exists to catch — and it's the one document where it gets you caught. (Check the gate without rendering: `node scripts/build-resume.mjs --check`.)

## Move 6 — Visual resume (Part 3, 15 pts)

Same verified `resume.json` content, full visual system. Research **Pinterest** for layout inspiration first. Then build (Canva/Figma) with your **complete `/n8` palette + type**, your **headshot or brand image**, and a hierarchy that's **scannable in six seconds** (the recruiter's actual budget). Deliver **PDF**.

**Your gate — the trace audit:** every visual choice (color, font, the layout emphasis) points to a brief line or your archetype. The six-second test *is* the hierarchy test — if the eye doesn't land on your strongest line first, re-rank.

## Move 7 — Finalize + log

```
/n12     # critic mode: find the gaps in cohesion across all six deliverables
/ready   # 0-100; 80+ before you submit. Below 80, it names the two fixes.
```

One `logs/RUN_LOG.md` entry: which Nina commands you ran, your platform pick and why, your live URL, your `/ready` score, whether `resume.json`'s gate was clean before you rendered, and the one design choice across the whole presence you can trace most cleanly back to your A7 system.

---

## Grading — 100 points (80 core + 20 quality)

**Core — 80 points, itemized:**

| # | Deliverable | Pts |
|---|---|---|
| 1 | **Website draft** — live, responsive, four sections, implements A7 logo/palette/type/style; mobile not broken | 35 |
| 2 | **Color accessibility check** — WebAIM screenshots of your real text/bg pairs, as PDF | 5 |
| 3 | **LinkedIn header** — 1584×396, brand system, tagline, works with profile pic, as PDF | 15 |
| 4 | **AI brand visuals** — three, visually a family, represent your expertise/mission, as PDF | 15 |
| 5 | **ATS resume** — single-column, keyword-targeted, subtle brand, **content traces to `resume.json`**, PDF + Word | 15 |
| 6 | **Visual resume** — full visual system, headshot, 6-second scannable, PDF | 15 |
| | **Core total** | **80** |

**Quality / portfolio — 20 points, ranked by cohesion** (relative, capped): does the whole digital presence feel like *one* brand across all six touchpoints (the anti-generic test)? Could a stranger predict your website's palette from your LinkedIn header? Does the visual resume look like the same person made the site? Top 25% → 20 · 51–75th → 15 · 26–50th → 10 · bottom 25% → 5.

**Bonus (+5):** one additional touchpoint with exceptional system integration — email/blog template, a 3+ post social series, or a pitch-deck template (your `madison-pitch` / `slides-deck` output from Exercise 6A qualifies if it carries the A7 system).

---

## What can go wrong

| Symptom | What it means | Fix |
|---|---|---|
| The site looks like a template with your name on it | the theme doesn't implement A7 | build `/n8`'s palette + `/n11`'s rules into the theme; kill every default grey box |
| It's broken on your phone | responsive not tested | the mobile test is a gate, not a nicety — fix before you submit |
| The three visuals don't look related | generated independently | one prompt skeleton, vary the subject, hold the style; regenerate the orphan |
| The ATS resume won't parse | multi-column or logo-heavy | single column; brand lives in the accent color and font, not the layout |
| Two resumes, two different stories | rendered from memory, not `resume.json` | both render from the *same* verified content — only the layout differs |
| You shipped a resume with the credential conflict still open | skipped the `resume.json` gate | resolve the `_human_gate` / `[CONFLICT]` / `issues` first; *then* render |

## Before you submit — check it

```bash
node scripts/conformance.mjs brand/resume.json brand/brand.yml   # well-formed
node scripts/build-resume.mjs --check                            # the gate: refuses while resume.json is unresolved (must be clean to render)
node scripts/contrast-check.mjs --pair "#yourtext" "#yourbg"     # each real text/bg pair passes AA (exit 1 = fail)
```

Then, by hand: run **WebAIM** on every real text/bg pair (the required PDF) · open the site **on your phone** · lay the LinkedIn header, the three visuals, the site, and the visual resume **side by side** and run the **trace audit** — every choice points to your A7 system or it's the generic one to fix. The machine checks that your content is well-formed and your credentials are reconciled; whether the presence is *coherent and yours* is the human gate, and it's the whole point. Full guide: `docs/exercises/HOW-TO-CHECK.md`.

**Lifecycle note:** A6 named and positioned the brand; A7 made it something you can see; A8 makes it something the world can *visit*. Madison is the through-line the whole way — `/n1`–`/n5` ran in A6, `/n6`–`/n11` in A7, and here they cash out as a live site, a header, and a brand family. And the resume closes the longest loop in the course: the `brand/resume.json` you attested in **Exercise 1** — caught conflicts and all — is finally the thing that gets you the interview. AI drafted the specs and the prompts. You built, generated, and shipped. The trace is what makes the presence trustworthy — and yours.
