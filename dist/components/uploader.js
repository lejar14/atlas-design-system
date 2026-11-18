"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useId, useRef, useState } from "react";
import { Upload, X, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "../lib/utils.js";
import { Progress } from "./progress.js";
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  const mb = bytes / (1024 * 1024);
  return `${mb % 1 === 0 ? mb.toFixed(0) : mb.toFixed(1)} MB`;
}
function Uploader({
  maxSizeBytes = 1024 * 1024,
  accept,
  multiple = true,
  disabled = false,
  forceActive = false,
  className
}) {
  const [items, setItems] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const inputId = useId();
  const dragDepth = useRef(0);
  const timersRef = useRef(/* @__PURE__ */ new Map());
  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((timer) => clearInterval(timer));
      timers.clear();
    };
  }, []);
  const simulateUpload = (id) => {
    const timer = setInterval(() => {
      setItems(
        (prev) => prev.map((it) => {
          if (it.id !== id || it.status !== "uploading") return it;
          const next = it.progress + 8 + Math.random() * 14;
          if (next >= 100) {
            clearInterval(timer);
            timersRef.current.delete(id);
            return { ...it, progress: 100, status: "done" };
          }
          return { ...it, progress: next };
        })
      );
    }, 180);
    timersRef.current.set(id, timer);
  };
  const addFiles = (fileList) => {
    const incoming = Array.from(fileList);
    const newItems = incoming.map((file) => {
      const tooBig = file.size > maxSizeBytes;
      return {
        id: `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        file,
        progress: 0,
        status: tooBig ? "error" : "uploading",
        error: tooBig ? `File exceeds ${formatBytes(maxSizeBytes)} limit` : void 0
      };
    });
    setItems((prev) => [...prev, ...newItems]);
    newItems.filter((it) => it.status === "uploading").forEach((it) => simulateUpload(it.id));
  };
  const removeItem = (id) => {
    const timer = timersRef.current.get(id);
    if (timer) {
      clearInterval(timer);
      timersRef.current.delete(id);
    }
    setItems((prev) => prev.filter((it) => it.id !== id));
  };
  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) addFiles(e.target.files);
    e.target.value = "";
  };
  const handleDrop = (e) => {
    e.preventDefault();
    dragDepth.current = 0;
    setDragActive(false);
    if (disabled) return;
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) addFiles(e.dataTransfer.files);
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    if (disabled) return;
    dragDepth.current += 1;
    setDragActive(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    dragDepth.current = Math.max(0, dragDepth.current - 1);
    if (dragDepth.current === 0) setDragActive(false);
  };
  const isActive = (dragActive || forceActive) && !disabled;
  return /* @__PURE__ */ jsxs("div", { className: cn("w-full", className), children: [
    /* @__PURE__ */ jsxs(
      "label",
      {
        htmlFor: inputId,
        onDrop: handleDrop,
        onDragEnter: handleDragEnter,
        onDragLeave: handleDragLeave,
        onDragOver: (e) => e.preventDefault(),
        className: cn(
          "flex flex-col items-center justify-center rounded-2xl border px-6 py-8 text-center transition-colors",
          disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
          isActive ? "border-[var(--primary500)] bg-[var(--primary50)]" : "border-[var(--neutral200)] bg-[var(--neutral0)] hover:border-[var(--neutral300)]"
        ),
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: inputId,
              type: "file",
              accept,
              multiple,
              disabled,
              onChange: handleChange,
              className: "sr-only"
            }
          ),
          /* @__PURE__ */ jsx(
            Upload,
            {
              size: 20,
              className: isActive ? "text-[var(--primary500)]" : "text-[var(--neutral500)]",
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: cn(
                "mt-3 text-sm font-semibold",
                isActive ? "text-[var(--primary600)]" : "text-[var(--neutral900)]"
              ),
              children: isActive ? "Drag your file here or click to upload" : "Drag a file here or click to upload"
            }
          ),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-xs text-[var(--neutral400)]", children: [
            "Max file size ",
            formatBytes(maxSizeBytes)
          ] })
        ]
      }
    ),
    items.length > 0 && /* @__PURE__ */ jsx("ul", { "aria-live": "polite", className: "mt-4 space-y-2", children: items.map((item) => /* @__PURE__ */ jsxs(
      "li",
      {
        className: cn(
          "flex items-start gap-3 rounded-[var(--radius-md)] border px-3 py-2.5",
          item.status === "error" ? "border-[var(--danger200)] bg-[var(--danger50)]" : "border-[var(--neutral100)]"
        ),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-medium text-[var(--neutral900)]", children: item.file.name }),
              /* @__PURE__ */ jsx("span", { className: "shrink-0 text-xs text-[var(--neutral400)]", children: formatBytes(item.file.size) })
            ] }),
            item.status === "uploading" && /* @__PURE__ */ jsx("div", { className: "mt-1.5", children: /* @__PURE__ */ jsx(Progress, { value: item.progress, showValue: false }) }),
            item.status === "done" && /* @__PURE__ */ jsxs("p", { className: "mt-1 flex items-center gap-1 text-xs text-[var(--success600)]", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { size: 12, "aria-hidden": true }),
              " Uploaded"
            ] }),
            item.status === "error" && /* @__PURE__ */ jsxs("p", { className: "mt-1 flex items-center gap-1 text-xs text-[var(--danger600)]", children: [
              /* @__PURE__ */ jsx(AlertCircle, { size: 12, "aria-hidden": true }),
              " ",
              item.error
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => removeItem(item.id),
              "aria-label": `Remove ${item.file.name}`,
              className: "shrink-0 cursor-pointer rounded-full p-1 text-[var(--neutral400)] transition-colors hover:bg-[var(--neutral100)] hover:text-[var(--neutral700)]",
              children: /* @__PURE__ */ jsx(X, { size: 14, "aria-hidden": true })
            }
          )
        ]
      },
      item.id
    )) })
  ] });
}
export {
  Uploader
};
//# sourceMappingURL=uploader.js.map