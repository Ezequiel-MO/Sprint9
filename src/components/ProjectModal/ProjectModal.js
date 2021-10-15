import {
  PMContainer,
  PMHeader,
  PMSearchInput,
  PMFilters,
  PMTable,
  OpenCancelButtons,
} from "./styles.js";

const ProjectModal = () => {
  return (
    <PMContainer>
      <PMHeader>
        <h3>Select a project</h3>
        <button>+ New Project</button>
      </PMHeader>
      <PMSearchInput>
        <input type='text' placeholder='Search project' />
      </PMSearchInput>
      <PMFilters>
        <button>Sort by Date</button>
        <button>Sort by User</button>
      </PMFilters>
      <PMTable>Table</PMTable>
      <OpenCancelButtons>
        <button>CANCEL</button>
        <button>OPEN</button>
      </OpenCancelButtons>
    </PMContainer>
  );
};

export default ProjectModal;
