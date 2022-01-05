import { StyledInput } from "./styles";

const Input = ({ type, value, name, onChange, placeholder, onBlur }) => {
  return (
    <StyledInput
      data-testid='generic-input'
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
