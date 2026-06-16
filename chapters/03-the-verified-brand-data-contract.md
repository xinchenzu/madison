# Chapter 3 — The Verified Brand Data Contract
*Where the chain breaks is where the trouble lives.*

There is a particular kind of meeting that brand practitioners dread more than any other. Not the meeting where the client hates the creative. Not the meeting where the budget gets cut. The meeting where someone at the table — usually the quiet one, usually the one with the most seniority — asks a simple question about the report you just presented.

*Where did that come from?*

The report said the audience is anxious about pricing. It said the category is shifting toward trust messaging. It said the brand should lead with proof. All of that sounds credible, the way things sound credible when they are formatted with confidence and presented without hesitation. But the question is not about whether the claims are plausible. The question is about whether they are traceable. And if you cannot answer it — if you have to flip back through the deck looking for a footnote that was not included, or explain that the AI surfaced the insight from several sources you did not specifically retain — the meeting has just become a different meeting entirely.

The failure in that room is not that AI was used. AI is useful; that is not in dispute. The failure is that an artifact crossed a professional boundary — from working material to decision-support — without evidence, without ownership, and without a gate. Someone trusted the output because it looked finished, and finished things have a way of demanding trust they have not earned.

![A two-column comparison — the left column "what a finished-looking report conveys" holds confidence, authority, and recommendation; the right column "what the report requires to be defensible" holds a source chain, a transformation log, and a human adequacy judgment — separated by a thin vertical boundary representing the professional line that polished formatting tends to obscure](../images/03-the-verified-brand-data-contract-fig-04.png)
*Figure 3.1 — Looks done vs is defensible*

<!-- → [DIAGRAM: The gap between "looks done" and "is defensible" — a simple two-column illustration showing what a polished report conveys (confidence, authority, recommendation) vs. what it requires to be professionally defensible (source chain, transformation log, human adequacy judgment). Caption: The professional boundary that finished formatting tends to obscure.] -->

The question this chapter is trying to answer is: how do you close that gap before the meeting happens?

---

The concept Madison introduces for this is called the verified brand data contract, and the name is worth unpacking before going further. It is a contract in the sense that it makes obligations explicit. You are obligating yourself — and your workflow — to a particular discipline: every claim in a report must be traceable back to a source, every transformation of that source must be logged, and every judgment call about whether the source is adequate must be made by a human before the output moves forward. That is the contract. It has no legal force. It has professional force, which in practice matters more.

The word "data" in the name does not mean only numbers. It means all the raw material you work with: source files, screenshots, analytics exports, client comments, URLs, approval records, draft copy inherited from a previous engagement. All of it is data in the relevant sense, which means all of it needs to be handled with the same discipline.

And "verified" does not mean the data has been proven correct in some absolute sense. It means the chain between the original source and the claim you are making from it is visible. Verifiable, not verified. The distinction matters because the goal is inspectability, not certainty. You are building something that a teammate, a client, or a future version of yourself can audit — not building a proof.

| Label | Definition | What can be cited from it | What cannot |
|---|---|---|---|
| Raw data | Original source material as collected (files, exports, URLs, screenshots). | Its literal contents, with a path. | Any interpretation not present in the source. |
| Verified data | Raw data a human has checked for date, method, and relevance. | The checked facts, as adequate for the decision. | Facts outside what was actually checked. |
| Generated artifact | Model output: summaries, drafts, suggested relationships. | Nothing as evidence by default — it is a candidate. | Any claim presented as observed fact. |
| Approval record | A logged human decision authorizing something to move. | That the decision was made, by whom, when. | The correctness of the thing approved. |
| Report | The finished deliverable assembled from the above. | Claims whose chain back to verified data is visible. | Claims with a broken or missing chain. |

*Table 3.1 — Labels are not judgments about quality. They are categories of epistemic status.*

![A taxonomy of five equal parallel boxes stacked from raw to finished — raw data, verified data, generated artifact, approval record, and report — each with a reserved definition slot; colour marks epistemic status rather than quality, with the generated artifact flagged as not-evidence-by-default and the report as the terminal product](../images/03-the-verified-brand-data-contract-fig-01.png)
*Figure 3.4 — The five epistemic-status labels*

---

I want to be precise about what the agent can do in this workflow and what it cannot, because the confusion between those two things is where most of the trouble originates.

The agent is very good at extraction. Give it a folder of files and ask it which files are present, what paths they live at, and what their contents look like at a summary level — it handles that efficiently. Give it a prompt and a set of inputs and ask it to produce a formatted output — it does that too. It can detect when something is missing from a set that should be complete. It can surface relationships between pieces of content that a human reviewer skimming quickly might not notice. It can check whether an output conforms to a template, whether all required sections are present, whether the log entries are structurally valid.

What it cannot do is confer legitimacy on a source by summarizing it. This is the hard boundary, and it is worth stating directly because the agent's summaries can be so fluent and so confident that they create the impression of authority they do not possess. A summary of a source is not evidence that the source is adequate for the claim being made. That judgment — adequacy for the decision at hand — requires a human who understands the decision and can evaluate whether the evidence is sufficient to support it.

![A triangular systems diagram with three corner nodes — Scope, Approval, Verification — each pointing toward a central Accountable Output node; the three questions are concurrent, not sequential, and should all have answers before the workflow begins](../images/02-the-reallocation-principle-fig-03.png)
*Figure 3.2 — The agentic supervision scaffold (shared with Chapter 2)*

<!-- → [DIAGRAM: Agentic supervision three-question scaffold — Scope (what is the agent allowed to do?), Approval (who decides whether the output moves forward?), Verification (what evidence would make the output defensible?). A triangular arrangement, with each question pointing toward the human decision in the center. Caption: The three questions are not sequential. They should all have answers before the workflow begins.] -->

The practical structure for holding this boundary is what Madison calls the recipe: a small, explicit, auditable workflow description. Inputs, steps, outputs, gate, log. The recipe does not need to be long. It needs to be specific enough that someone who did not run it can tell what happened, and complete enough that the gaps it produces are named rather than smoothed over.

Here is what a recipe for this kind of work looks like in its minimal useful form. Inputs: source files, URLs, screenshots, analytics exports, prompts, logs, and report templates. Steps: label each input by its epistemic status; connect outputs back to sources; record every transformation; flag every gap where the chain is broken or thin; write a provenance note. Outputs: a source map, a missing-evidence list, and a short paragraph suitable for inclusion in the report that describes the provenance of its claims. Gate: no strategic recommendation moves forward unless the source chain behind it is visible. Log: store source paths, run IDs, and every gap that was not resolved.

![A process flowchart of the minimal recipe structure — Inputs, Steps, Outputs, a prominently emphasized Gate, and Log — connected by single forward arrows, with the agent preparing the ground at Inputs and Steps and the human crossing at the emphasized Gate, whose decision is recorded into the Log](../images/03-the-verified-brand-data-contract-fig-03.png)
*Figure 3.5 — The recipe structure*

The gate is the professional moment. The AI prepares the ground on one side of it. The accountable practitioner crosses it.

---

What makes this concrete is tracing an actual claim. Take a statement like: *the category is shifting toward trust messaging*. That is the kind of statement that tends to appear in brand strategy reports without much ceremony, as though it were simply known. But it is not simply known. It came from somewhere. The question is: where?

Follow it backward. It appeared in a report. The report was generated from a template populated by a recipe run. The recipe drew on a summarization of several source documents — analytics exports, a client-provided competitive landscape, a prompt that asked the model to identify directional trends. The model identified the trend toward trust messaging as a pattern across those sources. The sources themselves were a mix of the client's own data and several public-domain category analyses that a junior practitioner pulled and included in the working folder.

Now the question becomes specific: is that chain adequate for the claim? The sources are real. The transformation is logged. But the public-domain analyses — were they checked for date, for methodology, for whether they actually cover the category in question? The model surfaced the pattern; was that pattern also visible on direct inspection of the sources by a human reviewer? The client's data — does it support the claim independently, or only in combination with the external analyses?

These are not gotcha questions. They are the ordinary questions of professional adequacy, and they have determinate answers. Either the chain supports the claim or it does not. If it does not, the provenance note says so directly, and the claim either gets qualified or gets cut.

![A provenance-chain diagram tracing one strategic claim backward — the claim at the top descends through intermediate artifacts (a report, a template, a recipe run, a model summarization) down to a row of source documents; one descending link carries a visible break labelled "source not checked for date/methodology," and one lower node is flagged as a generated artifact, not evidence by default](../images/03-the-verified-brand-data-contract-fig-02.png)
*Figure 3.3 — The broken provenance chain*

<!-- → [CHART: A broken chain visualization — a claim at the top, with lines tracing back through intermediate artifacts to source documents. One line has a break labeled "source not checked for date/methodology." Another terminates in a generated artifact labeled "not evidence by default." Caption: The break does not invalidate the whole chain. It shows exactly where the human review needs to focus.] -->

The point of the contract is not to make the work perfect before it moves forward. The point is to make the imperfections visible so that the practitioner can make a defensible judgment about whether they matter for the decision at hand. Sometimes thin evidence is adequate because the decision is low-stakes. Sometimes apparently strong evidence is inadequate because the decision is irreversible. The contract does not make that call. It gives you the information to make it.

---

There is a particular temptation in this work that I want to name directly, because it operates below the level of conscious intention and causes most of the professional failures of the kind we started with.

Generated text is fluent. It is formatted. It sounds authoritative. And because it sounds authoritative, there is a constant pull toward treating it as evidence — toward letting the finished quality of the artifact do the work that should be done by the source chain behind it. A model summary of a competitive landscape sounds like a competitive analysis. A model-generated trend statement sounds like observed data. The output has the surface properties of the thing you need without necessarily having the epistemic properties of the thing you need.

Madison's posture on this is explicit: generated text is an artifact, not evidence by default. An artifact can become trustworthy — when its claims are traceable, when its inputs are logged, when a human has reviewed the chain and judged it adequate. But it does not arrive trustworthy. It arrives useful, which is a different thing.

The recipe structure operationalizes that posture. The label system — raw data, verified data, generated artifact, approval record, report — is not bureaucratic pedantry. It is a way of keeping track of which things in your working folder have epistemic status and which things are still candidates. You can work with candidates. You can build on them, transform them, format them. You cannot cite them in a strategic recommendation without first moving them from candidate to verified, and moving them requires the human review that the gate enforces.

| Boundary | What it covers |
|---|---|
| Verified | Local files, raw records, cited public pages, approval notes. |
| Model judgment | Summaries and suggested source relationships. |
| Human judgment | Adequacy of the evidence for a business decision. |
| Out of scope | Pretending generated text is original evidence. |

*Table 3.2 — The boundary exists to protect the practitioner, not to limit the agent.*

---

The running project task in this chapter is simple and serious: trace one brand claim from a report back to a log, a recipe, and a source. If the chain holds, write the provenance note that would appear in the report. If the chain breaks, write exactly where it breaks and what would repair it.

That second outcome is not a failure. It is the system working. A break you can see and describe is a break you can fix or qualify. A break you cannot see is the one that ends up in the meeting, stalling the decision, causing the quiet person with the seniority to ask the question.

The artifact you produce from this task has a name in Madison: the provenance note. It is short — short enough to be used in review, short enough that a client can read it in thirty seconds and understand where the supporting evidence came from. It is not a methods section. It is not a disclaimer. It is a plain-language account of the source chain for the claims in the report, including an honest statement of what the chain does not establish.

If the evidence is thin, you write that it is thin. Not in language designed to soften the thinness, but directly. The provenance note that says *the competitive landscape analysis draws on three public-domain sources from 2021-2022 and has not been independently corroborated by the client's own data; the trend characterization should be treated as directional rather than definitive* is a more useful document than the one that says *this analysis is supported by a comprehensive review of available category intelligence*. The first version tells the decision-maker what they need to know. The second version sounds like it is protecting the practitioner.

It is protecting the practitioner from the wrong thing.

---

The verification checklist that closes this chapter is not a box-ticking exercise. It is a list of the conditions that need to hold before an artifact can cross the professional boundary from working material to decision-support.

Raw inputs and generated artifacts are not confused. Every report claim points backward to evidence. Missing links are named, not smoothed over. Logs and human reports tell the same story. The provenance note is short enough to be used in review.

There are two kinds of checking implied by that list. Machine conformance is what the agent can do: verify that files exist at the expected paths, that logs contain the required fields, that the report template is fully populated. Human adequacy is what the accountable practitioner must do: verify that the work is good enough for the decision it is supposed to support. The agent can tell you the chain is structurally complete. Only the human can tell you whether it is good enough.

That distinction — conformance versus adequacy — is the whole architecture of Madison's posture. Not less AI. Better division of labor. Use the agent for the work it does efficiently and correctly. Reserve for the human the work that requires judgment, taste, accountability, and professional standing.

The meeting goes differently when those boundaries are held. The question still gets asked — *where did that come from?* — but now the answer is ready, and the answer is the chain. Here is the source. Here is the transformation. Here is the gap, and here is why I judged it acceptable for this decision. Here is the human who reviewed it and approved it to move forward.

That is what a verified brand data contract looks like in practice. Not a guarantee of correctness. A demonstration of professional accountability.

---

## LLM Exercises

**Exercise 1 — Trace a claim**

Take a strategic claim from a brand report you have access to (or construct a plausible one from the source material in this chapter). Using the recipe structure — inputs, steps, outputs, gate, log — trace the claim backward to its sources. At each step, label the material by its epistemic status: raw data, verified data, generated artifact, approval record, or report. Write the provenance note. If the chain breaks, identify exactly where and name what would repair it.

Prompt suggestion: *"I'm going to give you a brand claim and a set of source materials. Help me trace the claim back through each source, label the epistemic status of each link in the chain, identify any breaks, and draft a provenance note suitable for inclusion in the report."*

**Exercise 2 — Design a gate**

For a workflow you use or have observed, write a gate condition: the specific, testable criterion that must be met before an artifact can move from working material to decision-support. The gate should be concrete enough that two practitioners would agree on whether it has been passed. Describe what the agent checks (conformance) and what the human checks (adequacy). Identify what information the human needs in order to make the adequacy judgment.

Prompt suggestion: *"Here is a workflow description. Help me design a gate condition that separates the agent's conformance checks from the human's adequacy judgment. Give me the gate as a set of yes/no questions, with the last question requiring human judgment to answer."*

**Exercise 3 — Write the honest provenance note**

Take a piece of supporting evidence that you would characterize as thin — a source that is dated, narrow in scope, or not independently corroborated — and write the provenance note as if you were including it in a professional report. The note should accurately describe the chain, including the limitations, in language that a client can read in thirty seconds and use to calibrate how much weight to place on the claim it supports. Then write the version of the note that obscures those limitations. Compare them. What does the second version protect? What does it risk?

Prompt suggestion: *"I have a piece of supporting evidence that is thin — here are its limitations. Help me write two versions of a provenance note: one that describes the chain accurately including its gaps, and one that presents the same evidence in a way that obscures those gaps. Then help me articulate what each version is protecting and what each is risking."*

---

## Chapter 3 Exercises: The Verified Brand Data Contract

**Project:** Your Own Brand Intelligence System

**This chapter adds:** The brand-data contract for the system — a labeled recipe (inputs, steps, outputs, gate, log) plus a sources-of-truth list that records the epistemic status of every input the system will ever cite.

---

### Exercise 1 — When to Use AI
**The judgment:** In this chapter's work, AI assistance is appropriate for the following tasks:
- Extracting an inventory of files, paths, and contents from a working folder — *Why AI works here:* this is **summarizing / reformatting** of material you can open yourself; the chapter says extraction is exactly what the agent does efficiently and correctly.
- Drafting the source-map and missing-evidence list by tracing which claims connect to which inputs — *Why AI works here:* this is **clustering** outputs back to sources against a structure you supply; you can re-walk any link by hand.
- Running machine-conformance checks (do the files exist at the expected paths, are the required log fields present, is the template fully populated) — *Why AI works here:* this is **reformatting/validation** against a fixed schema, the conformance half the chapter explicitly assigns to the agent.
**The tell:** You know you are using AI appropriately when you can evaluate the output — when you have independent criteria to judge whether it is correct, complete, and fit for purpose.

---

### Exercise 2 — When NOT to Use AI
**The judgment:** In this chapter's work, the following tasks require human judgment. Delegating them to AI is not appropriate — not because AI cannot produce output, but because AI output here cannot be trusted without verification that requires the same expertise as doing the task yourself.
- Judging whether a source is *adequate* for the decision it supports — *Why AI fails here:* **source adequacy.** The chapter states the hard boundary directly: a summary of a source is not evidence the source is adequate; adequacy requires a human who understands the decision and the stakes.
- Confirming a claim is *verified* versus merely *generated* — *Why AI fails here:* **hallucination risk.** The model's fluent summary creates the impression of authority it does not possess; treating its summary as evidence is the precise fluency trap, and only a human with access to the raw source can confirm the chain.
- Crossing the gate — authorizing a strategic recommendation to move forward — *Why AI fails here:* **accountability.** The gate is a human act by definition; no AI participates in it. AI may prepare the ground on one side; the practitioner crosses it.
**The tell:** You know you have crossed the line when you are using AI output as your reason for a conclusion rather than as a tool for reaching one.
**Series connection:** Tier 6 Collective — the data contract makes the chain inspectable by *other people* (a teammate, a client, a future you); it converts private confidence into shared, auditable evidence.

---

### Exercise 3 — LLM Exercise
**What you're building this chapter:** The brand-data contract for your system — a provenance trace for one claim, plus the sources-of-truth list that labels every input by epistemic status.
**Tool:** A Claude Project — use a Project here (not a one-off chat) because the sources-of-truth list is reusable knowledge the whole system will draw on, so it belongs in project knowledge.
**The Prompt:**
```
You are helping me build a verified brand data contract. Use these five epistemic-status labels for every input:
- Raw data (original source as collected: files, exports, URLs, screenshots)
- Verified data (raw data a human has checked for date, method, relevance)
- Generated artifact (model output — NOT evidence by default; a candidate)
- Approval record (a logged human decision authorizing something to move)
- Report (the finished deliverable)

Here is one strategic claim from a brand report:
[FILL IN: paste one strategic claim, e.g. "The category is shifting toward trust messaging."]

Here are the inputs in my working folder:
[FILL IN: list each source file/URL/export with a one-line description and its date if you know it]

Do exactly this:
1. Trace the claim backward through each intermediate artifact to the source inputs.
2. Label every link in the chain with one of the five epistemic-status labels.
3. Identify any BREAK in the chain — a source not checked for date/method/relevance, or a generated artifact being treated as evidence — and name exactly where it breaks.
4. Produce a sources-of-truth list: a table of every input | label | date | what can be cited from it | what cannot.
5. Draft a SHORT provenance note (≤80 words) describing the chain honestly, including what it does NOT establish. If evidence is thin, say so plainly — do not soften it.

Do NOT declare any source "verified" yourself — mark sources I must check as "Raw — needs human verification."
```
**What this produces:** A provenance trace with breaks named, a sources-of-truth table, and an honest provenance note draft — the core of your system's data contract.
**How to adapt this prompt:**
- *For your own brand:* paste a real claim and your real folder at [FILL IN]; then walk each "needs human verification" link and confirm dates/methods yourself.
- *For ChatGPT / Gemini:* identical wording; if a model upgrades a source to "verified" on its own, add "Only I can mark a source verified — leave everything else as Raw."
- *For a Claude Project:* put the five-label definitions and the finished sources-of-truth list into project knowledge so every later run inherits the same contract.
**Connection to previous chapters:** The "verified" label here is the disciplined form of Chapter 1's verified-claim type, and the inputs you trace are the evidence-category tasks you classified in Chapter 2.
**Preview of next chapter:** Chapter 4 writes the workflow twice — once for the agent that runs it, once for the human who maintains it.

---

### Exercise 4 — CLI Exercise
**What you're building this chapter:** The `recipe.md`, `sources-of-truth.md`, and `provenance-note.md` files in your repo, plus the gate rule.
**Tool:** Claude Code
**Skill level:** Intermediate
**Setup:**
Before running this exercise, confirm:
- [ ] You have your provenance trace and sources-of-truth table from Exercise 3.
- [ ] Your `brand-intelligence-system/` repo exists, with the Chapter 1 and 2 files and `CLAUDE.md` already in it.
- [ ] You will add a standing rule to `CLAUDE.md`: "No strategic recommendation moves forward unless its source chain is visible. The agent checks conformance; only a human confirms adequacy and crosses the gate."
**The Task:**
```
Work only inside this project folder. Do not touch files outside it.

1. Create recipe.md with this exact structure and fill ONLY the structural scaffolding (leave brand specifics as "[FILL IN]"):
   ## Inputs
   ## Steps  (label each input by epistemic status; connect outputs back to sources; record every transformation; flag every gap; write a provenance note)
   ## Outputs  (source map; missing-evidence list; provenance note)
   ## Gate  (no strategic recommendation moves unless its source chain is visible — HUMAN crosses)
   ## Log  (source paths, run IDs, every unresolved gap)

2. Create sources-of-truth.md from the table I paste. Preserve my labels exactly. Do NOT change any "Raw — needs human verification" to "Verified".

3. Create provenance-note.md containing the short note I paste. Do not embellish or soften it.

4. Run a CONFORMANCE check only: for each source path I listed, report whether a file with that name exists in this folder. List any missing paths. Do NOT judge whether any source is adequate — that is my job.

5. Append to CLAUDE.md the gate rule above.

6. Stop and show me the three files plus the conformance report. Do not commit or delete anything.
```
**Expected output:** Three files plus a conformance report listing which source paths exist and which are missing, with all human-verification labels preserved.
**What to inspect in the output:** Confirm no "Raw — needs human verification" label was upgraded to "Verified," and that the conformance report makes no adequacy judgments (only existence checks).
**If it goes wrong:** The most likely failure is the agent quietly marking sources "verified" or asserting a source is "adequate." Recovery: revert, restate the conformance-vs-adequacy boundary, re-run.
**CLAUDE.md / AGENTS.md note:** Add the gate rule above — it separates machine conformance from human adequacy, the whole architecture of the contract.

---

### Exercise 5 — AI Validation Exercise
**What you're validating:** The provenance note and sources-of-truth list from Exercise 3.
**Validation type:** Factual claim (does the source chain actually support the stated claim?).
**Risk level:** High — an unsourced claim that ships as decision-support is the exact "where did that come from?" meeting this chapter opens with.
**Setup:** Use your Exercise 3 output. To surface a failure, paste this pre-generated note and grade it: `"This analysis is supported by a comprehensive review of available category intelligence."` (the chapter's example of a note that protects the practitioner instead of informing the decision-maker).
**The Validation Task:**
Evaluate the AI output using this checklist. For each item record Pass / Fail / Cannot determine and explain.
```
Validation Checklist — The Verified Brand Data Contract
□ Correctness: Does every claim in the report trace back to a real, openable source?
□ Completeness: Are all breaks in the chain named, or were thin/undated sources smoothed over?
□ Scope: Did the model add claims the sources do not support, or omit a source it actually used?
□ Conformance vs adequacy: Did the agent stay on conformance (files exist, fields present) and leave adequacy to you?
□ Honest provenance: Does the note state what the chain does NOT establish, in plain language, without softening thin evidence?
□ Failure mode check: fluent-but-wrong? (an unsourced trend asserted as observed) — schema-valid-but-wrong? (a structurally complete chain whose sources are stale or off-category) — missing ground truth?
```
**What to do with your findings:** pass → file the provenance note for use in review; one fail → revise the prompt (tighten "name every break") and re-run; multiple → trace the chain by hand, since adequacy is the human-only judgment.
**AI Use Disclosure prompt:** write two sentences — (1) what AI produced and how you used it; (2) one thing the AI could not determine that required your judgment.
**Series connection:** The failure mode is an unsourced claim (and schema-valid-but-wrong chains); validating that the chain is both complete and adequate is the Tier 6 collective discipline of producing evidence others can audit.

---

**Tags:** verified-data-contract, provenance-note, sources-of-truth, epistemic-status-labels, conformance-vs-adequacy, source-chain
