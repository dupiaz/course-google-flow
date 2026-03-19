import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import ThemeToggle from "@/components/theme-toggle";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://web-app-blue-zeta.vercel.app"
  ),
  title: "Google Flow — Khóa học TikTok Affiliate",
  description:
    "Khóa học hướng dẫn từ con số 0 đến khả năng tự sản xuất video affiliate chuyên nghiệp bằng Google Flow — nền tảng AI video của Google — và kiếm tiền trên TikTok Shop.",
  keywords: [
    "Google Flow",
    "TikTok Affiliate",
    "AI video",
    "kiếm tiền TikTok",
    "video affiliate",
    "sản phẩm gia dụng",
  ],
  openGraph: {
    title: "Google Flow — Khóa học TikTok Affiliate",
    description:
      "Tự sản xuất video affiliate chuyên nghiệp bằng AI và kiếm tiền trên TikTok Shop.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="app-layout">
          <Sidebar />
          <main className="main-content">
            <div className="content-wrapper">{children}</div>
          </main>
        </div>
        <ThemeToggle />
      </body>
    </html>
  );
}
