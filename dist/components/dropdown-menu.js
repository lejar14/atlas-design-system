"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";
import { cn } from "../lib/utils.js";
const DropdownMenu = RadixDropdown.Root;
const DropdownMenuTrigger = RadixDropdown.Trigger;
const DropdownMenuContent = forwardRef(function DropdownMenuContent2({ className, sideOffset = 6, ...props }, ref) {
  return /* @__PURE__ */ jsx(RadixDropdown.Portal, { children: /* @__PURE__ */ jsx(
    RadixDropdown.Content,
    {
      ref,
      sideOffset,
      className: cn(
        "z-50 min-w-[240px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--neutral100)] bg-[var(--neutral0)] p-1.5 shadow-xl",
        className
      ),
      ...props
    }
  ) });
});
const DropdownMenuLabel = forwardRef(function DropdownMenuLabel2({ className, ...props }, ref) {
  return /* @__PURE__ */ jsx(
    RadixDropdown.Label,
    {
      ref,
      className: cn(
        "px-2.5 pt-1.5 pb-2 text-xs font-semibold tracking-wide text-[var(--neutral400)] uppercase",
        className
      ),
      ...props
    }
  );
});
const DropdownMenuSeparator = forwardRef(function DropdownMenuSeparator2({ className, ...props }, ref) {
  return /* @__PURE__ */ jsx(RadixDropdown.Separator, { ref, className: cn("my-1.5 h-px bg-[var(--neutral100)]", className), ...props });
});
const DropdownMenuItem = forwardRef(
  function DropdownMenuItem2({
    className,
    variant = "default",
    active = false,
    forceHighlighted = false,
    leadingIcon: LeadingIcon,
    trailingIcon: TrailingIcon,
    children,
    ...props
  }, ref) {
    return /* @__PURE__ */ jsxs(
      RadixDropdown.Item,
      {
        ref,
        className: cn(
          "flex h-9 cursor-pointer items-center gap-2 rounded-[6px] px-2.5 text-sm outline-none transition-colors select-none",
          "data-[highlighted]:bg-[var(--surface-accent-subtle)]",
          forceHighlighted && "bg-[var(--surface-accent-subtle)]",
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
          variant === "danger" ? "text-[var(--danger600)]" : active ? "font-medium text-[var(--primary600)]" : "text-[var(--neutral900)]",
          className
        ),
        ...props,
        children: [
          LeadingIcon && /* @__PURE__ */ jsx(LeadingIcon, { size: 16, className: "shrink-0", "aria-hidden": true }),
          /* @__PURE__ */ jsx("span", { className: "flex-1 truncate", children }),
          TrailingIcon && /* @__PURE__ */ jsx(TrailingIcon, { size: 16, className: "shrink-0", "aria-hidden": true })
        ]
      }
    );
  }
);
export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
};
//# sourceMappingURL=dropdown-menu.js.map