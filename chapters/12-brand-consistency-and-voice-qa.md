# Chapter 12 — Brand Consistency and Voice QA
*The difference between a brand that sounds consistent and one that sounds the same.*

The website was confident and technical. The email was warm and conversational. The ad was urgent and punchy. The deck was formal and structured. Run a quick AI pass to unify them — tighten the vocabulary, align the sentence rhythms, smooth the tone variation — and you get something consistent. You also get something worse.

What happened to the website is that its technical confidence, the thing that made it credible to a reader who had arrived with a specific problem and was evaluating whether the product could solve it, got softened toward the middle register of the other touchpoints. What happened to the email is that the warmth that made recipients feel like a person had written it got replaced with something that sounds like a brand. What happened to the ad is that the urgency that drove clicks got rounded down to the tone level of the deck. The deck alone, being the most formal artifact, came out relatively intact.

Consistency improved. Brand judgment got worse. And the practitioner who ran the pass now owns a set of assets that are more similar and collectively less effective than what they started with.

The problem here is a category error: treating consistency as uniformity. A brand is not one voice saying one thing in one register forever. A brand is a recognizable identity that adapts — deliberately, with accountability — to channel, audience, and purpose. The website talks to a buyer evaluating a purchase. The email talks to a customer who already chose. The ad intercepts someone who was not looking. The deck lives in a room with a client who is deciding whether to trust you with something important. Those contexts require different registers, and the differences are not failures of brand discipline. They are evidence of it.

---

What the QA audit is trying to find is not difference. It is the difference between *intentional adaptation* and *drift*.

Drift is what happens when no one is accountable for how a touchpoint sounds. The email was written by a junior writer on a deadline who defaulted to casual because it felt right. The deck was assembled by the account lead who copied boilerplate from a previous engagement and did not notice that the boilerplate was from a brand with a different positioning. The ad was written by an agency that never received the voice guide and is working from the brand guidelines PDF that the client sent, which is three years old and does not reflect the voice evolution since the rebrand. These are not intentional adaptations. They are accidents that accumulate into incoherence.

Intentional adaptation is something different. The email is warm because the brand strategy team decided that post-purchase communication should sound human, that a customer who has already bought deserves a different register than a prospect being converted. That decision is documented. The voice guide says so. The difference from the website is not a defect — it is a policy.

The QA matrix exists to make that distinction explicit and auditable. Every difference it finds gets classified: is this a rule violation, or is this a documented adaptation? If it is a rule violation, it needs a severity rating, a recommendation, and an owner. If it is a documented adaptation, it gets noted as such and passes. If it is ambiguous — if the variation looks intentional but no one can point to a rule that permits it — that is the most important finding in the matrix, because it reveals a gap in the brand documentation rather than a gap in execution.

| Touchpoint | Rule Reference | Issue Description | Evidence (specific line or element) | Severity | Recommendation | Owner | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Homepage hero | Claims policy §2.1 (no unqualified superlatives) | Unsupported superlative claim | "the most trusted platform in the industry" | Critical | Rewrite to a warranted claim or supply third-party proof | T. Okafor | Held — pending proof |
| Welcome email | Voice guide §3.4 (12–16 words, email) | Sentence length exceeds channel norm | Opening sentence runs 27 words | Major | Split into two sentences in next revision before send | R. Devi | Revise before launch |
| Product page | Voice guide §3.2 (active voice primary) | Passive construction cluster | "results are delivered," "decisions are supported" | Minor | Convert to active voice in next cycle | L. Park | Logged for next cycle |
| Loyalty email | Voice guide §1.1 (warm post-purchase register) | Tone slightly warmer than website | Casual greeting, first-name address | Note | No action — documented adaptation | A. Chen | Pass — intentional |

*The rule reference column is not optional. An issue without a rule citation is an opinion. The matrix trades in evidence, not taste.*

![Schematic of one QA matrix row as eight aligned cells — touchpoint, rule reference, issue, evidence, severity, recommendation, owner, decision — with the rule-reference cell weighted as load-bearing and a four-state severity indicator.](../images/12-brand-consistency-and-voice-qa-fig-01.png)
*Figure 12.1 — The QA matrix structure*

---

The recipe for this chapter requires inputs that are often partly missing in practice, and it is worth being direct about what happens when they are missing.

Inputs: brand rules, voice guide, sample touchpoints, a claims/proof map, accessibility requirements, and review criteria. Steps: inspect each touchpoint against those inputs — rule alignment, claim support, tone, jargon, accessibility, contradictions, and channel fit — assign severity, recommend action, capture the human decision. Gate: severe issues block launch until an owner has made and documented a decision. Log: touchpoint, issue, severity, recommendation, decision.

The missing-inputs problem is common. A brand rules document that predates the last rebrand. A voice guide that describes aspirational voice rather than operational guidance — that says the brand is "approachable but authoritative" without specifying what that means for sentence length, vocabulary level, or how claims should be sequenced. Accessibility requirements that no one has formally adopted for this account. When the inputs are thin, the QA matrix produces findings that are harder to defend — not because the findings are wrong, but because they cannot be tied to a documented standard. The practitioner has to choose between writing findings to a standard they are constructing in the moment, which is legitimate but should be labeled as such, or noting that the finding reflects professional judgment in the absence of documented rules.

![Systems diagram of QA inputs: brand rules and voice guide feed review criteria the agent applies to touchpoints, with an accessibility check running in parallel and the claims/proof map supplying the evidentiary layer; all findings converge in the QA matrix and close at a human decision.](../images/12-brand-consistency-and-voice-qa-fig-02.png)
*Figure 12.2 — The recipe input chain*

<!-- → [DIAGRAM: The recipe input chain — brand rules and voice guide feed the review criteria, which the agent applies to the touchpoints; accessibility requirements run as a parallel check; the claims/proof map provides the evidentiary layer for claim-related findings; all findings flow into the QA matrix; human decisions close each row. Caption: Missing inputs do not stop the process — they change the epistemic status of the findings. Label gaps honestly.] -->

The agent's role in this workflow is comparison at scale and consistency checks. Give it the voice guide and a set of touchpoints and ask it to identify vocabulary that falls outside the documented register, sentence structures that do not match the established patterns, jargon that the guide flags for avoidance — it does that efficiently and without the fatigue that makes human reviewers miss the fifteenth instance of a problem they have already seen fourteen times. It can run an accessibility check against WCAG contrast requirements, flag missing alt text, identify reading-level mismatches between a stated audience and the copy's actual complexity.

What it cannot do is decide whether the warmth in the email is a defect or a feature. That decision requires a human who knows the brand's strategy, who can evaluate the specific context of that touchpoint, and who is willing to be accountable for the judgment. The agent surfaces the difference. The practitioner names what kind of difference it is.

---

Severity is the part of the matrix that most junior practitioners underuse, and it matters because not all findings are equal and treating them equally creates noise that obscures the things that actually need attention.

Critical severity means the issue blocks launch. A claim that contradicts a legal restriction. A contrast ratio below the accessible minimum on a primary CTA. A brand positioning statement that directly contradicts an approved statement in a live campaign. These do not need nuance — they need resolution before anything ships.

Major severity means the issue should be addressed before launch if at all possible, and if it cannot be addressed, the decision to ship anyway needs to be documented by a named owner. An off-brand tone in a high-traffic touchpoint. An unsupported performance claim in a context where it will receive scrutiny. A voice register that drifts significantly from the established standard without a documented rationale.

Minor severity means the issue is worth noting and should be addressed in the next revision cycle, but it does not block the current launch. A vocabulary choice that is marginal — not wrong, just not the strongest option by brand standards. A structural pattern that slightly diverges from the established template.

A note is an observation that may be useful context but does not constitute a finding. A slight tone warmth variation that probably reflects the author's natural register. A word that is on the borderline of the jargon list.

| Severity | Definition | Triggering Condition | Example (brand/copy QA) | Action Required |
| --- | --- | --- | --- | --- |
| Critical | Blocks launch | Issue creates legal, accessibility, or brand-integrity risk if shipped | CTA contrast ratio below WCAG 4.5:1; claim contradicts a legal restriction | Resolve before anything ships |
| Major | Should be fixed before launch | Off-brand or unsupported in a high-visibility context | Off-brand tone in a high-traffic touchpoint; unsupported performance claim | Address before launch, or a named owner documents the decision to ship |
| Minor | Worth noting, non-blocking | Marginal deviation from brand standard | Sub-optimal vocabulary choice; slight template divergence | Address in the next revision cycle |
| Note | Observation, not a finding | Variation likely reflects natural register, not a defect | Slight tone warmth in author's voice; borderline jargon word | No action required; recorded as context |

*Severity exists to prioritize, not to signal alarm. A matrix full of critical findings is not a rigorous audit — it is an audit that has lost the ability to communicate.*

![Four severity tiers ordered from critical to note, each paired with the action it requires, with a gating glyph distinguishing the launch-decision weight of critical and major from the revision-cycle weight of minor and note.](../images/12-brand-consistency-and-voice-qa-fig-03.png)
*Figure 12.3 — Severity levels*

The distribution of severity across a real QA matrix is information. A set of three touchpoints with one critical finding, three major findings, and twelve minor findings is a different situation from a set with eight critical findings. The critical finding needs immediate owner attention. The twelve minor findings need a revision cycle. Running them together in the same conversation, at the same urgency level, is how QA matrices become noise generators that practitioners learn to ignore.

---

Voice is the hardest part of the matrix to write defensibly, and the most important to get right, because it is the dimension most likely to be contested.

A voice comment that says "this doesn't sound like the brand" is not a finding. It is an opinion, and it invites an argument the QA process is not designed to have. A voice comment that says "this paragraph uses passive construction in four consecutive sentences; the voice guide specifies active voice as a primary standard (Section 3.2); specific lines: 'results are delivered,' 'decisions are supported,' 'teams are empowered'" is a finding. It cites the rule, quotes the specific evidence, and makes the issue falsifiable — either the guide says that or it does not, and either those sentences use passive construction or they do not.

The discipline is to write every voice finding to a rule and a specific line. Not "the tone feels off" but "the email opens with a self-deprecating joke; the voice guide characterizes the brand as 'confident without arrogance' and specifically flags self-deprecation as inconsistent with the brand character (Section 4.1, Tone Boundaries)." Not "this is too formal" but "average sentence length in this section is 24 words; the voice guide recommends 12–16 words for email copy (Section 3.4, Channel Norms)."

When there is no rule to cite, the finding cannot be written as a rule violation. It can be written as a recommendation: "consider revising — this register may not serve the audience context, though no documented standard currently governs email tone. Flagging for review." That note is honest about its own epistemic status. It is useful. And it implicitly surfaces the gap in the documentation, which is information the brand team needs.

![Side-by-side comparison: a weak, opinion-based voice finding shown as a lone isolated node, against a strong, rule-cited finding built as a connected chain of rule reference, quoted evidence, finding statement, severity, recommendation, and owner.](../images/12-brand-consistency-and-voice-qa-fig-04.png)
*Figure 12.4 — Voice finding anatomy*

<!-- → [DIAGRAM: Voice finding anatomy — a single finding unpacked into its components: rule reference (with section number), specific evidence (quoted lines), finding statement, severity, recommendation, owner. Show a weak version (opinion-based) and a strong version (rule-cited) of the same finding side by side. Caption: The test for a voice finding: can someone disagree with it by pointing to the rule? If not, it's an opinion. Write it differently.] -->

---

The accessibility check runs parallel to the voice and consistency check, and it deserves more attention than it typically receives in brand QA workflows because it is both the most objectively verifiable dimension and the one most often treated as a technical afterthought.

Contrast ratios are computable. If your body text is rendered in a color that falls below the WCAG 4.5:1 minimum contrast ratio against its background, that is not an opinion — it is a finding with a specific numeric value, a documented standard it violates, and a specific remediation (change the foreground color to reach the minimum). The `contrast-check` script handles this; the agent can run it against the touchpoint's color values. The finding writes itself.

Alt text is either present or absent. Reading level is measurable. These are the easy parts of accessibility QA, and they should appear in every matrix as a matter of professional standard, not as optional additions when accessibility happens to be top of mind.

The harder part is judgment about whether the accessible version is also the effective version — whether the contrast-compliant color still works in the design, whether the simplified language still carries the brand voice, whether the alt text description serves both screen reader users and SEO simultaneously. Those are human judgment calls that the matrix surfaces but cannot resolve. They get severity ratings and owners, the same as everything else.

---

The running project task is an audit of three touchpoints: the matrix populated with every column, human decisions recorded in the decision column, and a brief revised guidance note identifying any gap in the brand documentation that the audit revealed. That last element — the gap note — is often the most valuable output of a QA process and the one most consistently omitted. Every time a practitioner has to write "finding reflects professional judgment in the absence of a documented standard," they are generating evidence that the documentation needs updating. The gap note captures that evidence before it disappears back into the workflow.

The verification checklist runs: brand rules are cited; voice comments point to specific lines; accessibility issues are included; the matrix distinguishes contradiction from useful variation; human decisions are recorded. Machine conformance is what the agent checks — are all columns populated, do rule citations resolve to existing documents, are severity levels within the defined range. Human adequacy is what the practitioner checks — is the distinction between defect and adaptation being made correctly, are severity ratings proportionate to actual risk, are the right people named as owners for the right findings.

The goal is a set of touchpoints that sounds like one brand thinking carefully about context, not one brand saying the same thing everywhere. Uniformity is easy and fragile. Coherent variation is hard and durable. The matrix is how you tell the difference between them, document the difference, and hold the right people accountable for the decisions that make the difference intentional.

---

## LLM Exercises

**Exercise 1 — Audit three touchpoints**

Select three brand touchpoints from the same organization — a website page, an email, and either an ad or a deck section. Using the QA matrix structure, audit each one against the brand rules and voice guide. For each finding, write the rule reference, the specific evidence, the severity, a recommendation, and an owner. Classify each finding as rule violation, undocumented adaptation, or documentation gap. When the matrix is complete, write a one-paragraph gap note identifying any rules or standards that your findings revealed to be absent or ambiguous.

Prompt suggestion: *"I'm going to give you three brand touchpoints and a voice guide. For each touchpoint, identify every place where the copy deviates from the documented brand rules. For each finding: cite the specific rule, quote the specific line, rate severity as critical/major/minor/note, and recommend an action. Classify each finding as rule violation, intentional adaptation (if supported by documentation), or documentation gap."*

**Exercise 2 — Voice finding discipline**

Take five voice-related observations about a piece of copy — observations in the form of opinions ("this doesn't sound right," "the tone feels off," "this is too formal") — and rewrite each one as a defensible finding. Each rewrite must cite a rule, quote specific evidence, and be falsifiable: someone should be able to disagree by pointing to the rule or the evidence. For any observation that cannot be rewritten as a defensible finding because no rule covers it, write the recommendation in its appropriate form and add the documentation gap note.

Prompt suggestion: *"Here are five voice observations about a piece of copy, written as opinions. Help me rewrite each one as a defensible QA finding with a rule citation, specific evidence, and a severity rating. For any observation that cannot be grounded in a documented rule, help me write it as a recommendation with a documentation gap note."*

**Exercise 3 — Defect versus adaptation**

Review a QA matrix with ten findings and classify each as: rule violation requiring remediation, intentional adaptation that should be documented in the voice guide, or unclear — could be either. For the rule violations, confirm the severity and owner. For the intentional adaptations, write the documentation addition that would make them officially sanctioned. For the unclear findings, write the question you would ask the brand team to resolve the ambiguity, and describe what the answer would need to contain to close the finding in either direction.

Prompt suggestion: *"Here is a QA matrix with ten findings. Help me classify each as rule violation, intentional adaptation, or unclear. For violations, confirm severity and owner. For adaptations, draft the voice guide addition that would document them. For unclear findings, write the clarifying question for the brand team and describe what answer would resolve the finding."*

---

## Chapter 12 Exercises: Brand Consistency and Voice QA
**Project:** Your Own Brand Intelligence System
**This chapter adds:** a brand voice and consistency QA check that audits your touchpoints against documented rules, cites the rule behind every finding, distinguishes intentional adaptation from drift, and surfaces the documentation gaps the audit reveals.

---

### Exercise 1 — When to Use AI
**The judgment:** Three places where AI does the QA heavy lifting well:
- Comparing many touchpoints against a voice guide at scale — flagging vocabulary outside the register, sentence structures off the established pattern, jargon the guide bans — *Why AI works here:* this is tireless pattern-matching against an explicit rulebook, and the model does not miss the fifteenth instance the way a fatigued human does; each flag is checkable against the guide. (Rule-bound comparison at scale.)
- Running the objective accessibility checks — contrast ratios against WCAG 4.5:1, missing alt text, reading-level mismatch — *Why AI works here:* these are computable with a documented standard and a numeric answer; the finding writes itself and you can recompute it. (Deterministic checks with verifiable values.)
- Rewriting opinion-shaped voice comments ("the tone feels off") into rule-cited, falsifiable findings — *Why AI works here:* mapping a vague observation onto a specific rule and quoted line is a structuring task whose output you can test by asking "can someone disagree by pointing to the rule?" (Reformatting under a falsifiability test.)

**The tell:** You know you are using AI appropriately when you can evaluate the output — when you have independent criteria to judge whether it is correct, complete, and fit for purpose.

---

### Exercise 2 — When NOT to Use AI
**The judgment:** Three places where the model should not be making the call:
- Deciding whether a difference is intentional adaptation or drift — whether the email's warmth is a documented policy or an accident — *Why AI fails here:* this requires knowing the brand's strategy and whether a rule sanctions the variation; it is a values-and-context judgment, and the model will tend to flatten deliberate adaptation into a "violation" or wave drift through.
- Setting final severity that gates launch — calling something critical and blocking the ship — *Why AI fails here:* severity is a proportionality judgment about real risk and accountability for the launch decision; an inflated matrix of all-critical findings is itself a failure the model is prone to.
- Judging whether the accessible version is also the *effective* version — whether the compliant color still works in the design, whether simplified language still carries the voice — *Why AI fails here:* this trades off competing goods (compliance vs. craft vs. brand) and needs a human accountable for the result.

**The tell:** You know you have crossed the line when you are using AI output as your reason for a conclusion rather than as a tool for reaching one.
**Series connection:** Tier 7 (Values and ethics). The defect-versus-adaptation distinction is a judgment about what the brand *should* sound like and for whom — including the accessibility calls about who can use the work at all — which is value-laden in a way that sits above mere rule-conformance; Tier 7 is where "is this the right adaptation, fairly made?" lives.

---

### Exercise 3 — LLM Exercise
**What you're building this chapter:** a QA matrix for three touchpoints, with every finding cited to a rule and a gap note for the rules you discover are missing. · **Tool:** Claude (claude.ai chat) — you want to reason interactively over the touchpoints and the voice guide together and see the rule citations as they form.

**The Prompt:**
```
You are running a brand-voice and consistency QA audit. The cardinal discipline: every
finding must cite a specific rule from the voice guide AND quote the exact line of copy
it concerns. A finding without a rule citation is an opinion, and you must not file
opinions as findings.

I will give you (a) a voice guide / brand rules document and (b) three touchpoints.

For each touchpoint, produce a QA matrix table with these columns:
  Touchpoint | Rule reference (section #) | Issue | Evidence (the exact quoted line
  or element) | Severity (critical / major / minor / note) | Recommendation | Owner
  ([NAME] — do not invent a person) | Classification

Classification must be one of:
  - RULE VIOLATION (cite the rule it breaks)
  - INTENTIONAL ADAPTATION (cite the rule that PERMITS it; if you cannot cite a
    permitting rule, it is NOT an intentional adaptation — reclassify it)
  - DOCUMENTATION GAP (the variation looks deliberate but no rule covers it either
    way — this is the most important kind of finding)

Severity guidance: critical = blocks launch (legal/accessibility/brand-integrity
risk); major = fix before launch or a named owner documents shipping anyway; minor =
next revision cycle; note = observation, no action. Do not inflate severity.

If you want to flag something but cannot cite a rule, write it as a RECOMMENDATION
with a documentation-gap note — never as a violation.

After the three matrices, write a one-paragraph GAP NOTE listing every rule or
standard your findings revealed to be absent or ambiguous.

THE VOICE GUIDE / BRAND RULES:
[FILL IN: paste your voice guide, or the relevant sections]

THE THREE TOUCHPOINTS:
[FILL IN: paste a website section, an email, and an ad or deck section]
```
**What this produces:** three rule-cited QA matrices, each finding classified as violation / adaptation / gap, plus a consolidated gap note for the brand documentation. **How to adapt this prompt:** *For your own brand:* the [FILL IN] voice guide is what makes findings defensible — if yours is thin or aspirational ("approachable but authoritative" with no operational detail), expect lots of documentation-gap findings, which is the honest and useful result. *For ChatGPT / Gemini:* keep the strict classification rule that an adaptation must cite a *permitting* rule; both models otherwise tend to label any plausible-sounding variation "intentional" without justification. *For a Claude Project:* load the voice guide, brand rules, and your Chapter 9 claims/proof map as project knowledge so claim-related findings (the homepage superlative) can cite the proof map directly. **Connection to previous chapters:** this closes the loop — claim findings cite the proof map (Ch 9), audience-fit findings draw on the persona evidence (Ch 10), and the touchpoints audited here are the ones the provenance calendar (Ch 11) scheduled. **Preview of next chapter:** the next chapter takes the gap notes this audit generates and turns recurring documentation gaps into updated brand standards.

---

### Exercise 4 — CLI Exercise
**What you're building this chapter:** an automated QA pass over a folder of touchpoints, producing a rule-cited matrix and a documentation-gap note. **Tool:** Claude Code · **Skill level:** Intermediate

**Setup:**
- [ ] Claude Code installed and opened in a folder containing your touchpoints as text/markdown (`./touchpoints/`) and a `./voice-guide.md`.
- [ ] A `./claims-proof-map.md` in the folder if you have one from Chapter 9.
- [ ] An `./qa/` output folder you are comfortable writing into.

**The Task:**
```
Run a brand-voice and consistency QA audit over ./touchpoints/ .

READ: every file in ./touchpoints/ , plus ./voice-guide.md and, if present,
./claims-proof-map.md .
DO NOT MODIFY any touchpoint, the voice guide, or the proof map. All inputs are
read-only.
WRITE: one new file ./qa/qa-matrix.md and nothing else.

For each touchpoint, build a matrix with: Touchpoint | Rule reference (section #) |
Issue | Evidence (exact quoted line) | Severity (critical/major/minor/note) |
Recommendation | Owner | Classification (rule violation / intentional adaptation /
documentation gap).

Rules:
- Every finding MUST cite a rule-reference section that actually exists in
  ./voice-guide.md . If you cannot cite a real section, do not file it as a violation
  — file it as a recommendation with a documentation-gap note.
- Classify something INTENTIONAL ADAPTATION only if you can cite a rule that permits
  it; otherwise it is a documentation gap.
- For claim-related issues, cross-reference ./claims-proof-map.md and cite it.
- Leave Owner as "[NAME]". Do not assign a person.
- Do not inflate severity; reserve "critical" for launch-blocking legal/accessibility/
  brand-integrity risk.

After the matrices, write a GAP NOTE section listing every rule found to be missing or
ambiguous.

STOP when ./qa/qa-matrix.md is written. Ask before running anything else (including any
contrast-check tooling).

VERIFY before finishing: confirm every rule-reference you cited resolves to a real
section in ./voice-guide.md, and report any finding you could not tie to a rule.
```
**Expected output:** one matrix file with rule-cited findings, honest documentation-gap entries where no rule applies, and a consolidated gap note. **What to inspect in the output:** spot-check that each cited section number actually exists in your voice guide — a citation to a section that is not there is the QA equivalent of a fabricated source — and confirm severity is not uniformly "critical." **If it goes wrong:** if findings cite rules that do not exist in your guide, the model is inventing authority; re-run with the "rule-reference MUST exist in voice-guide.md" line emphasized, and treat unverifiable citations as gaps. **CLAUDE.md / AGENTS.md note:** add — "QA findings must cite a real section of voice-guide.md; uncitable observations are documentation-gap notes, never violations. Severity is reserved, not inflated. Owner stays a placeholder for a human." — so the rule-citation discipline persists across audits.

---

### Exercise 5 — AI Validation Exercise
**What you're validating:** the QA matrix from Exercise 3 or 4. **Validation type:** rule-citation integrity and severity-proportionality check. **Risk level:** Medium-high — a QA pass that flattens intentional adaptation or inflates severity degrades the brand and trains the team to ignore the matrix. **Setup:** put the matrix beside the voice guide and the touchpoints.

**The Validation Task:** "Evaluate the AI output using this checklist. For each item record Pass / Fail / Cannot determine and explain."
```
Validation Checklist — Brand Consistency and Voice QA
□ Correctness: For each finding, does the cited rule section actually exist in the
  voice guide, and does the quoted evidence actually appear in the touchpoint?
□ Completeness: Were the accessibility checks (contrast, alt text, reading level)
  included, and were the obvious deviations across all three touchpoints caught?
□ Classification: Is every "intentional adaptation" backed by a PERMITTING rule? Any
  adaptation with no permitting citation is misclassified drift.
□ Severity proportionality: Is "critical" reserved for launch-blocking risk, or has
  the model inflated the matrix into noise?
□ Gap honesty: Are findings with no governing rule filed as documentation gaps /
  recommendations rather than dressed up as violations?
□ Failure mode check: fluent-but-wrong (a confident finding citing a rule that does
  not exist)? intentional adaptation flattened into a violation? severity inflation?
  missing ground truth (a rule asserted that the guide never states)?
```
**What to do with your findings:** any finding citing a nonexistent rule is pulled or re-filed as a gap; any flattened adaptation is restored; inflated severities are re-rated. The gap note feeds your brand-documentation backlog. **AI Use Disclosure prompt:** "AI compared the touchpoints against the voice guide and drafted the rule-cited matrix; a human verified every rule citation, judged each defect-versus-adaptation call, and set final severity. No rule citation in this matrix was accepted without confirming it exists in the guide." **Series connection:** the defining failure mode is the citation to a rule that does not exist — a fluent-but-wrong finding — and the tier is Tier 7 (Values), because deciding what counts as drift versus deliberate, fair adaptation is a judgment about what the brand should be, not just whether it followed a rule.

---
**Tags:** voice-qa, rule-citation, drift-vs-adaptation, severity-rating, accessibility-check, documentation-gap
