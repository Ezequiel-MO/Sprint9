import { Increment } from "../../../uicomponents/increment/Increment";
import { ScheduleProjectFormContainer } from "../ProjectForms/styles";
import useScheduleFinalCheck from "./useScheduleFinalCheck";

const ScheduleFinalCheck = () => {
  const {
    city,
    handleCityChange,
    cities,
    vendor,
    handleVendorChange,
    vendors,
    capacity,
    handleCapacityChange,
    capacities,
    handleTypeOfServiceChange,
    typeOfService,
    vendorCost,
    status,
    handleSubmit,
    formIsValid,
    transfers,
    addTransfers,
    handleAddTransfer,
  } = useScheduleFinalCheck();

  if (formIsValid === true) {
    return (
      <ScheduleProjectFormContainer>
        <h1>Project successfully created!</h1>
      </ScheduleProjectFormContainer>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", margin: "1rem" }}>
        <select value={city} onChange={handleCityChange}>
          <option>Select city</option>
          {cities?.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
        <select value={vendor} onChange={handleVendorChange}>
          <option>Select Vendor</option>
          {vendors?.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", margin: "1rem" }}>
        <select value={typeOfService} onChange={handleTypeOfServiceChange}>
          <option>Type of Service</option>
          <option value='transferIn'>Transfer In</option>
          <option value='transferOut'>Transfer Out</option>
        </select>
        <select value={capacity} onChange={handleCapacityChange}>
          <option>Vehicle Capacity</option>
          {capacities?.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <Increment />

        <button type='button' onClick={handleAddTransfer}>
          Add Transfer
        </button>
      </div>

      {addTransfers.transferIn && (
        <div style={{ display: "flex" }}>
          <p>
            Transfer In , {capacity} Seater Bus , cost {vendorCost}€
          </p>
        </div>
      )}

      {addTransfers.transferOut && (
        <div style={{ display: "flex" }}>
          <p>
            Transfer Out , {capacity} Seater Bus , cost {vendorCost}€
          </p>
        </div>
      )}

      <button type='submit' disabled={status === "selecting"}>
        Submit Form
      </button>
    </form>
  );
};

export default ScheduleFinalCheck;
