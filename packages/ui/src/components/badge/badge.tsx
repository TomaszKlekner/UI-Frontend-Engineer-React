import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

// Monochrome: status is told apart by fill / outline / weight, not by color.
const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-sans text-xs font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        solid: "bg-gray-200 font-semibold text-foreground",
        subtle: "bg-muted text-foreground",
        outline: "border border-solid border-border-strong text-foreground",
        muted: "bg-muted text-muted-foreground",
        // Statusy (kolor tylko przy stanach: zaległość, błąd, sukces).
        success: "bg-status-success-bg text-status-success-text",
        info: "bg-status-info-bg text-status-info-text",
        warning: "bg-status-warning-bg text-status-warning-text",
        notice: "bg-status-notice-bg text-status-notice-text",
        error: "bg-status-error-bg text-status-error-text",
        neutral: "bg-status-neutral-bg text-status-neutral-text",
      },
    },
    defaultVariants: {
      variant: "subtle",
    },
  },
);

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
