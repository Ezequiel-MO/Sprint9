import {
  HeaderContainer,
  HeaderLeft,
  RegularButton,
  HeaderRight,
} from "./styles";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import ProjectButton from "./ProjectButton/ProjectButton.js";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <RegularButton aria-label='menu'>
          <Icon icon='bytesize:menu' color='#ea5933' width='30' />
        </RegularButton>
        <Link to='/'>
          <img src={logo} alt='company-logo' />
        </Link>
        <ProjectButton />
      </HeaderLeft>
      <HeaderRight>
        <Link to='/login' data-testid='avatar'>
          <Icon icon='whh:avatar' color='#ea5933' width='48' />
        </Link>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
