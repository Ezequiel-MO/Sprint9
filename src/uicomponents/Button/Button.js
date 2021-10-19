import { StyledButton } from "../../generalStyles";

const Button = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton data-testid='generic-button' onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
