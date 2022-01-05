import { useState } from "react";
import useForm from "../../../hooks/useForm";
import useTransferOptions from "./useTransferOptions";
import { selectActiveCode } from "../../../features/ActiveCodeSlice";
import { useAxiosFetch } from "../../../hooks/useAxiosFetch";
import { useSelector } from "react-redux";
import { baseURL } from "../../../api/axios";

const useScheduleFinalCheck = () => {
  const [status, setStatus] = useState("selecting");
  const [nrVehicles, setNrVehicles] = useState(1);
  const activeCode = useSelector(selectActiveCode);
  const {
    data: { project: projectByCode },
  } = useAxiosFetch(`${baseURL}/project/${activeCode}`);
  const {
    formData: transferDetails,
    handleChange,
    city,
    vendor,
  } = useForm({
    city: "",
    vendor: "",
    capacity: "",
  });

  const { options } = useTransferOptions(city, vendor);

  const increase = (value) => {
    setNrVehicles((prev) => Math.max(0, prev + value));
  };

  const addTransfer = (typeOfTransfer) => {
    //compute total cost
    //post to database
    //enable transfers out
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
