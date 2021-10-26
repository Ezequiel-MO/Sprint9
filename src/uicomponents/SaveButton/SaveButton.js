import { StyledSaveButton } from "./styles.js";

const SaveButton = ({ text, type = "button", ...rest }) => {
  return (
    <StyledSaveButton type={type} {...rest}>
      <span>{text}</span>
      <svg width='13px' height='10px' viewBox='0 0 13 10'>
        <path d='M1,5 L11,5'></path>
        <polyline points='8 1 12 5 8 9'></polyline>
      </svg>
    </StyledSaveButton>
  );
};

export default SaveButton;
