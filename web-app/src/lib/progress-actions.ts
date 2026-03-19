"use server";

import { createClient } from "@/lib/supabase/server";

/** Lấy danh sách page paths đã hoàn thành của user */
export async function getProgress(userId: string): Promise<string[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("user_progress")
    .select("page_path")
    .eq("user_id", userId)
    .eq("completed", true);

  if (error) {
    console.error("getProgress error:", error.message);
    return [];
  }

  return data.map((row) => row.page_path);
}

/** Toggle hoàn thành/chưa hoàn thành một trang */
export async function toggleProgress(
  userId: string,
  pagePath: string
): Promise<{ completed: boolean }> {
  const supabase = await createClient();

  // Kiểm tra đã có chưa
  const { data: existing } = await supabase
    .from("user_progress")
    .select("id")
    .eq("user_id", userId)
    .eq("page_path", pagePath)
    .single();

  if (existing) {
    // Đã có → xóa (bỏ đánh dấu)
    await supabase
      .from("user_progress")
      .delete()
      .eq("user_id", userId)
      .eq("page_path", pagePath);
    return { completed: false };
  } else {
    // Chưa có → thêm
    await supabase.from("user_progress").insert({
      user_id: userId,
      page_path: pagePath,
    });
    return { completed: true };
  }
}

/** Merge tiến độ từ localStorage vào Supabase (chạy 1 lần khi đăng nhập) */
export async function syncLocalToSupabase(
  userId: string,
  localPages: string[]
): Promise<void> {
  if (!localPages.length) return;

  const supabase = await createClient();

  // Lấy các trang đã có trên server
  const { data: existing } = await supabase
    .from("user_progress")
    .select("page_path")
    .eq("user_id", userId);

  const existingPaths = new Set(existing?.map((r) => r.page_path) ?? []);

  // Chỉ insert các trang chưa có
  const newRows = localPages
    .filter((p) => !existingPaths.has(p))
    .map((page_path) => ({
      user_id: userId,
      page_path,
    }));

  if (newRows.length > 0) {
    const { error } = await supabase.from("user_progress").insert(newRows);
    if (error) {
      console.error("syncLocalToSupabase error:", error.message);
    }
  }
}
