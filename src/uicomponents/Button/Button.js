import { StyledButton } from "../../generalStyles";

const Button = ({ children, onClick, disabled = false, ...rest }) => {
  return (
    <StyledButton
      data-testid='generic-button'
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
