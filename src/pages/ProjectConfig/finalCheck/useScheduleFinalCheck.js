import { useState, useEffect } from "react";
import useForm from "../../../hooks/useForm";
import useGetVendor from "../../../hooks/useGetVendor";

const useScheduleFinalCheck = () => {
  const [status, setStatus] = useState("selecting");
  const [nrVehicles, setNrVehicles] = useState(1);
  const [options, setOptions] = useState({
    cities: [],
    vendors: [],
    capacities: [],
  });
  const { vendorOptions: transfersDB } = useGetVendor("transfers");
  const {
    formData: transferDetails,
    city,
    vendor,
    capacity,
    handleChange,
  } = useForm({
    city: "",
    vendor: "",
    capacity: "",
  });

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      cities: [],
      vendors: [],
      capacities: [],
    }));
    if (transfersDB) {
      const filteredCities = transfersDB.map((vendor) => vendor.city);
      const filteredVendors = transfersDB.filter(
        (vendor) => vendor.city === city
      );
      const filteredCapacities = transfersDB.filter(
        (item) => item.company === vendor
      );
      const uniqueCities = [...new Set(filteredCities)];
      const uniqueVendors = [
        ...new Set(filteredVendors.map((vendor) => vendor.company)),
      ];
      const uniqueCapacities = [
        ...new Set(filteredCapacities.map((item) => item.vehicleCapacity)),
      ];

      setOptions((prevState) => ({
        ...prevState,
        cities: uniqueCities,
        vendors: uniqueVendors,
        capacities: uniqueCapacities,
      }));
    }
  }, [transfersDB, city, vendor, capacity]);

  const increase = (value) => {
    setNrVehicles((prev) => Math.max(0, prev + value));
  };

  const addTransfer = (typeOfTransfer) => {
    console.log("typeOfTransfer", typeOfTransfer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("valid");
  };

  return {
    status,
    handleSubmit,
    transferDetails,
    handleChange,
    options,
    increase,
    nrVehicles,
    addTransfer,
  };
};

export default useScheduleFinalCheck;
