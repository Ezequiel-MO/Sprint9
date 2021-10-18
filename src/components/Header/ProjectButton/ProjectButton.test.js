import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../app/store";
import ProjectButton from "./ProjectButton";

const MockProjectButton = () => {
  return (
    <Provider store={store}>
      <ProjectButton />
    </Provider>
  );
};

beforeEach(() => render(<MockProjectButton />));

describe("Project Button", () => {
  it("should render a button", () => {
    const btnEl = screen.getByRole("button", { name: /open-project/i });
    expect(btnEl).toBeInTheDocument();
  });
});
