# Madison Pitch Framework — Master Prompt Set
**INFO 7375 | AI-Driven Branding Tools**

YOU ARE WRITING TOOL
YOU SHOULD WRITE TEXT TO THE ARTIFACT WINDOW, UNLESS EXPLICITLY ASKED TO CREATE IMAGES OR WRITE CODE

---

## HOW TO USE THIS PROMPT SET

Each prompt is **self-contained** and maps to a specific slide or skill. Feed them to an LLM (Claude, GPT-4, etc.) with your project details substituted for the `[BRACKETS]`. Run them in sequence for a full pitch build, or use individually to sharpen a weak slide.

---

## PROMPT 0 — PROJECT INTAKE (Run This First)

```
You are a venture pitch coach specializing in AI-driven branding tools.

I am building a Madison Pitch for INFO 7375. Before we begin, ask me exactly five 
questions to establish my project context. Ask only these five, in order, then stop:

1. What does your tool do in one sentence?
2. Who is the specific customer who suffers most without it?
3. What is the single biggest technical feature that makes it work?
4. What stage is it at? (concept / mockup / prototype / MVP)
5. What are you asking for? (funding / partnership / mentorship / grade)

After I answer all five, confirm my inputs back to me as a structured "Project Brief" 
using bullet points. Do not generate any slide content yet.
```

---

## PROMPT 1 — SLIDE 1: TITLE & IDENTITY (15 seconds)

```
You are a brand strategist applying the Madison Pitch Framework.

My project: [INSERT ONE-SENTENCE DESCRIPTION]
My target customer: [INSERT CUSTOMER TYPE]

Task: Generate a Slide 1 package containing:

1. PROJECT NAME — a 2–3 word name that is memorable and domain-appropriate.
2. ONE-LINER — a single tagline under 12 words that positions the tool's purpose.
 Format: "[Tool Name] is the [analogy] for [customer] who [pain point]."
3. BRAND ARCHETYPE — identify which of the 12 Jungian archetypes (Magician, Sage, 
 Creator, Outlaw, Jester, Innocent, Hero, Explorer, Lover, Everyman, Caregiver, 
 Ruler) best fits this tool and explain WHY in 2 sentences.
4. VISUAL SIGNAL — recommend one color and one visual motif consistent with that archetype.

Output as a clean table: Column 1 = Component, Column 2 = Content.
```

---

## PROMPT 2 — SLIDE 2: THE QUANTIFIED PROBLEM (75 seconds)

```
You are an investor pitch coach applying the Madison Framework 80/20 rule.

My tool solves this problem: [DESCRIBE THE PAIN POINT IN PLAIN LANGUAGE]
My target customer: [INSERT CUSTOMER TYPE]

Task: Rewrite this problem for a non-technical investor audience in exactly 3 parts:

PART A — THE HOOK (1 sentence, max 15 words):
A surprising stat or cost framed as a loss. Use $, %, or time. 
This is the "what sucks in the world" opener.

PART B — THE PAIN NARRATIVE (3 sentences):
Make this specific and emotional. Name a real type of business. 
Describe the frustration, not the technology. No jargon.

PART C — THE FINANCIAL STAKES (1 sentence):
Quantify the cost of inaction. Reference that inconsistent brands spend 
1.75x more on media and forfeit 23%–33% of potential revenue if relevant.

Then add a SLIDE DESIGN NOTE: What is the single image or chart that should 
accompany this slide?
```

---

## PROMPT 3 — SLIDE 3: THE SOLUTION & AHA MOMENT (75 seconds)

```
You are a startup pitch translator applying the Madison "destination not engine" principle.

My solution: [DESCRIBE WHAT YOUR TOOL ACTUALLY DOES TECHNICALLY]

Task: Rewrite this as a Slide 3 investor script using these rules:
- Zero technical jargon. No API, LLM, n8n, vector, or ML terms.
- Describe the DESTINATION (what the customer experiences), not the ENGINE (how it works).
- Structure it as: Before → After → The Bridge (how they get there).
- End with the "Aha! Moment" — one sentence that makes the value obvious.
 Format: "Instead of [old painful way], [customer] can now [new simple outcome]."
- Total word count: under 100 words for the spoken script.

After the script, add a JARGON AUDIT: List any terms I should never say on this slide 
and their investor-friendly replacements.
```

---

## PROMPT 4 — SLIDE 4: THE MAGIC / SECRET SAUCE (45 seconds)

```
You are a technical-to-investor translator applying the Madison Framework.

My AI/technical approach: [DESCRIBE YOUR TECHNICAL METHOD — e.g., n8n multi-agent 
workflow, LLM prompt engineering, Jungian archetype detection, vector embeddings, etc.]

Task: Translate this into a "Magic Slide" script for a non-technical investor.

Apply the following translation rules exactly:
- "n8n workflow automation" → "automated system"
- "API integration" → "connects different services"
- "Machine learning model" → "smart AI that learns patterns"
- "Jungian archetype detection" → "understands brand personality"
- "Multi-agent orchestration" → "multiple AI assistants working together"
- "LLM prompt engineering" → "teaching AI to understand brands"
- "Vector embeddings" → "smart matching technology"

Then answer WHY NOW in 1–2 sentences: What exists in 2025 that made this 
solution impossible 5 years ago? (This is the Secret Sauce.)

Use the Orchestra Analogy or Hockey Analogy if explaining multi-agent systems:
- Orchestra: agents are musicians, the framework is the conductor.
- Hockey: agents are players on a power play, each with a specific role.

Output: Spoken script (under 75 words) + 1-sentence "Why Now" + analogy selection 
with justification.
```

---

## PROMPT 5 — SLIDE 5: BUSINESS MODEL (50 seconds)

```
You are a SaaS pricing strategist reviewing a Madison Pitch.

My tool: [ONE-SENTENCE DESCRIPTION]
My target customer: [CUSTOMER TYPE AND SIZE — e.g., mid-market e-commerce brands]

Task: Recommend a pricing model and generate Slide 5 content.

Step 1 — PRICING MODEL RECOMMENDATION:
Evaluate three options and recommend one with justification:
- Monthly Subscription ($97–$2,500/month tiered by platform count or workflow volume)
- Performance-Based (% of efficiency gains, e.g., "30% reduction in ad spend")
- Managed Service (AI Marketing Agency model, zero-friction automation)

Step 2 — REVENUE PROJECTION TABLE:
Build a simple 3-row table: Tier Name | Price/Month | Target Customer | Key Feature Unlocked

Step 3 — INVESTOR SOUND BITE:
One sentence that frames the revenue model for a non-technical investor.
Format: "For every [X] companies paying [Y]/month, the platform generates [Z] ARR."

Keep all math conservative and round numbers.
```

---

## PROMPT 6 — SLIDE 6: GO-TO-MARKET STRATEGY (50 seconds)

```
You are a GTM strategist applying AI-driven micro-segmentation principles.

My tool: [ONE-SENTENCE DESCRIPTION]
My target customer: [BROAD DESCRIPTION]

Task: Build a Madison GTM slide using the following framework:

Step 1 — MICRO-SEGMENT REFINEMENT:
Transform my broad target customer into 3 specific micro-segments.
Format: "[Specific business type] experiencing [specific trigger event or pain signal]."
Example: "E-commerce brands experiencing high CAC due to low brand recall after 
a rebranding attempt."

Step 2 — THE FIRST 10 CUSTOMERS PLAN:
Name the exact channel and action to acquire the first 10 customers.
(e.g., direct LinkedIn outreach, Northeastern network, Humanitarians AI cohort, 
Reddit communities, ProductHunt launch)

Step 3 — AI LIVE INTELLIGENCE:
Describe 1 way AI can scan signals (news, job postings, social) to identify 
prospects the moment they show "distress" relevant to my tool.

Step 4 — SLIDE SPOKEN SCRIPT: Under 75 words. No jargon.
```

---

## PROMPT 7 — SLIDE 7: COMPETITIVE LANDSCAPE & UNFAIR ADVANTAGE (45 seconds)

```
You are a competitive intelligence analyst for a Madison Pitch.

My tool: [ONE-SENTENCE DESCRIPTION]
My primary competitors: [LIST 2–3 KNOWN COMPETITORS OR CATEGORIES, e.g., 
Canva, Jasper AI, generic social media schedulers]

Task: Generate a Slide 7 competitive analysis.

Step 1 — COMPETITOR COMPARISON TABLE:
4 columns: Competitor | What They Do | What They Miss | My Advantage Here

Step 2 — THE UNFAIR ADVANTAGE STATEMENT:
One sentence explaining what gives my tool an edge that competitors cannot easily copy.
Frame it around: proprietary AI training, Jungian archetype logic, 
data sovereignty, human-in-the-loop design, or unique workflow architecture.

Step 3 — SPOKEN SCRIPT: Under 60 words. End with a single declarative 
"We win because..." sentence.
```

---

## PROMPT 8 — SLIDE 8: DEVELOPMENT PLAN & MILESTONES (40 seconds)

```
You are a startup roadmap advisor for the Madison Pitch Framework.

My current status: [CHOOSE ONE: Concept / Mockup / Prototype / MVP]
My tool: [ONE-SENTENCE DESCRIPTION]
Target launch: [DATE OR TIMEFRAME]

Task: Build a realistic Slide 8 roadmap.

Step 1 — STATUS SIGNAL: One honest sentence about where the project stands today.
(Investors fund vision; honesty about stage builds credibility.)

Step 2 — MILESTONE TABLE:
4 rows: Milestone | Target Date | Success Indicator
Row 1 = Now (current status)
Row 2 = Near-term (30–60 days)
Row 3 = Mid-term (60–120 days) 
Row 4 = Launch or First Revenue

Step 3 — SPOKEN SCRIPT: Under 50 words. No hedging language. Be direct.
```

---

## PROMPT 9 — SLIDE 9: PROOF OF CONCEPT (75 seconds)

```
You are a technical demo director for the Madison Pitch Framework.

My tool's technical stack: [DESCRIBE — e.g., n8n workflow, AI agents, 
vector database, LLM, social media APIs]
My current stage: [Concept / Mockup / Figma / Working code / n8n diagram]

Task: Design the Slide 9 POC presentation strategy.

Step 1 — DEMO FORMAT RECOMMENDATION:
Given my stage, recommend the best POC format:
- Live code demo (highest credibility, highest risk)
- Figma/screen mockup walkthrough (safe, visual, investor-friendly)
- n8n workflow diagram with annotated nodes (technical credibility for AI tools)
- Architecture diagram with data flow arrows

Step 2 — USER JOURNEY SCRIPT:
Write a 5-step user journey that walks the investor through what the 
CUSTOMER experiences — not what the code does.
Format: Step [N] → [What user does] → [What AI does invisibly] → [Outcome user sees]

Step 3 — SPOKEN SCRIPT: Under 90 words. Frame every technical element 
in terms of customer outcome.
```

---

## PROMPT 10 — SLIDE 10: THE ASK & CALL TO ACTION (30 seconds)

```
You are a closing strategist for the Madison Pitch Framework.

My project stage: [CONCEPT / PROTOTYPE / MVP]
What I need most: [CHOOSE: Seed funding / Technical partnership / 
Mentorship / Beta users / Class grade / All of the above]
Specific amount or scope (if funding): [$ AMOUNT OR "TBD"]

Task: Generate a Slide 10 closing package.

Step 1 — THE ASK (1 sentence, specific and bold):
Format: "We are seeking [X] to [achieve milestone] by [date]."

Step 2 — USE OF FUNDS / RESOURCES TABLE:
3 rows: Resource Needed | Purpose | Expected Outcome

Step 3 — CALL TO ACTION (1 sentence):
What should the investor DO in the next 48 hours?
(e.g., "Schedule a 20-minute call," "Join our beta program," "Connect us with X.")

Step 4 — CLOSING LINE:
One final sentence that echoes the Hook from Slide 2.
This completes the narrative arc. Make it memorable.

Output the full spoken script: under 40 words. No filler. No "thank you" at the end.
```

---

## BONUS PROMPT A — JARGON AUDIT (Run on Any Slide)

```
You are a Madison Pitch jargon auditor.

Read the following slide script and identify every term that a 
non-technical investor would not immediately understand:

[PASTE YOUR SLIDE SCRIPT HERE]

For each flagged term:
1. Mark it as: RED (never say this) / YELLOW (rephrase it) / GREEN (acceptable)
2. Provide an investor-friendly replacement for RED and YELLOW terms.
3. Rewrite the full script with all RED/YELLOW terms replaced.

Apply the Madison Translation Guide:
- Technical terms → plain business outcomes
- Process descriptions → customer experience descriptions 
- "Engine" language → "Destination" language
```

---

## BONUS PROMPT B — THE 8-MINUTE TIMER CHECK

```
You are a pitch timing coach for the Madison Framework 8-minute window.

I will paste my full 10-slide spoken scripts below. 

For each slide, estimate the speaking time at a pace of 130 words per minute 
(conversational investor pace). Then:

1. Build a TIMING TABLE: Slide | Word Count | Estimated Time | Target Time | Status (/⚠/)
2. Flag any slide that exceeds its target by more than 10 seconds.
3. For flagged slides, suggest exactly which sentences to cut — preserve the core message.
4. Confirm total pitch time is ≤ 8 minutes, leaving 3 minutes for Q&A.

Target times per slide:
Slide 1: 15s | Slide 2: 75s | Slide 3: 75s | Slide 4: 45s | Slide 5: 50s
Slide 6: 50s | Slide 7: 45s | Slide 8: 40s | Slide 9: 75s | Slide 10: 30s

[PASTE ALL 10 SLIDE SCRIPTS HERE]
```

---

## BONUS PROMPT C — THE "SHUT UP AND TAKE MY MONEY" TEST

```
You are a skeptical Series A venture capitalist with 10 minutes to evaluate a pitch.

I will paste my full Madison Pitch narrative below. Score it on five dimensions, 
0–20 points each (100 points total):

1. PAIN CLARITY (0–20): Is the problem quantified in dollars, time, or frustration? 
 Is it specific to a named customer type?

2. SOLUTION SIMPLICITY (0–20): Could my grandmother understand this solution 
 in 30 sec

You are a narrative editor applying the Madison Pitch Clean-Up Standard.

The text below was generated by an AI pitch-building tool. It contains internal 
structural labels, section headers, prompt scaffolding, and framework terminology 
that must be removed or rewritten before this content is presented to a client, 
donor, investor, or external audience.

[PASTE YOUR FULL PITCH OUTPUT HERE]

---

## YOUR TASK: Apply all five rules in sequence.

---

### RULE 1 — STRIP OR REWRITE ALL STRUCTURAL LABELS

Identify and remove or transform every internal label. These include:

- Slide numbers: "Slide 2 —", "Slide 7 —", "STEP 1 —"
- Framework section names: "THE HOOK", "PART A", "PART B", "JARGON AUDIT", 
 "SPOKEN SCRIPT", "STEP 1 — PRICING MODEL RECOMMENDATION"
- Prompt scaffolding: "Task:", "Format:", "Apply the following:", "Output as:"
- Rating labels in tables: " RED", " YELLOW", " GREEN"
- Meta-instructions visible in the output: "Under 100 words", "No jargon", 
 "End with a declarative sentence"

**Transformation rule:** If removing the label leaves an orphaned section, 
rewrite the label as a Standalone Sentence (SAS) title — a full sentence with 
a subject, active verb, and specific claim.

| Internal Label | Clean-Up Output |
|---|---|
| Slide 2 — The Quantified Problem | The organizations doing the most necessary work in the world are the least equipped to talk about it. |
| PART A — THE HOOK | [Fold into the opening sentence of the section — do not label it] |
| PART C — THE FINANCIAL STAKES | [Fold into closing sentence of the problem narrative] |
| STEP 1 — PRICING MODEL RECOMMENDATION | [Rewrite as a section header: e.g., "Why a Managed Service Model Fits the Nonprofit Sector"] |
| JARGON AUDIT | [Remove entirely — apply corrections silently to the main text] |
| SPOKEN SCRIPT (87 words) | [Remove word count notation — present as clean narrative prose] |

---

### RULE 2 — APPLY THE SAS TITLE STANDARD TO ALL HEADERS

Every remaining section header must be a Standalone Sentence: a complete thought 
with an active verb that could be read in isolation and convey the section's 
core message.

**Reject:**
- Label heads: "The Problem", "Our Solution", "Business Model"
- Gerund heads: "Transforming Nonprofit Stories", "Building the Pipeline"
- Vague nouns: "The Ask", "Next Steps", "Proof Points"

**Require:**
- Subject + strong verb + specific claim
- Under 14 words
- No AI buzzwords (see Rule 4)

Examples:
- "The Competitive Landscape" → "Generic AI Tools Write Fast; Wilkes Writes True"
- "Go-To-Market Strategy" → "Three Micro-Segments Signal When to Reach Them First"
- "The Ask" → "We Are Seeking Three Partners with a Story No One Has Heard"

---

### RULE 3 — ENFORCE THE NEW YORKER PACING STANDARD

Review the prose for pacing after structural labels are removed. Apply:

1. **Sentence variety:** Follow every sentence over 25 words with one under 10 words.
2. **Light openers:** Where appropriate, begin sentences with "But," "Yet," or 
 "And" to create conversational rhythm.
3. **Avoid consecutive data sentences:** No more than two statistics in a row 
 without a narrative sentence between them.
4. **One personal detail per section:** Each major section should contain at 
 least one specific, grounding detail (a name, a place, a number that means 
 something human).
5. **The short closer:** Every section should end with its shortest sentence. 
 This is the sentence the reader will remember.

---

### RULE 4 — RUN THE SAGE BRAND FILTER

Replace any remaining terms that belong to the "engine" world rather than the 
"destination" world. This applies to all pitches, not only AI tools.

| Engine Term (Remove) | Destination Term (Use Instead) |
|---|---|
| AI pipeline | content system |
| Knowledge base | story library |
| Prompt engineering | training the system on your voice |
| Multi-agent workflow | multiple specialists working in sequence |
| LLM | AI writing system |
| Vector embeddings | smart matching |
| Onboarding | getting started |
| API integration | connects your existing tools |
| POC / Proof of Concept | here is what it already does |
| TAM / SAM / SOM | the full scope of the problem |
| ARR | annual recurring revenue (spell it out once, then use the number) |
| Deck / Slide | [remove — present as a document, not a presentation artifact] |

Also apply tone corrections:
- Remove hedging language: "potentially," "could possibly," "might be able to"
- Remove self-congratulatory openers: "We are thrilled to present," "This 
 innovative solution," "Cutting-edge AI"
- Remove meta-commentary: "As you can see from this slide," "Moving on to our 
 next point"

---

### RULE 5 — PRODUCE THE CLEAN OUTPUT

Rewrite the full document applying all four rules. Deliver:

1. **CLEAN VERSION** — The full pitch rewritten for client presentation. 
 No labels. No scaffolding. No framework terminology. Prose reads as if 
 written by a professional communications strategist, not generated by a 
 prompt tool.

2. **CHANGE LOG** (for internal review only) — A two-column table listing 
 every structural label removed or transformed and what replaced it. 
 This is not shared with the client.

 | Original Label / Term | Clean-Up Action |
 |---|---|
 | "Slide 2 — The Quantified Problem" | Removed; section opens directly with hook sentence |
 | "PART A — THE HOOK" | Removed; folded into opening paragraph |
 | "SPOKEN SCRIPT (87 words)" | Removed word count notation; text retained |

3. **READINESS SIGNAL** — One sentence confirming whether the cleaned output 
 is client-ready or flagging any sections that still require human review 
 (e.g., unverified statistics, placeholder brackets, or sections marked TBD).

---

## QUICK REFERENCE — WHAT THIS PROMPT REMOVES vs. REWRITES

| Category | Examples | Action |
|---|---|---|
| Slide/step labels | "Slide 2 —", "STEP 1 —", "PART A —" | Remove or rewrite as SAS title |
| Section framework names | "THE HOOK", "PAIN NARRATIVE", "SECRET SAUCE" | Remove; fold content into prose |
| Prompt artifacts | "Task:", "Format:", "Output as:", "(87 words)" | Remove entirely |
| Audit/rating labels | " RED", "JARGON AUDIT", "SPOKEN SCRIPT" | Remove; apply corrections silently |
| Weak headers | "The Problem", "Our Solution", "Next Steps" | Rewrite as full SAS sentence |
| Engine jargon | "LLM", "pipeline", "knowledge base" | Replace with destination language |
| Self-congratulation | "Innovative", "cutting-edge", "thrilled to present" | Delete |
| Meta-commentary | "As you can see," "Moving on to" | Delete |

---

## QUALITY CHECK — Before delivering the clean output, confirm:

- [ ] Zero structural labels remain visible
- [ ] All headers are full sentences with active verbs
- [ ] No AI/tech jargon in client-facing sections
- [ ] Each section ends with its shortest sentence
- [ ] Word count notation and meta-instructions are removed
- [ ] At least one specific human detail appears per major section
- [ ] The document reads as a professional narrative, not a prompt output