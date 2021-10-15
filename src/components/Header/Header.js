import {
  HeaderContainer,
  HeaderLeft,
  RegularButton,
  ProjectButton,
  HeaderRight,
} from "./styles";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <RegularButton aria-label='menu'>
          <Icon icon='bytesize:menu' color='#ea5933' width='30' />
        </RegularButton>
        <img src={logo} alt='company-logo' />
        <ProjectButton aria-label='open-project'>
          BEM20210047
          <span>
            <Icon icon='mdi:chevron-down' color='#ea5933' width='24' />
          </span>
        </ProjectButton>
      </HeaderLeft>
      <HeaderRight>
        <Icon
          icon='whh:avatar'
          color='#ea5933'
          width='48'
          data-testid='avatar'
        />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
