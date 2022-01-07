import { ErrorMessage, useField } from "formik";

export const TextAreaInput = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className='text-area-input' {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component='span'
        className='error-message'
      />
    </>
  );
};

export default TextAreaInput;
