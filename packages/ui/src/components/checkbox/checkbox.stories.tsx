import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { checked: false, disabled: false },
};

export const Checked: Story = {
  args: { checked: true, disabled: false },
};

export const Disabled: Story = {
  args: { checked: false, disabled: true },
};

export const WithLabel: Story = {
  args: {
    id: "terms",
    defaultChecked: false,
    children: "Accept terms",
  },
  render: ({ children, ...args }) => (
    <label
      htmlFor={args.id}
      className="flex items-center cursor-pointer gap-2 font-sans text-sm text-foreground"
    >
      <Checkbox {...args} />
      {children}
    </label>
  ),
};
