// ============================================================================
// ⛔ DO NOT TOUCH — except the ONE marked seam below.
//
// This handler is the safety system: it validates input, calls your tool, saves
// the run (best-effort), and returns a plain-English error envelope instead of a
// stack trace. The assignment requires plain-English errors; this is what
// guarantees them. The only line that is yours is marked "CALL YOUR TOOL".
// ============================================================================

import { NextRequest, NextResponse } from "next/server";
import { runTool, type ToolInput } from "../../../lib/tool";
import { saveRun } from "../../../lib/db";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let body: Partial<ToolInput>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "We couldn't read your request. Please try again." }, { status: 400 });
  }

  const input: ToolInput = {
    query: typeof body.query === "string" ? body.query : "",
    limit: typeof body.limit === "number" ? body.limit : Number(body.limit) || 0,
  };

  try {
    // === CALL YOUR TOOL — this line is yours ===
    const data = await runTool(input);

    await saveRun(input, data); // best-effort; no-ops if no database
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    // Plain-English message only. Never leak a stack trace to the user.
    const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
