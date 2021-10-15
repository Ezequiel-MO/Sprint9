import { render, screen, fireEvent } from "@testing-library/react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

const MockHeader = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};

beforeEach(() => render(<MockHeader />));

describe("Menu Icon", () => {
  it("should render a sidebar menu icon button", () => {
    const btnEl = screen.queryByRole("button", { name: /menu/i });
    expect(btnEl).toBeInTheDocument();
  });
});

describe("Project Button", () => {
  it("should render a button with current project", () => {
    const btnEl = screen.getByRole("button", { name: /open-project/i });
    expect(btnEl).toBeInTheDocument();
  });
  /*  it("when clicked, the button should become disabled", () => {
    const btnEl = screen.getByRole("button", { name: /open-project/i });
    fireEvent.click(btnEl);
    expect(btnEl).toBeDisabled();
  }); */
});

it("should render an image with logo", () => {
  const imageEl = screen.getByAltText(/company-logo/i);
  expect(imageEl).toBeInTheDocument();
});

it("should render an Avatar that links to the login page", () => {
  const linkEl = screen.getByTestId(/avatar/i);
  expect(linkEl).toBeInTheDocument();
});
