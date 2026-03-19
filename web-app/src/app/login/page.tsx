"use client";

import { useSearchParams } from "next/navigation";
import { login, signup } from "./actions";
import { Suspense, useState, useTransition } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const errorMsg = searchParams.get("error");
  const successMsg = searchParams.get("message");

  const [isPendingLogin, startLoginTransition] = useTransition();
  const [isPendingSignup, startSignupTransition] = useTransition();

  const isPending = isPendingLogin || isPendingSignup;

  const handleLogin = (formData: FormData) => {
    startLoginTransition(async () => {
      await login(formData);
    });
  };

  const handleSignup = (formData: FormData) => {
    startSignupTransition(async () => {
      await signup(formData);
    });
  };

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

        {/* Messages */}
        {errorMsg && (
          <div className="login-alert login-alert-error">
            ❌ {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="login-alert login-alert-success">
            ✅ {successMsg}
          </div>
        )}

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
              disabled={isPending}
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
              disabled={isPending}
            />
          </div>

          <div className="login-actions">
            <button
              formAction={handleLogin}
              className="btn btn-primary"
              disabled={isPending}
            >
              {isPendingLogin ? "⏳ Đang đăng nhập..." : "Đăng nhập"}
            </button>
            <button
              formAction={handleSignup}
              className="btn btn-secondary"
              disabled={isPending}
            >
              {isPendingSignup ? "⏳ Đang tạo..." : "Tạo tài khoản"}
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

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <div className="login-icon">🔐</div>
              <h1 className="login-title">Đăng nhập</h1>
              <p className="login-subtitle">Đang tải...</p>
            </div>
          </div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
