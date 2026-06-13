# Exercise Two — Madison Talks to Figma

**Course:** INFO 7375 Branding & AI · sits between Assignments 1 and 2 (the board you audit here is the board A2 plans on; the recipe you write is a real Madison contribution)
**What you'll build:** the **board-audit recipe** — Madison reads your Figma board over the REST API and checks that every claim on it traces to a file in `brand/`. Plus the trail: a fixture, a claims file, an adjudicated trace table, and a recipe with run evidence.
**Time:** one sitting if Exercise One is done; the untraceable-claims cleanup at your pace.
**You need:** Exercise One complete (`brand/` exists; your Step 5 snapshot flagged some untraceable claims — those are this exercise's test data), a CLI agent, your Madison fork, a free Figma account.

The principle (from `MYCROFT.md`, P1): **machines verify conformance; humans verify adequacy.** In Exercise One a grader eyeballed "every board claim traceable." Today that check becomes a program — and you'll see exactly where the program stops and your judgment starts. The board was a snapshot the day you captured it; from now on, Madison can tell you when it drifts.

---

## Step 0 — The token, handled like an adult

Figma → account settings → Security → Personal access tokens → generate one (read scope). Then:

```bash
echo "FIGMA_TOKEN=paste_it_here" >> .env
grep -q "^\.env$" .gitignore || echo ".env" >> .gitignore
git status   # confirm .env is NOT listed
```

Three rules, non-negotiable: the token never goes in a committed file, never in a prompt or chat window, never in a log. Your agent reads it from `.env`. If you paste a token into chat, revoke it and generate a new one — that's not punishment, it's the procedure. (Same discipline as every Mycroft domain: keys exist; they just never pass through the conversation.)

Your **file key** comes from the board's URL: `figma.com/board/KEY/...` or `figma.com/design/KEY/...` — the segment after `/board/` or `/design/`. Put it in `.env` as `FIGMA_FILE_KEY`. Note which kind yours is — FigJam boards and Figma design files return different node types, and Step 2 will care.

**Artifact:** `.env` populated and verifiably gitignored.

## Step 1 — Ping: prove the session is healthy before building anything

Have your agent write a small health check (`scripts/figma-ping.js` or equivalent) that reads `FIGMA_TOKEN` and `FIGMA_FILE_KEY` from the environment and verifies, in order: both variables are set; the token authenticates (`GET /v1/me`); the file is accessible (`GET /v1/files/:key?depth=1`). Each check prints PASS or FAIL with the reason. Read the script before you run it — you don't run code you haven't read, and this one is short enough to actually read.

Why this step exists: discovering a bad token twenty minutes into a debugging session is expensive; discovering it in ten seconds is not. A 403 here means token or access, not your code. Fix it now, cheaply.

**Artifact:** ping output (all PASS) saved to `logs/figma-ping-output.txt`.

## Step 2 — Read: your board is a document graph

Fetch the full file (`GET /v1/files/:key`) and write it to a dated fixture: `logs/board-fixture-YYYY-MM-DD.json`. Open it. The board you made by dragging things around is a tree of typed nodes — frames, text, stickies, connectors — each with an `id`, a `name`, a `type`, and `children`. The pretty canvas is a *rendering* of this graph. The graph is the data, and the data is what Madison audits.

Have the agent report what came back: page count, top-level node types, total text-bearing nodes. A FigJam board carries text mostly in `STICKY` and `TEXT` nodes; a design file mostly in `TEXT` nodes inside frames. Have the agent verify which yours actually contains rather than assuming — the API is the evidence, not the docs.

The fixture matters for a second reason: every later run develops against the saved file, not the live API. You hit Figma once; you iterate locally.

**Artifact:** the dated fixture + a three-line summary in your notes (pages, node types, text node count).

## Step 3 — Extract: every claim on the board, mechanically

Now the first real tool: a script that walks the fixture's node tree and extracts every text-bearing node into `brand/board-claims.json` — one record per node: `node_id`, `node_type`, the text content, and the parent frame's name (so "Skills" stickies are distinguishable from "Goals" stickies).

This part is pure conformance, and the machine is genuinely better at it than you: it will not skip a sticky note because it looked unimportant, and it will not miss the text buried three groups deep. The completeness check is mechanical too: text nodes in fixture = records in claims file, counted, equal.

**Artifact:** `brand/board-claims.json`, with the count matching Step 2's report.

## Step 4 — Trace: the agent proposes, you adjudicate

Here is where the labor splits, and the split is the lesson.

The agent takes `board-claims.json` plus your `brand/` files and drafts `brand/board-trace.md`:

| Board claim (node id) | Proposed source in `brand/` | Status |
|---|---|---|

For each claim it proposes a match — a `resume.json` entry, a `brand.yml` field, a `gaps.md` row — or proposes **untraceable**. Then *you* adjudicate every row, because matching is judgment wearing a table's clothing: the agent can see that "built a sentiment pipeline" resembles a resume entry; only you know whether it's *that* entry or an inflated cousin of it. Mark each row traced (keep or fix the pointer) or untraceable.

Then resolve every untraceable row, one of three ways, each with a reason: **add the file entry** (the claim was true but unrecorded — it becomes attested truth), **cut the claim from the board** (decoration), or **declare it decoration deliberately** (a section header is allowed to be a section header — say so). Your Exercise One flags should all reappear here; if the audit found ones you missed, that's the tool earning its place.

**Artifacts:** `brand/board-trace.md` fully adjudicated; untraceable rows resolved with reasons.

## Step 5 — Wrap it as a recipe: your first Madison contribution

Everything you just did, written down so a stranger could run it: `recipes/board-audit.md`, with the same lifecycle frontmatter every Madison recipe carries. It names the inputs (`.env` keys, file key, `brand/` files), the steps (ping → fetch fixture → extract claims → draft trace → human adjudication), the gate (**the trace table is not done until a human has adjudicated every row** — the script cannot close it), and what it writes (claims file, trace table, log entry).

Because you actually ran it, your recipe starts life with something most of the 48 recipes in this repo don't have yet: run evidence. Cite your fixture, your claims file, your trace table in the frontmatter and set the status accordingly — this is how a recipe earns a promotion above DRAFT, and you just did it on day one of owning it.

This is also the dogfood: if your `gaps.md` has a row like "no shipped data work," look at what you just shipped.

**Artifact:** `recipes/board-audit.md` with frontmatter, gate, and evidence citations.

## Step 6 — Log it

One entry in your fork's `logs/RUN_LOG.md`: what ran, how many claims extracted, how many untraceable, how each was resolved, recipe status assigned. No token, no key, ever.

---

## What the audit cannot check (read this before the Glimmer)

The audit verifies *traceability* — every board claim has a file behind it. It cannot verify that the board is a good brand. A board can be 100% traced and still position you badly, target the wrong media, or bury your strongest proof. Traceable-but-weak passes every check this tool runs. That gap — between conformance (machine) and adequacy (you, your reviewers, your audience) — is the course's central distinction, and your Glimmer points live in how clearly you can articulate it about *your own board*.

## Grading — 25 points

**Mechanics — 20 points, itemized** (each line independently checkable; partial completion earns partial credit):

| # | Mechanical component | Pts |
|---|---|---|
| 1 | Token in `.env`; `.env` gitignored and verified; no credential in any committed file, prompt, or log | 2 |
| 2 | Ping script read-before-run; all checks PASS; output saved | 2 |
| 3 | Board fetched; dated fixture written; pages/node-types/text-count summary | 2 |
| 4 | `board-claims.json`: every text-bearing node extracted with node id, type, content, parent frame; count matches fixture | 3 |
| 5 | Trace table drafted covering every claim row (no rows silently dropped) | 2 |
| 6 | Every row human-adjudicated: traced-with-pointer or untraceable — none left as the agent's unreviewed proposal | 2 |
| 7 | Every untraceable row resolved (file entry added / claim cut / decoration declared) with a stated reason | 2 |
| 8 | `recipes/board-audit.md` with lifecycle frontmatter; human-adjudication gate stated; status set with run evidence cited | 2 |
| 9 | Recipe and scripts name what they read and write; no credentials anywhere in them | 1 |
| 10 | RUN_LOG entry: counts, resolutions, recipe status — no secrets | 2 |
| | **Mechanics total** | **20** |

**Glimmer — 5 points, ranked by depth of reasoning**, on the five dimensions as they show up here: *WHY* (can you say why audit-before-automate, in your own words?), *mechanism* (does your recipe's claim→file chain hold causally, or just procedurally?), *defensibility* (are your untraceable resolutions reasoned, or all "added entry" by reflex?), *specificity* (real node ids, real file pointers, real counts), *usefulness* (would the next student running your recipe succeed?). Same bands and cap as Exercise One: top quartile 4–5, descending; a low-effort cohort lands at 1–2 regardless of relative rank.

*(Instructor's option: one targeted AI question at your weakest dimension; the grade lands on the revision.)*

## Going further (not graded)

The audit *reads*. Writing the board — rendering `brand/` changes onto the canvas automatically — requires Figma's Plugin API, which runs inside the desktop app and only ever writes after explicit human approval per change. It's the right second tool and the wrong first one: you verify before you automate writes. If you want it, propose it as your semester build — it closes a gap row honestly.

## What can go wrong

| Symptom | What it means | Fix |
|---|---|---|
| 403 on `/v1/me` | bad or revoked token | regenerate; check `.env` is actually being read |
| 403/404 on the file | wrong file key, or the board isn't yours/shared to you | re-copy the key from the URL; check file access in Figma |
| Token pasted into chat | a leak, however brief | revoke it, generate a new one, note it in the log — the procedure *is* the lesson |
| Claims file count ≠ fixture text count | the walker missed a node type (stickies? nested groups?) | have the agent list every node type in the fixture and account for each |
| Every trace row accepted as the agent proposed | adjudication skipped — rubric line 6 exists for this | re-read each proposal against the actual file entry; at least one will be wrong |
| Zero untraceable claims on a pre-existing board | suspicious — your board predates your files | check the walker; boards built before `brand/` essentially always have orphans |
| Recipe promoted without cited evidence | status is a claim, not a record | cite the fixture, claims file, and trace table in the frontmatter |
