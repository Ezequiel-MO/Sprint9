import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectActiveCode } from "../../../../features/ActiveCodeSlice";
import { useAxiosFetch } from "../../../../hooks/useAxiosFetch";
import { baseAPI } from "../../../../api/axios";
import SaveButton from "../../../../uicomponents/SaveButton/SaveButton";
import LunchProjectForm from "./LunchProjectForm/LunchProjectForm";
import EventProjectForm from "./EventProjectForm/EventProjectForm";
import DinnerProjectForm from "./DinnerProjectForm/DinnerProjectForm";
import DateProjectForm from "./DateProjectForm/DateProjectForm";
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

  const [restaurantMatch, setRestaurantMatch] = useState([]);
  const [lunchOptions, setLunchOptions] = useState([]);
  const [dinnerOptions, setDinnerOptions] = useState([]);
  const [lunchSelectedOption, setLunchSelectedOption] = useState("");
  const [dinnerSelectedOption, setDinnerSelectedOption] = useState("");
  const activeCode = useSelector(selectActiveCode);

  // fetch project by code
  const {
    data: { project: projectByCode },
  } = useAxiosFetch(`https://cutt-events.herokuapp.com/project/${activeCode}`);

  const {
    data: { restaurants: restaurantData },
  } = useAxiosFetch("https://cutt-events.herokuapp.com/restaurants");

  useEffect(() => {
    setLunchOptions(restaurantData);
  }, [restaurantData]);

  useEffect(() => {
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

  const searchRestaurants = (text, cat) => {
    if (cat === "lunch") {
      if (!text) {
        setRestaurantMatch([]);
        setLunchSelectedOption(text);
      } else {
        let matches = lunchOptions.filter((lunch) => {
          const regex = new RegExp(`${text}`, "gi");
          return lunch.name.match(regex);
        });
        setLunchSelectedOption(text);
        setRestaurantMatch(matches);
      }
    } else {
      if (!text) {
        setRestaurantMatch([]);
        setDinnerSelectedOption(text);
      } else {
        let matches = dinnerOptions.filter((dinner) => {
          const regex = new RegExp(`${text}`, "gi");
          return dinner.name.match(regex);
        });
        setDinnerSelectedOption(text);
        setRestaurantMatch(matches);
      }
    }
  };

  return (
    <>
      <ScheduleProjectFormContainer>
        <DailyEventsProjectForm
          cat='lunch'
          name='restaurant'
          icon='carbon:restaurant'
          placeholder='ex : Add Lunch Test'
          value={lunchSelectedOption}
          searchRestaurants={searchRestaurants}
          restaurantMatch={restaurantMatch}
          setSelectedOption={setLunchSelectedOption}
        />
        <DailyEventsProjectForm
          cat='dinner'
          name='restaurant'
          icon='cil:dinner'
          placeholder='ex : Add Dinner Test'
          value={dinnerSelectedOption}
          searchRestaurants={searchRestaurants}
          restaurantMatch={restaurantMatch}
          setSelectedOption={setDinnerSelectedOption}
        />
        <DateProjectForm />
        <EventProjectForm />
        <LunchProjectForm />
        <DinnerProjectForm />
        <SaveButton text='Add day to schedule' onClick={addDayToSchedule} />
      </ScheduleProjectFormContainer>
    </>
  );
};

export default ScheduleProjectForm;
