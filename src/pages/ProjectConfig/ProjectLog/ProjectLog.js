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
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ProjectLog = () => {
  const {
    /*  handleChange,
    handleSubmit,
    projectInputData, */
    projectFormIsValid,
    dialogMessage,
  } = useProjectLog();

  return (
    <>
      <Formik
        initialValues={{
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
        }}
        onSubmit={(values) => {
          console.log("values=>", values);
        }}
        validationSchema={Yup.object({
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
        })}
      >
        {(formik) => (
          <ProjectLogContainer>
            <ProjectConfiguration>
              <GroupContainer>
                <legend>
                  <h4>About the Project</h4>
                </legend>
                <label htmlFor='code'>Project Code</label>
                <Field name='code' type='text' />
                <ErrorMessage name='code' component='span' />
                <label htmlFor='accountManager'>Account Manager</label>
                <Field name='accountManager' type='text' />
                <ErrorMessage name='accountManager' component='span' />
                <label htmlFor='groupName'>Group Name</label>
                <Field name='groupName' type='text' />
                <ErrorMessage name='groupName' component='span' />
                <label htmlFor='groupLocation'>Group Location</label>
                <Field name='groupLocation' type='text' />
                <ErrorMessage name='groupLocation' component='span' />
                <label htmlFor='arrivalDay'>Arrival Day</label>
                <Field name='arrivalDay' type='date' />
                <ErrorMessage name='arrivalDay' component='span' />
                <label htmlFor='departureDay'>Departure Day</label>
                <Field name='departureDay' type='date' />
                <ErrorMessage name='departureDay' component='span' />
                <label htmlFor='nrPax'>Number of Pax</label>
                <Field name='nrPax' type='number' />
                <ErrorMessage name='nrPax' component='span' />
                <label htmlFor='clientCo'>Client Company</label>
                <Field name='clientCo' type='text' />
                <ErrorMessage name='clientCo' component='span' />
                <label htmlFor='clientAccManager'>Client Account Manager</label>
                <Field name='clientAccManager' type='text' />
                <ErrorMessage name='clientAccManager' component='span' />
              </GroupContainer>

              <ProjectResults validForm={projectFormIsValid}>
                <PLList data={formik.values} />
                <SaveButton type='submit' text='Save and continue' />
              </ProjectResults>
            </ProjectConfiguration>
          </ProjectLogContainer>
        )}
      </Formik>

      {dialogMessage && <DialogBox message={dialogMessage} />}
    </>
  );
};

export default ProjectLog;
