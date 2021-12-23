import { useLocation } from "react-router-dom";
import useGetVendors from "../../../hooks/useGetVendor";
import { useState, useEffect } from "react";

const ScheduleFinalCheck = () => {
  const { state } = useLocation();
  console.log("schedule", state);
  const [city, setCity] = useState("");
  const [vendors, setVendors] = useState([]);
  const [vendor, setVendor] = useState("Select Vendor");
  const [capacities, setCapacities] = useState([]);
  const [capacity, setCapacity] = useState("");
  const [vendorCost, setVendorCost] = useState(0);
  const { vendorOptions: transfersDB } = useGetVendors("transfers");

  console.log("transfers db >===>", transfersDB);

  useEffect(() => {
    setCapacities([]);
    if (transfersDB && vendor !== "Select Vendor") {
      const filteredVendor = transfersDB.filter(
        (item) => item.company === vendor
      );
      const filteredVendorCapacities = filteredVendor.map(
        (item) => item.vehicleCapacity
      );
      setCapacities(filteredVendorCapacities);
      setCapacity("Vehicle Capacity");
    }
  }, [vendor, transfersDB]);

  useEffect(() => {
    setVendors([]);
    if (transfersDB) {
      const filteredVendorsByCity = transfersDB.filter(
        (vendor) => vendor.city === city
      );
      const filteredVendorNamesByCity = filteredVendorsByCity.map(
        (vendor) => vendor.company
      );
      const uniqueVendors = [...new Set(filteredVendorNamesByCity)];
      setVendors(uniqueVendors);
      setVendor("Select Vendor");
    }
  }, [city, transfersDB]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleVendorChange = (e) => {
    setVendor(e.target.value);
  };

  const handleCapacityChange = (e) => {
    setCapacity(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <select value={city} onChange={handleCityChange}>
        <option value='0'>Select city</option>
        <option value='Barcelona'>Barcelona</option>
        <option value='Madrid'>Madrid</option>
        <option value='Valencia'>Valencia</option>
      </select>
      <select value={vendor} onChange={handleVendorChange}>
        <option>{vendor}</option>
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
      <p>
        Transfer In, {capacity} Seater Bus, {vendor} , cost {vendorCost}€
      </p>
      <button>Add Transfer In</button>
    </form>
  );
};

export default ScheduleFinalCheck;
