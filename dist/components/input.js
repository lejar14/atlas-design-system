import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils.js";
import { forwardRef, useId } from "react";
const SIZE_CLASSES = {
  sm: "h-8 gap-1.5 px-2.5 text-sm",
  md: "h-9 gap-2 px-3 text-sm",
  lg: "h-11 gap-2 px-3.5 text-base"
};
const ICON_SIZE = { sm: 14, md: 16, lg: 18 };
const Input = forwardRef(function Input2({
  size = "md",
  label,
  helperText,
  error = false,
  focused = false,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  className,
  id,
  disabled,
  readOnly,
  ...props
}, ref) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const iconSize = ICON_SIZE[size];
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsxs("label", { htmlFor: inputId, className: "text-sm font-medium text-[var(--neutral900)]", children: [
      label,
      error && /* @__PURE__ */ jsx("span", { className: "ml-0.5 text-[var(--danger500)]", children: "*" })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "flex items-center rounded-[var(--radius-md)] border bg-[var(--neutral0)] transition-colors",
          "has-[input:focus-visible]:border-[var(--primary600)] has-[input:focus-visible]:ring-1 has-[input:focus-visible]:ring-[var(--primary600)]",
          focused && "border-[var(--primary600)] ring-1 ring-[var(--primary600)]",
          error ? "border-[var(--danger500)]" : "border-[var(--neutral200)]",
          disabled && "border-[var(--neutral100)] bg-[var(--neutral50)]",
          readOnly && !disabled && "border-[var(--neutral100)] bg-[var(--neutral25)]",
          SIZE_CLASSES[size]
        ),
        children: [
          LeadingIcon && /* @__PURE__ */ jsx(
            LeadingIcon,
            {
              size: iconSize,
              className: cn("shrink-0", disabled ? "text-[var(--neutral300)]" : "text-[var(--neutral400)]"),
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              ref,
              id: inputId,
              disabled,
              readOnly,
              className: cn(
                "min-w-0 flex-1 bg-transparent text-[var(--neutral900)] outline-none placeholder:text-[var(--neutral400)]",
                disabled && "cursor-not-allowed text-[var(--neutral300)]",
                className
              ),
              ...props
            }
          ),
          TrailingIcon && /* @__PURE__ */ jsx(
            TrailingIcon,
            {
              size: iconSize,
              className: cn("shrink-0", disabled ? "text-[var(--neutral300)]" : "text-[var(--neutral400)]"),
              "aria-hidden": true
            }
          )
        ]
      }
    ),
    helperText && /* @__PURE__ */ jsx(
      "p",
      {
        className: cn(
          "text-xs",
          error ? "text-[var(--danger500)]" : "text-[var(--neutral400)]"
        ),
        children: helperText
      }
    )
  ] });
});
export {
  Input
};
//# sourceMappingURL=input.js.map