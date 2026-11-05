import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Switch } from "./switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { checked: false, onCheckedChange: () => {} },
  render: () => {
    const [on, setOn] = useState(false);
    return <Switch checked={on} onCheckedChange={setOn} label="Automatyczne przypomnienia" />;
  },
};
