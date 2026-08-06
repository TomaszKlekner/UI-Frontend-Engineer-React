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
        "flex cursor-pointer size-4 shrink-0 items-center justify-center rounded-sm border border-strong bg-background",
        "focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-900",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:border-gray-900 data-[state=checked]:bg-gray-900 data-[state=checked]:text-white",
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
          <path d="M2.5 6.5 5 9l4.5-6" />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
