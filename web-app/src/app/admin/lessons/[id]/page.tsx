import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import LessonEditor from "./lesson-editor";

export default async function AdminLessonEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  // Check auth + admin
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();
  if (!profile?.is_admin) redirect("/");

  // Fetch lesson
  const { data: lesson } = await supabase
    .from("lessons")
    .select("id, title, slug, module_slug, markdown_content")
    .eq("id", id)
    .single();

  if (!lesson) redirect("/admin");

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">✏️ {lesson.title}</h1>
        <Link href="/admin" className="btn btn-secondary">
          ← Quay lại
        </Link>
      </div>
      <LessonEditor lesson={lesson} />
    </div>
  );
}
