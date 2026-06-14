# Context & Directory Best Practices — adapted for CLI agents and Madison

*Adapts the Cowork best-practices guide (folder-scan workflows) to CLI coding agents (Claude Code, Codex, Cursor) and then to this repo. Grounded in current Anthropic/Claude Code docs — sources at the end.*

## The one reframe

The Cowork guide's core problem is **folder-scan**: point Cowork at a folder and it reads everything, so a superseded draft and the canonical version are identical to it. CLI agents work differently — they are **retrieval-based**. Claude Code starts each session with a fresh context window and only two things auto-load: `CLAUDE.md` files (and their `@imports`) and the auto-memory index. Everything else enters context only when the agent *chooses* to read it via grep/glob/Read or a tool call.

So the adaptation is mostly good news: **several Cowork "community conventions" are native primitives in CLI agents.** The job isn't to reinvent `_MANIFEST.md` — it's to use the primitives that already do what the manifest approximates. The corollary is a sharper rule than Cowork's: in a CLI repo, *if a file isn't auto-loaded and isn't named in an index the agent will read, it effectively doesn't exist to the agent.* The "lost in the middle" and quadratic-attention costs still apply to whatever you *do* pull in, so curation still matters — it just happens through retrieval discipline, not folder hygiene.

---

## Part 1 — Cowork concept → CLI-native equivalent

| Cowork guide concept | CLI-native equivalent | Correction / note from current docs |
|---|---|---|
| **Global Instructions** (Settings paste) | **`CLAUDE.md`** — auto-loaded every session. Hierarchy: managed policy → `~/.claude/CLAUDE.md` (user) → `./CLAUDE.md` (project) → `CLAUDE.local.md` (personal, gitignored) | Loaded in full regardless of length, but **target < 200 lines** (Anthropic's actual number; Cowork's "300 words" is a different surface). Closer-to-cwd files are read *last*. Delivered as a user message, **not enforced config** — for hard rules use hooks. |
| **`_MANIFEST.md`** (community convention, "not native") | **Mostly native in CLI:** nested `CLAUDE.md` in subfolders load *on demand* when the agent reads files there; `@path` imports pull files in at launch; `.claude/rules/` with `paths:` frontmatter scope rules to globs | The "not a product feature" caveat **flips** for CLI. You don't hand-roll a manifest — you compose native loaders. A human-readable index file (Madison's `DOMAIN.md`) still earns its place as the map the agent reads on demand. |
| **Tier 1 / 2 / 3** | **Tier 1** = `CLAUDE.md` + its `@imports` (always in). **Tier 2** = path-scoped `.claude/rules/` + **skills** (load on invoke; ~80 tokens/skill at startup for name+description — dozens cost less than one activated skill). **Tier 3** = `.gitignore`, `claudeMdExcludes`, "ignore unless named." | Skills *are* progressive disclosure as a native primitive. This is the single biggest CLI upgrade over a hand-maintained manifest. |
| **`PROJECT_RULES.md` precedence** | Same need: CLAUDE.md layers are **additive/concatenated, not hierarchical** — so still declare precedence explicitly. Path-scoped `.claude/rules/` for per-area rules. | For rules that must *never* be violated (don't delete, run X before commit), prose isn't enough — use a **PreToolUse hook** or `permissions.deny`, which enforce regardless of what the model decides. |
| **`templates/` / `skills/`** | Same `templates/`; **skills** are native (`.claude/skills/` or plugins), bundle scripts + assets, load on demand. | A workflow with procedural logic (build invariants, QA steps) belongs in a skill, not always-loaded context — identical advice, native mechanism. |
| **`outputs/` / `archive/` separation** | Same. Keep generated `build/`+`outputs/` out of the agent's "source" view so it doesn't read its own prior deliverables as authority. | Mark them Tier 3; `.gitignore` the build dir. |
| **One folder per bounded project** | **One repo per project.** For shared config across repos, `--add-dir` (+ `CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1`); in monorepos, `claudeMdExcludes` to skip other teams' CLAUDE.md. | Same anti-context-bleed principle, enforced by repo boundaries + exclude globs. |
| **"Connector first, folder second, browser third"** | **MCP connectors + deferred tool loading.** Only tool *names* load at startup; full schemas load on demand (this environment's `ToolSearch` is exactly that). | The token cost of an idle connector is now near-zero; the cost is **data returned when invoked**. Disable unused connectors for *tool-surface and safety* reasons, not baseline tokens. |
| **The four token drains** | Identical (tool outputs > conversation > always-loaded instructions > connector data). CLI adds inspection + control: **`/context`** (see exactly what's in context), **`/compact`** (≈60% fill, manual beats auto), **`/clear`**, **subagents** (own window, return summaries), tool-result clearing, **auto-memory**. | Project-root `CLAUDE.md` **survives `/compact`** (re-read from disk); nested CLAUDE.md do not auto-reload. Put anything that must persist in the project-root file. |
| **Builder-Validator pattern** | **Subagent builder → validator gate.** The validator can be a subagent *or* a deterministic script run by a **PostToolUse / pre-commit hook**. | Madison already has the validator half as a script (`conformance.mjs`); a hook makes it a real gate. |
| **Sub-agents scoped to minimum context** | Native **Task/subagent** tool — own fresh context window, returns a summary, doesn't inherit the parent transcript. | Fully native; scope them in CLAUDE.md ("give subagents only the index + the one subfolder"). |
| *(new in CLI)* **`AGENTS.md`** | Claude Code reads **`CLAUDE.md`, not `AGENTS.md`.** If you keep an `AGENTS.md` (the cross-tool standard, 60k+ repos), make `CLAUDE.md` `@AGENTS.md` + Claude-only notes, **or symlink** — never hand-maintain two copies. | `/init` will read an existing `AGENTS.md` (and `.cursorrules`, `.windsurfrules`) and fold it in. |
| *(new in CLI)* **Auto-memory** | `MEMORY.md` index (first 200 lines/25KB auto-loaded) + topic files read on demand; Claude writes it from your corrections. | A native version of "notes to self." Complements, doesn't replace, a hand-written run log. |

---

## Part 2 — Madison, audited against this

**Madison already implements the hardest 70% natively.** What the Cowork guide treats as conventions to invent, this repo mostly already has as primitives:

- **`CLAUDE.md` is 42 lines** (well under the 200 ceiling), already uses the **`@MYCROFT.md` import**, and already opens with an explicit **precedence declaration** ("If any file here conflicts with MYCROFT.md, MYCROFT.md governs… log it"). That's the guide's `PROJECT_RULES.md` precedence + import pattern, done right.
- **`DOMAIN.md` is the manifest/index** — the map of what's runnable, the suites, the exercises — read on demand (not auto-loaded, which is correct at 106 lines). `MYCROFT.md` is the `_system/` constitution.
- **`prompts/` suites are skills** — progressive disclosure, exactly the Tier-2 mechanism, already compiled by `build-prompts.mjs`.
- **`conformance.mjs` is the Validator half** of Builder-Validator; `review`/`to-markdown` is the human gate. The whole P4 "machines verify conformance, humans verify adequacy" doctrine *is* the builder-validator pattern with a governance name.

**The real gaps — five, prioritized:**

1. **`CLAUDE.md` and `AGENTS.md` are hand-maintained as two separate files and have drifted** (they differ; both carry the verbatim `help` block — which is how the stale-help-menu bug in the repo audit happened). **Fix:** make `AGENTS.md` the single source and `CLAUDE.md` `@AGENTS.md` + a short Claude-only section, or symlink `CLAUDE.md → AGENTS.md`. This removes the entire class of "I updated one copy" bugs. *(Directly fixes the root cause of audit finding P1.)*

2. **No hooks / no hard enforcement.** The "never delete, always archive," "run `npm run verify` before commit," and the destructive-action gate live only as prose in MYCROFT/CLAUDE.md — guidance, not enforcement. **Fix:** add a **PreToolUse hook** (block `rm`/destructive writes outside an archive path) and a **pre-commit hook running `node scripts/conformance.mjs`**. This is also the unbuilt **CI gap (audit P3)** — a hook is the local half of it.

3. **No `.claude/rules/` path-scoped rules.** Several disciplines are global prose that should be glob-scoped so they load only when relevant: SVG/colorblind-palette rules → `paths: images/**, prompts/cajal/**`; recipe four-layer + gates → `paths: recipes/**`; "prompts are source, adapters are generated" → `paths: prompts/**`. **Fix:** create `.claude/rules/` and move area-specific rules out of always-loaded context into path-scoped files.

4. **Large always-relevant files are a "lost in the middle" risk.** `DOMAIN.md` (106 lines) and `logs/RUN_LOG.md` (339 lines, growing every session) are fine *because they load on demand* — but `RUN_LOG.md` will keep growing. **Fix:** treat `RUN_LOG.md` as append-and-rotate (archive older entries), and keep `DOMAIN.md` an *index* that points to detail rather than absorbing it.

5. **No physical `archive/`.** The "never delete, move to archive" rule has nowhere to move things. **Fix:** create `archive/` (and per-area `*/archive/`), mark Tier 3, and make the destructive-action hook redirect there.

What Madison should *not* copy from the Cowork guide: the `_MANIFEST.md` file invention (DOMAIN.md + `@imports` + skills already cover it) and the "300-word global instructions" figure (CLI's number is <200 lines, and Madison's is 42).

---

## Reference — CLI-native templates for Madison

**1. Collapse the dual-maintained instruction files.** Make `AGENTS.md` the source; replace `CLAUDE.md` with:

```markdown
@AGENTS.md

## Claude Code specifics
- Read DOMAIN.md (the index) and MYCROFT.md (the constitution) before acting.
- Before any task: load Tier 1 (this file + MYCROFT). Load a prompt suite or
  DOMAIN section only when the task is in that domain.
- Scope subagents to the index + the one relevant subfolder — never the whole repo.
- Never delete; move to archive/. Run `npm run verify` before declaring done.
```

**2. Path-scoped rule** (`.claude/rules/svg.md`) — loads only when touching figures:

```markdown
---
paths: ["images/**", "prompts/cajal/**", "**/*.svg"]
---
# SVG figure rules
- Colorblind-safe palette only; typography + arrowheads per prompts/cajal/svg-style.md.
- Builder writes to a staging path; conformance/visual check before it lands in images/.
```

**3. Enforcement hooks** (`.claude/settings.json` + `.claude/hooks/*.sh`) — turn two prose rules into real gates. **Built and verified against the current hooks schema** (`scripts`/`.claude/hooks/` in this repo):

```json
{
  "hooks": {
    "PreToolUse": [
      { "matcher": "Bash",
        "hooks": [{ "type": "command", "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/archive-guard.sh" }] }
    ],
    "Stop": [
      { "hooks": [{ "type": "command", "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/conformance-check.sh" }] }
    ]
  }
}
```

The handler script reads the tool call as JSON on **stdin** (`tool_input.command`) and, to block, prints a `hookSpecificOutput` with `permissionDecision: "deny"` + a reason — *not* an `exit 2` / `$CLAUDE_TOOL_INPUT` env var (that was an earlier guess; the verified mechanism is stdin JSON + a permission decision). `archive-guard.sh` denies `rm` of anything but rebuildables (`.build`/`__pycache__`/`*.pyc`/`*.bak`); `conformance-check.sh` runs `node scripts/conformance.mjs` on `Stop` and `exit 2`s with the failure on stderr so Claude knows the work isn't done. These fire in **Claude Code (CLI) only** — Cowork doesn't execute them.

**Net:** Madison is already a well-context-engineered repo by these standards. The highest-leverage moves are (1) collapse CLAUDE.md/AGENTS.md to one source — which also kills the stale-help-menu bug class — and (2) promote the two most important prose rules (no-delete, run-conformance) into hooks. Both are small; both convert "guidance the model may follow" into "behavior the system guarantees."

---

## Sources
- [Claude Code — How Claude remembers your project (memory, CLAUDE.md, rules, imports, auto-memory)](https://code.claude.com/docs/en/memory.md)
- [Anthropic — Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [Claude — Using Claude Code: session management and 1M context](https://claude.com/blog/using-claude-code-session-management-and-1m-context)
- [Claude Code — Best practices](https://code.claude.com/docs/en/best-practices)
- [Agent Skills: progressive disclosure as a system design pattern (SwirlAI)](https://www.newsletter.swirlai.com/p/agent-skills-progressive-disclosure)
- [What is AGENTS.md? (Cobus Greyling)](https://cobusgreyling.medium.com/what-is-agents-md-2846b586b116) · [The Agent-Native Repo: why AGENTS.md is the new standard (Harness)](https://www.harness.io/blog/the-agent-native-repo-why-agents-md-is-the-new-standard)
