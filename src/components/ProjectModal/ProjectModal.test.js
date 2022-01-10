import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import ProjectModal from "./ProjectModal";

/* const MockProjectModal = () => {
  return (
    <Provider store={store}>
      <ProjectModal />
    </Provider>
  );
};

beforeEach(() => render(<MockProjectModal />));
 */
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

  it("should render a button to open project", () => {
    const btnEl = screen.queryByRole("button", { name: /Open/i });
    expect(btnEl).toBeInTheDocument();
  });
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
    const btnEl = screen.getByTestId(/search/i);
    fireEvent.change(inputEl, { target: { value: "BMM20210124" } });
    fireEvent.click(btnEl);
    expect(inputEl.value).toBe("");
  });
});
