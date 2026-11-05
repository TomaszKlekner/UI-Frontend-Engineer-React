import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stat } from "./stat";

const meta = {
  title: "Components/Stat",
  component: Stat,
} satisfies Meta<typeof Stat>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Grid: Story = {
  args: { label: "", value: "" },
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Stat label="Zamówienia" value="128" hint="listopad" />
      <Stat label="Bez mapowania" value="3" hint="wymaga uwagi" emphasis />
    </div>
  ),
};
