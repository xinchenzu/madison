# Research Notes: Chapter 02 — The Madison Framework

**Source:** TIKTOC.md chapter entry  
**Notes file:** 02-the-madison-framework_notes.md  
**Corresponding chapter:** chapters/branding-and-ai/02-the-madison-framework.md  
**Generated:** 2026-06-06

---

## Chapter summary (from TIKTOC.md)

The reader learns Madison's five agent layers and orchestration layer, distinguishes multiple meanings of "agent," and connects architecture to brand. The chapter adapts the Claude agentic AI discipline: agents act inside boundaries and need supervision.

**Whole task:** Select one Madison layer as the reference architecture for the reader's running project.  
**Assessment:** Two-sentence justification connecting layer, archetype, and user problem.

---

## A. Conceptual foundations

### Agent as bounded role

Madison should define agents as specialized roles in a larger marketing system, not autonomous executives. This matches the Claude agentic principle: useful agents execute delegated work inside scope, approval, and verification boundaries.

**Common misconception:** "Agent" means fully autonomous. Correct it by distinguishing single LLM call, tool-using loop, long-running autonomous system, and specialized role in a larger architecture.

**Worked example:** A Madison Intelligence Agent gathers market signals; it does not decide brand strategy alone.

**Source(s):** `pantry/claude-agentic-ai.md`; ReAct paper https://arxiv.org/abs/2210.03629

### Layered architecture as brand architecture

Madison's Intelligence, Content, Research, Experience, and Performance layers are not just engineering modules. They become product surfaces customers can understand, budget for, and trust. Naming layers makes work inspectable.

**Common misconception:** Architecture is internal plumbing. In agentic products, architecture often becomes the user's trust model.

**Worked example:** A "mega-agent" that does everything is harder to debug and sell than five named roles with inputs and outputs.

**Source(s):** `docs/workflows.md`; `skills/README.md`; n8n docs https://docs.n8n.io/workflows/

### Reason-act-observe loop

ReAct provides a useful mental model for agents that interleave reasoning and tool action. It helps explain why observations from tools must feed back into the next decision and why failure can occur at reasoning, action, or observation.

**Common misconception:** A plan proves understanding. Plans are proposals; observations and verification decide whether the workflow worked.

**Worked example:** News monitor: reason about query, call source/API, observe results, deduplicate, score, verify sample.

**Source(s):** Yao et al., ReAct https://openreview.net/forum?id=WE_vluYUL-X

---

## B. Domain examples and cases

### Case: Madison imported n8n skills

The six converted workflow skills in `skills/n8n-*.md` show how workflow JSON becomes inspectable cards.

### Case: Graph orchestration vs conversation orchestration

n8n represents graph-style orchestration. AutoGen represents conversation-style multi-agent coordination. The chapter can compare predictability and flexibility.

**Sources:** n8n docs https://docs.n8n.io/; AutoGen docs https://microsoft.github.io/autogen/docs/Use-Cases/agent_chat/

### Failure case: The mega-agent

A single agent with every tool and no named output contract fails as product, pedagogy, and governance.

---

## C. Connections and dependencies

**Prerequisites:** Creative Engineer frame.

**Unlocks:** Workflow automation in Chapter 5; AI intelligence in Chapter 6; brand-system layer choices in Chapter 8.

**Adjacent chapter connections:** Chapter 3 turns role/layer choice into archetypal constraint.

---

## D. Current state of the field

**Settled:** Tool-using agents need explicit task, tool, and observation boundaries.

**Contested or emerging:** The best orchestration pattern remains context-dependent. Graph workflows are more auditable; conversational systems can be more flexible but harder to inspect.

**Key references:**
1. Yao et al., ReAct, 2023 — reasoning/action loop.
2. n8n documentation — workflow, node, credential model.
3. Microsoft AutoGen documentation — multi-agent conversation model.
4. Microsoft Agent Framework overview — emerging convergence of agent abstractions and graph workflows.

**Recent developments:** Microsoft Agent Framework combines AutoGen-style abstractions with enterprise workflow and state features, showing that explicit orchestration is becoming more important.

---

## E. Teaching considerations

**Where students get stuck:** They want to pick tools before naming the work role.

**Analogies and framings that work:** "An agent layer is a job description with inputs and outputs."

**Exercises that build the target skill:** Choose one Madison layer; write role, input, output, tool, approval gate, and verification rule.

