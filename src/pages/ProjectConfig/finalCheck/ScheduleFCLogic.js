import { useLocation } from "react-router-dom";
import useGetVendors from "../../../hooks/useGetVendor";
import { useState, useEffect } from "react";
import { baseAPI, baseURL } from "../../../api/axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAxiosFetch } from "../../../hooks/useAxiosFetch";
import { selectActiveCode } from "../../../features/ActiveCodeSlice";

const ScheduleFCLogic = () => {
  const history = useHistory();
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
  const [formIsValid, setFormIsValid] = useState(false);
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

  const postSchedule = (schedule) => {
    try {
      baseAPI
        .post(`/addSchedule/${projectByCode._id}`, schedule)
        .then((response) => {
          console.log("response=>", response);
          setTimeout(() => {
            history.push("/");
          }, 1500);
        });
    } catch (error) {
      console.log(error);
    }
    setFormIsValid(true);
  };

  const updateSchedule = () => {
    const newState = state.slice(1);
    const transferIn = {
      city,
      company: vendor,
      vehicleCapacity: parseInt(capacity),
      transfer_in_out: parseInt(vendorCost),
    };
    newState[0].transfer_in_out = [transferIn];
    return newState;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const schedule = updateSchedule();
    postSchedule(schedule);
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
    nrVehicles,
    handleNrVehiclesChange,
    vendorCost,
    status,
    handleSubmit,
    formIsValid,
  };
};

export default ScheduleFCLogic;
