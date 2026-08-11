import { NavLink, Outlet } from "react-router";

export function RootLayout() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-semibold underline" : "text-muted-foreground";
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col font-sans">
      <header className="border-border border-b p-4">
        <nav className="flex gap-4">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={navClass}>
            Dashboard
          </NavLink>
          <NavLink to="/style-guide" className={navClass}>
            Style Guide
          </NavLink>
        </nav>
      </header>

      <Outlet />

      <footer className="border-border-strong border-t p-4">
        {currentYear}
      </footer>
    </div>
  );
}
