import { ErrorMessage, useField } from "formik";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("meta=>", meta.error);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component='span'
        className='error-message'
      />
      {/*  {meta.touched && meta.error && (
        <span className='error-message'>{meta.error}</span>
      )} */}
    </>
  );
};

export default TextInput;
