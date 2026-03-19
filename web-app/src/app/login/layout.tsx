import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập | Google Flow Course",
  description: "Đăng nhập hoặc tạo tài khoản để quản lý khóa học",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
