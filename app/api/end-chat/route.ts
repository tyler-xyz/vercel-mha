import { NextResponse } from "next/server";
import twilio from "twilio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Called by public/chat.js when the visitor goes idle or closes the tab.
// Finds every TaskRouter task for the chat channel and ends it, so agents
// never pick up a dead chat and Flex's channel janitor deactivates the channel.
//   pending / reserved -> canceled   (nobody has it yet)
//   assigned           -> wrapping   (agent sees wrap-up, clicks Complete)
// ponytail: the channel SID (CH + 32 hex, unguessable) is the only auth. Add a
// signed session token if that ever proves insufficient.
const NEXT_STATUS: Record<string, "canceled" | "wrapping"> = {
  pending: "canceled",
  reserved: "canceled",
  assigned: "wrapping",
};

export async function POST(req: Request) {
  let channelSid = "";
  let reason = "Visitor left the chat";
  try {
    const body = JSON.parse(await req.text());
    channelSid = String(body.channelSid ?? "");
    if (body.reason) reason = String(body.reason).slice(0, 200);
  } catch {
    /* fall through to validation */
  }
  if (!/^CH[0-9a-f]{32}$/.test(channelSid)) {
    return NextResponse.json({ error: "bad channelSid" }, { status: 400 });
  }

  const client = twilio(process.env.TWILIO_API_KEY, process.env.TWILIO_API_SECRET, {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
  });
  const [workspace] = await client.taskrouter.v1.workspaces.list({ limit: 1 });
  const tasks = await client.taskrouter.v1
    .workspaces(workspace.sid)
    .tasks.list({ evaluateTaskAttributes: `channelSid == '${channelSid}'` });

  const results = [];
  for (const task of tasks) {
    const next = NEXT_STATUS[task.assignmentStatus];
    if (next) await task.update({ assignmentStatus: next, reason });
    results.push({ task: task.sid, from: task.assignmentStatus, to: next ?? null });
  }
  return NextResponse.json({ ok: true, channelSid, results });
}
