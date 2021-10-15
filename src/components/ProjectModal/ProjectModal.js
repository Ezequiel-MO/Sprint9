import {
  PMContainer,
  PMHeader,
  PMSearchForm,
  PMFilters,
  PMTable,
  OpenCancelButtons,
} from "./styles.js";
import { useState } from "react";

const ProjectModal = ({ setShowModal }) => {
  const [project, setProject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setProject("");
    console.log("project=>", project);
  };
  return (
    <PMContainer>
      <PMHeader>
        <h3>Select a project</h3>
        <button>+ New Project</button>
      </PMHeader>
      <PMSearchForm onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search project'
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />
        <button type='submit'>Search</button>
      </PMSearchForm>
      <PMFilters>
        <button>Sort by Date</button>
        <button>Sort by User</button>
      </PMFilters>
      <PMTable>Table</PMTable>
      <OpenCancelButtons>
        <button onClick={() => setShowModal(false)}>CANCEL</button>
        <button>OPEN</button>
      </OpenCancelButtons>
    </PMContainer>
  );
};

export default ProjectModal;
