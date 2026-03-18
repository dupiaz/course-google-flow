"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "course-progress";

interface ProgressData {
  completedPages: string[];
  lastVisited: string | null;
  updatedAt: string;
}

function loadProgress(): ProgressData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
    // Ignored
  }
  return { completedPages: [], lastVisited: null, updatedAt: new Date().toISOString() };
}

function saveProgress(data: ProgressData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    // Dispatch a custom event so Sidebar can react
    window.dispatchEvent(new Event("progress-updated"));
  } catch {
    // Ignored
  }
}

export default function ProgressTracker() {
  const pathname = usePathname();
  const [isCompleted, setIsCompleted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const data = loadProgress();
    // Update last visited
    data.lastVisited = pathname;
    data.updatedAt = new Date().toISOString();
    saveProgress(data);
    setIsCompleted(data.completedPages.includes(pathname));
  }, [pathname, mounted]);

  const toggleCompletion = useCallback(() => {
    const data = loadProgress();
    if (data.completedPages.includes(pathname)) {
      data.completedPages = data.completedPages.filter((p) => p !== pathname);
      setIsCompleted(false);
    } else {
      data.completedPages.push(pathname);
      setIsCompleted(true);
    }
    data.updatedAt = new Date().toISOString();
    saveProgress(data);
  }, [pathname]);

  // Only show on content pages, not landing
  if (!mounted || pathname === "/") return null;

  return (
    <button
      className={`completion-btn ${isCompleted ? "completed" : ""}`}
      onClick={toggleCompletion}
    >
      {isCompleted ? "✅ Đã hoàn thành" : "☐ Đánh dấu hoàn thành"}
    </button>
  );
}
