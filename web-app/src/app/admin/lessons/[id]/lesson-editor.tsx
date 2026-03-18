"use client";

import { useState } from "react";
import { updateLesson } from "../../actions";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

interface LessonEditorProps {
  lesson: {
    id: string;
    title: string;
    slug: string;
    module_slug: string;
    markdown_content: string;
  };
}

async function renderMarkdown(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

export default function LessonEditor({ lesson }: LessonEditorProps) {
  const [content, setContent] = useState(lesson.markdown_content || "");
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSave = async () => {
    setSaving(true);
    setStatus(null);
    try {
      const html = await renderMarkdown(content);
      await updateLesson(lesson.id, content, html);
      setStatus({ type: "success", message: "Đã lưu thành công!" });
    } catch (err) {
      setStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Lưu thất bại",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-editor">
      <p className="admin-editor-label">
        Module: <code>{lesson.module_slug}</code> / Lesson:{" "}
        <code>{lesson.slug}</code>
      </p>
      <textarea
        className="admin-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Nội dung Markdown..."
      />
      <div className="admin-actions">
        <button
          className="btn btn-primary"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? "⏳ Đang lưu..." : "💾 Lưu thay đổi"}
        </button>
        <a
          href={`/modules/${lesson.module_slug}/${lesson.slug}`}
          target="_blank"
          className="btn btn-secondary"
        >
          👁️ Xem trước
        </a>
      </div>
      {status && (
        <div className={`admin-status ${status.type}`}>{status.message}</div>
      )}
    </div>
  );
}
