"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function addTestimonial(formData: FormData) {
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const quote = formData.get("quote") as string;
  const rating = parseInt(formData.get("rating") as string) || 5;

  const { error } = await supabase.from("testimonials").insert({
    name,
    role,
    quote,
    rating,
  });

  if (error) {
    console.error("Error adding testimonial:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/");
  revalidatePath("/softzeniq/testimonials");
  return { success: true };
}

export async function deleteTestimonial(id: string) {
  const { error } = await supabase.from("testimonials").delete().eq("id", id);
  
  if (error) {
    console.error("Error deleting testimonial:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/");
  revalidatePath("/softzeniq/testimonials");
  return { success: true };
}

export async function updateTestimonial(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const quote = formData.get("quote") as string;
  const rating = parseInt(formData.get("rating") as string) || 5;

  const { error } = await supabase.from("testimonials").update({
    name,
    role,
    quote,
    rating,
  }).eq("id", id);

  if (error) {
    console.error("Error updating testimonial:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/");
  revalidatePath("/softzeniq/testimonials");
  return { success: true };
}
