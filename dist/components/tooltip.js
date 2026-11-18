"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../lib/utils.js";
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TOOLTIP_VARIANT_CLASSES = {
  dark: "border border-transparent bg-[var(--neutral900)] text-[var(--background)]",
  light: "border border-[var(--neutral100)] bg-[var(--neutral0)] text-[var(--neutral900)]"
};
const TOOLTIP_ARROW_CLASSES = {
  dark: "fill-[var(--neutral900)]",
  light: "fill-[var(--neutral0)]"
};
const TooltipContent = React.forwardRef(function TooltipContent2({ className, variant = "dark", icon: Icon, title, children, sideOffset = 8, ...props }, ref) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    TooltipPrimitive.Content,
    {
      ref,
      sideOffset,
      className: cn(
        "z-50 max-w-[260px] rounded-[var(--radius-md)] px-3.5 py-2.5 shadow-lg",
        TOOLTIP_VARIANT_CLASSES[variant],
        className
      ),
      ...props,
      children: [
        title || Icon ? /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
          Icon && /* @__PURE__ */ jsx(Icon, { size: 16, className: "mt-0.5 shrink-0", "aria-hidden": true }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-0.5", children: [
            title && /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: title }),
            children && /* @__PURE__ */ jsx(
              "p",
              {
                className: cn(
                  "text-xs",
                  variant === "dark" ? "opacity-75" : "text-[var(--neutral500)]"
                ),
                children
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children }),
        /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { width: 14, height: 7, className: TOOLTIP_ARROW_CLASSES[variant] })
      ]
    }
  ) });
});
export {
  TOOLTIP_ARROW_CLASSES,
  TOOLTIP_VARIANT_CLASSES,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
};
//# sourceMappingURL=tooltip.js.map