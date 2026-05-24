<!--
    00-introduction.md
    INTRODUCTION — Chapter 0 / roadmap chapter.
    Distinct from the Preface: the Preface is the authors' voice on why
    this book exists; the Introduction is the reader's map of what the
    book argues and how it is organized.
    Modeled on Pearl's "Mind Over Data" and Molnar's Introduction —
    argument-first, substantive, navigationally useful.
-->

# Introduction

The job market has changed in a specific way and most engineering programs have not yet caught up.

The change is not subtle. In a 2023 controlled experiment, ninety-five professional developers were given the same task — write an HTTP server in JavaScript. Half got [GitHub Copilot](https://arxiv.org/abs/2302.06590); half did not. The Copilot group finished in 71 minutes on average. The control group took 161 minutes. That is 56% faster, on a task that was, ten years ago, a job interview question used to filter out applicants who did not really know how to code. The [2024 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2024/ai) reported 82% of developers using AI tools to write code and 76% currently using or planning to. The picture is consistent across the data: the production of working software has been substantially commoditized.

This book argues a single claim and follows its consequences for an entire career arc.

The claim: when the cost of building falls, the labor-market value of being able to build falls with it. What rises in value is the work that did *not* get cheap. We name three pieces of that work — *identifying a problem worth solving*, *positioning a solution clearly*, and *shipping to real users with real feedback loops* — and we argue that all three are now part of the technical practitioner's discipline, not the marketing department's. The graduate who learns to integrate them with the engineering work has a profile the labor market is willing to pay a premium for. The graduate who treats them as someone else's job is competing against an undifferentiated pool of candidates whose technical work looks indistinguishable from theirs once an AI co-pilot is in the room.

We call the integrated practitioner a **Creative Engineer**. Not a job title — a practice. Four verbs at the core: *ideate, build, brand, ship*. We borrow the formulation from the legacy version of INFO 7375 at Northeastern's College of Engineering, where we co-developed it across several semesters of teaching graduate students who arrived strong on the second verb and weak on the other three. The book you are holding is what we wish we had handed those students on day one.

---

## Why this matters

The stakes are not theoretical. The data on AI-engineering compensation in 2025–2026 shows specialists pulling 30–50% premiums over generalists at the same level. The mechanism behind that premium is not raw technical skill — every specialist learned the same papers, every specialist uses the same tools — but *legibility*. The specialist whose archetype, positioning, portfolio, and public work are coherent enough that hiring managers can locate them gets paid more than the equivalent specialist who is not findable. Brand work is not the icing on the cake. In 2026, it is part of how the cake is priced.

For the student reading this book: the next twelve weeks (or the time it takes to read it on your own) will produce artifacts that change what a recruiter sees when they search for you. A deployed AI tool. A documented brand strategy. A portfolio that compounds. A pitch deck. A resume in two formats. A LinkedIn presence aligned with the rest of your work. We have watched students walk into final pitches with these artifacts and walk out with offers, advisor relationships, and audiences who continue to value their work after the course ends. The book is the structured version of that course.

For the instructor adopting this book: every chapter is built to produce a defensible, gradable artifact at the end. The book and the course are not in the same order — students build before they brand because the build sequence is the harder constraint to satisfy under deadline — and we explain that mapping below. Chapters compound; the dependencies are documented; the case-pairing structure (one real-world deployment or failure-mode case per chapter) gives you discussion material at every step.

For the practitioner reading this book outside any course: the four verbs scale. Ideate, build, brand, ship is the discipline whether you are a graduate looking for your first role, a senior engineer considering a startup, or a working creative who wants to add technical capability to your own practice. We have written the chapters so that any of those readers can extract value from the framework without translating from a context they do not share.

---

## What you should already know

We assume comfort with at least one programming language and some prior experience reading technical documentation, working with APIs, and using a command line. The build chapters (4–7) are paced for an early-graduate engineering audience; a reader without that background can still follow the argument but will need to spend longer on the implementation exercises.

We do not assume any prior coursework in marketing, branding, or design. Those disciplines appear in this book as technical practices — methods with assessable outcomes — and we teach them from first principles. A reader who arrives with brand-strategy experience will find chapters 8 through 10 fast. A reader who arrives with engineering experience will find chapters 4 through 7 fast. The whole point of the book is the integration; either half is incomplete on its own.

We also do not assume access to any specific AI vendor. The exercises name particular tools (Claude, Cursor, n8n, v0, CrewAI, Streamlit, Gradio) but the patterns are tool-agnostic. By the time this book is in your hands, several of the named tools may have been renamed, repriced, or replaced. The frameworks survive the tool churn; the specific commands do not.

---

## How this book is organized

Twelve chapters in four parts, plus front matter, an introduction, and an appendix of running-project exercises that map across the entire arc. The four parts mirror a three-act dramatic structure with a midpoint — *foundation, build, brand, launch* — and the underlying argument compounds part by part. Below is the chapter-level roadmap. Read it now; come back to it whenever you lose the thread.

### Part I — Foundation (Act 1: "You need more than code.")

**Chapter 1 — The Creative Engineer.** Establishes the central argument of the book. Walks through the labor-market shift in detail, names the three career-limiting beliefs technical graduates arrive with ("branding is decoration," "AI does the creative work," "my GitHub is my portfolio"), and applies Spence's 1973 signaling theory to explain why each belief is more dangerous in 2026 than it was a decade ago. Introduces the twelve Jungian archetypes as a brand strategy system — *not* a personality quiz — and asks you to identify your own provisional archetype. The chapter ends with the four-verb framework you will carry through the rest of the book.

**Chapter 2 — The Madison Framework.** Introduces the open-source agent-based marketing intelligence framework that serves as the technical reference architecture for the book's build sequence. Five agent layers (Intelligence, Content, Research, Experience, Performance) plus an orchestration layer. Specifies what "agent" actually means in the multi-agent-system literature — the term is doing four different jobs in current usage, and we pull them apart. Develops the chapter's central mechanism: that architectural choices like "five layers vs. one mega-agent" are simultaneously engineering decisions and brand decisions. By the end you will have selected a Madison tool that fits the archetype you committed to in Chapter 1, and that tool becomes your design reference for chapters 4–7.

**Chapter 3 — Jungian Brand Archetypes as a System.** Goes deep on the twelve archetypes — Hero, Sage, Explorer, Innocent, Creator, Ruler, Caregiver, Magician, Lover, Jester, Everyman, Rebel — using Mark and Pearson's 2001 *The Hero and the Outlaw* as the working reference. Walks through three real cases of *archetype drift* (Tropicana 2009, Gap 2010, Coca-Cola's "New Coke" in 1985) where brands strayed from the archetype that anchored their customer base, lost recognition, and rolled back at expense. Develops the chapter's central mechanism — the archetype as a *forced specification* that makes brand decisions decidable instead of arbitrary. By the end of Part I, you will have a working archetype, a shadow watchlist (each archetype's failure mode), and the lens you will apply throughout the rest of the book.

### Part II — Build (Act 2, Movement 1: "Build it.")

**Chapter 4 — Product Requirements and Scope.** Treats the AI tool you are about to build as a product launch, not a class assignment. Introduces the one-page Product Requirements Document — *problem, gap analysis, tool, MVP boundary* — using Marty Cagan's PRD principles and Eric Ries's *Lean Startup* MVP definition as anchors. Linear's "$100,000 no" is the case: the brand built around scope discipline that produced a coherent product when looser-disciplined competitors fragmented. By the end you will have a one-page Career-PRD-style spec for your tool, with an out-of-scope list at least as developed as the in-scope list.

**Chapter 5 — Data Pipelines and Workflow Automation.** The first build chapter. Introduces n8n as the workflow orchestration tool, walks through pipeline architecture (ingestion → transformation → storage → output), and reframes data engineering through the chapter's central mechanism: every external dependency is a *contract* you do not control. The Reddit API rupture of June 2023 (which killed Apollo and the rest of the third-party Reddit ecosystem in eight weeks) is the case. By the end you will have a working n8n pipeline with documented external contracts and explicit degraded modes for the most likely failure points.

**Chapter 6 — AI Intelligence and Multi-Agent Systems.** Adds the AI layer to the workflow you built in Chapter 5. Distinguishes between four meanings of "agent" (single LLM call; chained calls; tool-using agent à la ReAct; multi-agent system) and three multi-agent architectures (autonomous; orchestrated; conversational). The case is AutoGPT's 2023 failure modes — compounding error, cost runaway, loss of user trust — set against Madison's CrewAI-based agent definitions, which install the disciplines AutoGPT lacked. The central trade-off: autonomy buys flexibility at the cost of predictability, and that trade is itself a brand decision. By the end you will have at least one working AI-intelligence step in your pipeline and a deliberate position on the autonomy/orchestration spectrum.

**Chapter 7 — Interface Design and Deployment.** The first chapter of the brand half of Part II. Walks through Streamlit and Gradio as the right deployment tools for graduate-school AI prototypes, and introduces the four-meaning specification of "interface" — UI, interaction model, deployment surface, brand surface. The central mechanism: interface impressions compound at session frequency; feature impressions compound at use frequency; mismatched interfaces damage brand faster than failed features. The cases are Google Bard's February 2023 launch (a $100B market-cap drop in 48 hours from one factually-wrong demo answer), Snapchat's 2018 redesign rollback, and Microsoft's Tay chatbot. By the end of this chapter your AI tool is *deployed* — at a public URL, with a working interface, and a portfolio-quality README. This chapter also serves as the **midterm gate**: you pitch the deployed tool in a Guy Kawasaki 10/20/30 format before proceeding to Part III.

### Part III — Brand (Act 2, Movement 2: "Make it mean something.")

This is where the book *forks*. Chapters 8 through 12 carry a path-fork distinction — **Personal Professional Brand** or **Startup Brand** — that the reader commits to at the start of Chapter 8. The theory is unified across both paths; the exercises and case pairings diverge. Choose the lane that fits your goal: building a hireable professional identity, or building a startup brand around the tool you just shipped.

**Chapter 8 — Brand Strategy.** The master synthesis chapter. Walks through the seven components of a brand strategy — *mission, vision, values, UVP, archetype, voice, positioning* — and adds the eighth: the *negative-space list*, the things the brand declines to do. The negative space is the brand. Andrej Karpathy's two-year personal-brand build (Personal path) and Stripe's fifteen-year startup brand (Startup path) are the two cases — Karpathy's career trajectory and Stripe's documentation-as-marketing each show the discipline working at very different scales. By the end you will have written a one-page brand strategy document with a no-list specific enough that another reader can predict three things you would refuse.

**Chapter 9 — Visual Identity Systems.** Translates the brand strategy from Chapter 8 into a visual system — palette, typography, imagery direction, layout, logo direction, mood board, creative brief, and a wireframe for your portfolio site. Introduces WCAG accessibility standards (4.5:1 contrast for normal text; 3:1 for large text and UI). The case is *visual identity without strategy* — Pepsi's 2008 "BreathTaking" logo redesign with its leaked 27-page rationale invoking gravitational pull and the Mona Lisa, Yahoo's 2013 "30 daily logos" exercise, and Tropicana's 2009 visual misalignment from Chapter 3. By the end you will have a complete visual identity system documented in one-page brand guidelines, plus a wireframe ready to feed into the portfolio build in Chapter 11.

### Part IV — Launch (Act 3: "Tell the story. Own the room.")

**Chapter 10 — Brand Storytelling.** Introduces the three load-bearing storytelling frameworks — Joseph Campbell's Hero's Journey, Christopher Booker's Quest, and Donald Miller's customer-as-hero pattern — and the central insight: *story shapes carry archetypal commitments*. A Sage tells Methodology stories; a Hero tells Hero's Journey at the customer level; a Magician tells Transformation. Mismatched stories read as false to audiences regardless of execution quality. The cases are three narrative-archetype mismatches: Pepsi's *Live for Now* ad with Kendall Jenner (April 2017, pulled in 24 hours), Bud Light's Dylan Mulvaney partnership (April 2023), and Jaguar's "Copy Nothing" rebrand (November 2024). By the end you will have written your origin story, one customer-as-hero case study, and one published thought-leadership piece. The published piece is real — actually published, not drafted.

**Chapter 11 — Portfolio as Product.** Treats the portfolio not as a resume with screenshots but as a designed product with audience, structure, and craft requirements. Introduces v0 (Vercel) and Framer AI as the right tools for graduate-school deployment timelines, and walks through AI image generation (Midjourney, Flux, DALL-E, Imagen) as branding-asset support. Brittany Chiang's portfolio (cloned 6,000+ times since 2017) is the case — proof of how a well-designed portfolio compounds across years through reference, share, and template effects. By the end you will have a deployed portfolio at a public URL, with the AI tool from Chapters 4–7 integrated as a centerpiece case study and the storytelling from Chapter 10 woven through every section.

**Chapter 12 — Professional Presence and Launch.** The final chapter. Builds the launch package: ATS-optimized resume, designer-format resume, finalized LinkedIn, and a 10/20/30 pitch deck of yourself. Airbnb's 2009 seed pitch deck is the case — ten plain-design slides that raised $600,000 from Sequoia and Y Combinator because every slide reinforced a single argument. By the end you will have delivered the final integrated pitch, posted a launch announcement, and produced a one-quarter post-course plan that turns the course's compounding into a sustained practice.

---

## How to read this book

The book is written to be read front to back. The dependencies between chapters are real: the archetype you commit to in Chapter 1 informs the Madison-tool selection in Chapter 2, which becomes the design reference for the build sequence in Chapters 4–7, which feeds the brand strategy in Chapter 8, which constrains the visual identity in Chapter 9, which shapes the portfolio in Chapter 11, which feeds the final pitch in Chapter 12. Skipping ahead is possible; doing so loses the compounding.

The book and the course are *not* in the same order. We teach INFO 7375 in build-priority sequence, so students start the build (Chapter 4 material) by week two and the brand work (Chapter 8 material) lands around week six. The book teaches in logical-dependency sequence — archetype before build, build before brand, brand before launch — because a reader without a fixed deadline benefits from seeing the dependencies in the order they actually run. Both sequences are correct for their format. Instructors adopting this book should produce a semester-specific mapping that fits their calendar; we provide a representative 14-week mapping in the appendix.

A note on Chapter 8's path fork. The personal-brand path serves graduates building a hireable professional identity (the most common case). The startup-brand path serves readers who want to build a company around the tool from Part II. The theory is identical. Choose deliberately at Chapter 8; do not switch midway through Chapters 9–12, because the exercises in those chapters compound on the path you committed to. If you finish the book on one path and want to revisit the other, the second pass through Chapters 8–12 is faster.

A note on the LLM exercises. Every chapter ends with a copy-paste-ready prompt the reader can run against Claude (or another LLM) to advance the running project. The book ships with one default running-project track — *Self-as-Project*, in which the learner is the running project and produces a personal-brand artifact each chapter — and the appendix includes alternate tracks for instructors who want a different framing. The exercises are not optional. The reading without the doing produces understanding without the artifact, and the artifact is what the labor market rewards.

A final note on the case layer. Each chapter pairs with a real-world case: a brand-deployment case where strategy worked, or a brand-failure-mode case where it did not. The cases are taught in the chapter prose; their primary sources are linked in-text and listed at the bottom of each chapter. The case structure is part of the pedagogy. Most chapters in most textbooks are theory followed by toy examples. We pair theory with publicly-documented real-world outcomes where the consequences of getting it right or wrong showed up in measurable terms — market value, sales, hiring, rollback timelines. The cases are how we make the theory survive contact with skepticism.

---

## A quick honest disclaimer about what this book is betting

We are betting on a market direction. The bet is that AI tooling continues to commoditize the build, that brand and positioning skills continue to rise in relative value, and that the integrated Creative Engineer profile we describe continues to be rewarded by employers, investors, and audiences. The bet is grounded in the labor-market data we cite throughout — productivity studies, developer-survey results, AI-engineer compensation reporting — but it is a bet about a market trajectory, not a proof.

If we are wrong, it is most likely to be wrong in this direction: that pure technical specialization (LLM fine-tuning, alignment research, infrastructure-at-scale) re-prices upward and the brand-and-positioning premium plateaus or shrinks. We do not think that is the most likely outcome. We do not dismiss it. We have written this book with the bet in view, and we have flagged the limits explicitly in every chapter where the evidence does not yet settle the case.

What we are not betting on: that the framework substitutes for the underlying technical work. The Creative Engineer is not "an engineer who learned brand strategy in two weeks." The Creative Engineer is an engineer who has integrated the strategic disciplines into the build practice itself, over the timeline of an actual career. The book gives you the discipline. The compounding is your work.

---

The first chapter starts in a controlled experiment with ninety-five developers, two hours and forty-one minutes, and a question about what stops being a costly signal once everyone can produce it.

Turn the page.

