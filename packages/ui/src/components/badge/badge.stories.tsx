import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="solid">Wysłane</Badge>
      <Badge variant="subtle">W toku</Badge>
      <Badge variant="outline">Do sprawdzenia</Badge>
      <Badge variant="muted">Pominięte</Badge>
    </div>
  ),
};
