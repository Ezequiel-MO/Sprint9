import accounting from "accounting";
import { ScButton, ScFieldset } from "./styles";

const ListOfServices = ({
  services,
  companyValues,
  setCompanyValues,
  status,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyValues({ ...companyValues, [name]: value });
  };
  return (
    <div>
      {services?.map((service) => (
        <div key={service.id}>
          <fieldset>
            <legend>
              {service.saved === false
                ? `Vehicles of ${service.vehicleCapacity} pax capacity`
                : `Records saved to the DB for vehicles of ${service.vehicleCapacity} pax capacity`}
            </legend>
            {
              <div>
                {service.ids.map((item) => {
                  return service.saved === false ? (
                    <div key={item.name}>
                      <label>
                        {item.label}:
                        <input
                          type='number'
                          name={item.name}
                          onChange={handleChange}
                          value={companyValues[`${item.name}`]}
                        />
                      </label>
                    </div>
                  ) : (
                    <p>
                      {item.label}{" "}
                      <span>
                        {accounting.formatMoney(
                          companyValues[`${item.name}`],
                          "€"
                        )}
                      </span>
                    </p>
                  );
                })}
              </div>
            }
            <ScButton
              type='submit'
              disabled={status === "submitting" || service.saved === true}
            >
              Save on DB
            </ScButton>
          </fieldset>
        </div>
      ))}
    </div>
  );
};

export default ListOfServices;
