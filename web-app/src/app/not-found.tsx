import Link from "next/link";

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="error-page-icon">🔍</div>
      <h1 className="error-page-code">404</h1>
      <h2 className="error-page-title">Không tìm thấy trang</h2>
      <p className="error-page-desc">
        Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.
      </p>
      <div className="error-page-actions">
        <Link href="/" className="btn btn-primary">
          🏠 Về trang chủ
        </Link>
        <Link href="/modules/01-nen-tang/bai-hoc" className="btn btn-secondary">
          📚 Bắt đầu học
        </Link>
      </div>
    </div>
  );
}
