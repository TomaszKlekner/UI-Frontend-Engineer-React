import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field } from "../field/field";
import { Select } from "./select";

const meta = {
  title: "Components/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithField: Story = {
  render: () => (
    <Field id="role" label="Rola" hint="Admin może zapraszać użytkowników.">
      <Select id="role" defaultValue="Operator">
        <option value="Operator">Operator</option>
        <option value="Admin">Admin</option>
      </Select>
    </Field>
  ),
};
