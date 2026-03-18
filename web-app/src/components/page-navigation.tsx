"use client";

import Link from "next/link";
import { getAllPages } from "@/lib/course-data";
import { usePathname } from "next/navigation";

export default function PageNavigation() {
  const pathname = usePathname();
  const pages = getAllPages();
  const currentIdx = pages.findIndex((p) => p.href === pathname);

  if (currentIdx === -1) return null;

  const prev = currentIdx > 0 ? pages[currentIdx - 1] : null;
  const next = currentIdx < pages.length - 1 ? pages[currentIdx + 1] : null;

  if (!prev && !next) return null;

  return (
    <nav className="page-nav">
      {prev ? (
        <Link href={prev.href} className="page-nav-link prev">
          <span className="page-nav-label">← Trước</span>
          <span className="page-nav-title">
            {prev.parentTitle ? `${prev.parentTitle}: ` : ""}
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={next.href} className="page-nav-link next">
          <span className="page-nav-label">Tiếp →</span>
          <span className="page-nav-title">
            {next.parentTitle ? `${next.parentTitle}: ` : ""}
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
