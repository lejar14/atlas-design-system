"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { CalendarDays } from "lucide-react";
import { cn } from "../lib/utils.js";
import { Calendar } from "./calendar.js";
import { addMonths, formatDateLabel } from "../lib/calendar-utils.js";
const EMPTY_RANGE = { start: null, end: null };
function DateRangePicker({
  value,
  defaultValue = EMPTY_RANGE,
  onChange,
  disabled = false,
  className
}) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const range = value ?? uncontrolled;
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(() => range.start ?? /* @__PURE__ */ new Date());
  const setRange = (next) => {
    if (!value) setUncontrolled(next);
    onChange?.(next);
  };
  const handleSelect = (date) => {
    if (!range.start || range.start && range.end) {
      setRange({ start: date, end: null });
      return;
    }
    const next = date < range.start ? { start: date, end: range.start } : { start: range.start, end: date };
    setRange(next);
    setOpen(false);
  };
  const label = range.start && range.end ? `${formatDateLabel(range.start)} \u2013 ${formatDateLabel(range.end)}` : range.start ? `${formatDateLabel(range.start)} \u2013 \u2026` : "Select a date range";
  return /* @__PURE__ */ jsxs(
    Popover.Root,
    {
      open,
      onOpenChange: (next) => {
        setOpen(next);
        if (next) setMonth(range.start ?? /* @__PURE__ */ new Date());
      },
      children: [
        /* @__PURE__ */ jsx(Popover.Trigger, { asChild: true, children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            disabled,
            className: cn(
              "flex w-full max-w-[320px] cursor-pointer items-center justify-between gap-2 rounded-[var(--radius-md)] border border-[var(--neutral200)] bg-[var(--neutral0)] px-3 py-2 text-sm text-[var(--neutral900)] transition-colors hover:bg-[var(--neutral50)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary300)]",
              "disabled:pointer-events-none disabled:opacity-40",
              className
            ),
            children: [
              /* @__PURE__ */ jsx("span", { className: cn("truncate", !range.start && "text-[var(--neutral400)]"), children: label }),
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
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6", children: [
              /* @__PURE__ */ jsx(
                Calendar,
                {
                  month,
                  rangeStart: range.start,
                  rangeEnd: range.end,
                  onSelectDate: handleSelect,
                  showPrev: true,
                  showNext: false,
                  onPrev: () => setMonth((m) => addMonths(m, -1))
                }
              ),
              /* @__PURE__ */ jsx(
                Calendar,
                {
                  month: addMonths(month, 1),
                  rangeStart: range.start,
                  rangeEnd: range.end,
                  onSelectDate: handleSelect,
                  showPrev: false,
                  showNext: true,
                  onNext: () => setMonth((m) => addMonths(m, 1))
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
export {
  DateRangePicker
};
//# sourceMappingURL=date-range-picker.js.map