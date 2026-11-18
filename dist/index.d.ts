import * as react from 'react';
import { ReactNode, ElementType, ButtonHTMLAttributes, InputHTMLAttributes, ComponentPropsWithoutRef, TextareaHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ClassValue } from 'clsx';

type NotificationColor = "neutral" | "info" | "success" | "warning" | "danger";
/**
 * Shared between Alert and Toast so both stay visually identical — a Toast
 * is just an Alert shown in a floating, auto-dismissing viewport instead of
 * inline in the page.
 *
 * Each color gets its own icon shape (not just a tinted circle-i), so the
 * message doesn't rely on color alone to say what kind of notice it is —
 * useful for anyone with color-vision deficiency, and for a black & white
 * printout of these docs.
 */
declare const NOTIFICATION_ICON: Record<NotificationColor, LucideIcon>;
declare const NOTIFICATION_CLASSES: Record<NotificationColor, {
    icon: string;
    title: string;
    action: string;
}>;

type AlertColor = NotificationColor;
type AlertLayout = "stacked" | "inline";
interface AlertProps {
    color?: AlertColor;
    /** "stacked" (default): the action sits below the description — room to
     * breathe for a notice living inline in the page. "inline": the action
     * sits beside the close button in the header instead — the compact
     * shape a Toast borrows for its cramped, floating viewport. */
    layout?: AlertLayout;
    icon?: LucideIcon;
    title: string;
    children?: ReactNode;
    actionLabel?: string;
    onAction?: () => void;
    onDismiss?: () => void;
    dismissible?: boolean;
    className?: string;
}
declare function Alert({ color, layout, icon, title, children, actionLabel, onAction, onDismiss, dismissible, className, }: AlertProps): react.JSX.Element | null;

type BadgeColor = "neutral" | "primary" | "secondary" | "info" | "success" | "warning" | "danger";
type BadgeVariant = "fill" | "outline" | "light";
type BadgeSize = "sm" | "md" | "lg";
interface BadgeProps {
    color?: BadgeColor;
    variant?: BadgeVariant;
    size?: BadgeSize;
    leadingIcon?: LucideIcon;
    trailingIcon?: LucideIcon;
    /** Renders as a small colored dot instead of a label — a minimal
     * presence/unread indicator, no text. */
    dot?: boolean;
    children?: ReactNode;
    className?: string;
}
declare function Badge({ color, variant, size, leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, dot, children, className, }: BadgeProps): react.JSX.Element;

type BreadcrumbState = "default" | "hover" | "active";
interface BreadcrumbItem {
    /** Visible text. Optional when icon is set and the crumb should read as
     * icon-only — pass label anyway; it's still used for the accessible name. */
    label: string;
    href?: string;
    icon?: LucideIcon;
    hideLabel?: boolean;
    /** Docs-only: force this item's visual state instead of deriving it from
     * real hover or its position in the trail (the same technique as
     * Chip/Switch's `focused` prop) — used to show Default/Hover/Active
     * side by side in the Variants tab. */
    forceState?: BreadcrumbState;
}
interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
    /** Component used to render linked crumbs. Defaults to a plain `<a>`;
     * pass your router's link (e.g. Next.js `Link`) for client-side routing.
     * It receives `href`, `className` and `children`. */
    linkComponent?: ElementType;
}
declare function Breadcrumbs({ items, className, linkComponent: Link }: BreadcrumbsProps): react.JSX.Element;

type ButtonColor = "brand" | "neutral" | "danger" | "warning" | "success";
type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ButtonColor;
    variant?: ButtonVariant;
    size?: ButtonSize;
    leadingIcon?: LucideIcon;
    trailingIcon?: LucideIcon;
}
declare function buttonClasses({ color, variant, size, }?: {
    color?: ButtonColor;
    variant?: ButtonVariant;
    size?: ButtonSize;
}): string;
declare function Button({ color, variant, size, leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, className, children, ...props }: ButtonProps): react.JSX.Element;

interface CalendarProps {
    /** Any date within the month to display — only year/month are read. */
    month: Date;
    today?: Date;
    selected?: Date | null;
    rangeStart?: Date | null;
    rangeEnd?: Date | null;
    onSelectDate?: (date: Date) => void;
    showPrev?: boolean;
    showNext?: boolean;
    onPrev?: () => void;
    onNext?: () => void;
    className?: string;
}
declare function Calendar({ month, today, selected, rangeStart, rangeEnd, onSelectDate, showPrev, showNext, onPrev, onNext, className, }: CalendarProps): react.JSX.Element;

type CheckboxColor = "primary" | "danger" | "neutral";
type CheckboxSize = "sm" | "md";
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
    color?: CheckboxColor;
    size?: CheckboxSize;
    label?: string;
    helperText?: string;
    /** Visual "some but not all" state — sets the real DOM .indeterminate
     * property (there's no HTML attribute for it) via a ref effect. */
    indeterminate?: boolean;
    /** Force the focused visual state, independent of real DOM focus. */
    focused?: boolean;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLInputElement>>;

type ChipColor = "neutral" | "primary" | "success" | "warning" | "danger";
type ChipVariant = "fill" | "outline";
type ChipSize = "sm" | "md" | "lg";
interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "onSelect"> {
    color?: ChipColor;
    variant?: ChipVariant;
    size?: ChipSize;
    selected?: boolean;
    defaultSelected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    leadingIcon?: LucideIcon;
    trailingIcon?: LucideIcon;
    /** Renders a real, independently-clickable remove button in the
     * trailing slot instead of trailingIcon — the classic removable-tag
     * use case. When set, the chip itself is a non-interactive label (a
     * <button> can't nest another <button>), not a toggle. */
    onRemove?: () => void;
    /** Docs-only: force the focus-visible ring without real keyboard focus. */
    focused?: boolean;
}
declare const Chip: react.ForwardRefExoticComponent<ChipProps & react.RefAttributes<HTMLButtonElement>>;

interface DatePickerProps {
    value?: Date | null;
    defaultValue?: Date | null;
    onChange?: (date: Date) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}
declare function DatePicker({ value, defaultValue, onChange, placeholder, disabled, className, }: DatePickerProps): react.JSX.Element;

interface DateRange {
    start: Date | null;
    end: Date | null;
}
interface DateRangePickerProps {
    value?: DateRange;
    defaultValue?: DateRange;
    onChange?: (range: DateRange) => void;
    disabled?: boolean;
    className?: string;
}
declare function DateRangePicker({ value, defaultValue, onChange, disabled, className, }: DateRangePickerProps): react.JSX.Element;

declare const DropdownMenu: react.FC<RadixDropdown.DropdownMenuProps>;
declare const DropdownMenuTrigger: react.ForwardRefExoticComponent<RadixDropdown.DropdownMenuTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuContent: react.ForwardRefExoticComponent<Omit<RadixDropdown.DropdownMenuContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: react.ForwardRefExoticComponent<Omit<RadixDropdown.DropdownMenuLabelProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: react.ForwardRefExoticComponent<Omit<RadixDropdown.DropdownMenuSeparatorProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
type DropdownMenuItemVariant = "default" | "danger";
interface DropdownMenuItemProps extends ComponentPropsWithoutRef<typeof RadixDropdown.Item> {
    variant?: DropdownMenuItemVariant;
    /** Visually marks this as the currently active/selected item. */
    active?: boolean;
    /** Docs-only: force the hover/highlighted look without real pointer
     * interaction, for a static side-by-side state comparison. */
    forceHighlighted?: boolean;
    leadingIcon?: LucideIcon;
    trailingIcon?: LucideIcon;
}
declare const DropdownMenuItem: react.ForwardRefExoticComponent<DropdownMenuItemProps & react.RefAttributes<HTMLDivElement>>;

type InputSize = "sm" | "md" | "lg";
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: InputSize;
    label?: string;
    helperText?: string;
    error?: boolean;
    /** Force the focused visual state, independent of real DOM focus — for
     * compound fields where an adjacent control should visually "own" this
     * input's focus ring. */
    focused?: boolean;
    leadingIcon?: LucideIcon;
    trailingIcon?: LucideIcon;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

type ProgressColor = "neutral" | "info" | "danger";
type ProgressLayout = "stacked" | "inline";
interface ProgressProps {
    /** 0–100. Values outside that range are clamped. */
    value: number;
    color?: ProgressColor;
    /** "stacked" (default): label/percentage sit above a full-width bar.
     * "inline": label, bar and percentage share one row. */
    layout?: ProgressLayout;
    label?: string;
    helperText?: string;
    showValue?: boolean;
    className?: string;
}
declare function Progress({ value, color, layout, label, helperText, showValue, className, }: ProgressProps): react.JSX.Element;

type RadioColor = "primary" | "danger" | "neutral";
type RadioSize = "sm" | "md";
interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
    color?: RadioColor;
    size?: RadioSize;
    label?: string;
    helperText?: string;
    /** Force the focused visual state, independent of real DOM focus. */
    focused?: boolean;
}
declare const RadioButton: react.ForwardRefExoticComponent<RadioButtonProps & react.RefAttributes<HTMLInputElement>>;

type SpinnerColor = "neutral" | "info" | "danger";
type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
interface SpinnerProps {
    color?: SpinnerColor;
    size?: SpinnerSize;
    /** Accessible name — what's actually loading. */
    label?: string;
    className?: string;
}
declare function Spinner({ color, size, label, className }: SpinnerProps): react.JSX.Element;

type SwitchColor = "neutral" | "primary" | "status";
type SwitchSize = "sm" | "md";
interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
    color?: SwitchColor;
    size?: SwitchSize;
    label?: string;
    helperText?: string;
    /** Docs-only: force the focus-visible ring without real keyboard focus. */
    focused?: boolean;
}
declare const Switch: react.ForwardRefExoticComponent<SwitchProps & react.RefAttributes<HTMLInputElement>>;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    helperText?: string;
    error?: boolean;
    /** Force the focused visual state, independent of real DOM focus. */
    focused?: boolean;
    trailingIcon?: LucideIcon;
}
declare const Textarea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;

type ToastColor = NotificationColor;
interface ToastOptions {
    color?: ToastColor;
    title: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
    /** ms before it auto-dismisses. Default 5000. */
    duration?: number;
}
type ToastContextValue = (options: ToastOptions) => void;
/** Push a new toast. Must be called from a component rendered under <Toaster>. */
declare function useToast(): ToastContextValue;
/**
 * Mounts the Radix Toast provider, viewport and queue. Wrap the part of the
 * tree that needs to trigger toasts — a whole app in practice, or just one
 * demo here — in a single <Toaster>; call useToast() anywhere inside it.
 */
interface ToasterProps {
    children: ReactNode;
}
declare function Toaster({ children }: ToasterProps): react.JSX.Element;

declare const TooltipProvider: react.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: react.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: react.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & react.RefAttributes<HTMLButtonElement>>;
type TooltipVariant = "dark" | "light";
/**
 * Both variants are built from the same semantic --neutral tokens the rest
 * of Atlas uses (see Button's "neutral" color / Checkbox's "neutral" color
 * for the same pattern), so they invert safely in dark mode instead of
 * being a hardcoded color. "dark" is the inverse-surface style, "light" is
 * the bordered on-surface style — which one is literally dark depends on
 * the active page theme, by design.
 */
declare const TOOLTIP_VARIANT_CLASSES: Record<TooltipVariant, string>;
declare const TOOLTIP_ARROW_CLASSES: Record<TooltipVariant, string>;
interface TooltipContentProps extends react.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
    variant?: TooltipVariant;
    icon?: LucideIcon;
    title?: string;
}
declare const TooltipContent: react.ForwardRefExoticComponent<TooltipContentProps & react.RefAttributes<HTMLDivElement>>;

interface UploaderProps {
    /** Defaults to 1 MB, matching the spec. */
    maxSizeBytes?: number;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    /** Docs-only: force the drag-active look without a real drag. */
    forceActive?: boolean;
    className?: string;
}
declare function Uploader({ maxSizeBytes, accept, multiple, disabled, forceActive, className, }: UploaderProps): react.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

export { Alert, type AlertColor, type AlertLayout, type AlertProps, Badge, type BadgeColor, type BadgeProps, type BadgeSize, type BadgeVariant, type BreadcrumbItem, type BreadcrumbState, Breadcrumbs, type BreadcrumbsProps, Button, type ButtonColor, type ButtonProps, type ButtonSize, type ButtonVariant, Calendar, type CalendarProps, Checkbox, type CheckboxColor, type CheckboxProps, type CheckboxSize, Chip, type ChipColor, type ChipProps, type ChipSize, type ChipVariant, DatePicker, type DatePickerProps, type DateRange, DateRangePicker, type DateRangePickerProps, DropdownMenu, DropdownMenuContent, DropdownMenuItem, type DropdownMenuItemProps, type DropdownMenuItemVariant, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Input, type InputProps, type InputSize, NOTIFICATION_CLASSES, NOTIFICATION_ICON, type NotificationColor, Progress, type ProgressColor, type ProgressLayout, type ProgressProps, RadioButton, type RadioButtonProps, type RadioColor, type RadioSize, Spinner, type SpinnerColor, type SpinnerProps, type SpinnerSize, Switch, type SwitchColor, type SwitchProps, type SwitchSize, TOOLTIP_ARROW_CLASSES, TOOLTIP_VARIANT_CLASSES, Textarea, type TextareaProps, type ToastColor, type ToastOptions, Toaster, type ToasterProps, Tooltip, TooltipContent, type TooltipContentProps, TooltipProvider, TooltipTrigger, type TooltipVariant, Uploader, type UploaderProps, buttonClasses, cn, useToast };
