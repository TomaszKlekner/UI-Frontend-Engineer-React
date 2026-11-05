import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

// Monochrome: status is told apart by fill / outline / weight, not by color.
const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-sans text-xs font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground",
        subtle: "bg-muted text-foreground",
        outline: "border border-border-strong text-foreground",
        muted: "bg-muted text-muted-foreground",
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
