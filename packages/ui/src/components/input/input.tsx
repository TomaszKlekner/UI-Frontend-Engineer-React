import { type InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      className={cn(
        "rounded-control border-strong bg-background text-foreground w-full border px-3 py-2 font-sans text-sm",
        "placeholder:text-muted-foreground",
        "focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-900",
        "disabled:bg-muted disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      type={type}
      {...props}
    />
  );
}
