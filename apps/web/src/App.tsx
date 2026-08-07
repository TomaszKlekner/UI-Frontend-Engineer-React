import {
  Button,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  UI_PACKAGE_NAME,
} from "@repo/ui";

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

      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-6">Edit profile</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle className="text-lg font-semibold">
            Edit profile
          </DialogTitle>

          <DialogDescription className="text-muted-foreground mt-1 text-sm">
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>

          <fieldset className="mt-4">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="ml-4 border-b"
              name="name"
              type="text"
              defaultValue="John Doe"
            />
          </fieldset>
          <fieldset className="mt-2">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              className="ml-4 border-b"
              name="username"
              type="text"
              defaultValue="@jdoe"
            />
          </fieldset>
          <div className="mt-4 flex justify-between gap-2">
            <DialogClose asChild>
              <Button>Save changes</Button>
            </DialogClose>

            <DialogClose asChild>
              <Button className="border-black" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}

export default App;
