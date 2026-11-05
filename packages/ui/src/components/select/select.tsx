import { type SelectHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

// Native <select>: keyboard, mobile pickers and screen readers work out of the box.
// A custom Radix Select is worth it only for rich options (icons, search).
// `className` styles the wrapper (width / layout); the chevron is a real SVG so it always renders.
export function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <span className={cn("group relative inline-flex w-full", className)}>
      <select
        className={cn(
          "m-0 h-9 min-h-0 w-full cursor-pointer appearance-none rounded-control border border-solid border-border-strong bg-surface py-0 pr-9 pl-3 font-sans text-sm text-foreground",
          "transition-colors duration-150 hover:border-gray-500",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          "disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50",
        )}
        {...props}
      >
        {children}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground transition-colors duration-150 group-hover:text-foreground"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </span>
  );
}
