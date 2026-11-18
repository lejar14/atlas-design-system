"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { CalendarDays } from "lucide-react";
import { cn } from "../lib/utils.js";
import { Calendar } from "./calendar.js";
import { addMonths, formatDateLabel } from "../lib/calendar-utils.js";
function DatePicker({
  value,
  defaultValue = null,
  onChange,
  placeholder = "Select a date",
  disabled = false,
  className
}) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const selected = value !== void 0 ? value : uncontrolled;
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(() => selected ?? /* @__PURE__ */ new Date());
  const handleSelect = (date) => {
    if (value === void 0) setUncontrolled(date);
    onChange?.(date);
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs(
    Popover.Root,
    {
      open,
      onOpenChange: (next) => {
        setOpen(next);
        if (next) setMonth(selected ?? /* @__PURE__ */ new Date());
      },
      children: [
        /* @__PURE__ */ jsx(Popover.Trigger, { asChild: true, children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            disabled,
            className: cn(
              "flex w-full max-w-[220px] cursor-pointer items-center justify-between gap-2 rounded-[var(--radius-md)] border border-[var(--neutral200)] bg-[var(--neutral0)] px-3 py-2 text-sm text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary300)]",
              "disabled:pointer-events-none disabled:opacity-40",
              className
            ),
            children: [
              /* @__PURE__ */ jsx("span", { className: cn(!selected && "text-[var(--neutral400)]"), children: selected ? formatDateLabel(selected) : placeholder }),
              /* @__PURE__ */ jsx(CalendarDays, { size: 16, className: "shrink-0 text-[var(--neutral400)]", "aria-hidden": true })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(Popover.Portal, { children: /* @__PURE__ */ jsx(
          Popover.Content,
          {
            align: "start",
            sideOffset: 8,
            className: "z-50 rounded-[var(--radius-md)] border border-[var(--neutral100)] bg-[var(--neutral0)] p-4 shadow-xl",
            children: /* @__PURE__ */ jsx(
              Calendar,
              {
                month,
                selected,
                onSelectDate: handleSelect,
                onPrev: () => setMonth((m) => addMonths(m, -1)),
                onNext: () => setMonth((m) => addMonths(m, 1))
              }
            )
          }
        ) })
      ]
    }
  );
}
export {
  DatePicker
};
//# sourceMappingURL=date-picker.js.map