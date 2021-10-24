import { StyledAutoCompleteInput } from "./styles";

const AutoCompleteInput = ({ type, value, name, onChange, placeholder }) => {
  return (
    <StyledAutoCompleteInput
      data-testid='generic-input'
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default AutoCompleteInput;
