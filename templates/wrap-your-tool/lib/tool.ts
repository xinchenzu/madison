// ============================================================================
// ✅ YOUR WORK HERE — wire your Madison tool into this file.
// This is the ONE seam the template leaves open. Do it first.
//
// Three things are yours: ToolInput, ToolResult, and the body of runTool().
// Everything else in the template (routing, DB, error handling, build) is fenced.
// See CLAUDE.md.
// ============================================================================

import sample from "../data/sample.json";

// --- 1. The inputs your tool needs (your Conductor Brief Part 3 Data Contract) ---
export type ToolInput = {
  query: string; // e.g. the brand name to search for
  limit: number; // how many results to return
};

// --- 2. What your tool returns (keep it human-shaped, not a raw dump) ---
export type ToolResult = {
  summary: string; // one plain sentence a user reads first
  items: Array<{
    title: string;
    source: string;
    date: string;
    note?: string;
  }>;
};

// --- 3. Your tool's logic. Replace this body with your actual Madison tool. ---
//
// This example reads bundled data (data/sample.json) and filters it. Most Madison
// tools work this way: verified data loaded at startup, no database needed.
//
// If your tool calls an external API instead, do it here and read keys from
// process.env (NEVER hardcode a key). If your tool needs to remember past runs,
// the route already persists each run via lib/db.ts — you don't write DB code.
//
// MUST: throw a plain-English Error on bad input. The route turns it into the
// message the user sees. Do not return null and do not let a stack trace escape.
export async function runTool(input: ToolInput): Promise<ToolResult> {
  const query = (input.query ?? "").trim();
  if (!query) {
    throw new Error("Please enter a brand or topic to look up.");
  }
  if (!Number.isFinite(input.limit) || input.limit < 1) {
    throw new Error("Please choose how many results you want (at least 1).");
  }

  const records = (sample as ToolResult["items"]).filter((r) =>
    `${r.title} ${r.source} ${r.note ?? ""}`.toLowerCase().includes(query.toLowerCase()),
  );

  const items = records.slice(0, input.limit);
  const summary =
    items.length === 0
      ? `No coverage found for "${query}" in the current dataset.`
      : `Found ${items.length} mention${items.length === 1 ? "" : "s"} of "${query}" across ${
          new Set(items.map((i) => i.source)).size
        } source${new Set(items.map((i) => i.source)).size === 1 ? "" : "s"}.`;

  return { summary, items };
}
