import { StyledButton } from "../../generalStyles";

const Button = ({
  children,
  onClick,
  disabled = false,
  large = false,
  ...rest
}) => {
  return (
    <StyledButton
      data-testid='generic-button'
      onClick={onClick}
      disabled={disabled}
      large={large}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
