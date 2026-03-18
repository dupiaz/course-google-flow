"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { modules, resources, getAllPages } from "@/lib/course-data";

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedModules, setExpandedModules] = useState<string[]>([]);
  const [completedPages, setCompletedPages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("course-progress");
      if (saved) {
        const data = JSON.parse(saved);
        setCompletedPages(data.completedPages || []);
      }
    } catch {
      // Ignored
    }
  }, []);

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
  const progressPercent = totalPages > 0 ? Math.round((completedCount / totalPages) * 100) : 0;

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
              <div className="sidebar-logo-subtitle">TikTok Affiliate Course</div>
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

          <div className="sidebar-section-title" style={{ marginTop: "0.5rem" }}>
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
      </aside>
    </>
  );
}
