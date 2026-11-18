import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils.js";
const SIZE_CLASSES = {
  sm: "h-5 gap-1 px-2 text-[10px]",
  md: "h-6 gap-1 px-2.5 text-xs",
  lg: "h-7 gap-1.5 px-3 text-xs"
};
const ICON_SIZE = { sm: 10, md: 12, lg: 14 };
const DOT_SIZE = { sm: "h-1.5 w-1.5", md: "h-2 w-2", lg: "h-2.5 w-2.5" };
const BADGE_COLORS = {
  // text-[var(--background)] (not text-white): --neutral900 inverts in
  // dark mode, so a hardcoded white label would go white-on-white — same
  // fix as Button/Checkbox/Chip's neutral color.
  neutral: {
    fill: "border-transparent bg-[var(--neutral900)] text-[var(--background)]",
    outline: "border-[var(--neutral300)] bg-[var(--neutral0)] text-[var(--neutral700)]",
    light: "border-transparent bg-[var(--neutral100)] text-[var(--neutral700)]",
    dot: "bg-[var(--neutral900)]"
  },
  primary: {
    fill: "border-transparent bg-[var(--primary500)] text-white",
    outline: "border-[var(--primary500)] bg-[var(--neutral0)] text-[var(--primary600)]",
    light: "border-transparent bg-[var(--primary50)] text-[var(--primary700)]",
    dot: "bg-[var(--primary500)]"
  },
  secondary: {
    fill: "border-transparent bg-[var(--secondary500)] text-white",
    outline: "border-[var(--secondary500)] bg-[var(--neutral0)] text-[var(--secondary600)]",
    light: "border-transparent bg-[var(--secondary50)] text-[var(--secondary700)]",
    dot: "bg-[var(--secondary500)]"
  },
  info: {
    fill: "border-transparent bg-[var(--info500)] text-white",
    outline: "border-[var(--info500)] bg-[var(--neutral0)] text-[var(--info600)]",
    light: "border-transparent bg-[var(--info50)] text-[var(--info700)]",
    dot: "bg-[var(--info500)]"
  },
  success: {
    fill: "border-transparent bg-[var(--success500)] text-white",
    outline: "border-[var(--success500)] bg-[var(--neutral0)] text-[var(--success600)]",
    light: "border-transparent bg-[var(--success50)] text-[var(--success700)]",
    dot: "bg-[var(--success500)]"
  },
  warning: {
    fill: "border-transparent bg-[var(--warning500)] text-white",
    outline: "border-[var(--warning500)] bg-[var(--neutral0)] text-[var(--warning600)]",
    light: "border-transparent bg-[var(--warning50)] text-[var(--warning700)]",
    dot: "bg-[var(--warning500)]"
  },
  danger: {
    fill: "border-transparent bg-[var(--danger500)] text-white",
    outline: "border-[var(--danger500)] bg-[var(--neutral0)] text-[var(--danger600)]",
    light: "border-transparent bg-[var(--danger50)] text-[var(--danger700)]",
    dot: "bg-[var(--danger500)]"
  }
};
function Badge({
  color = "neutral",
  variant = "fill",
  size = "md",
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  dot = false,
  children,
  className
}) {
  const c = BADGE_COLORS[color];
  if (dot) {
    return /* @__PURE__ */ jsx(
      "span",
      {
        role: "status",
        "aria-label": typeof children === "string" ? children : void 0,
        className: cn("inline-block shrink-0 rounded-full", DOT_SIZE[size], c.dot, className)
      }
    );
  }
  const iconSize = ICON_SIZE[size];
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: cn(
        "inline-flex w-fit items-center justify-center rounded-full border font-medium whitespace-nowrap",
        SIZE_CLASSES[size],
        c[variant],
        className
      ),
      children: [
        LeadingIcon && /* @__PURE__ */ jsx(LeadingIcon, { size: iconSize, className: "shrink-0", "aria-hidden": true }),
        children !== void 0 && /* @__PURE__ */ jsx("span", { className: "truncate", children }),
        TrailingIcon && /* @__PURE__ */ jsx(TrailingIcon, { size: iconSize, className: "shrink-0", "aria-hidden": true })
      ]
    }
  );
}
export {
  Badge
};
//# sourceMappingURL=badge.js.map