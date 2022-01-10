import { useState, useEffect } from "react";
import useGetVendors from "../../../hooks/useGetVendor";
import {
  findUniqueCapacitiesPerVendor,
  findUniqueCitiesinDB,
  findUniqueVendorsPerCity,
} from "../utils/utils";

const useTransferOptions = (city, vendor) => {
  const { vendorOptions: transfersDB } = useGetVendors("transfers");
  const [options, setOptions] = useState({
    cities: [],
    vendors: [],
    capacities: [],
  });

  useEffect(() => {
    if (transfersDB) {
      setOptions((prevState) => ({
        ...prevState,
        cities: findUniqueCitiesinDB(transfersDB),
        vendors: findUniqueVendorsPerCity(transfersDB, city),
        capacities: findUniqueCapacitiesPerVendor(transfersDB, vendor),
      }));
    }
  }, [transfersDB, city, vendor]);
  return { options };
};

export default useTransferOptions;
