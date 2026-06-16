# Chapter 9 — Claims and Proof Map
*Copy review is a risk and evidence practice, not a polish pass.*

Here is a landing page headline that is not obviously wrong: *Trusted by modern teams. Faster workflows, more intuitive design, built for the way you work today.* Read it quickly and it holds together. The rhythm is reasonable. The vocabulary is current. Nothing jumps out as false.

Read it slowly, with the question *what kind of claim is this and what would prove it*, and four completely different problems appear in the same sentence.

"Trusted" is a credential claim — it implies a record of verified reliability, the kind of thing that wants a testimonial count, a case study, a third-party review score. "Faster" is a comparative performance claim — faster than what, measured how, under what conditions — the kind of claim that can attract regulatory attention if it cannot be substantiated with a methodology. "More intuitive" is a subjective audience claim dressed as an objective one — intuitive for whom, measured against what baseline — the kind of claim that is almost never supported and almost always present in software copy. "Built for the way you work today" is puffery — a rhetorical gesture with no claim content, legally safe but strategically empty.

Four claims. Four different proof requirements. Four different risk profiles. One smooth paragraph that makes them all invisible to a quick reader, including the quick reader who approved the copy.

The problem is not that the copy is dishonest. Most brand copy is not written to deceive — it is written to persuade, under time pressure, by people who are not thinking about the difference between "this sounds right" and "this can be defended." The problem is that copy that cannot be defended creates exposure: legal exposure if a performance claim is challenged, reputational exposure if an audience claim turns out not to match the actual audience, strategic exposure if a credential claim falls apart in due diligence. Junior practitioners who can make that exposure visible before the copy ships create enormous value. That is what the claims and proof map is for.

---

The map starts with a discipline that sounds simple and is harder than it looks: extracting claims one at a time, in isolation.

Copy is written to flow. One sentence builds on the next; claims embed themselves in syntax; the paragraph-level argument carries readers past individual assertions before they have time to evaluate them separately. That is partly what makes copy persuasive, and it is exactly what makes copy difficult to audit. The extraction step breaks the flow deliberately. You are not reading the copy as a reader — you are reading it as an analyst, pulling each claim out of its context and setting it down in a row by itself where it can be examined.

A claim, for purposes of this exercise, is any assertion about the product, brand, service, or category that a reader might take as a reason to believe, act, or choose. Not every sentence is a claim. "Discover what's possible" is not a claim — it is a navigation instruction dressed as inspiration. "Reduce onboarding time by 40%" is a claim. "The industry's most trusted compliance platform" is a claim. "We're on a mission to make work feel human again" sits in between — it is a claim about intent, which has a different risk profile than a claim about outcomes.

| Claim type | Definition | Example | Typical proof requirement | Typical risk |
|---|---|---|---|---|
| Factual | A verifiable statement of fact | "Available in 14 languages" | A source or record | Low–medium |
| Comparative | An assertion relative to a named alternative | "Faster than the leading tool" | Methodology + named comparison point | High |
| Credential | An implied record of reliability or status | "Trusted by modern teams" | Documentation of the credential | Medium–high |
| Performance | A quantified outcome claim | "Reduce onboarding time 40%" | Numbers with defined conditions | High |
| Audience | A claim about who it is for or how they feel | "Built for skeptical buyers" | Audience data | Medium |
| Puffery | Rhetorical gesture with no claim content | "The way you work today" | None — asserts nothing | Low |
| Opinion | A subjective view held by a speaker | "We think it's the cleanest UI" | Attribution to the holder | Low |

*The taxonomy exists to make proof requirements visible, not to eliminate claims. Some puffery is fine. Unsupported performance claims are not.*

![The seven claim categories arranged as equal-weight nodes ordered by the proof burden they demand — performance and comparative at the high-burden end, puffery at the no-proof end — with puffery marked as the structural outlier.](../images/09-claims-and-proof-map-fig-01.png)
*Figure 9.1 — Claim type taxonomy*

Once the claims are extracted and sitting in rows, the next step is classification. Madison uses seven categories: factual claim, comparative claim, credential claim, performance claim, audience claim, puffery, and opinion. The categories are not about judgment — a credential claim is not better or worse than an opinion — they are about proof requirements. A factual claim needs a source. A comparative claim needs a methodology and a named comparison point. A credential claim needs documentation of the credential. A performance claim needs numbers with defined conditions. An audience claim needs audience data. Puffery needs nothing because it asserts nothing. An opinion needs attribution to a speaker who holds it.

The classification step is where the agent adds real value. Give it the extracted claims and ask it to classify each one and note what proof requirement the classification implies — it does that consistently and at a speed that would take a human practitioner significantly longer. What the agent cannot do is assess whether the proof you have is adequate for the risk context you are operating in. That assessment depends on factors the agent does not have: the regulatory environment for the category, the client's history with claims-related challenges, the channel where the copy will run, and the practitioner's judgment about how aggressively to challenge the draft.

---

The proof column in the matrix is where the discipline becomes practical. For each claim, you attach whatever supporting evidence exists: a source document, a metric, a testimonial, a screenshot, an approved boilerplate statement, a client-provided data point. Or you write "none" — which is itself information, and the most important information the matrix can produce.

A performance claim with no proof attached is not ready to ship. That is not a stylistic judgment; it is a professional standard. The matrix makes the gap visible in a way that the original copy did not. Where the landing page said "faster workflows" fluently and confidently, the matrix says: *original claim — "faster workflows"; type — comparative performance; proof — none; risk — high; status — needs source or rewrite.*

| Original claim | Type | Proof | Risk | Rewrite | Approval owner | Status |
|---|---|---|---|---|---|---|
| "Trusted by modern teams" | Credential | 4,000 paying teams; no review score | Medium | "Used by 4,000 teams" | Brand lead | Approved with proof |
| "Faster workflows" | Comparative performance | none | High | "Cuts setup from 2 days to 4 hours (Q3 customer data, teams <50)" — pending verification | Legal | Flagged for approval owner |
| "More intuitive design" | Audience | none | Medium | "Most reviewers reached first value without docs (n=120 usability test)" | UX research | Flagged for approval owner |
| "Built for the way you work today" | Puffery | n/a | Low | keep as is | — | Approved as written |
| "Cuts reporting time 40%" | Performance | internal benchmark, 12 accounts | High | "Cuts reporting time ~40% across 12 pilot accounts" with methodology note | Legal | Approved with proof |

*The matrix is not a grading rubric. It is a production tool. "High risk, no proof" is a work item, not a verdict.*

![One row of the claims-and-proof matrix as a horizontal pipeline of linked cells — original claim, type, proof, risk, rewrite, approval owner, status — with the proof and status cells weighted as the load-bearing decision points and four colored end-states at the status terminus.](../images/09-claims-and-proof-map-fig-02.png)
*Figure 9.2 — The claims/proof matrix anatomy*

The risk assessment attaches to each claim independently, and it is a function of three factors: the claim type (comparative and performance claims carry higher inherent risk than puffery or opinion), the proof status (no proof is higher risk than supported proof), and the channel and context (a claim that runs in a regulated category, or in a jurisdiction with active advertising standards enforcement, carries more exposure than the same claim in a lower-stakes context). The matrix does not resolve the risk assessment — that is human judgment — but it gives the practitioner the inputs to make the judgment explicitly rather than implicitly.

---

I want to pause on the rewrite column because it is the most misused part of this workflow.

The rewrite is not an opportunity to make the copy timid. A rewrite that eliminates the claim rather than grounding it has not solved the problem — it has abandoned the strategic intent of the original. If the product genuinely does reduce onboarding time, the goal is not to remove "faster" from the copy; the goal is to get the number, verify the conditions, and write "reduces onboarding time by 40% in teams under 50 people, based on customer data from Q3 2024." That rewrite is more specific, more defensible, and more persuasive than the original, because specificity reads as credibility.

The verification checklist for this chapter includes a line that is easy to skip: *the cleaned copy is still useful, not merely timid.* It is there because the failure mode in the opposite direction from unsupported claims is copy that has been audited into uselessness — every claim softened to an opinion, every performance assertion hedged into a gesture, every credential buried in a qualifier. That copy is defensible and worthless.

The rewrite step should preserve the strategic intent of the claim while grounding it in available proof. If no proof is available and the claim cannot be grounded, the rewrite options are: qualify it explicitly as an opinion or user experience, replace it with a claim that can be supported, or flag it for the approval owner as a strategic choice that requires human sign-off. What it should not do is disappear the claim silently and let the copy ship with a gap where a selling point used to be.

![A decision tree from a claim with no proof: if proof can be found, attach, verify, and rewrite with specifics; if not, either qualify it as opinion with attribution or flag it for the approval owner to remove or hold.](../images/09-claims-and-proof-map-fig-03.png)
*Figure 9.3 — The rewrite decision tree*

<!-- → [DIAGRAM: The rewrite decision tree — starting from "claim with no proof attached," branching into: proof can be found (→ attach and verify → rewrite with specifics), proof cannot be found (→ can claim be qualified as opinion/UX? → yes: rewrite with attribution; no: flag for approval owner → remove or hold). Caption: The tree is a decision aid, not a policy. The approval owner can decide to ship a claim that the tree would flag, with documented reasoning.] -->

---

The approval owner column is where the matrix connects to organizational accountability, and it is the column most likely to be left blank in a first draft.

Every high-risk claim — every unsupported performance claim, every comparative claim, every credential claim that has not been independently verified — needs a named human who is accountable for the decision to include it. Not "legal" or "compliance" as a category, but a specific person who will review the evidence, assess the risk, and document that they approved the claim to move forward. The log entry for that decision is what makes the artifact defensible after the fact: if the claim is challenged, there is a record of what evidence was available, who reviewed it, and what judgment was made.

This is the phase gate in direct form. The agent can extract the claim, classify it, identify the proof gap, and suggest a rewrite. It cannot take responsibility for the consequences of the claim appearing in public. That responsibility attaches to the accountable practitioner who reviews the matrix and approves each line. The gate is not a formality — it is the professional moment that separates copy review from mere proofreading.

| Layer | What it contains | Who is accountable |
|---|---|---|
| Verified | Source documents, metrics, testimonials, screenshots, approved boilerplate | The evidence record |
| Model judgment | Claim classification and rewrite suggestions | The agent — prepared, not approved |
| Human judgment | Risk tolerance, brand fit, final copy approval | The accountable practitioner |

*The model prepares the matrix. The human signs the claim.*

![Three zones — verified evidence, model judgment, and human judgment — with a heavier divider marking the phase gate between what the model prepares and what the human signs.](../images/09-claims-and-proof-map-fig-04.png)
*Figure 9.4 — Evidence boundary*

---

The running project task is a full audit of one page or deck section: a claims/proof table with every column populated, and a cleaned draft of the copy that reflects the decisions the table records. The discipline is in the status column — each claim ends in one of four states: approved with proof, approved as qualified opinion, flagged for approval owner, or removed.

The common mistake is treating the matrix as an editing checklist and moving through it too quickly to think carefully about the approval owner column. A matrix where every approval owner line says "copy team" or is left blank is a matrix that has not yet done its most important work. The value of the exercise is not the classification — that is structural, and the agent handles it — but the explicit chain of accountability from claim to proof to named human decision.

Audit the copy the way a careful reader who does not know your client would read it: assuming nothing, questioning everything, asking for every credential and every number. That reader exists. In the worst cases, they work for a competitor, a regulator, or a journalist. The matrix is the practice of being that reader before the copy ships.

---

## LLM Exercises

**Exercise 1 — Extract and classify**

Take a page of brand or marketing copy — a landing page, a deck section, an email, an ad — and extract every claim into a row of the matrix. For each claim, assign a type (factual, comparative, credential, performance, audience, puffery, or opinion), attach whatever proof you can find or note "none," and assess the risk level as low, medium, or high. Do not rewrite yet. When the extraction is complete, identify the three highest-risk claims and write a one-paragraph note on what evidence would be needed to reduce the risk of each one.

Prompt suggestion: *"I'm going to give you a piece of copy. Extract every claim into a row: original claim, type, available proof, and risk level. Label each claim type using these categories: factual, comparative, credential, performance, audience, puffery, opinion. For proof, note what the claim would need to be substantiated. For risk, rate low/medium/high and explain why."*

**Exercise 2 — The rewrite column**

Take three high-risk claims from Exercise 1 — ideally one comparative, one performance, and one credential — and write two rewrites for each. The first: the rewrite that grounds the claim in the available proof, preserves the strategic intent, and is more specific and credible than the original. The second: the rewrite that hedges the claim into defensibility but loses the persuasive force. Evaluate which rewrite better serves the copy's strategic purpose. For the claims where no proof is available, write the flag note you would give the approval owner, naming the decision they need to make.

Prompt suggestion: *"Here are three high-risk claims from my copy audit. For each one, write two rewrites: one that grounds the claim in the available proof while preserving strategic intent, and one that hedges to defensibility but loses persuasive force. Then write a brief note comparing which serves the copy better. For claims with no proof, write the flag note for the approval owner."*

**Exercise 3 — The accountability audit**

Review a completed claims/proof matrix and populate the approval owner column for every claim rated medium or high risk. For each one, name the specific role or person who should review it, describe what information they need to make the approval decision, and write the log entry that would document their decision once made. If any high-risk claim has no obvious approval owner — no one in the organization whose job includes this kind of accountability — write a note on what that gap reveals about the workflow and what would need to change for the claim to be safely shipped.

Prompt suggestion: *"Here is a claims/proof matrix. Help me populate the approval owner column for every medium and high-risk claim. For each one, suggest who should review it and what information they need. Then help me write the log entry template that would document the approval decision, including what fields should be required."*

---

## Chapter 9 Exercises: Claims and Proof Map
**Project:** Your Own Brand Intelligence System
**This chapter adds:** a claims-and-proof map that links every public claim in your brand's copy to its supporting evidence — or flags it as unsupported and routes it to a named approval owner.

---

### Exercise 1 — When to Use AI
**The judgment:** Three places where AI genuinely earns its keep in claims work:
- Extracting every discrete claim from a flowing page of copy and laying them out in rows — *Why AI works here:* the model is patient and exhaustive in a way a tired human reader is not; it does not skim past the fifth credential claim, and "did I catch every assertion?" is a task you can verify by re-reading the copy against the list. (Mechanical extraction with a checkable output.)
- Classifying each extracted claim into the seven-category taxonomy and naming the proof requirement each type implies — *Why AI works here:* the taxonomy is a stable, rule-bound mapping (comparative → methodology + named comparison point), and you can audit each label against the table in this chapter. (Structured classification against an explicit rubric.)
- Drafting two contrasting rewrites of a flagged claim — one that grounds it in supplied proof, one that hedges it into defensibility — so you can see the trade-off side by side — *Why AI works here:* generating alternatives is fast and divergent, and you retain the judgment about which rewrite serves the strategy. (Option generation under your evaluation.)

**The tell:** You know you are using AI appropriately when you can evaluate the output — when you have independent criteria to judge whether it is correct, complete, and fit for purpose.

---

### Exercise 2 — When NOT to Use AI
**The judgment:** Three places where handing the work to AI crosses the line:
- Deciding whether the proof you hold is *adequate* for the regulatory and reputational risk of the channel the copy runs in — *Why AI fails here:* the model has no access to the category's enforcement climate, the client's claims history, or the channel's exposure profile; this is missing ground truth plus a values judgment about acceptable risk.
- Confirming that a performance number ("cuts reporting time 40%") is actually true and that the cited internal benchmark says what the copy implies — *Why AI fails here:* the model will fluently restate the number and even invent a plausible methodology; verification requires source adequacy and ground truth the model cannot reach, and a hallucinated citation reads exactly like a real one.
- Signing off as the accountable approval owner for a high-risk comparative or credential claim — *Why AI fails here:* accountability cannot be delegated to a system that bears no consequence; a named human must own the decision to put the claim in public.

**The tell:** You know you have crossed the line when you are using AI output as your reason for a conclusion rather than as a tool for reaching one.
**Series connection:** Tier 6 (Accountability). The approval-owner column is the chapter's spine, and accountability is the one thing the model structurally cannot hold — it can prepare the matrix, but a person signs each claim, which is exactly the boundary Tier 6 polices.

---

### Exercise 3 — LLM Exercise
**What you're building this chapter:** the claims-and-proof matrix for one page or deck section of your brand's live copy. · **Tool:** Claude (claude.ai chat) — a single self-contained pass over one artifact does not yet need persistent project memory; a chat thread keeps the whole audit in front of you.

**The Prompt:**
```
You are helping me build a claims-and-proof map for a piece of brand copy. Work in
two passes and do not skip ahead.

PASS 1 — EXTRACT AND CLASSIFY
Read the copy below. Extract every claim — any assertion about the product, brand,
service, or category that a reader might take as a reason to believe, act, or choose.
Pull each claim out of its sentence and set it in its own row. Skip navigation text
and pure inspiration ("discover what's possible") — those are not claims.

For each claim produce a row with these columns:
- Original claim (quoted exactly)
- Type (choose one: factual / comparative / credential / performance / audience /
  puffery / opinion)
- Proof requirement implied by that type (e.g. comparative needs a methodology AND a
  named comparison point; performance needs numbers with defined conditions)
- Risk (low / medium / high) with a one-line reason

PASS 2 — REWRITE THE THREE HIGHEST-RISK CLAIMS
For the three highest-risk claims only, write TWO rewrites each:
  (a) a grounded rewrite that preserves the strategic intent and gets MORE specific
      and credible — but use ONLY proof I supply below; do not invent numbers,
      benchmarks, sample sizes, testimonials, or comparison points.
  (b) a hedged rewrite that is defensible but loses persuasive force.
Then say in one line which rewrite better serves the copy and why.

If a claim has no proof available, do NOT fabricate any. Instead write a one-paragraph
flag note for the approval owner naming the exact decision they must make.

THE COPY:
[FILL IN: paste one page / email / deck section of your brand's copy]

THE PROOF I CAN SUPPLY (use only this; if a claim is not covered here, treat it as
"no proof available"):
[FILL IN: list any real numbers, sources, testimonials, comparison points you actually
hold — or write "none" if you have nothing yet]
```
**What this produces:** a populated extract-and-classify table plus grounded/hedged rewrites for your three riskiest claims, with explicit flag notes wherever you had no proof to supply. **How to adapt this prompt:** *For your own brand:* paste your real homepage hero or a live email; the [FILL IN] proof block is where your brand facts live — keep it honest, because the prompt is built so that an empty proof block forces flag notes rather than invented evidence. *For ChatGPT / Gemini:* paste the same two-pass structure verbatim; both follow numbered passes well, but re-state "do not invent numbers" near the end since the instruction can get diluted in a long paste. *For a Claude Project:* once you have a voice guide and proof inventory, load them as project knowledge so the model classifies against your real proof library instead of asking you to supply it inline. **Connection to previous chapters:** this is the claim-by-claim discipline the whole book has been pointing at — it turns the brand's voice and positioning into auditable assertions. **Preview of next chapter:** Chapter 10 applies the same evidence-or-flag standard to *who* the copy is for, building persona sheets where every trait traces to a source.

---

### Exercise 4 — CLI Exercise
**What you're building this chapter:** a reusable `claims-proof-map.md` that audits all the copy files in a brand folder, populating the full matrix (claim, type, proof, risk, rewrite, approval owner, status) for each. **Tool:** Claude Code · **Skill level:** Intermediate

**Setup:**
- [ ] Claude Code installed and authenticated, opened in a folder that holds your brand copy as text/markdown files.
- [ ] At least two copy files in the folder (e.g. `homepage.md`, `launch-email.md`) and, if you have one, a `proof-inventory.md` listing real evidence.
- [ ] A scratch output folder (`/audit/`) that you are comfortable having new files written into.

**The Task:**
```
Audit the brand copy in this folder and produce a claims-and-proof map.

READ: every .md and .txt file in ./copy/ . Also read ./proof-inventory.md if it
exists.
DO NOT MODIFY any source copy file. Treat all copy and proof files as read-only.
WRITE: a single new file ./audit/claims-proof-map.md and nothing else.

For each copy file, add a section with a table whose columns are:
Original claim | Type | Proof (cite the proof-inventory line, or "none") | Risk
(low/med/high) | Suggested rewrite | Approval owner (leave as "[NAME]" — do not
guess a person) | Status (one of: approved with proof / approved as qualified
opinion / flagged for approval owner / needs source).

Rules:
- Use ONLY ./proof-inventory.md for proof. Never invent a source, number, or
  comparison point. If a claim's proof is not in the inventory, mark proof "none"
  and status "flagged for approval owner."
- Classify type using exactly: factual, comparative, credential, performance,
  audience, puffery, opinion.

STOP when ./audit/claims-proof-map.md is written. Do not edit source files, do not
delete anything, and do not run any other commands without asking me first.

VERIFY before finishing: re-open each copy file and confirm every claim you found
appears as a row, and report any claim you were unsure whether to count.
```
**Expected output:** one new file, `./audit/claims-proof-map.md`, with a per-file table and every high-risk/no-proof claim landing in "flagged for approval owner" status. **What to inspect in the output:** check the proof column — every non-"none" entry must point to a real line in your inventory, not a plausible-sounding invention; and confirm no source copy file was touched. **If it goes wrong:** the most common failure is the model filling proof cells with invented benchmarks; if you see numbers that are not in your inventory, that is a hallucination, not a finding — re-run with the "use ONLY ./proof-inventory.md" line emphasized. **CLAUDE.md / AGENTS.md note:** add a standing rule — "Copy files are read-only during audits. Never invent proof; uncited claims are flagged, not filled. Approval owner is always left as a placeholder for a human." — so every future audit inherits the no-fabrication discipline.

---

### Exercise 5 — AI Validation Exercise
**What you're validating:** the claims-and-proof matrix the AI produced in Exercise 3 or 4. **Validation type:** evidence-adequacy and fabrication check. **Risk level:** High — these are public claims with legal and reputational exposure. **Setup:** put the AI's matrix next to your real proof inventory and the original copy.

**The Validation Task:** "Evaluate the AI output using this checklist. For each item record Pass / Fail / Cannot determine and explain."
```
Validation Checklist — Claims and Proof Map
□ Correctness: Is every claim classified into the right type, and does the stated
  proof requirement match that type (comparative → methodology + named comparison)?
□ Completeness: Does every claim in the original copy appear as a row? Re-read the
  copy and look for assertions the model skimmed past.
□ Scope: Did the model stay inside the supplied proof, or did it import outside
  knowledge / "industry-typical" numbers it was never given?
□ Fabrication check: For every non-"none" proof cell, can you point to the exact
  source line it cites? Any proof you cannot trace is a fabrication, not evidence.
□ Accountability check: Is every high-risk claim routed to an approval owner rather
  than silently marked "approved"?
□ Failure mode check: fluent-but-wrong (a confident rewrite that quietly changes the
  meaning of the claim)? invented citation that reads exactly like a real one?
  missing ground truth (proof asserted the model never actually had)?
```
**What to do with your findings:** every Fail on the fabrication or accountability line is a stop-ship item — pull the claim or send it to a named owner before any of this copy runs. Cannot-determine items become research-agenda entries. **AI Use Disclosure prompt:** "AI extracted and classified the claims and drafted candidate rewrites; a human verified every proof citation against the source inventory and made all approval decisions. No proof in this matrix originates from the model." **Series connection:** the dominant failure mode here is the invented-citation hallucination, and the tier is Tier 6 (Accountability) — the validation exists precisely because the model can produce a defensible-looking matrix that no human has actually stood behind.

---
**Tags:** claims-audit, evidence-provenance, claim-classification, fabrication-check, approval-accountability, brand-copy-review
