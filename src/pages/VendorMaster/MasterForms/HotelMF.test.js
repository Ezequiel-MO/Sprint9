import { render, screen, fireEvent } from "@testing-library/react";
import HotelMasterForm from "./HotelMasterForm";

beforeEach(() => {
  render(<HotelMasterForm />);
});

describe("Check inputs are functional", () => {
  test("Handicapped checkbox should initially be unchecked, and checked when clicked", () => {
    const checkbox = screen.getByRole("checkbox", {
      name: "Wheel chair friendly?",
    });
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
