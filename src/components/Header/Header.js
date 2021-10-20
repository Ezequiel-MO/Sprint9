import {
  HeaderContainer,
  HeaderLeft,
  RegularButton,
  HeaderRight,
} from "./styles";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Button from "../../uicomponents/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserIsSearchingProject,
  SET_UserIsSearchingProject,
} from "../../features/UserIsSearchingProjectSlice";

const Header = () => {
  const dispatch = useDispatch();
  const userIsSearchingProject = useSelector(selectUserIsSearchingProject);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <RegularButton aria-label='menu'>
          <Icon icon='bytesize:menu' color='#ea5933' width='30' />
        </RegularButton>
        <Link to='/'>
          <img src={logo} alt='company-logo' />
        </Link>
        <Button
          onClick={() => dispatch(SET_UserIsSearchingProject(true))}
          disabled={userIsSearchingProject}
        >
          BEM20210047
          <span>
            <Icon icon='mdi:chevron-down' color='#ea5933' width='24' />
          </span>
        </Button>
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
