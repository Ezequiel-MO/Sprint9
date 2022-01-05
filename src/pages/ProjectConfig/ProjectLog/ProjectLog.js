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
import * as Yup from "yup";

const ProjectLog = () => {
  const {
    /*  handleChange,
    handleSubmit,
    projectInputData, */
    projectFormIsValid,
    dialogMessage,
  } = useProjectLog();

  const { values, handleSubmit, errors, touched, getFieldProps } = useFormik({
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
    validationSchema: Yup.object({
      code: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Required"),
      accountManager: Yup.string().required("Required"),
      groupName: Yup.string().required("Required"),
      groupLocation: Yup.string().required("Required"),
      arrivalDay: Yup.string().required("Required"),
      departureDay: Yup.string().required("Required"),
      nrPax: Yup.number().required("Required"),
      clientCo: Yup.string().required("Required"),
      clientAccManager: Yup.string().required("Required"),
    }),
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
              {...getFieldProps("code")}
            />
            {touched.code && errors.code && <span>{errors.code}</span>}
            <Input
              type='text'
              placeholder='Account Manager'
              {...getFieldProps("accountManager")}
            />
            {touched.accountManager && errors.accountManager && (
              <span>{errors.accountManager}</span>
            )}
            <Input
              type='text'
              placeholder='Location'
              {...getFieldProps("groupLocation")}
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
              {...getFieldProps("arrivalDay")}
            />
            {touched.arrivalDay && errors.arrivalDay && (
              <span>{errors.arrivalDay}</span>
            )}
            <Input
              type='date'
              placeholder='Departure date'
              {...getFieldProps("departureDay")}
            />
            {touched.departureDay && errors.departureDay && (
              <span>{errors.departureDay}</span>
            )}
            <Input
              type='number'
              placeholder='Number of Pax'
              {...getFieldProps("nrPax")}
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
              {...getFieldProps("groupName")}
            />
            {touched.groupName && errors.groupName && (
              <span>{errors.groupName}</span>
            )}
            <Input
              type='text'
              placeholder='Client company'
              {...getFieldProps("clientCo")}
            />
            {touched.clientCo && errors.clientCo && (
              <span>{errors.clientCo}</span>
            )}
            <Input
              type='text'
              placeholder='Client Acc Exec'
              {...getFieldProps("clientAccManager")}
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
