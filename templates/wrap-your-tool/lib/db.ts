// ============================================================================
// ⛔ DO NOT TOUCH — Neon connection (serverless HTTP driver).
//
// WHY (the reason behind the fence): Vercel runs each request as a separate
// serverless function. A normal pooled `pg` connection from serverless functions
// exhausts Neon's free-tier connection limit within minutes and the app returns
// 500s under real use — exactly during a graded user test. The HTTP driver below
// is the fix. Do not "modernize" this to `pg`.
//
// Persistence is OPTIONAL. If DATABASE_URL is not set, these helpers no-op and the
// app still works (most Madison tools bundle their data and need no DB).
// ============================================================================

import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
const sql = url ? neon(url) : null;

let ensured = false;
async function ensureTable() {
  if (!sql || ensured) return;
  await sql`
    CREATE TABLE IF NOT EXISTS runs (
      id        SERIAL PRIMARY KEY,
      input     JSONB NOT NULL,
      result    JSONB NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )`;
  ensured = true;
}

export async function saveRun(input: unknown, result: unknown): Promise<void> {
  if (!sql) return; // persistence off — fine
  try {
    await ensureTable();
    await sql`INSERT INTO runs (input, result) VALUES (${JSON.stringify(input)}, ${JSON.stringify(result)})`;
  } catch {
    // Persistence must never break the user-facing run. Saving is best-effort.
  }
}

export async function getRecentRuns(limit = 10): Promise<Array<{ id: number; created_at: string }>> {
  if (!sql) return [];
  try {
    await ensureTable();
    const rows = await sql`SELECT id, created_at FROM runs ORDER BY created_at DESC LIMIT ${limit}`;
    return rows as Array<{ id: number; created_at: string }>;
  } catch {
    return [];
  }
}
