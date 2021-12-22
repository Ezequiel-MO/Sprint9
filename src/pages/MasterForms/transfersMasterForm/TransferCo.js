import { ScFieldset } from "./styles";

const TransferCo = ({ companyValues, setCompanyValues }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyValues({ ...companyValues, [name]: value });
  };

  return (
    <ScFieldset>
      <legend>TRANSFERS MASTER FORM</legend>
      <div>
        <label>
          City:
          <input
            type='text'
            name='city'
            onChange={handleChange}
            value={companyValues.city}
          />
        </label>
        <label>
          Company:
          <input
            type='text'
            name='company'
            onChange={handleChange}
            value={companyValues.company}
          />
        </label>
      </div>
    </ScFieldset>
  );
};

export default TransferCo;
