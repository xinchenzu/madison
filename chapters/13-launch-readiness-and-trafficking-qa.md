# Chapter 13 — Launch Readiness and Trafficking QA

The campaign is basically ready.

You have heard those words, or said them, and you know what they mean. They mean the assets exist somewhere. They mean the hard creative decisions have been made and the team is tired of looking at them. They mean the launch date is close enough that the energy has shifted from *is this right* to *can we get this out.* Basically ready is a state of mind, not a state of the campaign.

Here is the state of this particular campaign. The assets are in three folders — which three folders depends on who you ask. One UTM parameter is missing from the paid social links, which means a subset of traffic will arrive at the landing page without attribution data. The landing page screenshot in the approval record is from three weeks ago, before the headline changed. The proof claim — the specific evidence that supports the product statement in the banner ad — was updated yesterday to reflect a revised study, but the banner ad has not been updated, which means the public-facing claim and the internal proof are now misaligned. And nobody is certain who can give final approval, because the person who usually does it is traveling and the backup approver has not been formally designated.

This is not a catastrophe. None of these problems is large on its own. But each one is a gap between what the campaign appears to be and what it actually is, and gaps between appearance and reality in brand work have a way of becoming visible at the worst possible time — after launch, when the campaign is public and the errors are permanent.

The launch readiness pack exists to close those gaps before launch, when they are still cheap to fix.

---

Let me describe what is actually happening in the hours and days before a campaign launch, because it is worth understanding as a system before trying to improve it.

A campaign arriving at launch has been built by multiple people across multiple tools. The creative team owns the assets. The media team owns the placements and specs. The digital team owns the URLs and tracking. The legal or compliance team owns the claims and disclosures. The brand team owns the final visual and message review. The approver — whoever that is — owns the go decision. Each of these stakeholders has been working on their piece, and the pieces have not necessarily been compared to each other recently.

The brief that launched the campaign was written weeks or months ago. Since then, decisions have been made that are not fully reflected in all the artifacts. The proof claim changed. The CTA was revised. A channel was added late. A discount was updated. Each change made sense in its context and was communicated to some of the people who needed to know, but not necessarily all of them. The campaign is a distributed object, and its current state exists partially in files, partially in email threads, partially in people's heads.

Launch readiness work is the work of collapsing that distributed state into a single inspectable record. Not because the record itself launches the campaign — it doesn't — but because the act of building the record forces every gap to become visible before it becomes public.

---

There are six categories of thing that need to be checked before a campaign is ready to launch, and they have different owners and different failure modes. Understanding them as distinct is more useful than treating launch QA as a single undifferentiated list.

The first is **asset completeness and specification conformance**. Every deliverable that was supposed to be produced — every banner size, every video cut, every social format, every email variant — either exists and conforms to the platform's technical requirements, or it doesn't. This check is mostly mechanical: does the file exist, is it the right dimensions, is it under the file size limit, does it use the correct codec or format. The agent can run most of this check. The human needs to verify that the asset inventory itself is complete — that the list of required assets reflects the actual buy, not an earlier version of it.

The second is **URL integrity and tracking**. Every link in every asset points somewhere, and what it points to should be the current, correct version of the landing page, with the correct UTM parameters, and the landing page itself should be live, loading correctly, and matching the asset it receives traffic from in terms of offer, headline, and visual tone. This check catches an enormous number of launch problems in practice. Links break. Pages get updated without the campaign team being notified. UTM parameters get dropped when someone copies a URL manually. The check is boring and important.

The third is **claims and proof alignment**. Every factual claim in every public-facing asset should still be matched to the proof record that was approved. This check is easy to skip because it requires going back to the claims and proof documentation that was built during brief and strategy work — which feels like old work when you're focused on launch. It is not old work. It is the most consequential check on this list, because a misaligned claim is a legal and reputational exposure, and it is the one failure mode that cannot be corrected quietly after launch.

The fourth is **approvals and disclosures**. Every asset that requires a formal approval — legal sign-off on a claim, brand approval on a visual, compliance clearance on a disclosure — should have a recorded approval from a named person. Disclosures should be present, legible, and correctly placed. The approval record should reflect the current versions of the assets, not earlier drafts.

The fifth is **accessibility**. Images have alt text. Videos have captions. Color contrast meets the relevant standard. This check is often treated as optional until it becomes a problem. In practice it is both a compliance issue in some jurisdictions and a reach issue everywhere — inaccessible assets exclude audience members who would otherwise engage.

The sixth is **blocker identification and severity classification**. After running the first five checks, you will have a list of gaps. Some of them are critical — they will prevent the campaign from running correctly or expose the organization to legal or reputational risk. Some are significant — they represent quality problems that should ideally be fixed before launch. Some are minor — they are worth noting but do not affect the launch decision. The classification matters because it determines what the go/no-go decision is actually weighing. A launch with one critical blocker unresolved is a different thing from a launch with three minor ones.

![Six launch check categories: five parallel checks — asset completeness, URL and tracking, claims and proof, approvals and disclosures, accessibility — converging into a downstream blocker-classification node, with the claims-and-proof check weighted as the most consequential.](../images/13-launch-readiness-and-trafficking-qa-fig-01.png)
*Figure 13.1 — The six launch check categories*

---

| Check Category | Item | Required State | Current State | Evidence / Source | Blocker Severity | Owner | Resolved? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Asset completeness | Hero video, 16:9 | Final cut, captions burned in | Draft cut, no captions | Asset folder /v2, screenshot 6/12 | Significant | Video lead | No |
| URL integrity / tracking | Landing page link + UTM | Resolves to live page, UTM present | Resolves; UTM string missing campaign param | Link test log 6/13 | Significant | Media buyer | No |
| Claims and proof | "Clinically tested" claim | Claim matches approved proof map | Claim exceeds proof on file | Proof map v3.2; legal note 6/11 | Critical | Brand lead | No |
| Approvals / disclosures | Sponsored-content label | Disclosure present per policy | Disclosure present | Approval record 6/10 | Clear | Compliance | Yes |
| Accessibility | Image alt text | All images have alt text | Two images missing alt text | Accessibility scan 6/13 | Minor | Designer | No |

*The launch readiness pack records, for each check item, the gap between required and current state, where the evidence lives and when it was captured, how severe the gap is, who owns it, and whether it is resolved.*

The launch readiness pack is a table. Each row is a specific check item. The columns record what the item should look like, what it actually looks like right now, where the evidence for the current state lives, how severe a problem it represents, who owns the resolution, and whether it has been resolved.

The table is not designed to be comprehensive in the abstract. It is designed to be comprehensive for this campaign, this buy, these assets, this team. The items on the list should reflect what was actually supposed to be produced and what actually needs to be checked before launch. A table that is thorough in principle but doesn't reflect the actual campaign is a conformance artifact, not a readiness artifact.

![Anatomy of one launch-readiness-pack row as eight aligned cells, with the required-state and current-state cells bracketed together to expose the gap, a date-stamp glyph on the evidence cell, and a four-state severity indicator.](../images/13-launch-readiness-and-trafficking-qa-fig-02.png)
*Figure 13.2 — Launch readiness pack row anatomy*

---

I want to focus on the go/no-go decision specifically, because it is the place where the most consequential human judgment happens and where the temptation to defer is strongest.

The go decision is not a technical determination. It is not the answer to the question *are all the boxes checked?* It is the answer to the question *is the remaining risk acceptable for launch?* Those are different questions. All the boxes might be checked and the campaign might still not be ready — if, for example, the approval for a significant claim modification came in at eleven at night and the approver was clearly responding to time pressure rather than reviewing carefully. Or some boxes might not be checked — the landing page has a minor formatting issue on one browser — and the campaign might be ready anyway, because the unchecked item is genuinely minor and the launch window is narrow.

The go decision belongs to a named person. Not the team. Not the process. One person whose name goes in the record, who has reviewed the blocker list and its severity classifications, and who has accepted the responsibility of saying that the campaign is ready to be public.

![Go/no-go decision flow: a classified blocker list feeds a single named approver asking whether remaining risk is acceptable, branching to a recorded go, a hold, or a non-acceptable critical-blocker terminus for a misaligned claim or unidentified approver.](../images/13-launch-readiness-and-trafficking-qa-fig-03.png)
*Figure 13.3 — The go/no-go decision gate*

This sounds formal, and in small organizations it often happens informally — a senior person looks at the status, asks a couple of questions, and says go. That is fine. What Madison requires is not ceremony. It is traceability. The go decision should be recorded: who made it, when, and what the blocker status was at the time. If something goes wrong after launch, that record is what lets the organization understand what was known and accepted, rather than what was missed.

An approver who is not identified before launch is a critical blocker. Not because the campaign can't technically launch without one — it can — but because a campaign without a named approver has no one accountable for the risk it carries. That accountability gap is itself a problem, independent of whether anything goes wrong.

---

There is a version of launch QA that is theater. The checklist exists, the boxes get checked, the record is filed, and the campaign launches with the same gaps it had before the process started — because the process was run quickly, by someone who didn't have the access or authority to actually verify the items, under time pressure that made thorough checking feel like obstruction.

I want to name this directly because it is the most common failure mode in launch readiness work, and it produces an outcome that is worse than having no process: a conformance record that implies the checks were done when they weren't, which makes the post-launch forensics harder and creates a false impression of due diligence.

The solution is not more detailed checklists. It is clarity about who owns each check, what evidence they are actually looking at, and whether they have the access and authority to verify the item or only to confirm that someone else said it was fine.

Each check item should have a named owner and a specific evidence requirement. The URL check means *someone opened these links today and confirmed they resolve correctly* — not *someone said the links were set up correctly last week.* The approval check means *the approval record shows the approver reviewed the current version of the asset* — not *we received approval at some point during the project.* The claims check means *someone compared the current banner copy to the current proof document today* — not *these were aligned at the time of the brief.*

Evidence has dates. A screenshot taken three weeks ago is not evidence that the landing page is correct today. An approval email from last month is not evidence that the current version of the asset was approved. The launch readiness pack should reflect the state of the campaign at the moment of launch, not the state of the campaign at some earlier point when things seemed fine.

---

There is a specific failure that happens at the intersection of the claims check and the timing pressure of launch, and it is worth addressing directly because it is genuinely dangerous.

Proof claims change. Studies get updated. Regulatory language gets revised. A competitive comparison that was accurate in Q1 may not be accurate in Q3. The campaign team knows this in the abstract, but in the final days before launch the focus is on getting out the door, not on re-reviewing claims that were approved months ago.

The claims check exists to catch this. Every factual claim in every public-facing asset — not just the headline, every claim, including the small print — should be compared to the current version of the proof record. If the proof record has been updated since the asset was created, that is a flag. It does not necessarily mean the asset is wrong, but it means someone needs to look at both the asset and the updated proof and confirm they are still aligned.

If they are not aligned, that is a critical blocker. It does not matter how close launch is. A public-facing claim that the organization cannot support is not a launch risk it can choose to accept — it is a compliance and legal exposure that requires resolution before the asset becomes public. The person who makes the go decision cannot accept a misaligned proof claim as an acceptable remaining risk, because it is not a risk within their authority to accept.

---

The practical output of this chapter is a launch readiness pack for one campaign or touchpoint: a complete table of check items across all six categories, with evidence, severity, owners, and resolution status; a blocker list that distinguishes critical from significant from minor; and a go/no-go status with a named approver and a timestamp.

If blockers remain at the time the pack is reviewed, name them. If the go decision was made with known significant blockers, record what they were and why the decision was made anyway. That record is not an admission of failure — it is an accurate account of the decision and its conditions, which is exactly what is needed if the campaign needs to be investigated later.

A launch with a complete, honest readiness pack — including its unresolved items — is more defensible and more learnable than a launch with a clean checklist that didn't reflect reality.

The campaign that launched well creates the conditions for useful reporting. The next chapter turns live data into a performance readout — but only if the measurement infrastructure was set up correctly before launch. The tracking check was not paperwork. It was the beginning of the measurement record.

---

<!-- LLM EXERCISE -->
**Exercise for further inquiry.** Take a campaign that has already launched — one you were involved in or have access to the records of. Reconstruct what a launch readiness pack would have looked like at the moment of go. Which items would have been Clear? Which would have been blockers? Were there gaps between what the approval record showed and what the campaign's actual state was at launch? If something went wrong after launch — a broken link, a claim that needed to be updated, a tracking gap — trace it back to the readiness state at the time of launch. The exercise is diagnostic, not punitive: the goal is to understand which category of check the gap fell into and what would have caught it.

---

## Chapter 13 Exercises: Launch Readiness and Trafficking QA
**Project:** Your Own Brand Intelligence System
**This chapter adds:** a launch-readiness and trafficking QA checklist that runs all six check categories against the actual buy and routes the result through a single named human go/no-go gate.

---

### Exercise 1 — When to Use AI
**The judgment:**
- Drafting the launch readiness pack table from a scattered set of asset folders, link lists, and approval emails — *Why AI works here:* it is structured extraction and reformatting into a fixed schema, a mechanical organizing task where the source artifacts already exist and you can verify each row against them.
- Running the asset-completeness and spec-conformance check — dimensions, file sizes, format/codec, naming — across a deliverable list — *Why AI works here:* this is rule-application against published platform specs, a deterministic comparison task with a checkable right answer.
- Generating the first-pass severity classification (critical / significant / minor) for each detected gap — *Why AI works here:* it is pattern-matching against stated criteria that surfaces candidates fast, and a human re-rates each one, so the task is proposal generation, not final judgment.

**The tell:** You know you are using AI appropriately when you can evaluate the output — when you have independent criteria to judge whether it is correct, complete, and fit for purpose.

---

### Exercise 2 — When NOT to Use AI
**The judgment:**
- Confirming that the proof claim in the live banner still matches the current approved proof record — *Why AI fails here:* missing ground truth. The agent does not have authoritative access to which proof version is current, and a fluent "claim matches proof" assertion on a misaligned claim is the one launch error that cannot be corrected quietly after it goes public.
- Verifying that each link resolves to the live, correct landing page today — *Why AI fails here:* source adequacy. The agent cannot actually open the URLs in a real browser session and confirm the page state at the moment of launch; a confident "links verified" with no live test is exactly the fluent-but-wrong failure the chapter warns about.
- Making the go/no-go decision and putting a name on it — *Why AI fails here:* accountability. The go decision is the acceptance of remaining risk by a person who is responsible for the consequences; no system can carry that, and a misaligned claim is not a risk within anyone's authority to accept.

**The tell:** You know you have crossed the line when you are using AI output as your reason for a conclusion rather than as a tool for reaching one.
**Series connection:** Tier 7 (Accountability) — the go decision and the proof-claim confirmation both require a named person who answers for the risk; the chapter is explicit that an unidentified approver is itself a critical blocker, which is a pure accountability failure, not a capability one.

---

### Exercise 3 — LLM Exercise
**What you're building this chapter:** the launch readiness pack — a complete check table across all six categories, a severity-classified blocker list, and a go/no-go status field. **Tool:** Claude (claude.ai chat) — a single launch is a bounded, one-pass artifact that does not need persistent project memory.
**The Prompt:**
```
You are helping me build a launch readiness pack for a single brand campaign before it goes public. I will give you the campaign facts; you will produce one inspectable table and a blocker list.

Campaign: [FILL IN campaign name and one-line description]
Channels and placements in this buy: [FILL IN]
Deliverables that were supposed to be produced: [FILL IN list — banner sizes, video cuts, social formats, email variants]
Landing page URL(s) and required UTM parameters: [FILL IN]
Key public-facing claims and where the approved proof lives: [FILL IN]
Required approvals and who normally signs them: [FILL IN]

Build the launch readiness pack as a table with these columns: Check Category | Item | Required State | Current State | Evidence / Source | Blocker Severity | Owner | Resolved?

Run all six check categories, one or more rows each:
1. Asset completeness and specification conformance
2. URL integrity and tracking
3. Claims and proof alignment
4. Approvals and disclosures
5. Accessibility (alt text, captions, contrast)
6. Blocker identification and severity classification

Rules:
- For any row where you do not have the information to determine the Current State, write "UNVERIFIED — requires human check" rather than guessing. Do not assert a link resolves or a claim matches proof unless I have given you evidence for it.
- Mark each blocker as Critical, Significant, or Minor, and treat any claims-and-proof misalignment as Critical by default.
- Note that evidence has dates: flag any evidence I gave you that is more than a week old as stale and needing re-verification.

Then output a separate blocker list grouped by severity, and a final Go/No-Go status line with a blank named-approver field and timestamp field for me to fill in. Do not recommend "go" yourself.
```
**What this produces:** a populated six-category readiness table, a severity-grouped blocker list that distinguishes critical from significant from minor, and an unfilled go/no-go gate that you (a named person) complete. **How to adapt this prompt:** *For your own brand:* replace every [FILL IN] with your real buy, then actually open the links and compare claims to proof before marking any UNVERIFIED row as resolved. *For ChatGPT / Gemini:* paste the same block; both handle the table well, but watch for them silently filling UNVERIFIED rows with plausible states — re-read the rules line if they do. *For a Claude Project:* if you run many launches, drop your response policy and proof-record index into Project knowledge so the claims check has a stable reference, but keep the per-launch facts in the chat. **Connection to previous chapters:** the claims-and-proof check reaches back to the claim table and proof map from the brief and strategy chapters — launch is where that earlier work is re-verified, not re-invented. **Preview of next chapter:** the URL-and-tracking check you run here is the beginning of the measurement record; Chapter 14 turns the data those correctly-tagged links collect into a performance report.

---

### Exercise 4 — CLI Exercise
**What you're building this chapter:** an automated asset-and-spec conformance pass plus a stale-evidence scan over a launch folder, with the human checks left explicitly unresolved. **Tool:** Claude Code · **Skill level:** Intermediate
**Setup:**
- [ ] A local folder containing the campaign's launch assets and a plain-text or markdown list of required deliverables and specs.
- [ ] A file (CSV or markdown) listing each public-facing claim and the path to its approved proof.
- [ ] Claude Code open in that folder with read access confirmed.
**The Task:**
```
Read the deliverables/spec list and the claims-and-proof file in this folder. Then scan the asset files present in the folder.

Produce a file called launch-readiness-pack.md containing the eight-column readiness table described to you, covering all six check categories.

Scope:
- READ: every asset file's name, dimensions/format where detectable, the spec list, and the claims-and-proof file.
- WRITE: only launch-readiness-pack.md (create it; do not overwrite anything else).
- LEAVE ALONE: all asset files and the source lists — do not rename, move, modify, or delete anything.

For the asset-completeness rows, compare actual files against the required list and report missing or non-conforming deliverables.
For the claims-and-proof rows, list each claim and mark it "REQUIRES HUMAN VERIFICATION — agent cannot confirm proof currency."
For URL integrity rows, list each link found and mark it "REQUIRES LIVE BROWSER CHECK — agent did not open it."
For any evidence reference older than 7 days from today, flag it as STALE.

Stop conditions: stop after writing the file. Do not attempt to open URLs, do not edit assets, and do not mark any human-verification row as resolved.

Verification step: after writing, print a summary count of rows by severity and a list of every row marked REQUIRES HUMAN VERIFICATION or STALE.
```
**Expected output:** a `launch-readiness-pack.md` with the full table, plus a printed summary of severity counts and a list of every row that still needs a human. **What to inspect in the output:** whether the asset-completeness check actually matched files to the required list (not just listed files), and whether every claims and URL row is honestly marked as needing a human rather than silently asserted as fine. **If it goes wrong:** if the agent marks claim or link rows as verified, it has overstepped its evidence — re-run and reinforce that it cannot open URLs or confirm proof currency; if it edits an asset, restore from your source folder and re-run with the LEAVE ALONE scope quoted back. **CLAUDE.md / AGENTS.md note:** add a standing rule: "Launch readiness packs: the agent may run asset/spec conformance and stale-evidence scans; it may never mark claims-and-proof, URL-resolution, or approval rows as resolved, and may never make a go decision."

---

### Exercise 5 — AI Validation Exercise
**What you're validating:** an AI-generated launch readiness pack — specifically whether it can be trusted to inform a go/no-go decision. **Validation type:** verification of a decision-support artifact against ground truth and scope. **Risk level:** High — a wrong "ready" assessment on a claim or link becomes a permanent, public error. **Setup:** take the readiness pack from Exercise 3 or 4, open it next to the actual assets, links, and proof records, and work through every row.
**The Validation Task:** "Evaluate the AI output using this checklist. For each item record Pass / Fail / Cannot determine and explain."
```
Validation Checklist — Launch Readiness and Trafficking QA
□ Correctness: For each asset-completeness row, does the stated Current State match the actual file (dimensions, format, presence)?
□ Completeness: Are all six check categories present, and does the asset list reflect the ACTUAL buy rather than an earlier brief version?
□ Scope: Does every claims-and-proof, URL, and approval row defer to a human rather than asserting a verdict the agent could not earn?
□ Severity calibration: Is every claims-and-proof misalignment rated Critical, and are severities consistent with the stated criteria?
□ Evidence dating: Is every piece of evidence dated, and is anything older than the launch window flagged as stale?
□ Failure mode check: fluent-but-wrong? (a "links verified / claim matches proof" assertion with no live check or no proof comparison?) missing ground truth? (did the agent invent a Current State it had no source for?)
```
**What to do with your findings:** every Fail or Cannot determine on a Critical or claims/URL/approval row is itself a launch blocker — resolve it with a real human check before the go decision; record the corrected pack and note which rows the agent got wrong so you can tighten the prompt next time. **AI Use Disclosure prompt:** "The launch readiness pack was drafted by [tool] from the campaign's asset list, link list, and claims file; the agent ran asset/spec conformance and flagged stale evidence. All claims-and-proof, URL-resolution, and approval rows were verified by a named human, and the go/no-go decision was made and signed by [name], not the AI." **Series connection:** the failure mode here is fluent-but-wrong on missing ground truth, and it sits at Tier 7 — the validation exists precisely because the agent cannot carry the accountability for a go decision, only inform it.

---
**Tags:** launch-readiness, trafficking-qa, go-no-go-gate, claims-proof-alignment, human-accountability, brand-intelligence-system
