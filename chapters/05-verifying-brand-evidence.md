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

<!-- → [TABLE: Verb strength ladder — three-column table, columns labeled "Verb / Phrase," "What It Claims," "Evidence Required to Use It" — rows ascending in commitment: "is associated with" (correlation in dataset / properly collected dataset with documented method), "suggests" (pattern worth noting / consistent pattern in current data), "indicates" (reliable signal / replicated across conditions or sources), "shows" (established finding / robust study design), "demonstrates" (causal mechanism / controlled conditions or strong causal design), "proves" (certainty / near-impossible in brand research), "caused" (direct causation / experimental design with controls). Caption: The verb is a claim about what the evidence can do. Most brand evidence lives in the top three rows.] -->

Brand and advertising work runs on partial evidence. A survey of 400 respondents. A sentiment analysis of social posts collected over 30 days. A competitive scan assembled by an AI agent from publicly available sources. This is not a failure of resources. It is the nature of the work — decisions must be made before certainty is available, often on tight timelines, with the best data that can be gathered in the time allowed. The professional move is not to demand perfect certainty before writing anything. It is to use verbs that match what you actually have.

This skill — matching verb strength to evidence quality — is what separates analysis that can be defended from analysis that collapses under the first serious question. And it is the skill that AI-assisted workflows are most likely to degrade, because a language model is trained to produce fluent, confident-sounding text, and confident-sounding text reaches for strong verbs.

---

## What Evidence Actually Is

Before you can assess what your evidence warrants, you need to know what kind of evidence you have. This is not complicated, but it requires asking four questions that most practitioners skip.

**Coverage:** Who or what is the evidence about? A sentiment analysis of tweets about your brand covers people who post on that platform, who follow conversations about your brand, and who chose to express their opinion publicly. It does not cover your full audience. It may not even cover your current customers. Coverage determines who the conclusions can be extended to. If the coverage is narrow, the conclusions must be narrow.

**Recency:** When was the evidence collected? A survey conducted fourteen months ago may still be informative, but it cannot establish the current state of anything. The market can move. Attitudes can shift. Competitors can launch. Recency is not just a quality check; it sets the temporal scope of what the evidence can say.

**Method:** How was the evidence collected? This is the question that determines whether the patterns in the data reflect the thing you care about or an artifact of the collection process. A sentiment model assigns labels based on training data. Those labels reflect what the model learned to detect, which may or may not correspond to how your audience actually describes their experience. Method transparency lets you see where the signal is real and where it is a product of the instrument.

**Sample limits:** How large is it, and is it representative? Four hundred survey respondents can establish a pattern. They cannot establish that the pattern holds across a market. A sample of social posts is not a sample of consumers. These limits are not reasons to discard evidence; they are constraints on how far the conclusions can travel.

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

<!-- → [TABLE: Sample four-list sort — columns: Claim, List, Reason — six rows: "Social sentiment improved in February" (Can say / directly observed in timestamped data), "Younger audience more receptive to sustainability framing" (Can suggest / survey pattern, n=200, self-selected sample), "Campaign caused consideration lift" (Cannot claim / no controlled design, lift could have other causes), "Competitor is losing share" (Cannot claim / competitive scan shows activity decline, not share), "This signal is strong enough to change the brief" (Needs human review / weak evidence but pending deadline). Caption: The goal is not to move everything into Can say. The goal is to know which bucket each claim lives in before it appears in a recommendation.] -->

The four lists are not a filter designed to strip conclusions from your analysis. They are a map of where your professional accountability lies. The "can say" conclusions you can defend. The "can suggest" conclusions you can flag as directional. The "cannot claim" conclusions you remove from recommendations. The "needs human review" conclusions you escalate rather than resolve by yourself.

---

## Warranted Verbs in Practice

The practical application of the four lists is a rewrite. Take any paragraph of analysis and read it for verb strength. Find every place where the verb is making a stronger claim than the evidence permits. Replace it with the verb that matches.

This is not comfortable work. Confident-sounding analysis feels more valuable. Clients may initially prefer it. A sentence that "demonstrates a clear preference" sounds more actionable than one that "suggests a pattern worth investigating." The professional argument for warranted verbs is not that they sound better. It is that they are accurate, and accurate analysis can be defended when it is challenged.

The rewrite has a predictable shape. Causal verbs become correlational verbs. Definitive verbs become conditional verbs. Generalizations to broad populations become statements about the specific sample. Claims about the present become claims about the time period of data collection.

<!-- → [TABLE: Before/after rewrite examples — two-column table, columns "Original (Overcommitted Verb)" and "Rewritten (Warranted Verb)" — four rows: "The campaign caused a 12% lift in brand consideration" / "Brand consideration was 12 points higher in the post-campaign survey period compared to the pre-campaign baseline; other factors were not controlled for," "Consumers prefer message B" / "Survey respondents in this sample rated message B 18 points higher on purchase intent than message A," "The market has shifted toward value positioning" / "Competitor activity in the past 90 days shows increased emphasis on price and value framing in three of five major accounts scanned," "The sentiment analysis shows brand health improving" / "The sentiment model scored brand mentions 7 points higher in March than in January across the monitored channels." Caption: The rewrite does not reduce the value of the analysis. It makes the analysis accurate.] -->

There is a version of this skill that stops at language precision — swap the verbs, file the report, move on. That version misses the more important use of the exercise. When you sort your claims into the four lists and find that most of your "can say" conclusions are weak and most of your strong conclusions belong on the "cannot claim" list, that is a signal. It tells you that the evidence base for this decision is thin, and that whoever is making the decision should know that. The warranted-verb rewrite is not just a style correction. It is a professional act of transparency.

---

## The Agentic Complication

AI-assisted brand workflows produce evidence at a speed and volume that outpaces the human capacity to assess it carefully. An agent can run a competitive scan across forty sources in the time a practitioner would take to read three. That scan will produce output — structured, organized, fluent output — and the output will look authoritative because it is well-formatted and comprehensive.

The authoritativeness of the formatting is not evidence of the quality of the conclusions. This is the specific failure mode that AI assistance introduces in the evidence verification domain. The agent produces a clean artifact. The clean artifact looks like assessed work. The practitioner treats it as assessed work. The claims in it cross a professional gate without the four-list sort ever happening.

The supervision question for evidence workflows is: has a named practitioner made an explicit assessment of what the evidence warrants? Not "has AI produced an analysis?" — that question answers itself. Has a human sorted the claims? Has someone written "cannot claim" next to the causal conclusion, or "needs review" next to the weak signal that is being used to drive a brief change?

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
