# Contributing

Contributions can be manuscript edits, documentation updates, workflow review,
data curation, script improvements, figure work, or skill refinement. The
standard is the same: make the work inspectable.

## Before You Start

Read:

1. `README.md`
2. `AGENTS.md`
3. `CLAUDE.md`
4. `DATA_CONTRACT.md`
5. `docs/README.md`
6. the relevant chapter, skill, script README, or import note

## Contribution Types

## Documentation

- Put human-facing system docs in `docs/`.
- Update `docs/README.md` when adding durable docs.
- Keep docs tied to real paths and current commands.

## Manuscript

- Put reader-facing prose in the correct `chapters/` track.
- Preserve source provenance when adapting pantry or imported material.
- Keep operational instructions in docs or skills.

## Data and Workflows

- Preserve original workflow JSON.
- Distinguish draft output from reviewed conclusions.
- Protect credentials and private/client-specific material.
- Log meaningful workflow runs.

## Scripts and Figures

- Use lowercase `scripts/`.
- Use `npm run svg-to-png` for SVG-to-PNG rendering.
- Keep D3/source files and rendered images traceable.
- Run small samples before broad generation.

## Review Checklist

Before considering work complete:

- The file belongs in its directory.
- Related docs, indexes, or READMEs are updated.
- Source data or imported material is named.
- Scripts and phase gates were checked.
- Generated assets were verified.
- Brand and marketing claims are evidence-labeled.
- Remaining risks are stated clearly.
