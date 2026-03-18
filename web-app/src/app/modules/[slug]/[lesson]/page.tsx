import { notFound } from "next/navigation";
import { Metadata } from "next";
import { modules } from "@/lib/course-data";
import { getModuleContent } from "@/lib/content";
import MarkdownRenderer from "@/components/markdown-renderer";
import ProgressTracker from "@/components/progress-tracker";
import PageNavigation from "@/components/page-navigation";
import Link from "next/link";

/** ISR: revalidate every 5 minutes */
export const revalidate = 300;

interface PageProps {
  params: Promise<{
    slug: string;
    lesson: string;
  }>;
}

export async function generateStaticParams() {
  const params: { slug: string; lesson: string }[] = [];
  for (const mod of modules) {
    for (const lesson of mod.lessons) {
      params.push({ slug: mod.slug, lesson: lesson.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, lesson } = await params;
  const mod = modules.find((m) => m.slug === slug);
  if (!mod) return { title: "Not Found" };

  const lessonData = mod.lessons.find((l) => l.slug === lesson);
  if (!lessonData) return { title: "Not Found" };

  const title = `${lessonData.title} — Module ${mod.number}: ${mod.title}`;

  return {
    title: `${title} | Google Flow Course`,
    description: mod.description,
    openGraph: {
      title,
      description: mod.description,
      type: "article",
      locale: "vi_VN",
    },
  };
}

export default async function ModuleLessonPage({ params }: PageProps) {
  const { slug, lesson } = await params;

  const mod = modules.find((m) => m.slug === slug);
  if (!mod) notFound();

  const lessonData = mod.lessons.find((l) => l.slug === lesson);
  if (!lessonData) notFound();

  let content;
  try {
    content = await getModuleContent(slug, lessonData.slug);
  } catch {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span className="breadcrumb-separator">/</span>
        <span>Module {mod.number}</span>
        <span className="breadcrumb-separator">/</span>
        <span>{lessonData.title}</span>
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
