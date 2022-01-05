import Input from "../../../uicomponents/Input/Input";
import {
  ProjectLogContainer,
  ProjectConfiguration,
  GroupContainer,
  ProjectResults,
} from "./styles";
import PLList from "./PLList/PLLists";
import SaveButton from "../../../uicomponents/SaveButton/SaveButton";
import DialogBox from "../../../uicomponents/dialogBox/DialogBox";
import useProjectLog from "./useProjectLog";
import { useFormik } from "formik";

const ProjectLog = () => {
  const {
    /*  handleChange,
    handleSubmit,
    projectInputData, */
    projectFormIsValid,
    dialogMessage,
  } = useProjectLog();

  const validate = (values) => {
    const errors = {};
    if (!values.code) {
      errors.code = "Required";
    } else if (values.code.trim().length < 10) {
      errors.code = "Must be 10 characters or more";
    }

    if (!values.accountManager) {
      errors.accountManager = "Required";
    }

    if (!values.groupName) {
      errors.groupName = "Required";
    }

    if (!values.groupLocation) {
      errors.groupLocation = "Required";
    }

    if (!values.arrivalDay) {
      errors.arrivalDay = "Required";
    } else if (new Date(values.arrivalDay) < new Date()) {
      errors.arrivalDay = "Must be after today";
    } else if (new Date(values.arrivalDay) > new Date(values.departureDay)) {
      errors.arrivalDay = "Must be before departure day";
    }

    if (!values.departureDay) {
      errors.departureDay = "Required";
    } else if (new Date(values.departureDay) < new Date(values.arrivalDay)) {
      errors.departureDay = "Must be after arrival day";
    } else if (new Date(values.departureDay) < new Date()) {
      errors.departureDay = "Must be after today";
    }

    if (!values.nrPax) {
      errors.nrPax = "Required";
    }

    if (!values.clientCo) {
      errors.clientCo = "Required";
    }

    if (!values.clientAccManager) {
      errors.clientAccManager = "Required";
    }

    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        code: "",
        accountManager: "",
        groupName: "",
        groupLocation: "",
        arrivalDay: "",
        departureDay: "",
        nrPax: 0,
        clientCo: "",
        clientAccManager: "",
        hotels: [],
        schedule: [],
      },
      onSubmit: (values) => {
        console.log("values=>", values);
      },
      validate,
    });

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
              placeholder='Write Project Code'
              name='code'
              value={values.code}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.code && errors.code && <span>{errors.code}</span>}
            <Input
              type='text'
              placeholder='Account Manager'
              name='accountManager'
              value={values.accountManager}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.accountManager && errors.accountManager && (
              <span>{errors.accountManager}</span>
            )}
            <Input
              type='text'
              placeholder='Location'
              name='groupLocation'
              value={values.groupLocation}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.groupLocation && errors.groupLocation && (
              <span>{errors.groupLocation}</span>
            )}
          </GroupContainer>
          <GroupContainer>
            <legend>
              <h4>Dates and Pax expected</h4>
            </legend>
            <Input
              type='date'
              placeholder='Arrival date'
              name='arrivalDay'
              value={values.arrivalDay}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.arrivalDay && errors.arrivalDay && (
              <span>{errors.arrivalDay}</span>
            )}
            <Input
              type='date'
              placeholder='Departure date'
              name='departureDay'
              value={values.departureDay}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.departureDay && errors.departureDay && (
              <span>{errors.departureDay}</span>
            )}
            <Input
              type='number'
              placeholder='Number of Pax'
              name='nrPax'
              value={values.nrPax}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.nrPax && errors.nrPax && <span>{errors.nrPax}</span>}
          </GroupContainer>
          <GroupContainer>
            <legend>
              <h4>Client Details</h4>
            </legend>
            <Input
              type='text'
              placeholder='Group Name'
              name='groupName'
              value={values.groupName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.groupName && errors.groupName && (
              <span>{errors.groupName}</span>
            )}
            <Input
              type='text'
              placeholder='Client company'
              name='clientCo'
              value={values.clientCo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.clientCo && errors.clientCo && (
              <span>{errors.clientCo}</span>
            )}
            <Input
              type='text'
              placeholder='Client Acc Exec'
              name='clientAccManager'
              value={values.clientAccManager}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.clientAccManager && errors.clientAccManager && (
              <span>{errors.clientAccManager}</span>
            )}
          </GroupContainer>
          <ProjectResults validForm={projectFormIsValid}>
            <PLList data={values} />
            <SaveButton type='submit' text='Save and continue' />
          </ProjectResults>
        </ProjectConfiguration>
      </ProjectLogContainer>
      {dialogMessage && <DialogBox message={dialogMessage} />}
    </>
  );
};

export default ProjectLog;
