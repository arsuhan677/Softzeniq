"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function addProject(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const category = formData.get("category") as string;
  const client = formData.get("client") as string;
  const summary = formData.get("summary") as string;
  const result = formData.get("result") as string;
  const tagsString = formData.get("tags") as string;
  const gradient = formData.get("gradient") as string;
  const link = formData.get("link") as string;
  const image_url = formData.get("image_url") as string;
  const show_on_home = formData.get("show_on_home") === "on";

  const tags = tagsString.split(",").map((t) => t.trim()).filter(Boolean);

  const { error } = await supabase.from("projects").insert({
    title,
    slug,
    category,
    client,
    summary,
    result,
    tags,
    gradient,
    link,
    image_url,
    show_on_home,
  });

  if (error) {
    console.error("Error adding project:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/");
  revalidatePath("/portfolio");
  revalidatePath("/softzeniq/projects");
  return { success: true };
}

export async function deleteProject(id: string) {
  const { error } = await supabase.from("projects").delete().eq("id", id);
  
  if (error) {
    console.error("Error deleting project:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/");
  revalidatePath("/portfolio");
  revalidatePath("/softzeniq/projects");
  return { success: true };
}

export async function updateProject(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const category = formData.get("category") as string;
  const client = formData.get("client") as string;
  const summary = formData.get("summary") as string;
  const result = formData.get("result") as string;
  const tagsString = formData.get("tags") as string;
  const gradient = formData.get("gradient") as string;
  const link = formData.get("link") as string;
  const image_url = formData.get("image_url") as string;
  const show_on_home = formData.get("show_on_home") === "on";

  const tags = tagsString.split(",").map((t) => t.trim()).filter(Boolean);

  const { error } = await supabase.from("projects").update({
    title,
    slug,
    category,
    client,
    summary,
    result,
    tags,
    gradient,
    link,
    image_url,
    show_on_home,
  }).eq("id", id);

  if (error) {
    console.error("Error updating project:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/");
  revalidatePath("/portfolio");
  revalidatePath("/softzeniq/projects");
  return { success: true };
}
