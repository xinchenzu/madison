# Research Notes: Chapter 04 — Product Requirements and Scope

**Source:** TIKTOC.md chapter entry  
**Notes file:** 04-product-requirements-and-scope_notes.md  
**Corresponding chapter:** chapters/branding-and-ai/04-product-requirements-and-scope.md  
**Generated:** 2026-06-06

---

## Chapter summary (from TIKTOC.md)

The reader writes a one-page PRD: problem, user, gap, MVP boundary, out-of-scope list, input/output contract, and success condition. The Claude adaptation is explicit: no agentic action without scope.

**Whole task:** Produce the Career-PRD or Startup-PRD for the running project.  
**Assessment:** PRD with an out-of-scope list as strong as the in-scope list.

---

## A. Conceptual foundations

### Scope as control system

Scope is not bureaucracy. In agentic work, scope prevents the system from touching irrelevant data, making unsupported claims, or building a tool too broad to verify. The Claude source's "no action without scope, approval, and verification" is the chapter's operating rule.

**Common misconception:** Scope limits creativity. In product work, scope creates the conditions for completing and testing something real.

**Worked example:** "AI brand assistant" is too broad. "Analyze three competitor landing pages and produce five positioning gaps for a portfolio homepage" is scoped.

**Source(s):** `pantry/claude-agentic-ai.md`; TIKTOC.md.

### MVP as validated learning

Eric Ries defines MVP around maximum validated learning with least effort. The chapter should correct the common mistake that MVP means "bad first version" or "smallest feature set we can ship." It means the smallest artifact that tests the riskiest assumption.

**Common misconception:** MVP equals prototype. A prototype may demonstrate feasibility; an MVP must teach something about user/customer value.

**Worked example:** A mock landing page with real user feedback can be a stronger MVP than a half-built full app.

**Source(s):** Lean Startup Co. MVP article https://leanstartup.co/resources/articles/what-is-an-mvp/; Lean Enterprise Institute summary https://www.lean.org/lexicon-terms/lean-startup/

---

## B. Domain examples and cases

### Case: Linear and disciplined product scope

Use as a narrative case if already in manuscript: the point is refusal as product quality. If source support is needed, verify before using specific numbers.

### Case: MVP as learning loop

Ries's build-measure-learn loop supports the PRD chapter's emphasis on learning over feature quantity.

### Failure case: Agentic tool with no out-of-scope list

Students often scope tools by aspiration. A missing no-list lets the project expand until nothing is verifiable.

---

## C. Connections and dependencies

**Prerequisites:** Creative Engineer frame; archetype constraint.

**Unlocks:** Workflow contracts in Chapter 5; agent card in Chapter 6; deployment boundary in Chapter 7.

**Adjacent chapter connections:** Chapter 5 turns PRD inputs/outputs into pipeline contracts.

---

## D. Current state of the field

**Settled:** Product discovery and lean-startup methods emphasize assumptions, learning, and iteration.

**Contested or emerging:** In AI products, the MVP may need stronger safety/evidence constraints because generated output can look complete before it is reliable.

**Key references:**
1. Eric Ries, *The Lean Startup* — MVP and validated learning.
2. Lean Startup Co., MVP article — concise definition.
3. Claude Agentic AI source — scope/approval/verification.
4. Local `_lib_The_Lean_Startup.md` and `_lib_Build_...md`.

**Recent developments:** AI prototyping tools make quick demos easy, increasing the need to ask what the demo actually validates.

---

## E. Teaching considerations

**Where students get stuck:** They write feature lists instead of problem/assumption statements.

**Analogies and framings that work:** "The out-of-scope list is the product's immune system."

**Exercises that build the target skill:** One-page PRD with problem, user, risky assumption, MVP, no-list, input/output contract, and verification plan.

