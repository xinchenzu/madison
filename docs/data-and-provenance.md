# Data and Provenance

Madison treats imported source material, workflow JSON, generated figures, and
chapter drafts as different kinds of evidence. Keep those layers distinct.

## Source Data

Source exports, original datasets, approved reference records, imported workflow
JSON, and curated assets belong in `data/`.

The major imported source bundle is:

- `data/madison-main/`

Original n8n workflow JSON is preserved under:

- `data/madison-main/n8n-workflows/originals/`

## Imported Documentation and Code

Madison-main material was organized into:

- `docs/madison-main/`: source documentation and import notes;
- `data/madison-main/`: data, assets, and original workflow JSON;
- `scripts/madison-main/`: imported code/configuration suitable for review;
- `skills/n8n-*.md`: converted workflow skills.

The import record is:

- `docs/madison-main/MOVED-FROM-PANTRY.md`

## Generated Data and Evidence

Generated audits and reports should sit near the data they inspect and use
clear names such as:

- `*-audit.md`
- `*-report.md`
- `*-summary.md`

Generated files are evidence of a run. They are not source of truth until a
human or documented workflow accepts them.

## Provenance Rules

- Check local data before external lookup.
- Preserve original workflow JSON when generating or revising skills.
- Mark missing data as missing.
- Do not invent counts, rates, coverage, confidence, performance, or market
  validation.
- Do not store secrets in tracked data files.
- Do not promote generated caches, dependency installs, or build outputs into
  source data unless a human intentionally curates them.

## Brand and Marketing Claim Discipline

Marketing artifacts often sound convincing before they are warranted. Claims
about audiences, segments, competitors, conversions, sentiment, brand voice,
campaign performance, or customer journeys need source evidence.

Label output as:

- concept;
- draft;
- imported source material;
- generated analysis;
- human-reviewed conclusion.

Do not collapse those categories.
