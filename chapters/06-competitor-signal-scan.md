# Chapter 6 — Competitor Signal Scan
*What public messaging reveals, and what it doesn't.*

The first draft came back describing the competitor's brand as "premium, youthful, disruptive, and trustworthy." The account team nodded. The strategist frowned. Because those four words describe approximately every brand operating in the category, and they describe none of them in particular, and they cannot support a single creative decision. You cannot look at "youthful" and figure out what color palette to avoid or what claim structure to counter. You cannot brief a copywriter with "disruptive." The words sound like competitive intelligence. They are actually the absence of it.

What happened? AI was used to scan public-facing materials, and the AI did what language models do well: it found the dominant vocabulary and returned it in the register of a professional summary. The problem is that "premium" is not a signal. It is a category convention, the background noise every brand in that space emits by default. Returning it as an insight is like reporting that the competitors all have websites.

The failure is not that AI was used. The failure is that the artifact crossed a professional boundary — from extracted observation to strategic implication — without evidence, without sourcing, and without the human judgment that the boundary requires.

---

What the competitor scan is actually supposed to produce is something much more specific and much more humble: a matrix of observed signals, each one traceable to a source, each one dated, each one labeled for what it is rather than what it might mean.

Here is what a signal actually looks like. A competitor's homepage headline on a specific date. A CTA button that says "Get the proof" rather than "Learn more." An ad that leads with a customer testimonial and buries the product name. A campaign that ran on LinkedIn but not Instagram. A press release that makes a quantified performance claim. These are facts. They are observable. They have sources. They can be compared across competitors and across time. And if the comparison reveals something — if every competitor in the category is leading with social proof while your client is leading with product specs — that is a pattern worth bringing to a human strategist, labeled carefully as a pattern, with the sources attached.

| Competitor | Source URL | Capture date | Headline / primary claim | Proof offered | CTA | Audience signal | Tone label | Channel | Contradiction flag | Human-review note |
|---|---|---|---|---|---|---|---|---|---|---|
| Competitor A | url + screenshot path | 2026-05-12 | "The fastest way to ship" | none attached | "Start free" | self-serve developers | confident, plain | homepage | — | — |
| Competitor B | url + screenshot path | 2026-05-12 | "Trusted by 4,000 teams" | logo wall, no figures | "Book a demo" | enterprise buyers | reassuring, formal | homepage | flag | site says "transparent"; ads use countdown scarcity — possible brand/performance misalignment. Interpretation required. |
| Competitor C | url + screenshot path | 2026-04-30 | "Cut onboarding time 40%" | linked case study | "See the study" | ops leaders | quantified, direct | LinkedIn ad | — | capture date older than set; confirm still live before citing |

*The matrix is an observation layer, not a strategy layer. Implications go in a separate labeled section.*

![An empty seven-column grid schematic of the competitor-observation matrix — Source, Capture Date, Primary Claim, Proof Offered, CTA, Audience Signal, Contradiction Flag — with the source-and-date pair grouped as provenance and the contradiction column accented.](../images/06-competitor-signal-scan-fig-01.png)
*Figure 6.1 — The competitor matrix, core columns*

The recipe for this chapter is built around that matrix. Inputs: the competitor set, the category terms you are using to bound the comparison, a source list, a date range, and the brand question you are trying to answer. Steps: capture the sources directly — screenshots, URLs with timestamps, downloaded ads — and then extract from each source the specific observable features: positioning language, claims, proof offered, CTA, audience signals, channel choices, tone. Flag contradictions when you find them. Compare patterns across the set. Write human-review notes for every inference that goes beyond the observation. Outputs: the matrix, a source appendix, and a short implication memo that is labeled as interpretation rather than observation. Gate: strategy recommendations stay separate from observations, and the separation is explicit, not implicit. Log: competitor names, URLs or file paths, capture timestamps, and extraction notes.

The date matters more than it seems. A competitive landscape from eighteen months ago may not describe the current market. A campaign that ran during a product launch may not represent the brand's current positioning. When you are reading the matrix, you need to know when each signal was captured, not just what it said.

---

I want to spend some time on the question of what the agent can actually do here, because this is one of the assignments where the capability is highest and the failure mode is most seductive.

The agent is genuinely useful for extraction at scale. Give it a set of captured pages and ask it to identify the primary claim on each one, the proof structure, the CTA, the visible audience signals — it does that efficiently and consistently in a way that a human reviewer skimming quickly would not. It can normalize vocabulary across competitors so that you can compare them: identifying that three out of five competitors are using some form of social proof, even when each one has phrased it differently. It can detect when a competitor's messaging on one channel contradicts its messaging on another, which is a real and useful signal about strategic coherence or inconsistency.

What it cannot do is decide which competitors belong in the set. That decision depends on strategy, market context, and business stakes in ways that are not visible in the public-facing materials themselves. A direct category competitor is an obvious inclusion. But what about the brand that is not technically competing with your client today but is moving in the same direction and will be competing in eighteen months? What about the brand from an adjacent category that is capturing the same audience attention? Those inclusion decisions require someone who understands the client's actual strategic situation, not just the public landscape.

![Two columns of competitor-scan tasks — the agent gathers, extracts, normalizes, and flags; the human defines the set and decides implications — meeting at a central gate where the agent's outputs become the human's inputs.](../images/06-competitor-signal-scan-fig-02.png)
*Figure 6.2 — The agent–human division in a competitor scan*

<!-- → [DIAGRAM: The agent-human division in a competitor scan — two columns. Agent column: gather public signals, extract observable features, normalize vocabulary, flag contradictions, identify patterns. Human column: define the competitor set, assess category relevance, interpret strategic meaning, decide implications. Caption: The columns meet at the gate. The agent's outputs become the human's inputs, not the human's conclusions.] -->

The agentic supervision questions apply directly here. Scope: the agent is scanning publicly available signals within a bounded competitor set and date range — it is not inferring private strategy or predicting future moves. Approval: a human brand practitioner reviews the matrix before it moves to a client or a brief. Verification: every observation in the matrix has a source URL or file path and a capture timestamp, so the claim can be checked against the original.

---

The contradiction flag deserves its own attention because it is one of the more valuable things the matrix can surface and one of the things most likely to get smoothed away.

Contradictions in competitor messaging are informative. A brand that positions itself as trustworthy and transparent in its long-form content but uses urgency-pressure tactics in its ads is telling you something about the distance between its brand aspiration and its performance marketing. A brand that leads with sustainability claims on its website but runs no visible advocacy or third-party verification is telling you something about the depth of that commitment. A brand that targets professionals in its copy but uses creative that reads as consumer-facing is telling you something about an internal misalignment or a strategic pivot in progress.

None of those inferences should appear in the matrix as conclusions. They should appear as observations with a contradiction flag and a human-review note that says something like: *homepage positions as transparent, ads use countdown-timer scarcity mechanics — review note: possible misalignment between brand and performance teams, or deliberate bifurcation by audience segment. Human interpretation required.* The note names what was observed, names the possible interpretation, and explicitly holds that interpretation as a candidate rather than a finding.

![Stacked horizontal bars showing contradiction flags per competitor, split into substantive contradictions in red and surface tone variation in gray.](../images/06-competitor-signal-scan-fig-04.png)
*Figure 6.3 — Contradiction frequency across a competitor set*

<!-- → [CHART: Contradiction frequency across a hypothetical competitor set — a simple bar showing how many contradiction flags appear per competitor, with a note distinguishing substantive contradictions (strategy vs. execution) from surface contradictions (tone variation by channel). Caption: Not all contradictions are problems. Some are strategic. The matrix surfaces them; the practitioner decides which kind they are.] -->

The temptation to average contradictions away — to find the central tendency and report it — is strong because it makes the deliverable cleaner. Resist it. The contradiction is often the most strategically useful thing in the matrix. A competitor that is internally inconsistent is potentially vulnerable. A competitor that is consistently consistent across every channel is telling you they have solved a coordination problem your client has not. The matrix should preserve the texture of what was actually observed, not smooth it into a neater picture.

---

There is a second temptation that runs in the opposite direction, and it is the one that produced the first draft I described at the opening: the temptation to turn the observed patterns directly into strategic implications.

The pattern is real. Three out of five competitors are leading with social proof. That is an observation. What does it mean? Maybe the category has matured to the point where functional claims are no longer differentiating and social proof is the new minimum. Maybe one competitor started it and the others followed without thinking carefully. Maybe your client's audience is at a stage in the decision journey where proof matters more than awareness and the competitors have figured that out. Maybe the pattern reflects a shared consultancy that has been advising the whole category in the same direction.

All of those interpretations are possible from the same observation. The matrix cannot tell you which one is right. The strategist, working with the full context of the client's situation, competitive history, and target audience, has to make that judgment. The matrix's job is to give the strategist accurate observations to work from, not to do the strategy.

The implication memo exists for exactly this reason: to give the strategist a first pass at interpretation, clearly labeled as interpretation, that they can evaluate and revise with their fuller knowledge. It is a thinking aid, not a conclusion. The difference between "competitors are leading with social proof" (observation) and "your client should lead with social proof" (recommendation) is the gate, and the gate is the human judgment about whether this pattern is relevant, actionable, and right for this client's particular situation.

![A two-band systems diagram: a lower observation layer of sourced, dated signals and an upper implication layer of labeled interpretations, separated by a gate line crossed by a single upward arrow representing human judgment.](../images/06-competitor-signal-scan-fig-03.png)
*Figure 6.4 — Observation layer vs. implication layer*

| Layer | What it contains | Who is accountable |
|---|---|---|
| Verified | Captured public pages, screenshots, ads, dated source notes | The capture record — checkable against the original |
| Model judgment | Tone labels, message clusters, inferred audience | The agent — prepared, not approved |
| Human judgment | Category relevance, strategic interpretation, priority | The practitioner — signs the implication |

*The labels are not hierarchical. Verified evidence is not more important than human judgment — they belong to different categories that serve different functions.*

---

The running project task for this chapter is the competitor matrix itself: three to five competitors, columns for source, date, claim, proof offered, CTA, audience signal, tone label, contradiction flag, and human-review note. The discipline is in the human-review note column — every inference that goes beyond the observable gets flagged there, labeled as inference, and held as a candidate rather than a finding.

If the evidence is thin — if a competitor has minimal public-facing materials, or if the capture date is too old to be reliable — write that directly in the matrix. The note that says *competitor website sparse, last substantive update uncertain, observations have low confidence* is more useful than a confident characterization built on weak inputs. The matrix should tell the truth about its own evidence, not just about the competitors it is describing.

There is a test for whether the matrix is working correctly: can you trace any single entry back to a source? If someone at the client meeting asks where the claim that a competitor uses countdown-timer scarcity mechanics came from, can you show them? If the answer is yes — here is the URL, here is the capture date, here is a screenshot — the entry is doing its job. If the answer requires reconstructing something from memory or explaining that the AI identified the pattern, the entry is not yet defensible and should not be presented as observation.

---

The verification checklist for this chapter runs: the competitor set is explicit; every observation has a source and a date; tone and audience inferences are labeled; the matrix separates observation from implication; contradictions are preserved rather than averaged away.

Machine conformance is what the agent checks: are all required columns present, are all source fields populated, does the log contain the expected entries. Human adequacy is what the practitioner checks: is this competitor set the right one for this strategic question, is this evidence sufficient to bring to a brief, are the inferences I am drawing from this matrix ones I can defend?

The difference between those two checks is the whole architecture. The agent handles the first because it is a structural question about completeness. The human handles the second because it is a judgment question about whether the work is good enough for what it needs to do.

A competitor scan built this way — specific observations, traceable sources, dated captures, labeled inferences, preserved contradictions — is a professional artifact. It can support a brief, a strategy presentation, a creative direction. The one built the other way, the one that came back with "premium, youthful, disruptive, trustworthy," is noise that sounds like signal. And in the meeting, when the client asks which competitor led with social proof and when, only one of those artifacts has an answer.

---

## LLM Exercises

**Exercise 1 — Build the matrix**

Select three competitors from a category you have access to or can research through public sources. Capture at least two public-facing touchpoints per competitor (homepage, a current ad, a social post, a press release). For each capture, complete the full matrix row: source URL, capture date, primary claim, proof offered, CTA, audience signal, tone label, channel, contradiction flag (if applicable), and a human-review note for every inference that goes beyond the observable. When the exercise is complete, identify which entries you are most and least confident in, and write a one-paragraph note on what would increase confidence in the weakest entries.

Prompt suggestion: *"I'm going to give you a set of captured brand materials from three competitors. For each one, help me extract: the primary claim, what proof is offered, the CTA, the visible audience signals, the tone, and the channel. Label any inferences separately from observable facts. Flag any contradictions between what you find in different materials from the same competitor."*

**Exercise 2 — Separate observation from implication**

Take a completed competitor matrix — yours from Exercise 1 or a provided sample — and write two documents from it. The first: a one-page observation summary that contains only what was directly observed, sourced, and dated. No strategy, no recommendations, no implications. The second: a one-page implication memo that draws on the observation summary to suggest strategic meaning, labeled explicitly as interpretation. Compare the two documents. Identify three specific places where the implication memo makes a jump that cannot be fully supported by the observation summary. Write a note on what additional evidence would be needed to close each gap.

Prompt suggestion: *"Here is my competitor matrix. Help me write two documents from it: a pure observation summary with no strategy, and a separate implication memo labeled as interpretation. Then help me identify the three places where the implication memo makes the biggest inferential leaps, and describe what additional evidence would be needed to support each one."*

**Exercise 3 — The contradiction audit**

Review a competitor matrix (yours or a provided sample) specifically for contradictions: places where a competitor's messaging on one channel, at one point in time, or for one audience seems inconsistent with its messaging elsewhere. For each contradiction you find, write a human-review note that names what was observed, lists at least two possible explanations for the inconsistency, and explicitly marks which explanation you consider most likely and why. Then identify which contradictions, if true, would have the most significant implications for your client's strategic choices.

Prompt suggestion: *"Here is a competitor matrix with several contradiction flags. For each flagged contradiction, help me develop at least two possible explanations for what the inconsistency might mean strategically. Then help me assess which contradictions are most likely to be strategically significant versus which are likely to be noise or minor execution variation."*

---

## Chapter 6 Exercises: Competitor Signal Scan
**Project:** Your Own Brand Intelligence System
**This chapter adds:** a sourced competitor signal matrix where every observation carries a URL and a capture date, and every inference is flagged as a candidate rather than a finding.
---
### Exercise 1 — When to Use AI
**The judgment:** The matrix is built by extracting observable features from captured pages at scale — exactly the kind of repetitive, checkable reading where AI is strong.
- Extracting the primary claim, proof offered, and CTA from a batch of captured competitor pages — *Why AI works here:* this is **extraction** against a fixed schema, and every field can be checked against the screenshot or URL you supplied.
- Normalizing how three competitors phrase social proof so they line up in one column — *Why AI works here:* this is **classification and normalization**, mapping varied wording onto a shared category you can audit row by row.
- Detecting where a competitor's homepage tone contradicts its ad tone and raising a flag — *Why AI works here:* this is **cross-source comparison**, a pattern-detection task whose output you can verify by opening both sources.

**The tell:** You know you are using AI appropriately when you can evaluate the output — when you have independent criteria to judge whether it is correct, complete, and fit for purpose.
---
### Exercise 2 — When NOT to Use AI
**The judgment:** Deciding the boundaries of the competitive frame and what the patterns mean for this client are strategy calls, not extraction tasks.
- Deciding which competitors belong in the set — *Why AI fails here:* it requires **ground truth** about the client's strategic situation and future threats that is nowhere in the public materials the model can read.
- Turning "three of five lead with social proof" into "your client should lead with social proof" — *Why AI fails here:* one observation supports several interpretations; choosing one is a **values and accountability** call the strategist signs, and treating the pattern as its own conclusion is the seductive failure mode the chapter opens on.
- Resolving a contradiction flag into a single confident story — *Why AI fails here:* averaging the texture away is **source adequacy** abuse; the model will smooth ambiguous signals into a fluent finding (**hallucinated certainty**) that the evidence does not carry.

**The tell:** You know you have crossed the line when you are using AI output as your reason for a conclusion rather than as a tool for reaching one.
**Series connection:** Tier 5 — the agent prepares the observation layer at scale; a named practitioner verifies sources and signs the implication memo, accepting accountability for every inference that crosses the gate.
---
### Exercise 3 — LLM Exercise
**What you're building this chapter:** a sourced competitor signal matrix plus a separate, labeled implication memo — the second verified component in your brand repo.
**Tool:** Claude (claude.ai chat). Use a single chat per scan; you will paste captured materials directly, and the matrix is the deliverable rather than an evolving knowledge base.
**The Prompt:**
```
You are helping me build a competitor signal matrix. The matrix is an OBSERVATION layer only — sourced, dated facts — kept strictly separate from a labeled IMPLICATION layer. Do not blend the two.

Here are captured public-facing materials for my competitor set. Each block includes the source URL, the capture date, and the text/description of what I captured.

COMPETITOR SET (chosen by me): [FILL IN: 3-5 names]
CATEGORY TERMS bounding the comparison: [FILL IN]
CAPTURES:
- Competitor: [FILL IN] | URL: [FILL IN] | Capture date: [FILL IN] | Content: [FILL IN]
- (repeat, at least two captures per competitor)

Do four things:
1. Build a matrix with one row per capture and these columns: Competitor | Source URL | Capture date | Primary claim | Proof offered | CTA | Audience signal | Tone label | Channel | Contradiction flag | Human-review note.
2. Keep only observable facts in the matrix cells. Any interpretation goes in the Human-review note, explicitly labeled as a candidate inference, never as a finding.
3. Flag contradictions WITHIN a competitor (e.g., homepage tone vs. ad tone) and, in the note, give at least two possible explanations without picking one.
4. Separately, write a short IMPLICATION MEMO that draws patterns across the set — clearly labeled as interpretation, with each pattern tagged to the matrix rows it rests on.

Rules: do not add competitors I did not list. Do not invent sources, dates, claims, or proof not present in my captures. If a capture is too sparse to characterize, write "low confidence — sparse source" in the note rather than filling cells confidently.
```
**What this produces:** a fully sourced observation matrix with contradiction flags and labeled candidate inferences, plus a clearly separated implication memo whose every claim traces back to specific rows.
**How to adapt this prompt:** *For your own brand:* capture real touchpoints yourself (screenshots, dated URLs) before pasting — the matrix is only defensible if you can show the source when challenged in a meeting. *For ChatGPT / Gemini:* portable as-is; if the model starts editorializing in matrix cells, add "matrix cells contain only what is literally on the page; all interpretation lives in the note column." *For a Claude Project:* once you run scans across multiple categories or refresh the same set over time, move this into a Project and store your competitor-set definition and capture conventions as Project knowledge.
**Connection to previous chapters:** this extends Chapter 5's evidence discipline — every matrix entry is a Can Say only because it carries a source and date, and every note is a Can Suggest held as a candidate. **Preview of next chapter:** the labeled inferences and contradiction flags you surface here become inputs the Chapter 7 creative brief must classify as Inferred or Needs-approval rather than smuggle in as fact.
---
### Exercise 4 — CLI Exercise
**What you're building this chapter:** a `competitor-matrix.md` in your brand repo built from a folder of capture notes, with a machine-conformance check that every row has a source and a date.
**Tool:** Claude Code.
**Skill level:** Beginner-to-intermediate — reading multiple input files, structured table output, and one completeness check.
**Setup:**
- [ ] Brand repo folder with a `captures/` subfolder containing one note file per capture (each with competitor, URL, date, and pasted content).
- [ ] An empty or absent `competitor-matrix.md` (the task will create it).
- [ ] Claude Code started in the repo folder.
**The Task:**
```
Read every file in the captures/ folder. Treat all files in captures/ as read-only — do NOT modify them.

Create competitor-matrix.md with a markdown table, one row per capture, columns: Competitor | Source URL | Capture date | Primary claim | Proof offered | CTA | Audience signal | Tone label | Channel | Contradiction flag | Human-review note.

Rules:
- Populate cells only from the content of the capture files. Do not invent claims, proof, sources, or dates.
- If a capture file is missing a URL or a capture date, still create the row but write "MISSING — do not cite" in that cell and add a Human-review note.
- Put every interpretation in the Human-review note column, labeled as a candidate inference.

Then run a CONFORMANCE CHECK and print it to the chat (do not change the file based on it): number of rows, number of rows missing a URL, number of rows missing a capture date, number of contradiction flags raised. Stop after printing the check. Do not delete or overwrite any file in captures/ and do not delete any other repo file.
```
**Expected output:** a new `competitor-matrix.md` populated from the capture files, plus a chat conformance summary counting rows, missing-URL rows, missing-date rows, and contradiction flags.
**What to inspect in the output:** confirm the row count equals your number of capture files, spot-check two rows against their source files for fabricated claims, and verify every "MISSING — do not cite" cell corresponds to a capture that genuinely lacks that field.
**If it goes wrong:** if a cell contains a claim not in the source, re-run with "quote the exact sentence from the capture file that supports each Primary claim cell." If it altered a capture file, restore from git and restate the read-only rule.
**CLAUDE.md / AGENTS.md note:** add to `CLAUDE.md`: "Competitor matrix rule: every row needs a source URL and capture date; rows missing either are marked 'do not cite.' Observations and inferences stay in separate columns; never average contradictions away."
---
### Exercise 5 — AI Validation Exercise
**What you're validating:** the `competitor-matrix.md` from Exercise 4 (or the Exercise 3 matrix and implication memo).
**Validation type:** source-traceability and observation/implication separation check. **Risk level:** High — this matrix feeds the brief and a client-facing competitive narrative.
**Setup:** open the matrix next to the `captures/` folder (or your pasted captures). You need the originals to test traceability.
**The Validation Task:** "Evaluate the AI output using this checklist. For each item record Pass / Fail / Cannot determine and explain."
```
Validation Checklist — Competitor Signal Scan
□ Correctness: Does each matrix cell match what is actually on the captured source?
□ Completeness: Is there a row for every capture, with no source silently dropped?
□ Scope: Does every competitor in the matrix belong to the set I defined — none added by the model?
□ Source traceability: Can every row be traced to a URL and a capture date, with "do not cite" wherever either is missing?
□ Observation/implication separation: Are matrix cells purely observable, with all interpretation confined to labeled candidate notes and the separate memo?
□ Failure mode check: fluent-but-wrong (a confident characterization built on a sparse source)? contradictions smoothed into a single tidy story? missing ground truth (an inference presented as a finding)?
```
**What to do with your findings:** each Fail or Cannot determine triggers a fix — re-trace the row to its source, move an editorializing cell into the note column, or mark a sparse source low-confidence. The corrected matrix plus implication memo is the verified component you commit for this chapter.
**AI Use Disclosure prompt:** "AI extracted the primary claims, proof, CTAs, and tone labels from competitor materials I captured and dated, and drafted candidate inferences in the note column; I verified every row against its source, defined the competitor set myself, and signed the implication memo. The model could not determine whether a contradiction between a competitor's homepage and ad tone reflects misalignment or deliberate audience bifurcation, so that was left as a labeled candidate for human interpretation."
**Series connection:** the failure mode is contradictions and sparse sources smoothed into a fluent-but-wrong narrative; preserving the texture and re-tracing each row is the Tier 5 verification that keeps the matrix defensible.
---
**Tags:** competitor-matrix · source-traceability · contradiction-flag · observation-vs-implication · signal-extraction · capture-dating
