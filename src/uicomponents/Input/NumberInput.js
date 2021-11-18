import { ScNumberInputContainer, ScNumberInput } from "./styles";

const NumberInput = ({ value, name, onChange, placeholder }) => {
  return (
    <ScNumberInputContainer>
      <label>{placeholder}</label>
      <ScNumberInput
        data-testid='number-input'
        name={name}
        value={value}
        type='number'
        onChange={onChange}
      />
    </ScNumberInputContainer>
  );
};

export default NumberInput;
