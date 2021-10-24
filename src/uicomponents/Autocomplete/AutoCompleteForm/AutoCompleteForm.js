import { StyledAutoCompleteForm } from "./styles";
import { Icon } from "@iconify/react";

const AutoCompleteForm = ({ icon, iconWidth, placeholder, value }) => {
  return (
    <StyledAutoCompleteForm>
      <label for='from'>
        <Icon icon={icon} width={iconWidth} />
      </label>
      <input type='search' placeholder={placeholder} />
      <input type='submit' value={value} />
    </StyledAutoCompleteForm>
  );
};

export default AutoCompleteForm;
