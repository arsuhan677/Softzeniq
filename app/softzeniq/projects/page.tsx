import { supabase } from "@/lib/supabase";
import DashboardView from "./DashboardView";

export default async function ProjectsDashboard() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-background/50">
      <DashboardView projects={projects} />
    </div>
  );
}
