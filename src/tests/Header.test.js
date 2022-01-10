import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../app/store";

const MockHeader = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
};

describe("Code Button", () => {
  it("should initially be enabled", () => {
    render(<MockHeader />);
    const btnEl = screen.getByRole("button", { name: /code/i });
    expect(btnEl).toBeEnabled();
  });
  it("if the button is clicked, userIsSearchingProject should turn true and the button should be disabled", () => {
    render(<MockHeader />);
    const btnEl = screen.getByRole("button", { name: /your code here/i });
    fireEvent.click(btnEl);
    const { userIsSearchingProject } = store.getState().userIsSearchingProject;
    expect(userIsSearchingProject).toBe(true);
    expect(btnEl).toBeDisabled();
  });
  it("the button is disabled, it has a grey background color", () => {
    render(<MockHeader />);
    const btnEl = screen.getByRole("button", { name: /your code here/i });
    //if btnEl is disabled, it should have a grey background color
    const { userIsSearchingProject } = store.getState().userIsSearchingProject;
    expect(userIsSearchingProject).toBe(true);
    expect(btnEl).toHaveStyle("background-color: #808080");
  });

  it("the button textContent should be the active code", () => {
    render(<MockHeader />);
    const btnEl = screen.getByRole("button", { name: /current code in use/i });
    fireEvent.click(btnEl);
    const { activeCode } = store.getState().activeCode;
    expect(btnEl).toHaveTextContent(activeCode);
  });
});