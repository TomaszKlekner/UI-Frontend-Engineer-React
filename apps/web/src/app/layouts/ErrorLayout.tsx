import { Outlet } from "react-router";

export function ErrorLayout() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col font-sans">
      <Outlet />
    </div>
  );
}
