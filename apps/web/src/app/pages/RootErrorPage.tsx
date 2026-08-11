import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export function RootErrorPage() {
  const error = useRouteError();

  const title = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : "Something went wrong";

  const message = isRouteErrorResponse(error)
    ? typeof error.data === "string"
      ? error.data
      : "This page could not be loaded."
    : error instanceof Error
      ? error.message
      : "Unknown error";

  return (
    <main className="bg-background text-foreground flex flex-1 flex-col items-start justify-center gap-4 p-8 font-sans">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-muted-foreground max-w-prose text-sm">{message}</p>
      <Link
        to="/"
        className="text-foreground mt-2 text-sm font-medium underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </main>
  );
}
