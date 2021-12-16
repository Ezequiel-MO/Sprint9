import Input from "../../../uicomponents/Input/Input";
import {
  ProjectLogContainer,
  ProjectConfiguration,
  GroupContainer,
  ProjectResults,
} from "./styles";
import PLList from "./PLList/PLLists";
import SaveButton from "../../../uicomponents/SaveButton/SaveButton";
import ProjectLogLogic from "./ProjectLogLogic";
import DialogBox from "../../../uicomponents/dialogBox/DialogBox";

const ProjectLog = () => {
  const {
    handleChange,
    handleSubmit,
    projectFormIsValid,
    projectInputData,
    dialogMessage,
  } = ProjectLogLogic();

  const {
    code,
    accountManager,
    groupName,
    groupLocation,
    arrivalDay,
    departureDay,
    nrPax,
    clientCo,
    clientAccManager,
  } = projectInputData;

  return (
    <>
      <ProjectLogContainer onSubmit={handleSubmit}>
        <ProjectConfiguration>
          <GroupContainer>
            <legend>
              <h4>About the Project</h4>
            </legend>
            <Input
              type='text'
              required
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
            <Input
              type='text'
              placeholder='Location'
              name='groupLocation'
              value={groupLocation}
              onChange={handleChange}
            />
          </GroupContainer>
          <GroupContainer>
            <legend>
              <h4>Dates and Pax expected</h4>
            </legend>
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
            <Input
              type='number'
              placeholder='Number of Pax'
              name='nrPax'
              value={nrPax}
              onChange={handleChange}
            />
          </GroupContainer>
          <GroupContainer>
            <legend>
              <h4>Client Details</h4>
            </legend>
            <Input
              type='text'
              placeholder='Group Name'
              name='groupName'
              value={groupName}
              onChange={handleChange}
            />
            <Input
              type='text'
              placeholder='Client company'
              name='clientCo'
              value={clientCo}
              onChange={handleChange}
            />
            <Input
              type='text'
              placeholder='Client Acc Exec'
              name='clientAccManager'
              value={clientAccManager}
              onChange={handleChange}
            />
          </GroupContainer>
          <ProjectResults validForm={projectFormIsValid}>
            <PLList data={projectInputData} />
            <SaveButton type='submit' text='Save and continue' />
          </ProjectResults>
        </ProjectConfiguration>
      </ProjectLogContainer>
      {dialogMessage && <DialogBox message={dialogMessage} />}
    </>
  );
};

export default ProjectLog;
