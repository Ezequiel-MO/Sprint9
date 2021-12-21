import { useState } from "react";

const TransferCo = () => {
  const [companyValues, setCompanyValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyValues({ ...companyValues, [name]: value });
  };

  return (
    <fieldset>
      <legend>Transfers</legend>
      <label>
        City:
        <input type='text' name='city' onChange={handleChange} />
      </label>
      <label>
        Company:
        <input type='text' name='company' onChange={handleChange} />
      </label>
      <label>
        Vehicle Type:
        <input type='text' name='vehicleType' onChange={handleChange} />
      </label>
    </fieldset>
  );
};

export default TransferCo;
