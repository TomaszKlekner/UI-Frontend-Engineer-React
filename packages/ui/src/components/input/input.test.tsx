import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./input";

describe("Input", () => {
  it("renders the input", () => {
    render(<Input aria-label="Email" />);

    expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
  });

  it("renders disabled input", () => {
    render(<Input aria-label="Email" disabled />);

    expect(screen.getByRole("textbox", { name: "Email" })).toBeDisabled();
  });
});
