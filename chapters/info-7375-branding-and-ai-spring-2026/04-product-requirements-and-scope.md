# Chapter 4 — Product Requirements and Scope
*The $100,000 no, and why the things you refuse to build define the product more than the things you build.*

---

## Learning Objectives

By the end of this chapter you should be able to:

1. **Write** a one-page PRD that answers four questions — problem, gap, tool, MVP boundary — with enough precision that another engineer can build from it without a follow-up conversation.
2. **Distinguish** between a PRD that specifies *what* a product does versus one that specifies *how* it works, and explain why conflating the two produces worse products.
3. **Apply** the Build-Measure-Learn loop to evaluate whether a proposed feature belongs in v1 or v2, using validated learning as the test.
4. **Construct** an MVP boundary — specifically the "out of scope" column — and defend each exclusion against a reasonable counterargument.
5. **Identify** the brand consequence of scope discipline, using Linear as a primary case and Madison as a secondary reference.
6. **Map** your own tool concept onto the one-page PRD template and produce a draft ready for peer critique.

---

## Prerequisites

This chapter assumes you have completed Chapters 1 through 3. Specifically, you should arrive with:

- A committed archetype from Chapter 1 — Sage, Creator, Hero, Caregiver, or Magician. You will use this to anchor your problem statement.
- A selected Madison layer from Chapter 2 — the layer whose shape fits the tool you want to build. You will use this to calibrate the scope of your PRD.
- A stress-tested archetype from Chapter 3, meaning you have confronted the failure mode of your archetype and you have not abandoned it. If you switched archetypes in Chapter 3, that is fine — bring the new one.

You do not need to know how to code to write a PRD. You need to know what problem you are solving and for whom. The coding starts in Chapter 5.

---

## Why This Chapter

Chapters 2 and 3 gave you a reference architecture and a self-model. You know what multi-agent systems are made of, and you have a working theory of what kind of tool builder you are. This chapter is where those two things become a document.

The document is a PRD — a Product Requirements Document. The word "requirements" sounds administrative, which is why students underestimate it. A PRD is not a form you fill out before you are allowed to write code. It is the mechanism by which you force yourself to make decisions before writing code. The decisions are hard. The PRD is what makes you make them.

Here is the problem the PRD solves. When you begin building without a PRD, every question that arises during development gets answered in the moment by whoever is most opinionated in the room. Should the tool support multi-user accounts? The engineer who is annoyed by the lack of them says yes and builds it. Should the output be a Google Sheet or a Notion database? The PM who uses Notion says Notion. Should the system support custom RSS feeds or only a curated list? The person who gave the last demo adds custom feeds because the prospect asked for them. By the time v1 ships — if it ships — the product is a collection of in-the-moment decisions made under different assumptions by people solving different problems. It is coherent the way a committee memo is coherent.

The PRD does not prevent all of this. It does something more useful: it makes the disagreements visible before code gets written. If the PRD says "out of scope: multi-user accounts," and someone wants to build multi-user accounts, that conversation happens at the document stage — where it costs ten minutes — rather than at the code stage, where it costs two weeks and a refactor.

That is why I am putting the PRD here, between the architecture chapter and the pipeline chapter. Write the PRD now, before you touch n8n or OpenAI or any of the tooling. The document is the product until the code is written. Make it good.

---

## 1. What a PRD Actually Is

A Product Requirements Document is a written specification of what a product will do, who it is for, and what success looks like. There are long versions — enterprise PRDs run to twenty pages — and short versions. I want you to write the short version, and I want to be specific about why.

Marty Cagan, whose book *Inspired* is the most widely-read treatment of product management in the technology industry, gives the PRD's core rule in a single sentence: the PRD specifies the *what*, not the *how*. The product team decides what the product needs to do. The engineering team decides how to implement it. A PRD that contains implementation decisions is a PRD that has overstepped — it has taken choices away from the engineers who will be most affected by them.

The *what* versus *how* distinction is cleaner in theory than in practice. A few examples:

- "The tool sends users a daily email summary" — this is *what*. It says nothing about the email infrastructure, the scheduling mechanism, the HTML renderer, or the unsubscribe flow. That is for engineering.
- "The tool sends users a daily email summary via SendGrid at 7 a.m. Eastern using a Handlebars template" — this is *how* in *what*'s clothing. It has made technology decisions that the PRD had no business making.
- "The tool scores articles for sentiment" — this is *what*.
- "The tool scores articles for sentiment using GPT-4o-mini with a temperature of 0.2 and a custom system prompt that rates each article on a five-point scale" — again, this is *how* smuggled in. The PRD should not specify the model, the temperature, or the prompt structure. Those are implementation choices.

The distinction matters because when the *how* ends up in the PRD, it gets treated as a requirement. Engineers build against it. When the implementation needs to change — and it always needs to change — the PRD becomes a source of false constraints. You end up defending a technology choice that was never actually a product requirement.

The one-page PRD I want you to write has four sections. I will give you each section with the question it answers, the failure mode to avoid, and an example of what good looks like.

<!-- → TABLE: PRD section anatomy — columns: section name, question it answers, common failure mode, example of weak version, example of strong version. Student should use this as a checklist when drafting their own PRD. -->

### Section 1: Problem

**The question:** What specific problem are you solving, for whom, and how often does it cost them something?

**The failure mode:** Abstracting the user. "Marketing professionals" is not a user. "Marketing managers at Series-B SaaS companies with no dedicated analytics team" is a user. The more precisely you can describe the person, the more precisely you can test whether your tool actually solves their problem.

**The second failure mode:** Describing a symptom instead of a cause. "Users want better competitive intelligence" is a symptom. The cause is: "Marketing managers at small B2B companies spend three hours a week manually compiling competitor news from RSS feeds and email newsletters, and the compiled output is stale by the time they act on it." The cause has a user, a task, a time cost, and a consequence. The symptom has none of those.

**What good looks like:** *Marketing managers at small B2B SaaS companies (five to fifty employees, no dedicated analyst) spend two to four hours every Monday morning manually aggregating competitor news from RSS feeds, Google Alerts, and vendor newsletters. They do this to brief their team before the week's campaigns. The output is a Slack message or a shared Google Doc. The process is repetitive, the output is inconsistent, and the intelligence is approximately twelve to twenty-four hours stale by the time the team reads it.*

Notice what that problem statement gives you: a specific user, a specific task, a specific frequency, a specific output, and a specific failure mode. Every one of those specifics is testable. You can find ten marketing managers who fit that description and ask them whether the problem statement is accurate. If it is not, you revise. The specificity is what makes the problem statement useful rather than decorative.

### Section 2: Gap

**The question:** What already exists to solve this problem, and where does it fall short?

**The failure mode:** Vagueness. "There are tools out there, but they're not quite right" is not a gap analysis. A gap analysis names actual products and explains exactly what each one gets wrong for your specific user.

**Why this matters:** The gap analysis is where you justify the product's existence. If you cannot name what you are replacing and why the replacement is necessary, you do not have a product; you have a feature request for someone else's product. The gap analysis is also the document that will save you from building something that already exists. You will discover it now, when it costs you a rewrite of the PRD, rather than in six months, when it costs you a pivot.

**What good looks like:** *Google Alerts is free and monitors keyword mentions, but it produces a raw feed with no deduplication, no sentiment scoring, and no prioritization. Users end up with 50 alerts per day for a single keyword, most of them noise. Feedly Pro aggregates RSS feeds cleanly and costs $8/month, but it has no analysis layer — the user still has to read every article and extract the insight manually. Brand24 monitors social mentions and news with sentiment analysis starting at $99/month, but it is priced and scoped for enterprise, the interface is complex, and it does not integrate with the Google Sheets workflows that small-team marketers already use. Crayon tracks competitor website changes and marketing activity but costs $1,500/month minimum, which is outside the budget of the user we are targeting.*

That gap analysis has four named competitors, a specific failure mode for each, and a clear implication: the market has either cheap-and-dumb or expensive-and-complex. The user needs affordable-and-smart. Now you have a product.

### Section 3: Tool

**The question:** What, exactly, will you build?

**The failure mode:** Marketing language. "An AI-powered platform for marketing intelligence" is not a tool description; it is a press release sentence. It tells the reader nothing about what the product does, how it does it at the output level, or who it is for. Every AI marketing tool could be described that way.

**The test:** Read your tool description to someone who has not heard your pitch. Ask them what the tool does. If they cannot tell you — if they have to ask clarifying questions — the description is not specific enough.

**What good looks like:** *A self-hosted n8n workflow that pulls from up to ten RSS feeds per user, deduplicates articles by title similarity, scores each article for sentiment and competitive relevance using the OpenAI API, and writes a daily summary to a Google Sheet the user already owns. Total API cost under $20/month for a standard-volume user.*

That description tells you: the delivery mechanism (n8n workflow), the input (RSS feeds), the processing (deduplication, sentiment scoring), the output (Google Sheet), and the cost envelope ($20/month). A competent engineer can read it and know what to build. The product manager can read it and know what to demo. The user can read it and know whether it solves their problem.

Notice that the tool description does not say anything about how the deduplication works, which model version scores the sentiment, or what the Google Sheet looks like. Those are *how* decisions. They belong to the engineer who builds the tool, not to the PRD.

### Section 4: MVP Boundary

**The question:** What is in scope for v1, and — explicitly — what is not?

**The failure mode:** Only writing the "in" column. Every PRD has an "in" list; that is the natural output of a feature brainstorm. The "out" list is what takes discipline, because every item on the out list is a thing someone on the team wanted. Writing it down means having the argument before shipping, not during.

**Why the out list is more important than the in list:** Inclusion is the default. Every user request becomes a feature candidate. Every demo adds something the prospect wanted. Every competitive analysis surfaces a gap you should close. Without a formal "out" list, these additions accumulate through a process of least resistance, and the product that ships is larger, slower, and less coherent than the one you planned.

The out list is also brand strategy in disguise, for the same reason Linear's refusals are brand strategy. The things you refuse to build tell customers what you are optimizing for. A tool that refuses multi-user accounts in v1 is optimizing for individual users who want to move fast. A tool that refuses custom RSS feeds in v1 is optimizing for simplicity over power. The refusals define the product's point of view.

**What good looks like:**

*In scope for v1:*
- Up to 10 RSS feeds per user, configured in a YAML file
- MD5-based title deduplication
- GPT-4o-mini sentiment scoring (positive / neutral / negative + 1-sentence summary)
- Daily output to a single designated Google Sheet
- Email notification when the sheet has been updated

*Out of scope for v1:*
- Multi-user accounts or team sharing
- Social media monitoring (Twitter, LinkedIn, Reddit)
- Custom dashboards or data visualizations
- Slack or Teams integration
- Mobile app or browser extension
- On-demand / real-time triggering (daily batch only)
- API access for third-party integrations
- Historical trend analysis beyond 30 days

That out list has eight items. Each one is a thing a reasonable user would want and a reasonable engineer would want to build. Each one is a door that will not be opened in v1. The discipline that produced the list is exactly the $100,000 no.

---

## 2. The Build-Measure-Learn Loop and What "MVP" Actually Means

The word *minimum* in *minimum viable product* is where most students go wrong. Minimum sounds like it means "the least possible." It does not mean that. It means "the smallest thing that produces validated learning."

Eric Ries introduced the term in *The Lean Startup* (2011) and defined it precisely: "a version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort." Three words in that definition are doing serious work: *version*, *validated*, and *learning*.

**Version** means the MVP is a real product, not a mock. You can run a mock past users and get their reactions. What you cannot get is validated behavior — whether users actually do the thing the product enables when they have real stakes, their real data, and their real workflow. A Figma prototype of a sentiment analysis dashboard will get you feedback on colors and layout. It will not tell you whether a marketing manager will actually read the daily Google Sheet update, or whether they will look at it twice and stop because the format does not fit their morning routine. The version has to be real to produce valid data.

**Validated** means the learning came from what users *did*, not what they *said*. Users reliably tell you they will do things they will not do. "Would you use a tool that summarizes your competitor news every morning?" gets a yes from nearly everyone. "Did you open the Google Sheet three times last week?" gets an honest answer from the usage data. Validated learning comes from behavior, not surveys.

**Learning** means the purpose of the MVP is to test an assumption. The Build-Measure-Learn loop only works if you know, before you build, which assumption you are testing. If you do not know what you are testing, you cannot interpret the results. A marketing manager who opens the sheet every day is confirming that the intelligence is valuable. A marketing manager who stops opening the sheet after two weeks is telling you one of three things: the intelligence is not actionable, the format is wrong, or the cadence is wrong. You need to know which one, and the PRD's problem statement is what lets you formulate the hypothesis.

The loop looks like this:

```
1. HYPOTHESIS: Marketing managers at small B2B companies
 will use a daily competitor-news summary if it is
 pre-filtered to < 10 items and scored for sentiment.

2. BUILD: The smallest tool that tests this hypothesis.
 (RSS ingestion + deduplication + sentiment scoring + Sheet.)

3. MEASURE: Do they open the Sheet? How many times per week?
 Do they share it with their team? Do they pay for month two?

4. LEARN: If open rate is high and churn is low, the hypothesis
 held. If open rate drops after week one, the problem was
 not the filtering — it was the format or the cadence.
 Update the hypothesis and rebuild.
```

The MVP boundary is what keeps the loop tight. A PRD that puts too much in v1 takes six months to ship. You learn nothing for six months. The competitor who shipped a worse product four months ago has already run three learn cycles and is now on v4. You are still on v1.

The discipline is uncomfortable because it means shipping something that is clearly incomplete. Founders feel this acutely. You know the product needs multi-user accounts. You know it should have a Slack integration. You know the dashboard should be better than a Google Sheet. But until you have validated that someone will pay for the core thing — the daily scored news summary — none of the additions matter. Ship the core thing. Validate. Then add the layer.

<!-- → DIAGRAM: Build-Measure-Learn loop — circular diagram with three labeled nodes (Build, Measure, Learn); annotations at each node showing: what gets built at Build (the hypothesis-testing MVP), what gets measured at Measure (behavior, not stated intent), what changes at Learn (the hypothesis or the build scope). A second, outer loop shows how each cycle updates the PRD. Student should see that the PRD is a living document, not a one-time artifact. -->

### Hypotheses That Can Be Tested and Hypotheses That Cannot

Not all assumptions are equally testable in an MVP, and the PRD should be designed around assumptions that can produce validated results within the MVP window.

A testable hypothesis has a measurable behavioral outcome in a realistic timeframe. *"Marketing managers will open a daily Google Sheet of scored competitor news at least three times per week after the first two weeks of use"* is testable: you can measure it, it has a timeframe, and the outcome (open rate after the novelty wears off) is behaviorally meaningful.

An untestable hypothesis cannot be evaluated from an MVP's behavior alone. *"Our tool will become the category-defining competitor intelligence platform for SMBs"* is not testable in v1. It is a vision, not a hypothesis. Visions belong in your pitch deck, not your PRD.

The test for whether a hypothesis belongs in the PRD: *what would falsify it, and can I observe the falsification within the MVP window?* If the answer is yes — if you can describe what behavior would tell you the hypothesis is wrong — the hypothesis is precise enough to build against. If the answer is no, you need to decompose it into smaller, testable pieces.

---

## 3. The Linear Case — Scope Discipline as Identity

Linear is a project management tool built for engineering teams. It competes with Jira, Asana, and Linear's own stated competitor: the cognitive overhead of bad project management software. The company launched in 2019, grew primarily through word-of-mouth among engineers, and reached a reported $35 million ARR by 2023 — with a famously lean team and a product that, by design, does fewer things than its competitors.

The story that anchors this chapter is real: Linear's team has repeatedly declined enterprise customization requests — including multi-workflow configurations that would have been worth significant annual contracts — because those customizations conflicted with Linear's product philosophy. The philosophy is published as the [Linear Method](https://linear.app/method/introduction), a document describing how Linear thinks about software and why their choices are the choices they are.

The Linear Method includes several commitments that look like scope restrictions until you understand their compound effects:

**"Opinionated software."** Linear does not try to be configurable for every team's workflow. It has a specific model of how engineering teams should manage work — issues flow through defined states, cycles replace sprints, priorities are explicit — and the product reflects that model. Teams that want to use Linear *their* way find the product resistant. Teams that adopt Linear's model find the product exceptional.

**"Simple and fast."** Linear's interface loads faster than competing tools because the company has refused to add the layers of configurability that slow down Jira and Asana. Every rejected customization request is also a rejected source of UI complexity, a rejected source of backend branching logic, and a rejected source of on-call incidents. The no to the customer is simultaneously a yes to speed.

**"Continuous improvement."** Linear ships small improvements constantly rather than big features occasionally. This cadence is only possible because the scope is narrow. A team maintaining a product with forty configuration surfaces cannot ship as frequently as a team maintaining a product with ten.

The brand consequence of these commitments is specific: Linear has become the product that engineers recommend to other engineers when they want to escape Jira. The recommendation happens not because Linear has more features — it has fewer — but because Linear's constraints produce a coherent experience. The discipline that said no to the enterprise customization is the same discipline that produced the product engineers love.

This is the phenomenon I want you to see as a product designer: *scope discipline compounds*. Each time you refuse a feature that would compromise the core, you are not just keeping the product smaller. You are preserving the coherence of the experience that made the product worth using. Over time, the coherence becomes the product's identity. The identity becomes the brand. The brand attracts more users who value that specific coherence, which makes the product stronger for those users, which deepens the brand.

The inverse is also true. Each time you accept a feature that compromises the core — usually because a specific customer asked for it and was willing to pay — you are spending coherence for cash. The transaction feels rational in the moment. Over time, the accumulated incoherence drives away the users who came for the discipline. You do not notice until your original user base has quietly moved on.

<!-- → DIAGRAM: Scope coherence compounding — two timelines side by side; left shows a product that maintains scope discipline (occasional sharp no's, coherence index rising over time, brand identity strengthening); right shows a product that accepts feature requests from individual customers (coherence index degrading over time, original user base churning, product becoming "another Jira"). Student should see the long-term consequence of each decision pattern. -->

### Your $100,000 No

Before you write your PRD, you need to identify your equivalent of the Linear enterprise customization refusal. I call this the $100,000 no — the feature you would decline even if declining cost you something real.

The $100,000 no is not "I will not build things that are out of scope." Every product has out-of-scope things by default; that is not a discipline. The $100,000 no is the feature that a real user will ask for, with a real argument for why it belongs in the product, and that you will decline anyway because including it would compromise the core.

For a sentiment analysis pipeline targeting small marketing teams, the $100,000 no might be: multi-user account support. An enterprise prospect will ask for it. They will have a budget. The implementation is not technically difficult. And you will refuse it in v1 because multi-user account support changes the product from a personal intelligence tool to a team intelligence platform, and those are different products. The day you build multi-user support, you have stopped building the personal tool and started building the team platform. Every subsequent decision — permissions, audit trails, team-level dashboards, admin interfaces — is a team-platform decision, not a personal-tool decision. The product's point of view has changed. You have opened the door.

The $100,000 no is disciplined precisely because it acknowledges the cost. You are not refusing because the feature is technically impossible or economically worthless. You are refusing because building it would damage the product's coherence in ways that would cost more than the feature is worth. That requires you to have a point of view strong enough to hold under pressure.

Write your $100,000 no before you write the rest of your PRD. Put it in the "out of scope" column, first. Then write the rest of the document around it.

---

## 4. Reading Madison as a PRD — and Writing Yours

Chapter 2 introduced [Madison](https://www.humanitarians.ai/madison) as a reference architecture. In this chapter, Madison serves a different function: it is a library of PRD-shaped documents you can study before writing your own.

Each Madison layer has a README in the [GitHub repository](https://github.com/Humanitariansai/Madison) that functions as a condensed PRD. It states a purpose, names the features, describes the technology stack, and — implicitly — defines the scope by what it includes and what it omits. Reading the READMEs as PRDs teaches you the shape your document should take.

Open the Intelligence Agent README. Here is what it does that a PRD should do: it states the purpose in one line ("real-time sentiment analysis, competitive benchmarking, actionable marketing insights"), lists the features in plain language without implementation detail, names the success criteria in measurable terms ("processes 870+ articles daily, sub-3-minute latency, 90% deduplication"), and stops. It does not explain the MD5 hashing algorithm. It does not describe the database schema. It does not enumerate the edge cases in the Levenshtein-distance calculation. Those are *how* decisions. The README, functioning as PRD, leaves them alone.

Read the README again with two questions in your head: *What would happen if I added social media monitoring to this agent?* and *Why hasn't Madison's team added it?* The first question is easy — social media monitoring would require different APIs, different rate limiting, different content normalization, and a different deduplication approach for short-form content. The second question is the PRD discipline: Madison's Intelligence Agent is scoped for RSS-based news, and widening the scope would add complexity without serving the core use case better. The scoping decision is not a technical limitation. It is a point of view about what the agent is for.

Now look at the gap between Madison's Intelligence Agent and what you need your tool to do. If your archetype is Sage, the Intelligence layer is probably your closest reference. If your archetype is Creator, the Content layer's README is your reference. If you are a Caregiver, look at the Experience Agent documentation. The archetype picks the layer; the layer shapes the PRD.

The exercise at the end of this chapter asks you to write a one-page PRD for your own tool. Here is the mapping from Madison layers to the PRD sections you will fill out:

- **Problem:** Who does your chosen Madison layer serve? Madison serves marketing teams at organizations with existing brand data. Your tool may serve a different user, at a different scale, with a different pain. Name them specifically.
- **Gap:** Madison is a framework, not a product — it requires technical setup and assumes a certain infrastructure. If your user is a non-technical marketing manager, the gap is that Madison is inaccessible to them. Name that gap, and name the existing alternatives and why they also fall short.
- **Tool:** Describe what you will build in one sentence that a non-technical user can parse. Reference the Madison pattern you are implementing ("a self-hosted n8n pipeline, based on Madison's Intelligence Agent pattern, that...") and then specify what makes your version distinct.
- **MVP boundary:** Use the corresponding Madison layer's scope as your ceiling, not your floor. Madison's Intelligence Agent processes 870 articles daily. Your v1 might process 50. That is not a failure — it is a hypothesis. If 50 articles provides validated value for your user, you expand. If it does not, you have learned something quickly without building a system that processes 870 articles no one reads.

<!-- → TABLE: Madison layer to PRD template mapping — rows: five Madison layers; columns: layer name, target user in Madison's design, gap Madison leaves for non-technical users, suggested v1 scope for a student building on this layer, $100,000 no for each layer. Student should find their layer and use this as a PRD starter. -->

---

## 5. Writing the PRD — A Worked Example

Suppose your archetype is Sage and your selected layer is Intelligence. You have done the reading. Now you sit down to write the PRD. Here is what that process looks like, with the decisions made explicit.

**Draft problem statement, attempt 1:** *Marketing professionals need better competitive intelligence.*

That is a wish. It has no user, no frequency, no cost. Discard it.

**Draft problem statement, attempt 2:** *Small marketing teams lack good competitive intelligence tools.*

Still too abstract. "Small marketing teams" is not a person. "Lack" describes an absence, not a pain. Discard it.

**Draft problem statement, attempt 3:** *Marketing managers at small B2B SaaS companies spend two to three hours every Monday aggregating competitor news manually, because their team needs a weekly brief and there is no tool that does the aggregation, filtering, and scoring in one step at a price point they can justify.*

Now we have something: a specific user (marketing manager, small B2B SaaS), a specific task (aggregating competitor news), a specific frequency (every Monday), a specific output (weekly brief), a specific failure (no tool does all three steps at the right price). This is a problem statement. It is testable — you can find ten such marketing managers and ask them whether this describes their Monday.

**Gap analysis:** Name three competitors and what they miss for this specific user. The example from section 1 applies here. Google Alerts is free and noisy. Feedly is affordable and unanalyzed. Brand24 is analyzed and expensive. The gap is: affordable plus analyzed. Your tool lives in that gap.

**Tool description, attempt 1:** *An AI-powered competitive intelligence platform.*

This is a marketing slogan. It describes nothing. Discard it.

**Tool description, attempt 2:** *A self-hosted n8n workflow that pulls competitor RSS feeds, deduplicates articles, scores sentiment with GPT-4o-mini, and writes a daily summary to Google Sheets for under $20/month in API costs.*

This is a tool description. A competent engineer knows what to build. A marketing manager knows whether this solves their problem.

**MVP boundary:** In scope: 10 RSS feeds, deduplication, sentiment scoring, daily Google Sheet output, email notification. Out of scope: social media, multi-user accounts, dashboards, Slack integration, real-time triggering, historical trend analysis. The $100,000 no: multi-user accounts, because adding them changes the product from personal tool to team platform and forces a different design philosophy for every subsequent decision.

That is the PRD. One page. Four sections. A defensible out list. A named $100,000 no. An engineer can build from it. A user can evaluate it. A product manager can test it against the Build-Measure-Learn loop.

<!-- → TABLE: PRD iteration quality ladder — rows: each of the four PRD sections (Problem, Gap, Tool, MVP Boundary); columns: weak version (what students typically write first), failure mode it represents, strong version (what the worked example produces). Student should use this as a self-grading rubric before peer critique. -->

Now write yours.

---

## 6. Integration — What the PRD Is Actually Doing

Let me connect the threads, because the PRD touches everything that comes before and after this chapter.

The problem statement is an extension of the archetype work from Chapter 1. Your archetype describes the kind of value you create and the mode in which you create it. The problem statement describes who receives that value and under what circumstances. A Sage archetype builds tools that provide insight — the problem statement identifies who lacks insight, how they currently seek it, and what that seeking costs them. A Creator archetype builds tools that produce things — the problem statement identifies who needs production help, what they currently produce manually, and why manual production fails them. The archetype tells you what kind of tool to build. The problem statement tells you for whom.

The tool description is an extension of the architecture work from Chapter 2. Madison gave you a five-layer pattern and the tools that implement it. The tool description translates that pattern into user-facing language: not "an n8n ReAct pipeline with GPT-4o-mini sentiment scoring" but "a daily summary of competitor news, scored and filtered, in the Google Sheet you already use." The architecture stays in the *how*. The tool description stays in the *what*. Both are necessary; the PRD is the place where they stop being the same sentence.

The MVP boundary is the mechanism that makes the Build-Measure-Learn loop fast. Chapter 5 will ask you to build the pipeline. The pipeline you build in Chapter 5 is exactly what the MVP boundary describes: not the full-featured tool, but the minimum version that tests your core hypothesis. If the out list is too short, Chapter 5 will take too long. If it is too long — if you have removed things that are genuinely necessary for the core experience — you will not get valid results from the measure step because users will be blocked from the behavior you are trying to measure.

The $100,000 no is the mechanism that prevents scope creep through the rest of the course. Every chapter after this one will surface features you could add. The PRD's out list, with the $100,000 no at its head, is the document you return to when someone suggests adding a feature. Not "is this a good feature?" — that question always gets a yes. The question is: "does this feature belong in v1, given the hypothesis we are testing?" The PRD is the arbiter.

> A PRD is a contract with future-you: a record of the decisions you made when you were thinking clearly, preserved for the moment when you are thinking under pressure. The pressure will come. The contract is what keeps you from agreeing to things you will regret.

<!-- → INFOGRAPHIC: One-page PRD template — four labeled boxes arranged vertically (Problem, Gap, Tool, MVP Boundary); each box contains its guiding question, a one-line example of the weak version (crossed out), and a one-line example of the strong version; a sidebar annotation marks the $100,000 no as the first entry in the MVP Boundary out column. Student should be able to use this as a blank template for their own PRD. -->

---

## Cases from this edition that demonstrate scope discipline

Every Path B case in the cohort instantiates this chapter at some level — the deck's *positioning + UVP + competitive map* slides are PRD-shaped artifacts. A few cases stand out as worked examples of the chapter's specific moves:

- **Chapter 26 (*Apexly*, Harsh Gujarati)** is the cohort's clearest example of a deliberate audience pivot used as scope discipline: *started building an F1 prediction model as a passion project; discovered that fantasy platform operators had zero risk management tools; shifted from fan tool to B2B product*. The pivot reshaped output format, vocabulary, and success metric simultaneously — the *out list* the chapter argues is more important than the in list.
- **Chapter 30 (*DataWise*, Minal Naranje)** renders the chapter's anti-scope-creep discipline as a paired *WE'RE NOT / WE ARE* slide: *not analytics platform (no dashboards), not data Q&A tool (no simple answers), not just another AI product*. Three explicit out-list items render as anti-positioning before the in-list is even read.
- **Chapter 34 (*AegisOps*, Rajat Puli)** stakes the cleanest category-creation argument in the cohort against three named incumbents (PagerDuty, Datadog, New Relic). *Every tool on the market was built to respond. Not to prevent.* The *out list* is the entire reactive-observability category by structure, not by feature.
- **Chapter 31 (*Aligna*, Vivek Nikam)** carries the *we don't generate content, we validate it* commitment three times across the deck — the chapter's discipline of triple-naming the anti-positioning to prevent category-confusion review.
- **Chapter 25 (*vigilixx*, Mithran Ezhilarasan)** instantiates the chapter's *named competitor scope* with explicit boundary work: not Crayon/Klue at $20K-plus enterprise contracts, not free-tool raw feeds — the seam the brand occupies is defined by what it refuses to be.

The cohort consistently treated the out-list as the load-bearing strategic artifact. Read alongside the case-layer competitive maps, the chapter's *$100,000 no* discipline becomes concrete.

---

## Summary

What you can do now that you could not do before this chapter:

- Write a problem statement that has a specific user, a specific task, a specific frequency, and a specific cost — not a wish, not a symptom.
- Write a gap analysis that names actual competitors and explains precisely where each one fails your specific user.
- Write a tool description in one sentence that a non-technical user can parse and an engineer can build from — no marketing language.
- Write an MVP boundary with an "out" column that has at least five items and a named $100,000 no at the top.
- Apply the Build-Measure-Learn loop to a feature decision and give a precise answer to whether it belongs in v1.

**The one idea that matters most:** The out list is more important than the in list. Inclusion is automatic — every feature suggestion gets into the brainstorm. Exclusion requires judgment, and judgment is what separates a focused product from a committee memo. Write the out list first, from the $100,000 no down.

**The common mistake:** Treating the PRD as a wish list and the MVP boundary as aspirational. If the out list has items you secretly plan to add during development, it is not an out list — it is a deferred in list. The discipline requires that the out list actually constrain the build.

**The Feynman test:** Can you read your PRD to a friend who has not heard your pitch and have them tell you, without prompting, who the user is, what the tool does, and what it deliberately does not do? If yes, your PRD is specific enough. If not, you have more work to do.

---

## Connections Forward

Chapter 5 asks you to build the pipeline your PRD describes. The MVP boundary is the scope document that Chapter 5 builds against — not more, not less. If your MVP boundary is too wide, Chapter 5 will take longer than the course allows. If it is too narrow — if you have excluded things that are genuinely necessary — your build in Chapter 5 will not produce the validated learning your hypothesis requires.

The PRD also feeds Chapter 6, which covers testing and iteration. The release criteria implied by your PRD — what has to be true before v1 ships — become the test cases in Chapter 6. The problem statement becomes the user story template. The gap analysis becomes the competitive benchmark.

---

**What would change my mind:** A controlled study of student-built AI tools comparing cohorts who wrote a PRD before building against cohorts who did not, measuring time-to-ship and user retention at thirty days. The argument in this chapter is theoretical and industrial; the experimental evidence in student contexts is thin. If students without PRDs ship faster *and* retain users longer, the constraint is net-negative for this course context, and I should remove this chapter. I do not believe that will be the finding, but I have not run the study.

**Still puzzling:** The exact moment when scope discipline tips from useful constraint to creative restriction. Linear's discipline works because it is grounded in a coherent point of view on how engineering teams should work. A student without a coherent point of view practicing the same discipline can end up refusing features for no good reason — a sterile discipline rather than a productive one. I teach the $100,000 no as a tool. What I have not yet figured out is how to teach the underlying point of view that makes the no meaningful rather than merely rigid.

---

## A note about AI

PRD writing is one of the genres where the model is most fluently misleading. A PRD has a recognizable shape — context, problem, scope, success criteria — and the model can produce that shape from a sentence.

Where the model genuinely helps: pressure-testing a draft PRD by asking it what specific questions an engineer would ask that the PRD does not answer. Models surface the missing detail because they have read many PRDs and the gaps follow patterns.

Where the model does damage: writing the success criteria. The metrics that decide whether the project worked have to be metrics the team will actually measure and the company will actually care about. The model does not know your team or your company.

The rule: the model can format a PRD; the PRD's actual content has to come from someone who is going to be on the hook for it.

---

## Exercises

### Warm-Up

**W1.** The chapter defines the PRD's core rule as: the PRD specifies the *what*, not the *how*. For each of the following statements, classify it as *what* or *how*, and rewrite the *how* statements as *what* statements.

- "The tool sends a daily email summary to the user."
- "The tool uses SendGrid for email delivery with a Handlebars HTML template."
- "The tool deduplicates articles before scoring them."
- "The tool runs MD5 hashing on article titles with a 0.8 Levenshtein threshold for near-matches."
- "The tool writes output to a Google Sheet the user designates."

*Tests: Objective 2 — distinguishing what from how.*
*Difficulty: Low.*

**W2.** Write a one-sentence tool description for each of the following product concepts. Each sentence must name the user, the output, and one constraint that defines the scope. No marketing language.

- A tool that helps independent consultants track which clients owe them follow-up.
- A tool that scores job postings for fit against a candidate's resume.
- A tool that monitors a competitor's pricing page for changes.

*Tests: Objective 1 — writing a specific tool description.*
*Difficulty: Low.*

**W3.** The worked example in section 5 includes an out list with eight items. For each item, write one sentence explaining what product the tool would become if that item were added to v1. (Example: adding multi-user accounts turns a personal intelligence tool into a team intelligence platform, which requires permissions, audit trails, and admin interfaces.)
*Tests: Objective 4 — constructing and defending the MVP boundary.*
*Difficulty: Low-medium.*

### Application

**A1.** Write a one-page PRD for the following tool concept: *a daily summary of AI industry news, scored for relevance to a student's archetype, delivered to a Google Sheet.* Use the four-section structure from the chapter. Your out list must have at least five items. Your $100,000 no must be explicitly named and defended in one paragraph.
*Tests: Objectives 1, 4, and 6.*
*Difficulty: Medium.*

**A2.** Choose one of the five Madison layers from the [Madison project page](https://www.humanitarians.ai/madison). Read its description. Identify three things the layer's scope implicitly excludes — things a user might reasonably want that the layer does not provide. For each exclusion, argue whether the exclusion is: (a) a $100,000 no — a principled refusal that protects the layer's coherence — or (b) a gap — something the layer should eventually add. Justify each classification.
*Tests: Objectives 4 and 5.*
*Difficulty: Medium.*

**A3.** The Build-Measure-Learn loop requires a testable hypothesis before the build step. For each of the following MVP concepts, write: (a) a testable hypothesis, (b) the behavior that would confirm it, (c) the behavior that would falsify it, and (d) the minimum build required to test it.

- A sentiment analysis pipeline for competitor RSS feeds.
- An AI concierge chatbot for a hotel's booking FAQ.
- A resume-scoring tool that ranks job postings by fit.

*Tests: Objective 3 — applying Build-Measure-Learn.*
*Difficulty: Medium.*

**A4.** Linear's product method is published at [linear.app/method/introduction](https://linear.app/method/introduction). Read it. Identify three specific commitments in the Linear Method and, for each one, explain: (a) the engineering benefit of the commitment, (b) the brand benefit of the commitment, and (c) one customer request Linear has probably refused — or would refuse — because of this commitment.
*Tests: Objective 5 — brand consequence of scope discipline.*
*Difficulty: Medium.*

### Synthesis

**S1.** The chapter argues that "scope discipline compounds" — each principled refusal preserves coherence, which accumulates into brand identity over time. Find a product that has undergone the inverse process: a product that was once coherent and has accumulated incoherence through accepted feature requests. Describe: the original product and its coherent scope, three features added over time that expanded the scope, the resulting incoherence (be specific — name what the user experience is like now versus before), and what the company would have needed to refuse in order to maintain coherence. Do not use Jira as your example — the chapter has already used it implicitly.
*Tests: Objectives 4 and 5.*
*Difficulty: Medium-high.*

**S2.** Your PRD from exercise A1 is now one page. Imagine you have shipped v1 and have twenty users. Three users have requested the same feature: a Slack integration that posts the daily summary to a team channel. Write: (a) the strongest possible argument for adding the Slack integration to v2, (b) the strongest possible argument against it, grounded in the PRD's stated scope and $100,000 no, and (c) a decision and a one-paragraph justification. The decision should not be "it depends" — make the call.
*Tests: Objectives 3, 4, and 5.*
*Difficulty: High.*

**S3.** The "Still puzzling" note at the end of the chapter identifies the limit of the $100,000 no: it only works if the product has a coherent point of view to protect. Without a point of view, the discipline is sterile. Write a two-paragraph reflection on your own tool's point of view: what does your tool optimize for, and what does it refuse to optimize for? Then write the one sentence that Linear-style would appear in your product's published method — the commitment that explains why you say no to the things you say no to.
*Tests: Objectives 1, 4, 5, and 6.*
*Difficulty: High.*

### Challenge

**C1.** The chapter claims that Marty Cagan has "evolved past PRDs" toward high-fidelity prototypes as the primary discovery tool. Read Cagan's argument — he discusses it at [svpg.com](https://www.svpg.com) — and evaluate it against the chapter's claim that a one-page PRD is the right constraint for a student building a first AI tool. Write a structured response: Cagan's argument summarized in your own words, the chapter's counter-argument, where you think Cagan is right, where you think the chapter is right, and what specific condition determines which approach is better. Your conclusion should make a falsifiable claim about when PRDs are preferable to prototypes.
*Tests: Objective 2; stress-tests the chapter's own argument.*
*Difficulty: Very high.*

**C2.** Design a PRD review process for a three-person team building an AI tool. The process should: catch the failure modes described in the chapter (abstract problem statements, marketing language in tool descriptions, out lists that are secretly deferred in lists), produce a clear yes/no on whether the PRD is ready for development, and be completable in under ninety minutes. Specify: who attends, what questions each reviewer asks, what the pass criteria are for each PRD section, and what "needs revision" looks like versus "approved." Then apply your review process to the PRD you wrote in A1 — does it pass?
*Tests: All objectives; applies the chapter's framework to a procedural design problem.*
*Difficulty: Very high.*

---

## LLM Exercise — Self-as-Project

**Project:** Self-as-Project
**What you're building this chapter:** A one-page **Career PRD** treating your job search as a product launch.
**Tool:** Claude Project (your *"My Personal Brand"* project from Chapter 1).

**The Prompt:**

```
Apply Chapter 4's PRD framework to my job search. Treat ME as the product,
the job market as the launch target, and the next 6 months as the MVP window.

A PRD has four sections:
1. Problem
2. Gap analysis
3. Tool (the product)
4. MVP boundary (in-scope vs. explicitly out-of-scope)

Write my Career PRD with these constraints:

PROBLEM. The user is a hiring manager, not me. What problem do they have
that hiring me would solve? Be specific. "Companies need AI engineers" is
not a PRD; it's a wish. Frame the problem at the level of "Series-B fintech
startups need engineers who can ship a multi-agent pipeline in 90 days and
also explain to a non-technical CEO why the architecture choices matter."
If I don't know enough to specify this, list the three things I need to
research before I can.

GAP ANALYSIS. Who else fits this problem? Name 3–5 candidate-archetypes
I'm competing against (e.g., the senior engineer with five years in
multi-agent systems but no design sense; the design-school graduate with
brand instincts but no shipped code). Where do they fall short of what
hiring managers want? Where do I exceed them? Where do I fall short of them?

TOOL. One sentence describing what I, the product, deliver. NOT a list of
skills. A specific value claim. "A creative engineer who ships multi-agent
AI pipelines and writes the brand strategy that makes them sellable" — that
level of specificity. Not "AI engineer with strong communication skills."

MVP BOUNDARY. Two columns.
- IN SCOPE for the next 6 months: roles I will pursue, salary floor I will
 accept, locations I will consider, technologies I will deepen.
- OUT OF SCOPE: roles I will decline even if offered, comp I won't accept,
 locations I won't move to, technologies I won't pretend to be expert in.

The OUT column should have at least 5 items. The exercise from Chapter 4 is
the "$100,000 no" — what's the role I would decline at $X compensation
because it would damage my brand? Name it specifically.

Output a Markdown document called "Career PRD — [my name] — [date]".
Single page. No marketing language. If a sentence could appear in a
corporate LinkedIn post, rewrite it.
```

**What this produces:** A one-page Career PRD that doubles as your decision filter for the next six months. Every job posting can be checked against it: does this role fit the in-scope column? Does it require me to violate the $100,000 no?

**How to adapt:** If you are not job-searching, reframe the four sections. Applying to PhD programs: the problem is your target advisor's research gap, the gap analysis is other applicants competing for the same advisor's attention, the tool is your specific research contribution, and the MVP boundary is the programs you will and will not apply to. Starting a company: the problem is your customer's problem, the gap is the competitive landscape, the tool is your product, and the MVP boundary is the features you will and will not build in year one.

**Preview of next chapter:** Chapter 5 turns your PRD's tool description into a working pipeline — the first code you will write.

---

**Tags:** PRD · scope-discipline · MVP · build-measure-learn · lean-startup · linear · cagan · madison-architecture · INFO-7375

---

## AI Wayback Machine

The ideas in this chapter didn't appear from nowhere. **Adele Goldstine** wrote the *Operator's Manual for the ENIAC* in 1946 — the first complete specification of an electronic computer system. The manual was 168 pages of decisions about what ENIAC could be made to do, what inputs it would accept, what outputs it would produce, what configurations were and were not supported. Half the work was naming what the machine could do. The other half — the part that makes it the foundational PRD of the computing era — was naming, with equal precision, what it could not. The chapter's $100,000 *no* is in the same lineage: scope is defined by the boundary line between what is in and what is out, written down before the build starts.

![Adele Goldstine, c. 1940s. AI-generated portrait based on a public domain photograph (Wikimedia Commons).](images/adele-goldstine.jpg)
*Adele Goldstine, c. 1940s. AI-generated portrait based on a public domain photograph.*

**Run this:**

```
Who was Adele Goldstine, and how does her work writing the first ENIAC operator's manual connect to the chapter's argument that a PRD's most important content is the explicit *no* — the boundary that decides what the product is by deciding what it isn't? Keep it to three paragraphs. End with the single most surprising thing about her career or ideas.
```

→ Search **"Adele Goldstine"** on Wikipedia after you run this. See what the model got right, got wrong, or left out.

**Now make the prompt better.** Try one of these:

- Ask it to explain why machine specifications need to enumerate negative behavior, in plain language
- Ask it to compare Goldstine's ENIAC manual structure to the structure of the PRD this chapter teaches
- Add a constraint: "Answer as if you're writing the *out of scope* section of an AI-tool PRD"

What changes? What gets better? What gets worse?

