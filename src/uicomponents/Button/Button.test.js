import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should render a button", () => {
    const { getByTestId } = render(<Button />);
    const btnEl = getByTestId(/generic-button/i);
    expect(btnEl).toBeInTheDocument();
  });
  it("when cancel button is clicked, it should fire a click event and call a function", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button onClick={onClick} />);
    const btnEl = getByTestId(/generic-button/i);
    fireEvent.click(btnEl);
    expect(onClick).toHaveBeenCalled();
  });
});
