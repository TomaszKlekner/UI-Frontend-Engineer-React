import { Button, Checkbox, UI_PACKAGE_NAME } from "@repo/ui";

function App() {
  return (
    <main className="bg-background text-foreground min-h-screen p-8 font-sans">
      <h1 className="text-foreground mb-4 text-2xl font-semibold">
        Home Page: {UI_PACKAGE_NAME}
      </h1>

      <Button>Primary</Button>

      <Button
        onClick={() => alert("Secondary")}
        className="ml-4 border-black"
        variant="secondary"
      >
        Secondary
      </Button>

      <Button className="ml-4" disabled>
        Disabled
      </Button>

      <label
        htmlFor="terms"
        className="mt-6 flex cursor-pointer items-center gap-2 text-sm"
      >
        <Checkbox id="terms" />
        Accept terms
      </label>
    </main>
  );
}

export default App;
