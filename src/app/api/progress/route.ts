import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

// GET /api/progress — return completed milestone IDs for the logged-in user
export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ completed: [] });
  }

  const { data, error } = await supabase
    .from("user_progress")
    .select("milestone_id")
    .eq("user_id", user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    completed: data.map((row) => row.milestone_id),
  });
}

// POST /api/progress — toggle a milestone (mark or unmark)
export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { milestoneId, completed } = await req.json();

  if (!milestoneId) {
    return NextResponse.json({ error: "milestoneId required" }, { status: 400 });
  }

  if (completed) {
    // Insert (upsert)
    const { error } = await supabase.from("user_progress").upsert(
      { user_id: user.id, milestone_id: milestoneId },
      { onConflict: "user_id,milestone_id" }
    );
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  } else {
    // Delete
    const { error } = await supabase
      .from("user_progress")
      .delete()
      .eq("user_id", user.id)
      .eq("milestone_id", milestoneId);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
