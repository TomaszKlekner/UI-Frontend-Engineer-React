import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
