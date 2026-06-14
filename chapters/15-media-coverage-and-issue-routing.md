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

<!-- → [TABLE: Issue-routing digest structure — columns: source URL, capture timestamp, issue class, sentiment label (marked as model judgment), severity, assigned owner, recommended action, response gate, holding language (optional). Show four rows using the four signals from the chapter opening. Caption: The digest is a decision-support document. Every column exists to inform the owner's judgment, not to replace it.] -->

---

The classification step is where the agent adds the most value in this workflow, and it is the step where the categories need to be defined before the workflow runs rather than inferred during it.

An issue taxonomy for a brand monitoring workflow typically includes: product complaint (a user or customer describing a specific problem with the product or service), factual error (a publication or post stating something demonstrably incorrect about the brand, product, or category), reputation risk (a mention that creates association between the brand and something harmful, controversial, or unwanted), crisis signal (early indicators of a situation that could escalate to require coordinated response), competitive mention (a piece that compares the brand to competitors in a way that may require response or tracking), neutral coverage (monitoring-worthy but not action-requiring), and positive coverage (worth logging and potentially amplifying).

The taxonomy should be defined in the response policy document before the monitoring workflow begins, not constructed in real time as signals arrive. The agent classifies against the defined taxonomy; the human reviews the classification and corrects it when the agent has miscategorized. Miscategorization is common enough to be expected — the line between a reputation risk and a product complaint, or between a crisis signal and a piece of negative coverage that does not escalate, requires contextual knowledge the agent does not have. The classification is a starting point for the owner's judgment, not a substitute for it.

<!-- → [DIAGRAM: Issue taxonomy decision tree — starting from "incoming signal," branching through: does it contain a factual error about the brand? (yes → factual error class); does it describe a product or service problem from a customer? (yes → product complaint class); does it associate the brand with controversy? (yes → reputation risk class); does the engagement pattern or source suggest rapid escalation? (yes → crisis signal class); does it compare the brand to competitors? (yes → competitive mention class); otherwise → neutral or positive coverage. Caption: The tree is a starting point, not a final answer. The agent classifies; the human confirms.] -->

Sentiment labeling requires a specific discipline in this workflow: every sentiment label must be marked as model judgment in the digest. Not "this post is negative" but "sentiment: negative (model judgment)." The parenthetical is not cosmetic. Sentiment classification from a language model is a probability estimate derived from the text's surface features, and it is wrong often enough in exactly the situations that matter most — irony, sarcasm, technical language that reads as negative but is neutral in context, community-specific vocabulary that the model does not recognize — that treating it as a fact creates decisions based on a misreading.

The practitioner who reads the digest marked "sentiment: negative (model judgment)" and looks at the source before deciding whether to escalate is doing the right thing. The one who reads "sentiment: negative" and escalates without checking has made the model's probability estimate into a policy decision. Those are different workflows, and only one of them protects the brand.

---

Severity in a media monitoring context is a function of different variables than severity in a QA audit, and the variables need to be stated explicitly in the response policy.

The factors that increase severity: the source has high reach or editorial authority; the claim is factually incorrect and could spread; the engagement pattern suggests the signal is accelerating rather than decaying; the issue connects to a sensitive topic area (safety, discrimination, regulatory compliance) where the brand has heightened exposure; the signal originates from an account or publication with which the brand has an existing relationship that could be damaged by inaction; the signal has already been picked up by secondary sources.

The factors that decrease severity: the source has limited reach and no demonstrated amplification history; the claim is a matter of opinion rather than fact; the engagement is low and flat; the issue is isolated rather than part of a pattern; the brand has no existing relationship with the source that inaction would damage.

<!-- → [TABLE: Severity factors for media signals — two columns: factors that increase severity and factors that decrease severity. Each factor listed with a brief explanation of why it matters for the routing decision. Caption: Severity is not a feeling about how bad something looks. It is a structured assessment of how much damage could be done and how quickly.] -->

The severity rating in the digest determines the escalation path. A critical severity signal — a factually incorrect claim in a high-reach publication that is accelerating — goes to the senior communications lead immediately, with a recommended response window. A major severity signal — a product complaint from a customer with a visible audience, accurate in its description of the problem — goes to the customer success lead and the communications lead, with a recommended response window and the option to begin drafting. A minor severity signal — a negative sentiment post in a low-reach context with flat engagement — gets logged, assigned for monitoring, and reviewed at the next regular check-in rather than triggering an immediate escalation.

The escalation path is defined by the response policy, not constructed case by case. If the digest has to invent the escalation path for each signal, the policy is not working. The practitioner's job is to apply the policy correctly and flag the situations where the policy does not clearly apply — those edge cases are the ones that need senior judgment, and surfacing them quickly is where the entry-level practitioner creates the most value.

---

The gate is the professional moment this chapter has been building toward, and it is stated in the recipe without ambiguity: no public response ships without human approval.

That rule is not about distrust of AI capability. The agent can draft a response that is accurate, appropriate in register, and well-timed. The rule is about accountability. A public response from the brand is a statement that the brand is responsible for, that can be quoted, screenshotted, and cited in future coverage, that creates legal and reputational exposure if it is wrong, and that may affect the brand's relationship with the person or organization it is responding to in ways that extend beyond the immediate exchange. No automated system can carry that accountability. It belongs to a named person who has the authority to speak for the brand and who will be responsible for the consequences.

The holding language draft that the agent produces is subject to the same gate. It is a candidate, not a communication. The owner reviews it, edits it if needed, and authorizes it before it goes anywhere. The agent's efficiency at drafting is genuinely useful — it means the owner is reviewing and approving rather than writing from scratch under time pressure, which is better for the quality of the output. But the review and approval are not optional steps that can be removed when the situation is moving quickly. Speed that skips the gate is not a feature. It is a liability.

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
