import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Fragment as Fragment2 } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils.js";
const STATE_CLASSES = {
  default: "text-[var(--neutral500)]",
  hover: "text-[var(--text-link)]",
  active: "font-medium text-[var(--neutral900)]"
};
function Breadcrumbs({ items, className, linkComponent: Link = "a" }) {
  return /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className, children: /* @__PURE__ */ jsx("ol", { className: "flex flex-wrap items-center gap-1.5 text-sm", children: items.map((item, index) => {
    const isLast = index === items.length - 1;
    const state = item.forceState ?? (isLast ? "active" : "default");
    const isLink = !!item.href && state !== "active";
    const Icon = item.icon;
    const content = /* @__PURE__ */ jsxs(Fragment, { children: [
      Icon && /* @__PURE__ */ jsx(Icon, { size: 15, className: "shrink-0", "aria-hidden": true }),
      /* @__PURE__ */ jsx("span", { className: cn(item.hideLabel && "sr-only"), children: item.label })
    ] });
    return /* @__PURE__ */ jsxs(Fragment2, { children: [
      index > 0 && /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "shrink-0 text-[var(--neutral300)]", "aria-hidden": true }),
      /* @__PURE__ */ jsx("li", { className: "flex items-center", children: isLink ? /* @__PURE__ */ jsx(
        Link,
        {
          href: item.href,
          className: cn(
            "flex items-center gap-1.5 rounded-sm transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary300)]",
            item.forceState === "hover" ? STATE_CLASSES.hover : cn(STATE_CLASSES.default, "hover:text-[var(--text-link)]")
          ),
          children: content
        }
      ) : /* @__PURE__ */ jsx(
        "span",
        {
          "aria-current": state === "active" ? "page" : void 0,
          className: cn("flex items-center gap-1.5", STATE_CLASSES[state]),
          children: content
        }
      ) })
    ] }, `${item.label}-${index}`);
  }) }) });
}
export {
  Breadcrumbs
};
//# sourceMappingURL=breadcrumbs.js.map