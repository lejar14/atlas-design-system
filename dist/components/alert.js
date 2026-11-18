"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "../lib/utils.js";
import { NOTIFICATION_ICON, NOTIFICATION_CLASSES } from "./notification.js";
function Alert({
  color = "neutral",
  layout = "stacked",
  icon,
  title,
  children,
  actionLabel,
  onAction,
  onDismiss,
  dismissible = true,
  className
}) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  const Icon = icon ?? NOTIFICATION_ICON[color];
  const c = NOTIFICATION_CLASSES[color];
  const closeButton = dismissible && /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      "aria-label": "Dismiss",
      onClick: () => {
        setDismissed(true);
        onDismiss?.();
      },
      className: "shrink-0 cursor-pointer rounded text-[var(--neutral400)] transition-colors hover:text-[var(--neutral700)]",
      children: /* @__PURE__ */ jsx(X, { size: 16, "aria-hidden": true })
    }
  );
  const actionButton = actionLabel && /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: onAction,
      className: cn(
        "inline-flex shrink-0 cursor-pointer rounded-[6px] px-3.5 py-1.5 text-xs font-medium transition-colors",
        c.action
      ),
      children: actionLabel
    }
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "alert",
      className: cn(
        "rounded-[var(--radius-md)] border border-[var(--neutral100)] bg-[var(--surface-raised)] p-4 shadow-sm",
        className
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(Icon, { size: 18, className: cn("mt-0.5 shrink-0", c.icon), "aria-hidden": true }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsx("p", { className: cn("text-sm font-semibold", c.title), children: title }),
            layout === "inline" ? /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 items-center gap-3", children: [
              actionButton,
              closeButton
            ] }) : closeButton
          ] }),
          children && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[var(--neutral500)]", children }),
          layout === "stacked" && actionButton && /* @__PURE__ */ jsx("div", { className: "mt-3", children: actionButton })
        ] })
      ] })
    }
  );
}
export {
  Alert
};
//# sourceMappingURL=alert.js.map