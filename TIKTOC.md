# Madison Branding and AI
## Tik TOC Architecture

**Working title:** Madison Branding and AI: Agentic Brand Systems for Creative Engineers  
**Repository:** `books/madison`  
**Book track:** `chapters/branding-and-ai/`  
**Source adaptation:** Madison agentic marketing repository plus the generic Claude agentic AI coding/supervision model in `pantry/claude-agentic-ai.md`  
**Document:** Tik TOC silent intake and chapter architecture  
**Status:** Architecture draft for manuscript alignment, chapter repair, and production planning  

---

## 1. Book Concept and Thesis

### Concept Summary

This book teaches technically capable students, founders, marketers, and creative professionals how to build brand systems in an AI-mediated world. It uses the Madison framework as the practical reference architecture: a layered, agentic marketing system with Intelligence, Content, Research, Experience, and Performance agents coordinated through an orchestration layer.

The book is not a tool tour. It is a method for integrating engineering, brand strategy, AI workflow design, and launch practice. The reader learns to ideate, build, brand, and ship a visible product or professional presence while preserving human judgment over positioning, evidence, taste, scope, and public claims.

### One-Sentence Logline

When AI makes building cheaper, the scarce skill is knowing what to build, how to position it, how to verify it, and how to ship it as a coherent brand.

### Central Thesis

Madison Branding and AI argues that brand work is no longer downstream decoration after technical work is done. In an AI-mediated labor market, brand is part of the technical system: it shapes product scope, architecture, interface, data contracts, storytelling, portfolio design, and launch credibility. The Creative Engineer is the practitioner who can move across those layers without confusing fluent AI output for verified strategy.

### Adaptation From Claude Agentic AI

The generic Claude agentic AI book contributes the operating discipline:

- agentic work is supervised delegation, not autonomous replacement;
- every workflow needs scope, approval, and verification;
- tools and permissions expand both capability and risk;
- plans are proposals, not proof;
- humans remain accountable for judgment and public-facing outputs.

Madison adapts that discipline from coding and knowledge-work agents into branding and marketing:

- **Scope** becomes product scope, brand scope, audience scope, and workflow scope.
- **Approval** becomes human review of architecture, claims, creative direction, public copy, and launch assets.
- **Verification** becomes evidence checks for audience claims, market claims, performance claims, accessibility, figure accuracy, and portfolio readiness.

The result is a book about agentic brand-building: not "ask AI to make a brand," but "design an inspectable brand system with AI as a bounded collaborator."

---

## 2. Learner Profile

### Primary Reader

Graduate students, early-career engineers, technical founders, product builders, marketers, and creative professionals who can use AI tools but do not yet know how to turn AI-assisted output into a coherent, defensible brand or launch package.

### Prior Knowledge Assumed

- Basic comfort with AI chat tools.
- Basic digital literacy: files, links, web tools, simple dashboards, and public profiles.
- Some comfort reading technical explanations.
- Interest in building a project, product, portfolio, or professional identity.

### Prior Knowledge Not Assumed

- Formal brand strategy.
- Marketing research methods.
- Jungian archetype systems.
- Multi-agent architecture.
- n8n, CrewAI, ReAct, or orchestration frameworks.
- Visual identity design.
- Professional launch planning.

### Misconceptions the Book Must Correct

1. "Branding is decoration." Brand is a decision system that shapes product scope, architecture, interface, and market legibility.
2. "AI does the creative work." AI can generate options; humans still decide what is true, coherent, ethical, and strategically useful.
3. "My GitHub is my portfolio." A repo is evidence, but it is not a positioned story until the audience can understand why it matters.
4. "Agents are magic autonomy." Madison's agents are bounded roles in a workflow, not unsupervised marketing executives.
5. "A fluent campaign is a good campaign." Fluency without evidence, fit, accessibility, and feedback is a risk surface.

---

## 3. Book Type and Deployment

### Primary Book Type

Course textbook with practitioner-handbook utility.

### Primary Adoption Context

A 12- to 14-week graduate or advanced undergraduate course in branding and AI, creative engineering, AI for marketing, product launch, entrepreneurship, or professional presence.

### Secondary Adoption Context

Professional development workshops, founder bootcamps, AI marketing labs, portfolio-building programs, and self-guided practitioners building public brand assets.

### Terminal Capability

By the end of the book, the reader can design, build, brand, and launch an AI-assisted product or professional presence with:

- a scoped product concept;
- an agentic workflow or Madison-inspired tool architecture;
- a brand strategy and archetype;
- a visual identity system;
- a story and case-study layer;
- a public portfolio or launch surface;
- a verification and review discipline for AI-generated work.

---

## 4. Repository-Specific Grounding

This Tik TOC is not abstract. It is grounded in the Madison repo structure.

### Manuscript Track

Primary chapter track:

- `chapters/branding-and-ai/`

Related expanded course track:

- `chapters/info-7375-branding-and-ai-spring-2026/`

Related principles track:

- `chapters/principles-marketing/`

### Agentic System Layer

- `AGENTS.md`: cross-agent rules.
- `CLAUDE.md`: Claude/Cowork rules.
- `DATA_CONTRACT.md`: local data and evidence rules.
- `docs/`: human-readable operating documentation.
- `skills/`: agent-readable workflow recipes.
- `skills/RUN_LOG.md`: durable run log.
- `scripts/`: maintained scripts and stored production prompts.
- `data/madison-main/`: imported Madison source data and workflow JSON.
- `docs/madison-main/`: import notes and source documentation.
- `scripts/madison-main/`: imported code/configuration for review.

### Workflow Skill Layer

The imported n8n workflow skills are part of the book's applied evidence:

- `skills/n8n-ai-concierge.md`
- `skills/n8n-restaurant-agent.md`
- `skills/n8n-madison-content-agent-mvp-copy-1.md`
- `skills/n8n-intelligence-agent.md`
- `skills/n8n-marketmind-run-analysis-webhook.md`
- `skills/n8n-survey-analysis.md`

These are teaching artifacts. They show what Madison means by agentic marketing workflows: bounded roles, named inputs, outputs, tools, and review gates.

### Figure and Asset Layer

- `d3/`: D3/HTML figure sources.
- `images/`: rendered SVG and PNG assets.
- `scripts/svg-to-png.mjs`: SVG-to-PNG rendering.
- `docs/figures-and-assets.md`: figure and image rules.

The book should treat figures as part of the learning architecture. A figure is accepted only when its source is preserved, its claim is warranted, and its rendered asset is current.

---

## 5. Field Positioning

### Comparable Categories

**Branding textbooks** teach positioning, archetype, identity, story, and campaigns, but usually treat AI as an add-on tool or late chapter.

**AI marketing books** often survey tools and prompts, but weakly connect tool use to durable brand strategy, product architecture, and audience trust.

**Agentic AI books** explain tool-using agents, orchestration, permissions, and verification, but usually work through coding, productivity, or enterprise automation examples rather than brand systems.

**Portfolio and career books** teach professional presence, but rarely integrate AI product building, brand architecture, and agentic workflow design into one compounding project.

### Positioning Statement

Madison Branding and AI is a course-ready textbook for Creative Engineers who need to build with AI, brand what they build, and ship a public artifact without mistaking generated polish for market credibility.

---

## 6. Three-Act Learning Arc

### Act One - Foundation: Why Code Is No Longer Enough

The reader learns why AI changes the labor-market value of technical output and why brand, positioning, and problem selection now belong inside the technical practitioner's discipline.

**Chapters:** 1-3  
**Capability at end of act:** The reader can articulate a Creative Engineer position, explain the Madison framework, and choose an archetype as a decision constraint.

### Act Two - Build: Make the Tool Real

The reader scopes, builds, automates, adds AI intelligence, and deploys an interface. This act uses Madison's agentic architecture and the Claude supervision discipline: define scope, bound tools, require review, verify output.

**Chapters:** 4-7  
**Capability at end of act:** The reader has a scoped and deployed AI-assisted tool or workflow with documented contracts, degraded modes, and a public interface.

### Act Three - Brand and Launch: Make It Mean Something

The reader turns the built artifact into a coherent brand system, visual identity, story, portfolio, and professional launch package.

**Chapters:** 8-12  
**Capability at end of act:** The reader has a public-facing brand and launch system that connects product, archetype, story, portfolio, and evidence.

### Arc Statement

This book takes the reader from technically capable but strategically illegible to Creative Engineer by first showing why AI changes the value of technical work, then building a bounded agentic product, then turning that product into a coherent brand and launch surface.

---

## 7. Sequencing Model

**Primary model:** Problem -> Product -> Brand -> Launch  
**Secondary model:** Concrete -> Abstract with spiral returns

The book opens with a labor-market problem and moves toward a concrete product. Brand theory enters early enough to guide decisions but is tested repeatedly against artifacts: a PRD, a pipeline, an interface, a brand strategy, a visual system, a portfolio, and a launch deck.

The spiral returns are:

- **Archetype** introduced in Chapter 1, systematized in Chapter 3, applied in Chapters 8-12.
- **Scope** introduced in Chapter 4, enforced in Chapters 5-7, reused as brand negative space in Chapter 8.
- **Agentic supervision** introduced in Chapter 2, operationalized in Chapters 5-7, governed in Chapters 10-12.
- **Evidence** introduced through market/labor data in Chapter 1, applied to brand claims and launch artifacts in Chapters 8-12.

Each return adds a new analytical layer. The archetype is not repeated as personality language; it becomes a design constraint, a voice constraint, a visual constraint, and a story constraint.

---

## 8. Prerequisite Map

| Prerequisite | Safe to Assume? | Where Introduced |
|---|---|---|
| Basic AI assistant use | Yes | Introduction |
| AI productivity changes labor signals | No | Chapter 1 |
| Brand as strategy rather than decoration | No | Chapter 1 |
| Madison's five-layer agent architecture | No | Chapter 2 |
| Jungian archetypes | No | Chapters 1 and 3 |
| PRD and MVP scope | No | Chapter 4 |
| Data pipeline contracts | No | Chapter 5 |
| Agentic supervision and orchestration | No | Chapters 2, 5, 6 |
| Interface as brand surface | No | Chapter 7 |
| Brand strategy components | No | Chapter 8 |
| Visual identity system | No | Chapter 9 |
| Story frameworks | No | Chapter 10 |
| Portfolio as product | No | Chapter 11 |
| Launch package | No | Chapter 12 |

---

## 9. Chapter-by-Chapter TOC

## Introduction - The Creative Engineer's Map

**Capability built:** Understand the book's claim, path, and running project.

The introduction frames the central shift: AI makes execution cheaper, so strategic judgment, product definition, brand coherence, and shipping discipline become more valuable. It explains the running project and the split between book order and course order.

**Whole task:** Commit to building a public-facing AI-assisted artifact and brand system.  
**Assessment:** One-paragraph project intention and baseline self-audit.  

## Chapter 1 - The Creative Engineer

**Capability built:** Explain why AI changes the value of technical work and define the Creative Engineer role.

The reader learns why "I can build" is no longer a sufficient labor-market signal. The chapter introduces ideate, build, brand, ship and uses archetypes as an initial strategic lens.

**Whole task:** Write a Creative Engineer positioning statement.  
**Assessment:** Identify one technical artifact and explain what brand/positioning work it still lacks.  

## Chapter 2 - The Madison Framework

**Capability built:** Read Madison as an agentic marketing architecture.

The reader learns Madison's five agent layers and orchestration layer, distinguishes multiple meanings of "agent," and connects architecture to brand. The chapter adapts the Claude agentic AI discipline: agents act inside boundaries and need supervision.

**Whole task:** Select one Madison layer as the reference architecture for the reader's running project.  
**Assessment:** Two-sentence justification connecting layer, archetype, and user problem.  

## Chapter 3 - Jungian Brand Archetypes as a System

**Capability built:** Use archetypes as strategic constraints rather than personality labels.

The reader studies the twelve archetypes and learns how archetype drift damages recognition. The chapter turns archetype into a forced specification: what the brand says yes to, what it refuses, and what failure mode it must watch.

**Whole task:** Build an archetype brief with shadow watchlist.  
**Assessment:** Archetype, promise, proof behavior, voice guardrails, and three refusals.  

## Chapter 4 - Product Requirements and Scope

**Capability built:** Convert a brand/product idea into a scoped AI tool specification.

The reader writes a one-page PRD: problem, user, gap, MVP boundary, out-of-scope list, input/output contract, and success condition. The Claude adaptation is explicit: no agentic action without scope.

**Whole task:** Produce the Career-PRD or Startup-PRD for the running project.  
**Assessment:** PRD with an out-of-scope list as strong as the in-scope list.  

## Chapter 5 - Data Pipelines and Workflow Automation

**Capability built:** Design a workflow whose external dependencies and failure modes are visible.

The reader builds or specifies an n8n-style pipeline: ingestion, transformation, storage, output, and degraded mode. Madison-main workflow imports become evidence of how workflow JSON becomes skill cards and inspectable operations.

**Whole task:** Create a workflow map with source contracts and failure paths.  
**Assessment:** Pipeline diagram or workflow card naming inputs, outputs, tools, and stop conditions.  

## Chapter 6 - AI Intelligence and Multi-Agent Systems

**Capability built:** Add an AI intelligence layer without surrendering supervision.

The reader distinguishes single-call AI, tool-using agents, long-running agents, and specialized sub-agents. The chapter compares graph orchestration and conversational orchestration through reliability, auditability, and brand trust.

**Whole task:** Add or specify one bounded AI-intelligence step in the running project.  
**Assessment:** Agent card with role, tools, inputs, outputs, approval gate, and verification step.  

## Chapter 7 - Interface Design and Deployment

**Capability built:** Treat interface, interaction, deployment, and brand surface as one design problem.

The reader deploys or specifies a public interface and learns why interface impressions compound. The chapter applies verification to demo risk: a fluent demo can destroy trust if its claims are wrong.

**Whole task:** Deploy or mock a public interface for the running project.  
**Assessment:** Public URL or interface spec with README, screenshots, and verification checklist.  

## Chapter 8 - Brand Strategy

**Capability built:** Write a brand strategy that constrains future decisions.

The reader creates mission, vision, values, UVP, archetype, voice, positioning, and negative-space list. The chapter forks into Personal Professional Brand and Startup Brand paths.

**Whole task:** Write the one-page brand strategy.  
**Assessment:** Strategy document with a no-list specific enough to predict refusals.  

## Chapter 9 - Visual Identity Systems

**Capability built:** Translate strategy into visual choices that can be applied consistently.

The reader designs palette, typography, imagery direction, logo direction, mood board, layout rules, accessibility checks, and portfolio wireframe. Figures and assets must remain source-linked and verifiable.

**Whole task:** Produce one-page visual identity guidelines.  
**Assessment:** Guidelines plus accessibility check and figure/asset provenance.  

## Chapter 10 - Brand Storytelling

**Capability built:** Choose a story shape that fits the archetype and audience.

The reader learns Hero's Journey, Quest, and customer-as-hero patterns, then writes origin story, case study, and thought-leadership piece. AI can draft variants, but the human verifies truth, tone, and public risk.

**Whole task:** Publish or prepare a verified story asset.  
**Assessment:** Origin story, customer-as-hero case, and evidence note.  

## Chapter 11 - Portfolio as Product

**Capability built:** Design the portfolio as a product with audience, structure, proof, and conversion path.

The reader integrates the AI tool, brand strategy, visual identity, and story into a portfolio surface. The portfolio is not a gallery; it is a product experience that makes competence legible.

**Whole task:** Build or specify a deployed portfolio.  
**Assessment:** Portfolio map with hero, proof, case study, tool demo, about, contact, and analytics plan.  

## Chapter 12 - Professional Presence and Launch

**Capability built:** Assemble and deliver a coherent launch package.

The reader finalizes resume, LinkedIn, pitch deck, launch announcement, and post-course plan. The final gate is not polish; it is coherence across artifact, brand, evidence, and audience.

**Whole task:** Deliver the integrated launch package.  
**Assessment:** Final pitch plus one-quarter plan and verification checklist.  

## Chapter 98 - Appendix: Best Practices for Agentic Book Repos

**Capability built:** Maintain a book-plus-agent repository without losing provenance.

The appendix explains repo structure, docs, data contracts, scripts, skills, phase gates, logging, and generated artifacts.

**Whole task:** Audit the repo or project folder using the appendix checklist.  
**Assessment:** Short maintenance note with risks and next actions.  

---

## 10. Chapter Dependency Map

| Chapter | Depends On | Feeds |
|---|---|---|
| Introduction | None | Running project setup |
| 1 | Introduction | Archetype, Creative Engineer frame |
| 2 | 1 | Madison layer choice, agent architecture |
| 3 | 1 | Brand constraint system |
| 4 | 1-3 | Product scope and PRD |
| 5 | 4 | Workflow and data contracts |
| 6 | 2, 5 | AI agent role and supervision |
| 7 | 4-6 | Deployed interface |
| 8 | 1-7 | Brand strategy fork |
| 9 | 8 | Visual identity and portfolio wireframe |
| 10 | 3, 8 | Story assets |
| 11 | 7-10 | Portfolio |
| 12 | 8-11 | Launch package |
| 98 | Whole repo | Maintenance and future runs |

**Load-bearing chapters:** 1, 2, 4, 6, 8, 11, 12.  
**Most fragile transition:** Chapter 7 to Chapter 8, because the reader moves from "I deployed something" to "I can make it mean something coherent."  
**Highest adoption-risk chapter:** Chapter 6, if it becomes agent taxonomy instead of supervised brand-system design.  

---

## 11. Running Project Spine

Every chapter should advance one running project. Default track:

**Self-as-Project:** the learner builds an AI-assisted tool or workflow that supports a public professional identity.

Alternative track:

**Startup-as-Project:** the learner builds an AI-assisted product concept and brand system for an early-stage venture.

The fork begins in Chapter 8. Chapters 1-7 remain shared because both tracks need the same foundation: archetype, Madison architecture, scope, pipeline, AI intelligence, and deployment.

### Running Deliverables

1. Baseline self/project audit.
2. Creative Engineer positioning statement.
3. Madison layer selection.
4. Archetype brief.
5. One-page PRD.
6. Workflow map.
7. Agent card.
8. Deployed interface or interface spec.
9. Brand strategy.
10. Visual identity guidelines.
11. Story assets.
12. Portfolio.
13. Launch package.

---

## 12. Chapter Anatomy Template

Each chapter should include:

1. A concrete case, failure, or decision.
2. Capability statement.
3. Why the capability matters now.
4. Core concept.
5. Madison or repo-grounded example.
6. Claude-agentic supervision lens: scope, approval, verification.
7. Running project task.
8. Evidence or verification checklist.
9. Reflection prompt.
10. Bridge to the next chapter.

Do not open chapters with abstract frameworks unless the reader has first seen the problem the framework solves.

---

## 13. Assessment Architecture

### Formative Assessments

- One-paragraph positioning statements.
- Archetype diagnostics.
- PRD drafts.
- Workflow maps.
- Agent cards.
- Interface reviews.
- Brand strategy drafts.
- Visual identity checks.
- Story asset critiques.
- Portfolio peer reviews.

### Summative Assessment

The final assessment is a launch package:

- deployed tool or credible prototype;
- one-page brand strategy;
- visual identity sheet;
- public portfolio or portfolio specification;
- origin story or case study;
- pitch deck;
- verification note explaining what was checked, what remains uncertain, and what must not be claimed yet.

### Final Exam Style Question

Given a polished AI-generated brand campaign for a new AI product, identify the missing scope, approval, and verification controls; diagnose the likely archetype drift; revise the product's positioning statement; and propose one evidence-backed launch asset that would make the brand more trustworthy.

---

## 14. Case Strategy

Cases should do instructional work, not decoration.

### Case Types

- labor-market shift cases showing why technical output alone is less differentiating;
- brand drift cases showing how archetype inconsistency destroys recognition;
- agentic failure cases showing why supervision matters;
- deployment/demo failure cases showing why public fluency without verification is dangerous;
- portfolio success cases showing how clear proof compounds;
- launch cases showing how simple, coherent artifacts outperform ornate ones.

### Repo-Grounded Cases

- Madison's five-layer architecture as a brand and engineering decision.
- Imported n8n workflow skills as examples of turning workflow JSON into inspectable operating cards.
- D3/SVG/PNG assets as examples of source-linked visual evidence.
- `skills/RUN_LOG.md` as a durable audit trail for agentic work.
- `DATA_CONTRACT.md` as the guardrail against invented claims.

---

## 15. Adoption Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---:|---:|---|
| Book becomes an AI tool survey | High | High | Make every chapter start with a brand/product decision, not a tool. |
| Brand theory overwhelms build practice | Medium | High | Keep Chapters 4-7 artifact-driven with real workflow and interface outputs. |
| Agentic AI material feels bolted on | Medium | High | Use Madison workflow skills and Claude scope/approval/verification throughout. |
| Chapter count exceeds course reality | Medium | Medium | Preserve 12 primary chapters; use case studies and appendix for expansion. |
| AI examples age quickly | High | Medium | Teach durable patterns; isolate tool-specific commands in docs/appendices. |
| Marketing claims become unsupported | High | High | Enforce data contract, evidence labels, and verification notes. |
| Personal-brand and startup-brand paths confuse readers | Medium | Medium | Keep Chapters 1-7 shared; fork only exercises and cases in Chapters 8-12. |
| Figures drift from chapter claims | Medium | Medium | Use `docs/figures-and-assets.md` and source-linked figure review. |
| Repo-specific material overwhelms general readers | Medium | Medium | Use repo material as case evidence, not required setup for every reader. |

---

## 16. Production Notes

### Primary Production Target

Align `chapters/branding-and-ai/` to this architecture.

### Secondary Source Track

Use `chapters/info-7375-branding-and-ai-spring-2026/` as an expanded course/case source. Do not automatically merge it into the primary book track; extract selectively.

### Repo Docs to Keep in Sync

- `docs/README.md`
- `docs/manuscript.md`
- `docs/workflows.md`
- `docs/figures-and-assets.md`
- `docs/skills.md`
- `DATA_CONTRACT.md`
- `skills/README.md`

### Verification Commands

Current command surface:

```bash
npm run verify
npm run svg-to-png
```

`npm run verify` is currently a placeholder, so manuscript and architecture verification still require human readback, path checks, and chapter/asset inspection.

---

## 17. Open Questions

These are not blockers for silent intake, but they should be resolved before a final proposal package:

- Should the public title remain "Branding and AI," or should Madison appear in the title?
- Is the primary adoption target INFO 7375, a broader graduate textbook market, or a practitioner handbook?
- Should Chapter 8 present the personal/startup fork as two paths throughout Chapters 8-12, or as a single theory with alternate exercises?
- Which D3 figures are canonical for the primary book track?
- Which imported Madison workflow skill should serve as the main worked example in Chapter 5 or 6?

---

## 18. Compact TOC

1. The Creative Engineer
2. The Madison Framework
3. Jungian Brand Archetypes as a System
4. Product Requirements and Scope
5. Data Pipelines and Workflow Automation
6. AI Intelligence and Multi-Agent Systems
7. Interface Design and Deployment
8. Brand Strategy
9. Visual Identity Systems
10. Brand Storytelling
11. Portfolio as Product
12. Professional Presence and Launch

Appendix: Best Practices for Agentic Book Repos
