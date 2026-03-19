import { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { modules, getAllPages } from "@/lib/course-data";
import ProfileClient from "./profile-client";

export const metadata: Metadata = {
  title: "Hồ sơ | Google Flow Course",
  description: "Thông tin tài khoản và tiến độ học",
};

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, is_admin, created_at")
    .eq("id", user.id)
    .single();

  // Fetch progress
  const { data: progressData } = await supabase
    .from("user_progress")
    .select("page_path, completed_at")
    .eq("user_id", user.id)
    .order("completed_at", { ascending: false });

  const completedPages = progressData?.map((r) => r.page_path) ?? [];
  const allPages = getAllPages();
  const totalPages = allPages.length;
  const completedCount = completedPages.length;
  const progressPercent =
    totalPages > 0 ? Math.round((completedCount / totalPages) * 100) : 0;

  // Last visited lesson
  const lastCompleted = progressData?.[0];

  // Module progress breakdown
  const moduleProgress = modules.map((mod) => {
    const modPages = mod.lessons.map((l) => `/modules/${mod.slug}/${l.slug}`);
    const modCompleted = modPages.filter((p) => completedPages.includes(p));
    return {
      number: mod.number,
      title: mod.title,
      emoji: mod.emoji,
      total: modPages.length,
      completed: modCompleted.length,
    };
  });

  return (
    <ProfileClient
      user={{
        email: user.email ?? "",
        fullName: profile?.full_name ?? "",
        isAdmin: profile?.is_admin ?? false,
        createdAt: profile?.created_at ?? user.created_at,
      }}
      progress={{
        completedCount,
        totalPages,
        progressPercent,
        lastCompletedPath: lastCompleted?.page_path ?? null,
        lastCompletedAt: lastCompleted?.completed_at ?? null,
        moduleProgress,
      }}
    />
  );
}
