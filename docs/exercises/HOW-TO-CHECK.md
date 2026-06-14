# How to check your work before you submit

Every exercise produces machine-readable artifacts (JSON, YAML, a recipe, a data
folder). Before you submit, **check conformance** — that the required pieces are present
and well-formed. This is the course's own discipline (MYCROFT P4: *machines verify
conformance; humans verify adequacy*) turned on your own submission. A check that passes
means your work is **gradeable**, not that it's an A — whether the content is *good* is
the human grade.

There are three layers of checking. Use the ones your exercise calls for.

## 1. Machine conformance — is it well-formed?
```bash
node scripts/conformance.mjs <paths…>     # or: npm run verify
```
Confirms every JSON parses, every YAML parses, every `.mjs`/`.py`/`.sh` compiles, and
Markdown is well-formed. **Invalid JSON/YAML is not gradeable** — fix it first.

## 2. Human readability — can you actually read it to check it?
```bash
node scripts/to-markdown.mjs <file.json|.yaml>     # or the `review` skill
```
Renders an AI-native file as a Markdown "review sheet" with a **"Needs your input"**
checklist — every empty field, `[CONFLICT]`, `[Unverifiable]`, or `_human_gate` value.
If that list isn't empty, you have unresolved gates. Don't call an artifact attested
until it's empty.

## 3. Assignment-specific verifier — does it meet the rubric's hard requirements?
Some assignments have a dedicated checker that maps to the rubric and automatic
deductions:
```bash
node scripts/a5b-verify.mjs your-submission.zip     # Assignment 5B
node scripts/assignment6-build-pdf.mjs <your-json-dir>   # Assignment 6 (refuses until every gate is filled)
```

## Per-exercise quick reference

| Exercise | What to run |
|---|---|
| **1 — Brand layer** | `node scripts/conformance.mjs brand/` then `node scripts/to-markdown.mjs brand/resume.json` (the "Needs your input" list should be empty before you mark it attested) |
| **1A — Figma board audit** | `node scripts/conformance.mjs <board-claims.json>`; render it to read each claim's trace |
| **2 — Target, Gap, PRD** | `node scripts/conformance.mjs <targets.json>`; render to check the gap table |
| **3 — Gather, Validate, Defend** | `node scripts/conformance.mjs data/`; confirm `data/verified/<source>/` meets your stated record count and gate |
| **5 — Conductor Brief** | `node scripts/conformance.mjs brand_config.json gates.yml`; render the config; run the conductor against the **config**, not the prose |
| **5A — Wrap Your Tool** | confirm a clean fence diff (you didn't break the scaffold) and the deployed URL responds; the graded artifact is the usability divergence log |
| **5B — Build the Recipe** | `node scripts/a5b-verify.mjs your-submission.zip` — reports what's there/missing + the deductions you'd hit |
| **6A — Pitch deck from the arc** | `node scripts/build-deck.mjs your-deck.md` (renders; press `p` for the PDF), then `node scripts/conformance.mjs your-deck.md your-deck.html`, then `node scripts/deck-trace.mjs your-deck.md` (every slide carries a resolvable `TRACE:`); then the **trace audit by hand** — confirm each cited artifact actually backs its slide's claim, or flag it `TRACE: ASPIRATION` and move it off-slide |
| **7 — Brand identity** | drive the `nina` skill (`/n4`→`/n11`); run `/ready` (0–100, 80+ to submit); then the **trace audit by hand** — every visual choice (color, font, logo) points to a brief line or the archetype, or it's a generic orphan to fix |
| **8 — Digital presence** | `node scripts/build-resume.mjs --check` (refuses while resume.json is unresolved — must be clean to render the two resumes) and `node scripts/contrast-check.mjs --pair "#text" "#bg"` (each pair passes AA); then by hand: **WebAIM** every real text/bg pair (the required PDF), open the site **on your phone**, and run the **trace audit** across all six touchpoints — every choice points to your A7 system or it's the generic one to fix |
| **9 — Brand storytelling** | `node scripts/to-markdown.mjs brand/resume.json` (your truth source); then by hand: **count words** (3×100, 1×300, 1×500+), run the **truth audit** (each story traces to a real moment in `brand/`), the **voice test** (read aloud against Nina's `/n6` IS-NOT list — sounds generated = fix it), confirm the **framework is visible** in each piece, and confirm the **article URL resolves** |
| **10 — Substack platform** | run **BRANDY** on the three headers and confirm the cohesion matrix is **labeled** (palette/type/logo/voice, not vibes); then by hand: **count words** (article 600–800, reflection 300), run the **usefulness test** (what does the reader now have?) and the **integration test** (delete the tool mention — does the article still stand?), read the **headline aloud**, `[VERIFY — human]` any **stat**, confirm both **URLs resolve** (live, not a draft) |
| **Final — Brand portfolio** | `node scripts/build-pitch.mjs your-deck.md` (validate + `deck-trace` + render) and `node scripts/conformance.mjs your-deck.md your-deck.html`; then by hand: the **system-level trace audit** (confirm each slide's cited artifact actually backs its claim), **BRANDY** consistency matrix labeled, **rehearse to ≤ 9:30** (`madison-pitch` timing), confirm the **website + tool demo links both resolve live** (demo or die — no localhost), `[VERIFY — human]` any **stat**, and Nina `/ready` 80+ |

The point is the same one the course teaches: don't trust that it *looks* done. Run the
check. A polished artifact that fails conformance is exactly the fluent-but-untrustworthy
thing you're learning to catch.
