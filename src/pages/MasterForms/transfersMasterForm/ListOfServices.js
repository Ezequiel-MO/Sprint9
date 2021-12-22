import accounting from "accounting";
import { ScFieldset } from "./styles";

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
          <ScFieldset>
            <legend>Vehicles of {service.vehicleCapacity} pax capacity</legend>
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
                    <h4>
                      {item.label}{" "}
                      <span>
                        {accounting.formatMoney(
                          companyValues[`${item.name}`],
                          "€"
                        )}
                      </span>
                    </h4>
                  );
                })}
              </div>
            }
          </ScFieldset>
          <button
            type='submit'
            disabled={status === "submitting" || service.saved === true}
          >
            Save on DB
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListOfServices;
