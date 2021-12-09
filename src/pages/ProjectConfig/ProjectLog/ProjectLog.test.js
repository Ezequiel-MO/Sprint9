import { render, screen, within } from "@testing-library/react";
import { checkForDuplicates } from "../utils/utils";
import ProjectLog from "./ProjectLog";
import { Provider } from "react-redux";
import store from "../../../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import user from "@testing-library/user-event";

const MockProjectLog = () => {
  return (
    <Provider store={store}>
      <Router>
        <ProjectLog />
      </Router>
    </Provider>
  );
};

const getCode = () => {
  return screen.getByPlaceholderText(/write project code/i);
};

const getAccMngr = () => {
  return screen.getByPlaceholderText(/Account Manager/i);
};
const getGroupLocation = () => {
  return screen.getByPlaceholderText(/Location/i);
};

const getArrivalDate = () => {
  return screen.getByPlaceholderText(/Arrival Date/i);
};

const getDepartureDate = () => {
  return screen.getByPlaceholderText(/Departure Date/i);
};

const getNumberOfPax = () => {
  return screen.getByPlaceholderText(/Number of Pax/i);
};

const getGroupName = () => {
  return screen.getByPlaceholderText(/Group Name/i);
};

const getClientCompany = () => {
  return screen.getByPlaceholderText(/Client Company/i);
};

const getClientAccExec = () => {
  return screen.getByPlaceholderText(/Client Acc Exec/i);
};

describe("onSubmit is called when all fields pass validation", () => {
  render(<MockProjectLog />);
  user.type(getCode(), "BEM20210020");
  user.type(getAccMngr(), "John Doe");
  user.type(getGroupLocation(), "Brisbane");
  user.type(getArrivalDate(), "2020-01-01");
  user.type(getDepartureDate(), "2020-01-01");
  user.type(getNumberOfPax(), "10");
  user.type(getGroupName(), "Ciscalis");
  user.type(getClientCompany(), "Cisco");
  user.type(getClientAccExec(), "John Doe");

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
