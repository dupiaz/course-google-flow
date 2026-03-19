"use client";

import Link from "next/link";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-page">
      <div className="error-page-icon">⚙️</div>
      <h1 className="error-page-code">Lỗi Admin</h1>
      <h2 className="error-page-title">Admin Panel gặp lỗi</h2>
      <p className="error-page-desc">
        {error.message || "Có lỗi khi tải Admin Panel. Vui lòng thử lại."}
      </p>
      <div className="error-page-actions">
        <button onClick={reset} className="btn btn-primary">
          🔄 Thử lại
        </button>
        <Link href="/admin" className="btn btn-secondary">
          ⚙️ Admin Dashboard
        </Link>
        <Link href="/" className="btn btn-secondary">
          🏠 Về trang chủ
        </Link>
      </div>
    </div>
  );
}
