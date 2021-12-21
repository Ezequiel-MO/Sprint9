const ListOfServices = ({ services, companyValues, setCompanyValues }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyValues({ ...companyValues, [name]: value });
  };
  return (
    <div>
      {services?.map((service) => (
        <div key={service.id}>
          <fieldset>
            <legend>Buses of {service.vehicleCapacity}</legend>
            {
              <div>
                {service.labels.map((label) => (
                  <label key={label}>
                    {label}
                    <input
                      type='number'
                      name={label}
                      onChange={handleChange}
                      value={companyValues[`${label}`]}
                    />
                  </label>
                ))}
              </div>
            }
          </fieldset>
        </div>
      ))}
    </div>
  );
};

export default ListOfServices;
