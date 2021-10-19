const TextInput = ({ value, name, onChange, placeholder, ...rest }) => {
  return (
    <input
      type='text'
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default TextInput;
