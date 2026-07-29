import { supabase } from "@/lib/supabase";
import TestimonialView from "./TestimonialView";

export default async function TestimonialsDashboard() {
  const { data: testimonials, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-background/50">
      <TestimonialView testimonials={testimonials} />
    </div>
  );
}
