# Manuscript

Madison contains multiple manuscript tracks. Keep chapter prose, imported
source material, generated figures, and workflow documentation separate.

## Main Manuscript Files

- `book.md`: high-level book positioning.
- `outline.md`: current outline.
- `chapters/00-frontmatter.md`: front matter.
- `chapters/00-introduction.md`: introduction.
- `chapters/98-appendix-best-practices.md`: operational appendix.
- `chapters/99-back-matter.md`: back matter.

## Chapter Tracks

Madison currently includes several chapter sets:

- `chapters/branding-and-ai/`: Branding and AI book material.
- `chapters/info-7375-branding-and-ai-spring-2026/`: course/book chapter set
  with extended case studies.
- `chapters/principles-marketing/`: principles of marketing chapter set.

Do not merge chapter tracks casually. When moving content between tracks,
document the source and reason.

## Supporting Writing Material

- `pantry/`: research notes, Cajal drafts, source notes, and pre-manuscript
  material.
- `writing-tools/`: writing workflow cards.
- `scripts/cowork-*.md`: stored writing prompts and production recipes.
- `enrichment-log.md`: durable record of enrichment work.
- `architecture.md`, `vision.md`, `risks.md`, `chapters-spec.md`: planning and
  system-design context.

## Separation of Concerns

Use this split:

- Reader-facing prose: `chapters/`.
- System documentation: `docs/`.
- Agent recipes: `skills/`.
- Maintained automation and prompts: `scripts/`.
- Figure source and rendered assets: `d3/` and `images/`.
- Imported source material and datasets: `data/`, `docs/madison-main/`, and
  `scripts/madison-main/`.

## Revision Checklist

Before revising manuscript files:

- Which chapter track is being changed?
- Is the source material local and cited or named?
- Are brand, market, customer, and performance claims warranted?
- Do figure references still resolve?
- Should `enrichment-log.md`, docs, or skills also be updated?
