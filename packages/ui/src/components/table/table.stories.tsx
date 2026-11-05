import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../badge/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const meta = {
  title: "Components/Table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Indeks</TableHead>
          <TableHead>Nazwa</TableHead>
          <TableHead className="text-right">Stan</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>4933479862</TableCell>
          <TableCell>M18 FPD3-502X</TableCell>
          <TableCell className="text-right tabular-nums">12</TableCell>
          <TableCell><Badge variant="solid">Zsynchronizowany</Badge></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4932479578</TableCell>
          <TableCell>Wiertło SDS-Plus 8 mm</TableCell>
          <TableCell className="text-right tabular-nums">0</TableCell>
          <TableCell><Badge variant="outline">Brak stanu</Badge></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Empty: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Indeks</TableHead>
          <TableHead>Nazwa</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableEmpty colSpan={2}>Brak wyników.</TableEmpty>
      </TableBody>
    </Table>
  ),
};
