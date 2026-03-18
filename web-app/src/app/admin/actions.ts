"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

async function verifyAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Not authenticated");

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  if (!profile?.is_admin) throw new Error("Not authorized");

  return supabase;
}

export async function updateLesson(
  lessonId: string,
  markdown_content: string,
  html_content: string
) {
  const supabase = await verifyAdmin();

  const { error } = await supabase
    .from("lessons")
    .update({
      markdown_content,
      html_content,
      updated_at: new Date().toISOString(),
    })
    .eq("id", lessonId);

  if (error) throw new Error(error.message);

  revalidatePath("/", "layout");
  return { success: true };
}

export async function updateResource(
  resourceId: string,
  markdown_content: string,
  html_content: string
) {
  const supabase = await verifyAdmin();

  const { error } = await supabase
    .from("resources")
    .update({
      markdown_content,
      html_content,
      updated_at: new Date().toISOString(),
    })
    .eq("id", resourceId);

  if (error) throw new Error(error.message);

  revalidatePath("/", "layout");
  return { success: true };
}
