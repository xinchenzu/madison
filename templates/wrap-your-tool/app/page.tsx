// ============================================================================
// ✅ YOUR WORK HERE — the interface.
//
// One input field per field in your ToolInput (lib/tool.ts). Clear labels a
// non-technical user understands WITHOUT you in the room — that's the graded test.
// Render the result as something a human reads and acts on: a summary line + a
// clean list. NOT a JSON blob, NOT a raw table.
//
// The error path (red box) already shows plain-English errors. Keep it.
// ============================================================================

"use client";

import { useState } from "react";
import type { ToolResult } from "../lib/tool";

export default function Home() {
  // --- your input fields' state (one per ToolInput field) ---
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(5);

  const [result, setResult] = useState<ToolResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleRun(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, limit }), // send your ToolInput fields
      });
      const json = await res.json();
      if (json.ok) setResult(json.data as ToolResult);
      else setError(json.error as string);
    } catch {
      setError("We couldn't reach the tool. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="wrap">
      {/* --- Rename these to YOUR tool. This is the human-facing alibi; keep it true to your config. --- */}
      <h1>BrandPulse</h1>
      <p className="tagline">See which sources are actually talking about a brand — signal from noise.</p>

      <form onSubmit={handleRun} className="card">
        {/* --- one field per ToolInput field, with a clear label --- */}
        <label>
          Brand or topic
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. a company or product name"
          />
        </label>

        <label>
          How many results
          <input
            type="number"
            min={1}
            max={50}
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Looking…" : "Look it up"}
        </button>
      </form>

      {/* --- error: plain English, already wired. Keep it. --- */}
      {error && <div className="error">{error}</div>}

      {/* --- result: render it human-readable. Replace with YOUR output shape. --- */}
      {result && (
        <section className="result">
          <p className="summary">{result.summary}</p>
          <ul>
            {result.items.map((item, i) => (
              <li key={i}>
                <strong>{item.title}</strong>
                <span className="meta">
                  {item.source} · {item.date}
                </span>
                {item.note && <p className="note">{item.note}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
