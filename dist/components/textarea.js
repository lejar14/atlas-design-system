import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils.js";
import { forwardRef, useId } from "react";
const Textarea = forwardRef(function Textarea2({ label, helperText, error = false, focused = false, trailingIcon: TrailingIcon, className, id, disabled, readOnly, rows = 3, ...props }, ref) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsxs("label", { htmlFor: textareaId, className: "text-sm font-medium text-[var(--neutral900)]", children: [
      label,
      error && /* @__PURE__ */ jsx("span", { className: "ml-0.5 text-[var(--danger500)]", children: "*" })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "flex items-start gap-2 rounded-[var(--radius-md)] border bg-[var(--neutral0)] px-3 py-2.5 transition-colors",
          "has-[textarea:focus-visible]:border-[var(--primary600)] has-[textarea:focus-visible]:ring-1 has-[textarea:focus-visible]:ring-[var(--primary600)]",
          focused && "border-[var(--primary600)] ring-1 ring-[var(--primary600)]",
          error ? "border-[var(--danger500)]" : "border-[var(--neutral200)]",
          disabled && "border-[var(--neutral100)] bg-[var(--neutral50)]",
          readOnly && !disabled && "border-[var(--neutral100)] bg-[var(--neutral25)]"
        ),
        children: [
          /* @__PURE__ */ jsx(
            "textarea",
            {
              ref,
              id: textareaId,
              disabled,
              readOnly,
              rows,
              className: cn(
                "min-w-0 flex-1 resize-none bg-transparent text-sm text-[var(--neutral900)] outline-none placeholder:text-[var(--neutral400)]",
                disabled && "cursor-not-allowed text-[var(--neutral300)]",
                className
              ),
              ...props
            }
          ),
          TrailingIcon && /* @__PURE__ */ jsx(
            TrailingIcon,
            {
              size: 16,
              className: cn("mt-0.5 shrink-0", disabled ? "text-[var(--neutral300)]" : "text-[var(--neutral400)]"),
              "aria-hidden": true
            }
          )
        ]
      }
    ),
    helperText && /* @__PURE__ */ jsx("p", { className: cn("text-xs", error ? "text-[var(--danger500)]" : "text-[var(--neutral400)]"), children: helperText })
  ] });
});
export {
  Textarea
};
//# sourceMappingURL=textarea.js.map