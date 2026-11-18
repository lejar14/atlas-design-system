"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useState } from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { cn } from "../lib/utils.js";
import { NOTIFICATION_ICON, NOTIFICATION_CLASSES } from "./notification.js";
const ToastContext = createContext(null);
function useToast() {
  const toast = useContext(ToastContext);
  if (!toast) throw new Error("useToast must be used within <Toaster>");
  return toast;
}
function Toaster({ children }) {
  const [items, setItems] = useState([]);
  const toast = useCallback((options) => {
    const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
    setItems((prev) => [...prev, { color: "neutral", duration: 5e3, ...options, id }]);
  }, []);
  const remove = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);
  return /* @__PURE__ */ jsx(ToastContext.Provider, { value: toast, children: /* @__PURE__ */ jsxs(ToastPrimitive.Provider, { swipeDirection: "right", children: [
    children,
    items.map((item) => {
      const Icon = NOTIFICATION_ICON[item.color];
      const c = NOTIFICATION_CLASSES[item.color];
      return /* @__PURE__ */ jsxs(
        ToastPrimitive.Root,
        {
          duration: item.duration,
          onOpenChange: (open) => {
            if (!open) remove(item.id);
          },
          className: cn(
            "flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--neutral100)] bg-[var(--surface-raised)] p-4 shadow-xl",
            "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
            "data-[swipe=cancel]:translate-x-0",
            "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]"
          ),
          children: [
            /* @__PURE__ */ jsx(Icon, { size: 18, className: cn("mt-0.5 shrink-0", c.icon), "aria-hidden": true }),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsx(ToastPrimitive.Title, { className: cn("text-sm font-semibold", c.title), children: item.title }),
                /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 items-center gap-3", children: [
                  item.actionLabel && /* @__PURE__ */ jsx(ToastPrimitive.Action, { altText: item.actionLabel, asChild: true, children: /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: item.onAction,
                      className: cn(
                        "inline-flex cursor-pointer rounded-[6px] px-3 py-1.5 text-xs font-medium transition-colors",
                        c.action
                      ),
                      children: item.actionLabel
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    ToastPrimitive.Close,
                    {
                      "aria-label": "Dismiss",
                      className: "cursor-pointer rounded text-[var(--neutral400)] transition-colors hover:text-[var(--neutral700)]",
                      children: /* @__PURE__ */ jsx(X, { size: 16, "aria-hidden": true })
                    }
                  )
                ] })
              ] }),
              item.description && /* @__PURE__ */ jsx(ToastPrimitive.Description, { className: "mt-1 text-sm text-[var(--neutral500)]", children: item.description })
            ] })
          ]
        },
        item.id
      );
    }),
    /* @__PURE__ */ jsx(ToastPrimitive.Viewport, { className: "fixed bottom-4 right-4 z-50 flex w-[360px] max-w-[calc(100vw-2rem)] list-none flex-col gap-2 outline-none" })
  ] }) });
}
export {
  Toaster,
  useToast
};
//# sourceMappingURL=toast.js.map