import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/button";
import { toast, Toaster } from "./toast";

const meta = {
  title: "Components/Toast",
  component: Toaster,
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button
        onClick={() =>
          toast({ title: "Import zakończony", description: "1 248 pozycji z WAPRO." })
        }
      >
        Sukces
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast({
            title: "Import nie powiódł się",
            description: "Brak połączenia z WAPRO.",
            variant: "strong",
          })
        }
      >
        Błąd
      </Button>
      <Toaster />
    </div>
  ),
};
