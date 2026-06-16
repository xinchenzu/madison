# Chapter 5 — Verifying Brand Evidence
*The data was real. The conclusion was not.*

A competitor scan is sourced. A survey export has a methodology note. A sentiment digest has timestamps going back six months. The team has evidence — actual evidence, not guesses — and they are about to write a recommendation that says the market has shifted, the audience prefers message B, and the campaign caused the lift in consideration.

Every one of those conclusions is stronger than what the evidence supports.

This is not a fabrication problem. The sources are real. The failure is a verb problem. "Has shifted" is a causal claim. "Prefers" is a definitive claim. "Caused" is the strongest causal claim available in the English language. Each one of those words commits the writer to more certainty than the evidence can back — and in professional work, the gap between what your evidence warrants and what your language claims is where accountability lives. When a client challenges the recommendation six months later, that gap is exactly what they will point to.

The chapter before this one was about dividing labor between AI and human judgment. This chapter is about a specific piece of human judgment that almost always goes undone: deciding what your evidence actually lets you say.

---

## The Verb Is the Claim

There is a mechanical fact about evidence and language that is worth stating plainly before anything else. Every conclusion you write contains a verb. That verb is doing more work than it appears to be. "The data shows that younger consumers prefer sustainability messaging" has three hidden commitments inside it: that the data is representative of younger consumers generally, that the preference is stable across contexts, and that "prefer" means something strong enough to recommend building a campaign around it. Change the verb and you change all three commitments at once. "The survey data suggests that younger respondents in this sample rated sustainability messaging higher" commits you to almost nothing beyond what literally happened.

The gap between those two sentences is not hedging. It is accuracy. The first sentence is wrong — not because the data is bad, but because the verb is wrong for what the data can establish.

| Verb / Phrase | What It Claims | Evidence Required to Use It |
|---|---|---|
| is associated with | Correlation in the dataset | Properly collected dataset with a documented method |
| suggests | A pattern worth noting | A consistent pattern in the current data |
| indicates | A reliable signal | Replicated across conditions or sources |
| shows | An established finding | Robust study design |
| demonstrates | A causal mechanism | Controlled conditions or strong causal design |
| proves | Certainty | Near-impossible in brand research |
| caused | Direct causation | Experimental design with controls |

*Table 5.1 — The verb is a claim about what the evidence can do. Most brand evidence lives in the top three rows.*

![An ascending ladder mapping verb strength to the evidence each verb requires — seven rungs from the weakest correlational phrasing at the bottom up through suggesting, indicating, showing, demonstrating, to proving and asserting direct causation at the top — with a graduated single-hue progression and a band marking the lowest three rungs as where most brand evidence legitimately lives](../images/05-verifying-brand-evidence-fig-01.png)
*Figure 5.3 — The verb-strength ladder*

Brand and advertising work runs on partial evidence. A survey of 400 respondents. A sentiment analysis of social posts collected over 30 days. A competitive scan assembled by an AI agent from publicly available sources. This is not a failure of resources. It is the nature of the work — decisions must be made before certainty is available, often on tight timelines, with the best data that can be gathered in the time allowed. The professional move is not to demand perfect certainty before writing anything. It is to use verbs that match what you actually have.

This skill — matching verb strength to evidence quality — is what separates analysis that can be defended from analysis that collapses under the first serious question. And it is the skill that AI-assisted workflows are most likely to degrade, because a language model is trained to produce fluent, confident-sounding text, and confident-sounding text reaches for strong verbs.

---

## What Evidence Actually Is

Before you can assess what your evidence warrants, you need to know what kind of evidence you have. This is not complicated, but it requires asking four questions that most practitioners skip.

**Coverage:** Who or what is the evidence about? A sentiment analysis of tweets about your brand covers people who post on that platform, who follow conversations about your brand, and who chose to express their opinion publicly. It does not cover your full audience. It may not even cover your current customers. Coverage determines who the conclusions can be extended to. If the coverage is narrow, the conclusions must be narrow.

**Recency:** When was the evidence collected? A survey conducted fourteen months ago may still be informative, but it cannot establish the current state of anything. The market can move. Attitudes can shift. Competitors can launch. Recency is not just a quality check; it sets the temporal scope of what the evidence can say.

**Method:** How was the evidence collected? This is the question that determines whether the patterns in the data reflect the thing you care about or an artifact of the collection process. A sentiment model assigns labels based on training data. Those labels reflect what the model learned to detect, which may or may not correspond to how your audience actually describes their experience. Method transparency lets you see where the signal is real and where it is a product of the instrument.

**Sample limits:** How large is it, and is it representative? Four hundred survey respondents can establish a pattern. They cannot establish that the pattern holds across a market. A sample of social posts is not a sample of consumers. These limits are not reasons to discard evidence; they are constraints on how far the conclusions can travel.

![A two-axis quadrant map of evidence quality — the horizontal axis runs from narrow to broad coverage, the vertical axis from old to recent — dividing the field into four quadrants: top-right broad and recent (strongest claims), top-left broad and old (historical context only), bottom-right narrow and recent (local signal), bottom-left narrow and old (weakest); a note marks method quality and sample limits as a third dimension that can weaken even top-right evidence](../images/05-verifying-brand-evidence-fig-02.png)
*Figure 5.1 — Evidence-quality quadrant map*

<!-- → [DIAGRAM: Four-quadrant evidence quality map — axes labeled "Coverage (Narrow → Broad)" and "Recency (Old → Recent)" — four quadrants: top-right (broad + recent = strongest claims), top-left (broad + old = historical context only), bottom-right (narrow + recent = local signal), bottom-left (narrow + old = weakest claims) — annotated with example evidence types in each quadrant. Caption: Method quality and sample limits operate as a third dimension on this map; even recent, broad evidence from a flawed method produces weak claims.] -->

There is a fifth consideration that is specific to AI-assisted work: the model-judgment field. When a sentiment analysis assigns a score, that score is not a measurement. It is a model's judgment, expressed as a number. When a theme-clustering tool produces five clusters from 2,000 open-ended responses, those clusters are a model's interpretation of the data, not the data itself. The distinction matters because model judgments have their own error modes — they can be systematically biased, they can reflect training data that does not match your audience, and they cannot be interrogated the way a human analyst can be interrogated.

Model-judgment fields are not untrustworthy. They are a specific kind of evidence with specific limits. The rule is to label them as such. "The sentiment model scored 64% positive" is different from "64% of customers expressed positive sentiment." The first is a model judgment. The second is a claim about your customers that the model judgment does not, by itself, support.

---

## The Four Lists

The practical output of evidence assessment is not a score or a rating. It is a sorting of your claims into four buckets.

**Can say.** These are conclusions that your evidence directly and fully supports. The verb matches the evidence. The coverage includes the population you are generalizing to. The recency is appropriate to the temporal claim. The method is fit for the purpose. If challenged, you can point to exactly what in the evidence supports the conclusion.

**Can suggest.** These are patterns worth flagging that are not strong enough to support a direct recommendation. The evidence is consistent with the conclusion, but the coverage is limited, or the sample is small, or the method adds uncertainty, or the effect could have another explanation. "Suggest" signals that the conclusion is worth taking seriously and worth investigating further. It does not commit you to acting on it.

**Cannot claim.** These are conclusions that the evidence does not support, regardless of how confident the analysis sounds. Causal claims without causal designs belong here. Generalizations beyond the coverage belong here. Temporal claims that outrun the recency belong here. Model-judgment fields cited as established facts belong here. The "cannot claim" list is not a failure; it is professional honesty about what the evidence can and cannot do.

**Needs human review.** These are cases where the evidence is ambiguous in a way that requires contextual judgment. The signal is weak but the decision is time-sensitive. The coverage is narrow but the client relationship adds context that changes the risk calculus. The model judgment is uncertain but the pattern has appeared consistently across three separate data pulls. Whether a weak signal is still sufficient for a local decision is not something an AI system can assess. It requires a practitioner who understands the context.

| Claim | List | Reason |
|---|---|---|
| Social sentiment improved in February | Can say | Directly observed in timestamped data |
| Younger audience more receptive to sustainability framing | Can suggest | Survey pattern, n=200, self-selected sample |
| Campaign caused consideration lift | Cannot claim | No controlled design; lift could have other causes |
| Competitor is losing share | Cannot claim | Competitive scan shows activity decline, not share |
| This signal is strong enough to change the brief | Needs human review | Weak evidence but pending deadline |

*Table 5.2 — The goal is not to move everything into Can say. The goal is to know which bucket each claim lives in before it appears in a recommendation.*

![A four-bucket taxonomy sorting claims by what the evidence warrants — Can Say (conclusions the evidence directly and fully supports), Can Suggest (patterns worth flagging but not strong enough to recommend), Cannot Claim (conclusions the evidence does not support however confident they sound), and Needs Human Review (ambiguous cases requiring contextual judgment) — the four containers are equal in size to signal the goal is knowing which bucket each claim belongs in, not moving everything into Can Say](../images/05-verifying-brand-evidence-fig-03.png)
*Figure 5.4 — The four-list sort*

The four lists are not a filter designed to strip conclusions from your analysis. They are a map of where your professional accountability lies. The "can say" conclusions you can defend. The "can suggest" conclusions you can flag as directional. The "cannot claim" conclusions you remove from recommendations. The "needs human review" conclusions you escalate rather than resolve by yourself.

---

## Warranted Verbs in Practice

The practical application of the four lists is a rewrite. Take any paragraph of analysis and read it for verb strength. Find every place where the verb is making a stronger claim than the evidence permits. Replace it with the verb that matches.

This is not comfortable work. Confident-sounding analysis feels more valuable. Clients may initially prefer it. A sentence that "demonstrates a clear preference" sounds more actionable than one that "suggests a pattern worth investigating." The professional argument for warranted verbs is not that they sound better. It is that they are accurate, and accurate analysis can be defended when it is challenged.

The rewrite has a predictable shape. Causal verbs become correlational verbs. Definitive verbs become conditional verbs. Generalizations to broad populations become statements about the specific sample. Claims about the present become claims about the time period of data collection.

| Original (Overcommitted Verb) | Rewritten (Warranted Verb) |
|---|---|
| The campaign caused a 12% lift in brand consideration. | Brand consideration was 12 points higher in the post-campaign survey period compared to the pre-campaign baseline; other factors were not controlled for. |
| Consumers prefer message B. | Survey respondents in this sample rated message B 18 points higher on purchase intent than message A. |
| The market has shifted toward value positioning. | Competitor activity in the past 90 days shows increased emphasis on price and value framing in three of five major accounts scanned. |
| The sentiment analysis shows brand health improving. | The sentiment model scored brand mentions 7 points higher in March than in January across the monitored channels. |

*Table 5.3 — The rewrite does not reduce the value of the analysis. It makes the analysis accurate.*

There is a version of this skill that stops at language precision — swap the verbs, file the report, move on. That version misses the more important use of the exercise. When you sort your claims into the four lists and find that most of your "can say" conclusions are weak and most of your strong conclusions belong on the "cannot claim" list, that is a signal. It tells you that the evidence base for this decision is thin, and that whoever is making the decision should know that. The warranted-verb rewrite is not just a style correction. It is a professional act of transparency.

---

## The Agentic Complication

AI-assisted brand workflows produce evidence at a speed and volume that outpaces the human capacity to assess it carefully. An agent can run a competitive scan across forty sources in the time a practitioner would take to read three. That scan will produce output — structured, organized, fluent output — and the output will look authoritative because it is well-formatted and comprehensive.

The authoritativeness of the formatting is not evidence of the quality of the conclusions. This is the specific failure mode that AI assistance introduces in the evidence verification domain. The agent produces a clean artifact. The clean artifact looks like assessed work. The practitioner treats it as assessed work. The claims in it cross a professional gate without the four-list sort ever happening.

The supervision question for evidence workflows is: has a named practitioner made an explicit assessment of what the evidence warrants? Not "has AI produced an analysis?" — that question answers itself. Has a human sorted the claims? Has someone written "cannot claim" next to the causal conclusion, or "needs review" next to the weak signal that is being used to drive a brief change?

![A linear six-stage process flowchart — Data Collection, AI Analysis, Artifact Production, a prominently highlighted Gate (the human four-list sort), Warranted-Verb Rewrite, and Recommendation — with the early AI-assistable stages in one tone and the human-owned Gate and the steps after it in a dominant tone; an annotation beside the Gate notes that a named reviewer decides the list while the AI may only flag candidates](../images/05-verifying-brand-evidence-fig-04.png)
*Figure 5.2 — Evidence workflow with the four-list gate*

<!-- → [DIAGRAM: Evidence workflow with supervision gate — linear flow: Data Collection → AI Analysis → Artifact Production → [GATE: Human Four-List Sort] → Warranted-Verb Rewrite → Recommendation — gate node highlighted, annotated: "This step must be performed by a named reviewer. AI may flag candidates; human decides the list." Caption: The gate is not redundant with the AI analysis. It is the step that determines whether the analysis is professionally defensible.] -->

The gate is not a bureaucratic addition to slow down the workflow. It is the step that makes the output defensible. Without it, the workflow produces fast artifacts and slow accountability — an inversion of what professional work requires.

---

## What Would Change My Mind

The strong version of the counter-argument is that clients and decision-makers are not actually making precise distinctions between "shows" and "suggests" when they read brand analysis. They want a clear recommendation. Warranted verbs produce analysis that feels hedged and inconclusive, and hedged analysis loses in competitive pitches to confident analysis that turns out to be equally speculative.

If that is empirically true — if accurate language consistently loses to overconfident language in the markets where brand analysis is used — then the warranted-verb discipline has real professional costs. I think the claim is partially true in the short term and wrong in the medium term: overconfident analysis that collapses under scrutiny costs more in client trust and professional reputation than cautious analysis costs in perceived decisiveness. But this is an empirical question, not a logical one. If you run the warranted-verb rewrite consistently over six months and find it is creating more problems than it solves, that is evidence I would want to see.

## Still Puzzling

The four-list framework assumes that evidence quality is assessable — that a practitioner can look at a source and make a reasonable judgment about its coverage, recency, method, and sample limits. But in practice, much of the evidence that flows through AI-assisted brand workflows arrives pre-processed: sentiment already scored, themes already clustered, sources already summarized. The original data is not available for inspection. The question I have not fully resolved is whether post-hoc reconstruction of evidence quality — working backward from a generated analysis to assess what the underlying data could warrant — is actually reliable, or whether the only real option is to establish evidence quality standards upstream, before the analysis is run.

---

## LLM Exercises

**Exercise 1 — Verb Audit**
Paste a recent paragraph of analysis — your own or from a report you have received — into the chat. Ask the LLM to identify every verb that makes a claim about the evidence and rate each one on a scale from "observational" to "causal." Review the output. Which verb ratings do you agree with? Which ones do you want to contest, and why?

**Exercise 2 — Four-List Sort**
Give the LLM one evidence set description (source, method, sample size, recency) and one set of proposed conclusions. Ask it to sort the conclusions into the four lists: can say, can suggest, cannot claim, needs human review. Then review the sort. Where did the LLM place conclusions too conservatively? Too liberally? The disagreements are the most informative part.

**Exercise 3 — Warranted Rewrite**
Take the "cannot claim" conclusions from Exercise 2. Ask the LLM to rewrite each one using only warranted verbs — either weakening the conclusion to match the evidence or identifying specifically what additional evidence would be required to support the original claim. Then assess: are the rewritten conclusions still useful? What do they commit you to recommending?

---

## Exercises

**Warm-up**

1. *(Basic recall)* Name the four evidence quality questions introduced in this chapter. For each one, give an example of how a weak answer to that question constrains what a conclusion can claim. *What this tests: whether you can connect the quality dimensions to specific verbal commitments.*

2. *(Concept check)* What is a model-judgment field? Why is it different from a measurement, and what does that difference require of the practitioner writing conclusions based on it? *What this tests: whether you understand the specific evidentiary status of AI-generated labels and scores.*

3. *(Definition)* What belongs on the "needs human review" list? Give two examples of the kind of situation that would land a claim there rather than on the "can suggest" or "cannot claim" lists. *What this tests: whether you understand that the four lists require contextual judgment, not just mechanical sorting.*

**Application**

4. *(Moderate)* You have a sentiment analysis showing that brand mentions scored 61% positive over the past 30 days, compared to 54% positive in the prior period. The method note says the model was trained on general consumer review data, not category-specific language. Write a "can say" conclusion, a "can suggest" conclusion, and a conclusion that belongs on the "cannot claim" list — all based on the same data. *What this tests: whether you can use the same evidence at different levels of confidence.*

5. *(Moderate)* A colleague writes the following in a recommendation: "Consumer research confirms that the audience prioritizes convenience over price, making this the right moment to lead with our speed messaging." Identify the verbs and phrases that are doing more work than the evidence likely supports. Rewrite the sentence using warranted verbs, and identify what additional information you would need to restore the original strength of the claim. *What this tests: whether you can apply the verb audit to a real recommendation.*

6. *(Moderate)* An AI-generated competitive scan identifies three competitors as "declining in brand relevance" based on a decrease in social mentions over 60 days. Apply the four evidence quality questions to this finding. What can you say? What can you only suggest? What additional information would move "suggest" to "say"? *What this tests: whether you can assess evidence quality for AI-produced outputs, not just human-produced ones.*

**Synthesis**

7. *(Challenging)* The chapter argues that AI assistance degrades warranted-verb discipline because language models produce fluent, confident-sounding text. Describe two workflow design choices — beyond the four-list sort — that could counteract this tendency. For each choice, explain the mechanism: why would it produce more accurate verb use, not just more careful-sounding analysis? *What this tests: whether you can reason about workflow design rather than just individual analysis quality.*

8. *(Challenging)* You are reviewing a recommendation before it goes to a client. You find that the "can say" conclusions are defensible but narrow, the "can suggest" conclusions are directional but uncertain, and the strategic recommendation requires a level of certainty that neither list provides. The deadline is in four hours. Walk through the professional decision: what do you send, how do you frame the uncertainty, and what do you log? *What this tests: whether you can apply the framework under the real constraints of professional work, where the gap between evidence quality and decision pressure is routine.*

**Challenge**

9. *(Open-ended)* "Still Puzzling" raises the question of whether post-hoc evidence assessment is reliable when the underlying data is not available — only the AI-generated analysis of it. Design a protocol for a brand team that would preserve evidence quality assessability upstream, before the AI analysis runs. What would the protocol require practitioners to document? What would it require of the AI system's outputs? What would it cost in time, and how would you decide whether that cost is worth paying? *What this tests: whether you can design for the evidence problem systematically rather than applying the four-list sort as a reactive fix.*

---

## Chapter 5 Exercises: Verifying Brand Evidence
**Project:** Your Own Brand Intelligence System
**This chapter adds:** an evidence-adequacy audit that classifies each brand claim by type and decides what proof it needs before the claim is allowed into a recommendation.

---
### Exercise 1 — When to Use AI
**The judgment:** Some parts of an evidence audit are mechanical scans over text you can check line by line — that is where AI earns its place.
- Scanning a paragraph of analysis and listing every claim-bearing verb with its strength rating — *Why AI works here:* this is **extraction and classification** against a fixed rubric (the verb-strength ladder), and you can check each tagged verb against the source sentence yourself.
- Drafting a side-by-side warranted-verb rewrite of an overcommitted sentence — *Why AI works here:* this is **constrained rewriting** where the target is explicit (weaken the verb to match the evidence), and the original sits next to the rewrite so correctness is visible.
- Reformatting a pile of mixed claims into the four-list table structure with empty reason cells — *Why AI works here:* this is **structuring**, a transformation task with a known template, leaving the actual sorting judgment to you.

**The tell:** You know you are using AI appropriately when you can evaluate the output — when you have independent criteria to judge whether it is correct, complete, and fit for purpose.

---
### Exercise 2 — When NOT to Use AI
**The judgment:** The audit's whole point is deciding what the evidence warrants, and that decision is the one thing you cannot delegate.
- Deciding which bucket a claim finally lives in — Can Say vs. Cannot Claim — *Why AI fails here:* this is an **accountability** call; if the claim breaks in front of a client, the named human who sorted it is answerable, not the model.
- Judging whether a weak-but-timely signal is sufficient for a local decision (the "needs human review" call) — *Why AI fails here:* it depends on **missing ground truth** about the client's risk tolerance and context that lives nowhere in the data.
- Reconstructing the coverage, recency, and method of pre-processed evidence the model never saw — *Why AI fails here:* **source adequacy** cannot be inferred from a fluent summary; asking the model to vouch for data it cannot inspect invites confident **hallucination** of provenance.

**The tell:** You know you have crossed the line when you are using AI output as your reason for a conclusion rather than as a tool for reaching one.
**Series connection:** Tier 5 — the audit produces a defensible artifact (the four-list sort) that a named reviewer signs, so the human is verifying and accepting accountability for AI-flagged candidates, not co-authoring the judgment.

---
### Exercise 3 — LLM Exercise
**What you're building this chapter:** the evidence-adequacy audit — a four-list sort plus a warranted-verb rewrite that becomes the first verified component of your brand repo.
**Tool:** Claude (claude.ai chat). A single chat is right here: the audit operates on one paste-in evidence set and one set of claims, with no need for persistent project files yet.
**The Prompt:**
```
You are helping me run an evidence-adequacy audit on brand analysis, using a four-list framework: Can Say (evidence directly and fully supports the conclusion), Can Suggest (a pattern worth flagging but not strong enough to recommend), Cannot Claim (the evidence does not support it however confident it sounds), and Needs Human Review (ambiguous, requires my contextual judgment).

Here is my evidence set and the conclusions drawn from it.

EVIDENCE SET:
- Source: [FILL IN: e.g., social sentiment model, 30-day window, trained on general consumer reviews]
- Method: [FILL IN]
- Sample / coverage: [FILL IN]
- Recency / capture dates: [FILL IN]

PROPOSED CONCLUSIONS:
1. [FILL IN]
2. [FILL IN]
3. [FILL IN]

Do four things:
1. For each conclusion, identify the claim-bearing verb and rate it on the strength ladder: is associated with / suggests / indicates / shows / demonstrates / proves / caused.
2. Sort each conclusion into one of the four lists. For every placement, give a one-line reason that names the limiting factor (coverage, recency, method, sample limits, or model-judgment field).
3. Flag any conclusion that cites a model-judgment field (a score or label produced by a model) as if it were a measurement, and rewrite it to name it as a model judgment.
4. For every conclusion you placed in Cannot Claim, write a warranted-verb rewrite that either weakens the claim to match the evidence OR states exactly what additional evidence would move it up a list.

Present the result as a table with columns: Claim | Verb | List | Limiting factor | Warranted rewrite. Do not move conclusions into Can Say to be helpful — place them where the evidence actually warrants, and tell me where you were uncertain.
```
**What this produces:** a tabular evidence-adequacy audit of your own analysis, with each claim verb-rated, bucketed with a named limiting factor, model-judgment fields flagged, and a warranted rewrite for every claim that overran its evidence.
**How to adapt this prompt:** *For your own brand:* paste a real paragraph from a report you received or wrote, and use your actual source notes in the EVIDENCE SET block — the audit is only as good as the provenance you give it. *For ChatGPT / Gemini:* the prompt is portable as-is; if the model softens placements to be agreeable, add "be conservative: when coverage or method is unclear, default to Can Suggest or Needs Human Review." *For a Claude Project:* once you start accumulating evidence sets across chapters, move this into a Project and add your brand's source-quality standards as Project knowledge so the audit applies them automatically.
**Connection to previous chapters:** this operationalizes Chapter 4's division of labor — the model flags verb candidates and proposes a sort; you own the gate. **Preview of next chapter:** the audit teaches you to demand a source and a date for every claim, which is exactly the discipline the Chapter 6 competitor signal matrix is built around.

---
### Exercise 4 — CLI Exercise
**What you're building this chapter:** a reusable `evidence-audit.md` file in your brand repo that records the four-list sort for a batch of claims, with provenance, so the audit is inspectable later.
**Tool:** Claude Code.
**Skill level:** Beginner — file reading, structured writing, one verification pass. No code execution.
**Setup:**
- [ ] A folder for your brand repo (e.g., `~/brand-intelligence/`) initialized as a git repo or at least version-tracked.
- [ ] A plain-text or markdown file of analysis claims to audit (`claims-raw.md`), each with whatever source note you have.
- [ ] Claude Code installed and started in that folder.
**The Task:**
```
Read claims-raw.md in this folder. Do NOT modify claims-raw.md — treat it as read-only source.

Create a new file evidence-audit.md. For each claim in claims-raw.md, add a row to a markdown table with these columns: Claim | Verb (from the ladder: is associated with / suggests / indicates / shows / demonstrates / proves / caused) | List (Can Say / Can Suggest / Cannot Claim / Needs Human Review) | Limiting factor (coverage / recency / method / sample / model-judgment) | Source-as-given | Warranted rewrite.

Rules:
- If a claim has no source note in claims-raw.md, set Source-as-given to "MISSING" and place the claim in Needs Human Review — never Can Say.
- Do not invent sources, dates, or sample sizes that are not present in claims-raw.md.
- For any claim citing a model-produced score or label, mark the limiting factor as model-judgment.

After writing evidence-audit.md, print a short verification summary to the chat: total claims, count per list, and count of MISSING-source claims. Stop after the summary. Do not delete or overwrite any other file.
```
**Expected output:** a new `evidence-audit.md` with one audited row per claim, plus a chat summary tallying the four lists and the missing-source count.
**What to inspect in the output:** check that every MISSING-source claim landed in Needs Human Review, that no source was fabricated (cross-check two rows against `claims-raw.md`), and that the verb in each row actually matches the claim's wording.
**If it goes wrong:** if the model invented a source or pushed a thinly-evidenced claim into Can Say, re-run with "verify every Source-as-given against the exact text of claims-raw.md and quote it." If it edited the source file, restore from git and re-emphasize the read-only rule.
**CLAUDE.md / AGENTS.md note:** add a line to your repo's `CLAUDE.md`: "Evidence rule: no claim enters Can Say without an inspectable source and date in the repo; claims with MISSING provenance default to Needs Human Review. Never fabricate sources, dates, or sample sizes."

---
### Exercise 5 — AI Validation Exercise
**What you're validating:** the `evidence-audit.md` from Exercise 4 (or the Exercise 3 table, if you stayed in chat).
**Validation type:** evidence-provenance and warrant check. **Risk level:** High — this artifact decides which claims are allowed into client-facing recommendations.
**Setup:** open the audit next to the original `claims-raw.md` (or the evidence set you pasted in Ex 3). You will need the source material to check provenance, not just the audit.
**The Validation Task:** "Evaluate the AI output using this checklist. For each item record Pass / Fail / Cannot determine and explain."
```
Validation Checklist — Verifying Brand Evidence
□ Correctness: Does each verb rating match the claim's actual wording, and does the list placement match the stated limiting factor?
□ Completeness: Is every claim from the source audited, with no claim silently dropped or merged?
□ Scope: Do "Can Say" placements stay within the coverage, recency, and sample of the evidence — nothing generalized beyond what was collected?
□ Provenance integrity: Is every Source-as-given traceable to the original, with no invented dates, sample sizes, or sources?
□ Model-judgment labeling: Is every model-produced score or label flagged as a model judgment rather than treated as a measurement?
□ Failure mode check: fluent-but-wrong (a confident sort with no real evidence behind it)? overcommitted verbs slipping into Can Say? missing ground truth treated as if it were established?
```
**What to do with your findings:** every Fail or Cannot determine becomes a correction — re-sort the claim, restore the missing source, or move it to Needs Human Review. The corrected audit is the verified component you commit to the repo for this chapter.
**AI Use Disclosure prompt:** "AI produced the first-pass verb ratings and four-list sort from my pasted evidence and claims; I reviewed every placement, corrected the overcommitted verbs, and signed off on the final buckets. The model could not determine the true coverage and method behind the pre-processed sentiment scores, so those claims were held in Needs Human Review pending the original methodology."
**Series connection:** the failure mode here is fluent-but-wrong provenance — an audit that looks rigorous while resting on sources the model never verified; catching it is the Tier 5 verification move that makes the artifact defensible.

---
**Tags:** evidence-audit · warranted-verbs · four-list-sort · provenance-check · model-judgment · claim-classification
