import type { LabelHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn("text-foreground font-sans text-sm font-medium", className)}
      {...props}
    >
      {props.children}
    </label>
  );
}
