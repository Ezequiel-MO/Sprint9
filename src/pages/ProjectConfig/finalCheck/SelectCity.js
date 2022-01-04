import { useContext } from "react";
import { SelectContext } from "./SelectOptions";

const SelectCity = () => {
  const { options, transferDetails, handleChange } = useContext(SelectContext);
  return (
    <select
      name='city'
      value={transferDetails.city}
      onChange={(e) => handleChange(e)}
    >
      <option>Select city</option>
      {options.cities.map((city) => (
        <option key={city}>{city}</option>
      ))}
    </select>
  );
};

export default SelectCity;
