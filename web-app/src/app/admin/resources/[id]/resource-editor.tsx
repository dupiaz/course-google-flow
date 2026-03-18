"use client";

import { useState } from "react";
import { updateResource } from "../../actions";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

interface ResourceEditorProps {
  resource: {
    id: string;
    title: string;
    slug: string;
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

export default function ResourceEditor({ resource }: ResourceEditorProps) {
  const [content, setContent] = useState(resource.markdown_content || "");
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
      await updateResource(resource.id, content, html);
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
        Resource: <code>{resource.slug}</code>
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
          href={`/resources/${resource.slug}`}
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
