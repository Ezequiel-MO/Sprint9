import { render, screen } from "@testing-library/react";
import HotelMasterForm from "./HotelMasterForm";

beforeEach(() => {
  render(<HotelMasterForm />);
});

describe("Check inputs are functional", () => {
  test("Any checkbox should initially be unchecked", () => {
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });
});
