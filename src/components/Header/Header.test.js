import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  beforeEach(() => render(<Header />));
  it("should render a sidebar menu icon button", () => {
    const inputEl = screen.queryByRole("button", { name: /menu/i });
    expect(inputEl).toBeInTheDocument();
  });
  it("should render an image with logo", () => {
    const image = screen.getByAltText(/company-logo/i);
    expect(image).toBeInTheDocument();
  });
  it("should render a button with current project", () => {
    const btnEl = screen.getByRole("button", { name: /open-project/i });
    expect(btnEl).toBeInTheDocument();
  });
});
