# Chapter 8 — Measurement Plan and KPI Map
*The report arrived on time. Nobody knew what it was supposed to answer.*

The campaign has been running for three weeks. The report is due tomorrow. The team pulls impressions, clicks, comments, a few survey snippets, and some screenshots from the brand monitoring tool. The document looks complete. It has charts. It has a summary paragraph. It lands in the client's inbox at 9 a.m.

The client reads it and asks: did it work?

Nobody can answer. Not because the data is missing — the data is all there — but because nobody agreed in advance what "worked" would mean. Which metric indicated success? What was the baseline we were moving from? What decision was this report supposed to support? The team optimized for report production. They forgot to define what a report was for.

This failure is older than AI. Brand and advertising work has generated it for decades, in every agency and every in-house team that confused the deliverable (a report) with the purpose (a decision). What AI changes is the speed at which the deliverable can be produced and the ease with which the missing definition goes unnoticed until too late. A well-formatted, AI-assisted report full of metrics without decision use is still a report full of metrics without decision use. It just arrives faster.

The measurement plan is the fix. Not a better report. A prior agreement about what the report is for.

---

## What a Metric Actually Is

A metric is a claim about the world, expressed as a number. That framing sounds obvious until you follow its implications. If a metric is a claim, then every metric has two things that require explicit definition: what the number counts, and what you are claiming that count means.

Clicks are easy. A click is a click. But "engagement rate" is not a click — it is a constructed ratio, and its meaning depends entirely on how you defined the numerator and denominator. Engagement rate using impressions in the denominator tells you something different from engagement rate using reach. Both are legitimate calculations. They answer different questions. If the metric is not defined — if it just says "engagement rate" with no formula — then every person reading the report is silently assuming their own denominator, and the discussion that follows is arguments about different numbers dressed up as arguments about the same one.

| Metric | Numerator | Denominator | What it measures | What it does not measure |
|---|---|---|---|---|
| Engagement rate | Engagements | Impressions | Content response rate | Whether content drove behavior |
| Click-through rate | Clicks | Impressions | Ad activation rate | Whether clicks converted |
| Brand consideration | Respondents selecting brand | Total respondents | Stated intent signal | Revealed preference |
| Share of voice | Brand mentions | Total category mentions | Relative share of conversation | Quality or sentiment of mentions |
| Cost per acquisition | Total spend | Conversions | Efficiency of conversion | Long-term value of acquired customers |

*Every metric is a definition, not a fact. The definition is a choice, and the choice encodes a priority.*

The definition problem compounds when AI assistance enters the workflow. An agent asked to "pull the performance metrics" will produce metrics — but which metrics, defined how, drawn from which source? The agent cannot know what the business question is unless it was told explicitly. It will produce plausible-looking numbers. Those numbers will land in the report. They will look like answers. Whether they are answers to the question the client is actually asking is a separate matter, and it does not get resolved by the quality of the agent's extraction work.

This is why the measurement plan must exist before the campaign runs, not after. Defining the metric after you have seen the data is selection bias with extra steps.

---

## Three Kinds of Metrics

Brand campaigns produce data at multiple points in the audience journey. Not all of those data points are the same kind of evidence. The measurement plan works better when it distinguishes three categories.

**Outcome metrics** measure the end state the campaign was trying to move. For a brand campaign, that is typically something like consideration, preference, or purchase intent — measured through surveys or tracked behavior. Outcome metrics are the ones that answer the client's question. Did it work? They are also the hardest to get: they require survey design, baseline measurement before the campaign, and enough time to see movement.

**Leading metrics** are signals that tend to precede outcome movement. If the theory is that exposure drives awareness, which drives consideration, then awareness and reach are leading metrics for consideration. Leading metrics are useful because they arrive faster than outcomes and can tell you mid-campaign whether you are on the right trajectory. They are not substitutes for outcomes. A campaign with high reach and low consideration movement is a campaign that reached a lot of people without changing what they thought.

**Diagnostic metrics** tell you what happened mechanically without asserting that it mattered. Impressions are diagnostic. Clicks are diagnostic. Completion rate is diagnostic. These numbers explain the campaign's mechanical behavior — where it ran, what it triggered, how the algorithm served it. They are valuable for troubleshooting and for explaining anomalies. They become a problem when they migrate into the "did it work?" conversation, because they cannot answer that question. A campaign can generate ten million impressions and produce no movement in consideration. Impressions happened. Nothing changed.

![A three-tier vertical stack — outcome metrics on top, leading metrics in the middle, diagnostic metrics at the bottom — with upward arrows labeled "can predict" and "does not guarantee," and a side note warning against collapsing the tiers into one narrative.](../images/08-measurement-plan-and-kpi-map-fig-01.png)
*Figure 8.1 — The three-tier metric hierarchy*

<!-- → [DIAGRAM: Three-tier metric hierarchy — vertical stack, top tier "Outcome Metrics" (consideration, preference, purchase intent), middle tier "Leading Metrics" (awareness, reach, share of voice), bottom tier "Diagnostic Metrics" (impressions, clicks, completion rate) — arrows from bottom to middle to top labeled "can predict" and "does not guarantee" — right-side annotation: "Reports that collapse all three into one performance narrative are conflating evidence of mechanism with evidence of effect." Caption: The hierarchy is not about which metrics matter more. It is about what question each tier can answer.] -->

Most campaign reports collapse all three into a single performance narrative. The diagnostic numbers fill the most space because there are more of them and they look precise. The outcome metrics get a sentence at the end, if they exist at all. The reader comes away with a detailed picture of what happened mechanically and almost no information about what the campaign achieved.

The measurement plan prevents this by requiring that the distinction be made before the campaign runs, when it can still affect what gets measured and how.

---

## The Baseline Problem

A metric without a baseline is a number, not a finding. "Brand consideration is at 34%" tells you almost nothing. 34% compared to what? To the previous quarter? To the benchmark for this category? To the consideration score before the campaign launched? To a competitor?

The baseline is the number that gives the metric its meaning. Without it, a 34% consideration score could represent a triumph (it was 19% six months ago), a disappointment (it was 41% before the campaign ran), or a non-result (the category average is 33%). The same number. Completely different interpretations.

This is not an obscure methodological point. It is the thing that makes reports either useful or merely informative. A report that provides numbers without baselines informs the reader. It does not support a decision. To support a decision, the reader needs to know whether the number represents movement in the right direction, how much movement, and whether the movement is meaningful relative to what was spent.

![Three panels showing the identical 34% brand-consideration bar at the same height; with no reference it is uninterpretable, against a lower prior baseline it reads as +5 points, against a higher benchmark it reads as a 4-point shortfall.](../images/08-measurement-plan-and-kpi-map-fig-02.png)
*Figure 8.2 — One number, three baselines*

<!-- → [CHART: Baseline illustration — single metric "Brand Consideration" shown three ways: (1) standalone number 34% with no context (labeled "Uninterpretable"), (2) same number with prior-period baseline of 29% (labeled "Movement: +5 points"), (3) same number with category benchmark of 38% (labeled "Gap to benchmark: -4 points") — caption: The number does not change. Its meaning depends entirely on the baseline it is read against.] -->

Baselines require advance work. You cannot construct a valid pre-campaign baseline after the campaign has run. This is the most common measurement plan failure: the team decides to measure consideration lift but did not run a pre-wave survey before launch. Now the lift cannot be calculated. The report will have consideration numbers, but they will be post-campaign numbers with no denominator. They look like measurement. They are not.

The measurement plan forces the baseline question before the campaign runs, which is the only time it can be answered.

---

## Decision Use and the Question Behind the Metric

Every metric in the KPI map should have a decision use — a statement of the decision that metric is supposed to inform. This is the column that most practitioners skip, and its absence is what turns measurement plans into documentation exercises rather than decision-support tools.

Decision use is a simple concept and a demanding discipline. "This metric will tell us whether to continue the campaign at current spend, increase it, or redirect to a different channel" is a decision use. "Track weekly" is not. "For awareness" is not. A decision use names a specific choice and connects the metric to the moment when that choice must be made.

| Objective | Metric | Definition | Source | Baseline | Target | Cadence | Decision use | Owner | Sign-off |
|---|---|---|---|---|---|---|---|---|---|
| Increase brand consideration among 25–34 target | Brand consideration (aided) | % of survey respondents selecting brand after prompt | Quarterly brand tracker | 29% (Q4 prior year) | 34% by end of campaign | Monthly survey wave | Determines whether to extend campaign flight or shift spend to conversion | Account director | _name / date_ |
| Drive traffic to product page | Click-through rate | Clicks / impressions | Ad platform export | 0.8% (prior campaign avg) | 1.2% | Weekly | Diagnostic — flags creative fatigue or targeting drift; triggers creative review at <0.6% | Media planner | _name / date_ |

*The sign-off field is not decorative. It is the accountability record — the moment when a named practitioner confirmed the metric, definition, and decision use before the campaign ran.*

![An empty seven-column grid schematic of the KPI map — Metric, Definition, Baseline, Target, Cadence, Decision Use, Sign-off — with the Decision Use column emphasized and the Sign-off column accented as the accountability record.](../images/08-measurement-plan-and-kpi-map-fig-03.png)
*Figure 8.3 — The KPI map, core columns*

The decision use column also forces a useful question: is this metric actually connected to a decision, or is it just being tracked because it is available? Many metrics that appear in brand reports are tracked because the platform provides them, not because anyone is going to change behavior based on what they show. Diagnostic metrics often fall into this category. They belong in the report because they help explain mechanical outcomes. They do not belong in the decision-use column unless there is an actual choice they inform.

Removing a metric from the KPI map is not a loss. It is clarity. A report with five metrics that each connect to a decision is more valuable than a report with thirty metrics that provide information without supporting action.

---

## The Sign-Off Field

The KPI map has one element that operates differently from all the others: the sign-off field. Every metric definition, baseline, target, and decision use should carry the name of the person who approved it, and the date. This is not bureaucracy. It is the professional record that makes the measurement plan inspectable.

When the campaign ends and the client asks "did it work?", the answer begins with the KPI map. Did consideration move from 29% to 34%? The map says that was the target. The account director signed off on that target before the campaign launched. This is not a post-hoc rationalization; it is a pre-agreed standard that both sides committed to.

Without the sign-off, the measurement plan is a suggestion. With it, it is an agreement. The difference between those two things is who is accountable for whether the answer is "yes" or "no."

The sign-off also protects the practitioner. Measurement standards set after the data is visible are vulnerable to selection — the standard gets defined to match the outcome. A pre-signed KPI map cannot be adjusted retroactively. The target was the target. The baseline was the baseline. The decision use was specified in advance. That pre-specification is the only thing that makes the report's conclusion defensible under scrutiny.

---

## Where AI Belongs in This Workflow

The KPI map workflow has a clear division of labor. AI can do several things well here: suggest candidate metrics for a given objective, identify standard definitions used in the industry, flag gaps in the map (missing baselines, undefined cadences, metrics without decision uses), and format the completed map for distribution. These are execution tasks. The map's structure is known. The completion check is pattern-matching against a template.

What AI cannot do is decide which metrics are meaningful for this specific business question. That is a judgment about what the organization is trying to achieve, what decisions are actually being made, and what level of measurement precision is warranted given the stakes and the budget. A model can suggest that "brand lift" is a relevant metric for an awareness campaign. It cannot know whether a quarterly brand tracker is the right measurement vehicle given this client's budget constraints, or whether the business decision can tolerate the lag of a survey wave versus needing faster diagnostic signals.

![A five-stage workflow — define objectives, build the KPI map, collect baselines, run the campaign, report against the map — with an AI-assist lane and a human-decides lane running across every stage.](../images/08-measurement-plan-and-kpi-map-fig-04.png)
*Figure 8.4 — The KPI workflow and its division of labor*

<!-- → [DIAGRAM: KPI workflow with labor division marked — five-stage flow: Define Objectives → Build KPI Map → Collect Baselines → Run Campaign → Report Against Map — each stage annotated with two columns: "AI can assist" and "Human must decide" — Stage 1: AI can surface prior objectives / Human decides this campaign's purpose; Stage 2: AI can suggest metrics and flag gaps / Human decides decision uses and signs off; Stage 3: AI can locate source systems / Human confirms baseline validity; Stage 4: AI can monitor and flag anomalies / Human decides whether to adjust; Stage 5: AI can extract and format / Human interprets against decision uses. Caption: The labor division is not about AI capability limits. It is about where professional accountability lives.] -->

The supervision questions apply here as they do everywhere in the Madison framework. Scope: what was the agent asked to generate, and does the output match that scope? Approval: has a named practitioner reviewed and signed off on the map before it governs a campaign? Verification: is every metric definition inspectable, every baseline documented, every decision use explicit?

The sign-off field is where supervision becomes concrete. It is the point in the workflow where the practitioner moves from reviewing an AI-assisted draft to accepting professional accountability for its contents.

---

## What Would Change My Mind

The strongest counter-argument is that pre-campaign measurement planning is an ideal that collides badly with how brand campaigns actually get made — fast, with shifting objectives, under client pressure that sometimes produces goal-post movement mid-flight. If the KPI map requires sign-off before the campaign runs but the campaign brief is still being revised two days after launch, the map either arrives late or becomes a fiction that nobody reads.

If pre-campaign measurement planning consistently produces maps that are obsolete by week two and get silently ignored, then the discipline is adding process cost without adding decision quality. I think the solution to that is a lighter map — fewer metrics, explicitly provisional baselines, a decision use that acknowledges the brief is still stabilizing — rather than no map. But the empirical question of whether any pre-campaign measurement rigor survives contact with real campaign management timelines is one I am not certain about. If you run the map consistently for a quarter and find it gets revised into meaninglessness every time, that is evidence the format needs to change, not the principle.

## Still Puzzling

The hardest measurement problem in brand work is the one this chapter deliberately steps around: attributing outcomes to a campaign when the campaign did not run in isolation. Consideration moved 5 points. The campaign ran. But so did a PR story, a product launch, and a competitor's stumble. The KPI map can define the metric and record the movement. It cannot isolate the cause. The chapter on warranted verbs covers the language discipline for this situation. What I have not resolved is whether there is a practical measurement design that a mid-sized brand team can actually execute — not a randomized controlled trial, but something better than "we saw movement and the campaign ran" — that would produce a defensible causal claim without a research budget that most clients do not have.

---

## LLM Exercises

**Exercise 1 — Metric Definition Audit**
Take a recent report you received or produced. Paste the metric names into the chat and ask the LLM to write an explicit definition for each one — numerator, denominator, source, and what it measures versus what it does not. Compare the definitions to what actually appeared in the report. Where were definitions assumed rather than stated?

**Exercise 2 — KPI Map Draft**
Give the LLM a campaign objective and ask it to suggest a KPI map with columns for metric, definition, source, baseline status, cadence, and decision use. Review the output. Which metrics does it suggest that you would remove? Which decision uses are vague or generic? Rewrite two decision uses to be specific: they should name a choice, not a category.

**Exercise 3 — Missing Baseline Audit**
Take the KPI map draft from Exercise 2. For each metric, ask the LLM to flag whether a baseline is available, estimable from prior data, or needs to be collected before the campaign runs. Then assess: which missing baselines are recoverable in the time available, and which ones mean the metric should be replaced or removed from the outcome tier?

---

## Exercises

**Warm-up**

1. *(Basic recall)* What is the difference between an outcome metric, a leading metric, and a diagnostic metric? Give one example of each from a brand or advertising campaign. *What this tests: whether you can distinguish the three tiers before applying them to a real plan.*

2. *(Concept check)* A colleague says "engagement rate was 4.2% — that's strong." What information is missing from that statement that would make it useful for a decision? Name at least three things. *What this tests: whether you understand what makes a metric interpretable versus merely numerical.*

3. *(Definition)* What is a decision use, and why does a metric without one create problems in a report? *What this tests: whether you understand the purpose of the decision-use column as a professional discipline, not just a documentation step.*

**Application**

4. *(Moderate)* A campaign objective is to increase consideration among first-time buyers in the 28–40 age segment. Write three metrics for the KPI map — one outcome, one leading, one diagnostic. For each, write the definition (numerator and denominator where applicable), name the source, and state the decision use. *What this tests: whether you can build a KPI map entry end-to-end, not just identify metric names.*

5. *(Moderate)* A campaign launched without a pre-campaign measurement wave. The report shows brand consideration at 37%. The client asks whether the campaign moved consideration. What can you say? What can you only suggest? What can you not claim? Use the warranted-verb framework from Chapter 5. *What this tests: whether you can apply the evidence verification framework to a measurement gap.*

6. *(Moderate)* You are reviewing a KPI map a colleague built with AI assistance. It has ten metrics, all with definitions and sources. None of the metrics have a decision use. Write decision uses for three of the following metrics: aided brand awareness, website visit rate, social share of voice, campaign reach, and brand preference. *What this tests: whether you can supply the human judgment that AI assistance skipped.*

**Synthesis**

7. *(Challenging)* A client comes to the kickoff meeting with a list of twelve metrics they want tracked across the campaign. Six are diagnostic, four are leading, and two are outcome metrics. The two outcome metrics do not have available baselines. Walk through how you would restructure this list — what you would keep, what you would move, what you would flag, and what decision you would need the client to make before the campaign launches. *What this tests: whether you can apply the full measurement planning framework to a realistic messy input.*

8. *(Challenging)* The chapter argues that defining metrics after the data is visible introduces selection bias. Describe a specific mechanism by which this happens in a brand context — not the general concept, but the concrete sequence of decisions and choices that produces a biased result. Then describe what the KPI map, completed and signed off before the campaign runs, would prevent at each step in that sequence. *What this tests: whether you understand the causal story behind the sign-off discipline, not just its procedural form.*

**Challenge**

9. *(Open-ended)* "Still Puzzling" raises the attribution problem: consideration moved, the campaign ran, and other things happened simultaneously. Design a measurement approach for a mid-sized brand team — working within realistic budget and timeline constraints, without a randomized controlled trial — that would produce a more defensible claim about campaign contribution than "movement occurred during the flight." What design choices would you make? What would you have to give up? What level of confidence would the approach actually support, and how would you represent that in the report? *What this tests: whether you can reason about causal inference under real-world constraints, and whether you can match your conclusions to what your design actually warrants.*

---

## Chapter 8 Exercises: Measurement Plan and KPI Map
**Project:** Your Own Brand Intelligence System
**This chapter adds:** a measurement plan and KPI map that ties each KPI to a specific decision, with a baseline and a pre-campaign sign-off for every metric.
---
### Exercise 1 — When to Use AI
**The judgment:** Building the map's scaffold — suggesting candidate metrics, writing standard definitions, flagging gaps — is checkable execution work where AI is strong.
- Writing an explicit numerator/denominator definition for each metric name and stating what it does not measure — *Why AI works here:* this is **definition retrieval and structuring** against industry-standard formulas you can verify.
- Flagging gaps in a draft map — missing baselines, undefined cadences, metrics with no decision use — *Why AI works here:* this is **completeness checking** against a known template, a mechanical pattern-match you can audit row by row.
- Sorting a candidate metric list into outcome / leading / diagnostic tiers — *Why AI works here:* this is **classification** against a defined taxonomy, producing a draft you confirm against each metric's actual behavior.

**The tell:** You know you are using AI appropriately when you can evaluate the output — when you have independent criteria to judge whether it is correct, complete, and fit for purpose.
---
### Exercise 2 — When NOT to Use AI
**The judgment:** Deciding which metrics matter for this business question, what counts as success, and signing off before launch are accountability acts, not formatting tasks.
- Writing the decision use — naming the specific choice each metric informs — *Why AI fails here:* it requires **ground truth** about what decisions the organization is actually making and when, which lives nowhere in the metric list.
- Setting the target and confirming the baseline is valid — *Why AI fails here:* defining success after seeing data is selection bias; the pre-launch standard is a **values and accountability** commitment a named human signs, and the model cannot confirm a baseline it never measured (**source adequacy**).
- Asserting that a campaign caused a consideration lift — *Why AI fails here:* the attribution claim outruns the design; the model will generate a confident causal sentence (**hallucinated certainty**) the measurement cannot warrant.

**The tell:** You know you have crossed the line when you are using AI output as your reason for a conclusion rather than as a tool for reaching one.
**Series connection:** Tier 7 — the KPI map governs whether the whole campaign is judged a success; AI assists every stage but the pre-campaign sign-off is where a named practitioner accepts accountability for the standard the report will be measured against.
---
### Exercise 3 — LLM Exercise
**What you're building this chapter:** a measurement plan and KPI map where each KPI is tiered, defined, baselined, and tied to a decision — the capstone verified component of your brand repo.
**Tool:** Claude Project. A Project is right here because the KPI map should inherit the objective from the Chapter 7 brief; loading that brief as Project knowledge keeps the measurement plan anchored to the actual campaign goal rather than a generic one.
**The Prompt:**
```
You are helping me build a measurement plan and KPI map. Every metric must carry: a tier (outcome / leading / diagnostic), an explicit definition (numerator and denominator where applicable), a source, a baseline, a target, a cadence, a DECISION USE (the specific choice this metric informs and when), and a sign-off slot.

Use the campaign objective from my brief (in this Project's knowledge or pasted below). Do not invent baselines or targets — if a baseline is not available, say so and tell me whether it can be collected before launch.

CAMPAIGN OBJECTIVE: [FILL IN or "see brief in Project knowledge"]
AVAILABLE DATA SOURCES: [FILL IN: e.g., quarterly brand tracker, ad platform export, CRM]
KNOWN BASELINES: [FILL IN, or "none yet"]

Do four things:
1. Propose a KPI map as a table: Metric | Tier | Definition (num/denom) | Source | Baseline | Target | Cadence | Decision use | Sign-off (leave as [name/date]).
2. For each metric, write a DECISION USE that names a specific choice — e.g., "determines whether to extend the flight or shift spend to conversion at month 2." Reject vague uses like "track weekly" or "for awareness."
3. Flag every metric whose baseline is unavailable, and mark whether it is estimable from prior data or must be collected BEFORE the campaign runs.
4. Identify any metric that has no real decision use and recommend removing it from the map (it may still appear in the report as diagnostic context).

Rules: do not assert that any metric will prove the campaign caused an outcome. Distinguish outcome, leading, and diagnostic tiers explicitly. Leave all sign-off cells as [name/date] for me to complete before launch.
```
**What this produces:** a tiered KPI map with explicit definitions, flagged baseline gaps, a specific decision use per metric, and empty sign-off slots ready for pre-campaign approval.
**How to adapt this prompt:** *For your own brand:* load your real Chapter 7 brief and use your actual data sources and known baselines — a KPI map with invented baselines is exactly the selection-bias trap the chapter warns about. *For ChatGPT / Gemini:* paste the brief's objective inline; if the model writes vague decision uses, add "every decision use must name a choice and a trigger threshold or timing." *For a Claude Project:* keep this as your measurement-plan Project with your standard metric definitions and sign-off roles as knowledge, so each campaign's map inherits consistent definitions.
**What this produces (next):** a map you complete by setting targets, confirming baselines, and signing off before the campaign launches.
**Connection to previous chapters:** the outcome metric here measures the objective field from the Chapter 7 brief, and the warranted-verb discipline from Chapter 5 governs how you will later report whether the metric moved — "consideration rose during the flight," not "the campaign caused the rise." **Preview of next chapter:** the signed-off map becomes the standard against which the post-campaign report is read, closing the loop the brand intelligence system was built to support.
---
### Exercise 4 — CLI Exercise
**What you're building this chapter:** a `kpi-map.md` generated from a `measurement-inputs.md`, with a machine-conformance check that every metric has a tier, a decision use, and a sign-off slot.
**Tool:** Claude Code.
**Skill level:** Intermediate — reading inputs, structured table output, and a completeness check that distinguishes machine conformance from human adequacy.
**Setup:**
- [ ] Brand repo with `measurement-inputs.md` listing the campaign objective, available data sources, and any known baselines.
- [ ] The verified `creative-brief.md` from Chapter 7 present in the repo for the objective.
- [ ] Claude Code started in the repo folder.
**The Task:**
```
Read measurement-inputs.md and creative-brief.md. Treat both as read-only — do NOT modify them.

Create kpi-map.md with a markdown table, one row per metric, columns: Metric | Tier (outcome/leading/diagnostic) | Definition (num/denom) | Source | Baseline | Target | Cadence | Decision use | Sign-off.

Rules:
- Pull the campaign objective from creative-brief.md; the outcome metric(s) must measure that objective.
- Do not invent baselines or targets. If a baseline is not in measurement-inputs.md, write "MISSING — collect before launch" in the Baseline cell.
- Every Decision use must name a specific choice and a timing or threshold; if you cannot write a real one, write "NO DECISION USE — candidate for removal."
- Leave every Sign-off cell as "[name/date]". Do not invent names or dates.
- Do not write any cell asserting the campaign caused an outcome.

Then run a CONFORMANCE CHECK and print it to the chat (do not change the file based on it): total metrics, count per tier, count of MISSING baselines, count of metrics flagged NO DECISION USE, count of sign-off cells still open. Stop after the check. Do not delete or overwrite any other file.
```
**Expected output:** a new `kpi-map.md` tied to the brief's objective, plus a chat conformance summary counting metrics per tier, missing baselines, decision-use-less metrics, and open sign-off cells.
**What to inspect in the output:** confirm every outcome metric maps to the brief's objective, that no baseline was invented (every gap reads "MISSING — collect before launch"), that each decision use names a real choice, and that all sign-off cells remain "[name/date]".
**If it goes wrong:** if the model invented a baseline or wrote a vague decision use, re-run with "for each baseline, quote its source from measurement-inputs.md or mark it MISSING; rewrite each decision use to name a choice and a trigger." If a cell implies causation, restate the no-causation rule.
**CLAUDE.md / AGENTS.md note:** add to `CLAUDE.md`: "KPI map rule: every metric has a tier, a real decision use, and a baseline (or 'MISSING — collect before launch'); sign-off cells stay open until a named human approves pre-launch. Never invent baselines, targets, names, or causal claims."
---
### Exercise 5 — AI Validation Exercise
**What you're validating:** the `kpi-map.md` from Exercise 4 (or the Exercise 3 KPI map).
**Validation type:** decision-linkage and baseline-integrity check. **Risk level:** High — a map with invented baselines or decoration-only metrics produces a report that cannot answer "did it work?"
**Setup:** open the map next to `measurement-inputs.md` and the Chapter 7 brief, so you can test each baseline and each decision use against its source.
**The Validation Task:** "Evaluate the AI output using this checklist. For each item record Pass / Fail / Cannot determine and explain."
```
Validation Checklist — Measurement Plan and KPI Map
□ Correctness: Is each metric's tier right, and does each definition state a checkable numerator and denominator?
□ Completeness: Does every metric have a tier, definition, source, baseline (or MISSING flag), cadence, decision use, and a sign-off slot?
□ Scope: Do the outcome metrics measure the brief's actual objective, with nothing imported from a generic template?
□ Decision linkage: Does every retained metric name a specific choice and a timing/threshold — no "track weekly" placeholders?
□ Baseline integrity: Is every baseline traceable to a source, with un-available baselines flagged for pre-launch collection rather than invented?
□ Failure mode check: fluent-but-wrong (a metric-rich map that supports no decision)? a baseline or target invented to look complete? a causal claim the design cannot warrant? missing ground truth (success defined after the data is seen)?
```
**What to do with your findings:** each Fail or Cannot determine becomes a fix — restore or flag a baseline, rewrite a vague decision use, remove a decoration-only metric, or strip a causal assertion. The corrected, sign-off-ready map is the verified capstone component you commit for this chapter.
**AI Use Disclosure prompt:** "AI proposed the KPI map, wrote metric definitions, flagged missing baselines, and drafted candidate decision uses from my objective and data sources; I confirmed each baseline, rewrote the decision uses to name real choices, removed metrics with no decision, and will sign off before launch. The model could not determine whether observed movement would be caused by the campaign, so no metric in the map asserts causation."
**Series connection:** the failure mode is a fluent-but-wrong map — dense with metrics, signing off on none, defining success after the fact; the pre-campaign sign-off and decision-use linkage are the Tier 7 verification that makes the eventual report defensible.
---
**Tags:** measurement-plan · kpi-map · decision-use · metric-tiers · baseline-integrity · pre-campaign-signoff
