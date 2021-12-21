import { useState } from "react";

const AddService = ({ onAddService, status }) => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    onAddService(value);
    setValue(0);
  };

  return (
    <div>
      <label>
        Vehicle Capacity:
        <select
          type='number'
          name='vehicleCapacity'
          placeholder='ie 30,50,70 pax'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value='0'>Select</option>
          <option value='20'>Minibus</option>
          <option value='30'>30 pax</option>
          <option value='50'>50 pax</option>
          <option value='70'>70 pax</option>
        </select>
      </label>
      <button
        type='button'
        onClick={handleClick}
        disabled={status === "typing"}
      >
        Add Services
      </button>
    </div>
  );
};

export default AddService;
