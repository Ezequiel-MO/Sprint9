import { createContext } from "react";

export const SelectContext = createContext({});
const { Provider } = SelectContext;

const SelectOptions = ({
  children,
  options,
  transferDetails,
  handleChange,
  className,
  transfer,
}) => {
  return (
    <Provider value={{ options, transferDetails, handleChange, transfer }}>
      <div className={className}>{children}</div>
    </Provider>
  );
};

export default SelectOptions;
