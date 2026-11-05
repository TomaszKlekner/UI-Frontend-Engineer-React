import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "Components/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Synchronizacja stanów</CardTitle>
        <CardDescription>Ostatni przebieg 5 min temu</CardDescription>
      </CardHeader>
      <CardContent>1 248 produktów, 12 zmian.</CardContent>
      <CardFooter>
        <Button variant="outline">Szczegóły</Button>
        <Button>Uruchom</Button>
      </CardFooter>
    </Card>
  ),
};
