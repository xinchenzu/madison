# Chapter 9 — Visual Identity Systems
*Design without strategy is the Pepsi document. Strategy without design is a Word doc with good intentions. The system is what happens when both are present.*

---

## Learning Objectives

By the end of this chapter you should be able to:

1. **Explain** why visual identity is a *system* downstream of brand strategy, and identify what happens — specifically — when visual work is done without strategic substance underneath.
2. **Write** a creative brief that translates brand strategy into design specifications: archetype-aligned tone words, useful references, useful anti-references, and a constrained deliverables list.
3. **Construct** a color palette — primary, accents, neutrals — with every text-on-background combination tested against WCAG AA accessibility standards and documented with contrast ratios.
4. **Select** a typography pair aligned to the archetype, with display and body faces specified by weight and size for headings, body, UI, and captions.
5. **Identify** archetypal mismatch in a visual identity — where the visual language contradicts the strategic archetype — and name the specific components that are in conflict.
6. **Produce** a low-fidelity website wireframe that encodes the archetype structurally: page hierarchy, section order, layout grid, component reuse.

---

## Prerequisites

This chapter assumes you have completed Chapters 1 through 8. Specifically:

- **Chapter 1 and 3:** Your committed archetype. All visual decisions in this chapter are constrained by the archetype. A Sage's palette is built differently from a Hero's. A Caregiver's typeface logic differs from a Magician's. Bring the archetype.
- **Chapter 8:** Your brand strategy document — the one-sentence positioning, voice attributes, audience description, and values. The creative brief in section 1 of this chapter is the direct output of Chapter 8's strategy work. Without it, the brief has nothing to translate.
- **Chapter 7:** Your deployed tool and its README. The wireframe this chapter produces is the structural plan for the portfolio site in Chapter 11 — and the README's architecture diagram is one of the visual assets you will need to incorporate.

You do not need prior design experience. You need to be able to make decisions under constraints and articulate why you made them. That is the skill this chapter teaches.

---

## Why This Chapter

Chapter 8 produced a brand strategy — a document that says what you stand for, who you are for, and how you want to be perceived. A brand strategy document is not a brand. A brand is what a person perceives when they encounter your work. The gap between the strategy document and the perception is where visual identity lives.

This chapter closes that gap. Visual identity is the system that translates strategic commitments into perceptual experience: the color that signals analytical restraint (or bold confidence, or warm approachability), the typeface that signals expertise (or energy, or craft), the layout rhythm that signals depth (or speed, or play). When the translation is done well, the perception matches the strategy. When it is done poorly — or not done at all — the perception is whatever the designer's defaults produce, which is rarely what the strategy intended.

The Pepsi redesign story opens this chapter because it is the cleanest illustration of what happens when visual work is done without strategic substance. The 27-page "BreathTaking" document had to invoke the Mona Lisa and the gravitational field because there was nothing else to invoke. The brand had not committed to anything specific that the visual could express. The visual borrowed from everything, justified itself by association with everything, and ended up communicating nothing.

Your visual work, in this chapter, has something to express: the archetype from Chapter 1, the strategy from Chapter 8, the tool from Chapters 4 through 7. The system you build will be coherent because it answers to those commitments, not because you have achieved design mastery. Coherence is the standard. Craft follows with time.

---

## 1. What "Visual Identity" Actually Means — Six Components, One System

The phrase *visual identity* covers a set of components that, together, tell a viewer what brand they are looking at. Most non-designers treat these components as independent decisions. They are not. They are a system — each component is perceived in context with the others, and the context is the archetype.

**Component 1: Logo and wordmark.** The single most-replicated mark, appearing at every scale — favicon to billboard. A logo has three structural forms: a wordmark (the brand name, styled typographically), a symbol (a standalone graphic mark), and a lockup (symbol plus wordmark combined). For a new AI tool brand, a wordmark or a wordmark with a simple symbol is the right starting point. Complex symbols require brand recognition that takes years to build.

**Component 2: Color palette.** Primary, secondary, and neutral colors — typically four to six committed values plus their accessibility-tested variants. The palette is the highest-frequency brand signal: it appears in every pixel of every interface, every page of every document. Get it wrong and the archetype mismatch is felt on every visit.

**Component 3: Typography.** A type system — typically one display face for headlines and one body face for running text — with weights and sizes specified for every context: H1 through H3, body, caption, UI labels, navigation. Typography sets the brand's register before a word is read. A serif body face signals patience and depth. A compressed geometric sans-serif signals speed and efficiency. The choice is a brand commitment.

**Component 4: Imagery direction.** What kinds of photographs, illustrations, icons, and visual metaphors fit the brand. This is a *style* commitment, not a specific asset: "authentic, human, slightly rough-edged photography, no stock images" versus "flat, geometric illustration, single accent color, minimal detail." The imagery direction is what governs AI-generated visuals in Chapter 11.

**Component 5: Layout system.** Grid, spacing, and hierarchy rules that govern how all the above components arrange on a page or screen. The layout system is what makes a brand recognizable even when no logo is visible. The New York Times' two-column body with the display quote in the third column is an identity element as recognizable as the Gothic masthead.

**Component 6: Motion** (where relevant for digital products). How elements appear, transition, and behave. A Sage brand's motion is deliberate, unhurried — elements fade in, do not bounce. A Hero brand's motion is dynamic, directional — elements slide in, respond immediately. For a portfolio and a deployed AI tool, motion is a secondary concern; get components 1 through 5 coherent first.

The system relationship is what matters. A logo that looks fine in isolation can clash with the wrong typography. A palette that is beautiful on print can fail accessibility on screen. A layout that works for long-form reading can feel slow for a task-oriented tool. The visual identity is the rulebook that prevents each component from making choices the others cannot support.

| component name | what it contains | how it expresses archetype | most common failure mode when strategy is absent |
| --- | --- | --- | --- |
| Identity | Connects identity to the chapter's main distinction | Connects identity to the chapter's main distinction | Fails when identity is treated as settled instead of checked |
| Components | Connects components to the chapter's main distinction | Connects components to the chapter's main distinction | Fails when components is treated as settled instead of checked |
| Component | Connects component to the chapter's main distinction | Connects component to the chapter's main distinction | Fails when component is treated as settled instead of checked |
| Name | Connects name to the chapter's main distinction | Connects name to the chapter's main distinction | Fails when name is treated as settled instead of checked |

---

## 2. Why Visual Decisions Need Archetypal Foundation

Before building the system, I want to make the mechanism explicit — why visual elements without archetypal foundation produce the Pepsi outcome.

Visual elements are perceived in *context with each other*. A user encountering a brand does not evaluate the logo, then separately evaluate the typeface, then separately evaluate the color. They perceive all of it simultaneously and form a single impression. That impression either coheres — the components support each other and reinforce a single message — or it conflicts. The user cannot always articulate what is wrong when components conflict, but they feel the wrongness as a vague sense that the brand is trying to be two things at once.

Archetypes are the mechanism that makes coherence achievable. When every component answers to the same archetype, they converge toward the same impression automatically — not because each component is designed to match the others, but because each is designed to match the same underlying personality.

Consider four archetypes and what their visual logic looks like in practice.

A **Sage** archetype's visual language is restrained, evidence-rich, often serif-anchored, with generous whitespace and high-contrast type. The New York Times. The Economist. Stripe's documentation site (which is, in the visual sense, archetypally Sage — the typography, color restraint, and systematic layout all signal "we have thought about this carefully"). Sages do not decorate; they clarify.

A **Hero** archetype's visual language is bold, saturated, dynamic, often diagonal or motion-implying. Nike. Red Bull. Apple's product pages for iPhone launch campaigns. Strong contrast, athletic typography, layouts that imply momentum. Heroes do not explain; they demonstrate.

A **Caregiver** archetype's visual language is warm, approachable, soft-edged, with palettes that run toward earth tones or pastels. Johnson & Johnson. Many healthcare nonprofits. Headspace. Caregivers do not challenge; they embrace.

A **Magician** archetype's visual language uses jewel tones, intentional gradients, unexpected combinations that imply transformation. Early Adobe. Spotify's canvas features. The archetype implies that something ordinary will become extraordinary — the visual should feel like it is already in transition.

These are not arbitrary conventions. Each one is a documented response to how users form impressions of brands — what signals authority to the audience that values authority (Sage), what signals momentum to the audience that values achievement (Hero). When the visual matches the archetype, the brand communicates immediately, without requiring a 27-page explanation. When it mismatches, the "BreathTaking" document happens.

### Three Visual-Identity-Without-Strategy Failures

Three cases at increasing levels of damage, to make the mechanism concrete.

**Pepsi, 2008 — strategy-free rationale.** The redesign produced a slightly modified logo. The 27-page internal brief, later leaked, justified the change by reference to the Golden Ratio, the Mona Lisa, the Parthenon, the Theory of Relativity, and the gravitational pull of the Earth. Pepsi's archetype is broadly Innocent (joy, refreshment, simple pleasure) with Jester elements. The document tried to position the logo as Sage (classical references, mathematical proportions, physics). The archetypal mismatch between the brand's actual position and the rationale's aspirational position produced a document that was incoherent — and widely mocked when it leaked. The visual change was modest; the brand damage was that Pepsi had demonstrated, publicly, that it did not know what it was.

**Yahoo, 2013 — strategy-free process.** Yahoo announced a "30-day logo journey" — publishing a different logo concept every day for a month before revealing the final mark. The exercise substituted public process for private strategy. By day 30, Yahoo had demonstrated that no archetype was constraining the final choice, because the 30 daily concepts were not consistent with each other. The final logo read as committee output — which it was. Yahoo's visual identity never stabilized because the strategic substance required to anchor a visual identity was absent. The company was sold to Verizon in 2017 for less than $5 billion; at its peak it had been valued at over $100 billion.

**Tropicana, 2009 — wrong archetypal foundation.** The repackaging was technically accomplished design — clean typography, premium photography, simplified layout. It failed because the design expressed the wrong archetype. The original orange-with-straw was an Innocent archetype visual: pure, simple, natural, unpretentious. The new packaging (a glossy glass of orange juice on a white field) expressed a Lover/Ruler premium positioning — elevated, aspirational, refined. The visual was good; it was an excellent expression of an archetype that was not Tropicana's. Sales dropped 20% in two months. The original packaging was restored.

The pattern: visual work without strategic substance (Pepsi, Yahoo), or with the wrong strategic substance underneath (Tropicana). The chapter's discipline is to ensure neither happens to your tool's brand.

| what was changed | the strategic failure | the archetypal mismatch | the brand consequence | the recovery |
| --- | --- | --- | --- | --- |
| Identity | Fails when identity is treated as settled instead of checked | Connects identity to the chapter's main distinction | Example: identity | Connects identity to the chapter's main distinction |
| Failures | Fails when failures is treated as settled instead of checked | Connects failures to the chapter's main distinction | Example: failures | Connects failures to the chapter's main distinction |
| Pepsi | Fails when pepsi is treated as settled instead of checked | Connects pepsi to the chapter's main distinction | Example: pepsi | Connects pepsi to the chapter's main distinction |
| 2008 | Fails when 2008 is treated as settled instead of checked | Connects 2008 to the chapter's main distinction | Example: 2008 | Connects 2008 to the chapter's main distinction |

---

## 3. The Creative Brief — Translating Strategy into Design

The creative brief is the document that translates brand strategy (Chapter 8) into design specifications. It is the most important artifact in the visual identity process because it is the only moment where the strategic commitments are made explicit as design constraints before any visual work begins. Once the brief is written, every subsequent visual decision can be evaluated against it. Without the brief, decisions are made by taste, which means they are made inconsistently, which means the system does not cohere.

A complete creative brief has eight sections. Each section is a constraint, not a description.

**Section 1: Brand strategy summary.** Four to six sentences pulled from Chapter 8. Mission, archetype, audience, voice. This section exists to remind everyone working on the visual identity what the strategy is — and to make clear that the design must express the strategy, not invent a new one.

**Section 2: Project scope.** What, specifically, is being designed. For this chapter: logo direction, color palette, typography pair, mood board, website wireframe, one-page brand guidelines. Scope prevents the brief from expanding to include every possible surface.

**Section 3: Audience.** Named. Not "marketing professionals" — "marketing managers at small B2B SaaS companies with no dedicated analytics team who will use the tool on Monday mornings." The audience description determines what visual language will read as trustworthy and professional to the specific people the tool is for.

**Section 4: Tone words.** Three to five adjectives that describe how the design should *feel*. The discipline here is that vague words are forbidden. *Innovative*, *modern*, *clean*, *professional* are anti-words — they describe nothing, constrain nothing, and could apply to any brand. Tone words that do work: *Restrained, evidence-forward, patient* (for a Sage). *Decisive, saturated, kinetic* (for a Hero). *Warm, unhurried, grounded* (for a Caregiver). *Luminous, transitional, unexpected* (for a Magician). Each one narrows the design space in a direction the archetype implies.

**Section 5: References.** Three to five examples of visual work that captures the desired direction, with a note on what specifically about each one works for this brief. The note is what makes the reference useful. "Stripe's documentation site — the way it uses whitespace to make dense technical content feel readable without dumbing it down" is a reference. "I like Stripe" is not.

**Section 6: Anti-references.** Two to four examples of visual work that captures what to *avoid*, with a note on why each fails the brief. Anti-references are often more useful than references because they make the negative space explicit. A Sage brand's anti-reference might be: "Red Bull's visual identity — saturated, diagonal, high-motion energy is exactly the archetypal mismatch we need to avoid. Our users want to trust the analysis; Hero-archetype visual language implies salesmanship, not rigor."

**Section 7: Constraints.** Color palette inheritance from existing brand elements (if any), platform requirements (web, mobile, print), accessibility requirements (WCAG level — AA minimum for any digital surface). Constraints are not restrictions on design talent; they are the conditions under which the design has to succeed.

**Section 8: Deliverables.** A specific, numbered list of what the brief expects to be produced by the end of this chapter. Clear deliverables prevent scope creep and give a concrete checklist for self-evaluation.

The brief should be dense, one to two pages, no padding. Every sentence is a constraint. A sentence that cannot be used to evaluate a design decision should be cut.

| section name | the question it answers | what a weak entry looks like | what a strong entry looks like |
| --- | --- | --- | --- |
| Creative | Connects creative to the chapter's main distinction | Connects creative to the chapter's main distinction | Connects creative to the chapter's main distinction |
| Brief | Connects brief to the chapter's main distinction | Connects brief to the chapter's main distinction | Connects brief to the chapter's main distinction |
| Section | Connects section to the chapter's main distinction | Connects section to the chapter's main distinction | Connects section to the chapter's main distinction |
| Anatomy | Connects anatomy to the chapter's main distinction | Connects anatomy to the chapter's main distinction | Connects anatomy to the chapter's main distinction |

---

## 4. Color Palette — Construction and Accessibility

Color is the highest-frequency brand signal. Every pixel of every interface carries the palette. Every page of every document. Every email header. A wrong color decision is encountered more often than any other wrong decision.

The palette construction process starts from the archetype, not from personal preference.

**Sage palette logic:** Restrained, high-contrast, low-saturation. A Sage brand does not decorate with color; it uses color to organize information. The primary is often a near-neutral — dark slate, deep teal, ink blue. The accent is used sparingly and purposefully, not decoratively. The neutral system does the heavy lifting: a near-black for body type, a true near-white for backgrounds, one or two mid-grays for secondary information.

**Hero palette logic:** Saturated primaries, strong contrast, motion-implying. The primary is often a saturated red, electric blue, or deep orange. The accent amplifies the primary rather than complementing it. The neutral system is minimal — the brand lives in the saturated zone.

**Caregiver palette logic:** Warm, approachable, soft. Earth tones, muted greens, warm grays. Nothing that reads as aggressive, cold, or clinical. The primary often sits in a warm mid-range — terracotta, sage green, warm stone.

**Magician palette logic:** Jewel tones, intentional gradients, chromatic depth. Deep purples, emerald greens, midnight blues with accent colors that feel transformative. The palette implies richness.

### Building the Palette

A minimum viable palette has five components: one primary, two accents, and two neutrals (near-black and near-white). A full palette adds one or two mid-neutrals for secondary information.

For each color, commit a name and a hex value. The name is for human communication — "Forest Slate" is easier to say in a design review than "#2D4A52." The hex value is for implementation. Document both.

### Accessibility Testing

Every text-on-background combination used in the interface must pass WCAG 2.2 AA standards at minimum. The numbers are specific and non-negotiable:

- **Normal text** (below 18pt, or below 14pt bold): contrast ratio of **4.5:1** minimum.
- **Large text** (18pt or above, or 14pt bold or above) and **graphical objects**: contrast ratio of **3:1** minimum.
- AAA standard is 7:1 for normal text and 4.5:1 for large text — not required, but worth targeting for body text.

Test every combination you intend to use. The [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) takes two hex values and returns the ratio. Run: primary text on primary background, secondary text on primary background, any accent color used as text, any accent color used as a UI element on a background, inverted combinations for dark mode if applicable.

Document the results in a table: color name, hex, background hex, contrast ratio, pass/fail. Every fail requires a hex adjustment. Adjusting usually means darkening the text color or lightening the background — small shifts in value (the V in HSV) can bring a failing combination into compliance without changing the palette's visual character.

Here is what a partial accessibility audit table looks like for a Sage-archetype palette:

| Combination | Foreground | Background | Ratio | AA Normal | AA Large |
|---|---|---|---|---|---|
| Body text on white | #1A1A2E (near-black) | #FAFAF8 (near-white) | 17.4:1 | ✓ | ✓ |
| Secondary text on white | #6B7280 (mid-gray) | #FAFAF8 | 4.6:1 | ✓ | ✓ |
| Accent on white | #0D5C63 (dark teal) | #FAFAF8 | 8.9:1 | ✓ | ✓ |
| White text on accent | #FAFAF8 | #0D5C63 | 8.9:1 | ✓ | ✓ |
| Caption text on white | #9CA3AF (light gray) | #FAFAF8 | 2.9:1 | ✗ | ✓ |

Caption text failed at normal-text size. The fix: darken the caption color to #6B7280, which returns 4.6:1 — a pass. The palette character does not change; the implementation is now compliant.

| combination | foreground hex | background hex | contrast ratio | AA Normal pass/fail | AA Large pass/fail) |
| --- | --- | --- | --- | --- | --- |
| Blank | Connects blank to the chapter's main distinction | Connects blank to the chapter's main distinction | Connects blank to the chapter's main distinction | Connects blank to the chapter's main distinction | Connects blank to the chapter's main distinction |
| Accessibility | Connects accessibility to the chapter's main distinction | Connects accessibility to the chapter's main distinction | Connects accessibility to the chapter's main distinction | Connects accessibility to the chapter's main distinction | Connects accessibility to the chapter's main distinction |
| Audit | Connects audit to the chapter's main distinction | Connects audit to the chapter's main distinction | Connects audit to the chapter's main distinction | Connects audit to the chapter's main distinction | Connects audit to the chapter's main distinction |
| Template | Connects template to the chapter's main distinction | Connects template to the chapter's main distinction | Connects template to the chapter's main distinction | Connects template to the chapter's main distinction | Connects template to the chapter's main distinction |

| primary color direction | accent direction | neutral system character | palette to avoid (anti-archetype) | real-world brand example of this palette logic |
| --- | --- | --- | --- | --- |
| Palette | Connects palette to the chapter's main distinction | Connects palette to the chapter's main distinction | Connects palette to the chapter's main distinction | Example: palette |
| Construction | Connects construction to the chapter's main distinction | Connects construction to the chapter's main distinction | Connects construction to the chapter's main distinction | Example: construction |
| Guide | Connects guide to the chapter's main distinction | Connects guide to the chapter's main distinction | Connects guide to the chapter's main distinction | Example: guide |
| Archetypes | Connects archetypes to the chapter's main distinction | Connects archetypes to the chapter's main distinction | Connects archetypes to the chapter's main distinction | Example: archetypes |

---

## 5. Typography — Pair Logic and Specification

Typography does two jobs simultaneously. It does the legibility job — making text readable at the sizes and contexts where it appears. And it does the archetype job — signaling the brand's personality before the reader has processed a single word.

Most visual identity systems use two typefaces: a display face for headlines and a creator-facing touchpoints, and a body face for running text and UI. The display face carries more archetypal weight; the body face carries more legibility weight. When both are doing both jobs well, the system is strong.

### Archetypal Typeface Logic

**Sage archetypes** lean toward classical or contemporary serifs for display — faces with historical authority and legibility at reading sizes: Tiempos Text, GT Sectra, Source Serif 4, Playfair Display. The body face is typically a humanist sans-serif that reads cleanly in UI contexts: Inter, IBM Plex Sans, Source Sans 3. The combination signals: we have thought carefully and written clearly.

**Hero archetypes** lean toward bold geometric or grotesque sans-serifs for display — faces that imply confidence and momentum: Aktiv Grotesk, Founders Grotesk, DM Sans at heavy weights. The body face is usually from the same family at regular weight, or a companion grotesque. The combination signals: we are fast and we are right.

**Caregiver archetypes** lean toward rounded sans-serifs or warm humanist typefaces: Nunito, Mulish, Lato, Figtree. The body face matches the warmth of the display face. The combination signals: we are approachable and we are here for you.

**Magician archetypes** have the most flexibility — they can use display faces with dramatic proportions, unusual character details, or intentional irregularity: Fraunces (variable, with optical sizes that shift at display scale), Playfair Display at heavy weights with tracking, or even system fonts used in unexpected ways. The body face grounds the display face's drama in readability. The combination signals: transformation happens here.

### The Free-and-Open Constraint

For a course project that will be deployed on a public portfolio, use typefaces with open licenses — Google Fonts, Adobe Fonts (if you have Creative Cloud), or explicitly open-source releases from type foundries. The major Google Fonts families cover all four archetypes adequately:

- Sage: Source Serif 4 + Inter, or Lora + Source Sans 3
- Hero: DM Sans (all weights) as a single-family system, or Outfit + DM Sans
- Caregiver: Nunito + Lato, or Figtree (single-family)
- Magician: Playfair Display + Source Sans 3, or Fraunces + Inter

### Type Specification

Choosing the typefaces is not enough. You need to specify how they are used:

- **Display / H1:** Face, weight, size, line height, tracking. Example: *Source Serif 4, 700, 56px / 1.1 line height, -0.02em tracking.*
- **H2:** Face, weight, size, line height. Example: *Source Serif 4, 600, 36px / 1.2.*
- **H3:** Face, weight, size. Example: *Inter, 600, 24px / 1.3.*
- **Body:** Face, weight, size, line height. Example: *Inter, 400, 16px / 1.6.*
- **Caption / label:** Face, weight, size. Example: *Inter, 400, 13px / 1.4.*
- **UI elements (buttons, navigation):** Face, weight, size, letter spacing. Example: *Inter, 500, 14px / 1, 0.02em tracking.*

The specification prevents the system from drifting. Without it, every new page is a new typographic decision — and the accumulated drift destroys system coherence over time.

| recommended display face (with Google Fonts link) | recommended body face (with Google Fonts link) | what the pairing signals | type to avoid (anti-archetype) | example brand using this pairing logic |
| --- | --- | --- | --- | --- |
| Archetype | Use archetype as the decision guide | Connects archetype to the chapter's main distinction | Connects archetype to the chapter's main distinction | Example: archetype |
| Typography | Use typography as the decision guide | Connects typography to the chapter's main distinction | Connects typography to the chapter's main distinction | Example: typography |
| Pair | Use pair as the decision guide | Connects pair to the chapter's main distinction | Connects pair to the chapter's main distinction | Example: pair |
| Guide | Use guide as the decision guide | Connects guide to the chapter's main distinction | Connects guide to the chapter's main distinction | Example: guide |

---

## 6. Wireframes — Encoding the Archetype Structurally

The wireframe is a low-fidelity structural plan for the portfolio site you will build in Chapter 11. Its job is to specify page hierarchy, section order, layout grid, and component reuse — before any visual rendering happens.

A wireframe looks like boxes and labels. It does not look like a finished design. This is intentional. The wireframe encodes structural decisions that, once made in code, are expensive to change. Making them at the wireframe stage — where a change is a box moved on a page — is the right time.

### What the Wireframe Specifies

**Page count and hierarchy.** For a portfolio: Home, About, Projects (or Work / Case Studies), Writing, Contact. That is five pages. Every page beyond five needs explicit justification; the portfolio visitor's time is finite and each additional page dilutes the focus.

**Section blocks per page, in order.** The home page for a Sage might be: (1) above-the-fold hero with name + positioning sentence + primary CTA; (2) a selected work section with three project cards; (3) a writing/thought-leadership section with one featured piece; (4) a brief bio with a link to the About page; (5) footer with contact and links. That order encodes a priority: *who I am and what I do* → *evidence* → *thinking* → *connection*. A Hero archetype might reorder: lead with the most impressive project (not the name), follow with a performance metrics strip, then bio, then writing.

**Layout grid.** Column count and max content width. For a text-forward Sage: 12-column grid, max width 1100px, 60-character line length for body text. For a visual-forward Hero: wider column spread, 1440px max width, more image real estate. The grid is the architectural decision that makes the layout feel intentional rather than arbitrary.

**Visual hierarchy.** Where the H1 lives on each page (typically above the fold, always). How H2s relate to H3s (H2 opens sections, H3 opens subsections within case studies). Where the primary call-to-action lives (above the fold on the home page; at the end of each case study; in the footer globally).

**Component reuse.** Define once, use everywhere. A project card is used on the home page's selected work section and on the Projects page. A writing card is used on the home page and on the Writing index. The footer is identical across all pages. Defining the components at the wireframe stage means the Chapter 11 v0 prompt can reference them by name: "use the project card component from the wireframe spec."

### Archetypal Wireframe Logic

The wireframe encodes the archetype in its structural rhythm, even at low fidelity.

A **Sage** wireframe has more text density, longer-form sections, fewer full-bleed images, and a layout that implies depth. The home page's above-the-fold has the positioning sentence prominently — the Sage leads with the thinking, not the image. Case study pages are long-form, with the architecture diagram embedded in the technical section.

A **Hero** wireframe has a large above-the-fold image or video loop, a metrics strip (performance numbers displayed boldly), short and punchy section copy, and a primary CTA that implies action. The portfolio functions as a proof sheet — the work is displayed as evidence of achievement, not explained in depth.

A **Caregiver** wireframe uses softer section transitions, more white space between elements, a warmer and more conversational about-section, and a contact page that emphasizes how easy it is to reach the person. The layout does not push; it invites.

A **Magician** wireframe experiments with layout conventions — sections that are not full-width, typographic elements that break the grid intentionally, a home page that opens with an unexpected visual rather than the conventional name-and-title hero.

<!-- → DIAGRAM: Two wireframe layouts side by side — left: Sage-archetype home page (above-fold with positioning text + name, selected work section with three text-forward cards, writing section, bio strip); right: Hero-archetype home page (above-fold with large project image, metrics strip, short copy, bold CTA). Student should see how the same page architecture produces different archetypally-aligned experiences. -->

---

## 7. Integration — What the Visual Identity System Is Doing

The visual identity system closes a design loop that opened in Chapter 8.

Chapter 8 produced a brand strategy — the theory of who you are and what you are for. The creative brief (section 3 of this chapter) translated that strategy into design constraints. The palette (section 4) expressed the archetype in color. The typography (section 5) expressed the archetype in type. The wireframe (section 6) expressed the archetype in structure. The brand guidelines document — which this chapter also produces — captures all of those decisions in a single reference that any future collaborator can use.

The system relationship is what makes the whole more than the sum of the parts. A palette without a type system is a color mood board. A type system without a layout system is a font choice. A layout system without an archetype is a default template. The system is what happens when all four components answer to the same strategic archetype — and then a designer or developer who has not been in every meeting can pick up the brand guidelines document and produce on-brand work.

Test the system by giving the brand guidelines document to one classmate who has not been involved in your brand work. Ask them to make one design decision using the document — pick a color for a button state, choose a headline weight for a new page — and then evaluate whether their choice was archetype-aligned. If it was, the document is specific enough. If it was not, find the gap: was the tone words section too vague? Was the palette missing the right variant? Was the typography specification missing a weight?

The brand guidelines document is a living artifact. Chapter 11 will use it to build the portfolio; Chapter 12 will use it to produce the pitch deck. Every use is a test. Fix what fails.

> Visual identity is a system of rules, not a collection of preferences. The rules express the strategy. The strategy expresses the archetype. When the chain holds, the user perceives coherence without being able to explain why. When the chain breaks, they perceive something is off without being able to explain that, either. Build the chain deliberately.

---

## Summary

What you can do now that you could not do before this chapter:

- Name all six components of a visual identity system and explain how each one expresses the archetype, not just the designer's taste.
- Write a creative brief that translates brand strategy into design constraints — with archetype-aligned tone words, specific references, useful anti-references, and a constrained deliverables list.
- Build a color palette from the archetype outward, and test every text-on-background combination against WCAG AA standards before committing to any color.
- Select and specify a typography pair — display and body — with full size, weight, and context specifications for every use case.
- Produce a wireframe that encodes the archetype structurally, so that the system's personality is legible before any pixel is rendered.

**The one idea that matters most:** Visual identity is downstream of brand strategy. A visual identity built without strategic substance has to borrow meaning from outside — the Mona Lisa, the gravitational field, the Golden Ratio — because there is no internal anchor. A visual identity built from strategic substance expresses commitments the brand has already made, and every component reinforces every other because they all answer to the same archetype.

**The common mistake:** Choosing visual elements by aesthetic preference rather than archetypal logic. "I like dark mode" is not a brand decision. "A dark palette signals the analytical restraint that aligns with my Sage archetype and the professional context in which my tool is used" is a brand decision. Make the latter.

**The Feynman test:** Can you pick up any single design decision from your visual system — a color choice, a typeface, a layout element — and explain in two sentences why it is there, what archetype it expresses, and what it would have to be replaced with if you switched archetypes? If yes, the system is understood. If not, a decision slipped through on preference rather than strategy.

---

## Connections Forward

Chapter 10 writes the origin story, case study, and thought-leadership piece that populate the wireframe you built here. The narrative content is what the layout system will carry — the structure you designed should be sized for the content Chapter 10 will produce.

Chapter 11 builds the portfolio using this chapter's system as the design brief. The v0 or Framer prompt for the portfolio site will reference the palette hex codes, the typography specification, the wireframe section blocks, and the tone words directly. The quality of the visual system you build here determines the quality of the portfolio that Chapter 11 ships.

---

**What would change my mind:** A controlled study showing that AI tools with rigorously archetype-aligned visual identities do not outperform tools with arbitrary visual identities in user trust or retention, when controlling for product quality and time-to-market. The mechanism I describe — that coherent visual identity accelerates trust formation and reduces cognitive friction — is plausible and supported by branding research, but the causal evidence specific to AI tools is thin. If the effect does not hold in the AI-tool context, the chapter's emphasis is misplaced.

**Still puzzling:** The boundary between visual identity work that expresses an archetype and visual identity work that *creates* an archetype. Some brands arrived at their archetype through the visual identity — the visual was so distinctive that the brand had to build itself around what the visual communicated. Apple's "Think Different" campaign may be a case: the campaign preceded the strategic clarity, and the strategy emerged from the campaign's reception. The chapter teaches strategy-first as the default. The visual-first path exists, and I do not yet have a clean rule for when it is the right choice.

---

## Exercises

### Warm-Up

**W1.** For each of the following brand visual elements, identify which archetype it expresses and name one specific aspect of the element that signals that archetype.

- The New York Times masthead: large Gothic serif, all-caps, high contrast, no decoration.
- Red Bull's can design: saturated red and silver, diagonal energy-trail motif, bold geometric sans-serif.
- Headspace's app icon: orange circle, soft corners, minimal detail.
- Notion's brand identity: near-black and near-white, minimal color, humanist sans-serif, generous whitespace.

*Tests: Objective 5 — identifying archetypal expression in visual elements.*
*Difficulty: Low.*

**W2.** The chapter identifies three anti-words that do not constrain design decisions: *innovative*, *modern*, *clean*. For each anti-word, write a replacement tone word that: (a) is specific enough to constrain a design decision, (b) is aligned to one of the five archetypes, and (c) could not be applied to every brand equally. Justify each replacement in one sentence.
*Tests: Objective 2 — writing constraining tone words.*
*Difficulty: Low.*

**W3.** Run an accessibility audit on the following palette combinations. Use the WCAG AA standard: 4.5:1 for normal text, 3:1 for large text. For each combination that fails, propose a hex adjustment that passes while maintaining the palette's character. (Use WebAIM Contrast Checker or equivalent.)

- Body text #333333 on background #FFFFFF
- Secondary text #888888 on background #FFFFFF
- Accent text #4A90E2 on background #FFFFFF
- White text #FFFFFF on button color #6C63FF
- Caption text #AAAAAA on background #F5F5F5

*Tests: Objective 3 — accessibility testing.*
*Difficulty: Low-medium.*

### Application

**A1.** Write a complete creative brief for your AI tool's visual identity. Include all eight sections: brand strategy summary, project scope, audience, tone words (three to five, no anti-words), references (three, with notes), anti-references (two, with notes), constraints, and deliverables. Length: one to two pages. Test the brief by evaluating one design decision against it — pick any visual direction and argue whether it passes or fails the brief.
*Tests: Objective 2 — writing the creative brief.*
*Difficulty: Medium.*

**A2.** Build a color palette for your AI tool's brand using your archetype as the starting point. Specify: one primary color (name + hex), two accent colors (name + hex each), one near-black, one near-white, and one mid-gray. Then run the full accessibility audit: test every combination you intend to use for text-on-background against WCAG AA. Document results in a table. Fix every failing combination.
*Tests: Objective 3 — constructing and testing the palette.*
*Difficulty: Medium.*

**A3.** Select a typography pair for your AI tool's brand. Justify each choice in one paragraph that explicitly references your archetype and names what the typeface signals. Specify: display face and body face (both with Google Fonts or open-source links); minimum weights needed; and the full type specification table — H1 through H3, body, caption, UI — with size, weight, and line height for each.
*Tests: Objective 4 — selecting and specifying the typography pair.*
*Difficulty: Medium.*

**A4.** Find a real deployed AI product whose visual identity you believe has an archetypal mismatch — where the visual language contradicts what the product actually is or does. Describe: the product and its actual purpose/audience, the archetype the visual identity is expressing, the archetype the product strategy actually implies, the specific components in conflict (which colors, which typefaces, which layout decisions), and what a single highest-leverage change would be to reduce the mismatch.
*Tests: Objective 5 — identifying archetypal mismatch.*
*Difficulty: Medium.*

### Synthesis

**S1.** The chapter traces three visual-identity-without-strategy failures: Pepsi 2008 (strategy-free rationale), Yahoo 2013 (strategy-free process), Tropicana 2009 (wrong archetypal foundation). Each failure had a different cause and required a different fix. Design a pre-launch visual identity review process that would catch all three failure modes before launch. The process should: identify whether strategic substance exists and is documented, test whether the visual components express that strategy's archetype, and flag archetypal mismatch before any visual work ships. Apply your process to one of the three cases and show whether it would have flagged the problem.
*Tests: Objectives 1 and 5.*
*Difficulty: Medium-high.*

**S2.** The chapter argues that wireframes encode the archetype structurally — that a Sage portfolio's structural rhythm differs from a Hero portfolio's before any pixel is set. Produce two wireframe descriptions (in structured text or ASCII box format, not rendered Figma) for the same five-page portfolio: one for a Sage archetype, one for a Hero archetype. The pages are the same (Home, About, Projects, Writing, Contact); the section order, section density, and component character should differ. Annotate the structural differences that are archetypal expressions, not personal preferences.
*Tests: Objectives 5 and 6.*
*Difficulty: High.*

**S3.** The "Still puzzling" note identifies the visual-first path — where the visual identity creates the archetype rather than expressing it. Find one brand (not Apple's Think Different, which is mentioned in the chapter) where the visual identity preceded and shaped the strategic archetype. Describe: the visual that came first, the strategic clarity that followed, how the brand's later behavior validated or invalidated the emergent archetype, and what conditions enabled the visual-first path to work. Conclude with a rule for when the visual-first path is the right choice — and when it is a mistake.
*Tests: Objectives 1 and 5; stress-tests the chapter's strategy-first default.*
*Difficulty: High.*

### Challenge

**C1.** The accessibility standards in this chapter (WCAG 2.2 AA) are legal requirements in many jurisdictions for public-facing digital products, not just best practices. Research: which jurisdictions have legal accessibility requirements for web content, what standard they reference, and what the enforcement mechanism is. Then evaluate your own tool's deployed interface (from Chapter 7) against the AA standard. Document every failure. For each failure: name the specific WCAG criterion violated, propose a fix, and estimate the implementation time. Conclude with a prioritized remediation list.
*Tests: Objective 3; connects accessibility standards to legal and ethical obligations.*
*Difficulty: Very high.*

**C2.** The chapter's "What would change my mind" note concedes that the causal evidence for visual identity's impact on user trust in AI tools is thin. Design a study that could establish whether archetype-aligned visual identity causally affects user trust and retention for an AI tool — as distinct from product quality. Specify: the independent variable (how you would create two versions of the same tool with different visual alignment), the dependent variable (how you would measure trust and retention separately from satisfaction with the tool's outputs), the control for product quality, the population, the study duration, and the minimum effect size you would need. Evaluate the study's practical feasibility and ethical considerations.
*Tests: Objective 1; stress-tests the chapter's central causal claim.*
*Difficulty: Very high.*

---

## LLM Exercise — Self-as-Project

**Project:** Self-as-Project
**What you're building this chapter:** A **Personal Visual System v1** — palette, typography, mood board instructions, and wireframe for your personal portfolio site.
**Tool:** Claude Project for the system specification; Figma, Excalidraw, Whimsical, or pen-and-paper for the wireframe.

**The Prompt:**

```
Build a Personal Visual System for me, derived from my Personal Brand
Strategy v1 (from Chapter 8). The deliverables here feed the portfolio
site I build in Chapter 11.

Five components, each constrained by my archetype:

1. CREATIVE BRIEF (1 page). Strategy-to-design translation. Sections:
 - Brand strategy summary (3–4 sentences from Chapter 8)
 - Project scope (personal site + LinkedIn banner + resume header)
 - Audience (named and specific)
 - Tone words (3–5 archetype-aligned adjectives — "innovative" and
 "modern" forbidden; force specificity)
 - 3 references (link or describe — with one-line notes on what
 specifically about each one works for this brief)
 - 3 anti-references (with one-line notes on why each fails the brief)

2. COLOR PALETTE. Primary (1), accents (2), neutrals (near-black,
 near-white, mid-gray). Specify: name + hex for each. Test every
 text-on-background combination against WCAG AA (4.5:1 normal text,
 3:1 large text). Document contrast ratios in a table. If a combination
 fails, propose an adjusted hex that passes.

3. TYPOGRAPHY PAIR. One display face for headlines, one body face for
 running text. Both must have a free/open-source option (Google Fonts
 acceptable). Justify each choice against my archetype in one sentence.
 Specify: weights (minimum heavy display, regular body, one alternate
 for emphasis); sizes for h1, h2, h3, body, caption, UI.

4. MOOD BOARD INSTRUCTIONS. Tell me to pull 6–10 images. List specifically
 what to look for (e.g., "find 2 examples of personal sites by
 Sage-archetype practitioners using serif body type and a single
 accent color"). Caption requirements for each image: what about
 it works for my brief.

5. WIREFRAME for my personal site. Low fidelity. Five pages: Home, About,
 Projects/Case Studies, Writing/Thought Leadership, Contact. For each
 page: section blocks in order, layout grid (column count, max content
 width), visual hierarchy (where H1, primary CTA), components reused
 across pages. Format as structured Markdown detailed enough to use
 as a v0 prompt directly.

Apply my archetype as the constraint throughout. A Sage palette is
restrained and high-contrast. A Hero palette uses saturated primaries.
A Caregiver palette runs warm. A Magician palette uses jewel tones.
Match my archetype exactly — don't average across archetypes.

Output a Markdown document called "Personal Visual System v1 — [my name]"
with all five components.
```

**What this produces:** A complete visual identity spec ready for Chapter 11's portfolio build. The palette hex codes and typography specification become the v0 prompt's design tokens. The wireframe section blocks become the page structure.

**How to adapt:** If you already have visual brand elements — a chosen typeface, a color you've used consistently — provide them as inputs and ask for an audit and alignment fix rather than a from-scratch design. The audit question: does this visual element express my archetype, or is it here because of preference?

**Preview of next chapter:** Chapter 10 writes your origin story, one customer-as-hero case study, and your first published thought-leadership piece — the narrative content that the wireframe you built here is designed to carry.

---

**Tags:** visual-identity · creative-brief · pepsi-logo · yahoo-logos · tropicana-redesign · WCAG-accessibility · color-palette · typography · wireframe · archetype-expression · INFO-7375

---

## AI Wayback Machine

The ideas in this chapter didn't appear from nowhere. **Cipe Pineles** became the first independent female art director of a mainstream American magazine in 1942 and went on to define the visual systems of *Glamour*, *Charm*, *Mademoiselle*, *Seventeen*, and *Vogue* over the next four decades. Her argument — visible in the cover-to-cover coherence of every magazine she ran — was that an identity is not a logo. It is a system of decisions about typography, photography, illustration, white space, and how each issue's contents express the same editorial voice through visual choices a reader cannot articulate but immediately recognizes. The chapter's argument that a visual identity is a *system*, not a set of artifacts, is Pineles's working method translated from print-magazine to AI-product.

![Cipe Pineles, c. 1940s. AI-generated portrait based on a public domain photograph (Wikimedia Commons).](images/cipe-pineles.jpg)
*Cipe Pineles, c. 1940s. AI-generated portrait based on a public domain photograph.*

**Run this:**

```
Who was Cipe Pineles, and how does her work building cover-to-cover visual systems for *Glamour*, *Seventeen*, and *Vogue* connect to the chapter's argument that visual identity is a system of disciplined choices rather than a logo plus a palette? Keep it to three paragraphs. End with the single most surprising thing about her career or ideas.
```

→ Search **"Cipe Pineles"** on Wikipedia after you run this. See what the model got right, got wrong, or left out.

**Now make the prompt better.** Try one of these:

- Ask it to explain why a visual *system* outperforms a visual *style* over time, in plain language
- Ask it to compare Pineles's editorial-design discipline to the visual-identity rules this chapter teaches for AI products
- Add a constraint: "Answer as if you're writing the visual-system rules for your Madison-style AI tool, governed by the archetype from Chapter 8"

What changes? What gets better? What gets worse?

