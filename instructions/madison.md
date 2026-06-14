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
