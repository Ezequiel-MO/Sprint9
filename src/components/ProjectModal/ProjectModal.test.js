import { render, screen } from "@testing-library/react";
import ProjectModal from "./ProjectModal";

describe("Project Modal", () => {
  beforeEach(() => render(<ProjectModal />));
  it("should render a button to create a new project", () => {
    const btnEl = screen.queryByRole("button", { name: /new project/i });
    expect(btnEl).toBeInTheDocument();
  });
  it("should render an input to search a project", () => {
    const inputEl = screen.getByPlaceholderText(/Search project/i);
    expect(inputEl).toBeInTheDocument();
  });
  it("should render a button that sorts list by Date", () => {
    const btnEl = screen.queryByRole("button", { name: /Sort by Date/i });
    expect(btnEl).toBeInTheDocument();
  });
  it("should render a button that sorts list by User alphabetically", () => {
    const btnEl = screen.queryByRole("button", { name: /Sort by User/i });
    expect(btnEl).toBeInTheDocument();
  });
  it("should render a table with project list", () => {});
  it("should render a radiobox to select project", () => {});
  it("should render a button to cancel selection", () => {});
  it("should render a button to open project", () => {});
});
