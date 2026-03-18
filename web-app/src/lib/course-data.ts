/** Module and resource metadata for sidebar, landing page, SEO */

export interface ModuleData {
  slug: string;
  number: string;
  title: string;
  description: string;
  bloomLevel: string;
  emoji: string;
  lessons: LessonData[];
}

export interface LessonData {
  slug: string;
  title: string;
  filename: string;
}

export interface ResourceData {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  filename: string;
}

export const modules: ModuleData[] = [
  {
    slug: "01-nen-tang",
    number: "01",
    title: "Nền tảng",
    description: "TikTok Affiliate là gì, Google Flow là gì, cách đăng ký",
    bloomLevel: "Remember + Understand",
    emoji: "🏗️",
    lessons: [
      { slug: "bai-hoc", title: "Bài học", filename: "bai-hoc.md" },
      { slug: "bai-tap", title: "Bài tập", filename: "bai-tap.md" },
    ],
  },
  {
    slug: "02-prompt-mastery",
    number: "02",
    title: "Prompt Mastery",
    description: "Viết prompt để AI tạo video sản phẩm đẹp",
    bloomLevel: "Understand + Apply",
    emoji: "✍️",
    lessons: [
      { slug: "bai-hoc", title: "Bài học", filename: "bai-hoc.md" },
      { slug: "bai-tap", title: "Bài tập", filename: "bai-tap.md" },
      { slug: "prompt-templates", title: "Prompt Templates", filename: "prompt-templates.md" },
    ],
  },
  {
    slug: "03-quy-trinh-san-xuat",
    number: "03",
    title: "Quy trình sản xuất",
    description: "Tạo video affiliate hoàn chỉnh từ A-Z",
    bloomLevel: "Apply + Analyze",
    emoji: "🎬",
    lessons: [
      { slug: "bai-hoc", title: "Bài học", filename: "bai-hoc.md" },
      { slug: "bai-tap", title: "Bài tập", filename: "bai-tap.md" },
    ],
  },
  {
    slug: "04-toi-uu-thuat-toan",
    number: "04",
    title: "Tối ưu thuật toán",
    description: "Video của bạn được nhiều người xem hơn",
    bloomLevel: "Analyze + Evaluate",
    emoji: "📊",
    lessons: [
      { slug: "bai-hoc", title: "Bài học", filename: "bai-hoc.md" },
      { slug: "bai-tap", title: "Bài tập", filename: "bai-tap.md" },
    ],
  },
  {
    slug: "05-xay-dung-kenh",
    number: "05",
    title: "Xây dựng kênh",
    description: "Biến TikTok thành nguồn thu nhập ổn định",
    bloomLevel: "Evaluate + Create",
    emoji: "📱",
    lessons: [
      { slug: "bai-hoc", title: "Bài học", filename: "bai-hoc.md" },
      { slug: "bai-tap", title: "Bài tập", filename: "bai-tap.md" },
    ],
  },
  {
    slug: "06-scale-automation",
    number: "06",
    title: "Scale & Tự động hóa",
    description: "Sản xuất 10+ video/ngày, mở rộng quy mô",
    bloomLevel: "Create",
    emoji: "🚀",
    lessons: [
      { slug: "bai-hoc", title: "Bài học", filename: "bai-hoc.md" },
      { slug: "bai-tap", title: "Bài tập", filename: "bai-tap.md" },
    ],
  },
];

export const resources: ResourceData[] = [
  {
    slug: "glossary",
    title: "Bảng thuật ngữ",
    description: "Giải thích 45+ thuật ngữ A–Z",
    emoji: "📖",
    filename: "glossary.md",
  },
  {
    slug: "prompt-library",
    title: "Thư viện Prompt",
    description: "Tổng hợp prompt tái sử dụng",
    emoji: "✍️",
    filename: "prompt-library.md",
  },
  {
    slug: "checklist",
    title: "Checklist QA",
    description: "Checklist per-module + tuân thủ",
    emoji: "✅",
    filename: "checklist.md",
  },
  {
    slug: "links",
    title: "Tài nguyên hữu ích",
    description: "Links quan trọng & công cụ",
    emoji: "🔗",
    filename: "links.md",
  },
];

/**
 * Maps module folder names on disk to slugs.
 * The actual folders use module-XX-name format at project root.
 */
export function getModuleDirName(slug: string): string {
  return `module-${slug}`;
}

/** Get all navigable pages in order (for prev/next navigation) */
export interface NavPage {
  href: string;
  title: string;
  parentTitle?: string;
}

export function getAllPages(): NavPage[] {
  const pages: NavPage[] = [];

  for (const mod of modules) {
    for (const lesson of mod.lessons) {
      pages.push({
        href: `/modules/${mod.slug}/${lesson.slug}`,
        title: lesson.title,
        parentTitle: `Module ${mod.number} — ${mod.title}`,
      });
    }
  }

  for (const res of resources) {
    pages.push({
      href: `/resources/${res.slug}`,
      title: res.title,
    });
  }

  return pages;
}
