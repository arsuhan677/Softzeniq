import { supabase } from "@/lib/supabase";
import PricingView from "./PricingView";

export default async function PricingDashboard() {
  const { data: plans, error } = await supabase
    .from("pricing_plans")
    .select("*")
    .order("created_at", { ascending: true }); // Assuming we want them in the order they were created or sorted

  return (
    <div className="min-h-screen bg-background/50">
      <PricingView plans={plans} />
    </div>
  );
}
