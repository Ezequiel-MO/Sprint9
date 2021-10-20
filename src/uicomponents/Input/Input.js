const Input = ({ type, value, name, onChange, placeholder }) => {
  return (
    <input
      data-testid='generic-input'
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
