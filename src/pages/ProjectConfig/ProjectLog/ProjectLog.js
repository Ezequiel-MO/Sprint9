import "./styles.css";
import useProjectLog from "./useProjectLog";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { DialogBox, SaveButton, TextInput } from "../../../uicomponents";

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
          arrivalDay: Yup.date().required("Required").nullable(),
          departureDay: Yup.date().required("Required"),
          nrPax: Yup.number().required("Required"),
          clientCo: Yup.string().required("Required"),
          clientAccManager: Yup.string().required("Required"),
        })}
      >
        {(formik) => (
          <Form className='form'>
            <fieldset>
              <legend>
                <h4>About the Project</h4>
              </legend>
              <div className='form-inputs'>
                <div>
                  <TextInput
                    label='code'
                    name='code'
                    placeholder='BEM2021001'
                    type='text'
                  />
                </div>
                <div>
                  <TextInput
                    label='Account Manager'
                    name='accountManager'
                    placeholder='John Doe'
                    type='text'
                  />
                </div>
                <div>
                  <TextInput
                    label='Group Name'
                    name='groupName'
                    placeholder='Pfizer'
                    type='text'
                  />
                </div>
                <div>
                  <TextInput
                    label='Group Location'
                    name='groupLocation'
                    placeholder='Barcelona'
                    type='text'
                  />
                </div>
                <div>
                  <label htmlFor='arrivalDay'>Arrival Day</label>
                  <Field name='arrivalDay' type='date' />
                  <ErrorMessage name='arrivalDay' component='span' />
                </div>
                <div>
                  <label htmlFor='departureDay'>Departure Day</label>
                  <Field name='departureDay' type='date' />
                  <ErrorMessage name='departureDay' component='span' />
                </div>

                <div>
                  <label htmlFor='nrPax'>Number of Pax</label>
                  <Field name='nrPax' type='number' />
                  <ErrorMessage name='nrPax' component='span' />
                </div>
                <div>
                  <TextInput
                    label='Client Agency'
                    name='clientCo'
                    placeholder='Roar Event Mngmt'
                    type='text'
                  />
                </div>
                <div>
                  <TextInput
                    label='Client Account Manager'
                    name='clientAccManager'
                    placeholder='Jonas Smith'
                    type='text'
                  />
                </div>
              </div>
              <div className='save-button'>
                <SaveButton type='submit' text='Save and continue' />
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>

      {dialogMessage && <DialogBox message={dialogMessage} />}
    </>
  );
};

export default ProjectLog;
