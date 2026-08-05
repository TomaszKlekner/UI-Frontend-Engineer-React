import { UI_PACKAGE_NAME } from "@repo/ui";

function App() {
  return (
    <main className="bg-background text-foreground min-h-screen p-8 font-sans">
      <h1 className="text-foreground text-2xl font-semibold">
        Home Page: {UI_PACKAGE_NAME}
      </h1>
      <button
        type="button"
        className="rounded-control border-border mt-4 border bg-gray-900 px-4 py-2 text-white"
      >
        Primary
      </button>
    </main>
  );
}

export default App;
