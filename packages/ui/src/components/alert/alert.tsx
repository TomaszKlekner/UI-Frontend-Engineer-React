import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

// Monochrome alert: "strong" (errors, needs action) = dark left border + bold title;
// "subtle" (info, success) = light background.
const alertVariants = cva(
  "flex flex-col gap-1 rounded-control border px-4 py-3 font-sans text-sm",
  {
    variants: {
      variant: {
        subtle: "border-border bg-state-subtle text-foreground",
        strong: "border-border-strong border-l-4 border-l-state-strong bg-surface text-foreground",
      },
    },
    defaultVariants: {
      variant: "subtle",
    },
  },
);

type AlertProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants>;

export function Alert({ className, variant, role, ...props }: AlertProps) {
  return (
    <div
      // Strong = something went wrong → announce immediately to screen readers.
      role={role ?? (variant === "strong" ? "alert" : "status")}
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

export function AlertTitle({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("m-0 font-semibold", className)} {...props} />;
}

export function AlertDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("m-0 text-muted-foreground", className)} {...props} />
  );
}
