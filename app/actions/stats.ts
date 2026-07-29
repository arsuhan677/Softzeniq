"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function addStat(formData: FormData) {
  const label = formData.get("label") as string;
  const value = formData.get("value") as string;
  const display_order = parseInt(formData.get("display_order") as string) || 0;

  const { error } = await supabase
    .from("stats")
    .insert([{ label, value, display_order }]);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/softzeniq/stats");
}

export async function updateStat(id: string, formData: FormData) {
  const label = formData.get("label") as string;
  const value = formData.get("value") as string;
  const display_order = parseInt(formData.get("display_order") as string) || 0;

  const { error } = await supabase
    .from("stats")
    .update({ label, value, display_order })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/softzeniq/stats");
}

export async function deleteStat(id: string) {
  const { error } = await supabase.from("stats").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/softzeniq/stats");
}
