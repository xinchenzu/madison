# Chapter 14 — Campaign Performance Report
*The charts were confident. The recommendation was not connected to them.*

The report lands in the client's inbox with twelve slides. There are bar charts, percentage changes, a summary paragraph, and a bold recommendation at the end. It looks complete. It looks authoritative. It looks like work was done.

The client reads the recommendation and asks: what was the baseline for that CTR comparison? The account manager does not know — the export did not include prior period data and nobody checked. The client asks: is the consideration lift you're attributing to the campaign actually from the campaign, or did the trade press story from week two drive it? Nobody thought to separate those. The client asks: what should I do differently next quarter based on this? The report does not say.

The report described what happened. It did not support a decision. The recommendation at the end was detached from the evidence in the middle, which was detached from the KPI map that should have governed what got measured in the first place.

This is metric theater — the production of a report that resembles decision support without actually providing it. It is the performance reporting equivalent of the twenty social variants from Chapter 2: the artifact is polished and the professional judgment is missing. The fix is not better charts. It is a different structure — one that makes the chain from raw export to recommendation visible and every link in it inspectable.

---

## The Three Layers of a Performance Report

A performance report does three distinct things, and most reports collapse them into one undifferentiated narrative. The collapse is where the problems live.

The first layer is description: what the metrics show. This is the factual layer. The click-through rate was 1.4%. The brand consideration score in the post-campaign survey was 34%. The share of voice in the monitored category increased 6 points. These are observations. They are true or false. They can be verified against the source files. AI is well-suited to this layer — it can extract, organize, and format metric values accurately and quickly, provided the source data is clean and the metric definitions are specified.

The second layer is interpretation: what the metric movement means. This is where description ends and analysis begins. A CTR of 1.4% means something different if the prior campaign averaged 0.9% than if the category benchmark is 2.1%. A 34% consideration score means something different if the pre-campaign baseline was 29% than if it was 37%. Interpretation requires context — specifically, the baseline and target from the KPI map — and it requires judgment about whether the movement observed is signal or noise. AI can assist with this layer by surfacing comparisons and flagging anomalies, but the interpretation itself requires a practitioner who understands what the metric is supposed to be measuring and what the business decision depends on.

The third layer is recommendation: what action follows. This is the decision layer. It answers the question the client is actually asking: given what we now know, what should we do next? Maintain current spend? Shift budget to a performing channel? Change the creative? Test a different audience segment? Run a follow-up study? The recommendation should follow from the interpretation. If the interpretation says "consideration moved significantly above target, driven by the 35-44 segment," the recommendation should name what that means for the next campaign decision, not just restate the finding.

![Vertical three-tier stack: description at the base (AI extracts and formats), interpretation in the middle (AI surfaces candidates, human decides meaning), and recommendation at the top (human accountable), with accountability shifting from machine-assisted to human-owned.](../images/14-campaign-performance-report-fig-01.png)
*Figure 14.1 — The three layers of a performance report*

<!-- → [DIAGRAM: Three-layer report structure — vertical stack with three labeled tiers: Description (bottom), Interpretation (middle), Recommendation (top) — each tier annotated with what it contains and what it requires — Description: metric values, source files, export dates / AI can extract and format / verified against KPI map; Interpretation: baseline comparisons, anomaly flags, signal vs. noise judgment / AI can surface candidates / human decides meaning; Recommendation: action, next test, decision owner / AI cannot supply / human accountable. Caption: Most reports present all three layers as the same kind of content. They are not. The distinction determines who is responsible for each claim.] -->

The structural discipline of a good performance report is keeping these three layers visually and rhetorically distinct. A sentence that reads "CTR increased 56% versus prior campaign, indicating the new creative is driving stronger audience activation, which suggests we should increase investment in this format next quarter" is doing all three things in a single sentence — and it is doing them without labeling which claims are factual, which are inferential, and which are recommendations. Pull them apart and you can assess each one. Collapse them and you cannot.

---

## The KPI Map as Report Spine

The performance report should not be designed from scratch when it is time to write it. It should be assembled against the KPI map that was built before the campaign ran. This is the connection between Chapter 8 and this one: the map defines the metrics, the definitions, the baselines, and the decision uses. The report asks, for each row in the map: what did we find, and what does that mean for the decision this metric was supposed to inform?

This discipline solves the most common performance reporting failure: the report answers questions nobody asked while omitting answers to questions that were agreed to matter. If the KPI map specified brand consideration as the primary outcome metric, the report should lead with brand consideration — not with impressions, which are easier to get and look more impressive, or with engagement rate, which moved in an interesting direction but was never the decision metric.

| KPI Map Field | Map Entry | → | Report Section Field | Report Entry |
| --- | --- | :-: | --- | --- |
| Objective | Increase consideration | → | Outcome reported | Brand consideration measured |
| Metric | Brand consideration (aided) | → | Result | 33% post-wave |
| Definition | % selecting brand after prompt | → | Definition used | % selecting brand after prompt |
| Baseline | 29% pre-wave | → | Comparison point | +4 pts vs. 29% baseline |
| Target | 34% by end of flight | → | Target status | 1 pt below target |
| Decision use | Determines whether to extend campaign | → | Decision supported | Recommendation: extend flight two weeks to close gap |
| Objective | Drive product page traffic | → | Outcome reported | CTR result |
| Metric | CTR | → | Result | 1.4% |
| Definition | Clicks / impressions | → | Definition used | Clicks / impressions |
| Baseline | 0.8% prior campaign | → | Comparison point | +0.6 pts vs. prior |
| Target | 1.2% | → | Target status | Above target |
| Decision use | Triggers creative review if < 0.6% | → | Decision supported | Recommendation: maintain current creative in next flight |

*The report is not a fresh document. It is a populated version of the KPI map.*

![Two aligned horizontal bands joined by per-field connectors: the upper KPI-map planning layer and the lower populated-report layer, with the target-status connector weighted to show an underperforming metric cannot be quietly dropped.](../images/14-campaign-performance-report-fig-02.png)
*Figure 14.2 — KPI map to report mapping*

A report built against the KPI map is also accountable in a specific way: it cannot quietly drop a metric that underperformed. If the map committed to measuring something and the report does not include it, that omission is visible. The metric was either not measured (a planning failure that should be noted) or the result was unfavorable (a finding that should be included). Selective reporting — including the metrics that look good and omitting the ones that do not — is harder when the report structure is determined by a prior agreement rather than by post-hoc selection.

---

## The Caveat Is Not a Weakness

Every performance report has limitations. The data has coverage gaps. The measurement design has confounds. The sample was smaller than planned. The timing created noise. These limitations are not embarrassing — they are the normal condition of brand measurement, which almost never occurs under controlled conditions. The question is not whether limitations exist but whether they are visible.

A caveat placed near the conclusion it qualifies is a professional act. It says: I saw this limitation, I am telling you it is there, and I am still making this recommendation because the evidence, with its limitations, is sufficient to support it. That is accountability. A report with no caveats is either working with unusually clean data or is not being honest about its evidence.

| Limitation Type | Example Caveat | Where to Place It |
| --- | --- | --- |
| Sample size | "Post-wave survey n=312; directional at segment level, not projectable to full population" | Immediately below the consideration metric result |
| Confound | "Week 3 saw significant earned media coverage; consideration lift may reflect both paid and organic effects" | In the interpretation section for the consideration finding |
| Source lag | "Social sentiment data has 48-hour processing lag; final week of flight not fully represented" | In the data sources section and flagged in the relevant metric row |
| Attribution | "Campaign ran without a holdout group; reported lift is correlated with campaign exposure, not attributable to it" | In the executive summary as a standing caveat on all outcome claims |
| Baseline | "Pre-campaign baseline estimated from Q4 tracker; different survey vendor than post-wave" | Below the baseline comparison anywhere it appears |

*Caveats are not footnotes to be buried. They are qualifications that belong adjacent to the claims they qualify.*

![Five limitation types — sample size, confound, source lag, attribution, baseline mismatch — each connected to a placement location within a faint report column, with the attribution caveat marked as a standing qualifier on all outcome claims.](../images/14-campaign-performance-report-fig-04.png)
*Figure 14.4 — Caveat placement guide*

The causal language discipline from Chapter 5 applies here with particular force. A performance report is exactly the context where "caused" and "drove" want to appear — the campaign ran, the metrics moved, it feels like the campaign caused the movement. But without a holdout group, a pre-post design with no competing explanations, or some form of causal control, the campaign and the metric movement are correlated in time, not causally linked. The warranted verb is "is associated with," "coincided with," or "occurred during a period of" — not "caused" or "drove." The distinction is not pedantic when the client is deciding how much to spend on the next campaign based on a causal claim that the evidence cannot support.

---

## The Next-Test Recommendation

A performance report that ends with findings and no forward direction has done half the job. The decision the report supports is not just "did this work?" It is "what should we do next, and what should we test to know if we are right?"

The next-test recommendation is a specific element: a proposed experimental variation for the next campaign that would produce evidence bearing on an open question from this one. If the current report shows that the 35-44 segment drove disproportionate consideration movement but the 25-34 segment did not respond, the next test is not "run the same campaign again." It is: run a variant in the 25-34 segment with modified creative to test whether the non-response was a targeting issue, a message issue, or a genuine lack of category interest in that segment.

![Three stacked three-node chains, each running from a finding to the open question it raises to a proposed test design, echoing the description-interpretation-recommendation color logic of the report.](../images/14-campaign-performance-report-fig-03.png)
*Figure 14.3 — Next-test recommendation structure*

<!-- → [DIAGRAM: Next-test recommendation structure — three-node flow: (1) Finding from current report → (2) Open question it raises → (3) Proposed test design — three example chains shown: "35-44 over-indexed on consideration" → "Is 25-34 non-response a message or targeting issue?" → "A/B test: same creative, tighter 25-34 targeting vs. modified creative for 25-34" | "CTR above target, consideration below target" → "Is high CTR driving unqualified traffic?" → "Add landing page conversion tracking and post-click survey next flight" | "Share of voice increased, competitor activity decreased" → "Is SOV gain campaign-driven or competitor-driven?" → "Monitor competitor activity week-by-week, isolate before attributing SOV movement to campaign." Caption: The next-test recommendation turns a report into the first step of a learning cycle rather than a period at the end of a campaign.] -->

The next-test recommendation is human work. An AI agent can suggest candidate tests based on the findings, and that is a useful input. But the decision about which test is worth running — given the budget available, the strategic priorities, the client relationship, and the timeline for the next campaign — is a judgment that requires contextual knowledge the agent does not have. The agent surfaces options; the practitioner decides.

---

## The Human-Review Field

The performance readout, like the KPI map, should have a sign-off field. The field records who reviewed the report, on what date, and what their accountability is. This is the point in the workflow where the agent's assembly work becomes a professional document.

The human-review field is not a formality. It is the boundary between an AI-assisted analysis and a professional recommendation. Before the sign-off, the document is a draft with numbers in it. After it, the document carries a practitioner's judgment about what the numbers mean and what the client should do. Those are different things, and the distinction should be visible.

The review itself has a checklist: Do the metrics in the report match the KPI map? Is every source named and dated? Are the caveats present and adjacent to the conclusions they qualify? Does the report contain any causal claims that the evidence does not support? Does the recommendation follow from the interpretation, or is it a separate assertion? Does the report end with a forward direction?

| Check | Status |
| --- | --- |
| Metrics match KPI map | ☐ Verified ☐ Discrepancy noted |
| Sources named and dated | ☐ All sourced ☐ Gaps flagged |
| Causal language audit | ☐ No unwarranted causal claims ☐ Claims rewritten |
| Caveats adjacent to conclusions | ☐ Placed correctly ☐ Moved |
| Recommendation follows from interpretation | ☐ Connected ☐ Disconnect noted |
| Forward direction included | ☐ Next test specified ☐ Missing — requires revision |
| Reviewer name and date | __________________________ |

*The checklist is not a quality rating. It is a record that a named person examined these specific elements before the report moved.*

A report that passes this checklist is not a perfect report — no report that depends on imperfect data can be perfect. It is a defensible report: one in which the claims are inspectable, the limitations are visible, and the recommendation is traceable to the evidence that supports it. That is the standard Madison sets for performance reporting, and it is a higher standard than most campaign reports currently meet.

---

## What Would Change My Mind

The argument against this level of reporting discipline is that clients do not want it. They want a clear story, a confident recommendation, and a number that went up. A report that leads with caveats and carefully labels its interpretations as interpretations rather than facts will lose in a competitive pitch to a report that leads with "your campaign delivered a 56% lift in CTR and drove significant consideration movement." If the market rewards confident metric theater, requiring practitioners to produce qualified, inspectable reports is asking them to compete at a disadvantage.

I think this is true in some client relationships and false in others — specifically, false in relationships where a practitioner has the standing to say "I am going to tell you what the evidence actually supports, and that is more valuable than a confident story that collapses under scrutiny." Building that standing is partly a skill and partly a track record. But the argument that the market structurally rewards overconfident reporting is one I take seriously. If you apply this framework and consistently find that clients respond worse to accurate, inspectable reports than to polished metric theater, that is evidence the problem is upstream of the report — in the client relationship, the brief, or the expectations set at the start of the engagement.

## Still Puzzling

The hardest question in performance reporting is also the most important one: what would it actually take to make a defensible causal claim? The held-out control group is the gold standard and is almost never available at the budgets and timelines of most brand campaigns. There are quasi-experimental approaches — difference-in-differences designs, synthetic controls, geographic holdouts — that can do better than pre-post comparison without a full RCT. I do not have a clean answer for when these approaches are practical for a mid-market brand team versus when "is associated with" is honestly the best we can do.

---

## LLM Exercises

**Exercise 1 — Layer Separation**
Take any performance report you have recently written or received. Paste the executive summary into the chat and ask the LLM to separate it into three layers: description (what the metrics show), interpretation (what the movement means), and recommendation (what action follows). Then review the output. Where did the original report collapse layers? Where was the interpretation presented as description, or the recommendation detached from the interpretation?

**Exercise 2 — Causal Language Audit**
Give the LLM five sentences from a performance report — choose ones that include words like "drove," "caused," "resulted in," "led to," or "delivered." Ask it to identify which ones are making causal claims and whether the evidence described in the sentence supports a causal interpretation. Then rewrite the ones it flags using warranted verbs.

**Exercise 3 — Next-Test Generation**
Give the LLM two or three key findings from a campaign report. Ask it to generate a next-test recommendation for each one using the three-node structure: finding → open question → proposed test. Review the output. Which proposed tests would you run? Which are impractical given timeline or budget? What the LLM cannot assess is whether the test is worth running given your specific context — that evaluation is yours.

---

## Exercises

**Warm-up**

1. *(Basic recall)* What are the three layers of a performance report, and what kind of claim does each one make? Give one example of a sentence that belongs in each layer. *What this tests: whether you can distinguish description, interpretation, and recommendation before applying the structure.*

2. *(Concept check)* Why should a performance report be built against the KPI map rather than assembled from whatever metrics are available at reporting time? What failure does the KPI map prevent? *What this tests: whether you understand the structural connection between planning and reporting.*

3. *(Definition)* What is metric theater, and what distinguishes a performance report that produces it from one that supports decisions? Give a specific structural difference. *What this tests: whether you can identify the report form that signals the problem, not just the general concept.*

**Application**

4. *(Moderate)* A performance report includes the following sentence: "The campaign drove a 12-point increase in brand consideration, demonstrating that the new messaging platform is resonating with the target audience." Identify every place where this sentence makes a claim stronger than warranted. Rewrite it in three separate sentences — one description, one interpretation, one recommendation — using warranted verbs throughout. *What this tests: whether you can apply layer separation and the causal language audit to a realistic example.*

5. *(Moderate)* You are reviewing a performance report before it goes to a client. The report includes strong consideration lift findings but no mention of the fact that a major news story about the brand ran in week two of the campaign flight. Write the caveat that should appear in the report, specify where it should be placed, and explain what decision it would affect if the client were using the consideration finding to justify increasing campaign spend. *What this tests: whether you can identify a confound, write a specific caveat, and connect it to a downstream decision.*

6. *(Moderate)* Using the KPI map structure from Chapter 8, create a two-row KPI map for a hypothetical brand awareness campaign. Then populate the corresponding report fields for each row, including a result, a baseline comparison, a target status, and a decision output. For one row, show a result that met the target; for the other, show a result that missed it. *What this tests: whether you can connect the planning and reporting frameworks end-to-end.*

**Synthesis**

7. *(Challenging)* A performance report shows that CTR was well above target (1.8% vs. 1.2% target) but brand consideration did not move (33% vs. 34% target, within margin of error). The client wants to know whether the campaign worked. Using the three-layer structure and the warranted-verb discipline, write a three-paragraph executive summary that answers the client's question accurately without either false confidence or evasion. Include a caveat and a next-test recommendation. *What this tests: whether you can produce a complete, honest performance narrative under the constraint of mixed results.*

8. *(Challenging)* The chapter argues that a report built against the KPI map cannot quietly drop a metric that underperformed. Describe a realistic scenario in which a practitioner would be tempted to drop a metric from a report — what the metric was, why it underperformed, and what the client context looks like. Then describe what the professionally accountable response is, including how to present a poor result without undermining the overall recommendation. *What this tests: whether you can apply the accountability framework to a situation with real professional stakes.*

**Challenge**

9. *(Open-ended)* "Still Puzzling" raises the question of when quasi-experimental approaches — difference-in-differences, geographic holdouts, synthetic controls — are practical for mid-market brand teams. Research or reason through one of these approaches: what does it require in terms of data, design, and timeline? Under what conditions would a typical brand team with a modest measurement budget be able to implement it? What would the resulting claim be able to say that a standard pre-post comparison cannot? What would it still not be able to say? *What this tests: whether you can engage with the causal inference problem as a practical design question rather than a theoretical one.*

---

## Chapter 14 Exercises: Campaign Performance Report
**Project:** Your Own Brand Intelligence System
**This chapter adds:** a three-layer campaign performance report — description, interpretation, recommendation — built against the KPI map so that every metric ties to the next decision it was meant to inform.

---

### Exercise 1 — When to Use AI
**The judgment:**
- Extracting and formatting the description layer — pulling metric values from clean export files into a labeled table — *Why AI works here:* this is structured extraction with a checkable answer; the values are true or false against the source files and you can verify each one.
- Auditing a draft summary for causal language — flagging "drove," "caused," "led to," "delivered" — *Why AI works here:* it is pattern-detection over text against a stated rule, and you retain the final call on whether each flagged verb is warranted.
- Generating candidate next-test designs from a set of findings using the finding → open question → proposed test structure — *Why AI works here:* it is divergent option generation, fast and useful as input, with the practitioner deciding which test is worth running.

**The tell:** You know you are using AI appropriately when you can evaluate the output — when you have independent criteria to judge whether it is correct, complete, and fit for purpose.

---

### Exercise 2 — When NOT to Use AI
**The judgment:**
- Deciding whether a metric movement is signal or noise given the baseline and target — *Why AI fails here:* missing ground truth on what the metric is supposed to measure and what the business decision depends on; the agent surfaces comparisons but cannot supply the contextual judgment that separates a real lift from sampling noise.
- Asserting that the campaign caused a consideration lift when there was no holdout — *Why AI fails here:* hallucination risk meets source adequacy. The data shows correlation in time; a fluent "the campaign drove the lift" is exactly the over-strong claim the evidence cannot support, and the client is spending money on it.
- Writing and signing the recommendation that goes to the client — *Why AI fails here:* accountability. The recommendation carries a practitioner's judgment about what to do next under a specific budget, relationship, and timeline; the sign-off field is the boundary between an AI-assisted draft and a professional document.

**The tell:** You know you have crossed the line when you are using AI output as your reason for a conclusion rather than as a tool for reaching one.
**Series connection:** Tier 6 (Interpretation and Judgment) shading into Tier 7 (Accountability) — the interpretation layer needs human meaning-making the agent cannot supply, and the signed recommendation needs a person who answers for the advice.

---

### Exercise 3 — LLM Exercise
**What you're building this chapter:** a complete three-layer performance report populated against the KPI map, with caveats adjacent to their conclusions and a next-test recommendation. **Tool:** Claude (claude.ai chat) — a single campaign readout is a bounded, one-pass artifact.
**The Prompt:**
```
You are helping me build a campaign performance report with strict layer discipline. Keep description, interpretation, and recommendation visually and rhetorically separate — never collapse them into one sentence.

Here is the KPI map this campaign committed to (objective, metric, definition, baseline, target, decision use for each row):
[FILL IN your KPI map rows]

Here are the results from the export, with source file names and dates:
[FILL IN metric results, each with its source and date]

Here are known limitations of the measurement (sample sizes, confounds, source lags, attribution design, baseline mismatches):
[FILL IN]

Build the report in three labeled layers for each KPI map row:
1. DESCRIPTION: the metric value, its source, and its date. State only what the numbers show.
2. INTERPRETATION: compare to the baseline and target; say whether the movement is above/below/at target and whether it is likely signal or noise. Surface comparisons; flag where you are uncertain.
3. RECOMMENDATION: the action that follows from the interpretation, tied to the decision use named in the KPI map.

Rules:
- Use warranted verbs only. Do not write "caused," "drove," "led to," or "delivered" unless I have given you a holdout or controlled design. Default to "is associated with," "coincided with," "occurred during."
- Place each caveat immediately adjacent to the conclusion it qualifies, not in a footnote.
- Do not drop any metric the KPI map committed to. If a metric underperformed or was not measured, say so explicitly.
- End with a next-test recommendation for the strongest open question, using: finding → open question → proposed test.
- Add a sign-off field with blank reviewer name and date. Do not sign it yourself.
```
**What this produces:** a report where each KPI row appears as three clearly labeled claims, caveats sit next to their conclusions, causal language stays warranted, and a next-test design closes the loop — ready for a human reviewer to sign. **How to adapt this prompt:** *For your own brand:* paste your real KPI map and exports; if you have no holdout group, hold the line on warranted verbs even when the lift looks dramatic. *For ChatGPT / Gemini:* same block; both tend to drift toward confident causal phrasing in the interpretation layer — re-paste the warranted-verbs rule if they do. *For a Claude Project:* if you report on a recurring program, store the KPI map and caveat-placement conventions in Project knowledge so every readout inherits the same spine. **Connection to previous chapters:** the report is a populated version of the KPI map from the strategy/measurement chapter, and the warranted-verb discipline is the causal-language rule from the evidence chapter applied where the temptation to overclaim is strongest. **Preview of next chapter:** the report tells you what the paid campaign did; Chapter 15 turns to the signals the campaign generated in the wild — media coverage and social mentions — and how to route them without overreacting.

---

### Exercise 4 — CLI Exercise
**What you're building this chapter:** a report skeleton auto-populated from export files against your KPI map, with a built-in causal-language and dropped-metric audit. **Tool:** Claude Code · **Skill level:** Intermediate
**Setup:**
- [ ] A folder with the campaign's export files (CSV) and a `kpi-map.md` or `.csv` listing objective, metric, definition, baseline, target, and decision use per row.
- [ ] A notes file listing known limitations (confounds, sample sizes, source lags, attribution design).
- [ ] Claude Code open in that folder.
**The Task:**
```
Read kpi-map and the export files in this folder. Build a file called performance-report.md.

Scope:
- READ: the KPI map, the export CSVs, and the limitations notes file.
- WRITE: only performance-report.md (create it; do not overwrite anything else).
- LEAVE ALONE: all export and source files — do not edit or move them.

For each row in the KPI map, produce three labeled sections — DESCRIPTION, INTERPRETATION, RECOMMENDATION — pulling the metric value, source filename, and date into DESCRIPTION.

Rules:
- Pull values only from the export files. If a metric the KPI map commits to has no value in any export, write "NOT FOUND IN EXPORTS — measurement gap" rather than estimating.
- In INTERPRETATION, compare to the baseline and target from the map. Do not assert causation; the campaign had no holdout. Use warranted verbs only.
- Place each relevant caveat from the limitations file next to the conclusion it qualifies.
- End the file with a next-test section and a blank reviewer sign-off line.

Stop conditions: stop after writing the file. Do not fabricate metric values, do not sign off, and do not delete or edit any source.

Verification step: after writing, print (a) any KPI-map metric marked NOT FOUND, (b) any sentence containing a causal verb so I can audit it, and (c) a confirmation that the sign-off line is blank.
```
**Expected output:** a `performance-report.md` with three labeled layers per KPI row, adjacent caveats, a next-test section, and a printed audit of measurement gaps and any causal-verb sentences. **What to inspect in the output:** whether every committed metric is present (or honestly flagged as a gap), and whether the printed causal-verb list is empty — if not, each flagged sentence needs a human rewrite. **If it goes wrong:** if the agent invents a metric value, re-run and quote the "pull values only from the export files" rule; if it slips into causal language, the printed audit is your catch — rewrite those sentences before the report moves. **CLAUDE.md / AGENTS.md note:** add: "Performance reports: pull metric values only from named export files; never assert causation without a stated holdout/control; never sign the reviewer field; always print a causal-verb audit and a list of committed-but-missing metrics."

---

### Exercise 5 — AI Validation Exercise
**What you're validating:** an AI-assembled performance report — whether its claims are inspectable, its caveats placed, and its recommendation traceable to evidence. **Validation type:** verification of an analysis artifact against source data and against the warranted-claim standard. **Risk level:** Medium-High — a fluent over-claim sends the client's next-quarter spend in the wrong direction. **Setup:** open the report from Exercise 3 or 4 next to the KPI map and the raw exports, and walk every claim back to its source.
**The Validation Task:** "Evaluate the AI output using this checklist. For each item record Pass / Fail / Cannot determine and explain."
```
Validation Checklist — Campaign Performance Report
□ Correctness: Does every value in the DESCRIPTION layer match the export file it cites?
□ Completeness: Is every metric the KPI map committed to present, or honestly flagged as a measurement gap?
□ Scope: Are description, interpretation, and recommendation kept distinct, with no sentence doing all three at once?
□ Warranted causation: Is there any "caused / drove / led to / delivered" claim without a holdout or controlled design behind it?
□ Caveat placement: Is each caveat adjacent to the conclusion it qualifies rather than buried as a footnote?
□ Failure mode check: fluent-but-wrong? (a confident causal story the data only supports as correlation?) missing ground truth? (an interpretation of signal-vs-noise the data cannot actually settle?)
```
**What to do with your findings:** rewrite every unwarranted causal claim to a warranted verb, restore any dropped metric, and confirm the recommendation actually follows from the interpretation; only then route the report to a named reviewer for sign-off. **AI Use Disclosure prompt:** "The performance report's description layer was extracted from named export files by [tool] and the causal-language audit was AI-assisted; all interpretations, caveat placements, and the recommendation were reviewed and approved by [name], who signed off after verifying values against source data." **Series connection:** the failure mode is fluent-but-wrong causal overclaiming on missing ground truth, sitting at Tier 6 (interpretation) — the validation exists because the agent can format the numbers but cannot judge what they mean or carry the recommendation.

---
**Tags:** performance-reporting, three-layer-structure, kpi-map-spine, causal-language-audit, warranted-claims, brand-intelligence-system
