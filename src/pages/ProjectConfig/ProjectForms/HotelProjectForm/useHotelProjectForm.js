import { useState, useEffect, useReducer } from "react";
import { useAxiosFetch } from "../../../../hooks/useAxiosFetch";
import { useSelector } from "react-redux";
import { selectActiveCode } from "../../../../features/ActiveCodeSlice";
import { useHistory } from "react-router";
import { baseAPI, baseURL } from "../../../../api/axios";
import { findSelectedOptions } from "../../utils/utils";
import useGetVendors from "../../../../hooks/useGetVendor";
import { AUTH_ROUTES } from "../../../../features/authRoutesSlice";
import { useDispatch } from "react-redux";
import eventOptionsReducer, {
  optionsInitialState,
} from "../projectFormReducer";

const useHotelProjectForm = () => {
  const activeCode = useSelector(selectActiveCode);
  const history = useHistory();
  const [formIsValid, setFormIsValid] = useState(false);
  const [hotels, setHotels] = useState([]);
  const { vendorOptions: hotelOptions } = useGetVendors("hotels");
  const dispatch_auth = useDispatch();
  const [selectedOptions, dispatch] = useReducer(
    eventOptionsReducer,
    optionsInitialState
  );

  const {
    data: { project: projectByCode },
  } = useAxiosFetch(`${baseURL}/project/${activeCode}`);

  useEffect(() => {
    /* if (formIsValid) { */
    if (projectByCode) {
      try {
        baseAPI.post(`/addHotels/${projectByCode._id}`, hotels).then((res) => {
          console.log(res);
          dispatch_auth(AUTH_ROUTES({ scheduleProjectForm: true }));
          setTimeout(() => history.push("/schedule-project-form"), 1000);
        });
      } catch (err) {
        console.warn(err);
      }
    } else console.log("Loading project ...");
    /*   } */
  }, [formIsValid]);

  const storeSelectedValues = (array, action) => {
    if (action.action === "select-option" || action.action === "remove-value") {
      dispatch({
        type: "select-option",
        payload: {
          name: action.name,
          value: array,
        },
      });
    } else if (action.action === "clear") {
      dispatch({
        type: "clear",
      });
    }
  };

  const updateInputData = () => {
    setHotels(findSelectedOptions(selectedOptions.hotels, hotelOptions));
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
    selectedOptions,
    projectByCode,
    formIsValid,
  };
};

export default useHotelProjectForm;
