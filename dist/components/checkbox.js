"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils.js";
import { forwardRef, useEffect, useId, useRef } from "react";
import { Check, Minus } from "lucide-react";
import { mergeRefs } from "../lib/merge-refs.js";
const BOX_SIZE = { sm: "h-4 w-4", md: "h-5 w-5" };
const ICON_SIZE = { sm: 11, md: 13 };
const COLOR_CLASSES = {
  primary: cn(
    "border-[var(--neutral300)]",
    "peer-checked:border-[var(--primary500)] peer-checked:bg-[var(--primary500)]",
    "peer-indeterminate:border-[var(--primary500)] peer-indeterminate:bg-[var(--primary500)]",
    "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--primary300)]"
  ),
  danger: cn(
    "border-[var(--danger300)]",
    "peer-checked:border-[var(--danger500)] peer-checked:bg-[var(--danger500)]",
    "peer-indeterminate:border-[var(--danger500)] peer-indeterminate:bg-[var(--danger500)]",
    "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--danger300)]"
  ),
  neutral: cn(
    "border-[var(--neutral300)]",
    "peer-checked:border-[var(--neutral900)] peer-checked:bg-[var(--neutral900)]",
    "peer-indeterminate:border-[var(--neutral900)] peer-indeterminate:bg-[var(--neutral900)]",
    "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--neutral400)]"
  )
};
const ICON_COLOR_CLASSES = {
  primary: "text-white",
  danger: "text-white",
  neutral: "text-[var(--background)]"
};
const Checkbox = forwardRef(function Checkbox2({
  color = "primary",
  size = "md",
  label,
  helperText,
  indeterminate = false,
  focused = false,
  className,
  id,
  disabled,
  ...props
}, ref) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const innerRef = useRef(null);
  useEffect(() => {
    if (innerRef.current) innerRef.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const iconSize = ICON_SIZE[size];
  return /* @__PURE__ */ jsxs("div", { className: cn("flex gap-2.5", className), children: [
    /* @__PURE__ */ jsxs(
      "span",
      {
        className: cn(
          "relative mt-0.5 inline-flex shrink-0",
          BOX_SIZE[size],
          disabled && "opacity-40"
        ),
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: mergeRefs(ref, innerRef),
              type: "checkbox",
              id: inputId,
              disabled,
              className: "peer absolute inset-0 h-full w-full cursor-pointer appearance-none disabled:cursor-not-allowed",
              ...props
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "pointer-events-none absolute inset-0 rounded-[5px] border-2 bg-[var(--neutral0)] transition-colors",
                COLOR_CLASSES[color],
                focused && "ring-2 ring-[var(--primary300)]"
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Check,
            {
              size: iconSize,
              strokeWidth: 3,
              className: cn(
                "pointer-events-none absolute inset-0 m-auto hidden peer-checked:block",
                ICON_COLOR_CLASSES[color]
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Minus,
            {
              size: iconSize,
              strokeWidth: 3,
              className: cn(
                "pointer-events-none absolute inset-0 m-auto hidden peer-indeterminate:block",
                ICON_COLOR_CLASSES[color]
              )
            }
          )
        ]
      }
    ),
    (label || helperText) && /* @__PURE__ */ jsxs("label", { htmlFor: inputId, className: cn("flex flex-col", disabled ? "cursor-not-allowed" : "cursor-pointer"), children: [
      label && /* @__PURE__ */ jsx("span", { className: cn("text-sm font-medium", disabled ? "text-[var(--neutral300)]" : "text-[var(--neutral900)]"), children: label }),
      helperText && /* @__PURE__ */ jsx("span", { className: cn("text-xs", disabled ? "text-[var(--neutral300)]" : color === "danger" ? "text-[var(--danger500)]" : "text-[var(--neutral400)]"), children: helperText })
    ] })
  ] });
});
export {
  Checkbox
};
//# sourceMappingURL=checkbox.js.map