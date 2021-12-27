import { useLocation } from "react-router-dom";
import useGetVendors from "../../../hooks/useGetVendor";
import { useState, useEffect } from "react";

const ScheduleFinalCheck = () => {
  const { state } = useLocation();
  console.log("schedule", state);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("Select City");
  const [vendors, setVendors] = useState([]);
  const [vendor, setVendor] = useState("Select Vendor");
  const [capacities, setCapacities] = useState([]);
  const [capacity, setCapacity] = useState("");
  const [vendorCost, setVendorCost] = useState(0);
  const [nrVehicles, setNrVehicles] = useState(1);
  const [status, setStatus] = useState("selecting");
  const { vendorOptions: transfersDB } = useGetVendors("transfers");

  console.log("transfers db >===>", transfersDB);

  const computeCost = (nr) => {
    const cost = transfersDB.filter(
      (element) =>
        element.city === city &&
        element.company === vendor &&
        element.vehicleCapacity === parseInt(capacity)
    );

    return nr * cost[0].transfer_in_out;
  };

  useEffect(() => {
    if (transfersDB && capacity) {
      if (capacity !== "Vehicle Capacity") {
        setStatus("selected");
        const computedCost = computeCost(nrVehicles);
        setVendorCost(computedCost);
      }
    }
  }, [capacity, nrVehicles]);

  useEffect(() => {
    setCapacities([]);
    setCapacity("Vehicle Capacity");
    if (transfersDB && vendor !== "Select Vendor" && city !== "Select City") {
      const filteredVendor = transfersDB.filter(
        (item) => item.company === vendor
      );
      const filteredVendorCapacities = filteredVendor.map(
        (item) => item.vehicleCapacity
      );
      setCapacities(filteredVendorCapacities);
    }
  }, [vendor, transfersDB]);

  useEffect(() => {
    setVendors([]);
    setVendor("Select Vendor");
    if (transfersDB && city !== "Select City") {
      const filteredVendorsByCity = transfersDB.filter(
        (vendor) => vendor.city === city
      );
      const filteredVendorNamesByCity = filteredVendorsByCity.map(
        (vendor) => vendor.company
      );
      const uniqueVendors = [...new Set(filteredVendorNamesByCity)];
      setVendors(uniqueVendors);
    }
  }, [city, transfersDB]);

  useEffect(() => {
    setCities([]);
    setCity("Select City");
    if (transfersDB) {
      const filteredCities = transfersDB.map((vendor) => vendor.city);
      const uniqueCities = [...new Set(filteredCities)];
      setCities(uniqueCities);
    }
  }, [transfersDB]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleVendorChange = (e) => {
    setVendor(e.target.value);
  };

  const handleCapacityChange = (e) => {
    setCapacity(e.target.value);
  };

  const handleNrVehiclesChange = (e) => {
    setNrVehicles(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <select value={city} onChange={handleCityChange}>
        <option value='0'>Select city</option>
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
