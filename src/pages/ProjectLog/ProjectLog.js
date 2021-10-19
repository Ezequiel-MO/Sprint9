import TextInput from "../../uicomponents/TextInput/TextInput";
import {
  ProjectLogContainer,
  ProjectConfiguration,
  ProjectDetails,
  GroupDetails,
  GroupDates,
  GroupLocation,
  ClientDetails,
  ProjectResults,
} from "./styles";
import { useState } from "react";
import { StyledButton } from "../../generalStyles";

const ProjectLog = () => {
  const [projectInputData, setProjectInputData] = useState({
    code: "",
    accountManager: "",
    groupName: "",
    groupLocation: "",
    clientCo: "",
    clientAccManager: "",
  });

  const {
    code,
    accountManager,
    groupName,
    groupLocation,
    clientCo,
    clientAccManager,
  } = projectInputData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectInputData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("project=>", projectInputData);
  };

  return (
    <ProjectLogContainer onSubmit={handleSubmit}>
      <ProjectConfiguration>
        <ProjectDetails>
          <TextInput
            placeholder='Write Project Code'
            name='code'
            value={code}
            onChange={handleChange}
          />
          <TextInput
            placeholder='Account Manager'
            name='accountManager'
            value={accountManager}
            onChange={handleChange}
          />
        </ProjectDetails>
        <GroupDetails>
          <TextInput
            placeholder='Group Name'
            name='groupName'
            value={groupName}
            onChange={handleChange}
          />
          <GroupDates>
            <input type='date' placeholder='Arrival date' />
            <input type='date' placeholder='Departure Date' />
          </GroupDates>
          <GroupLocation>
            <TextInput
              placeholder='Location'
              name='groupLocation'
              value={groupLocation}
              onChange={handleChange}
            />
          </GroupLocation>
        </GroupDetails>
        <ClientDetails>
          <TextInput
            placeholder='Client company'
            name='clientCo'
            value={clientCo}
            onChange={handleChange}
          />
          <TextInput
            placeholder='Client Acc. Exec'
            name='clientAccManager'
            value={clientAccManager}
            onChange={handleChange}
          />
        </ClientDetails>
      </ProjectConfiguration>
      <ProjectResults>
        <h4>results</h4>
        <StyledButton type='submit'>Save</StyledButton>
      </ProjectResults>
    </ProjectLogContainer>
  );
};

export default ProjectLog;
