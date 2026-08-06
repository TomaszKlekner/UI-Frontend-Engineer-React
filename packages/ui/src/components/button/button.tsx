import { type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "cursor-pointer rounded-control px-4 py-2 font-sans text-sm font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" && "bg-gray-900 text-white",
        variant === "secondary" &&
          "border border-border bg-muted text-foreground",
        "focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-900",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
