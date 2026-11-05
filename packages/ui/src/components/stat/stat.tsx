import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

// KPI tile. `tone` = status (error / warning / success): kolorowa lewa ramka + wartość w kolorze tekstu statusu.
// `emphasis` (zgodność wstecz) = tone „error”.
export function Stat({
  label,
  value,
  hint,
  emphasis = false,
  tone,
  size = "md",
  className,
}: {
  label: ReactNode;
  value: ReactNode;
  hint?: ReactNode;
  emphasis?: boolean;
  tone?: "error" | "warning" | "success" | "info";
  /** sm = kompaktowy kafelek (pasek podsumowania nad tabelą). */
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-card border bg-surface font-sans shadow-card",
        size === "sm" ? "gap-0.5 px-4 py-2.5" : "gap-1 px-5 py-4",
        "border-border",
        (tone ?? (emphasis ? "error" : undefined)) && "border-l-4",
        TONE_BORDER[tone ?? (emphasis ? "error" : "none")],
        className,
      )}
    >
      <span className={cn("font-medium tracking-wide text-muted-foreground uppercase", size === "sm" ? "text-[0.6875rem]" : "text-xs")}>
        {label}
      </span>
      <strong className={cn("font-semibold tabular-nums", TONE_TEXT[tone ?? (emphasis ? "error" : "none")], size === "sm" ? "text-lg leading-tight" : "text-2xl")}>
        {value}
      </strong>
      {hint ? (
        <span
          className={cn(
            "text-xs",
            emphasis || tone ? "font-semibold " + TONE_TEXT[tone ?? "error"] : "text-muted-foreground",
          )}
        >
          {hint}
        </span>
      ) : null}
    </div>
  );
}

const TONE_BORDER: Record<string, string> = {
  none: "",
  error: "border-l-status-error",
  warning: "border-l-status-warning",
  success: "border-l-status-success",
  info: "border-l-status-info",
};

const TONE_TEXT: Record<string, string> = {
  none: "text-foreground",
  error: "text-status-error-text",
  warning: "text-status-warning-text",
  success: "text-status-success-text",
  info: "text-status-info-text",
};
