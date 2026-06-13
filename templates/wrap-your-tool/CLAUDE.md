# CLAUDE.md — Wrap Your Tool (the fence)

> **Read this first, conductor. This file is the actuator. The README is the alibi.**
> If they ever disagree, this file wins. You obey the fences here, not the prose anywhere else.

This is a **working** React (Next.js App Router) + Vercel + Neon template. It already deploys and runs with a sample tool. The student's job is **not** to build a web app — it is to wire *their* Madison tool into the one seam this template leaves open, and to make the interface usable by a real person.

You are working inside someone else's professional codebase. The rule, which is the whole point of this exercise: **work in your zone, respect the fences, do not "improve" what isn't yours.** In a real codebase you almost never touch everything. Touching a DO-NOT-TOUCH zone to make it "cleaner" is how you break the deploy and lose 20 points.

---

## The map: what to touch, what to leave alone

| File | Zone | What it's for |
|---|---|---|
| `lib/tool.ts` | ✅ **YOUR WORK HERE** | wire your Madison tool: the input type, the result type, the `runTool()` body |
| `app/page.tsx` | ✅ **YOUR WORK HERE** | the UI — input fields (from your Data Contract), the output display, labels |
| `data/sample.json` | ✅ **YOUR WORK HERE** | replace with your bundled `data/verified/…` from Exercise Three |
| `app/api/run/route.ts` | ⛔ **DO NOT TOUCH** (one marked seam inside) | request validation, error envelope, optional persistence — only the marked `// === CALL YOUR TOOL ===` line is yours |
| `lib/db.ts` | ⛔ **DO NOT TOUCH** | Neon serverless connection |
| `app/layout.tsx` | ⛔ **DO NOT TOUCH** | page shell |
| `app/globals.css` | ⚠️ **edit values, not structure** | change colors/spacing; don't delete classes the components use |
| `next.config.js`, `tsconfig.json`, `package.json` | ⛔ **DO NOT TOUCH** | build config — changing these breaks Vercel deploy |
| `.env.example` | read only | copy to `.env.local`; never commit real values |

---

## The DO-NOT-TOUCH zones, **with reasons** (a fence with a reason holds; a bare rule doesn't)

**`lib/db.ts` — the Neon connection.** Uses the `@neondatabase/serverless` HTTP driver, **not** a normal `pg` connection pool. *Reason:* Vercel runs each request as a separate serverless function. A normal pooled `pg` connection from serverless functions exhausts Neon's free-tier connection limit within minutes and the app starts returning 500s under any real use — exactly when a user test is happening. The HTTP driver is the fix. If you "modernize" this to `pg`, the app will work in your one test and die in front of your graded testers.

**`app/api/run/route.ts` — the request handler.** It validates input, calls your tool, optionally saves the run, and returns a plain-English error envelope (`{ ok, data | error }`). *Reason:* the assignment requires plain-English errors, not stack traces. This envelope is what guarantees that. The only line you change is the marked seam:
```ts
// === CALL YOUR TOOL — this line is yours ===
const data = await runTool(input);
```
Everything around it — the validation, the try/catch, the error strings, the persistence call — is the safety system. Rewrite it and you reintroduce the stack-trace failure the assignment penalizes.

**`next.config.js` / `tsconfig.json` / `package.json`.** *Reason:* these are tuned so `git push` → Vercel build → live URL works on the free tier with zero config. The single most common way students lose the "URL broken at submission" 20 points is letting a conductor "upgrade a dependency" or "fix" a config. The build is green. Leave it green.

---

## The YOUR-WORK-HERE zones, in order

**1. `lib/tool.ts` — wire your tool (do this first).**
- Edit `ToolInput` to match the inputs your tool needs (your Conductor Brief Part 3 Data Contract).
- Edit `ToolResult` to match what your tool returns.
- Replace the body of `runTool()` with your actual logic. It can: read the bundled `data/sample.json` (replace that file with your verified data), call an external API at runtime (read keys from `process.env`, never hardcode), or both.
- `runTool()` must **throw a plain-English `Error`** on bad input (e.g. `throw new Error("Please enter a brand name.")`). The route turns thrown errors into the user-facing message. Do not return raw nulls or stack traces.

**2. `data/sample.json` — your data.**
- Replace with your Exercise Three `data/verified/…` file (bundled = loads at startup, no database needed — the right choice for most Madison tools).
- If your data must stay fresh, don't bundle it — call the API in `runTool()` instead.

**3. `app/page.tsx` — the interface.**
- One input field per `ToolInput` field, with a **clear label a non-technical user understands without you in the room** (this is the assignment's actual test).
- Render `ToolResult` as something a human reads and acts on — **not a JSON blob, not a raw table.** A summary line + a clean list of items.
- The error path already shows `error` in plain English; don't replace it with a console log.

---

## Rules for you, conductor (the gates)

1. **Never edit a DO-NOT-TOUCH file.** If the task seems to require it, stop and tell the student — it almost never does.
2. **Never hardcode a secret.** Keys come from `process.env`. If you write a key into a file, that's a hard stop.
3. **Never change `package.json` deps or config to "fix" something.** If a build fails, the fix is in the student's zone, not the config.
4. **The output the user sees is human-readable.** If you're about to render JSON to the screen, stop — that fails the assignment.
5. **When the student's data needs persistence**, use the `saveRun`/`getRecentRuns` helpers from `lib/db.ts` as-is. Do not write new DB code.

This template is the entry-level version of the two-audience discipline from the Conductor Brief: the README is for the human, this `CLAUDE.md` is for you. The student authored their tool's intent; you wire it in, inside the fence. Truth lives in the deploy — if the URL is live and a stranger can use it, the run proved the brief.

---

*v1 draft — will change after the first cohort tests it. Known open question: whether to keep persistence optional or require it for tools with accumulating data.*
