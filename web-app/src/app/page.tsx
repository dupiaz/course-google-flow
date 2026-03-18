import Link from "next/link";
import { modules, resources } from "@/lib/course-data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="landing-hero">
        <div className="landing-badge">🎓 Khóa học miễn phí</div>
        <h1 className="landing-title">
          Ứng dụng Google Flow
          <br />
          Tạo Video Affiliate trên TikTok
        </h1>
        <p className="landing-subtitle">
          Từ <strong>con số 0</strong> đến khả năng tự sản xuất video affiliate
          chuyên nghiệp bằng AI — và kiếm tiền trên TikTok Shop với sản phẩm
          gia dụng.
        </p>

        <div className="landing-stats">
          <div className="stat-item">
            <div className="stat-number">6</div>
            <div className="stat-label">Modules</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">45+</div>
            <div className="stat-label">Thuật ngữ</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24</div>
            <div className="stat-label">Prompt Templates</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">80%</div>
            <div className="stat-label">Thực hành</div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section>
        <h2 className="section-title">📚 Nội dung khóa học</h2>
        <p className="section-desc">
          6 module từ nền tảng đến nâng cao, thiết kế theo Bloom Taxonomy
        </p>

        <div className="module-grid">
          {modules.map((mod) => (
            <Link
              key={mod.slug}
              href={`/modules/${mod.slug}/bai-hoc`}
              className="module-card"
            >
              <div className="module-card-number">{mod.number}</div>
              <h3 className="module-card-title">
                {mod.emoji} {mod.title}
              </h3>
              <p className="module-card-desc">{mod.description}</p>
              <span className="module-card-bloom">
                🧠 {mod.bloomLevel}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section style={{ marginTop: "2.5rem" }}>
        <h2 className="section-title">📂 Tài liệu bổ trợ</h2>
        <p className="section-desc">
          Bảng thuật ngữ, thư viện prompt, checklist và tài nguyên hữu ích
        </p>

        <div className="resource-grid">
          {resources.map((res) => (
            <Link
              key={res.slug}
              href={`/resources/${res.slug}`}
              className="resource-card"
            >
              <div className="resource-card-icon">{res.emoji}</div>
              <div className="resource-card-title">{res.title}</div>
              <div className="resource-card-desc">{res.description}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
        <h2 className="section-title">⚡ Bắt đầu nhanh</h2>
        <div className="card" style={{ marginTop: "1rem" }}>
          <ol style={{ paddingLeft: "1.25rem", lineHeight: "2" }}>
            <li>
              Mở{" "}
              <Link href="/modules/01-nen-tang/bai-hoc" style={{ color: "var(--text-link)", textDecoration: "none", fontWeight: 500 }}>
                Module 1 — Nền tảng
              </Link>
            </li>
            <li>Làm theo hướng dẫn từng bước</li>
            <li>Hoàn thành bài tập mỗi module trước khi sang module tiếp</li>
            <li>Đánh dấu ✅ khi hoàn thành để theo dõi tiến độ</li>
          </ol>
        </div>
      </section>

      {/* Requirements */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 className="section-title">🛠 Bạn cần chuẩn bị</h2>
        <div className="card" style={{ marginTop: "1rem" }}>
          <ul style={{ paddingLeft: "1.25rem", lineHeight: "2", listStyleType: "none" }}>
            <li>💻 Laptop/PC có kết nối internet</li>
            <li>🔑 Tài khoản Google (để đăng ký Google Flow)</li>
            <li>📱 Tài khoản TikTok (để thực hành đăng video)</li>
            <li>💰 Google AI Pro ($19.99/tháng) — khuyến nghị để có đủ credits</li>
          </ul>
        </div>
      </section>

      {/* Footer Notice */}
      <footer style={{
        borderTop: "1px solid var(--border-color)",
        paddingTop: "1.5rem",
        marginBottom: "2rem",
        fontSize: "0.8rem",
        color: "var(--text-tertiary)",
        lineHeight: "1.8"
      }}>
        <p>
          ⚠️ <strong>Lưu ý:</strong> TikTok 2026 bắt buộc gắn nhãn
          &ldquo;AI-generated&rdquo; cho video AI. Video Google Flow ở gói
          Free/Plus/Pro có watermark.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          Khóa học sử dụng phương pháp <strong>Project-Based Learning</strong>:
          20% lý thuyết, 80% thực hành.
        </p>
      </footer>
    </>
  );
}
