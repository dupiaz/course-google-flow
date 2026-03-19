"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { modules, resources, getAllPages } from "@/lib/course-data";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedModules, setExpandedModules] = useState<string[]>([]);
  const [completedPages, setCompletedPages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load progress: Supabase for logged-in, localStorage for anonymous
  const loadProgress = useCallback(
    async (currentUser: User | null) => {
      if (currentUser) {
        const supabase = createClient();
        const { data } = await supabase
          .from("user_progress")
          .select("page_path")
          .eq("user_id", currentUser.id);
        setCompletedPages(data?.map((r) => r.page_path) ?? []);
      } else {
        try {
          const saved = localStorage.getItem("course-progress");
          if (saved) {
            const data = JSON.parse(saved);
            setCompletedPages(data.completedPages || []);
          }
        } catch {
          // Ignored
        }
      }
    },
    []
  );

  // Check auth state + load progress
  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      loadProgress(user);
      if (user) {
        supabase
          .from("profiles")
          .select("is_admin")
          .eq("id", user.id)
          .single()
          .then(({ data }) => {
            setIsAdmin(data?.is_admin ?? false);
          });
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const newUser = session?.user ?? null;
      setUser(newUser);
      loadProgress(newUser);
      if (!newUser) {
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [loadProgress]);

  // Listen for progress-updated events
  useEffect(() => {
    const handler = () => loadProgress(user);
    window.addEventListener("progress-updated", handler);
    // Also listen for localStorage changes (anonymous)
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("progress-updated", handler);
      window.removeEventListener("storage", handler);
    };
  }, [user, loadProgress]);

  // Auto-expand the active module
  useEffect(() => {
    for (const mod of modules) {
      if (pathname.includes(mod.slug)) {
        setExpandedModules((prev) =>
          prev.includes(mod.slug) ? prev : [...prev, mod.slug]
        );
        break;
      }
    }
  }, [pathname]);

  // Close on route change (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleModule = useCallback((slug: string) => {
    setExpandedModules((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }, []);

  const allPages = getAllPages();
  const totalPages = allPages.length;
  const completedCount = completedPages.length;
  const progressPercent =
    totalPages > 0 ? Math.round((completedCount / totalPages) * 100) : 0;

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="mobile-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "visible" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Logo */}
        <div className="sidebar-header">
          <Link href="/" className="sidebar-logo">
            <div className="sidebar-logo-icon">🎓</div>
            <div>
              <div className="sidebar-logo-text">Google Flow</div>
              <div className="sidebar-logo-subtitle">
                TikTok Affiliate Course
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <div className="sidebar-section-title">Modules</div>

          {modules.map((mod) => {
            const isExpanded = expandedModules.includes(mod.slug);
            const isActive = pathname.includes(mod.slug);

            return (
              <div
                key={mod.slug}
                className={`sidebar-module-group ${isActive ? "active" : ""}`}
              >
                <button
                  className="sidebar-module-header"
                  onClick={() => toggleModule(mod.slug)}
                >
                  <span className="sidebar-module-number">{mod.number}</span>
                  <span>{mod.title}</span>
                </button>
                <div
                  className={`sidebar-module-children ${isExpanded ? "expanded" : ""}`}
                >
                  {mod.lessons.map((lesson) => {
                    const href = `/modules/${mod.slug}/${lesson.slug}`;
                    const isLessonActive = pathname === href;
                    const isCompleted = completedPages.includes(href);

                    return (
                      <Link
                        key={lesson.slug}
                        href={href}
                        className={`sidebar-child-item ${isLessonActive ? "active" : ""}`}
                      >
                        <span
                          className={`progress-dot ${isCompleted ? "completed" : "unread"}`}
                        />
                        <span>{lesson.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div
            className="sidebar-section-title"
            style={{ marginTop: "0.5rem" }}
          >
            Tài liệu bổ trợ
          </div>

          {resources.map((res) => {
            const href = `/resources/${res.slug}`;
            const isActive = pathname === href;
            const isCompleted = completedPages.includes(href);

            return (
              <Link
                key={res.slug}
                href={href}
                className={`sidebar-item ${isActive ? "active" : ""}`}
              >
                <span
                  className={`progress-dot ${isCompleted ? "completed" : "unread"}`}
                />
                <span>
                  {res.emoji} {res.title}
                </span>
              </Link>
            );
          })}

          {/* Admin link */}
          {isAdmin && (
            <>
              <div
                className="sidebar-section-title"
                style={{ marginTop: "0.5rem" }}
              >
                Quản trị
              </div>
              <Link
                href="/admin"
                className={`sidebar-item ${pathname.startsWith("/admin") ? "active" : ""}`}
              >
                <span>⚙️ Admin Panel</span>
              </Link>
            </>
          )}
        </nav>

        {/* Progress */}
        <div className="sidebar-progress">
          <div className="sidebar-progress-label">
            <span>Tiến độ</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Auth */}
        <div className="sidebar-auth">
          {user ? (
            <div className="sidebar-user">
              <div className="sidebar-user-info">
                <div className="sidebar-user-avatar">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
                <span className="sidebar-user-email" title={user.email ?? ""}>
                  {user.email}
                </span>
              </div>
              <div className="sidebar-user-actions">
                <Link href="/profile" className="sidebar-profile-link">
                  👤 Hồ sơ
                </Link>
                <form action="/auth/signout" method="post">
                  <button type="submit" className="sidebar-auth-btn logout">
                    Đăng xuất
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <Link href="/login" className="sidebar-auth-btn login">
              🔐 Đăng nhập
            </Link>
          )}
        </div>
      </aside>
    </>
  );
}
