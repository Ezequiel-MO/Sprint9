import Input from "../../../uicomponents/Input/Input";
import {
  ProjectLogContainer,
  ProjectConfiguration,
  GroupDates,
  GroupContainer,
  ProjectResults,
} from "./styles";
import { useState, useEffect } from "react";
import PLList from "./PLList/PLLists";
import SaveButton from "../../../uicomponents/SaveButton/SaveButton";
import { useDispatch } from "react-redux";
import { SET_ActiveCode } from "../../../features/ActiveCodeSlice";
import { useHistory } from "react-router";
import { baseAPI } from "../../../api/axios";
import { useAxiosFetch } from "../../../hooks/useAxiosFetch";
import { checkForDuplicates } from "../utils/utils";

const ProjectLog = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    data: { projects },
  } = useAxiosFetch("https://cutt-events.herokuapp.com/projects");
  const [projectFormIsValid, setProjectFormIsValid] = useState(false);
  const [projectInputData, setProjectInputData] = useState({
    code: "",
    accountManager: "",
    groupName: "",
    groupLocation: "",
    arrivalDay: "",
    departureDay: "",
    nrPax: null,
    clientCo: "",
    clientAccManager: "",
    hotels: [],
    schedule: [],
  });

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

  useEffect(() => {
    if (projectFormIsValid) {
      const projectFormData = new FormData();
      for (const [key, value] of Object.entries(projectInputData)) {
        projectFormData.append(key, value);
      }
      const postProjectData = () => {
        baseAPI
          .post("/projects", projectFormData)
          .then((res) => console.log("res=>", res))
          .catch((err) => console.log(err));
      };
      dispatch(SET_ActiveCode(code));
      postProjectData();
      setTimeout(() => history.push("/hotel-project-form"), 500);
    } else {
      alert("please fill in all data");
    }
  }, [projectFormIsValid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectInputData({ ...projectInputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = false;
    const allInputsAreNonEmpty = !Object.values(projectInputData).some(
      (value) => value === null || value === ""
    );
    if (allInputsAreNonEmpty) {
      const codeArr = projects?.map((project) => project.code);
      const { codeIsNew } = checkForDuplicates(code, codeArr);
      setProjectFormIsValid(codeIsNew);
    }
  };

  return (
    <ProjectLogContainer onSubmit={handleSubmit}>
      <ProjectConfiguration>
        <GroupContainer>
          <legend>
            <h4>About the Project</h4>
          </legend>
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
            placeholder='Client Acc. Exec'
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
  );
};

export default ProjectLog;
