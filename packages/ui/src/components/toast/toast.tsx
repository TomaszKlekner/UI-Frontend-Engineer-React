import * as ToastPrimitive from "@radix-ui/react-toast";
import { useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import { cn } from "../../lib/cn";

// Imperative toasts: call `toast({...})` anywhere (e.g. when a background task finishes);
// render <Toaster /> once near the app root. Store = tiny external store (no context needed).

export type ToastVariant = "default" | "strong";

export type ToastInput = {
  title: ReactNode;
  description?: ReactNode;
  /** "strong" = error / needs attention (monochrome: dark border, stays longer). */
  variant?: ToastVariant;
  /** ms; default 5 s (strong: 8 s). */
  duration?: number;
};

type ToastItem = ToastInput & { id: number; open: boolean };

let items: ToastItem[] = [];
let nextId = 1;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function setItems(next: ToastItem[]) {
  items = next;
  emit();
}

export function toast(input: ToastInput): number {
  const id = nextId++;
  // Max 4 visible — the oldest leaves first.
  setItems([...items.slice(-3), { ...input, id, open: true }]);
  return id;
}

export function dismissToast(id: number) {
  setItems(items.map((t) => (t.id === id ? { ...t, open: false } : t)));
}

function remove(id: number) {
  setItems(items.filter((t) => t.id !== id));
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const getSnapshot = () => items;
const getServerSnapshot = (): ToastItem[] => [];

export function Toaster({ className, style }: { className?: string; style?: CSSProperties }) {
  const list = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <ToastPrimitive.Provider swipeDirection="right" label="Powiadomienia">
      {list.map((t) => (
        <ToastPrimitive.Root
          key={t.id}
          open={t.open}
          duration={t.duration ?? (t.variant === "strong" ? 8000 : 5000)}
          type={t.variant === "strong" ? "foreground" : "background"}
          onOpenChange={(open) => {
            if (!open) {
              dismissToast(t.id);
              // Let the exit animation finish before unmounting.
              window.setTimeout(() => remove(t.id), 200);
            }
          }}
          className={cn(
            "pointer-events-auto relative flex w-full items-start gap-3 rounded-card border bg-surface px-4 py-3 font-sans shadow-[0_8px_24px_rgb(9_9_11/0.12)]",
            "data-[state=open]:animate-toast-in data-[state=closed]:animate-toast-out",
            "data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=end]:animate-toast-out",
            t.variant === "strong"
              ? "border-state-strong border-l-4"
              : "border-border",
          )}
        >
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <ToastPrimitive.Title className="text-sm font-semibold text-foreground">
              {t.title}
            </ToastPrimitive.Title>
            {t.description ? (
              <ToastPrimitive.Description className="text-sm text-muted-foreground">
                {t.description}
              </ToastPrimitive.Description>
            ) : null}
          </div>
          <ToastPrimitive.Close
            aria-label="Zamknij"
            className="-m-1 cursor-pointer rounded-control border-0 bg-transparent p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </ToastPrimitive.Close>
        </ToastPrimitive.Root>
      ))}
      <ToastPrimitive.Viewport
        className={cn(
          // Bottom-right; leaves room for the task dock below (bottom offset set by the app via className).
          "fixed right-4 bottom-4 z-[1000] m-0 flex w-[min(24rem,calc(100vw-2rem))] list-none flex-col gap-2 p-0 outline-none",
          className,
        )}
        style={style}
      />
    </ToastPrimitive.Provider>
  );
}
