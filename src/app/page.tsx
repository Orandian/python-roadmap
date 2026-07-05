import { createClient } from "@/utils/supabase/server";
import RoadmapClient from "@/components/RoadmapClient";

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let completedIds: string[] = [];

  if (user) {
    const { data } = await supabase
      .from("user_progress")
      .select("milestone_id")
      .eq("user_id", user.id);

    completedIds = data?.map((r) => r.milestone_id) ?? [];
  }

  return <RoadmapClient user={user} initialCompleted={completedIds} />;
}
