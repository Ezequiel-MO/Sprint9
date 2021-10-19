import {
  PMContainer,
  PMHeader,
  PMSearchForm,
  Input,
  StyledIcon,
  PMFilters,
  OpenCancelButtons,
} from "./styles.js";
import { useState } from "react";
import PMProjectList from "./PMProjectList/PMProjectList.js";
import { Icon } from "@iconify/react";
import { SET_UserIsSearchingProject } from "../../features/UserIsSearchingProjectSlice.js";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Button from "../../uicomponents/Button/Button.js";

const ProjectModal = () => {
  const [project, setProject] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setProject("");
    console.log("project=>", project);
  };

  const handleClick = () => {
    dispatch(SET_UserIsSearchingProject(false));
    history.push("/project-form");
  };
  return (
    <PMContainer>
      <PMHeader>
        <h3>Select a project</h3>
        <Button onClick={handleClick}>
          <span>
            <Icon
              icon='fluent:add-12-filled'
              color='#000'
              width='24'
              inline={true}
            />
          </span>
          New Project
        </Button>
      </PMHeader>
      <PMSearchForm onSubmit={handleSubmit}>
        <StyledIcon>
          <Icon
            icon='cil:magnifying-glass'
            color='black'
            width='24'
            inline={true}
          />
        </StyledIcon>
        <Input
          type='text'
          placeholder='Search project'
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />
        <button data-testid='search' type='submit'>
          Search
        </button>
      </PMSearchForm>
      <PMFilters>
        <Button>
          <span>
            <Icon
              icon='mdi:sort-calendar-ascending'
              color='black'
              width='24'
              inline={true}
            />
          </span>
          Sort by Date
        </Button>
        <Button>
          <span>
            <Icon
              icon='ant-design:sort-ascending-outlined'
              color='#000'
              width='24'
              inline={true}
            />
          </span>
          Sort by User
        </Button>
      </PMFilters>
      <PMProjectList />
      <OpenCancelButtons>
        <Button onClick={() => dispatch(SET_UserIsSearchingProject(false))}>
          CANCEL
        </Button>
        <Button>OPEN</Button>
      </OpenCancelButtons>
    </PMContainer>
  );
};

export default ProjectModal;
