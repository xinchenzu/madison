# Chapter 15 — Media Coverage and Issue Routing
*The gap between finding the signal and knowing what to do with it.*

The monitoring workflow found four things on the same morning. A negative mention in a mid-tier trade publication — a journalist had described the product as "adequate for small teams but struggling to scale." A product review on a software comparison site, two stars, written by someone who had clearly misunderstood a core feature as a limitation. A press item in a regional outlet picking up a story that had run the previous week in a national publication, introducing no new information but giving the story additional circulation. And a social post, three hours old, with engagement rising in a pattern that suggests it is catching — not viral, but moving.

The tempting move is to generate responses. The monitoring tool has a response interface. The AI can draft something for each one in under a minute. The speed is real. The risk is also real, and it compounds across all four signals simultaneously.

The trade publication mention: does the journalist have another story coming? Is this a relationship worth protecting, a critic worth engaging, or a passing observation that a response would amplify? The product review: is the misunderstanding common enough to be worth a response that corrects it, or does responding to a two-star review on a comparison site draw attention the brand would prefer to leave unread? The press item: is there any daylight between this regional pickup and the original story that creates a new problem, or is it genuinely just circulation? The social post: is the rising engagement organic, or is it being pushed by an account or network that has a stake in the story? Is the sentiment in the replies favorable, unfavorable, or divided?

Four signals. Four different questions. Four different people who should probably be consulted before anything is sent. None of that fits in the response interface's input box, and none of it can be determined in the minute it takes to generate a reply.

The failure mode here is not that the monitoring workflow ran. The failure is treating a detection capability as a response capability. Finding signals is one job. Routing them to the right people with the right context is a different job. Deciding what the brand says in public is a third job, and it belongs to humans with authority and accountability, not to a workflow that can draft at speed.

---

The issue-routing digest is the structure that sits between detection and response, and its job is to convert noisy incoming signals into clear escalation choices.

The digest does not write the response. It does not recommend whether to respond. It characterizes each signal, classifies the type of issue it represents, labels the sentiment as a model judgment rather than a fact, assigns a severity, names the owner who should make the decision, identifies the response gate — what needs to happen before any public communication is authorized — and optionally drafts holding language that could be used if the owner decides a holding response is appropriate while the situation is assessed.

That last element — holding language — deserves a moment of attention before going further. A holding response is not a response to the substance of an issue. It is an acknowledgment that the brand is aware of the situation and is looking into it. "Thank you for sharing this — we're looking into it and will follow up shortly." That sentence commits to nothing, creates no new claims, and buys time for the people who need to assess the situation to do so. The agent can draft it efficiently. The human approves it before it goes anywhere. That division of labor is appropriate — generating the language is pattern work; authorizing it to represent the brand in public is not.

| Source | Captured | Issue Class | Sentiment | Severity | Owner | Recommended Action | Response Gate | Holding Language |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Trade publication mention ("adequate but struggling to scale") | 6/14 08:10 | Competitive / reputation | Negative (model judgment) | Minor | Comms lead | Monitor; assess relationship before any reply | Comms lead confirms severity and decides reply vs. no reply | — |
| Comparison-site review, 2 stars (feature misunderstood) | 6/14 08:15 | Product complaint | Negative (model judgment) | Minor | Customer success | Assess whether misunderstanding is common; consider correction | CS lead reviews source; decides whether response amplifies | — |
| Regional outlet pickup of last week's national story | 6/14 08:22 | Neutral coverage | Neutral (model judgment) | Minor | Comms lead | Log; confirm no new claim introduced | Comms lead confirms no daylight from original story | — |
| Social post, 3 hrs old, engagement rising | 6/14 08:30 | Crisis signal (candidate) | Divided (model judgment) | Major | Senior comms lead | Verify amplification source; assess trajectory urgently | Senior comms lead confirms severity, authorizes holding language or no response | "Thank you for sharing this — we're looking into it and will follow up shortly." (draft) |

*The digest is a decision-support document. Every column exists to inform the owner's judgment, not to replace it.*

![Schematic of one digest row as nine aligned cells, with the sentiment cell flagged as model judgment, the response-gate cell weighted as load-bearing, and the holding-language cell drawn dashed to mark it as an optional candidate.](../images/15-media-coverage-and-issue-routing-fig-01.png)
*Figure 15.1 — The issue-routing digest structure*

---

The classification step is where the agent adds the most value in this workflow, and it is the step where the categories need to be defined before the workflow runs rather than inferred during it.

An issue taxonomy for a brand monitoring workflow typically includes: product complaint (a user or customer describing a specific problem with the product or service), factual error (a publication or post stating something demonstrably incorrect about the brand, product, or category), reputation risk (a mention that creates association between the brand and something harmful, controversial, or unwanted), crisis signal (early indicators of a situation that could escalate to require coordinated response), competitive mention (a piece that compares the brand to competitors in a way that may require response or tracking), neutral coverage (monitoring-worthy but not action-requiring), and positive coverage (worth logging and potentially amplifying).

The taxonomy should be defined in the response policy document before the monitoring workflow begins, not constructed in real time as signals arrive. The agent classifies against the defined taxonomy; the human reviews the classification and corrects it when the agent has miscategorized. Miscategorization is common enough to be expected — the line between a reputation risk and a product complaint, or between a crisis signal and a piece of negative coverage that does not escalate, requires contextual knowledge the agent does not have. The classification is a starting point for the owner's judgment, not a substitute for it.

![Decision-tree flowchart routing an incoming signal through a cascade of yes/no tests into one of seven issue classes — factual error, product complaint, reputation risk, crisis signal, competitive mention, or neutral/positive coverage — with the high-stakes classes marked.](../images/15-media-coverage-and-issue-routing-fig-02.png)
*Figure 15.2 — Issue taxonomy decision tree*

<!-- → [DIAGRAM: Issue taxonomy decision tree — starting from "incoming signal," branching through: does it contain a factual error about the brand? (yes → factual error class); does it describe a product or service problem from a customer? (yes → product complaint class); does it associate the brand with controversy? (yes → reputation risk class); does the engagement pattern or source suggest rapid escalation? (yes → crisis signal class); does it compare the brand to competitors? (yes → competitive mention class); otherwise → neutral or positive coverage. Caption: The tree is a starting point, not a final answer. The agent classifies; the human confirms.] -->

Sentiment labeling requires a specific discipline in this workflow: every sentiment label must be marked as model judgment in the digest. Not "this post is negative" but "sentiment: negative (model judgment)." The parenthetical is not cosmetic. Sentiment classification from a language model is a probability estimate derived from the text's surface features, and it is wrong often enough in exactly the situations that matter most — irony, sarcasm, technical language that reads as negative but is neutral in context, community-specific vocabulary that the model does not recognize — that treating it as a fact creates decisions based on a misreading.

The practitioner who reads the digest marked "sentiment: negative (model judgment)" and looks at the source before deciding whether to escalate is doing the right thing. The one who reads "sentiment: negative" and escalates without checking has made the model's probability estimate into a policy decision. Those are different workflows, and only one of them protects the brand.

---

Severity in a media monitoring context is a function of different variables than severity in a QA audit, and the variables need to be stated explicitly in the response policy.

The factors that increase severity: the source has high reach or editorial authority; the claim is factually incorrect and could spread; the engagement pattern suggests the signal is accelerating rather than decaying; the issue connects to a sensitive topic area (safety, discrimination, regulatory compliance) where the brand has heightened exposure; the signal originates from an account or publication with which the brand has an existing relationship that could be damaged by inaction; the signal has already been picked up by secondary sources.

The factors that decrease severity: the source has limited reach and no demonstrated amplification history; the claim is a matter of opinion rather than fact; the engagement is low and flat; the issue is isolated rather than part of a pattern; the brand has no existing relationship with the source that inaction would damage.

| Factors That Increase Severity | Factors That Decrease Severity |
| --- | --- |
| High reach or editorial authority — the source can move the conversation | Limited reach, no amplification history — the signal stays contained |
| Factually incorrect claim that could spread — error compounds if unaddressed | A matter of opinion, not fact — there is nothing to correct |
| Accelerating engagement pattern — the signal is catching, not decaying | Low, flat engagement — the signal is not gaining momentum |
| Connects to a sensitive topic (safety, discrimination, regulation) — heightened exposure | Isolated rather than patterned — no broader trend behind it |
| Originates from a source with an existing brand relationship — inaction could damage it | No existing relationship to damage — inaction carries no relational cost |
| Already picked up by secondary sources — circulation is widening | Not yet picked up elsewhere — still a single point |

*Severity is not a feeling about how bad something looks. It is a structured assessment of how much damage could be done and how quickly.*

![Two mirrored columns balanced on a central fulcrum: factors that raise a media signal's severity on one side and the factors that lower it on the other, framing severity as a weighing rather than a feeling.](../images/15-media-coverage-and-issue-routing-fig-03.png)
*Figure 15.3 — Severity factors for media signals*

The severity rating in the digest determines the escalation path. A critical severity signal — a factually incorrect claim in a high-reach publication that is accelerating — goes to the senior communications lead immediately, with a recommended response window. A major severity signal — a product complaint from a customer with a visible audience, accurate in its description of the problem — goes to the customer success lead and the communications lead, with a recommended response window and the option to begin drafting. A minor severity signal — a negative sentiment post in a low-reach context with flat engagement — gets logged, assigned for monitoring, and reviewed at the next regular check-in rather than triggering an immediate escalation.

The escalation path is defined by the response policy, not constructed case by case. If the digest has to invent the escalation path for each signal, the policy is not working. The practitioner's job is to apply the policy correctly and flag the situations where the policy does not clearly apply — those edge cases are the ones that need senior judgment, and surfacing them quickly is where the entry-level practitioner creates the most value.

---

The gate is the professional moment this chapter has been building toward, and it is stated in the recipe without ambiguity: no public response ships without human approval.

That rule is not about distrust of AI capability. The agent can draft a response that is accurate, appropriate in register, and well-timed. The rule is about accountability. A public response from the brand is a statement that the brand is responsible for, that can be quoted, screenshotted, and cited in future coverage, that creates legal and reputational exposure if it is wrong, and that may affect the brand's relationship with the person or organization it is responding to in ways that extend beyond the immediate exchange. No automated system can carry that accountability. It belongs to a named person who has the authority to speak for the brand and who will be responsible for the consequences.

The holding language draft that the agent produces is subject to the same gate. It is a candidate, not a communication. The owner reviews it, edits it if needed, and authorizes it before it goes anywhere. The agent's efficiency at drafting is genuinely useful — it means the owner is reviewing and approving rather than writing from scratch under time pressure, which is better for the quality of the output. But the review and approval are not optional steps that can be removed when the situation is moving quickly. Speed that skips the gate is not a feature. It is a liability.

![Horizontal flow from signal detected through digest entry, owner review, response authorized, to response sent, with a vertical gate line between review and authorization separating agent-capable actions above from human-required authorizations below.](../images/15-media-coverage-and-issue-routing-fig-04.png)
*Figure 15.4 — The response gate*

<!-- → [DIAGRAM: The response gate — a horizontal flow from "signal detected" through "digest entry created" through "owner reviews" through "response authorized" to "response sent." A vertical gate line between "owner reviews" and "response authorized," labeled "human decision required." Above the gate: what the agent can do (monitor, classify, summarize, draft candidates). Below the gate: what requires human authorization (severity confirmation, escalation path, response content, timing). Caption: The gate is not a bottleneck. It is where professional accountability lives.] -->

---

The running project task is a routing digest built from five to ten public signals — real signals from a monitoring tool, or constructed from the scenarios described in this chapter and in the source materials. Every column populated: source, capture timestamp, issue class, sentiment label marked as model judgment, severity, owner, recommended action, response gate, and optional holding language. The discipline is in the response gate column — every entry names specifically what needs to happen before any public communication is authorized. Not "get approval" as a category, but "communications lead reviews source and engagement trajectory, confirms severity rating, and authorizes holding language or decides no response."

The verification checklist runs: every signal has a source and timestamp; sentiment is labeled as model judgment; severity rules are explicit; owners and escalation paths are named; no response is treated as automatic. Machine conformance is what the agent checks — fields populated, sources linked, timestamps present, labels applied. Human adequacy is what the communications lead and brand practitioner check — is the severity rating proportionate to the actual risk, is the escalation path reaching the right people, is the recommended action serving the brand's interests in this specific context.

The digest that works is the one that makes the owner's decision faster and better-informed, not the one that makes the decision for them. Four signals, four different situations, four different people who probably need to be involved — the digest names all of that and puts it in front of the right people in time for the decision to be made before the situation changes. That is the job. The response, if there is one, comes after.

---

## LLM Exercises

**Exercise 1 — Build the routing digest**

Using five to ten public signals from a real or simulated monitoring scenario, build a complete issue-routing digest. For each signal: capture the source and timestamp, classify the issue type against a defined taxonomy, label sentiment as model judgment, assess severity using the factors described in this chapter, name the owner, describe the recommended action, define the response gate, and draft optional holding language. When the digest is complete, identify the one signal that required the most judgment to classify and explain what made the classification difficult.

Prompt suggestion: *"I'm going to give you a set of public signals from a brand monitoring scenario. For each one, help me build a routing digest entry: issue class (from this taxonomy: product complaint, factual error, reputation risk, crisis signal, competitive mention, neutral coverage, positive coverage), sentiment label marked as model judgment, severity assessment with factors, recommended owner, recommended action, response gate condition, and optional holding language draft."*

**Exercise 2 — Escalation path design**

For a brand or category you are familiar with, write a response policy that defines: the issue taxonomy, the severity factors and how they combine into ratings, the escalation path for each severity level (who gets notified, in what order, in what time window), and the gate condition for each type of public response. Test the policy against the signals from Exercise 1 — does the policy give clear routing guidance for each one? If not, identify the gaps and revise the policy to close them.

Prompt suggestion: *"Help me design an issue-routing response policy for a brand. I need: a five-to-seven class issue taxonomy with definitions, severity rating criteria (what factors increase or decrease severity), escalation paths by severity level naming owner roles and time windows, and gate conditions for holding responses, substantive responses, and no-response decisions. Then help me test the policy against these five signals to find where it breaks down."*

**Exercise 3 — The misclassification audit**

Take a completed routing digest and review each classification for accuracy. For each entry, ask: does the issue class match the signal's actual character, or has the agent defaulted to a category that is close but not right? For each misclassification you find, write a correction and a note explaining what signal feature the agent likely over-weighted or under-weighted to reach the wrong classification. Then identify the two or three signal types that are most likely to be systematically misclassified by a language model and explain what human review step would catch each one.

Prompt suggestion: *"Here is a routing digest with ten entries. Review each classification against the issue taxonomy. For each one, tell me whether the class is correct, and if not, what it should be and why the model likely got it wrong. Then tell me which two or three issue types in this taxonomy are most likely to produce systematic misclassification and what the human review step should be for each."*

---

## Chapter 15 Exercises: Media Coverage and Issue Routing
**Project:** Your Own Brand Intelligence System
**This chapter adds:** a media-coverage tracker plus issue-routing rules that convert noisy incoming signals into classified, severity-rated escalation choices behind a response gate that no public reply crosses without a named human.

---

### Exercise 1 — When to Use AI
**The judgment:**
- Building the routing digest from a batch of raw signals — populating source, timestamp, issue class, sentiment, severity, owner, recommended action, and gate — *Why AI works here:* it is structured summarization and classification against a defined taxonomy, a fast organizing task you verify row by row against the sources.
- Classifying each signal against a pre-defined issue taxonomy — *Why AI works here:* this is rule-application against categories you set in advance, which surfaces a starting point quickly; miscategorization is expected and a human corrects it.
- Drafting optional holding language ("we're looking into it and will follow up shortly") — *Why AI works here:* it is bounded pattern-writing of a commitment-free acknowledgment, where the agent's speed lets the owner review and approve rather than write under pressure.

**The tell:** You know you are using AI appropriately when you can evaluate the output — when you have independent criteria to judge whether it is correct, complete, and fit for purpose.

---

### Exercise 2 — When NOT to Use AI
**The judgment:**
- Treating a sentiment label as a fact rather than a model judgment — *Why AI fails here:* missing ground truth. Sentiment from a language model is a surface-feature probability estimate that is wrong exactly where it matters most — irony, sarcasm, community vocabulary — so it is labeled "(model judgment)" and a human checks the source before acting.
- Deciding the final severity and escalation path for a candidate crisis signal — *Why AI fails here:* values and contextual judgment the agent does not have; severity is a structured assessment of how much damage could be done and how fast, weighing relationships and trajectory the model cannot see.
- Authorizing and sending any public response, including the holding language — *Why AI fails here:* accountability. A public statement from the brand can be quoted, screenshotted, and cited; it carries legal and reputational exposure that only a named person with authority to speak for the brand can answer for.

**The tell:** You know you have crossed the line when you are using AI output as your reason for a conclusion rather than as a tool for reaching one.
**Series connection:** Tier 7 (Accountability) — the chapter's central rule, "no public response ships without human approval," is a pure accountability gate; the agent can detect, classify, summarize, and draft, but speaking for the brand belongs to a person.

---

### Exercise 3 — LLM Exercise
**What you're building this chapter:** a complete issue-routing digest over five to ten signals, every column populated and every sentiment label marked as model judgment. **Tool:** Claude (claude.ai chat) — a single monitoring batch is a bounded, one-pass artifact.
**The Prompt:**
```
You are helping me build an issue-routing digest from a batch of brand monitoring signals. You classify and characterize; you do NOT decide whether to respond or write final responses.

Issue taxonomy to classify against: product complaint, factual error, reputation risk, crisis signal, competitive mention, neutral coverage, positive coverage.

Severity factors that INCREASE severity: high reach/editorial authority; factually incorrect claim that could spread; accelerating engagement; connection to a sensitive topic (safety, discrimination, regulation); existing brand relationship with the source; already picked up by secondary sources.
Severity factors that DECREASE severity: limited reach/no amplification history; matter of opinion not fact; low flat engagement; isolated not patterned; no existing relationship to damage; not yet picked up elsewhere.

Here are the signals (source, captured timestamp, and the content of each):
[FILL IN 5–10 signals]

For each signal, produce a digest row with these columns: Source | Captured | Issue Class | Sentiment | Severity | Owner | Recommended Action | Response Gate | Holding Language.

Rules:
- Mark every sentiment label as "(model judgment)" — e.g., "Negative (model judgment)." Never present sentiment as a fact.
- Justify each severity rating by naming the specific increase/decrease factors that applied.
- In Response Gate, write the SPECIFIC condition that must be met before any public reply — name what the owner must confirm (e.g., "Comms lead verifies amplification source and confirms severity before authorizing holding language or no response"), not just "get approval."
- Draft Holding Language only where a holding response is plausibly warranted; mark it "(draft)". Do not write substantive responses.
- After the table, name the one signal that was hardest to classify and explain what made it ambiguous.
```
**What this produces:** a fully populated decision-support digest with justified severities, model-judgment sentiment labels, specific response-gate conditions, and at most candidate holding language — plus a note on the hardest classification. **How to adapt this prompt:** *For your own brand:* paste real signals from your monitoring tool and replace the taxonomy/severity factors with your own response policy's definitions. *For ChatGPT / Gemini:* same block; both will sometimes drop the "(model judgment)" qualifier under volume — scan the sentiment column and re-paste the rule if so. *For a Claude Project:* if you monitor continuously, store your response policy (taxonomy, severity criteria, escalation paths, gate conditions) in Project knowledge so each batch is classified against a stable policy rather than an ad-hoc one. **Connection to previous chapters:** the model-judgment labeling is the same evidence-honesty discipline from earlier chapters — naming the confidence level of a claim rather than laundering an estimate into a fact — and the gate echoes the named-approver accountability from the launch chapter. **Preview of next chapter:** Chapter 16 assembles every artifact you have built — including this digest's discipline of detection-then-routing-then-human-decision — into one bounded, gated end-to-end run.

---

### Exercise 4 — CLI Exercise
**What you're building this chapter:** an automated digest-builder that ingests a signals file and emits a routing digest, enforcing the model-judgment label and the no-auto-response rule. **Tool:** Claude Code · **Skill level:** Intermediate
**Setup:**
- [ ] A `signals.csv` or `signals.md` file with one row per signal (source, timestamp, content).
- [ ] A `response-policy.md` defining the issue taxonomy, severity factors, escalation paths, and gate conditions.
- [ ] Claude Code open in that folder.
**The Task:**
```
Read response-policy.md and the signals file in this folder. Build a file called routing-digest.md.

Scope:
- READ: response-policy.md and the signals file.
- WRITE: only routing-digest.md (create it; do not overwrite anything else).
- LEAVE ALONE: the signals file and the policy — do not edit them.

For each signal, produce a digest row with columns: Source | Captured | Issue Class | Sentiment | Severity | Owner | Recommended Action | Response Gate | Holding Language.

Rules:
- Classify Issue Class only against the taxonomy in response-policy.md. If a signal does not fit cleanly, mark it "AMBIGUOUS — needs human classification" rather than forcing a category.
- Mark every Sentiment value as "(model judgment)".
- Derive Severity and Owner from the policy's severity factors and escalation paths; name the factors you used.
- Response Gate must be a specific human-confirmation condition. Never write "auto-respond" or a finished public reply.
- Holding Language: at most a "(draft)" acknowledgment, only where warranted.

Stop conditions: stop after writing the file. Do not send, post, or simulate sending anything. Do not write substantive responses.

Verification step: after writing, print (a) any row marked AMBIGUOUS, (b) any sentiment value missing the "(model judgment)" tag, and (c) confirmation that no row contains a finished public response.
```
**Expected output:** a `routing-digest.md` table plus a printed audit of ambiguous classifications, any unlabeled sentiment, and confirmation that nothing is a finished public reply. **What to inspect in the output:** whether severities trace to named policy factors (not vibes), and whether every response-gate cell names a specific human confirmation rather than a generic "get approval." **If it goes wrong:** if the agent writes a finished public response or marks a gate as auto, re-run and quote the no-auto-response and gate-specificity rules; if it strips the model-judgment tag, the printed audit catches it — restore the labels before using the digest. **CLAUDE.md / AGENTS.md note:** add: "Monitoring digests: classify only against the response policy taxonomy; every sentiment label carries '(model judgment)'; the agent never authorizes, drafts a finished public response, or marks a gate as automatic — every gate names a specific human confirmation."

---

### Exercise 5 — AI Validation Exercise
**What you're validating:** an AI-built routing digest — whether its classifications, sentiment labels, and gates can be trusted to route real signals to the right people. **Validation type:** verification of a decision-support artifact against the sources and the response policy. **Risk level:** High for crisis-candidate rows — a misclassified or mis-gated signal can become a wrong public statement under time pressure. **Setup:** open the digest from Exercise 3 or 4 next to the original signals and the response policy, and re-check each row.
**The Validation Task:** "Evaluate the AI output using this checklist. For each item record Pass / Fail / Cannot determine and explain."
```
Validation Checklist — Media Coverage and Issue Routing
□ Correctness: Does each signal's Issue Class match its actual character when you read the source, or did the agent default to a close-but-wrong category?
□ Completeness: Is every column populated for every signal, with a source and timestamp on each?
□ Scope: Does every Response Gate name a specific human confirmation, and is no row a finished public response?
□ Sentiment honesty: Is every sentiment label marked "(model judgment)" — and did you check the source before trusting any of them?
□ Severity calibration: Does each severity rating trace to named increase/decrease factors from the policy, proportionate to actual risk?
□ Failure mode check: fluent-but-wrong? (a confident sentiment or class that misreads irony/sarcasm/technical language?) missing ground truth? (a severity or "no relationship" claim the agent had no way to know?)
```
**What to do with your findings:** correct every misclassification and re-rate any severity that does not match the actual risk, then route the corrected digest to the named owners; log the two or three signal types most prone to systematic misclassification so a human review step always catches them. **AI Use Disclosure prompt:** "The routing digest was assembled by [tool] from the monitoring signals and classified against our response policy; all sentiment labels are model judgments, and a named human ([name]) reviewed every classification, confirmed severities, and made all escalation and response decisions — the AI authorized nothing." **Series connection:** the failure mode is fluent-but-wrong sentiment/classification on missing ground truth, gated at Tier 7 — validation exists because no public response, not even a holding line, crosses the gate without a person who answers for it.

---
**Tags:** media-monitoring, issue-routing, sentiment-model-judgment, severity-classification, response-gate, brand-intelligence-system
