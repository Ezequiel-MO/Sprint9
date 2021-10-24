import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("should render an input", () => {
    const { getByTestId } = render(<Input />);
    const inputEl = getByTestId(/generic-input/i);
    expect(inputEl).toBeInTheDocument();
  });
  it("should call funtion on onChange", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(<Input onChange={handleChange} />);
    const inputEl = getByTestId(/generic-input/i);
    fireEvent.change(inputEl, { target: { value: "hola" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
