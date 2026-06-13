# Wrap Your Tool — a working React / Vercel / Neon template

This is the **human-facing alibi** for the template. The machine-facing actuator is `CLAUDE.md` — if you point Claude Code at this folder, it reads `CLAUDE.md` and works inside the fences. This README tells *you* what's happening.

A working web interface for your Madison tool. It already deploys and runs with a sample tool. **You don't build a web app — you wire your tool into one open seam and make the interface usable by a real person.** That's the assignment.

## Why this and not Gradio/Streamlit

Gradio and Streamlit are convenience wrappers — fast, but they announce "I wrapped something quickly," and they can't teach the one habit that matters: **working inside a real codebase you didn't write, respecting boundaries, not "improving" what isn't yours.** This template gives you a real URL, a real frontend, a real database option, and a portfolio piece that looks built — and it forces the professional habit. The fence (`CLAUDE.md`) is what makes that safe with an AI conductor.

## What's yours, what's fenced

✅ **Your zone:** `lib/tool.ts` (wire your tool), `app/page.tsx` (the UI), `data/sample.json` (your data).
⛔ **Do not touch:** `lib/db.ts`, `app/api/run/route.ts` (except the one marked line), the config files. Each fence has a *reason* in `CLAUDE.md` — read them; they're the difference between a live URL and a broken one at submission.

## Run it locally (3 steps)

```bash
npm install
cp .env.example .env.local   # optional: only fill DATABASE_URL if your tool needs persistence
npm run dev                  # open http://localhost:3000
```

The sample tool works immediately. Then swap in yours.

## Wire in your tool (the order)

1. **`lib/tool.ts`** — edit `ToolInput`, `ToolResult`, and the body of `runTool()`. Throw plain-English `Error`s on bad input.
2. **`data/sample.json`** — replace with your Exercise Three `data/verified/…` file (or call your API in `runTool()` instead).
3. **`app/page.tsx`** — one labelled input per `ToolInput` field; render the result human-readable.

If you use Claude Code: tell it *"wire my tool into this template; obey CLAUDE.md; don't touch the fenced files."* It reads working code well — give it the pattern, not a blank page.

## Deploy to a public URL (free)

1. Push this folder to a GitHub repo.
2. At [vercel.com](https://vercel.com) → **New Project** → import the repo → **Deploy**. No config needed.
3. *If your tool needs a database:* create a free Postgres at [neon.tech](https://neon.tech), copy the connection string, and in Vercel → **Settings → Environment Variables** add `DATABASE_URL`. Redeploy. (Skip this if your data is bundled.)
4. *If your tool calls an API:* add its key the same way. Never put a key in the code.

You now have a live URL anyone can open. That's the assignment's bar: **a stranger can use it without you in the room.**

## The assignment's actual test

Not "does it look nice." It's: **could your Part-2 user complete a task without you explaining the inputs?** Build for that. Then watch three real users try it and report what confused them honestly — the confusion is the data.

---

*v1 draft template — will change after the first cohort tests it. Pinned versions (Next 14.2.5, Neon serverless 0.10.x) are deliberate; if a future build breaks, the fix is to re-pin, not to "upgrade."*
