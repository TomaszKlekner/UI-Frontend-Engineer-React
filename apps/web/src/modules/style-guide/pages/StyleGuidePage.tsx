import {
  Button,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Input,
  UI_PACKAGE_NAME,
} from "@repo/ui";

export function StyleGuide() {
  return (
    <main className="bg-background text-foreground flex-1 p-8 font-sans">
      <h1 className="text-foreground mb-4 text-2xl font-semibold">
        Style Guide: {UI_PACKAGE_NAME}
      </h1>

      <section className="border-border space-y-3 border-t py-6">
        <h2 className="text-lg font-medium">Button</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <section className="border-border space-y-3 border-t py-6">
        <h2 className="text-lg font-medium">Checkbox</h2>
        <label
          htmlFor="terms"
          className="flex cursor-pointer items-center gap-2 text-sm"
        >
          <Checkbox id="terms" />
          Accept terms
        </label>
      </section>

      <section className="border-border space-y-3 border-t py-6">
        <h2 className="text-lg font-medium">Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Edit profile</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogTitle className="text-lg font-semibold">
              Edit profile
            </DialogTitle>

            <DialogDescription className="text-muted-foreground mt-1 text-sm">
              Make changes to your profile here. Click save when you&apos;re
              done.
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
      </section>

      <section className="border-border space-y-3 border-t py-6">
        <h2 className="text-lg font-medium">Input</h2>
        <Input />
      </section>
    </main>
  );
}
