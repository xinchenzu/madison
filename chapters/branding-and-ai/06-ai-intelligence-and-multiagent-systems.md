# Chapter 6 — AI Intelligence and Multi-Agent Systems

*The hardest design decision in any agentic system is not which model to use — it is where the AI decides and where it does not.*

---

## Learning Objectives

By the end of this chapter, you will be able to:

1. **Distinguish** the four patterns of AI intelligence in a workflow — single call, chained calls, tool-using agent, and multi-agent system — and explain what each trades away to get what it gains.
2. **Identify** where on the autonomy/orchestration spectrum a given AI system sits, using observable architectural signals.
3. **Write** a complete agent specification — role, goal, backstory, tools, and anti-hallucination guards — that constrains an LLM to a defined scope of work.
4. **Explain** why the autonomy/orchestration choice is a brand decision, not just a technical one, using the vocabulary of Chapter 3.
5. **Diagnose** the three failure modes of autonomous agents — compounding error, cost runaway, and trust collapse — and design a mitigation for at least one.
6. **Add** a deliberate AI-intelligence layer to an existing n8n pipeline, with structured output, step ceilings, and anti-hallucination guards.

---

## Prerequisites

This chapter assumes you have completed **Chapter 5** and have a working n8n pipeline with at least one data-handling step (fetch, transform, store, or notify). You should also have committed to an archetype in **Chapter 3** — that commitment becomes directly relevant here, because the architectural choice you make in this chapter is a brand expression.

You do not need prior experience with multi-agent frameworks. You need to be able to answer: *What does my pipeline do, and where in that sequence does a human or a deterministic rule currently make a decision?* The AI layer goes into that gap.

---

## Why This Chapter, and Why Now

You have a pipeline. It fetches data, transforms it, stores it, maybe sends a notification. It does what you told it to do, every time, in the same order, without deviation.

That predictability is valuable. It is also a ceiling. A rule-based pipeline cannot synthesize a research memo from forty web pages. It cannot rewrite a resume bullet to match a job description. It cannot read a competitor's press release and flag the two sentences that change your product strategy. Those tasks require judgment — the kind that, until recently, required a human in the loop at each step.

This chapter is about adding judgment to your pipeline. More precisely, it is about choosing *how much* judgment to add, and *where*, and *what you give up* at each level of the dial.

The dial has a name. The AI community calls it the autonomy/orchestration spectrum. At one end, the AI makes its own decisions about what to do next. At the other end, a deterministic system makes those decisions and the AI executes specialized tasks on command. Both ends have working products. Both ends have spectacular failures. The choice between them is not a preference — it is an engineering commitment that shapes every interaction your user will ever have with your tool.

The chapter that follows will teach you to make that commitment on purpose.

<!-- → INFOGRAPHIC: A simple dial or slider labeled "Autonomy/Orchestration Spectrum" — left end: "Human/Deterministic Decides" with examples (rule-based pipeline, if/then logic); right end: "AI Decides" with examples (autonomous agent, self-directed goal pursuit). Center: "Deliberate Design Zone" with an arrow pointing down. The framing is that neither end is inherently wrong — the question is whether the choice was made deliberately or by drift. Student should see this as a design decision they are about to make, not a gradient they fall onto by default. -->

---

## Part I — Four Patterns of AI Intelligence

### 1.1 The spectrum, not the binary

Before any framework, a clarification. "Adding AI to a workflow" is not one thing. It covers at least four distinct patterns, each with a different risk profile, a different maintenance cost, and a different user experience. Treating them as interchangeable is the most common mistake in student projects, and the source of most agentic failures in production.

Here are the four patterns, from simplest to most complex:

**Pattern 1: Single LLM call.** Send a prompt, get a response. The workflow treats the LLM like an API — a function that takes a string and returns a string. The LLM has no memory of what came before, no ability to call tools, no ability to loop. This is the most predictable pattern. It is also the most constrained. Use it when the task can be fully specified in a single prompt and the output can be validated deterministically.

**Pattern 2: Chained calls.** The output of one LLM call becomes the input to the next. A research-summary pipeline might chain: (1) extract key facts from raw text → (2) group facts by theme → (3) write a summary paragraph for each theme → (4) assemble and edit. Each step is a separate LLM call. The overall sequence is deterministic — n8n decides the order — but each step introduces non-determinism. Errors at step 2 propagate to steps 3 and 4. Use this when the task has a natural decomposition into sequential sub-tasks and each sub-task's output can be inspected before the next step runs.

**Pattern 3: Tool-using agent (ReAct).** The LLM reasons about what to do, calls a tool, observes the result, reasons again, and decides whether to call another tool or produce a final answer. The loop is controlled by the LLM, not by a workflow graph. This is the pattern underlying ChatGPT with plugins, Claude with tools, and early versions of Devin. It is more flexible than chained calls — the agent adapts its behavior based on what it finds — but much harder to predict, debug, and cost-bound. Use this when the task requires genuinely adaptive reasoning and the space of sub-tasks cannot be fully enumerated in advance.

**Pattern 4: Multi-agent system.** Multiple LLM-driven agents with specialized roles coordinate through an orchestrator or shared state. Each agent does one thing well; the orchestrator decides which agent runs when. This is the pattern underlying CrewAI, LangGraph, and Microsoft's AutoGen. It buys specialization and modularity at the cost of upfront design work. Use this when the task decomposes into genuinely distinct specializations and you need each specialization to be independently debuggable and improvable.

| Name | Control Flow (who decides next step) | Representative Tools/Products | Best Used When | Primary Failure Mode |
| --- | --- | --- | --- | --- |
| Reference | Connects reference to the chapter's main distinction | Example: reference | Connects reference to the chapter's main distinction | Fails when reference is treated as settled instead of checked |
| Pattern | Connects pattern to the chapter's main distinction | Example: pattern | Connects pattern to the chapter's main distinction | Fails when pattern is treated as settled instead of checked |
| Name | Connects name to the chapter's main distinction | Example: name | Connects name to the chapter's main distinction | Fails when name is treated as settled instead of checked |
| Control | Connects control to the chapter's main distinction | Example: control | Connects control to the chapter's main distinction | Fails when control is treated as settled instead of checked |

![A horizontal spectrum diagram — left end labeled "Maximum Predictability / Minimum Flexibility" with Pattern 1 at far left, Pattern 2...](images/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-01.png)
*Figure 0.1 — horizontal spectrum diagram*

In your Chapter 5 pipeline, you already have Pattern 1 if you used an OpenAI or Claude node anywhere — a prompt in, a response out, the pipeline moves on. This chapter is about deciding when and whether to move toward Patterns 2, 3, or 4, and what you are actually buying at each step up.

### 1.2 Multi-agent system architectures

Pattern 4 has its own internal spectrum. Not all multi-agent systems are the same kind of thing.

**Autonomous agents.** Each agent decides its own next step within a goal. The user gives the system a high-level objective; the agents decompose it, plan sub-tasks, execute them, and loop until done. AutoGPT, BabyAGI, and early Devin operate this way. These systems are maximally flexible — they can adapt to goals the designer never anticipated — and maximally unpredictable for the same reason. Production deployments are rare.

**Orchestrated multi-agent systems.** A workflow — a graph or state machine — decides which agent runs when. The agents do specialized work; the orchestrator handles flow control. CrewAI Flows, LangGraph, and Madison's five-layer architecture operate this way. These systems require upfront design work — someone has to specify the graph — but they reward that investment with debuggability, cost-predictability, and consistent user experience.

**Conversational multi-agent systems.** Agents communicate with each other, often in a moderated conversation, until they collectively converge on a result. Microsoft AutoGen pioneered this pattern. It sits between autonomous and orchestrated: more structured than autonomous (there is a moderator), less structured than orchestrated (the conversation can go in directions the designer did not anticipate).

![A 2x2 grid with axes "Agent Decision Autonomy (Low → High)" and "Orchestrator Control (Low → High)" — the three multi-agent...](images/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-02.png)
*Figure 0.2 — 2x2 grid with axes "Agent Decision Autonomy (Low → High)" and...*

Madison lives firmly in the orchestrated quadrant. The five layers — Intelligence, Content, Research, Experience, Performance — are specialized agents; the n8n orchestration layer decides which agent runs when. The user of a Madison-powered tool sees neither the agents nor the orchestrator. They request marketing intelligence; they receive marketing intelligence. The system's internal structure is invisible to them, by design.

### 1.3 The naming convention is load-bearing

When CrewAI requires you to write a `role`, a `goal`, and a `backstory` for each agent, it is not asking for personality flourishes. It is forcing you to specify each agent's job clearly enough that the LLM can operate within it. That specification is the constraint that makes multi-agent systems coherent.

An agent without a clear role wanders. It interprets its task as broadly as possible, calls tools that were not intended for it, produces outputs that satisfy the prompt but fail the downstream requirement. This is not a failure of the LLM — it is a failure of the specification. The LLM does what it was told. If what it was told was vague, the result is vague.

The naming pattern — *Market Strategy Consultant, Competitive Intelligence Analyst, Customer Persona Analyst* — is not cosmetic. These titles act as activation prompts. The LLM has training data that associates "Competitive Intelligence Analyst" with specific behaviors: sourcing claims, noting uncertainty, producing structured comparisons. The role primes that behavior. The goal and backstory narrow it further. Together they form a specification that is far more reliable than an equivalent system-prompt paragraph, because the LLM recognizes the professional frame and applies it consistently.

This is one of the few cases where naming something correctly actually changes how it performs.

<!-- → INFOGRAPHIC: A funnel diagram — wide at the top labeled "LLM's Full Behavior Space," narrowing through three labeled bands: (1) Role: activates domain associations from training data; (2) Goal: encodes the task and constraints; (3) Backstory: resolves ambiguous edge cases. At the narrow bottom: "Agent's actual operating range." Student should see each component as doing successive narrowing work, not as interchangeable labels. A concrete before/after example at the side: vague spec ("Write content") vs. specific spec (role + goal + backstory) and the observable behavioral difference. -->

---

## Part II — Why Architecture Is the Brand Decision

### 2.1 The same capability, felt differently

I am going to revisit a claim from Chapter 3 because it lands hardest here. When you choose between an autonomous agent and an orchestrated multi-agent system, you are not making a purely technical decision. You are choosing what your product feels like. That feeling is the brand experience. The architectural choice and the archetype choice are not independent.

Consider two products built on identical underlying capability — the same model, the same data, the same general task (research assistance for marketing managers):

**Architecture A — autonomous.** The user types a question. The agent decides what to search, reads what it finds, decides what to read next, and produces a report. The agent's reasoning trace is visible — the user watches it work, sees what it decided to look at, sees why it concluded what it concluded.

**Architecture B — orchestrated.** The user fills out a structured brief: audience, topic, depth, deadline. A workflow runs five specialized agents in sequence — Search, Filter, Read, Synthesize, Edit — each with a defined input and output. The user does not see the agents working. They see a status indicator and, eventually, a finished report.

Same LLM. Same task. Wildly different brand experiences.

Architecture A's brand is *transparency*. The user feels like they are working alongside an AI that is figuring things out in their presence. When it works well, this feels collaborative and alive. When it fails — when the agent loops, gets confused, or returns something obviously wrong — the failure is equally visible. The user watches the brand fail in front of them.

Architecture B's brand is *competence*. The user gives the system a task and trusts it will deliver. When it works well, this feels professional and frictionless. When it fails, the failure is opaque — a missing report, an error message, no visible path to understanding what went wrong. The user does not watch the brand fail; they see only that it failed.

![Side-by-side comparison of the two architectures as user experience flows — Architecture A: user → visible agent reasoning trace →...](images/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-03.png)
*Figure 0.3 — Side-by-side comparison of the two architectures as user experience flows*

Neither architecture is universally correct. A research-collaboration tool benefits from Architecture A — the user wants to be in the loop, to redirect the agent, to feel the collaboration happening. An enterprise reporting tool benefits from Architecture B — the user wants a deliverable, not a process. The choice is the brand decision.

### 2.2 Mapping architecture to archetype

Recall Chapter 3's central claim: an archetype is a consistency-enforcement device. Every downstream decision gets checked against it.

Here is the check for this chapter: *Does my architecture express my archetype?*

A Sage brand builds tools that are authoritative and trustworthy. The Sage's shadow is dogmatism — the overconfident system that will not admit what it does not know. A Sage tool should probably favor Architecture B (orchestrated, reliable delivery) with explicit "I cannot verify" guards written into each agent's specification. The failure mode to watch for: a Sage tool that produces wrong answers with high confidence. That is the archetype's shadow in code.

A Creator brand builds tools that amplify originality. The Creator's shadow is perfectionism — the system that gets so invested in its own process that it forgets the user's need. A Creator tool might genuinely benefit from Architecture A (transparent reasoning, collaborative) if the user is a creative professional who wants to direct the AI's exploration. The failure mode to watch for: a Creator tool whose visible process is more interesting than its output.

An Explorer brand builds tools for discovery and autonomy. The Explorer's shadow is aimlessness — no destination, no coherent result. An Explorer tool is a high-risk candidate for Architecture A: the autonomy feels on-brand, but the shadow failure (the agent that explores forever and delivers nothing) is the Explorer's shadow in literal form. AutoGPT was, implicitly, an Explorer brand with an unmanaged shadow.

This is not a complete mapping — there are twelve archetypes and many possible architectures. The principle is: before you choose your AI-intelligence pattern, check it against your archetype's shadow. The failure mode most likely to destroy your brand is the one that looks most like your archetype's most likely breakdown.

| Archetype | Recommended Architecture Tendency | Shadow Expressed as AI Failure Mode | What to Watch For in Production |
| --- | --- | --- | --- |
| Partial | Use partial as the decision guide | Fails when partial is treated as settled instead of checked | Example: partial |
| Archetype | Use archetype as the decision guide | Fails when archetype is treated as settled instead of checked | Example: archetype |
| Architecture | Use architecture as the decision guide | Fails when architecture is treated as settled instead of checked | Example: architecture |
| Mapping | Use mapping as the decision guide | Fails when mapping is treated as settled instead of checked | Example: mapping |

### 2.3 The Cursor/Devin distinction, restated

In Chapter 2, I introduced the Cursor/Devin distinction as the central product-design question for AI tools: *do you augment the human, or do you replace the human at a specific task?*

The same distinction maps cleanly onto the autonomy/orchestration spectrum.

Cursor augments. The developer is in the loop. The IDE suggests; the developer accepts, rejects, or modifies. The control loop is tight. When Cursor produces bad code, the developer sees it immediately and corrects it. The failure surface is small and the cost of failure is low.

Devin automates. The developer hands a task to the system and waits for the result. The control loop is loose. When Devin produces bad code — or bad tests, or a bad approach to the problem — the failure may be discovered late, after significant downstream work has been done on a bad foundation. The failure surface is large and the cost of failure can be high.

This is not an argument against Devin-style automation. It is an argument for knowing which mode you are building. A tool that augments should be architected for tight feedback loops — the AI's outputs should be visible to the user at each step, and the user should be able to redirect at any point. A tool that automates should be architected for reliability — every step should be validated before the next step runs, and the system should fail loudly and locally when something goes wrong.

The autonomy/orchestration choice is the implementation of this distinction at the architectural level.

---

## Part III — What Goes Wrong in the Autonomous Quadrant

### 3.1 Three failure modes, with mechanism

The 2023 AutoGPT wave gave the AI community a large and public dataset of autonomous-agent failure. The failures were not random. They cluster into three patterns, each with a specific mechanism.

**Failure Mode 1: Compounding error.** An autonomous agent's step N is conditioned on step N−1. If step N−1 was wrong — if the agent retrieved the wrong information, made a false inference, or misunderstood the task — then step N is built on a false foundation. The agent has no mechanism to notice this unless it explicitly checks its own work, and most autonomous agents do not check their own work by default. They check whether a step *completed*, not whether it *was correct*.

Errors compound geometrically. A 10% error rate at each step means that after ten steps, the probability of an error-free chain is 0.9^10 ≈ 35%. After twenty steps, it is about 12%. An agent that takes forty steps to complete a task — well within the AutoGPT range — has approximately a 1.5% chance of producing a fully correct result, assuming the per-step error rate is a modest 10%.

This is not a failure of the underlying model. It is a failure of the architecture. A chained or orchestrated system can insert validation steps between each LLM call, checking that the output meets a structural requirement before passing it to the next step. An autonomous agent, by definition, does not have a higher-level system performing that check — the agent's own judgment is both the executor and the auditor.

<!-- → CHART: A line chart showing compounding error probability — x-axis: number of agent steps (0 to 40); y-axis: probability of error-free output (0% to 100%). Two lines: one for 10% per-step error rate (0.9^n), one for 5% per-step error rate (0.95^n). Key values annotated: at 10 steps (35% / 60%), at 20 steps (12% / 36%), at 40 steps (1.5% / 13%). Student should see that even modest per-step error rates produce near-certain failure at the step counts autonomous agents routinely reach. -->

**Failure Mode 2: Cost runaway.** Each step in an autonomous agent calls a model. Each call costs money. An agent without a hard step ceiling can make arbitrarily many calls in pursuit of a goal it cannot reach or cannot recognize as reached. The 2023 AutoGPT stories — $80 sessions delivering nothing, $200 sessions delivering a list of tangentially related notes — are the canonical examples. The mechanism is simple: the agent has no budget constraint, and it has no mechanism to recognize that it is not converging on a useful result.

Production systems require three controls that the early autonomous frameworks did not install by default: a maximum step count, a per-execution cost ceiling, and a circuit breaker that halts the agent if it has called the same tool with the same inputs more than N times. These are not sophisticated engineering — they are basic hygiene. Their absence in early autonomous-agent frameworks was an architectural choice, not an oversight. The frameworks were optimized for capability demonstration, not production reliability.

**Failure Mode 3: Trust collapse on visible failure.** This is the brand failure that the technical failure modes enable. A user who watches an autonomous agent loop for forty minutes and produce nothing has not merely experienced a technical failure. They have watched the brand fail in real time, in front of them, with their money on the meter. That experience is not neutral. It activates the specific betrayal that occurs when a promise of autonomy is revealed as incapacity.

Research on user trust in automation systems consistently shows that visible failure is more damaging to long-term trust than opaque failure, particularly when the user has been told to trust the system. Architecture A's transparency is a high-trust deposit on a non-fungible asset. The 2023 AutoGPT failure wave did not just hurt AutoGPT — it made users cautious about autonomous agents as a category. The failure was distributed across the brand landscape of every product that used the word "autonomous."

![Three panels showing each failure mode as a visual metaphor — (1) Compounding error: a chain of dominoes, each slightly larger than the...](images/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-04.png)
*Figure 0.4 — Three panels showing each failure mode as a visual metaphor*

### 3.2 The orchestrated counterpart: what it trades

The orchestrated-multi-agent quadrant does not escape failure. It trades the autonomous failure modes for a different set.

**Rigidity.** The system can only do what the orchestrator was told it can do. A user request that does not fit any pre-defined flow is an awkward edge case — the system either ignores it, routes it to the wrong agent, or surfaces a confusing error. The orchestrator is a committed design; changing it requires re-engineering the graph.

**Hidden failures.** When something goes wrong in an orchestrated system, the user does not see why. A report that arrives late, a summary that missed key information, an output that was confidently wrong — the user experiences the failure as a black-box event. Debugging requires access to logs the user does not have. The developer who shipped the tool needs to maintain visibility into the intermediate steps — not the user, but someone.

**Specification cost.** Each agent in an orchestrated system must be designed: named, role-defined, goal-specified, tooled, and anti-hallucination-guarded. This is upfront work that autonomous agents skip entirely. It is the price of predictability. It is also the work that makes the system improvable — a specific agent producing bad output is a specific thing to fix, rather than a diffuse tendency of a self-directing system to wander.

The trade-off is real. There is no architecture that wins on every dimension. The disciplined engineer chooses where on the spectrum the product should sit and designs each failure mode *on purpose*, not as a surprise.

| Autonomous Agents | Orchestrated Multi-Agent | Chained Calls |
| --- | --- | --- |
| Trade | Connects trade to the chapter's main distinction | Connects trade to the chapter's main distinction |
| Off | Connects off to the chapter's main distinction | Connects off to the chapter's main distinction |
| Comparison | Connects comparison to the chapter's main distinction | Connects comparison to the chapter's main distinction |
| Evaluation | Connects evaluation to the chapter's main distinction | Connects evaluation to the chapter's main distinction |

### 3.3 Worked case: Madison's MarketMind agents

Open `pantry/madison/MarketMind/Code/agents.py`. The file contains a class called `MarketResearchAgents` with methods like `strategy_consultant()`, `competitor_analyst()`, and `customer_persona_analyst()`. Each method returns a CrewAI `Agent` object. Here is the `competitor_analyst`:

```python
def competitor_analyst(self):
 return Agent(
 role="Competitive Intelligence Analyst",
 goal=(
 "Find and summarize competitor info cautiously. Return structured JSON. "
 "If you cannot verify a data point, set it null and explain limitations."
 ),
 backstory="Expert in competitive intelligence. Prefers evidence and transparency over guessing.",
 tools=self._tools(["search", "scrape", "fallback"]),
 allow_delegation=False,
 verbose=False,
 )
```

Eight lines. Three things are happening that are worth naming precisely.

**The `goal` contains a discipline, not just a task.** "Set it null and explain limitations" is an anti-hallucination instruction built directly into the agent's specification. The Madison authors knew that agents fabricate when pushed toward uncertain territory; they wrote the constraint into the goal rather than hoping the model would self-impose it. This is the right instinct. Anti-hallucination guards placed inside the prompt are more reliable than anti-hallucination guards placed in a separate validation step, because the agent applies them before generating the output rather than after.

**The `backstory` is a personality and a brand commitment simultaneously.** "Prefers evidence and transparency over guessing" tells the LLM how to resolve ambiguous situations — and tells any future developer reading this code what kind of intelligence Madison promises its users. The backstory is documentation as much as it is a prompt. If this agent starts producing overconfident outputs, the backstory is the first place to look: either the framing drifted, or the model changed, or both.

**`allow_delegation=False` is the orchestration commitment in code.** This agent cannot hand off to other agents. It does its job and returns. The orchestration layer — not the agent — decides what happens next. This single parameter is the architectural choice that separates Madison's approach from AutoGPT's. AutoGPT agents could spawn sub-agents, set new goals, redirect their own work. Madison agents cannot. They execute and report. Predictability is the result.

![A side-by-side code annotation of the competitoranalyst agent — left column shows the raw code, right column shows annotations for each...](images/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-05.png)
*Figure 0.5 — side-by-side code annotation of the competitoranalyst agent*

When this architecture fails, it fails locally. One agent's output is wrong — a structured JSON field is null, a competitor's market share is labeled "unverifiable" — and the developer can trace the failure to a specific agent, a specific tool call, a specific input. Compare to AutoGPT's failure mode: the agent wandered, the error is distributed across forty steps, the debugging surface is the entire execution trace. Local failure is the architectural reward for orchestration's specification cost.

---

## Part IV — Writing Agent Specifications

### 4.1 The four components

An agent specification is the contract between the designer and the LLM. It answers four questions:

1. **Role:** Who is this agent? What professional identity does it occupy?
2. **Goal:** What is this agent trying to accomplish, including what constraints does it operate under?
3. **Backstory:** What are this agent's instincts and preferences when resolving ambiguity?
4. **Tools:** What can this agent do? What is it not allowed to do?

Each component does different work. The role activates the LLM's training-data associations — "Competitive Intelligence Analyst" primes behaviors the model has learned from competitive-intelligence writing. The goal narrows the task and encodes the constraints. The backstory is the tie-breaker for edge cases the goal did not anticipate. The tools define the boundary between what this agent does and what a different agent or a different system does.

A complete specification uses all four. An incomplete specification — a goal without a backstory, a role without constraints — will produce an agent that behaves well on easy inputs and strangely on hard ones.

### 4.2 The anti-hallucination layer

Every agent specification needs an anti-hallucination layer. This is not optional. LLMs hallucinate under uncertainty — they produce confident-sounding text in response to prompts that cannot be reliably answered. The anti-hallucination layer is the set of instructions that prevents the LLM from filling uncertainty with fabrication.

Three patterns, from weakest to strongest:

**Pattern 1: Permission to abstain.** Add to the goal: *"If you cannot verify a claim with the information provided or your search results, say 'I cannot verify this' rather than guessing."* This gives the LLM explicit permission to produce an incomplete answer, which is counterintuitive — most prompts implicitly reward completeness — but necessary for factual agents.

**Pattern 2: Structured output with null fields.** Require JSON output with a defined schema. Fields that cannot be confidently populated are set to `null` with an explanatory `note` field. This makes incompleteness explicit and machine-readable. Downstream steps can check for null fields and handle them — escalate to a human, trigger a different search, flag the output for review — rather than passing fabricated data further down the chain.

**Pattern 3: Confidence labeling.** Require the agent to label each claim with a confidence level: `verified`, `inferred`, or `unverifiable`. This is more work than null fields but more informative — the downstream system (or user) knows not just that a field was uncertain, but *how* uncertain, and *why*.

![Three versions of the same agent output — Pattern 1 (abstain): a paragraph that says "I cannot verify X"; Pattern 2 (null fields): a...](images/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-06.png)
*Figure 0.6 — Three versions of the same agent output*

For most student projects, Pattern 2 is the right starting point. It is more rigorous than Pattern 1 and less complex to implement than Pattern 3. The Madison `competitor_analyst` uses a variant of Pattern 2: structured JSON with null fields for unverifiable data.

### 4.3 A worked specification: research assistant for a Sage tool

Suppose you are building a research assistant for a newsletter about climate technology. Your archetype is Sage — the tool promises authoritative, evidence-backed summaries of recent research. The archetype's shadow is dogmatism: the tool that produces wrong answers with high confidence.

Here is a complete agent specification for the core research agent:

```python
Agent(
 role="Climate Technology Research Analyst",
 goal=(
 "Summarize peer-reviewed research and credible industry sources on the topic provided. "
 "Return a structured JSON with fields: summary (2-3 sentences), key_findings (list of 3-5), "
 "sources (list of URLs or DOIs), confidence (verified | inferred | unverifiable for each finding). "
 "Do not include findings you cannot attribute to a specific source. "
 "If a topic is outside your search results, say so — do not infer from general knowledge."
 ),
 backstory=(
 "A researcher trained in evidence-based communication. Prefers precision over comprehensiveness. "
 "When forced to choose between an interesting claim and a verifiable one, always chooses verifiable. "
 "Never rounds up."
 ),
 tools=["search", "fetch_url", "extract_text"],
 allow_delegation=False,
)
```

Walk through each component:

**Role.** "Climate Technology Research Analyst" activates climate-specific knowledge associations in the LLM, and signals to the LLM that it is operating in an evidence-based professional context.

**Goal.** Specifies the output schema (structured JSON), the required fields, the confidence-labeling requirement, and two explicit anti-hallucination instructions: do not include unattributed findings, and do not infer from general knowledge when search results are empty. Both instructions address the Sage shadow directly — they prevent the agent from producing high-confidence wrong answers.

**Backstory.** "Never rounds up" is the key phrase. It tells the LLM that in a conflict between a complete-looking answer and an honest one, honesty wins. This is the backstory doing its tie-breaker work — the goal cannot enumerate every edge case, so the backstory provides the principle for resolving them.

**Tools.** Three tools: search, URL fetching, text extraction. No tool for writing or synthesis — this agent's job is research, not reporting. Synthesis is a different agent's job. The constrained tool list is part of the specialization.

This specification will not eliminate hallucination. No specification does. But it will surface uncertainty visibly, in structured form, so that downstream steps can handle it rather than propagate it.

| Concept | What it means | How to use it |
| --- | --- | --- |
| Blank | Connects blank to the chapter's main distinction | Connects blank to the chapter's main distinction |
| Agent | Connects agent to the chapter's main distinction | Connects agent to the chapter's main distinction |
| Specification | Connects specification to the chapter's main distinction | Connects specification to the chapter's main distinction |
| Template | Connects template to the chapter's main distinction | Connects template to the chapter's main distinction |

---

## Part V — Building the AI Layer in Your Pipeline

### 5.1 The integration decision

Before writing any code or configuring any n8n node, make the architectural decision explicitly. Write it down. One of the following:

*"This pipeline uses a single LLM call to [task], because the task can be fully specified in one prompt and the output can be validated against [criteria]."*

*"This pipeline uses chained calls to [task], because the task has [N] natural sequential sub-steps and I need to validate the output at step [K] before proceeding."*

*"This pipeline uses a tool-using agent to [task], because the task requires adaptive reasoning and I cannot enumerate the sub-steps in advance. Step ceiling: [N]. Cost ceiling: [dollar amount] per execution."*

*"This pipeline uses a multi-agent system with [N] agents to [task], because the task decomposes into [role 1], [role 2], and [role 3] and I need each to be independently debuggable."*

The form of the decision statement matters less than the act of making it. A student who has written down their architectural choice before building has something to evaluate against when the system behaves unexpectedly. A student who drifted into an architecture has nothing to evaluate against — they can only observe that it did not work.

<!-- → INFOGRAPHIC: A "decision statement → consequence" map showing all four architectural decision templates side by side — for each: the fill-in-the-blank statement form, and two downstream consequences (what it enables in Chapter 7's interface design, and what failure mode it requires a mitigation for). Student should see that the decision statement is not a formality — it is the contract that determines everything else about the build sequence. -->

### 5.2 Concrete build tasks

With the architectural decision made, the build sequence:

**Task 1: Pick your pattern.** Single call, chained, tool-using agent, or multi-agent. The right pick is usually the simplest one that solves the problem. Resist the pull toward complexity. A research-summary tool that needs to extract facts and write a paragraph needs Pattern 2, not Pattern 4. A content-generation tool that needs to ideate, draft, and critique may need Pattern 4. A chatbot with access to a knowledge base may need Pattern 3. When in doubt, start with the simpler pattern and add complexity only when you hit its ceiling.

**Task 2: Write the specification.** If you are using Pattern 3 or 4, write the full role/goal/backstory/tools for each agent or the single agent. Write anti-hallucination guards into the goal, not as a separate step. If you are using Pattern 1 or 2, write the system prompt for each LLM call. Apply the same discipline — define the output schema, include explicit uncertainty instructions, specify what the LLM should do when it does not know.

**Task 3: Wire the AI step into n8n.** Add an OpenAI, Claude, or HTTP node at the appropriate point in your Chapter 5 workflow. Pass the required context (not everything — the context window is not a dumping ground; pass only what this step needs). Connect the output to a validation step before the next downstream action.

**Task 4: Add anti-hallucination guards.** Minimum viable guard: require structured JSON output with a defined schema and a mechanism for null fields. Better: add a validation node after each LLM call that checks the output schema and routes to an error handler if the schema is invalid. Best: add confidence labeling and a downstream step that handles low-confidence outputs differently than high-confidence ones.

**Task 5: Set step and cost ceilings.** For Pattern 3 and 4: define the maximum number of LLM calls per pipeline execution and add a counter. Define the maximum dollar cost per execution and add a circuit breaker. These are not aspirational limits — they are hard stops. An agent that exceeds the step ceiling should fail loudly and visibly, not silently escalate its own permissions.

**Task 6: Stress-test for your failure mode.** Identify the failure mode most likely given your architecture (compounding error for chained patterns, cost runaway for autonomous, rigidity for orchestrated, hidden failure for opaque systems). Design a test input that triggers it. Run the test. Observe the failure. Then add one mitigation and run the test again.

![A visual of the n8n workflow after the AI layer is added — showing the Chapter 5 pipeline with an AI step inserted, a validation node...](images/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-07.png)
*Figure 0.7 — visual of the n8n workflow after the AI layer is added*

### 5.3 The reference: Madison's Intelligence Agent workflow

The n8n workflow in `pantry/madison/Intelligence-Agent/n8n_workflow.json` is the reference implementation for how AI nodes integrate into an orchestrated pipeline. Examine it before building your own.

Notice two things:

**The AI calls are surrounded by data-handling steps.** A fetch step prepares the input. The AI call processes it. A format step normalizes the output. A write step stores it. The AI node is not at the beginning of the workflow and not at the end — it is embedded in a sequence of deterministic steps that prepare its input and validate its output. This is the pattern. An AI step floating in isolation, taking raw input and producing unvalidated output, is a liability.

**Each AI step has a defined output format.** Madison's Intelligence Agent does not accept free-text LLM output and pass it downstream. It requires structured output from each AI step and validates the structure before proceeding. When the structure validation fails — when the LLM produced a response that does not match the expected schema — the workflow routes to an error handler, not to the next processing step. The error is surfaced, not propagated.

These two patterns — wrapping AI steps in deterministic neighbors, and validating AI output before downstream use — are the minimum viable discipline for production AI pipelines. They apply regardless of which AI-intelligence pattern you chose.

---

## Summary

Here is what you can now do that you could not at the start of this chapter.

You can look at any AI system — a chatbot, a research assistant, an autonomous coding agent — and name its pattern: single call, chained, tool-using, or multi-agent. You can identify where it sits on the autonomy/orchestration spectrum and explain what it traded to get there.

You can write a complete agent specification — role, goal, backstory, tools — that constrains an LLM to a defined scope and builds anti-hallucination guards into the specification itself, not as afterthoughts. You can choose the right anti-hallucination pattern for your use case: abstention, null fields, or confidence labeling.

You can explain, using Chapter 3's vocabulary, why the autonomy/orchestration choice is a brand decision. You can run the check: does your architecture express your archetype, or does it express your archetype's shadow?

You can diagnose the three failure modes of autonomous agents — compounding error, cost runaway, and trust collapse — and identify which failure mode is most likely for your specific architecture. You can design a mitigation before the failure happens rather than after.

**The one idea that matters most:** Adding AI to a pipeline is not about the model. It is about where in the workflow the AI decides and where a deterministic system decides. That boundary is the architectural choice that determines reliability, debuggability, cost-predictability, and user experience simultaneously. It is also a brand commitment.

**The common mistake:** Reaching for Pattern 4 when Pattern 2 would suffice. Multi-agent systems are more impressive to demo and more expensive to build, debug, and maintain. Most student projects that fail in this chapter fail because they over-architected the AI layer. When the output of a simpler pattern would solve the user's problem, the simpler pattern is correct.

**The Feynman test:** Sit down with a friend who has used ChatGPT but never thought about AI architecture. Explain, using the autonomy/orchestration spectrum, why AutoGPT cost $80 and delivered nothing, and why Cursor works reliably. If you can do that in under three minutes, you have the chapter.

---

## A Note on What Is Changing

I should be honest about the chapter's expiration date.

The failure modes I described in Part III are accurate as of this writing. Autonomous agents in 2024 do compound errors, do run over budget, do collapse user trust on visible failure. The evidence for orchestration's superiority on production-reliability metrics is strong.

But the autonomous-agent quadrant is improving. Modern frameworks — AgentQ, ReAct with reflection, AutoGPT 0.5 — include better memory, better goal-tracking, and better self-correction. The per-step error rates I described are coming down. The cost-runaway failure mode is increasingly handled by default in framework tooling, not left to the developer.

By 2027 or 2028, the failure modes I described may be substantially mitigated. If they are, the architecture choice will shift. Tools that today benefit from orchestration may benefit from autonomy in the future. The current evidence still supports orchestration for production reliability. When the benchmark changes — when autonomous agents outperform orchestrated ones on uptime, cost predictability, and time-to-recovery — the chapter's recommendation changes with it.

**What would change my mind:** A benchmark showing autonomous agents outperforming orchestrated multi-agent systems on production-reliability metrics. The current evidence cuts the other way. I would update on the evidence.

**Still puzzling:** The exact set of tasks for which autonomous agents are *already* better than orchestrated ones. The honest answer is "creative exploration tasks where the user does not know the right next step in advance" — but that domain is hard to specify precisely, and most students who try to identify it in their own projects guess wrong about whether their use case really needs autonomy. I do not yet have a clean teaching rule for distinguishing the two, and I would not trust anyone who claims they do.

---

## Connections Forward

Chapter 7 is about interface design — the visible layer that users interact with. Everything you built in Chapters 5 and 6 is infrastructure. Chapter 7 is what the user sees.

The connection is direct: the architecture you chose in this chapter determines what interface elements are available to you. An orchestrated system with opaque intermediate steps needs a different interface than a tool-using agent with a visible reasoning trace. A pipeline with structured JSON output can power a formatted dashboard; a pipeline with free-text output cannot.

Before Chapter 7, carry one question forward: *What does my user need to see, and what does my architecture currently make visible?* The gap between those two is your interface design problem.

---

## Exercises

### Warm-Up

**W1. Pattern Identification**
For each of the following systems, name the AI-intelligence pattern (single call, chained calls, tool-using agent, multi-agent) and give one piece of evidence for your answer:

- A grammar checker that takes a paragraph and returns a corrected version.
- A travel-planning assistant that asks clarifying questions, searches flights, reads hotel reviews, and produces an itinerary.
- A content pipeline that extracts topics from a blog post, generates three headline options for each topic, scores them for clarity, and selects the top headline.
- A coding assistant that receives a bug report, reads the relevant source files, runs the tests, proposes a fix, and opens a pull request.

*Tests Objective 1.*
*Difficulty: Low.*

**W2. Failure Mode Matching**
For each scenario below, name the failure mode (compounding error, cost runaway, or trust collapse) and explain the mechanism by which the failure occurred:

- A user watches an autonomous agent research a topic for ninety minutes, spending $140, without producing a usable output. The agent's final response confidently summarizes research it fabricated because it could not find primary sources.
- A user sees an autonomous agent correctly identify three competitors, then misattribute a product feature from Competitor A to Competitor B. The agent's subsequent steps treat the misattribution as established fact and build a market analysis on top of it.
- A user's first session with a new autonomous research tool results in a wrong answer delivered confidently. The user does not use the tool again.

*Tests Objective 5.*
*Difficulty: Low.*

**W3. Specification Review**
Read the following incomplete agent specification and identify what is missing. Explain why each missing element matters.

```python
Agent(
 role="Email Writer",
 goal="Write a professional email based on the information provided.",
 tools=["send_email"],
)
```

*Tests Objective 3.*
*Difficulty: Low-Medium.*

---

### Application

**A1. Agent Specification — Full Build**
Write a complete agent specification for one agent in your Chapter 5 pipeline. Include: role, goal (with at least one anti-hallucination instruction), backstory (with at least one tie-breaker principle), tools (with a rationale for each tool included and each tool excluded), and `allow_delegation` setting with justification. Follow the four-component format from Part IV.

*Tests Objective 3.*
*Difficulty: Medium.*

**A2. Architecture-Archetype Alignment Check**
For your tool's committed archetype (from Chapter 3), write a one-page analysis that answers three questions:

- Which AI-intelligence pattern does your archetype recommend, and why?
- What is your archetype's shadow, expressed as an AI-system failure mode?
- Is your current architectural choice in alignment with your archetype, or is it expressing the shadow? What would you change?

*Tests Objectives 2 and 4.*
*Difficulty: Medium.*

**A3. Anti-Hallucination Guard Comparison**
Take one factual research task relevant to your tool (e.g., "summarize competitor pricing for [product category]"). Write three versions of the agent goal — one using Pattern 1 (abstention), one using Pattern 2 (null fields), and one using Pattern 3 (confidence labeling). Run each version against the same test input using a real LLM. Compare the outputs: which pattern produced the most useful response when the information was available? Which produced the most useful response when the information was not available?

*Tests Objectives 3 and 5.*
*Difficulty: Medium-High.*

**A4. Pipeline Integration**
Add an AI intelligence layer to your Chapter 5 n8n pipeline. Use the build sequence from Part V: pick a pattern, write the specification, wire the AI step into the workflow, add anti-hallucination guards, and set step and cost ceilings. Document your architectural decision statement (from §5.1) in your project README. Run the pipeline on three inputs — one easy, one medium, one deliberately weird — and record what happened.

*Tests Objective 6.*
*Difficulty: Medium-High.*

---

### Synthesis

**S1. Failure Mode Design**
Choose the AI-intelligence pattern you built in A4. Identify its most likely failure mode. Design a test input that will trigger that failure mode (not a random edge case — a targeted probe of the weakness you predicted). Run the test, observe the failure, add one mitigation, and run the test again. Write a one-page post-mortem: what failed, why, what the mitigation does, and whether it worked.

*Tests Objective 5.*
*Difficulty: High.*

**S2. Orchestration Decision Memo**
Imagine you are the technical co-founder of the tool you are building. A potential investor asks: "Why did you choose [your architecture] instead of [the alternative]?" Write a 400-word memo that answers this question honestly — not as a pitch, but as a technical and brand argument. The memo should name the trade-offs you accepted, the failure modes you designed for, and how the architectural choice expresses your archetype. Use the vocabulary from Parts II and III.

*Tests Objectives 2, 4, and 5.*
*Difficulty: High.*

**S3. Cross-Chapter Architecture Audit**
Review the five AI-intelligence architectures described in Part I (single call, chained, tool-using, multi-agent — orchestrated, autonomous, conversational). For each: name one real product that uses it, identify the product's archetype, and assess whether the architecture matches the archetype. Are there any mismatches? If so, is the mismatch causing the product's most visible failure mode?

*Tests Objectives 1, 2, and 4.*
*Difficulty: High.*

---

### Challenge

**C1. Autonomous Agent Rehabilitation**
The chapter argues that orchestrated multi-agent systems are currently superior to autonomous agents on production-reliability metrics. Identify a task domain where you believe this argument is weakest — where autonomous agents are, *right now*, the better architectural choice. Make the strongest case you can for that domain. Your argument should include: why predictability matters less for this task than for others, how the three failure modes are mitigated by the task's structure, and what evidence would confirm or disconfirm your claim.

*Tests Objectives 1, 2, and 5, and challenges the chapter's stated preference.*
*Difficulty: Very High.*

**C2. The 2027 Architecture**
The chapter's "What Is Changing" section predicts that autonomous-agent failure modes may be substantially mitigated by 2027. If that prediction is correct, what changes about the architecture-as-brand-decision argument from Part II? Does the choice between autonomous and orchestrated systems become less consequential as a brand expression, or does it remain consequential for different reasons? Write a 500-word analysis of how the autonomy/orchestration trade-off changes if autonomous agents achieve parity with orchestrated systems on production-reliability metrics.

*Tests all objectives and the chapter's own temporal claims.*
*Difficulty: Very High.*

---

## Stress-Test Your Agent

Before Chapter 7:

1. Run your AI-intelligence layer end-to-end on three different inputs — one easy, one medium, one deliberately weird or adversarial.
2. Observe the failure mode. Did it hallucinate? Loop? Miss a step? Run over budget? Refuse a valid request? Produce wrong output with high confidence?
3. Add one mitigation for the failure you observed. Document the mitigation in your project README. Name the failure mode it addresses and the mechanism by which it addresses it.
4. Run the same three inputs again. Observe whether the mitigation worked. If it did not, document why and what a second mitigation attempt would require.

Bring the mitigated workflow to Chapter 7, where the interface design layer goes on top of what you have built.

---

## LLM Exercise — Self-as-Project

**Project:** Self-as-Project (will spawn three sub-Projects)
**What you're building this chapter:** A working **Career Search Assistant** — three specialized Claude Projects with custom instructions that automate the most repetitive parts of your search.
**Tool:** Claude Projects (a NEW one for each Assistant) + Claude chat for testing.

**The Prompt:**

```
Design an AI assistant system to support my job search. Use Chapter 6's autonomy/orchestration framework.

I want THREE specialized assistants, not one mega-assistant. Each is a Claude Project with its own custom instructions. The orchestration is me — I send the right work to the right Project.

For each of the three, write:
1. The Project name
2. The Custom Instructions (system prompt) — paste-ready, ready to drop into Claude's "Custom Instructions" field
3. The kind of work I send it
4. Three example messages I might send it
5. The anti-hallucination guards built into its instructions

The three assistants:

ASSISTANT 1 — Application Drafter. Takes a job description + my Career PRD + the role description and produces a tailored resume bullet rewrite, a cover note, and a LinkedIn outreach message to anyone I know at the company.

ASSISTANT 2 — Interview Researcher. Takes a company name and produces: their recent funding/news, their published technical posts, their CEO's last 3 interviews, the team I'd join, intelligent questions I should ask. Forces "I cannot verify" labels on anything not in its training data and not provided by me.

ASSISTANT 3 — Reflection Coach. After every interview or networking conversation, I drop in my notes. The Coach asks me 3 sharp questions about what happened, what I noticed, what I would change next time. Forces specificity. No "great job!" affirmations.

For each assistant, the custom instructions should:
- Reference my archetype (so the voice stays consistent)
- Use my Career PRD as the filter for in-scope/out-of-scope work
- Include explicit instructions about NOT inventing things
- Include explicit instructions about pushing back on weak input

Output a Markdown document called "Career Search Assistants — [my name]" containing all three Project names, their full custom instructions ready to paste, the example messages, and a one-paragraph "how I orchestrate them" section explaining the workflow between them.
```

**What this produces:** Three deployed Claude Projects (after you paste the custom instructions in) plus the orchestration logic. This is the most immediately useful artifact of the semester for an active job search.

**How to adapt:** Add or remove assistants based on your career stage. A senior engineer might want a Negotiation Assistant; a career-changer might want a Translation Assistant. For ChatGPT or Gemini, replace "Claude Project" with "Custom GPT" or "Gem."

**Preview of next chapter:** Chapter 7 audits all the *interfaces* between you and the world — LinkedIn, GitHub, email signature, resume PDF — for alignment with what you're actually offering.

---

*Tags: multi-agent · CrewAI · AutoGPT · agent-architecture · orchestrated-vs-autonomous · madison-marketmind · production-reliability · INFO-7375*

---

## AI Wayback Machine

The ideas in this chapter didn't appear from nowhere. **Herbert Simon** spent five decades arguing that intelligent action — by humans, by organizations, by machines — is what *bounded rationality* allows under real constraints of attention, time, and computation. His 1969 *The Sciences of the Artificial* is the foundational text on designing systems whose intelligence is distributed across specialized parts that cooperate. The Madison framework's five-agent architecture is in that lineage: no single agent is general-purpose; each is bounded to a competence; their cooperation is the system's intelligence. Simon also predicted, in 1965, that machines would be capable of doing any work a human could do within twenty years — a prediction the field is still arguing about. The chapter's caution — that multiagent does not mean omniagent — is Simon's caution.

![Herbert A. Simon, c. 1970s. AI-generated portrait based on a public domain photograph (Wikimedia Commons).](images/herbert-simon.jpg)
*Herbert A. Simon, c. 1970s. AI-generated portrait based on a public domain photograph.*

**Run this:**

```
Who was Herbert Simon, and how do his concepts of *bounded rationality* and *near-decomposability* connect to the design of multi-agent AI systems where each agent is deliberately specialized rather than general-purpose? Keep it to three paragraphs. End with the single most surprising thing about his career or ideas.
```

→ Search **"Herbert A. Simon"** on Wikipedia after you run this. See what the model got right, got wrong, or left out.

**Now make the prompt better.** Try one of these:

- Ask it to explain *bounded rationality* in plain language, as if you've never read decision theory
- Ask it to compare Simon's near-decomposability argument to the role split across the five Madison agents
- Add a constraint: "Answer as if you're writing the design rationale for why your multi-agent system has five roles instead of one general agent"

What changes? What gets better? What gets worse?

## Prompts

Use these prompts with Claude to generate interactive D3 v7 versions of the
figures in this chapter. Each produces a standalone HTML file you can open
in a browser and modify freely.

**Prerequisites:** Load `brutalist/CLAUDE.md` and `brutalist/DESIGN.md` into
your Claude project context before using these prompts. They define the stack,
naming conventions, color system, and typography the figures use.

---

### Figure 0.1 — horizontal spectrum diagram

Create a standalone D3 v7 HTML figure for "horizontal spectrum diagram". Use a horizontal bar chart with 5 labeled categories with approximate values from 0 to 100. Marks: bars or rectangular panels, direct labels, and concise value labels. Channels: position for sequence or category, length for quantitative emphasis when bars are used, color for the primary highlighted item only, and direct text labels for accessibility. Use a zero baseline for quantitative bars. Include title, desc, role="img", aria-labelledby, ResizeObserver redraw, dark mode CSS variables, and reduced-motion safeguards. Deliver as one HTML file with inline CSS and the D3 7.9.0 CDN.

> Reference implementation: `d3/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-01.html`

---

### Figure 0.2 — 2x2 grid with axes "Agent Decision Autonomy (Low → High)" and...

Create a standalone D3 v7 HTML figure for "2x2 grid with axes "Agent Decision Autonomy (Low → High)" and...". Use a horizontal process diagram with 4 to 5 ordered stages with directed connectors. Marks: rectangular stage nodes and arrow connectors. Channels: position for sequence or category, length for quantitative emphasis when bars are used, color for the primary highlighted item only, and direct text labels for accessibility. Use a zero baseline for quantitative bars. Include title, desc, role="img", aria-labelledby, ResizeObserver redraw, dark mode CSS variables, and reduced-motion safeguards. Deliver as one HTML file with inline CSS and the D3 7.9.0 CDN.

> Reference implementation: `d3/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-02.html`

---

### Figure 0.3 — Side-by-side comparison of the two architectures as user experience flows

Create a standalone D3 v7 HTML figure for "Side-by-side comparison of the two architectures as user experience flows". Use a horizontal process diagram with 4 to 5 ordered stages with directed connectors. Marks: rectangular stage nodes and arrow connectors. Channels: position for sequence or category, length for quantitative emphasis when bars are used, color for the primary highlighted item only, and direct text labels for accessibility. Use a zero baseline for quantitative bars. Include title, desc, role="img", aria-labelledby, ResizeObserver redraw, dark mode CSS variables, and reduced-motion safeguards. Deliver as one HTML file with inline CSS and the D3 7.9.0 CDN.

> Reference implementation: `d3/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-03.html`

---

### Figure 0.4 — Three panels showing each failure mode as a visual metaphor

Create a standalone D3 v7 HTML figure for "Three panels showing each failure mode as a visual metaphor". Use a horizontal process diagram with 4 to 5 ordered stages with directed connectors. Marks: rectangular stage nodes and arrow connectors. Channels: position for sequence or category, length for quantitative emphasis when bars are used, color for the primary highlighted item only, and direct text labels for accessibility. Use a zero baseline for quantitative bars. Include title, desc, role="img", aria-labelledby, ResizeObserver redraw, dark mode CSS variables, and reduced-motion safeguards. Deliver as one HTML file with inline CSS and the D3 7.9.0 CDN.

> Reference implementation: `d3/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-04.html`

---

### Figure 0.5 — side-by-side code annotation of the competitoranalyst agent

Create a standalone D3 v7 HTML figure for "side-by-side code annotation of the competitoranalyst agent". Use a horizontal process diagram with 4 to 5 ordered stages with directed connectors. Marks: rectangular stage nodes and arrow connectors. Channels: position for sequence or category, length for quantitative emphasis when bars are used, color for the primary highlighted item only, and direct text labels for accessibility. Use a zero baseline for quantitative bars. Include title, desc, role="img", aria-labelledby, ResizeObserver redraw, dark mode CSS variables, and reduced-motion safeguards. Deliver as one HTML file with inline CSS and the D3 7.9.0 CDN.

> Reference implementation: `d3/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-05.html`

---

### Figure 0.6 — Three versions of the same agent output

Create a standalone D3 v7 HTML figure for "Three versions of the same agent output". Use a node-link concept map with 5 nodes with 6 to 8 links. Marks: circles, links, and direct labels. Channels: position for sequence or category, length for quantitative emphasis when bars are used, color for the primary highlighted item only, and direct text labels for accessibility. Use a zero baseline for quantitative bars. Include title, desc, role="img", aria-labelledby, ResizeObserver redraw, dark mode CSS variables, and reduced-motion safeguards. Deliver as one HTML file with inline CSS and the D3 7.9.0 CDN.

> Reference implementation: `d3/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-06.html`

---

### Figure 0.7 — visual of the n8n workflow after the AI layer is added

Create a standalone D3 v7 HTML figure for "visual of the n8n workflow after the AI layer is added". Use a horizontal process diagram with 4 to 5 ordered stages with directed connectors. Marks: rectangular stage nodes and arrow connectors. Channels: position for sequence or category, length for quantitative emphasis when bars are used, color for the primary highlighted item only, and direct text labels for accessibility. Use a zero baseline for quantitative bars. Include title, desc, role="img", aria-labelledby, ResizeObserver redraw, dark mode CSS variables, and reduced-motion safeguards. Deliver as one HTML file with inline CSS and the D3 7.9.0 CDN.

> Reference implementation: `d3/branding-and-ai-06-ai-intelligence-and-multiagent-systems-fig-07.html`
