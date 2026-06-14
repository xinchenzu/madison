<!-- GENERATED FILE — do not edit by hand.
     Source: instructions/ (_shared/ modules + project file) · manifest: instructions/manifest.yml
     Rebuild: node scripts/build-instructions.mjs   ·   Promote: --promote
     Hand edits are overwritten on the next build. -->

# Agent Instructions

## Governance

Read `MYCROFT.md` (the constitution — principles, the verification stack, the recipe lifecycle, the logging rules) and `DOMAIN.md` (this project's index — layout and what is runnable today) before acting. If any file conflicts with `MYCROFT.md`, `MYCROFT.md` governs and the conflict is a bug — log it in `logs/RUN_LOG.md`.

The contract in brief (MYCROFT.md governs in full):

1. Verified local data before external lookup; stored scripts before ad-hoc code.
2. Never invent a count, rate, or confidence; label model judgments as judgments.
3. Gates are hard stops cleared by a named human and logged.
4. Machines verify conformance; humans verify adequacy.
5. Log meaningful runs, blockers, and artifacts in `logs/RUN_LOG.md`.

## Default to Markdown for humans

AI-native formats (JSON, YAML) are the source of truth for the machine. When showing an artifact to a person, render the Markdown view (`scripts/to-markdown.mjs` / the `review` skill) by default. Show raw JSON/YAML only when asked.

## Never delete — archive instead

Never delete source, data, recipes, logs, or any hand-made file. Move superseded or scratch files to an archive (or out of the working tree into the full-copy archive). The only safe removals are generated/rebuildable artifacts — `**/.build/`, `__pycache__/`, `*.pyc`, `*.bak` — because they regenerate from source. When in doubt, archive and ask.

## Conformance before done

Run `node scripts/conformance.mjs <paths>` (or `npm run verify`) before declaring work complete. Invalid JSON / YAML / JS is not done — it is not even gradeable. This is the machine half of P4; whether the content is *adequate* is still the human gate.

## Scope subagents narrowly

Give a subagent only what its task needs — the index (`DOMAIN.md`), the one relevant subfolder, and the specific files named. Never hand a subagent the whole repository. Subagents run in their own context window and should return a summary, not raw file dumps.

## Reporting completion

Before reporting a task complete, state: files changed; scripts or data checked; tests, builds, or searches run; and any unverified assumptions or remaining risks. No silent done.

## Madison

Madison turns marketing signals into verified, auditable intelligence (INFO 7375 Branding & AI). Project-specific rules:

- Use lowercase `scripts/`; never create `SCRIPTS/`.
- Manuscript content lives in `chapters/` — no scripts or data there.
- `scripts/madison-main/`, `docs/madison-main/`, `data/madison-main/` are **quarantined Tier 3** — do not read, load, or treat as source unless explicitly asked for a named file inside them.

### `help` command

When the user's message is just `help` (or `/help`), reply with **exactly** the fenced block below — verbatim, nothing before or after — then stop and wait:

```
MADISON — branding & marketing intelligence (a Mycroft domain)
Turn marketing signals into verified, auditable intelligence. The rule of the house:
fluency is the first sign of trouble — the human owns the irreducible judgment.

WHAT YOU CAN DO
  recipes    Read a real pipeline + its run evidence (best first look):
             recipes/marketmind.md  ->  logs/marketmind-run.json  +  logs/gate-decisions/
             (48 recipes in recipes/)
  prompts    Installable skills in prompts/ (11 suites):
             nina · brandy · madison-pitch · cajal    — brand identity / audit / pitch / figures
             assignment6 · caze · paper               — A6 strategy / case+interview / project->paper
             ogilvy · courses · slides-deck · review  — copywriting / lectures / decks / json-review
  exercises  INFO 7375 set in docs/exercises/ (13):
             1 -> 1A -> 2 -> 3 -> 5 -> 5A -> 5B -> 6A -> 7 -> 8 -> 9 -> 10 -> Final
  scripts    conformance · to-markdown · build-prompts · build-resume · contrast-check ·
             deck-trace · build-pitch · a5b-verify · assignment6-build-pdf · build-deck
  book       The "Madison Plus One" manuscript: chapters/
  data       Two-layer: data/raw -> data/verified (nothing enters verified unvalidated)

HOW IT WORKS
  Every finding traces report -> log -> recipe -> source. Gates are hard stops a named
  human clears. Machines verify conformance; humans verify adequacy. (Constitution: MYCROFT.md)

TRY
  "show me the marketmind recipe"   ·   "list the exercises"
  "run the nina brand assistant"    ·   "what's runnable today?"
```
