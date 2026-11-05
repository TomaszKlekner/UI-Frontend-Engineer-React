import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/button";
import { PageHeader } from "./page-header";

const meta = {
  title: "Components/PageHeader",
  component: PageHeader,
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithActions: Story = {
  args: {
    title: "Użytkownicy",
    description: "Konta panelu i role.",
    actions: <Button>Zaproś</Button>,
  },
};
