import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectActiveCode } from "../../../../features/ActiveCodeSlice";
import { useAxiosFetch } from "../../../../hooks/useAxiosFetch";
import { baseAPI } from "../../../../api/axios";
import SaveButton from "../../../../uicomponents/SaveButton/SaveButton";
import DateProjectForm from "./DateProjectForm/DateProjectForm";
import { ScheduleProjectFormContainer } from "../styles";
import DailyEventsProjectForm from "./DailyEventsProjectForm/DailyEventsProjectForm";
import { dailyEvents } from "../data";

const ScheduleProjectForm = () => {
  const [schedule, setSchedule] = useState([]);
  const [scheduleInputData, setScheduleInputData] = useState({
    date: "",
    events: [],
    lunch: [],
    dinner: [],
  });

  const [lunchMatch, setLunchMatch] = useState([]);
  const [dinnerMatch, setDinnerMatch] = useState([]);
  const [eventMatch, setEventMatch] = useState([]);
  const [lunchOptions, setLunchOptions] = useState([]);
  const [dinnerOptions, setDinnerOptions] = useState([]);
  const [eventOptions, setEventOptions] = useState([]);
  const [lunchSelectedOption, setLunchSelectedOption] = useState("");
  const [dinnerSelectedOption, setDinnerSelectedOption] = useState("");
  const [eventSelectedOption, setEventSelectedOption] = useState("");
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

  const regexMatch = (arr, text) => {
    let matches = arr.filter((el) => {
      const regex = new RegExp(`${text}`, "gi");
      return el.name.match(regex);
    });
    return matches;
  };

  const matchOptions = (text, cat) => {
    if (cat === "lunch") {
      if (!text) {
        setLunchMatch([]);
        setLunchSelectedOption(text);
      } else {
        let matches = regexMatch(lunchOptions, text);
        setLunchSelectedOption(text);
        setLunchMatch(matches);
      }
    } else if (cat === "dinner") {
      if (!text) {
        setDinnerMatch([]);
        setDinnerSelectedOption(text);
      } else {
        let matches = regexMatch(dinnerOptions, text);
        setDinnerSelectedOption(text);
        setDinnerMatch(matches);
      }
    } else if (cat === "event") {
      if (!text) {
        setEventMatch([]);
        setEventSelectedOption(text);
      } else {
        let matches = regexMatch(eventOptions, text);
        setEventSelectedOption(text);
        setEventMatch(matches);
      }
    }
  };

  const dailyEvents = [
    {
      cat: "event",
      name: "event",
      icon: "akar-icons:people-group",
      placeholder: "ex :  Event Options",
      value: eventSelectedOption,
      matchOptions,
      match: eventMatch,
      setSelectedOption: setEventSelectedOption,
    },
    {
      cat: "lunch",
      name: "restaurant",
      icon: "carbon:restaurant",
      placeholder: "ex : Lunch Options",
      value: lunchSelectedOption,
      matchOptions,
      match: lunchMatch,
      setSelectedOption: setLunchSelectedOption,
    },
    {
      cat: "dinner",
      name: "restaurant",
      icon: "cil:dinner",
      placeholder: "ex : Dinner Options",
      value: dinnerSelectedOption,
      matchOptions,
      match: dinnerMatch,
      setSelectedOption: setDinnerSelectedOption,
    },
  ];

  return (
    <>
      <ScheduleProjectFormContainer>
        <DateProjectForm />
        {dailyEvents.map((event) => (
          <DailyEventsProjectForm
            key={event.cat}
            cat={event.cat}
            name={event.name}
            icon={event.icon}
            placeholder={event.placeholder}
            value={event.value}
            matchOptions={event.matchOptions}
            match={event.match}
            setSelectedOption={event.setSelectedOption}
          />
        ))}

        <SaveButton text='Add day to schedule' onClick={addDayToSchedule} />
      </ScheduleProjectFormContainer>
    </>
  );
};

export default ScheduleProjectForm;
