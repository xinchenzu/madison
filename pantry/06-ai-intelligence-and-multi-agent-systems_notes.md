# Research Notes: Chapter 06 — AI Intelligence and Multi-Agent Systems

**Source:** TIKTOC.md chapter entry  
**Notes file:** 06-ai-intelligence-and-multi-agent-systems_notes.md  
**Corresponding chapter:** chapters/branding-and-ai/06-ai-intelligence-and-multiagent-systems.md  
**Generated:** 2026-06-06

---

## Chapter summary (from TIKTOC.md)

The reader distinguishes single-call AI, tool-using agents, long-running agents, and specialized sub-agents. The chapter compares graph orchestration and conversational orchestration through reliability, auditability, and brand trust.

**Whole task:** Add or specify one bounded AI-intelligence step in the running project.  
**Assessment:** Agent card with role, tools, inputs, outputs, approval gate, and verification step.

---

## A. Conceptual foundations

### Four meanings of agent

The chapter should separate agent-as-prompt, agent-as-tool-loop, agent-as-autonomous worker, and agent-as-specialized role. Madison primarily uses specialized roles coordinated through workflows.

**Common misconception:** All agents are autonomous. The safer and more teachable model is bounded delegated action.

**Worked example:** A Content Agent drafts three campaign variants from a brand brief; it does not decide brand positioning.

**Source(s):** `pantry/claude-agentic-ai.md`; ReAct paper https://arxiv.org/abs/2210.03629

### Orchestration tradeoffs

Graph-based orchestration makes paths explicit and auditable. Conversation-based multi-agent systems can be flexible but harder to debug. The point is not to declare one universally best; it is to match orchestration to risk, evidence, and user trust.

**Common misconception:** Flexibility is always better. In brand and marketing, predictable review points can be more valuable than open-ended autonomy.

**Worked example:** Use n8n for scheduled survey-analysis workflow; use a conversational agent only for exploratory brief expansion with human review.

**Source(s):** n8n docs https://docs.n8n.io/; AutoGen docs https://microsoft.github.io/autogen/docs/Use-Cases/agent_chat/; Microsoft Agent Framework overview https://learn.microsoft.com/en-us/agent-framework/overview/

---

## B. Domain examples and cases

### Case: ReAct loop

ReAct interleaves reasoning and acting, giving a simple structure for AI intelligence steps in marketing workflows.

### Case: AutoGen

AutoGen shows multi-agent conversation as a framework for LLM applications. Use it to compare conversational flexibility with workflow auditability.

### Failure case: AutoGPT-style runaway autonomy

Use as a cautionary pattern: long-running autonomy without clear stop conditions can compound errors, cost, and trust loss. Verify any specific AutoGPT claims before publication.

---

## C. Connections and dependencies

**Prerequisites:** Pipeline contract from Chapter 5; Madison layers from Chapter 2.

**Unlocks:** Interface risk in Chapter 7; brand-claim verification in Chapters 8-12.

**Adjacent chapter connections:** Chapter 7 turns agent outputs into public interface surfaces, raising the stakes.

---

## D. Current state of the field

**Settled:** Tool use and feedback loops are core to agent behavior.

**Contested or emerging:** How much autonomy is appropriate for production systems remains unsettled and domain-specific.

**Key references:**
1. Yao et al., ReAct — reasoning/action loop.
2. AutoGen paper/docs — multi-agent conversation.
3. n8n docs — graph workflow grounding.
4. Microsoft Agent Framework — emerging graph and agent unification.

**Recent developments:** Agent frameworks increasingly include state, telemetry, human-in-loop, and graph workflows, confirming the chapter's emphasis on auditability.

---

## E. Teaching considerations

**Where students get stuck:** They describe the model, not the role.

**Analogies and framings that work:** "An agent card is a job description plus a safety checklist."

**Exercises that build the target skill:** Agent card: role, input, tools, permission, output, approval gate, verification, stop condition.

