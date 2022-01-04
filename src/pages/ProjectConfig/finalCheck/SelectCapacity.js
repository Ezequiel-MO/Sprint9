import { useContext } from "react";
import { SelectContext } from "./SelectOptions";

const SelectCapacity = () => {
  const { options, transferDetails, handleChange } = useContext(SelectContext);
  return (
    <select
      name='capacity'
      value={transferDetails.capacity}
      onChange={(e) => handleChange(e)}
    >
      <option>Select capacity</option>
      {options.capacities.map((capacity) => (
        <option key={capacity}>{capacity}</option>
      ))}
    </select>
  );
};

export default SelectCapacity;
