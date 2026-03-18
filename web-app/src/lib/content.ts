import fs from "fs";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

/** Base directory for course content */
const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Read and render a markdown file to HTML.
 * @param relativePath - path relative to content directory, e.g. "module-01-nen-tang/bai-hoc.md"
 */
export async function getMarkdownContent(relativePath: string): Promise<{
  html: string;
  raw: string;
}> {
  const fullPath = path.join(CONTENT_DIR, relativePath);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Content file not found: ${relativePath}`);
  }

  const raw = fs.readFileSync(fullPath, "utf-8");

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeHighlight, { detect: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(raw);

  return {
    html: String(result),
    raw,
  };
}

/**
 * Get content for a module lesson.
 * @param moduleSlug - e.g. "01-nen-tang"
 * @param lessonFilename - e.g. "bai-hoc.md"
 */
export async function getModuleContent(moduleSlug: string, lessonFilename: string) {
  const relativePath = `module-${moduleSlug}/${lessonFilename}`;
  return getMarkdownContent(relativePath);
}

/**
 * Get content for a resource page.
 * @param filename - e.g. "glossary.md"
 */
export async function getResourceContent(filename: string) {
  const relativePath = `resources/${filename}`;
  return getMarkdownContent(relativePath);
}

/** Check if a content file exists */
export function contentFileExists(relativePath: string): boolean {
  const fullPath = path.join(CONTENT_DIR, relativePath);
  return fs.existsSync(fullPath);
}
