import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("must display a Header text", () => {
    render(<Header />);
    expect(screen.queryByText(/I'm the Header/i)).toBeInTheDocument();
  });
});
