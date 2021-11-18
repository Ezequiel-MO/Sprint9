import { ScNumberInputContainer, ScNumberInput } from "./styles";

const NumberInput = ({ value, name, onChange, placeholder }) => {
  return (
    <ScNumberInputContainer>
      <ScNumberInput
        data-testid='number-input'
        name={name}
        value={value}
        type='number'
        onChange={onChange}
      />
      <label htmlFor={name}>{placeholder}</label>
    </ScNumberInputContainer>
  );
};

export default NumberInput;
