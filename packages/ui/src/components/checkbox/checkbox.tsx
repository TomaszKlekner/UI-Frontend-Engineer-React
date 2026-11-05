import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { type ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/cn";

export type CheckboxProps = ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>;

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "m-0 flex size-4 min-h-0 shrink-0 cursor-pointer items-center justify-center rounded-sm border border-border-strong bg-surface p-0 transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:border-gray-900 data-[state=checked]:bg-gray-900 data-[state=checked]:text-white data-[state=indeterminate]:border-gray-900 data-[state=indeterminate]:bg-gray-900 data-[state=indeterminate]:text-white",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        <svg
          viewBox="0 0 12 12"
          className="size-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          {props.checked === "indeterminate" ? <path d="M3 6h6" /> : <path d="M2.5 6.5 5 9l4.5-6" />}
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
