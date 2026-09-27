import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <main className="bg-background text-foreground flex flex-1 flex-col items-start justify-center gap-4 p-8 font-sans">
      <p className="text-muted-foreground text-sm font-medium">404</p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground max-w-prose text-sm">
        The page you requested does not exist or may have been moved.
      </p>
      <Link
        to="/"
        className="text-foreground mt-2 text-sm font-medium underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </main>
  );
}
