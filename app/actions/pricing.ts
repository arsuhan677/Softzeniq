"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function addPricingPlan(formData: FormData) {
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const period = formData.get("period") as string;
  const desc = formData.get("desc") as string;
  const featuresString = formData.get("features") as string;
  const cta = formData.get("cta") as string;
  const highlight = formData.get("highlight") === "on";

  const features = featuresString.split(",").map((f) => f.trim()).filter(Boolean);

  const { error } = await supabase.from("pricing_plans").insert({
    name,
    price,
    period,
    desc,
    features,
    cta,
    highlight,
  });

  if (error) {
    console.error("Error adding pricing plan:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/");
  revalidatePath("/softzeniq/pricing");
  return { success: true };
}

export async function deletePricingPlan(id: string) {
  const { error } = await supabase.from("pricing_plans").delete().eq("id", id);
  
  if (error) {
    console.error("Error deleting pricing plan:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/");
  revalidatePath("/softzeniq/pricing");
  return { success: true };
}

export async function updatePricingPlan(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const period = formData.get("period") as string;
  const desc = formData.get("desc") as string;
  const featuresString = formData.get("features") as string;
  const cta = formData.get("cta") as string;
  const highlight = formData.get("highlight") === "on";

  const features = featuresString.split(",").map((f) => f.trim()).filter(Boolean);

  const { error } = await supabase.from("pricing_plans").update({
    name,
    price,
    period,
    desc,
    features,
    cta,
    highlight,
  }).eq("id", id);

  if (error) {
    console.error("Error updating pricing plan:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/");
  revalidatePath("/softzeniq/pricing");
  return { success: true };
}
