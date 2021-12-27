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
      <input
        type='number'
        placeholder='Add Quantity'
        value={nrVehicles}
        onChange={handleNrVehiclesChange}
      />
      <p>
        Transfer In, {capacity} Seater Bus, {vendor} , cost {vendorCost}€
      </p>
      <button disabled={status === "selecting"}>Add Transfer In</button>
    </form>
  );
};

export default ScheduleFinalCheck;
