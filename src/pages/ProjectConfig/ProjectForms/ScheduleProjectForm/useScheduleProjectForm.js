import { useState, useEffect, useReducer } from "react";
import useComputeTotalDays from "../../../../hooks/useComputeTotalDays";
import { findSelectedOptions, whichDay } from "../../utils/utils";
import { useSelector } from "react-redux";
import { selectActiveCode } from "../../../../features/ActiveCodeSlice";
import { useAxiosFetch } from "../../../../hooks/useAxiosFetch";
import { baseURL } from "../../../../api/axios";
import { useHistory } from "react-router";
import useGetVendors from "../../../../hooks/useGetVendor";
import eventOptionsReducer from "../projectFormReducer";
import { optionsInitialState } from "../projectFormReducer";

const useScheduleProjectForm = () => {
  const history = useHistory();
  const [schedule, setSchedule] = useState([]);
  const [dayProgram, setDayProgram] = useState({});
  const [selectedOptions, dispatch] = useReducer(
    eventOptionsReducer,
    optionsInitialState
  );

  const [counter, setCounter] = useState(1);

  const { vendorOptions: restaurantOptions } = useGetVendors("restaurants");
  const { vendorOptions: eventOptions } = useGetVendors("events");
  const activeCode = useSelector(selectActiveCode);
  const {
    data: { project: projectByCode },
  } = useAxiosFetch(`${baseURL}/project/${activeCode}`);
  const { totalDays } = useComputeTotalDays(projectByCode);

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

  useEffect(() => {
    if (counter < totalDays) {
      dispatch({
        type: "clear",
      });
      setCounter((prevState) => prevState + 1);
    } else if (counter === totalDays) {
      history.push({
        pathname: "/schedule-check",
        state: schedule,
      });
    }
  }, [schedule]);

  useEffect(() => {
    setSchedule([...schedule, dayProgram]);
  }, [dayProgram]);

  const updateInputData = () => {
    setDayProgram({
      ...dayProgram,
      date: whichDay(counter, totalDays),
      morningEvents: findSelectedOptions(
        selectedOptions["morning-event"],
        eventOptions
      ),
      lunch: findSelectedOptions(selectedOptions.lunch, restaurantOptions),
      afternoonEvents: findSelectedOptions(
        selectedOptions["afternoon-event"],
        eventOptions
      ),
      dinner: findSelectedOptions(selectedOptions.dinner, restaurantOptions),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInputData();
    dispatch({
      type: "clear",
    });
  };

  return {
    handleSubmit,
    projectByCode,
    eventOptions,
    restaurantOptions,
    storeSelectedValues,
    counter,
    whichDay,
    selectedOptions,
  };
};

export default useScheduleProjectForm;
