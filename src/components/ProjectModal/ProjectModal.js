import {
  PMContainer,
  PMHeader,
  PMSearchForm,
  Input,
  StyledIcon,
  OpenCancelButtons,
} from "./styles.js";
import PMProjectList from "./PMProjectList/PMProjectList.js";
import { Icon } from "@iconify/react";
import Button from "../../uicomponents/Button/Button.js";
import useProjectModal from "./useProjectModal.js";

const ProjectModal = ({ listingFormat }) => {
  const {
    handleNewProjectClick,
    handleChange,
    handleSubmit,
    handleCancelClick,
    project,
  } = useProjectModal();
  return (
    <PMContainer listingFormat={listingFormat}>
      <PMHeader>
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
            placeholder='Search project by Code, User or Client ... '
            value={project}
            onChange={handleChange}
          />
          <button data-testid='search' type='submit'>
            Search
          </button>
        </PMSearchForm>
        <Button onClick={handleNewProjectClick}>
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
      <PMProjectList project={project} />
      <OpenCancelButtons listingFormat={listingFormat}>
        <Button onClick={handleCancelClick}>CANCEL</Button>
      </OpenCancelButtons>
    </PMContainer>
  );
};

export default ProjectModal;
