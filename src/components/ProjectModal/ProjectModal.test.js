import { render, screen, fireEvent } from "@testing-library/react";
import ProjectModal from "./ProjectModal";

beforeEach(() => render(<ProjectModal />));

describe("Project Modal", () => {
  it("should render a button to create a new project", () => {
    const btnEl = screen.queryByRole("button", { name: /new project/i });
    expect(btnEl).toBeInTheDocument();
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

describe("Search Project input", () => {
  it("should render an input to search a project", () => {
    const inputEl = screen.getByPlaceholderText(/Search project/i);
    expect(inputEl).toBeInTheDocument();
  });
  it("should be able to type into input", () => {
    const inputEl = screen.getByPlaceholderText(/Search project/i);
    fireEvent.change(inputEl, { target: { value: "BMM20210124" } });
    expect(inputEl.value).toBe("BMM20210124");
  });
  it("input should be empty once the button has been clicked", () => {
    const inputEl = screen.getByPlaceholderText(/Search project/i);
    const btnEl = screen.getByRole("button", { name: /search/i });
    fireEvent.change(inputEl, { target: { value: "BMM20210124" } });
    fireEvent.click(btnEl);
    expect(inputEl.value).toBe("");
  });
});
