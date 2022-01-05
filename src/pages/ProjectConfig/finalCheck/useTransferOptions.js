import { useState, useEffect } from "react";
import useGetVendors from "../../../hooks/useGetVendor";

const useTransferOptions = (city, vendor) => {
  const { vendorOptions: transfersDB } = useGetVendors("transfers");
  const [options, setOptions] = useState({
    cities: [],
    vendors: [],
    capacities: [],
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
  }, [transfersDB, city, vendor]);
  return { options };
};

export default useTransferOptions;
