"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { updateProfile } from "./actions";

interface ProfileProps {
  user: {
    email: string;
    fullName: string;
    isAdmin: boolean;
    createdAt: string;
  };
  progress: {
    completedCount: number;
    totalPages: number;
    progressPercent: number;
    lastCompletedPath: string | null;
    lastCompletedAt: string | null;
    moduleProgress: {
      number: string;
      title: string;
      emoji: string;
      total: number;
      completed: number;
    }[];
  };
}

export default function ProfileClient({ user, progress }: ProfileProps) {
  const [fullName, setFullName] = useState(user.fullName);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    setMessage(null);
    startTransition(async () => {
      const result = await updateProfile(formData);
      if (result.error) {
        setMessage({ type: "error", text: result.error });
      } else {
        setMessage({ type: "success", text: "Đã cập nhật tên thành công!" });
      }
    });
  };

  const joinDate = new Date(user.createdAt).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="profile-page">
      <h1 className="profile-title">👤 Hồ sơ của tôi</h1>

      {/* User Info Card */}
      <div className="profile-card">
        <div className="profile-avatar">
          {user.email.charAt(0).toUpperCase()}
        </div>
        <div className="profile-info">
          <div className="profile-email">{user.email}</div>
          <div className="profile-meta">
            📅 Tham gia: {joinDate}
            {user.isAdmin && <span className="profile-badge">⚙️ Admin</span>}
          </div>
        </div>
      </div>

      {/* Edit Name */}
      <div className="profile-section">
        <h2 className="profile-section-title">✏️ Đổi tên hiển thị</h2>
        <form action={handleSubmit} className="profile-form">
          <div className="form-group">
            <input
              name="full_name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Nhập tên hiển thị"
              className="form-input"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isPending}
          >
            {isPending ? "⏳ Đang lưu..." : "Lưu thay đổi"}
          </button>
        </form>
        {message && (
          <div
            className={`profile-message ${message.type === "error" ? "error" : "success"}`}
          >
            {message.text}
          </div>
        )}
      </div>

      {/* Progress Overview */}
      <div className="profile-section">
        <h2 className="profile-section-title">📊 Tiến độ học tập</h2>
        <div className="profile-stats">
          <div className="profile-stat">
            <div className="profile-stat-number">
              {progress.completedCount}
            </div>
            <div className="profile-stat-label">Bài đã hoàn thành</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-number">{progress.totalPages}</div>
            <div className="profile-stat-label">Tổng số bài</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-number">
              {progress.progressPercent}%
            </div>
            <div className="profile-stat-label">Hoàn thành</div>
          </div>
        </div>

        {/* Overall progress bar */}
        <div className="profile-progress-bar">
          <div
            className="profile-progress-fill"
            style={{ width: `${progress.progressPercent}%` }}
          />
        </div>

        {progress.lastCompletedPath && (
          <p className="profile-last-activity">
            🕐 Hoàn thành gần nhất:{" "}
            <Link href={progress.lastCompletedPath}>
              {progress.lastCompletedPath}
            </Link>
            {progress.lastCompletedAt && (
              <span>
                {" "}
                —{" "}
                {new Date(progress.lastCompletedAt).toLocaleDateString(
                  "vi-VN"
                )}
              </span>
            )}
          </p>
        )}
      </div>

      {/* Module Breakdown */}
      <div className="profile-section">
        <h2 className="profile-section-title">📚 Tiến độ theo Module</h2>
        <div className="profile-modules">
          {progress.moduleProgress.map((mod) => {
            const percent =
              mod.total > 0
                ? Math.round((mod.completed / mod.total) * 100)
                : 0;
            return (
              <div key={mod.number} className="profile-module-item">
                <div className="profile-module-header">
                  <span>
                    {mod.emoji} Module {mod.number}: {mod.title}
                  </span>
                  <span className="profile-module-count">
                    {mod.completed}/{mod.total}
                  </span>
                </div>
                <div className="profile-module-bar">
                  <div
                    className="profile-module-fill"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
