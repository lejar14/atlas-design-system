import { Info, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
const NOTIFICATION_ICON = {
  neutral: Info,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: XCircle
};
const NOTIFICATION_CLASSES = {
  // text-[var(--background)] (not text-white): --neutral900 inverts in
  // dark mode, so a hardcoded white label would go white-on-white — see
  // the same fix in Button's neutral color and Checkbox's neutral color.
  neutral: {
    icon: "text-[var(--neutral900)]",
    title: "text-[var(--neutral900)]",
    action: "bg-[var(--neutral900)] text-[var(--background)] hover:bg-[var(--neutral800)]"
  },
  // info/success/warning/danger are their own fixed color families, not
  // theme-inverting --neutral tokens, so white text on them is safe in
  // both themes — same as Button's brand/danger/warning/success colors.
  info: {
    icon: "text-[var(--info500)]",
    title: "text-[var(--info600)]",
    action: "bg-[var(--info500)] text-white hover:bg-[var(--info600)]"
  },
  success: {
    icon: "text-[var(--success500)]",
    title: "text-[var(--success600)]",
    action: "bg-[var(--success500)] text-white hover:bg-[var(--success600)]"
  },
  warning: {
    icon: "text-[var(--warning500)]",
    title: "text-[var(--warning600)]",
    action: "bg-[var(--warning500)] text-white hover:bg-[var(--warning600)]"
  },
  danger: {
    icon: "text-[var(--danger500)]",
    title: "text-[var(--danger600)]",
    action: "bg-[var(--danger500)] text-white hover:bg-[var(--danger600)]"
  }
};
export {
  NOTIFICATION_CLASSES,
  NOTIFICATION_ICON
};
//# sourceMappingURL=notification.js.map