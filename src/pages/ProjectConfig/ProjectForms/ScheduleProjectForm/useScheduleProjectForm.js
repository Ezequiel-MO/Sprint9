import { useState, useEffect } from "react";
import useComputeTotalDays from "../../../../hooks/useComputeTotalDays";
import { findSelectedOptions, whichDay } from "../../utils/utils";
import { useSelector } from "react-redux";
import { selectActiveCode } from "../../../../features/ActiveCodeSlice";
import { useAxiosFetch } from "../../../../hooks/useAxiosFetch";
import { baseURL } from "../../../../api/axios";
import { useHistory } from "react-router";
import useGetVendors from "../../../../hooks/useGetVendor";

const useScheduleProjectForm = () => {
  const history = useHistory();
  const [schedule, setSchedule] = useState([]);
  const [dayProgram, setDayProgram] = useState({});
  const [selectedLunchOptions, setSelectedLunchOptions] = useState([]);
  const [selectedDinnerOptions, setSelectedDinnerOptions] = useState([]);
  const [selectedMorningEventOptions, setSelectedMorningEventOptions] =
    useState([]);
  const [selectedAfternoonEventOptions, setSelectedAfternoonEventOptions] =
    useState([]);
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
      if (action.name === "lunch") {
        setSelectedLunchOptions(array);
      } else if (action.name === "dinner") {
        setSelectedDinnerOptions(array);
      } else if (action.name === "morning-event") {
        setSelectedMorningEventOptions(array);
      } else if (action.name === "afternoon-event") {
        setSelectedAfternoonEventOptions(array);
      } else if (action.action === "clear") {
        if (action.name === "lunch") {
          setSelectedLunchOptions([]);
        } else if (action.name === "dinner") {
          setSelectedDinnerOptions([]);
        } else if (action.name === "morning-event") {
          setSelectedMorningEventOptions([]);
        } else if (action.name === "afternoon-event") {
          setSelectedAfternoonEventOptions([]);
        }
      }
    }
  };

  useEffect(() => {
    if (counter < totalDays) {
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
        selectedMorningEventOptions,
        eventOptions
      ),
      lunch: findSelectedOptions(selectedLunchOptions, restaurantOptions),
      afternoonEvents: findSelectedOptions(
        selectedAfternoonEventOptions,
        eventOptions
      ),
      dinner: findSelectedOptions(selectedDinnerOptions, restaurantOptions),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInputData();
    setSelectedLunchOptions([]);
    setSelectedDinnerOptions([]);
    setSelectedMorningEventOptions([]);
    setSelectedAfternoonEventOptions([]);
  };

  return {
    handleSubmit,
    projectByCode,
    eventOptions,
    restaurantOptions,
    storeSelectedValues,
    counter,
    whichDay,
    selectedLunchOptions,
    selectedDinnerOptions,
    selectedMorningEventOptions,
    selectedAfternoonEventOptions,
  };
};

export default useScheduleProjectForm;
