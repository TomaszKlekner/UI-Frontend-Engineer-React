import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

// Page title row: title + optional description on the left, actions on the right (wraps on mobile).
export function PageHeader({
  title,
  description,
  actions,
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-end justify-between gap-4 font-sans",
        className,
      )}
    >
      <div className="flex min-w-0 flex-col gap-1">
        <h1 className="m-0 text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        {description ? (
          <p className="m-0 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex flex-wrap items-center gap-2">{actions}</div>
      ) : null}
    </div>
  );
}
