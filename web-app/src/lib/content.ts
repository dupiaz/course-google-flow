import { isSupabaseConfigured, supabase } from "./supabase";

// --- Filesystem fallback (for Docker dev without Supabase) ---
import fs from "fs";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

/** Base directory for course content (project root, one level above web-app/) */
const CONTENT_DIR = process.env.CONTENT_DIR || path.resolve(process.cwd(), "..");

// =============================================
// Filesystem fallback functions
// =============================================

async function renderMarkdownToHtml(raw: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeHighlight, { detect: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(raw);
  return String(result);
}

async function getMarkdownContentFromFile(relativePath: string): Promise<{
  html: string;
  raw: string;
}> {
  const fullPath = path.join(CONTENT_DIR, relativePath);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Content file not found: ${relativePath}`);
  }

  const raw = fs.readFileSync(fullPath, "utf-8");
  const html = await renderMarkdownToHtml(raw);

  return { html, raw };
}

// =============================================
// Supabase query functions
// =============================================

async function getModuleContentFromSupabase(
  moduleSlug: string,
  lessonSlug: string
): Promise<{ html: string; raw: string }> {
  const { data, error } = await supabase
    .from("lessons")
    .select("content_html, content_md, modules!inner(slug)")
    .eq("modules.slug", moduleSlug)
    .eq("slug", lessonSlug)
    .single();

  if (error || !data) {
    throw new Error(
      `Lesson not found: ${moduleSlug}/${lessonSlug} — ${error?.message}`
    );
  }

  return {
    html: data.content_html,
    raw: data.content_md,
  };
}

async function getResourceContentFromSupabase(
  slug: string
): Promise<{ html: string; raw: string }> {
  const { data, error } = await supabase
    .from("resources")
    .select("content_html, content_md")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    throw new Error(`Resource not found: ${slug} — ${error?.message}`);
  }

  return {
    html: data.content_html,
    raw: data.content_md,
  };
}

// =============================================
// Public API (dual-mode: Supabase → filesystem fallback)
// =============================================

/**
 * Get content for a module lesson.
 * @param moduleSlug - e.g. "01-nen-tang"
 * @param lessonSlug - e.g. "bai-hoc"
 */
export async function getModuleContent(
  moduleSlug: string,
  lessonSlug: string
): Promise<{ html: string; raw: string }> {
  if (isSupabaseConfigured()) {
    return getModuleContentFromSupabase(moduleSlug, lessonSlug);
  }
  // Filesystem fallback: need to map lessonSlug → filename
  // Convention: slug IS the filename without .md extension
  const filename = `${lessonSlug}.md`;
  const relativePath = `module-${moduleSlug}/${filename}`;
  return getMarkdownContentFromFile(relativePath);
}

/**
 * Get content for a resource page.
 * @param slug - e.g. "glossary"
 */
export async function getResourceContent(
  slug: string
): Promise<{ html: string; raw: string }> {
  if (isSupabaseConfigured()) {
    return getResourceContentFromSupabase(slug);
  }
  // Filesystem fallback: slug → filename
  const filename = `${slug}.md`;
  const relativePath = `resources/${filename}`;
  return getMarkdownContentFromFile(relativePath);
}

/** Check if a content file exists (filesystem fallback only) */
export function contentFileExists(relativePath: string): boolean {
  const fullPath = path.join(CONTENT_DIR, relativePath);
  return fs.existsSync(fullPath);
}
