import { type ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Label } from "../label/label";

// Label + control + optional hint. Pass the same `id` to the control (htmlFor ↔ id = clickable, a11y).
export function Field({
  id,
  label,
  hint,
  className,
  children,
}: {
  id: string;
  label: ReactNode;
  hint?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-1.5", className)}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {hint ? (
        <p className="m-0 font-sans text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}
