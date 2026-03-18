import { notFound } from "next/navigation";
import { Metadata } from "next";
import { resources } from "@/lib/course-data";
import { getResourceContent } from "@/lib/content";
import MarkdownRenderer from "@/components/markdown-renderer";
import ProgressTracker from "@/components/progress-tracker";
import PageNavigation from "@/components/page-navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const res = resources.find((r) => r.slug === slug);
  if (!res) return { title: "Not Found" };

  return {
    title: `${res.title} | Google Flow Course`,
    description: res.description,
    openGraph: {
      title: res.title,
      description: res.description,
      type: "article",
      locale: "vi_VN",
    },
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;

  const res = resources.find((r) => r.slug === slug);
  if (!res) notFound();

  let content;
  try {
    content = await getResourceContent(res.filename);
  } catch {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span className="breadcrumb-separator">/</span>
        <span>Tài liệu</span>
        <span className="breadcrumb-separator">/</span>
        <span>{res.title}</span>
      </nav>

      {/* Content */}
      <MarkdownRenderer html={content.html} />

      {/* Completion */}
      <ProgressTracker />

      {/* Prev/Next */}
      <PageNavigation />
    </>
  );
}
