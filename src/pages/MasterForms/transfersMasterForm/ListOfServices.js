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
                {service.ids.map((item) => (
                  <label key={item.label}>
                    {item.label}
                    <input
                      type='number'
                      name={item.name}
                      onChange={handleChange}
                      value={companyValues[`${item.name}`]}
                    />
                  </label>
                ))}
              </div>
            }
          </fieldset>
          <button type='submit'>Save on DB</button>
        </div>
      ))}
    </div>
  );
};

export default ListOfServices;
