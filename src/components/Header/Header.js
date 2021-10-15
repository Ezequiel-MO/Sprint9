import {
  HeaderContainer,
  HeaderLeft,
  RegularButton,
  ProjectButton,
  HeaderRight,
} from "./styles";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = ({ showModal, setShowModal }) => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <RegularButton aria-label='menu'>
          <Icon icon='bytesize:menu' color='#ea5933' width='30' />
        </RegularButton>
        <Link to='/'>
          <img src={logo} alt='company-logo' />
        </Link>
        <ProjectButton
          aria-label='open-project'
          onClick={() => setShowModal((prevState) => !prevState)}
          disabled={showModal}
        >
          BEM20210047
          <span>
            <Icon icon='mdi:chevron-down' color='#ea5933' width='24' />
          </span>
        </ProjectButton>
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
