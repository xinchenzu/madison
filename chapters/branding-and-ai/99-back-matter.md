<!--
    99-back-matter.md
    BACK MATTER — appears after Chapter 12.
    Sections in order:
      1. Acknowledgments
      2. About the Authors
      3. Notes (endnotes by chapter)
      4. Glossary
      5. References
      6. Index (omitted for online release; placeholder for print)
    Continues arabic numbering from Chapter 12.
-->

---

## Acknowledgments

This book exists because students at Northeastern University's College of Engineering took the early versions of INFO 7375 seriously and were generous about how they reported back. Manisha Sahu, Swara Joshi, Manasa Karanam, Sai Manasa Karanam, and dozens of unnamed cohort members shipped real tools, real brands, and real public writing while the course was still figuring itself out. Several of them appear by name in these pages with their permission. The framework you are reading is what their work taught us we were teaching.

The Madison framework, developed and released open-source by [Humanitarians AI](https://humanitarians.ai), is the technical reference architecture that made the build sequence in Part II teachable at this depth. We are grateful for the deliberate care its developers took in publishing both the code and the documentation in a form a textbook could responsibly read against. Madison's design choices — the five-layer architecture, the n8n orchestration commitment, the production-deployment numbers in the Intelligence Agent README — became the spine of how we taught.

Nina thanks the colleagues at Charles Schwab, Publicis, McCann-Erickson, and Saatchi & Saatchi whose forty years of brand and creative work taught her the disciplines this book treats as engineering. Nik thanks his Northeastern colleagues in the College of Engineering and the Roux Institute, and the broader community at Bear Brown LLC and Humanitarians AI. We both thank the families who carried the cost of nights and weekends spent on a manuscript that had to be drafted while the field underneath it was changing.

Errors that remain are ours.

---

## About the Authors

**Nik Bear Brown** is an Associate Teaching Professor in the College of Engineering at Northeastern University in Boston. His teaching focuses on artificial intelligence, machine learning, software engineering, and the pedagogical implications of generative AI. He is the editor of the Bear Brown LLC textbook workshop, a member of the Humanitarians AI community, and a regular essayist on education and AI on Substack and LinkedIn. He has co-developed and taught INFO 7375: Branding and AI at Northeastern's College of Engineering for several semesters. He lives in the Boston area and writes at [bearbrown.co](https://bearbrown.co).

**Nina Harris** is a Brand and Creative Director with more than forty years of experience in advertising and creative direction. She has led creative teams at Charles Schwab, Publicis, McCann-Erickson, and Saatchi & Saatchi, where her work spanned brand identity systems, advertising campaigns, creative direction, and photo-shoot direction at scale — including the production of more than ten thousand proprietary brand images during her tenure at Schwab. She serves as Adjunct Professor at Northeastern University's College of Engineering, where she co-teaches INFO 7375: Branding and AI, and as a member of the Board of Directors of Humanitarians AI. She is also a working photographer and producer. She lives in the greater Minneapolis–St. Paul area.

---

## Notes

The chapters in this book use inline links to primary sources rather than footnoted references. The notes below are reserved for substantive elaborations and disambiguations that did not fit cleanly into the chapter prose.

### Chapter 1

1. The Peng et al. controlled experiment (arXiv 2302.06590) sampled professional developers across a single firm and tested a single task type (an HTTP server in JavaScript). The 56% improvement we cite is task- and language-specific. Subsequent studies — including a 2025 longitudinal analysis (arXiv 2509.20353) — have produced more mixed results across other task types, with no statistically significant improvement on commit-based activity for some user groups. The signaling argument the chapter makes does not require Peng's specific number to hold across all tasks; it requires only that the *cost* of producing working code has fallen in a meaningful, broadly-distributed way. The Stack Overflow Developer Survey adoption data is consistent with that broader claim.

2. The salary aggregator numbers cited in Chapter 1 ($206K AI engineer base; 25–40% specialist premium) are drawn from secondary career-information sites. Primary sources — the U.S. Bureau of Labor Statistics, LinkedIn Workforce Reports, and academic labor-market studies — would strengthen these figures and may produce slightly different specific numbers. The directional claim (AI engineering pays well; specialization commands a premium) is robust across all sources we consulted.

### Chapter 2

3. Madison's "Mads and Madison" informal name reflects the framework's developmental history within the Humanitarians AI community; the canonical project name in repository contexts is *Madison*. We use the canonical form throughout. The "Bellman & Popper" framework integration referenced in the Madison README is documented in supplementary materials in the project's open-source repository.

### Chapter 3

4. The 12-archetype system attributed to Mark and Pearson is presented in *The Hero and the Outlaw* (2001) as twelve brand archetypes derived from Carol Pearson's earlier psychological work. Pearson's 12-archetype system itself dates to a 1995 collaboration. The intellectual lineage from Jung's Collective Unconscious to brand-archetype work is real but indirect; we treat Mark and Pearson as the working reference rather than a literal extension of Jung's psychological theory.

### Chapter 6

5. The categorization of multi-agent architectures into "autonomous," "orchestrated," and "conversational" is our pedagogical simplification. The actual multi-agent literature uses more granular taxonomies; LangGraph, AutoGen, and CrewAI each frame their own architectures distinctly. Our three-way split is teachable but not exhaustive; readers planning production work should consult the primary documentation for each framework.

### Chapter 10

6. The Jaguar 2024 "Copy Nothing" rebrand case is summarized from public design-press coverage; we have not pulled primary sources from Jaguar's parent company directly. The narrative-substance mismatch we describe is consistent with industry consensus but should be treated as a working interpretation rather than a fully-verified case study. Substituting a different third example (e.g., the Twitter-to-X rebrand of 2023) is reasonable on revision.

---

## Glossary

A working reference for the principal terms used in this book. Terms are listed alphabetically. Each definition is followed by the chapter in which the term is most fully developed.

**Agent (multi-agent sense)** — A specialized role within a larger AI system, defined by a job, a goal, an input contract, and an output contract. Distinguished in this book from "autonomous agent" (a system that decides its own next steps without human or orchestrator oversight). Madison uses agent-as-role, not agent-as-autonomous-system. *(Chapter 2, Chapter 6.)*

**Archetype** — In this book, specifically the brand-strategy concept: a strategic anchor selected from the Mark/Pearson 12 (Hero, Sage, Explorer, Innocent, Creator, Ruler, Caregiver, Magician, Lover, Jester, Everyman, Rebel) that constrains brand decisions and produces consistency across touchpoints. Distinct from Jungian psychological archetypes and from personality-typology systems like Myers-Briggs. *(Chapter 3.)*

**Archetype drift** — The phenomenon in which a brand's choices over time stray from the archetype that originally anchored its customer base, producing recognition failures and customer defection. Tropicana 2009, Gap 2010, and New Coke 1985 are the canonical cases. *(Chapter 3.)*

**ATS (Applicant Tracking System)** — Software used by hiring teams to filter resumes before a human reads them. ATS-optimized resumes use plain formatting, single-column layouts, and keyword density appropriate to the target role. *(Chapter 12.)*

**AutoGen** — Microsoft's open-source multi-agent framework, originally introduced in 2023. Uses a conversation-based orchestration pattern. Distinguished from graph-based orchestration (LangGraph) and workflow-based orchestration (n8n). *(Chapter 6.)*

**Brand** — A system of decisions and impressions accumulated across audience encounters that produces a recognizable, distinguishable identity for a person, product, or organization. In this book, brand is treated as a technical discipline with assessable outcomes, not as a marketing aesthetic. *(Throughout; concentrated in Chapter 8.)*

**Brand strategy** — The seven-component decision system that anchors a brand: mission, vision, values, UVP, archetype, voice, and positioning. Plus an eighth component: the negative-space list. *(Chapter 8.)*

**Build-Measure-Learn** — Eric Ries's three-step feedback loop from *The Lean Startup*. Build the smallest version that tests an assumption; measure what happens; learn whether the assumption held; iterate. *(Chapter 4.)*

**Case study (customer-as-hero)** — A piece of brand storytelling in which the customer is the protagonist, the brand or product is the guide, and the transformation from a stated problem to a measurable outcome carries the argument. The structure derives from Donald Miller's *Building a StoryBrand*. *(Chapter 10, Chapter 11.)*

**Constitutional AI (CAI)** — A training methodology developed at Anthropic, introduced in Bai et al. (2022), in which an AI model is guided by a written set of principles (a "constitution") and trained to critique and revise its own outputs against those principles. Used in this book as a worked case of architecture-as-brand-positioning. *(Chapter 1.)*

**Creative brief** — A 1–2 page document that translates brand strategy into design specifications. Standard sections: brand summary, project scope, audience, tone words, references, anti-references, constraints, deliverables. *(Chapter 9.)*

**Creative Engineer** — The integrated practitioner who has combined the four verbs of *ideate, build, brand, ship* into a single discipline. Not a job title; a practice. The book's central concept and the skill profile it argues a graduate engineer should build toward. *(Chapter 1.)*

**CrewAI** — An open-source Python multi-agent framework that uses a role / goal / backstory / tools pattern for agent specification, with explicit support for both crews (collaborative agent teams) and flows (orchestrated workflows). Used in Madison's MarketMind module. *(Chapter 6.)*

**Cursor** — An AI-augmented code editor (VS Code fork) whose architecture commits to "augment the developer." Compared in this book to Devin (which commits to "autonomous engineer") as a worked case of architecture-as-brand. *(Chapter 2, Chapter 6.)*

**Degraded mode** — The behavior a system falls back to when one of its external dependencies fails. A pipeline well-designed for fragility has explicit degraded modes for every critical contract; a pipeline without them crashes opaquely when a contract changes. *(Chapter 5.)*

**Devin** — An autonomous coding agent developed by Cognition Labs, distinguished by an architectural commitment to running autonomously in a sandboxed cloud environment. Compared in this book to Cursor as a worked case of architecture-as-brand. *(Chapter 2.)*

**ETL (Extract-Transform-Load)** — The classical data-engineering pattern: pull data from sources, clean and reshape it, write it to a destination. One of four meanings of "data pipeline" disambiguated in Chapter 5. *(Chapter 5.)*

**External contract** — In this book's terminology, the implicit or explicit agreement governing how an external service (API, model, data source) behaves. Contracts can change unilaterally, breaking downstream tools. The Reddit API rupture of June 2023 is the canonical example. *(Chapter 5.)*

**Four verbs** — The book's compressed framing of the Creative Engineer's discipline: *ideate, build, brand, ship*. Used as a running scorecard throughout the book. *(Chapter 1, throughout.)*

**Framer / Framer AI** — A visual-design tool that became a code-generating tool for personal sites and product landing pages. Recommended alongside v0 in Chapter 11 as a fast path to a deployed portfolio. *(Chapter 11.)*

**Gap analysis** — The PRD section in which the writer names actual competitors and identifies where each falls short of what the proposed product would deliver. The audit forces specificity. *(Chapter 4.)*

**Gradio** — A Python library for building interactive ML model demos. Now part of Hugging Face. Distinguished from Streamlit by being model-centric rather than workflow-centric. *(Chapter 7.)*

**Hero's Journey** — Joseph Campbell's monomyth pattern, articulated in *The Hero with a Thousand Faces* (1949). The simplified arc: ordinary world → call to adventure → threshold crossing → tests and allies → ordeal → reward → return with the boon. Used in this book as one of three storytelling frameworks for brand narrative. *(Chapter 10.)*

**Interface (four meanings)** — The four jobs the word "interface" does in current usage: (1) UI in the narrow sense; (2) interaction model; (3) deployment surface; (4) brand surface. The chapter argues that all four matter and must align with each other and with the underlying system. *(Chapter 7.)*

**LangGraph** — LangChain's graph-based multi-agent orchestration framework. Agents are nodes; control flow runs along edges. Distinguished from conversation-based (AutoGen) and workflow-based (n8n) orchestration. *(Chapter 6.)*

**Linear** — A project-management software company whose product philosophy and scope-discipline practices are used in Chapter 4 as a worked case. The "$100,000 no" — Linear's documented practice of declining feature requests that violate the product's point of view — is the canonical scope-discipline anecdote. *(Chapter 4.)*

**LLM (Large Language Model)** — A neural-network model trained on large text corpora to generate, classify, or transform text. The term covers a range of model sizes and architectures; in this book, LLM usually refers specifically to instruction-tuned chat models like Claude, GPT-4, Gemini, etc. *(Chapter 6.)*

**Madison framework** — An open-source agent-based AI marketing intelligence framework released by Humanitarians AI. Five collaborative agent layers (Intelligence, Content, Research, Experience, Performance) plus an orchestration layer. The book's reference architecture for the build sequence (Chapters 4–7). *(Chapter 2, throughout.)*

**Mission** — The first component of brand strategy. A one-sentence statement of the work the brand or person exists to do. Distinguished from a job description: a mission is the actual aim. *(Chapter 8.)*

**Mood board** — A curated visual collection that communicates brand or design direction. Three to ten images plus captions; the curation is the work. *(Chapter 9.)*

**Monomyth** — Joseph Campbell's term for the universal hero-story pattern he derived across cultures. *(Chapter 10.)*

**MVP (Minimum Viable Product)** — Eric Ries's term: "a version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort." Not "the smallest possible product"; "the smallest thing that produces validated learning." *(Chapter 4.)*

**Multi-agent system** — A coordinated set of specialized AI agents, with an orchestration mechanism that determines how they hand work to each other. Three architectural shapes: autonomous, orchestrated, conversational. *(Chapter 6.)*

**n8n** — An open-source, fair-code-licensed workflow automation platform. Used in this book as the default orchestration tool for the build sequence; also the orchestration tool inside the Madison framework. *(Chapter 5, Chapter 6.)*

**Negative space (brand)** — The list of things a brand or person *will not do*. The book argues that brand identity is more defined by negative-space commitments than by positive-space production. *(Chapter 8.)*

**Orchestration layer** — In a multi-agent system, the component that determines which agent runs when, what data is passed between them, and how failures are handled. Madison uses n8n as its orchestration layer; CrewAI uses Flows; LangGraph uses graph state machines. *(Chapter 2, Chapter 6.)*

**Path fork** — In this book's structural terms: the point in Chapter 8 where the reader chooses between the Personal Brand path and the Startup Brand path. The theoretical scaffolding is identical across both paths; exercises and case pairings diverge. *(Chapter 8 onward.)*

**Pipeline (data pipeline)** — A chain of operations that takes data from one or more sources, transforms it, and produces an output. In this book the term covers four shapes: ETL, stream-processing, workflow-automation, and inference. *(Chapter 5.)*

**Positioning** — The brand-strategy component that names where in the market a brand or person sits — who they compete with, who they complement. Distinct from differentiation, which describes how. *(Chapter 8.)*

**PRD (Product Requirements Document)** — A written specification of what a product will do, who it is for, and what success looks like. In this book, PRD is taught as a one-page contract with four sections: problem, gap, tool, MVP boundary. *(Chapter 4.)*

**Quest, The** — One of Christopher Booker's seven basic plots. A protagonist pursues an important objective, encountering obstacles and helpers along the way. Structurally close to the Hero's Journey but emphasizes the objective over personal transformation. Used in this book as one of three brand-storytelling frameworks. *(Chapter 10.)*

**ReAct** — A pattern from Yao et al. (2022) for AI agents that interleaves *reasoning* (thinking about what to do next) with *acting* (calling a tool, querying an API). The canonical foundational paper for tool-using LLM agents. *(Chapter 2, Chapter 6.)*

**Recognition handle** — In this book's vocabulary: the visual or verbal cue that lets a customer locate a brand quickly. Tropicana's orange-with-straw was a recognition handle; removing it broke customer recognition and caused the 2009 sales collapse. *(Chapter 3.)*

**Shadow (archetype)** — Each of the 12 brand archetypes carries a *shadow* — a characteristic failure mode the archetype is most prone to producing. The Sage's shadow is dogmatism; the Hero's is bullying; the Caregiver's is martyrdom. The shadow is a falsifiable failure-mode prediction that the archetype framework provides for free. *(Chapter 3.)*

**Signaling theory** — Michael Spence's 1973 framework for how labor markets handle asymmetric information. Employers cannot observe productivity directly, so candidates send signals (education, demonstrated work) that *cost* something to produce. Costly signals separate productive from less-productive candidates. The chapter applies the framework to AI-tooling-disrupted labor markets. *(Chapter 1.)*

**Stack Overflow Developer Survey** — An annual survey of working developers run by Stack Overflow. The 2024 edition is cited extensively in Chapter 1 for adoption data on AI coding tools. *(Chapter 1.)*

**Streamlit** — A Python-first web app framework used to convert data scripts into interactive web applications with minimal code. Distinguished from Gradio by being workflow-centric rather than model-centric. *(Chapter 7.)*

**Stripe** — The payments infrastructure company used in Chapter 8 (Startup path) as a worked case of long-running brand-strategy discipline. The seven-line code integration, the "developer-first" market positioning, and the Sage archetype expression are the focal points. *(Chapter 8 startup path.)*

**StoryBrand** — Donald Miller's brand storytelling framework, adapted from Campbell. Customer is hero; brand is guide. Used in this book as the third storytelling framework alongside the Hero's Journey and the Quest. *(Chapter 10.)*

**Surface alignment audit** — In the Self-as-Project running track: the systematic review of every public surface (LinkedIn, GitHub, resume, personal site, etc.) against the brand strategy, identifying overpromise, underpromise, or misalignment. *(Chapter 7 exercise.)*

**Tagline** — A one-sentence positioning statement used under a name on a resume, portfolio, or business card. *(Chapter 8.)*

**Trade-off** — A first-class concept throughout this book: every architectural and brand decision involves giving up something to gain something else. The book teaches the discipline of *naming the trade-off* explicitly rather than letting it operate silently. *(Throughout.)*

**UVP (Unique Value Proposition)** — One sentence describing what a person or product offers that competitors do not. The fourth component of brand strategy. *(Chapter 8.)*

**v0 (formerly v0.dev, now v0.app)** — Vercel's AI-powered React-component generator. Generates production-ready React with shadcn/ui components and Tailwind CSS from natural-language prompts. Recommended in Chapter 11 as a fast path to a deployed portfolio. *(Chapter 11.)*

**Values (brand strategy)** — The third component of brand strategy. Each value should imply at least two specific decisions the person or company would make differently from someone with different values. "Integrity" is not a value; "I will not work for companies whose product I cannot defend at a dinner party" is a value. *(Chapter 8.)*

**Vision** — The brand-strategy component that names the world the brand or person is working toward. Distinct from mission (what they exist to do): vision is the destination, mission is the journey. *(Chapter 8.)*

**Visual identity system** — The full set of visual rules that govern a brand: logo, color palette, typography, imagery direction, layout, motion. Distinct from a logo (which is one component) and from a brand strategy (which is upstream). *(Chapter 9.)*

**Voice (brand)** — The brand-strategy component that captures how a brand or person speaks across channels. Includes sentence rhythm, vocabulary preferences, formats favored and rejected. *(Chapter 8.)*

**WCAG (Web Content Accessibility Guidelines)** — The W3C standard for web accessibility. WCAG 2.2 AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text and graphical objects. Used in this book as the accessibility floor for visual identity work and portfolio deployment. *(Chapter 9, Chapter 11.)*

**Wireframe** — A low-fidelity structural layout of a page or screen, before any visual design is applied. In this book, wireframes are produced in Chapter 9 as the bridge between brand strategy and the Chapter 11 portfolio build. *(Chapter 9.)*

---

## References

Alphabetized by author last name. Chapters in which each source is principally cited are noted in parentheses.

### Books

Booker, Christopher. *The Seven Basic Plots: Why We Tell Stories.* London: Continuum, 2004. *(Chapter 10.)*

Cagan, Marty. *Inspired: How to Create Tech Products Customers Love.* 2nd ed. Hoboken, NJ: Wiley, 2018. *(Chapter 4.)*

Campbell, Joseph. *The Hero with a Thousand Faces.* New York: Pantheon Books, 1949. *(Chapter 10.)*

Kleppmann, Martin. *Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems.* 2nd ed. Sebastopol, CA: O'Reilly Media, 2024. (1st ed., 2017.) *(Chapter 5.)*

Mark, Margaret, and Carol S. Pearson. *The Hero and the Outlaw: Building Extraordinary Brands Through the Power of Archetypes.* New York: McGraw-Hill, 2001. *(Chapter 3, Chapter 8.)*

Miller, Donald. *Building a StoryBrand: Clarify Your Message So Customers Will Listen.* New York: HarperCollins Leadership, 2017. *(Chapter 10.)*

Ries, Eric. *The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses.* New York: Crown Business, 2011. *(Chapter 4.)*

Wheeler, Alina. *Designing Brand Identity: An Essential Guide for the Whole Branding Team.* 6th ed. Hoboken, NJ: Wiley, 2024. *(Adjacent reference.)*

### Academic papers

Bai, Yuntao, et al. "Constitutional AI: Harmlessness from AI Feedback." arXiv preprint arXiv:2212.08073, December 2022. https://arxiv.org/abs/2212.08073. *(Chapter 1.)*

Peng, Sida, Eirini Kalliamvakou, Peter Cihon, and Mert Demirer. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." arXiv preprint arXiv:2302.06590, February 2023. https://arxiv.org/abs/2302.06590. *(Chapter 1, Introduction.)*

Spence, Michael. "Job Market Signaling." *Quarterly Journal of Economics* 87, no. 3 (1973): 355–374. https://www.sfu.ca/~allen/Spence.pdf. *(Chapter 1.)*

Wu, Qingyun, et al. "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation." arXiv preprint arXiv:2308.08155, August 2023. https://arxiv.org/abs/2308.08155. *(Chapter 6.)*

Yao, Shunyu, et al. "ReAct: Synergizing Reasoning and Acting in Language Models." arXiv preprint arXiv:2210.03629, October 2022. (ICLR 2023.) https://arxiv.org/abs/2210.03629. *(Chapter 2, Chapter 6.)*

### Industry sources, technical documentation, and primary case material

Anthropic. "Claude's New Constitution." Anthropic news, 2024. https://www.anthropic.com/news/claude-new-constitution. *(Chapter 1.)*

Cognition Labs. *Devin* product documentation. https://devinai.ai. *(Chapter 2.)*

Cursor. *Cursor* product page. https://cursor.com. *(Chapter 2.)*

Failory. "The Pitch Deck Airbnb Used to Raise $600K." https://www.failory.com/pitch-deck/airbnb. *(Chapter 12.)*

Humanitarians AI. *Madison: Agentic Marketing & Branding Framework.* GitHub repository. https://github.com/humanitariansai/madison. *(Chapter 2, throughout the build sequence.)*

Kawasaki, Guy. "The 10/20/30 Rule of PowerPoint." https://guykawasaki.com/the_102030_rule/. *(Chapter 12.)*

LangChain. "LangGraph: Multi-Agent Workflows." LangChain blog. https://blog.langchain.com/langgraph-multi-agent-workflows/. *(Chapter 6.)*

Linear. *Principles & Practices.* Linear Method documentation. https://linear.app/method/introduction. *(Chapter 4.)*

Linear / Figma. "The Linear Method: Opinionated Software." Figma blog. https://www.figma.com/blog/the-linear-method-opinionated-software/. *(Chapter 4.)*

n8n. *n8n* documentation. https://docs.n8n.io. *(Chapter 5.)*

Stack Overflow. "AI | 2024 Stack Overflow Developer Survey." https://survey.stackoverflow.co/2024/ai. *(Chapter 1, Introduction.)*

Streamlit. *Streamlit* documentation. https://streamlit.io. *(Chapter 7.)*

Vercel. *v0* application generator. https://v0.app. *(Chapter 11.)*

W3C. *Web Content Accessibility Guidelines (WCAG) 2.2.* W3C Recommendation. https://www.w3.org/TR/WCAG22/. *(Chapter 9.)*

WebAIM. *Contrast Checker.* https://webaim.org/resources/contrastchecker/. *(Chapter 9.)*

### News and case-study coverage

ABC News. "Pepsi pulls protest ad starring Kendall Jenner after backlash." 2017. *(Chapter 10.)*

The Branding Journal. "What to Learn from Tropicana's Packaging Redesign Failure?" 2015. https://www.thebrandingjournal.com/2015/05/what-to-learn-from-tropicanas-packaging-redesign-failure/. *(Chapter 3.)*

CBS News. "Pepsi's Nonsensical Logo Redesign Document: $1 Million for This?" 2009. *(Chapter 9.)*

CNBC. "Snapchat redesign: Petition to scrap update hits 1 million votes." 2018. https://www.cnbc.com/2018/02/15/snapchat-redesign-petition-to-scrap-update-hits-1-million-votes.html. *(Chapter 7.)*

CNN Business. "Google shares lose $100 billion after company's AI chatbot makes an error during demo." 2023. https://www.cnn.com/2023/02/08/tech/google-ai-bard-demo-error. *(Chapter 7, Introduction.)*

CNN Money. "Gap's new logo flops." October 8, 2010. https://money.cnn.com/2010/10/08/news/companies/gap_logo/index.htm. *(Chapter 3, Chapter 9.)*

Creative Bloq. "Never forget that utterly ridiculous Pepsi logo design document." *(Chapter 9.)*

Fast Company. "Pepsi Logo Design Brief: Branding Lunacy to the Max." https://www.fastcompany.com/1160304/pepsi-logo-design-brief-branding-lunacy-max. *(Chapter 9.)*

NBC News. "'We missed the mark': Pepsi pulls ad featuring Kendall Jenner after controversy." 2017. https://www.nbcnews.com/news/nbcblk/pepsi-ad-kendall-jenner-echoes-black-lives-matter-sparks-anger-n742811. *(Chapter 10.)*

NPR. "After Uproar, Pepsi Halts Rollout Of Controversial Protest-Themed Ad That Features Kendall Jenner." April 5, 2017. *(Chapter 10.)*

NPR. "Thousands of Reddit communities 'go dark' in protest of new developer fees." June 12, 2023. *(Chapter 5.)*

TechCrunch. "Popular third-party Reddit app Apollo is shutting down as a result of Reddit's new API pricing." June 8, 2023. *(Chapter 5.)*

Wikipedia. "AutoGPT." Encyclopedia article. https://en.wikipedia.org/wiki/AutoGPT. *(Chapter 6.)*

Wikipedia. "The Hero with a Thousand Faces." Encyclopedia article. https://en.wikipedia.org/wiki/The_Hero_with_a_Thousand_Faces. *(Chapter 10.)*

Wikipedia. "Live for Now" (Pepsi 2017 ad). Encyclopedia article. https://en.wikipedia.org/wiki/Live_for_Now. *(Chapter 10.)*

Wikipedia. "Reddit API controversy." Encyclopedia article. https://en.wikipedia.org/wiki/Reddit_API_controversy. *(Chapter 5.)*

### Practitioner and educator references

Brittany Chiang. Personal portfolio (multiple versions). https://brittanychiang.com. *(Chapter 11.)*

Karpathy, Andrej. *Neural Networks: Zero to Hero.* YouTube playlist and course materials. https://karpathy.ai/zero-to-hero.html. *(Chapter 8 personal path.)*

Patrick Collison. Personal site and writing. https://patrickcollison.com. *(Chapter 8 startup path.)*

Stripe. Developer documentation. https://stripe.com/docs. *(Chapter 8 startup path.)*

---

## Index

For the print and press editions of this book, an index is compiled after final layout by a professional indexer and added to the back matter at this point.

For the online edition, an index is omitted; readers should use the search functionality of their reading platform, the chapter map in the Introduction, and the alphabetized Glossary above for navigation. The Notes and References sections are alphabetized by author and source for direct lookup.

If you encounter terms or concepts that are not adequately defined in the Glossary or that you cannot locate using the chapter map, please report the gap to the authors at the contact addresses provided in *About the Authors* above. Reader-reported gaps will be addressed in subsequent editions.

---

*End of back matter.*

