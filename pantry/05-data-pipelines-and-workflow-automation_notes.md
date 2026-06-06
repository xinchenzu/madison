# Research Notes: Chapter 05 — Data Pipelines and Workflow Automation

**Source:** TIKTOC.md chapter entry  
**Notes file:** 05-data-pipelines-and-workflow-automation_notes.md  
**Corresponding chapter:** chapters/branding-and-ai/05-data-pipelines-and-workflow-automation.md  
**Generated:** 2026-06-06

---

## Chapter summary (from TIKTOC.md)

The reader builds or specifies an n8n-style pipeline: ingestion, transformation, storage, output, and degraded mode. Madison-main workflow imports become evidence of how workflow JSON becomes skill cards and inspectable operations.

**Whole task:** Create a workflow map with source contracts and failure paths.  
**Assessment:** Pipeline diagram or workflow card naming inputs, outputs, tools, and stop conditions.

---

## A. Conceptual foundations

### Pipeline as contract chain

A data pipeline is a sequence of contracts: input shape, transformation rule, storage target, output format, and failure behavior. In marketing systems, a broken upstream contract can produce confident but wrong audience, sentiment, or campaign conclusions.

**Common misconception:** Automation removes fragility. It often relocates fragility into hidden dependencies.

**Worked example:** A workflow pulls competitor pages, extracts claims, stores a table, and generates positioning gaps. Each step needs schema and failure handling.

**Source(s):** n8n workflows docs https://docs.n8n.io/workflows/; n8n node docs https://docs.n8n.io/integrations/builtin/node-types/

### Workflow JSON as inspectable artifact

Madison-main imports show that n8n workflow JSON can be preserved, converted into skill cards, and used pedagogically. This is central to the repo's agentic documentation method.

**Common misconception:** Visual workflow tools are self-documenting. They still need required reads, inputs, outputs, credentials, stop conditions, and logging.

**Worked example:** `skills/n8n-survey-analysis.md` should identify original JSON, node inventory, expected input, output contract, and human review.

**Source(s):** `docs/madison-main/MOVED-FROM-PANTRY.md`; `docs/workflows.md`; `skills/README.md`.

---

## B. Domain examples and cases

### Case: Reddit API rupture

The Reddit API changes in 2023 are a useful dependency-risk example if verified in chapter drafting. They show that external contracts are business risks.

### Case: n8n credentials and workflow nodes

n8n documentation distinguishes workflows, nodes, and credentials. This maps cleanly to input/tool/permission teaching.

### Failure case: Hardcoded credentials or silent failed node

Automation that hides credential failure or silently drops rows can produce polished but incomplete reports.

---

## C. Connections and dependencies

**Prerequisites:** PRD input/output contract.

**Unlocks:** AI agent step in Chapter 6; interface output in Chapter 7; evidence discipline in brand claims.

**Adjacent chapter connections:** Chapter 6 adds AI reasoning/action loops inside or across pipeline nodes.

---

## D. Current state of the field

**Settled:** Workflow automation depends on explicit nodes, credentials, triggers, and execution history.

**Contested or emerging:** Low-code AI automation expands who can build workflows, but also expands security and provenance risks.

**Key references:**
1. n8n Workflows docs — workflow basics.
2. n8n Node Types docs — node/credential reference.
3. Madison import docs — local workflow-to-skill evidence.
4. Local `_lib_Thinking_in_Systems_A_Primer.md` — systems framing.

**Recent developments:** AI-enabled automation tools increasingly combine workflow nodes, code nodes, and LLM calls, requiring clearer security and review practices.

---

## E. Teaching considerations

**Where students get stuck:** They draw happy-path diagrams with no failure paths.

**Analogies and framings that work:** "Every arrow is a promise about data shape."

**Exercises that build the target skill:** Draw ingestion -> transform -> storage -> output, then add one failure mode and one degraded mode per edge.

