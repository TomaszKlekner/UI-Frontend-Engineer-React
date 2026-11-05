import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

// KPI tile. `emphasis` = needs attention (monochrome: dark border + bold hint instead of red).
export function Stat({
  label,
  value,
  hint,
  emphasis = false,
  className,
}: {
  label: ReactNode;
  value: ReactNode;
  hint?: ReactNode;
  emphasis?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 rounded-card border bg-surface px-5 py-4 font-sans shadow-card",
        emphasis ? "border-state-strong" : "border-border",
        className,
      )}
    >
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
      <strong className="text-2xl font-semibold text-foreground tabular-nums">
        {value}
      </strong>
      {hint ? (
        <span
          className={cn(
            "text-xs",
            emphasis ? "font-semibold text-foreground" : "text-muted-foreground",
          )}
        >
          {hint}
        </span>
      ) : null}
    </div>
  );
}
