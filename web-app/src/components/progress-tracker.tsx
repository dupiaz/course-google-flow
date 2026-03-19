"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const STORAGE_KEY = "course-progress";
const SYNCED_KEY = "course-progress-synced";

interface ProgressData {
  completedPages: string[];
  lastVisited: string | null;
  updatedAt: string;
}

function loadLocalProgress(): ProgressData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
    // Ignored
  }
  return {
    completedPages: [],
    lastVisited: null,
    updatedAt: new Date().toISOString(),
  };
}

function saveLocalProgress(data: ProgressData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event("progress-updated"));
  } catch {
    // Ignored
  }
}

export default function ProgressTracker() {
  const pathname = usePathname();
  const [isCompleted, setIsCompleted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isPending, startTransition] = useTransition();

  // Get auth state
  useEffect(() => {
    setMounted(true);
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
  }, []);

  // Sync localStorage → Supabase on first login
  useEffect(() => {
    if (!mounted || !user) return;

    const alreadySynced = localStorage.getItem(SYNCED_KEY);
    if (alreadySynced) return;

    const localData = loadLocalProgress();
    if (localData.completedPages.length > 0) {
      const supabase = createClient();
      supabase
        .from("user_progress")
        .select("page_path")
        .eq("user_id", user.id)
        .then(({ data: existing }) => {
          const existingPaths = new Set(
            existing?.map((r) => r.page_path) ?? []
          );
          const newRows = localData.completedPages
            .filter((p) => !existingPaths.has(p))
            .map((page_path) => ({
              user_id: user.id,
              page_path,
            }));

          if (newRows.length > 0) {
            supabase
              .from("user_progress")
              .insert(newRows)
              .then(() => {
                localStorage.setItem(SYNCED_KEY, "true");
                window.dispatchEvent(new Event("progress-updated"));
              });
          } else {
            localStorage.setItem(SYNCED_KEY, "true");
          }
        });
    } else {
      localStorage.setItem(SYNCED_KEY, "true");
    }
  }, [mounted, user]);

  // Check if current page is completed
  useEffect(() => {
    if (!mounted) return;

    if (user) {
      const supabase = createClient();
      supabase
        .from("user_progress")
        .select("id")
        .eq("user_id", user.id)
        .eq("page_path", pathname)
        .single()
        .then(({ data }) => {
          setIsCompleted(!!data);
        });
    } else {
      const data = loadLocalProgress();
      data.lastVisited = pathname;
      data.updatedAt = new Date().toISOString();
      saveLocalProgress(data);
      setIsCompleted(data.completedPages.includes(pathname));
    }
  }, [pathname, mounted, user]);

  const handleToggle = useCallback(() => {
    if (user) {
      startTransition(async () => {
        const supabase = createClient();

        if (isCompleted) {
          await supabase
            .from("user_progress")
            .delete()
            .eq("user_id", user.id)
            .eq("page_path", pathname);
          setIsCompleted(false);
        } else {
          await supabase
            .from("user_progress")
            .insert({ user_id: user.id, page_path: pathname });
          setIsCompleted(true);
        }
        window.dispatchEvent(new Event("progress-updated"));
      });
    } else {
      const data = loadLocalProgress();
      if (data.completedPages.includes(pathname)) {
        data.completedPages = data.completedPages.filter((p) => p !== pathname);
        setIsCompleted(false);
      } else {
        data.completedPages.push(pathname);
        setIsCompleted(true);
      }
      data.updatedAt = new Date().toISOString();
      saveLocalProgress(data);
    }
  }, [pathname, user, isCompleted]);

  // Only show on content pages, not landing
  if (!mounted || pathname === "/") return null;

  return (
    <button
      className={`completion-btn ${isCompleted ? "completed" : ""}`}
      onClick={handleToggle}
      disabled={isPending}
    >
      {isPending
        ? "⏳ Đang lưu..."
        : isCompleted
          ? "✅ Đã hoàn thành"
          : "☐ Đánh dấu hoàn thành"}
    </button>
  );
}
