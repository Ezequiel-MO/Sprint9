import { render, screen, fireEvent } from "@testing-library/react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../app/store";

const MockHeader = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
};

beforeEach(() => render(<MockHeader />));

describe("Menu Icon", () => {
  it("should render a sidebar menu icon button", () => {
    const btnEl = screen.queryByRole("button", { name: /menu/i });
    expect(btnEl).toBeInTheDocument();
  });
});

it("should render an image with logo", () => {
  const imageEl = screen.getByAltText(/company-logo/i);
  expect(imageEl).toBeInTheDocument();
});

it("should render an Avatar that links to the login page", () => {
  const linkEl = screen.getByTestId(/avatar/i);
  expect(linkEl).toBeInTheDocument();
});
