import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import ResourceEditor from "./resource-editor";

export default async function AdminResourceEditPage({
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

  // Fetch resource
  const { data: resource } = await supabase
    .from("resources")
    .select("id, title, slug, markdown_content")
    .eq("id", id)
    .single();

  if (!resource) redirect("/admin");

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">✏️ {resource.title}</h1>
        <Link href="/admin" className="btn btn-secondary">
          ← Quay lại
        </Link>
      </div>
      <ResourceEditor resource={resource} />
    </div>
  );
}
