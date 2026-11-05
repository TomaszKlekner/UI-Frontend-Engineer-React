import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, AlertDescription, AlertTitle } from "./alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Subtle: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Tryb DryRun</AlertTitle>
      <AlertDescription>Stany są liczone, ale nie wysyłane do sklepu.</AlertDescription>
    </Alert>
  ),
};

export const Strong: Story = {
  render: () => (
    <Alert variant="strong">
      <AlertTitle>Brak połączenia z WAPRO</AlertTitle>
      <AlertDescription>Sprawdź connection string w konfiguracji.</AlertDescription>
    </Alert>
  ),
};
