import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

// KPI tile. `emphasis` = needs attention (monochrome: dark border + bold hint instead of red).
export function Stat({
  label,
  value,
  hint,
  emphasis = false,
  size = "md",
  className,
}: {
  label: ReactNode;
  value: ReactNode;
  hint?: ReactNode;
  emphasis?: boolean;
  /** sm = kompaktowy kafelek (pasek podsumowania nad tabelą). */
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-card border bg-surface font-sans shadow-card",
        size === "sm" ? "gap-0.5 px-4 py-2.5" : "gap-1 px-5 py-4",
        emphasis ? "border-state-strong" : "border-border",
        className,
      )}
    >
      <span className={cn("font-medium tracking-wide text-muted-foreground uppercase", size === "sm" ? "text-[0.6875rem]" : "text-xs")}>
        {label}
      </span>
      <strong className={cn("font-semibold text-foreground tabular-nums", size === "sm" ? "text-lg leading-tight" : "text-2xl")}>
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
