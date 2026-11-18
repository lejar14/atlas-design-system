"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { cn } from "../lib/utils.js";
const COLOR_CLASSES = {
  neutral: "bg-[var(--neutral900)]",
  info: "bg-[var(--info500)]",
  danger: "bg-[var(--danger500)]"
};
function Progress({
  value,
  color = "neutral",
  layout = "stacked",
  label,
  helperText,
  showValue = true,
  className
}) {
  const clamped = Math.min(100, Math.max(0, value));
  const rounded = Math.round(clamped);
  const labelId = useId();
  const bar = /* @__PURE__ */ jsx(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": rounded,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-labelledby": label ? labelId : void 0,
      "aria-label": label ? void 0 : `${rounded}%`,
      className: "h-1.5 w-full overflow-hidden rounded-full bg-[var(--neutral100)]",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("h-full rounded-full transition-[width] duration-300 ease-out", COLOR_CLASSES[color]),
          style: { width: `${clamped}%` }
        }
      )
    }
  );
  if (layout === "inline") {
    return /* @__PURE__ */ jsxs("div", { className: cn("w-full", className), children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        label && /* @__PURE__ */ jsx("span", { id: labelId, className: "shrink-0 text-sm font-medium text-[var(--neutral900)]", children: label }),
        bar,
        showValue && /* @__PURE__ */ jsxs("span", { className: "shrink-0 text-sm text-[var(--neutral500)]", children: [
          rounded,
          "%"
        ] })
      ] }),
      helperText && /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-xs text-[var(--neutral400)]", children: helperText })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: cn("w-full", className), children: [
    (label || showValue) && /* @__PURE__ */ jsxs("div", { className: "mb-1.5 flex items-center justify-between text-sm", children: [
      label && /* @__PURE__ */ jsx("span", { id: labelId, className: "font-medium text-[var(--neutral900)]", children: label }),
      showValue && /* @__PURE__ */ jsxs("span", { className: "text-[var(--neutral500)]", children: [
        rounded,
        "%"
      ] })
    ] }),
    bar,
    helperText && /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-xs text-[var(--neutral400)]", children: helperText })
  ] });
}
export {
  Progress
};
//# sourceMappingURL=progress.js.map