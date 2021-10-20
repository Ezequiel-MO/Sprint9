import Input from "../../uicomponents/Input/Input";
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
import PLList from "./PLList/PLLists";

const ProjectLog = () => {
  const [projectInputData, setProjectInputData] = useState({
    code: "",
    accountManager: "",
    groupName: "",
    groupLocation: "",
    arrivalDay: "",
    departureDay: "",
    clientCo: "",
    clientAccManager: "",
  });

  const {
    code,
    accountManager,
    groupName,
    groupLocation,
    arrivalDay,
    departureDay,
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
          <Input
            type='text'
            placeholder='Write Project Code'
            name='code'
            value={code}
            onChange={handleChange}
          />
          <Input
            type='text'
            placeholder='Account Manager'
            name='accountManager'
            value={accountManager}
            onChange={handleChange}
          />
        </ProjectDetails>
        <GroupDetails>
          <Input
            type='text'
            placeholder='Group Name'
            name='groupName'
            value={groupName}
            onChange={handleChange}
          />

          <Input
            type='text'
            placeholder='Location'
            name='groupLocation'
            value={groupLocation}
            onChange={handleChange}
          />

          <GroupDates>
            <Input
              type='date'
              placeholder='Arrival date'
              name='arrivalDay'
              value={arrivalDay}
              onChange={handleChange}
            />
            <Input
              type='date'
              placeholder='Departure date'
              name='departureDay'
              value={departureDay}
              onChange={handleChange}
            />
          </GroupDates>
        </GroupDetails>
        <ClientDetails>
          <Input
            type='text'
            placeholder='Client company'
            name='clientCo'
            value={clientCo}
            onChange={handleChange}
          />
          <Input
            type='text'
            placeholder='Client Acc. Exec'
            name='clientAccManager'
            value={clientAccManager}
            onChange={handleChange}
          />
        </ClientDetails>
      </ProjectConfiguration>
      <ProjectResults>
        <PLList data={projectInputData} />
        <StyledButton type='submit'>Save</StyledButton>
      </ProjectResults>
    </ProjectLogContainer>
  );
};

export default ProjectLog;
