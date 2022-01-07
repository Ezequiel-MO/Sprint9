import { Form, Formik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import { TextInput, TextAreaInput } from "../../uicomponents";
import SaveButton from "../../uicomponents/SaveButton/SaveButton";
import { Icon } from "@iconify/react";
import "./styles.css";
import useMasterForm from "./useMasterForm";

const RestaurantMasterForm = () => {
  const fileInput = useRef();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          city: "",
          longitude: "",
          latitude: "",
          price: "",
          textContent: "",
          introduction: "",
        }}
        onSubmit={(values) => {
          console.log("restaurant ", values);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          longitude: Yup.number().required("Required"),
          latitude: Yup.number().required("Required"),
          price: Yup.number().required("Required"),
          textContent: Yup.string().required("Required"),
          introduction: Yup.string().required("Required"),
        })}
      >
        {(formik) => (
          <Form className='form'>
            <fieldset>
              <legend>
                <h4>General Restaurant data</h4>
              </legend>
              <div className='form-inputs'>
                <div>
                  <TextInput
                    label='Name'
                    name='name'
                    placeholder='Restaurant Name'
                    type='text'
                  />
                </div>
                <div>
                  <TextInput
                    label='City'
                    name='city'
                    placeholder='Restaurant City'
                    type='text'
                  />
                </div>
                <div>
                  <TextInput
                    label='Coords Longitude'
                    name='longitude'
                    placeholder='ex : 2.154007'
                    type='number'
                  />
                </div>
                <div>
                  <TextInput
                    label='Coords Latitude'
                    name='latitude'
                    placeholder='ex : 41.390205'
                    type='number'
                  />
                </div>
                <div>
                  <TextInput
                    label='3-Course Menu Cost'
                    name='price'
                    placeholder='ex : 35'
                    type='number'
                  />
                </div>
                <div className='button'>
                  <SaveButton type='submit' text='Save and continue' />
                </div>
              </div>
              <div className='form-inputs'>
                <div>
                  <TextAreaInput
                    className='text-area-input-restaurant'
                    name='introduction'
                    placeholder='Write an intro'
                    type='text'
                  />
                </div>
                <div>
                  <TextAreaInput
                    className='text-area-input-restaurant'
                    name='textContent'
                    placeholder='Write a description'
                    type='text'
                  />
                </div>
                <div>
                  <label for='file-upload' className='custom-file-upload'>
                    <Icon icon='akar-icons:cloud-upload' width='40' />
                    <span>Upload Images</span>
                  </label>
                  <input
                    id='file-upload'
                    type='file'
                    ref={fileInput}
                    name='imageContentUrl'
                    multiple
                  />
                </div>
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RestaurantMasterForm;
