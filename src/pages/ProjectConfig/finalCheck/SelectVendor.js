import { useContext } from "react";
import { SelectContext } from "./SelectOptions";

const SelectVendor = () => {
  const { options, transferDetails, handleChange } = useContext(SelectContext);
  return (
    <select
      name='vendor'
      value={transferDetails.vendor}
      onChange={(e) => handleChange(e)}
    >
      <option>Select a vendor</option>
      {options.vendors.map((vendor) => (
        <option key={vendor}>{vendor}</option>
      ))}
    </select>
  );
};

export default SelectVendor;
