"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils.js";
import { getMonthGrid, isSameDay, isWeekend, formatMonthLabel, WEEKDAY_HEADERS } from "../lib/calendar-utils.js";
function Calendar({
  month,
  today = /* @__PURE__ */ new Date(),
  selected = null,
  rangeStart = null,
  rangeEnd = null,
  onSelectDate,
  showPrev = true,
  showNext = true,
  onPrev,
  onNext,
  className
}) {
  const days = getMonthGrid(month);
  return /* @__PURE__ */ jsxs("div", { className: cn("w-[266px]", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-0.5 pb-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: onPrev,
          "aria-label": "Previous month",
          tabIndex: showPrev ? 0 : -1,
          className: cn(
            "flex h-7 w-7 items-center justify-center rounded-[6px] text-[var(--info600)] transition-colors hover:bg-[var(--neutral50)]",
            !showPrev && "invisible"
          ),
          children: /* @__PURE__ */ jsx(ChevronLeft, { size: 16, "aria-hidden": true })
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-[var(--neutral900)]", children: formatMonthLabel(month) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: onNext,
          "aria-label": "Next month",
          tabIndex: showNext ? 0 : -1,
          className: cn(
            "flex h-7 w-7 items-center justify-center rounded-[6px] text-[var(--info600)] transition-colors hover:bg-[var(--neutral50)]",
            !showNext && "invisible"
          ),
          children: /* @__PURE__ */ jsx(ChevronRight, { size: 16, "aria-hidden": true })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-7", children: [
      WEEKDAY_HEADERS.map((label) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "flex h-8 items-center justify-center text-xs font-medium text-[var(--neutral400)]",
          children: label
        },
        label
      )),
      days.map((date) => {
        const inMonth = date.getMonth() === month.getMonth();
        const weekend = isWeekend(date);
        const dayIsToday = isSameDay(date, today);
        const isSelected = !!selected && isSameDay(date, selected);
        const isStart = !!rangeStart && isSameDay(date, rangeStart);
        const isEnd = !!rangeEnd && isSameDay(date, rangeEnd);
        const inRange = !!rangeStart && !!rangeEnd && date > rangeStart && date < rangeEnd;
        const isEndpoint = isSelected || isStart || isEnd;
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex h-9 items-center justify-center",
              inRange && "bg-[var(--info50)]",
              isStart && !isEnd && "rounded-l-full bg-[var(--info50)]",
              isEnd && !isStart && "rounded-r-full bg-[var(--info50)]",
              isStart && isEnd && "rounded-full"
            ),
            children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => onSelectDate?.(date),
                disabled: !inMonth,
                "aria-label": date.toDateString(),
                "aria-pressed": isEndpoint,
                "aria-current": dayIsToday ? "date" : void 0,
                tabIndex: inMonth ? 0 : -1,
                className: cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors",
                  inMonth ? "cursor-pointer" : "cursor-default text-[var(--neutral300)]",
                  inMonth && weekend && !isEndpoint && "text-[var(--danger500)]",
                  // In-range, non-endpoint weekdays sit on the fixed (non-theme-inverting)
                  // --info50 range background, so they need a fixed dark text color too —
                  // --neutral900 inverts to near-white in dark mode and would go
                  // white-on-white against that always-light background.
                  inMonth && !weekend && !isEndpoint && inRange && "text-[var(--info900)]",
                  inMonth && !weekend && !isEndpoint && !inRange && "text-[var(--neutral900)]",
                  inMonth && !isEndpoint && "hover:bg-[var(--neutral100)]",
                  isEndpoint && "bg-[var(--info600)] font-medium text-white",
                  dayIsToday && !isEndpoint && "ring-1 ring-inset ring-[var(--info600)]"
                ),
                children: date.getDate()
              }
            )
          },
          date.toISOString()
        );
      })
    ] })
  ] });
}
export {
  Calendar
};
//# sourceMappingURL=calendar.js.map