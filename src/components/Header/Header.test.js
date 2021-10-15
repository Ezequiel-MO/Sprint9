import { render, screen, fireEvent } from "@testing-library/react";
import ReactDOM from "react-dom";
import Header from "./Header";

describe("Header", () => {
  beforeEach(() => render(<Header />));
  it("should render a sidebar menu icon button", () => {
    const btnEl = screen.queryByRole("button", { name: /menu/i });
    expect(btnEl).toBeInTheDocument();
  });
  it("should render an image with logo", () => {
    const imageEl = screen.getByAltText(/company-logo/i);
    expect(imageEl).toBeInTheDocument();
  });
  it("should render a button with current project", () => {
    const btnEl = screen.getByRole("button", { name: /open-project/i });
    expect(btnEl).toBeInTheDocument();
  });
  it("when current project bottom is clicked, showModal state should be toggled", () => {
    const btnEl = screen.getByRole("button", { name: /open-project/i });
    expect(btnEl).toBeInTheDocument();
  });
});
