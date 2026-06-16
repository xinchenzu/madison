# Chapter 4 — Two Customers

Here are two workflows, both of which fail. The first one fails quietly. The second one fails loudly. Neither failure has anything to do with whether AI was used.

Workflow one produces a perfect JSON file. The schema is clean. The fields are populated. The logs are green. The brand team opens it, looks at the columns, and has no idea what any of it means or what they're supposed to do with it. The file sits in a folder. Nothing happens. Eventually someone asks for the memo that was supposed to come out of this process, and nobody can say where the memo went or whether the JSON was ever used to make a decision.

Workflow two produces a persuasive memo. It is beautifully written. The argument is structured and clear. The recommendations are specific. A senior brand manager reads it, agrees with it, and acts on it. Three months later, the same decision comes up again and someone asks to rerun the analysis. Nobody can. The memo has no inputs, no parameters, no logs. It is not a workflow at all — it is a document that happened once, under conditions that no longer exist, produced by a process that no longer exists.

Both workflows failed. For opposite reasons. The first one served its executing agent and forgot its human audience. The second one served its human audience and forgot that it needed to be reproducible. Madison is built around the observation that a recipe has two customers, and you have to serve both.

---

Let me describe what each customer actually needs, because the needs are genuinely different and partially in tension.

![A two-column comparison joined by a shared central spine — the left column is the executing agent and its needs (explicit inputs, a clear transformation, an output schema, graceful anomaly handling); the right column is the human maintainer and theirs (purpose, the decision supported, the review point and its meaning, context to judge, and the ability to modify the recipe) — signalling that a single recipe must satisfy both, partially in tension](../images/04-two-customers-fig-01.png)
*Figure 4.1 — The two customers of a recipe*

The executing agent — the AI system, the automated script, whatever is running the operational steps — needs structure. It needs explicit inputs: where the data comes from, what format it arrives in, what to do if it's missing. It needs a clear transformation: the sequence of steps, the parameters, the decision rules. It needs an output schema: what the result looks like, where it goes, what gets logged. The agent does not need to understand the purpose of the workflow. It does not need context about why this matters. It needs operational specificity. Ambiguity makes agents fail silently, which is often worse than failing loudly.

The human maintainer — the brand practitioner who received the workflow, runs it, reviews its output, and eventually inherits responsibility for it — needs something almost completely different. They need to understand what the workflow is for. They need to see the decision the workflow is designed to support, and what kind of decision it explicitly refuses to make. They need to know where the human review point is and what the reviewer is actually supposed to do there. They need enough context to judge whether the output is reasonable, to recognize when something has gone wrong in a way that the logs won't catch, and to explain the workflow to someone else who takes over when they leave.

The human maintainer also needs to be able to modify the workflow when the world changes. Brand contexts change. Audience data gets refreshed. Competitors do things. Platforms update their APIs. A recipe that is perfectly documented for its original context but opaque to modification is a liability, not an asset. Within a year or two, it will either be abandoned or will continue running on stale assumptions with no one watching.

---

Now I want to look carefully at what happens when a workflow underserves each customer, because the failure modes are different and worth distinguishing.

![Two side-by-side panels showing the opposite ways a workflow fails — the left panel is the quiet failure: a complete, tidy structured-data artifact (clean schema, populated fields, green logs) with a hollow, outlined-only human-interpretation area; the right panel is the loud failure: a complete, persuasive narrative memo with a hollow, outlined-only reproducibility and log area](../images/04-two-customers-fig-02.png)
*Figure 4.2 — Two failure modes*

When a workflow underserves the executing agent — when the recipe is too ambiguous, too narrative, too reliant on implied context — the agent makes guesses. Language models, in particular, are very good at making plausible guesses. This is not reassuring. A plausible guess that is wrong is harder to detect than a broken schema. If the input specification is vague and the model fills in what sounds reasonable, the output will look coherent. The logs will be clean. The error will be invisible until someone with domain knowledge looks at the substance and notices that the audience segment described does not match the customer data, or the competitive framing reflects a market position the brand abandoned eighteen months ago.

When a workflow underserves the human maintainer — when the recipe is structurally perfect but humanly opaque — the failure mode is different. The output arrives and the human cannot evaluate it. They cannot tell whether the schema was applied correctly, whether the input data was what they expected, or whether the result represents a meaningful signal or an artifact of the process. In this situation, the human has three choices. They can pass the output along anyway, in which case they have effectively abdicated review and made the phase gate fictional. They can spend a lot of time reverse-engineering what the workflow did, which is possible but expensive and often incomplete. Or they can ignore the output entirely, in which case the workflow produces nothing of value. All three outcomes are failures.

The underlying problem in both cases is the same. A recipe that is only legible to one of its customers is a recipe that breaks when that customer is absent, unavailable, or replaced.

---

There is a concept in maintenance engineering called *serviceability* — the degree to which a system can be maintained and repaired by the people who are responsible for it under real operating conditions. Not ideal conditions. Not the conditions that existed when the system was designed. The conditions that actually exist: time pressure, partial documentation, institutional memory gaps, personnel turnover.

A Madison recipe needs to be serviceable in this sense. Not just runnable. Maintainable.

The practical test for serviceability is simple and uncomfortable. Hand the recipe to a colleague who was not involved in building it. Give them a realistic amount of time — say, thirty minutes. Ask them: can you tell me what this recipe is for? Can you tell me what you're supposed to do when you review the output? Can you tell me what would change about this recipe if the underlying audience data were refreshed?

If they can answer those questions, the recipe is serving its human customer. If they can't, the gap is in the human layer, not the agent layer.

The parallel test for the agent layer is different: run the recipe on data with a deliberate anomaly — a missing field, an unexpected format, a value outside the expected range. Does the recipe fail gracefully, with a useful error? Or does it fail silently, producing output that looks plausible but reflects the anomaly without flagging it?

Both tests should be run. Most recipes, in practice, pass only one.

---

| Recipe Element | Agent Customer (what the agent needs here) | Human Customer (what the human needs here) | Which is underserved? |
|---|---|---|---|
| Input specification | Source, format, and what to do when a field is missing. | Where the data comes from and whether it is current. | Human — sources rarely dated. |
| Transformation steps | Ordered steps, parameters, decision rules. | What the workflow is for and what it refuses to decide. | Human — purpose left implicit. |
| Output schema | Exact result shape and destination. | Whether the output is reasonable for the decision. | Neither, if labeled. |
| Log format | Required fields, run IDs, timestamps. | A trail that lets the run be reproduced. | Agent often fine; human can't read it. |
| Human review fields | Where to stop. | What to look at, what question to answer. | Human — usually just "review required." |
| Decision gate | A halt point. | Criteria, named decision, owner, logged record. | Human — the latch-less gate. |
| Maintenance notes | None needed. | What changes if the world changes. | Human — usually absent. |

*Table 4.1 — Most recipes were written with one customer in mind and barely gesture toward the other. The annotation makes that asymmetry visible.*

The table structure for this work has four columns. Recipe element: the specific part of the recipe you're annotating — input specification, transformation steps, output schema, log format, human review fields, decision gates, maintenance notes. Agent customer: what the executing agent needs from this element to run reliably. Human customer: what the human maintainer needs from this element to review, judge, and maintain. Which is underserved: a direct assessment of which customer this element is failing, if either.

Running this annotation on an existing recipe is often uncomfortable. Most recipes were written with one customer in mind and barely gesture toward the other. The annotation makes that asymmetry visible. That is the point. The repair comes after the visibility.

---

There is a specific element of recipe design that almost always underserves the human customer, and it is worth naming directly: the decision gate.

A decision gate is the point in a workflow where a human must decide whether to proceed. Not review — decide. The distinction matters. Review can be cursory. A person can look at an output, feel that it looks reasonable, and sign off without engaging the substance. A decision gate is designed to make that impossible, or at least harder. It should specify what the reviewer is looking at, what question they are answering, and what happens if their answer is no.

Most recipes that have a decision gate name it without specifying it. They say something like: *human review required before output moves downstream.* That instruction serves the agent — the agent knows where to stop. It does not serve the human. The human has not been told what to look for, what risk they're accepting if they proceed, or what recourse exists if the output turns out to be wrong.

The version that serves both customers looks different. It specifies the review criteria: what would make this output acceptable, and what would make it unacceptable? It names the decision: is this output ready to be used as input to the next step, yes or no? It names the owner: whose judgment counts here? And it records the decision in a log that can be inspected later.

That is a real gate. A gate that just says *review required* is a gate with no latch.

![A comparison schematic contrasting a gate with no latch against a real decision gate — the weak gate is a single node carrying only an undifferentiated "review" instruction with an open pass-through that anything can cross; the real gate contains four components — review criteria, the named decision (yes or no), the named owner, and a logged record — that an output must satisfy before crossing](../images/04-two-customers-fig-03.png)
*Figure 4.3 — The latch-less gate vs the real gate*

---

I want to address the tension that makes this hard. Serving both customers simultaneously takes longer than serving one. A recipe with comprehensive human documentation is longer and slower to write than a recipe with only operational specifications. A recipe with a well-specified decision gate requires someone to think carefully about what reviewers should actually look for, which requires domain knowledge and judgment that is harder to produce than schema definitions.

This is the real cost of the two-customer requirement. Not complexity. Time. The time of a domain expert who knows what the output is supposed to mean, who understands the brand well enough to articulate what a bad result looks like, and who cares enough about the workflow's longevity to write it down for the people who come after them.

Madison does not pretend this cost is zero. What it argues is that the cost of not doing it is higher — and is paid later, under worse conditions, by people who were not involved in the original design and have no context for recovering from the failure.

The JSON file that nobody could interpret was not a failure of AI. It was a failure to spend the time required to make the output legible to the humans who needed to act on it. That time has to come from somewhere. Madison's position is that it comes from the recipe-building phase, not the incident-response phase.

---

The practical shape of this chapter's work is an annotation. Take one recipe you use or have inherited. Mark every element in two categories: what it provides to the executing agent, and what it provides to the human maintainer. Then identify the weakest element on the underserved side, and make the smallest change that would improve it.

One element. One change. The goal is not to rewrite the recipe. It is to build the habit of seeing both customers in every recipe you touch, so that over time the recipes you produce serve both without having to be reminded.

If an element is missing entirely — if there is no human review section, or no maintenance note, or no specification of what the reviewer is supposed to decide — write that directly in the annotation. Do not smooth it over. A recipe that acknowledges its gaps is more maintainable than a recipe that hides them inside confident-sounding prose.

---

A recipe that serves both customers can still overclaim. It can be runnable, legible, maintainable, and still produce output that asserts more certainty than the evidence supports. That is the problem the next chapter addresses: what a recipe is allowed to say about what it found, and where the honest boundary between analysis and assertion sits.

---

<!-- LLM EXERCISE -->
**Exercise for further inquiry.** Take a workflow or recipe you currently use — a prompt chain, a content brief process, a reporting routine, anything that runs repeatedly and produces an artifact that someone acts on. Annotate it in two columns: what each element provides to the executing system, and what each element provides to the human who reviews and maintains it. Then ask: if the person who built this recipe left tomorrow and a new teammate had to run it next week, which column would they find sufficient? Which would leave them guessing? Write one sentence describing the smallest addition that would close the largest gap on the weaker side.

## Chapter 4 Exercises: Two Customers

**Project:** Your Own Brand Intelligence System

**This chapter adds:** One brand workflow written twice — the agent recipe (complete, explicit, operational) and the human card (summary, drill-down) — so the system serves both its executing agent and its human maintainer.

---

### Exercise 1 — When to Use AI
**The judgment:** In this chapter's work, AI assistance is appropriate for the following tasks:
- Drafting the agent-facing recipe: explicit inputs, ordered steps, parameters, output schema, log fields — *Why AI works here:* this is **drafting / reformatting** operational specification to a known structure; ambiguity is the failure to avoid, and you can read the spec back for completeness yourself.
- Annotating an existing recipe in two columns (what each element gives the agent vs. the human) — *Why AI works here:* this is **clustering** each recipe element against a two-customer frame you supply; the chapter's Table 4.1 is your answer key.
- Running the agent-layer anomaly test — generating malformed inputs (missing field, wrong format, out-of-range value) to probe whether the recipe fails gracefully — *Why AI works here:* this is **option-generation** of test cases; you judge whether the failure was loud or silent.
**The tell:** You know you are using AI appropriately when you can evaluate the output — when you have independent criteria to judge whether it is correct, complete, and fit for purpose.

---

### Exercise 2 — When NOT to Use AI
**The judgment:** In this chapter's work, the following tasks require human judgment. Delegating them to AI is not appropriate — not because AI cannot produce output, but because AI output here cannot be trusted without verification that requires the same expertise as doing the task yourself.
- Writing the decision-gate criteria — what makes the output acceptable vs. unacceptable, and the named owner — *Why AI fails here:* **values judgment / accountability.** The chapter is explicit that a real gate names the decision, the owner, and the criteria; an AI-written gate is the latch-less "review required" that makes the phase gate fictional.
- Authoring the human card's purpose and "what it refuses to decide" — *Why AI fails here:* **missing ground truth.** Why this workflow exists, and the decision it deliberately will not make, are facts about your brand strategy the model cannot know; it will produce plausible purpose-prose that may not match the real intent.
- Writing the maintenance note — what changes if the world changes — *Why AI fails here:* **source adequacy.** What breaks when audience data refreshes or a platform's API updates depends on your specific dependencies; only the person who understands the brand context can say what to revisit.
**The tell:** You know you have crossed the line when you are using AI output as your reason for a conclusion rather than as a tool for reaching one.
**Series connection:** Tier 7 Wisdom — serving both customers at once is the practical wisdom of designing for the absent person (the maintainer who inherits this in a year), balancing operational precision against human serviceability.

---

### Exercise 3 — LLM Exercise
**What you're building this chapter:** The two-customer workflow for your system — one brand workflow written as a complete agent recipe AND as a human card, with a two-column serviceability annotation.
**Tool:** A Claude Project — use a Project so the agent recipe and human card sit in shared knowledge alongside the data contract from Chapter 3, since this workflow runs repeatedly.
**The Prompt:**
```
You are helping me write one brand workflow for TWO customers: the executing agent and the human maintainer.

The agent needs operational specificity: explicit inputs (source, format, what to do if a field is missing), ordered transformation steps with parameters, an output schema and destination, and log fields.
The human needs serviceability: the workflow's PURPOSE, the decision it supports and the decision it refuses to make, where the review point is and what to look at there, enough context to judge if the output is reasonable, and a maintenance note.

Here is the workflow:
[FILL IN: describe one workflow you run repeatedly — e.g. a weekly competitor-content pull, a content-brief routine, a reporting job]

Do exactly this:
1. AGENT RECIPE: write the complete operational spec (Inputs, Steps, Output Schema, Log fields). Be explicit; flag anything I must specify as "[FILL IN]".
2. HUMAN CARD: write a short summary a colleague could read in 30 seconds (purpose, the decision it supports, where to review) with a drill-down to detail.
3. ANNOTATION TABLE: for each recipe element (input spec, transformation steps, output schema, log format, human review fields, decision gate, maintenance notes), state what it gives the AGENT, what it gives the HUMAN, and WHICH customer is underserved.
4. For the decision gate and the maintenance note, write only "[I WILL WRITE THIS MYSELF]" — do NOT draft gate criteria, owners, or maintenance notes.

Do not write the gate criteria or the maintenance note. Leave the workflow's "what it refuses to decide" for me.
```
**What this produces:** A complete agent recipe, a human card, and a serviceability annotation table — with the gate criteria, owner, and maintenance note reserved for you.
**How to adapt this prompt:**
- *For your own brand:* describe your real workflow at [FILL IN]; then write the gate criteria, owner, "refuses to decide" line, and maintenance note by hand.
- *For ChatGPT / Gemini:* identical wording; if a model drafts gate criteria anyway, add "The gate is mine to write — leave it as a placeholder."
- *For a Claude Project:* put the agent recipe and human card into project knowledge so future runs and teammates inherit both customer views.
**Connection to previous chapters:** The agent recipe is the labeled recipe from Chapter 3 made fully operational; the gate you reserve is the human approval gate you protected in Chapter 2.
**Preview of next chapter:** The next chapter addresses what a recipe is allowed to *claim* about what it found — the honest boundary between analysis and assertion.

---

### Exercise 4 — CLI Exercise
**What you're building this chapter:** The `agent-recipe.md`, `human-card.md`, and `serviceability-annotation.md` files in your repo, with both customer-layer tests wired in.
**Tool:** Claude Code
**Skill level:** Advanced
**Setup:**
Before running this exercise, confirm:
- [ ] You have the agent recipe, human card, and annotation from Exercise 3.
- [ ] Your `brand-intelligence-system/` repo holds the Chapter 1–3 files and `CLAUDE.md`.
- [ ] You will add a standing rule to `CLAUDE.md`: "Every recipe is written for two customers. A decision gate must name criteria, the decision, and an owner — never just 'review required'. The agent never writes gate criteria or maintenance notes."
**The Task:**
```
Work only inside this project folder. Do not touch files outside it.

1. Create agent-recipe.md from my operational spec (Inputs, Steps, Output Schema, Log fields). Preserve every "[FILL IN]" I left.

2. Create human-card.md from my summary + drill-down. Preserve my "Decision it refuses to make" and "Maintenance note" sections exactly; if I left them as "[I WILL WRITE THIS MYSELF]", leave them.

3. Create serviceability-annotation.md from my two-column table (Recipe Element | Agent | Human | Underserved).

4. AGENT-LAYER TEST: read agent-recipe.md and propose three deliberate anomalies (a missing field, an unexpected format, an out-of-range value). For each, state what the recipe's stated steps say should happen. Do NOT modify the recipe — just report whether each anomaly would fail loudly (flagged) or silently (plausible-but-wrong output).

5. HUMAN-LAYER TEST: report whether human-card.md answers three questions — what is this for? what do I do at review? what changes if the underlying data refreshes? — Pass/Fail each. Do not fill gaps; just report them.

6. Append the two-customer standing rule to CLAUDE.md.

7. Stop and show me the three files plus both test reports. Do not commit or delete anything.
```
**Expected output:** Three files plus an agent-layer anomaly report (loud vs. silent failure per anomaly) and a human-layer serviceability report (Pass/Fail per question).
**What to inspect in the output:** Confirm the gate criteria and maintenance note were left as your placeholders, and that the anomaly test names at least one silent-failure risk if one exists.
**If it goes wrong:** The most likely failure is the agent "completing" the human card by writing gate criteria or a maintenance note. Recovery: revert those sections to placeholders, restate the standing rule, re-run.
**CLAUDE.md / AGENTS.md note:** Add the two-customer rule above — it makes the latch-less gate and the agent-written maintenance note structurally forbidden.

---

### Exercise 5 — AI Validation Exercise
**What you're validating:** The agent recipe and human card from Exercise 3 — specifically whether each serves its customer.
**Validation type:** Agentic output (a runnable workflow spec plus its human-facing documentation).
**Risk level:** Medium — a recipe legible to only one customer fails the moment that customer is absent (the JSON nobody could read; the memo nobody could rerun).
**Setup:** Use your Exercise 3 / Exercise 4 output. To surface a failure, paste this pre-generated gate and grade it: `Decision gate: "Human review required before output moves downstream."` (the chapter's example of a gate with no latch).
**The Validation Task:**
Evaluate the AI output using this checklist. For each item record Pass / Fail / Cannot determine and explain.
```
Validation Checklist — Two Customers
□ Correctness: Does the agent recipe specify inputs, steps, output schema, and log fields explicitly enough to run without guessing?
□ Completeness: Does the human card answer purpose, review action, and "what changes if the world changes"?
□ Scope: Did the model add anything it was told to leave to you (gate criteria, owner, maintenance note)?
□ Two-customer balance: Is either customer underserved — agent-legible but human-opaque, or human-readable but not reproducible?
□ Gate has a latch: Does the decision gate name criteria, a yes/no decision, AND an owner — not just "review required"?
□ Failure mode check: fluent-but-wrong? (a recipe that reads complete but lets the agent guess silently) — schema-valid-but-wrong? (clean schema, no human can act on it) — approval fatigue? (a latch-less gate)
```
**What to do with your findings:** pass → adopt the two-customer workflow as the system's template; one fail → revise the prompt and re-run; multiple → rewrite the underserved layer by hand, since gate criteria and purpose are human-only.
**AI Use Disclosure prompt:** write two sentences — (1) what AI produced and how you used it; (2) one thing the AI could not determine that required your judgment.
**Series connection:** The failure mode is a latch-less gate / schema-valid-but-wrong output; validating that both customers are served is the Tier 7 wisdom of designing for the maintainer who is not in the room.

---

**Tags:** two-customers, agent-recipe, human-card, serviceability, decision-gate-latch, recipe-annotation
