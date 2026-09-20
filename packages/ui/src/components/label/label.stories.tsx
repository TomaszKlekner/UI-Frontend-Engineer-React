import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../input/input";
import { Label } from "./label";

const meta = {
  title: "Components/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Email",
  },
  render: (args) => <Label>{args.children}</Label>,
};

export const WithInput: Story = {
  args: { id: "email", children: "Email" },
  render: (args) => (
    <Label htmlFor={args.id}>
      {args.children}
      <Input id={args.id} placeholder="your@example.com" />
    </Label>
  ),
};
