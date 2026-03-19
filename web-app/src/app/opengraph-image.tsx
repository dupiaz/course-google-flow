import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Google Flow — Khóa học TikTok Affiliate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b69 100%)",
          fontFamily: "sans-serif",
          color: "white",
          padding: "60px",
        }}
      >
        {/* Icon */}
        <div style={{ fontSize: "80px", marginBottom: "20px" }}>🎓</div>

        {/* Title */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "16px",
            background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Google Flow
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 500,
            textAlign: "center",
            color: "#c4b5fd",
            marginBottom: "40px",
          }}
        >
          Khóa học TikTok Affiliate bằng AI Video
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            fontSize: "20px",
            color: "#94a3b8",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 700, color: "#a78bfa" }}>6</div>
            <div>Modules</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 700, color: "#60a5fa" }}>24</div>
            <div>Templates</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 700, color: "#34d399" }}>80%</div>
            <div>Thực hành</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 700, color: "#fbbf24" }}>Free</div>
            <div>Miễn phí</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
