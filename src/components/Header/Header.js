import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Button from "../../uicomponents/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserIsSearchingProject,
  SET_UserIsSearchingProject,
} from "../../features/UserIsSearchingProjectSlice";
import { selectActiveCode } from "../../features/ActiveCodeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const userIsSearchingProject = useSelector(selectUserIsSearchingProject);
  const activeCode = useSelector(selectActiveCode);
  const handleClick = () => {
    dispatch(SET_UserIsSearchingProject(true));
  };
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to='/'>
          <img src={logo} alt='company-logo' />
        </Link>
        <Button large onClick={handleClick} disabled={userIsSearchingProject}>
          {activeCode}
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
