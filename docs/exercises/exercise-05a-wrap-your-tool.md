# Exercise 5A — Wrap Your Tool (the usability divergence log)

> **v1 draft — will change after the template is tested with a cohort.** The framework choice (the fenced Vercel template vs. Gradio/Streamlit) and the exact deliverables may move; the spine — *ship it, watch a stranger use it, log the divergence between what the brief promised and what they did* — is settled.

**Course:** INFO 7375 Branding & AI · guest-lecture exercise · backs **Assignment 5A (Wrap Your Tool, Path A)**
**Format:** I run it **live** — wire the tool into the fenced template, deploy, hand the URL to a stranger, and log where their real use diverged from what my Conductor Brief promised. You have the recording; you do the same on your own tool in a week.
**What you'll build:** your Madison tool wrapped in the **fenced React/Vercel/Neon template** (`templates/wrap-your-tool/`) at a public URL a stranger can open, then a **usability divergence log** — what your Conductor Brief's Part-2 user *promised* to do vs. what three real users *actually* did — and a sharpened One Thing.
**You need:** Exercise Five done (the Conductor Brief — `brief.md` + config), Exercise Three's `data/verified/…`, the `wrap-your-tool` template, Claude Code as the conductor, GitHub + Vercel + (optional) Neon free accounts.

This is the exercise where the brief meets a reader who **won't fill your gaps charitably.** Exercise Five had the *conductor* run against your config; here the **real user is the conductor, and their confusion is the run.** "Could my Part-2 user finish without me in the room?" is "did the actuator do what the alibi promised?" one more time — now with a stranger's hands on it.

And it teaches the one habit Gradio/Streamlit structurally can't: **working inside a professional codebase you didn't write.** The template has `DO NOT TOUCH` fences with reasons. You work in your zone, respect the boundaries, and don't let the conductor "improve" the scaffold. In a real job you almost never touch everything — that's the transferable skill, and it's graded.

---

## Move 1 — Wire your tool into the fence (respect the boundaries)

Clone `templates/wrap-your-tool/`. Read its `CLAUDE.md` — that's the actuator; it tells the conductor what to touch and what to leave alone. Three files are yours:
- `lib/tool.ts` — your `ToolInput`, your `ToolResult`, the body of `runTool()` (throw plain-English errors).
- `data/sample.json` — replace with your Exercise Three verified data (or call your API in `runTool()`).
- `app/page.tsx` — one labelled input per `ToolInput` field; render the result *human-readable*, not a JSON blob.

If you use Claude Code, the instruction is: *"wire my tool into this template; obey CLAUDE.md; do not touch the fenced files."* The conductor reads working code well — give it the pattern, not a blank page. **The graded discipline is that the fences held**: the deploy is live because you didn't let the conductor "modernize" the DB driver or "upgrade" a config into a broken build.

**Artifacts:** your three edited files; the rest of the template untouched (diff shows only your zones changed).

## Move 2 — Deploy to a public URL (the actuator goes live)

Push to GitHub → import to Vercel → deploy. Add `DATABASE_URL` / API keys in Vercel env vars *only if your tool needs them* (never in code, never in chat). The bar: **a stranger can open the URL right now and use it without you.** A live URL *is* the proof the brief was buildable — Exercise Five proved the run against your config; this proves it against the public internet.

**Artifact:** the public URL; three screenshots (empty state, real run, error state — the error must be plain English).

## Move 3 — The user test: hand it to three strangers (the run)

Three real users who **match your Conductor Brief's Part-2 user** — not classmates, not family. Give the URL, say only *"I built this; I'd like to watch you use it and hear your thinking."* Then **listen — do not defend.** Note where they pause, what they re-read, what they ask, what they try that you didn't design for. At the end: *what did this help you do? what confused you? would you use it again?*

The grading rule (Nina's, kept): **a test that produced no confusion is a faked test.** Real users pause, misread labels, try things you didn't build. Zero divergence isn't an A — it's a red flag that you tested the vibe, not the tool.

**Artifact:** three structured sessions — what each *did* (in order, not what you expected), where they got confused, their closing words.

## Move 4 — The usability divergence log (the graded attestation)

This is the new artifact and the grade — Exercise Five's divergence log, pointed at a human reader instead of a config reader. For each promise your Conductor Brief made about the Part-2 user, ask: did the real user *do that*? Three verdicts:

| Promise (from `brief.md` / Part 2) | What the real user actually did | Verdict |
|---|---|---|
| "a solo strategist can tell signal from noise in one look" | tester sorted by date, never noticed the reliability ranking — the whole One Thing | **DRIFT** — the differentiator was invisible in the UI |
| "finds coverage they'd miss skimming Google" | tester found a source they hadn't known — used it on the call | **ALIGNED** — promise held in real hands |
| "enter a brand, get an answer" | tester typed a full sentence, got a confusing result; the label didn't say "one word" | **GAP** — the brief assumed an input behavior the UI never specified |

- **ALIGNED** — the user did what the brief promised. The actuator (the live tool) matched the alibi (the brief).
- **DRIFT** — the user did something *other* than what the brief claimed they would. Your boss-facing story and your shipped tool disagree, and a stranger exposed it.
- **GAP** — the brief assumed a behavior the interface never specified, so the user filled it their own way (the human version of the conductor filling a config silence).

Resolve each DRIFT and GAP: change the interface, change the brief's claim, or decide the user's behavior is acceptable *on purpose* — and say which. **The DRIFT that kills your One Thing is the one that matters** (if your differentiator was invisible to every tester, you don't have a differentiator yet — you have a paragraph).

**Artifact:** `usability-divergence.md` — every Part-2 promise verdicted against real use, each DRIFT/GAP resolved with a reason.

## Move 5 — Sharpen the One Thing + position it (A5 Part 3)

From the divergence: revise the One Thing (it should change — if it's identical to the Conductor Brief's, you learned nothing). Place your tool and three competitors on a 2×2 whose axes are *what your Part-2 user actually cares about* (a diagram, any format). The white space is the position the testers' behavior earned you.

**Artifacts:** the positioning 2×2; the revised One Thing with the tester evidence that moved it.

## Move 6 — Log it

One `logs/RUN_LOG.md` entry: the URL, ALIGNED/DRIFT/GAP counts, the change you made, the revised One Thing, recipe status. No keys.

---

## Grading — 25 points

**Mechanics — 20 points, itemized:**

| # | Mechanical component | Pts |
|---|---|---|
| 1 | Tool wired into the template — your three zones edited, **fenced files untouched** (diff proves it) | 3 |
| 2 | Deployed at a public URL a stranger can open; bad input shows a **plain-English error**, not a stack trace | 3 |
| 3 | Three screenshots: empty state, real run with human-readable output (not JSON), error state | 2 |
| 4 | Three structured user tests with **real Part-2-matching users** (not classmates/family); what each *did*, in order | 3 |
| 5 | Genuine confusion reported honestly (a frictionless test = a faked test) | 2 |
| 6 | **Usability divergence log**: every Part-2 promise verdicted ALIGNED / DRIFT / GAP against real use | 3 |
| 7 | Each DRIFT and GAP **resolved** (change the UI / change the claim / accept on purpose) with a reason | 2 |
| 8 | Positioning 2×2 with axes that reflect Part-2-user priorities; all four tools placed; white space named | 1 |
| 9 | Revised One Thing — **different** from the Conductor Brief's, with tester evidence; RUN_LOG entry; no keys | 1 |
| | **Mechanics total** | **20** |

**Glimmer — 5 points, comparative & capped.** Graded on:
- *Divergence honesty* — did you surface the DRIFT that hurt (e.g. the differentiator no tester noticed), or claim suspiciously clean alignment?
- *The resolution reasoning* — when the tool and the brief disagreed, was the choice of which to change *reasoned*, or reflexive?
- *Fence discipline* — clean diff (you respected the codebase), or a conductor-mangled scaffold you had to fight live?
- *Positioning defensibility* — a real white space the testers earned, vs. axes that flatter the tool.

Same bands/cap as Exercises One–Five (top quartile 4–5, descending; shallow cohort capped at 1–2). *(Instructor's option: one targeted question at the weakest dimension — usually a hand-waved "everyone loved it" — graded on the revision.)*

The thing the live demo most needs to model: **the DRIFT where a stranger ignored my best feature.** I'll deploy a tool whose One Thing I believe in, watch a real user never find it, and show you that the differentiator that lived in my brief lived *nowhere a user could see it.* The gap between what I *promised* a user would do and what they *actually* did is the whole lesson of shipping: the brief is the alibi, the interface is the actuator, and a stranger is the only honest test of whether they agree.

## What can go wrong

| Symptom | What it means | Fix |
|---|---|---|
| Conductor "improved" the DB driver / config; deploy broke | a fence was crossed | revert to the template's fenced files; re-read the *reasons* in `CLAUDE.md` |
| URL works on your laptop, not deployed | it's a local script, not a product | push to GitHub, deploy to Vercel, test the public URL in a private window |
| Output is a JSON blob / raw table | not usable by a non-technical user | render `ToolResult` as a summary + readable list (the assignment's actual bar) |
| Test report: "everyone found it intuitive" | a faked or vibe test | push harder; a real test always produces confusion — find it and report it |
| Revised One Thing = original One Thing | you didn't learn from the test | the test should have moved it; if it didn't, you tested the wrong thing or didn't listen |
| Divergence log is all ALIGNED | you graded the brief's vibe, not real use | re-watch what testers *did*, not what they said — the GAPs are in the doing |
