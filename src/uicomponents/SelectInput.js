import { useField } from "formik";

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && (
        <span className='error-message'>{meta.error}</span>
      )}
    </>
  );
};

export default SelectInput;
