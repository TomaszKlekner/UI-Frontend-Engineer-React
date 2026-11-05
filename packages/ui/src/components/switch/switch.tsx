import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/cn";

// On/off switch: native <button role="switch"> (Space / Enter toggle, aria-checked for screen readers).
export function Switch({
  checked,
  onCheckedChange,
  label,
  className,
  disabled,
  ...props
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  /** Visible label next to the switch (also its accessible name). */
  label?: ReactNode;
}) {
  return (
    <label className={cn("inline-flex cursor-pointer items-center gap-2 font-sans text-sm text-foreground", disabled && "cursor-not-allowed opacity-50", className)}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onCheckedChange(!checked)}
        className={cn(
          "relative m-0 inline-flex h-5 min-h-0 w-9 shrink-0 cursor-pointer items-center rounded-full border-0 p-0",
          "transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed",
          checked ? "bg-gray-700" : "bg-gray-300",
        )}
        {...props}
      >
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none block size-4 rounded-full bg-white shadow-[0_1px_2px_rgb(9_9_11/0.25)]",
            "transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
            checked ? "translate-x-[1.125rem]" : "translate-x-0.5",
          )}
        />
      </button>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
