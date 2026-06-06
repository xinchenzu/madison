# Research Notes: Chapter 07 — Interface Design and Deployment

**Source:** TIKTOC.md chapter entry  
**Notes file:** 07-interface-design-and-deployment_notes.md  
**Corresponding chapter:** chapters/branding-and-ai/07-interface-design-and-deployment.md  
**Generated:** 2026-06-06

---

## Chapter summary (from TIKTOC.md)

The reader deploys or specifies a public interface and learns why interface impressions compound. The chapter applies verification to demo risk: a fluent demo can destroy trust if its claims are wrong.

**Whole task:** Deploy or mock a public interface for the running project.  
**Assessment:** Public URL or interface spec with README, screenshots, and verification checklist.

---

## A. Conceptual foundations

### Interface as trust surface

An interface is not only UI. It includes interaction model, deployment surface, data contract, brand surface, and error behavior. For AI systems, the interface is where users decide whether the system is competent and safe.

**Common misconception:** A clean interface makes output trustworthy. The chapter should separate aesthetic confidence from verified claims.

**Worked example:** A dashboard showing "market sentiment: positive" must expose source window, sample, and confidence caveats.

**Source(s):** TIKTOC.md; Claude safety/supervision model in `pantry/claude-agentic-ai.md`.

### Demo risk

Public AI demos are risky because fluent failures are visible and reputational. Google's Bard demo error in February 2023 reportedly contributed to a large Alphabet market-value drop, making it a strong case for verification before public presentation.

**Common misconception:** Demo polish matters more than source correctness. In AI demos, one wrong claim can define the launch.

**Worked example:** Before demoing an AI brand analyzer, verify three sample outputs against source pages.

**Source(s):** Reuters-style coverage surfaced in search; Google Gemini/Bard summary https://en.wikipedia.org/wiki/Google_Gemini; verify with primary/Reuters before final manuscript.

---

## B. Domain examples and cases

### Case: Google Bard demo error

Use as demo-risk case: AI output in a promotional context carried factual error and public trust cost. Verify final numbers in publication draft.

### Case: Snapchat 2018 redesign

Snapchat redesign backlash, including a petition with more than 1 million signatures, shows interface changes as brand and user-trust events.

**Source:** CNBC https://www.cnbc.com/2018/02/15/snapchat-redesign-petition-to-scrap-update-hits-1-million-votes.html

### Failure case: Interface hides uncertainty

A beautiful interface that hides source limits encourages overtrust.

---

## C. Connections and dependencies

**Prerequisites:** PRD scope, workflow map, agent card.

**Unlocks:** Brand strategy, visual identity, portfolio integration.

**Adjacent chapter connections:** Chapter 8 asks what brand system governs the public surface.

---

## D. Current state of the field

**Settled:** Interfaces shape user trust and error interpretation.

**Contested or emerging:** AI interface conventions for uncertainty, source display, and human review are still evolving.

**Key references:**
1. Microsoft Human-AI Interaction Guidelines — use for final drafting if source is added.
2. CNBC Snapchat redesign backlash — interface change as user-trust case.
3. Bard demo error coverage — AI demo verification risk.

**Recent developments:** AI products increasingly expose generated outputs directly to users, raising the need for source, uncertainty, and review cues in the interface.

---

## E. Teaching considerations

**Where students get stuck:** They design screens before deciding what the user needs to trust.

**Analogies and framings that work:** "The interface is the promise made visible."

**Exercises that build the target skill:** Interface spec with user task, input, output, uncertainty display, error state, human review point, and source link.

