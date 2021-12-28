import { ScheduleProjectFormContainer } from "../ProjectForms/styles";
import ScheduleFCLogic from "./ScheduleFCLogic";

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
    nrVehicles,
    handleTypeOfServiceChange,
    typeOfService,
    handleNrVehiclesChange,
    vendorCost,
    status,
    handleSubmit,
    formIsValid,
  } = ScheduleFCLogic();

  if (formIsValid === true) {
    return (
      <ScheduleProjectFormContainer>
        <h1>Project successfully created!</h1>
      </ScheduleProjectFormContainer>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex" }}>
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

        <select value={capacity} onChange={handleCapacityChange}>
          <option>Vehicle Capacity</option>
          {capacities?.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select value={typeOfService} onChange={handleTypeOfServiceChange}>
          <option>Type of Service</option>
          <option value='transferIn'>Transfer In</option>
          <option value='transferOut'>Transfer Out</option>
        </select>
        <input
          type='number'
          placeholder='Add Quantity'
          value={nrVehicles}
          onChange={handleNrVehiclesChange}
        />
        <p>
          Transfer In, {capacity} Seater Bus, {vendor} , cost {vendorCost}€
        </p>
      </div>
      <button disabled={status === "selecting"}>Add Transfers</button>
    </form>
  );
};

export default ScheduleFinalCheck;
