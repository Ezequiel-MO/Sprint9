import { useLocation } from "react-router-dom";
import useGetVendors from "../../../hooks/useGetVendor";
import { useState, useEffect } from "react";
import { baseAPI, baseURL } from "../../../api/axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAxiosFetch } from "../../../hooks/useAxiosFetch";
import { selectActiveCode } from "../../../features/ActiveCodeSlice";

const useScheduleFinalCheck = () => {
  const history = useHistory();
  const { state } = useLocation();
  console.log("state", state);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("Select City");
  const [vendors, setVendors] = useState([]);
  const [vendor, setVendor] = useState("Select Vendor");
  const [capacities, setCapacities] = useState([]);
  const [capacity, setCapacity] = useState("");
  const [vendorCost, setVendorCost] = useState(0);
  const [typeOfService, setTypeOfService] = useState("");
  const [transfers, setTransfers] = useState({
    transferIn: [],
    transferOut: [],
  });
  const [addTransfers, setAddTransfers] = useState({
    transferIn: false,
    transferOut: false,
  });
  const [status, setStatus] = useState("selecting");
  const { vendorOptions: transfersDB } = useGetVendors("transfers");
  const [formIsValid, setFormIsValid] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const activeCode = useSelector(selectActiveCode);
  const {
    data: { project: projectByCode },
  } = useAxiosFetch(`${baseURL}/project/${activeCode}`);

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

  useEffect(() => {
    console.log("transfers", transfers);
  }, [transfers]);

  useEffect(() => {
    setTransfers({
      [typeOfService]: {
        city,
        company: vendor,
        vehicleCapacity: parseInt(capacity),
        transfer_in_out: vendorCost,
      },
    });
  }, [typeOfService]);

  const handleAddTransfer = () => {
    setAddTransfers({
      ...addTransfers,
      [typeOfService]: true,
    });
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleVendorChange = (e) => {
    setVendor(e.target.value);
  };

  const handleCapacityChange = (e) => {
    setCapacity(e.target.value);
  };

  const handleTypeOfServiceChange = (e) => {
    setTypeOfService(e.target.value);
  };

  useEffect(() => {
    if (projectByCode) {
      try {
        baseAPI
          .post(`/addSchedule/${projectByCode._id}`, schedule)
          .then((response) => {
            console.log("response=>", response);
            setTimeout(() => {
              history.push("/");
            }, 1500);
          });
        setFormIsValid(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Project does not exist");
    }
  }, [schedule]);

  /*   const postSchedule = () => {
    const newState = state.slice(1);
    newState.forEach((item, index) => {
      if (index === 0) {
        item.transfer_in_out = transfers.transferIn;
      } else if (index === newState.length - 1) {
        item.transfer_in_out = transfers.transferOut;
      } else {
        item.transfer_in_out = [];
      }
    });
    setSchedule(newState);
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*  postSchedule(); */
  };

  return {
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
  };
};

export default useScheduleFinalCheck;
