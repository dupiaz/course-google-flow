import { Metadata } from "next";
import { login, signup } from "./actions";

export const metadata: Metadata = {
  title: "Đăng nhập | Google Flow Course",
  description: "Đăng nhập hoặc tạo tài khoản để quản lý khóa học",
};

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">🔐</div>
          <h1 className="login-title">Đăng nhập</h1>
          <p className="login-subtitle">
            Truy cập tài khoản để quản lý nội dung khóa học
          </p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Mật khẩu
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              placeholder="Tối thiểu 6 ký tự"
              className="form-input"
            />
          </div>

          <div className="login-actions">
            <button formAction={login} className="btn btn-primary">
              Đăng nhập
            </button>
            <button formAction={signup} className="btn btn-secondary">
              Tạo tài khoản
            </button>
          </div>
        </form>

        <p className="login-note">
          💡 Tài khoản chỉ dùng cho quản trị viên. Học viên xem khóa học không
          cần đăng nhập.
        </p>
      </div>
    </div>
  );
}
