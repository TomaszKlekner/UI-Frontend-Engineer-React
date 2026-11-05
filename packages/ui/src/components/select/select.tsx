import { type SelectHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

// Native <select>: keyboard, mobile pickers and screen readers work out of the box.
// A custom Radix Select is worth it only for rich options (icons, search).
export function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-9 w-full cursor-pointer appearance-none rounded-control border border-border-strong bg-surface py-0 pr-8 pl-3 font-sans text-sm text-foreground",
        // Chevron as a background image (monochrome, no extra element).
        "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2371717a%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:12px] bg-[right_0.75rem_center] bg-no-repeat",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        "disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
