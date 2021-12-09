import { render, screen } from "@testing-library/react";
import { checkForDuplicates } from "../utils/utils";
import ProjectLog from "./ProjectLog";
import { Provider } from "react-redux";
import store from "../../../app/store";
import { BrowserRouter as Router } from "react-router-dom";

const MockProjectLog = () => {
  return (
    <Provider store={store}>
      <Router>
        <ProjectLog />
      </Router>
    </Provider>
  );
};

describe("Project Log Form", () => {
  render(<MockProjectLog />);
  test("alert should not show up before submitting the form", () => {
    const nullAlert = screen.queryByText(
      /Gaps found - please fill in all fields/i
    );
    expect(nullAlert).not.toBeInTheDocument();
  });
});

describe("checks if the string is already contained in the array", () => {
  test("if the string is already contained in the array, returns true", () => {
    const array = ["a", "b", "c"];
    const string = "a";
    const result = checkForDuplicates(string, array);
    expect(result).toBe(true);
  });

  test("if the string is not contained in the array, returns false", () => {
    const array = ["a", "b", "c"];
    const string = "d";
    const result = checkForDuplicates(string, array);
    expect(result).toBe(false);
  });
});
