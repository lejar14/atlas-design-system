"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from "react";
import { cn } from "../lib/utils.js";
const TRACK_SIZE = { sm: "h-5 w-9", md: "h-6 w-11" };
const THUMB_SIZE = { sm: "h-4 w-4", md: "h-5 w-5" };
const THUMB_TRAVEL = { sm: "peer-checked:translate-x-4", md: "peer-checked:translate-x-5" };
const TRACK_OFF_CLASSES = {
  neutral: "bg-[var(--neutral200)]",
  primary: "bg-[var(--neutral200)]",
  status: "bg-[var(--danger500)]"
};
const TRACK_ON_CLASSES = {
  neutral: "peer-checked:bg-[var(--neutral900)]",
  primary: "peer-checked:bg-[var(--primary500)]",
  status: "peer-checked:bg-[var(--success500)]"
};
const Switch = forwardRef(function Switch2({ color = "neutral", size = "md", label, helperText, focused = false, className, id, disabled, ...props }, ref) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-start gap-2.5", className), children: [
    /* @__PURE__ */ jsxs("span", { className: cn("relative inline-flex shrink-0", TRACK_SIZE[size], disabled && "opacity-40"), children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          ref,
          type: "checkbox",
          role: "switch",
          id: inputId,
          disabled,
          className: "peer absolute inset-0 z-10 h-full w-full cursor-pointer appearance-none disabled:cursor-not-allowed",
          ...props
        }
      ),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: cn(
            "pointer-events-none absolute inset-0 rounded-full transition-colors",
            TRACK_OFF_CLASSES[color],
            TRACK_ON_CLASSES[color],
            "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--primary300)] peer-focus-visible:ring-offset-2",
            focused && "ring-2 ring-[var(--primary300)] ring-offset-2"
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: cn(
            "pointer-events-none absolute top-1/2 left-0.5 -translate-y-1/2 rounded-full bg-[var(--neutral0)] shadow-sm transition-transform",
            THUMB_SIZE[size],
            THUMB_TRAVEL[size]
          )
        }
      )
    ] }),
    (label || helperText) && /* @__PURE__ */ jsxs(
      "label",
      {
        htmlFor: inputId,
        className: cn("flex flex-col", disabled ? "cursor-not-allowed" : "cursor-pointer"),
        children: [
          label && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "text-sm font-medium",
                disabled ? "text-[var(--neutral300)]" : "text-[var(--neutral900)]"
              ),
              children: label
            }
          ),
          helperText && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn("text-xs", disabled ? "text-[var(--neutral300)]" : "text-[var(--neutral400)]"),
              children: helperText
            }
          )
        ]
      }
    )
  ] });
});
export {
  Switch
};
//# sourceMappingURL=switch.js.map