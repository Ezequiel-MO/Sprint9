import { useState, useEffect } from "react";
import { useAxiosFetch } from "../../../../hooks/useAxiosFetch";
import { useSelector } from "react-redux";
import { selectActiveCode } from "../../../../features/ActiveCodeSlice";
import { useHistory } from "react-router";
import { baseAPI, baseURL } from "../../../../api/axios";
import { findSelectedOptions } from "../../utils/utils";
import useGetVendors from "../../../../hooks/useGetVendor";
import { AUTH_ROUTES } from "../../../../features/authRoutesSlice";
import { useDispatch } from "react-redux";

const useHotelProjectForm = () => {
  const activeCode = useSelector(selectActiveCode);
  const history = useHistory();
  const [formIsValid, setFormIsValid] = useState(false);
  const [hotels, setHotels] = useState([]);
  const { vendorOptions: hotelOptions } = useGetVendors("hotels");
  const [selectedHotelOptions, setSelectedHotelOptions] = useState([]);
  const dispatch = useDispatch();

  const {
    data: { project: projectByCode },
  } = useAxiosFetch(`${baseURL}/project/${activeCode}`);

  useEffect(() => {
    /* if (formIsValid) { */
    if (projectByCode) {
      try {
        baseAPI.post(`/addHotels/${projectByCode._id}`, hotels).then((res) => {
          console.log(res);
          dispatch(AUTH_ROUTES({ scheduleProjectForm: true }));
          setTimeout(() => history.push("/schedule-project-form"), 1000);
        });
      } catch (err) {
        console.warn(err);
      }
    } else alert("Loading project ...");
    /*   } */
  }, [formIsValid]);

  const storeSelectedValues = (array, action) => {
    if (action.action === "select-option" || action.action === "remove-value") {
      setSelectedHotelOptions(array);
    } else if (action.action === "clear") {
      setSelectedHotelOptions([]);
    }
  };

  const updateInputData = () => {
    setHotels(findSelectedOptions(selectedHotelOptions, hotelOptions));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInputData();
    /* setFormIsValid(true); */
  };

  return {
    handleSubmit,
    hotelOptions,
    storeSelectedValues,
    selectedHotelOptions,
    projectByCode,
    formIsValid,
  };
};

export default useHotelProjectForm;
