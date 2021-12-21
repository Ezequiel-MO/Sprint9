import { useState } from "react";
import AddService from "./AddService";
import { v4 as uuidv4 } from "uuid";
import DialogBox from "../../../uicomponents/dialogBox/DialogBox";
import TransferCo from "./TransferCo";
import ListOfServices from "./ListOfServices";

const TransfersMasterForm = () => {
  const [status, setStatus] = useState("typing");
  const [submitReady, setSubmitReady] = useState(false);
  const [services, setServices] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [companyValues, setCompanyValues] = useState({
    city: "",
    company: "",
    dispo_4h: "",
    "transfer_in/out": "",
  });

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
          ids: [
            { label: "4hrs Dispo", name: "dispo_4h" },
            { label: "Transfers In/Out", name: "transfer_in/out" },
          ],
        },
      ]);
      setErrorMessage("");
    } else if (!valueIsValid) {
      setErrorMessage("Please select a valid service");
    } else if (!newServiceIsUnique) {
      setErrorMessage("This Size of Vehicle is already added");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("your info has been submitted");
    console.log("company values", companyValues);
  };

  return (
    <div>
      <h2>Transfers Master Form</h2>
      <form onSubmit={handleSubmit}>
        <TransferCo
          companyValues={companyValues}
          setCompanyValues={setCompanyValues}
        />
        <AddService
          onAddService={handleAddService}
          status={status}
          setStatus={setStatus}
          companyValues={companyValues}
          setSubmitReady={setSubmitReady}
        />
        <ListOfServices
          services={services}
          companyValues={companyValues}
          setCompanyValues={setCompanyValues}
        />
        <button type='button' disabled={!submitReady}>
          If you have added all services for this Transfer vendor, click here to
          leave this form
        </button>
      </form>
      {errorMessage && <DialogBox message={errorMessage} />}
    </div>
  );
};

export default TransfersMasterForm;
