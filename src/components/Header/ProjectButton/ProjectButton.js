import { ProjectButtonContainer } from "./styles";
import { Icon } from "@iconify/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  selectUserIsSearchingProject,
  SET_UserIsSearchingProject,
} from "../../../features/UserIsSearchingProjectSlice";

const ProjectButton = () => {
  const userIsSearchingProject = useSelector(selectUserIsSearchingProject);
  const dispatch = useDispatch();
  return (
    <ProjectButtonContainer
      aria-label='open-project'
      onClick={() => dispatch(SET_UserIsSearchingProject(true))}
      disabled={userIsSearchingProject}
    >
      BEM20210047
      <span>
        <Icon icon='mdi:chevron-down' color='#ea5933' width='24' />
      </span>
    </ProjectButtonContainer>
  );
};

export default ProjectButton;
