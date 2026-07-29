"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function updateSettings(formData: FormData) {
  const header_logo = formData.get("header_logo") as string;
  const footer_logo = formData.get("footer_logo") as string;
  const favicon = formData.get("favicon") as string;

  // We assume there's always one row with id = 1 for global settings
  const { error } = await supabase.from("site_settings").upsert({
    id: 1,
    header_logo,
    footer_logo,
    favicon,
  });

  if (error) {
    console.error("Error updating settings:", error);
    return { success: false, error: error.message };
  }

  // Revalidate entire site to update layout
  revalidatePath("/", "layout");
  return { success: true };
}
