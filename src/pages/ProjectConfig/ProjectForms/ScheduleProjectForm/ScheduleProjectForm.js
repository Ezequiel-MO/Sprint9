import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectActiveCode } from "../../../../features/ActiveCodeSlice";
import { useAxiosFetch } from "../../../../hooks/useAxiosFetch";
import SaveButton from "../../../../uicomponents/SaveButton/SaveButton";
import { ScheduleProjectFormContainer } from "../styles";
import DailyEventsProjectForm from "./DailyEventsProjectForm/DailyEventsProjectForm";
import { baseAPI } from "../../../../api/axios";

const ScheduleProjectForm = () => {
  const [schedule, setSchedule] = useState([]);
  const [scheduleInputData, setScheduleInputData] = useState({});
  const [lunchOptions, setLunchOptions] = useState([]);
  const [dinnerOptions, setDinnerOptions] = useState([]);
  const [eventOptions, setEventOptions] = useState([]);
  const [selectedLunchOptions, setSelectedLunchOptions] = useState([]);
  const [selectedDinnerOptions, setSelectedDinnerOptions] = useState([]);
  const [selectedEventOptions, setSelectedEventOptions] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [counter, setCounter] = useState(1);
  const [daydifference, setDayDifference] = useState(0);

  const activeCode = "test-8"; /* useSelector(selectActiveCode) */

  // fetch project by code
  const {
    data: { project: projectByCode },
  } = useAxiosFetch(`https://cutt-events.herokuapp.com/project/${activeCode}`);

  const {
    data: { restaurants: restaurantData },
  } = useAxiosFetch("https://cutt-events.herokuapp.com/restaurants");

  const {
    data: { events: eventData },
  } = useAxiosFetch("https://cutt-events.herokuapp.com/events");

  useEffect(() => {
    setEventOptions(eventData);
  }, [eventData]);

  useEffect(() => {
    setLunchOptions(restaurantData);
    setDinnerOptions(restaurantData);
  }, [restaurantData]);

  const scheduleDayToAddArr = [];

  useEffect(() => {
    console.log("schedule=>", schedule);
  }, [schedule]);

  const addDayToSchedule = () => {
    //add day to Schedule
    console.log("addDayToSchedule");
  };

  const dailyEvents = [
    {
      name: "event",
      icon: "akar-icons:people-group",
      placeholder: "ex :  Event Options",
      options: eventOptions,
    },
    {
      name: "lunch",
      icon: "carbon:restaurant",
      placeholder: "ex : Lunch Options",
      options: lunchOptions,
    },
    {
      name: "dinner",
      icon: "cil:dinner",
      placeholder: "ex : Dinner Options",
      options: dinnerOptions,
    },
  ];

  useEffect(() => {
    setScheduleInputData({
      date: whichDay(counter),
      events: selectedEventOptions,
      lunch: selectedLunchOptions,
      dinner: selectedDinnerOptions,
    });
  }, [selectedLunchOptions, selectedDinnerOptions, selectedEventOptions]);

  const storeSelectedValues = (array, action) => {
    console.log("array=>", array, "action=>", action);
    //in case an option is added
    if (action.action === "select-option") {
      //determine if it is lunch or dinner or event
      //update the state accordingly with array
      if (action.name === "lunch") {
        setSelectedLunchOptions(array);
      } else if (action.name === "dinner") {
        setSelectedDinnerOptions(array);
      } else if (action.name === "event") {
        setSelectedEventOptions(array);
      }
    }
    //if option is removed
    else if (action.action === "remove-value") {
      //determine if it is lunch or dinner or event
      //update the state accordingly with array
      if (action.name === "lunch") {
        setSelectedLunchOptions(array);
      } else if (action.name === "dinner") {
        setSelectedDinnerOptions(array);
      } else if (action.name === "event") {
        setSelectedEventOptions(array);
      }
    }
    //if the whole select is cleared
    else if (action.action === "clear") {
      //determine if it is lunch or dinner or event

      if (action.name === "lunch") {
        setSelectedLunchOptions([]);
      } else if (action.name === "dinner") {
        setSelectedDinnerOptions([]);
      } else if (action.name === "event") {
        setSelectedEventOptions([]);
      }
    }
  };

  useEffect(() => {
    //update the state with the data extracted from the database
    if (projectByCode) {
      setStartDate(projectByCode.arrivalDay);
      setEndDate(projectByCode.departureDay);
    }
  }, [projectByCode]);

  useEffect(() => {
    //compute days between start and end date
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    setDayDifference(diffDays);
    console.log("diff days=>", diffDays);
  }, [startDate, endDate]);

  const whichDay = (counter) => {
    if (counter === 1) {
      return "Arrival Day";
    } else if (counter === daydifference) {
      return "Departure Day";
    } else {
      return "Day " + counter;
    }
  };

  return (
    <>
      <ScheduleProjectFormContainer>
        {projectByCode && <p>Date: {startDate}</p>}
        {dailyEvents.map((event) => (
          <DailyEventsProjectForm
            key={event.name}
            name={event.name}
            icon={event.icon}
            options={event.options}
            placeholder={event.placeholder}
            storeSelectedValues={storeSelectedValues}
          />
        ))}
        <SaveButton
          text={`Add ${whichDay(counter)} to schedule`}
          onClick={addDayToSchedule}
        />
      </ScheduleProjectFormContainer>
    </>
  );
};

export default ScheduleProjectForm;
