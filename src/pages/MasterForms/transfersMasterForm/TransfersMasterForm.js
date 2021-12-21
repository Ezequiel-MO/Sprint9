import { useState } from "react";
import AddService from "./AddService";
import { v4 as uuidv4 } from "uuid";
import DialogBox from "../../../uicomponents/dialogBox/DialogBox";
import TransferCo from "./TransferCo";

const ListOfServices = (arr) => (
  <div>
    {arr?.map((service) => (
      <div key={service.id}>
        <fieldset>
          <legend>Buses of {service.vehicleCapacity}</legend>
          {
            <div>
              {service.labels.map((label) => (
                <label key={label}>
                  {label}
                  <input type='number' name={label} />
                </label>
              ))}
            </div>
          }
        </fieldset>
      </div>
    ))}
  </div>
);

const TransfersMasterForm = () => {
  const [status, setStatus] = useState("add-service");
  const [services, setServices] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddService = (value) => {
    const newServiceIsUnique = !services.some(
      (service) => service.vehicleCapacity === value
    );
    const valueIsValid = value > 0;

    if (valueIsValid && newServiceIsUnique) {
      setStatus("typing");
      setServices([
        ...services,
        {
          id: uuidv4(),
          vehicleCapacity: value,
          labels: ["4hrs Dispo", "transfer_in/out"],
        },
      ]);
      setErrorMessage("");
    } else if (!valueIsValid) {
      setErrorMessage("Please select a valid service");
    } else if (!newServiceIsUnique) {
      setErrorMessage("This Size of Vehicle is already added");
    }
  };

  return (
    <div>
      <h2>Transfers Master Form</h2>
      <form>
        <TransferCo />
        <AddService onAddService={handleAddService} status={status} />
        {ListOfServices(services)}
        <button type='submit' disabled={status === "add-service" || "typing"}>
          If you have added all services for this Transfer vendor, you can save
          it
        </button>
      </form>
      {errorMessage && <DialogBox message={errorMessage} />}
    </div>
  );
};

export default TransfersMasterForm;
