import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectActiveCode } from "../../../../features/ActiveCodeSlice";
import { useAxiosFetch } from "../../../../hooks/useAxiosFetch";
import { baseAPI } from "../../../../api/axios";
import SaveButton from "../../../../uicomponents/SaveButton/SaveButton";
import { ScheduleProjectFormContainer } from "../styles";
import DailyEventsProjectForm from "./DailyEventsProjectForm/DailyEventsProjectForm";

const ScheduleProjectForm = () => {
  const [schedule, setSchedule] = useState([]);
  const [scheduleInputData, setScheduleInputData] = useState({
    date: "",
    events: [],
    lunch: [],
    dinner: [],
  });

  const [lunchOptions, setLunchOptions] = useState([]);
  const [dinnerOptions, setDinnerOptions] = useState([]);
  const [eventOptions, setEventOptions] = useState([]);
  const [selectedLunchOptions, setSelectedLunchOptions] = useState([]);
  const [selectedDinnerOptions, setSelectedDinnerOptions] = useState([]);
  const [selectedEventOptions, setSelectedEventOptions] = useState([]);

  const activeCode = useSelector(selectActiveCode);

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

  useEffect(() => {
    try {
      const pushScheduleToServer = () => {
        baseAPI.post(`/addSchedule/${projectByCode._id}`, scheduleInputData);
      };
      pushScheduleToServer();
    } catch (err) {
      console.warn(err);
    }
  }, [schedule]);

  const addDayToSchedule = (e) => {
    e.preventDefault();
    //updateSchedule
    //add day to Schedule
    setSchedule((prevState) => [...prevState, scheduleInputData]);
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

  const updateSchedule = (e) => {
    e.preventDefault();
    const { date, events, lunch, dinner } = scheduleInputData;
    const newSchedule = {
      date,
      events,
      lunch,
      dinner,
    };
  };

  useEffect(() => {
    console.log(
      "lunch options=>",
      selectedLunchOptions,
      "dinner options=>",
      selectedDinnerOptions,
      "event options=>",
      selectedEventOptions
    );
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

  return (
    <>
      <ScheduleProjectFormContainer>
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

        <SaveButton text='Add day to schedule' onClick={addDayToSchedule} />
      </ScheduleProjectFormContainer>
    </>
  );
};

export default ScheduleProjectForm;
