import {
  type ReactNode,
  type HTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from "react";
import { cn } from "../../lib/cn";

// Composable table (semantic <table>): wrapper scrolls horizontally on narrow screens.
export function Table({
  className,
  wrapperClassName,
  ...props
}: HTMLAttributes<HTMLTableElement> & { wrapperClassName?: string }) {
  return (
    <div
      className={cn(
        "w-full overflow-x-auto rounded-card border border-border bg-surface shadow-card",
        wrapperClassName,
      )}
    >
      <table
        className={cn(
          "m-0 w-full border-collapse border-0 bg-transparent font-sans text-sm text-foreground shadow-none",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export function TableHeader({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn("bg-muted", className)} {...props} />;
}

export function TableBody({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn(className)} {...props} />;
}

export function TableRow({
  className,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn(
        "border-b border-border last:border-b-0 hover:bg-gray-50",
        className,
      )}
      {...props}
    />
  );
}

export function TableHead({
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      scope="col"
      className={cn(
        "border-b border-border bg-muted px-4 py-2.5 text-left align-middle text-xs font-semibold tracking-wide text-muted-foreground uppercase",
        className,
      )}
      {...props}
    />
  );
}

export function TableCell({
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn(
        "border-b-0 px-4 py-2.5 text-left align-top text-sm",
        className,
      )}
      {...props}
    />
  );
}

/** Row shown when the table has no data. */
export function TableEmpty({
  colSpan,
  children,
}: {
  colSpan: number;
  children: ReactNode;
}) {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className="px-4 py-8 text-center text-sm text-muted-foreground"
      >
        {children}
      </td>
    </tr>
  );
}
