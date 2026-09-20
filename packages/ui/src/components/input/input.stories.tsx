import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

const meta = {
  title: "Components/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    id: "email",
    placeholder: "your@example.com",
  },
  render: (args) => (
    <label
      htmlFor={args.id}
      className="flex flex-col gap-1 font-sans text-sm text-foreground"
    >
      Email
      <Input {...args} />
    </label>
  ),
};

export const TextDisabled: Story = {
  args: { id: "email", placeholder: "your@example.com", disabled: true },
  render: (args) => (
    <label
      htmlFor={args.id}
      className="flex flex-col gap-1 font-sans text-sm text-foreground"
    >
      Email
      <Input {...args} />
    </label>
  ),
};
