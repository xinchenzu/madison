<!--
    00-frontmatter.md
    FRONT MATTER — everything that appears before Chapter 1.
    Sections in order:
      1. Title page
      2. Copyright page
      3. Dedication
      4. Preface
    Roman numerals in print; precedes the body in the compiled EPUB.
-->

# Branding and AI

## Building the Creative Engineer

**Nik Bear Brown & Nina Harris**

---

## Copyright

Copyright © 2026 Nik Bear Brown & Nina Harris. All rights reserved.

Published by Bear Brown, LLC.

No part of this publication may be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of the publisher, except in the case of brief quotations in critical reviews and certain other noncommercial uses permitted by copyright law.

Madison™ is a framework released by Humanitarians AI under an open-source license; references in this book are made under fair use for educational purposes. Trademarks of third-party products discussed in case studies — including but not limited to Stripe, Anthropic, OpenAI, Google, Linear, Cursor, and Tropicana — remain the property of their respective owners.

The student work cited in this volume — including AdverseAI, PositionPulse, and other named projects — appears with the permission of the students who built it, and remains their intellectual property.

ISBN: [INSERT ISBN]

First edition: 2026

---

## Dedication

*For our students at Northeastern University, College of Engineering — the ones who arrived with code and left with a brand. You are the proof.*

---

## Preface

It is December 2025. A graduate student named Manisha Sahu walks into the final presentation for INFO 7375: Branding and AI at Northeastern University's College of Engineering. She has a laptop, a slide deck, an animated simulator, and a working tool deployed at a public URL. She decides — without telling us in advance — to turn the whole thing into a Shark Tank pitch. We are her sharks.

She hits her mark and opens with: *"Hi Sharks — my name is Manisha Sahu, and I'm asking for $150,000 for 8% equity in my company, AdverseAI."*

The product is real. AdverseAI is a free, sub-two-minute interface to FDA's adverse drug-event reporting database — millions of public reports that the existing commercial tools wall off behind $50,000-a-year subscriptions. Manisha built it in a single semester. The technical work was substantial: a multi-agent pipeline ingesting structured FDA data, an LLM layer for natural-language query, a deployed interface, a brand identity, a Substack telling the story. She walks us through every piece. She closes the demo. She handles our objections. She does not break character.

We did not teach her to do that. We taught her some of the components — the Madison architecture, the Jungian archetype framework, the visual identity system, the storytelling craft. Manisha assembled them into a moment we had not seen before. The semester before she walked into our class, she had been "code on a laptop." When she walked out, she had a live tool, a live website, a brand, a Substack, and a way of presenting herself we had not encountered in eight years of teaching together. The before and after of that semester — that is what this book is about.

---

This book exists because the cost of building software has collapsed and the cost of being seen has not.

For two decades, "I built a working app" was a costly signal. It separated capable engineers from less capable ones. The signal worked because production took weeks of evening labor, and less-capable candidates either could not finish or did not start. Recruiters, admissions committees, and hiring managers used GitHub the way universities use SATs — as a noisy but useful proxy.

That signal has been deprecated. GitHub Copilot, Claude Code, Cursor, v0, n8n, Streamlit, and a steadily expanding stack of AI tooling have made the production of working artifacts dramatically faster. A controlled study by Peng et al. found developers shipped a working HTTP server 56% faster with Copilot than without. The Stack Overflow Developer Survey reported in 2024 that 82% of developers were using AI tools to write code. When the cost of producing a signal collapses, the signal stops separating. The recruiter looking at a GitHub repo can no longer tell whether they are looking at six weekends of independent work or a Tuesday afternoon with an AI co-pilot.

What has not collapsed is the cost of *positioning* — of identifying a problem worth solving, articulating who the solution is for, and presenting both with enough specificity that the right humans recognize them. That work still costs. It still separates.

We wrote this book for the engineers and engineering students who are sitting in the middle of that shift. Most of them are excellent at building. Most of them have spent the last five years in coursework optimized for a labor market that is being repriced underneath their feet. They do not yet know that the work that will distinguish their careers in the next decade is no longer the build — it is the *frame* around the build. Why this tool, for whom, in whose voice, with what implicit promise. Their portfolios show that they can ship code. Their portfolios do not yet show that they can ship products.

That is the gap this book argues into.

---

There are excellent textbooks on AI engineering. There are excellent textbooks on brand strategy. There is, to our knowledge, no textbook that treats them as a single discipline for a technical graduate audience.

The branding texts assume a marketing reader. They open with case studies of Coca-Cola and Unilever, build out the visual-identity language of advertising agencies, and stop short of the technical machinery a working AI engineer can — and now must — wield. The AI engineering texts assume a pure-engineering reader. They open with autograd, build out the architecture of multi-agent systems, and stop short of the strategic positioning work that determines whether anything they build gets seen.

The Creative Engineer is the practitioner who refuses the choice between those two halves. Ideate, build, brand, ship — the four verbs we organize this book around — used to describe four different jobs at four different companies. AI tooling has compressed them. A graduate in 2026 can scope a problem, design an architecture, ship a working tool, position it with archetype-driven brand strategy, write a case study that makes the work matter to a reader, and stand in front of a room and pitch the result — all within twelve weeks, all as a single integrated act. The students whose work appears in this book are evidence that the compression is real. Manisha Sahu shipped AdverseAI. Swara Joshi shipped PositionPulse, a competitive-intelligence tool that compresses forty hours of brand research into five minutes. Manasa Karanam shipped a deployed brand and a body of public writing on the cloud-AI gap. None of them did this by being twice as fast at engineering. They did it by integrating the strategic work that engineering programs traditionally treat as someone else's job.

What we argue in this book that has not been said quite this way before: brand strategy *is* a technical discipline. It has methods, frameworks, falsifiable claims, and assessable outcomes. The Mark and Pearson twelve-archetype system is not a personality quiz; it is a constraint-satisfaction structure that makes brand decisions decidable instead of arbitrary. The shadow of an archetype is a falsifiable failure-mode prediction. The negative-space rule — that what a brand declines defines it more than what it produces — is testable against any brand's public artifacts. We do not treat any of these as marketing folklore. We treat them as engineering tools that happen to operate on identity instead of code.

We also argue that the Madison framework, an open-source agent-based marketing intelligence platform from Humanitarians AI, is the right reference architecture to teach against. Madison is one of the few publicly-readable multi-agent systems with both production deployment data and an architectural commitment legible enough to teach. We use it as the *spine* of the technical half of the book — students study its five-layer structure, build their own tools against its patterns, and use the comparison to develop architectural judgment. Madison's developers did not write the framework with this textbook in mind. They wrote it as a working tool. That it teaches well is fortunate; we are using it.

---

A note about who we are, and why we are the ones writing this.

Nina Harris has worked in brand and creative direction for forty years. She has led creative teams at Charles Schwab, Publicis, McCann-Erickson, and Saatchi & Saatchi. She has produced and directed photography libraries for Fortune 100 brands, run the brand-standards work that scaled across thousands of touchpoints, and trained generations of designers, art directors, and creative producers. The strategic methods we teach in the brand half of this book — archetype work, visual identity systems, storytelling frameworks, professional presence — come from her practice, sharpened across hundreds of brand engagements before any of them met a textbook page.

Nik Bear Brown is an Associate Teaching Professor at Northeastern University's College of Engineering. He has spent the last decade teaching AI, machine learning, and software engineering to graduate students, and the last several years writing about AI's pedagogical implications. The technical methods we teach in the build half of this book — agent architecture, data pipeline design, deployment discipline, interface alignment — come from his engineering practice and from the hundreds of student projects he has reviewed since AI tooling started making this kind of integrated work possible.

We have co-taught INFO 7375: Branding and AI at Northeastern's College of Engineering for several semesters. The book you are holding is a structured version of that course, with a thicker theoretical scaffold and a deeper case layer than a fourteen-week semester can fit. We have rewritten chapters in response to what students struggled with. We have added the Creative Engineer framing because we kept noticing that the students who thrived in the course were the ones who had stopped thinking of "engineer" and "designer" as separate identities. We have made archetype work load-bearing because, again and again, the students who got hired or funded were the ones whose work was archetypally coherent — not the ones whose work was technically most impressive.

This book is the closest we can come to giving every student the course we have been able to give some of them.

---

A short, honest list of what this book does *not* cover.

We do not teach pure brand strategy at the depth of *Designing Brand Identity* or *The Hero and the Outlaw*. Those books exist; we cite them; readers who want to go further should read them. We do not teach pure AI engineering at the depth of *Designing Data-Intensive Applications* or *Hands-On Large Language Models*. Same caveat. We do not teach financial modeling, fundraising mechanics, legal incorporation, or the operational realities of running a hiring funnel — those are real disciplines and adjacent to the work we do teach, but they are not the work we do teach.

We do not teach how to be lucky. The market still has to be willing to recognize the work. The framework increases the surface area of recognition; it does not guarantee an outcome. We are honest about that, in the chapters and here.

We have hard rules in our own writing process — no fabricated sources, no invented quotes, no statistics without primary citations. Where we are uncertain, we flag it. Where the evidence does not yet settle a claim, we say so. We have tried to model the discipline we ask of our students. The reader is, of course, free to push back on any of it.

---

What we hope this book makes possible: more students like Manisha walking into rooms with both halves of the work in hand. Engineers whose tools get noticed. Designers whose systems can scale. Founders whose first hire is not "someone who can market this for me" but a peer who understands the technical and strategic stakes equally. Practitioners who have stopped apologizing for the parts of the work the field has historically split into separate departments.

If the book lands, the next semester's *AdverseAI* — the next student walking into a Shark Tank pitch as the closing argument of their final exam — will not surprise their professors. They will be the ordinary outcome of a course that taught them the integrated practice from the first day.

That is what we are betting on. That is what this book is for.

---

*Nik Bear Brown · Boston*
*Nina Harris · Greater Minneapolis–St. Paul*
*Spring 2026*

