import { redirect } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Admin Panel | Google Flow Course",
  description: "Quản lý nội dung khóa học",
};

export default async function AdminPage() {
  const supabase = await createClient();

  // Check authentication
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Check admin role
  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  if (!profile?.is_admin) {
    redirect("/");
  }

  // Fetch all content
  const [{ data: modulesData }, { data: lessonsData }, { data: resourcesData }] =
    await Promise.all([
      supabase.from("modules").select("*").order("number"),
      supabase
        .from("lessons")
        .select("id, slug, title, module_slug")
        .order("order_index"),
      supabase.from("resources").select("*").order("order_index"),
    ]);

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">⚙️ Admin Panel</h1>
        <span className="admin-badge">🛡️ {user.email}</span>
      </div>

      {/* Modules */}
      <div className="admin-section">
        <h2 className="admin-section-title">📦 Modules ({modulesData?.length ?? 0})</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Slug</th>
              <th>Tiêu đề</th>
            </tr>
          </thead>
          <tbody>
            {modulesData?.map((mod) => (
              <tr key={mod.id}>
                <td>{mod.number}</td>
                <td><code>{mod.slug}</code></td>
                <td>{mod.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Lessons */}
      <div className="admin-section">
        <h2 className="admin-section-title">📝 Lessons ({lessonsData?.length ?? 0})</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Module</th>
              <th>Slug</th>
              <th>Tiêu đề</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {lessonsData?.map((lesson) => (
              <tr key={lesson.id}>
                <td><code>{lesson.module_slug}</code></td>
                <td><code>{lesson.slug}</code></td>
                <td>{lesson.title}</td>
                <td>
                  <Link
                    href={`/admin/lessons/${lesson.id}`}
                    className="admin-edit-link"
                  >
                    ✏️ Sửa
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Resources */}
      <div className="admin-section">
        <h2 className="admin-section-title">📚 Resources ({resourcesData?.length ?? 0})</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Slug</th>
              <th>Tiêu đề</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {resourcesData?.map((res) => (
              <tr key={res.id}>
                <td><code>{res.slug}</code></td>
                <td>{res.title}</td>
                <td>
                  <Link
                    href={`/admin/resources/${res.id}`}
                    className="admin-edit-link"
                  >
                    ✏️ Sửa
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
