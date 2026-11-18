import { jsx } from "react/jsx-runtime";
import { cn } from "../lib/utils.js";
const SIZE_PX = { xs: 16, sm: 20, md: 24, lg: 32, xl: 40 };
const STROKE_WIDTH = { xs: 2, sm: 2, md: 2.5, lg: 3, xl: 3.5 };
const COLOR_CLASSES = {
  neutral: "text-[var(--neutral900)]",
  info: "text-[var(--info500)]",
  danger: "text-[var(--danger500)]"
};
function Spinner({ color = "neutral", size = "md", label = "Loading", className }) {
  const px = SIZE_PX[size];
  const stroke = STROKE_WIDTH[size];
  const radius = (px - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * 0.75;
  return /* @__PURE__ */ jsx("span", { role: "status", "aria-label": label, className: cn("inline-flex shrink-0", COLOR_CLASSES[color], className), children: /* @__PURE__ */ jsx("svg", { width: px, height: px, viewBox: `0 0 ${px} ${px}`, className: "animate-spin", "aria-hidden": true, children: /* @__PURE__ */ jsx(
    "circle",
    {
      cx: px / 2,
      cy: px / 2,
      r: radius,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeDasharray: `${dash} ${circumference - dash}`
    }
  ) }) });
}
export {
  Spinner
};
//# sourceMappingURL=spinner.js.map