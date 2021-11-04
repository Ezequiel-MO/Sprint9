import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectActiveCode } from "../../../../features/ActiveCodeSlice";
import { useAxiosFetch } from "../../../../hooks/useAxiosFetch";
import { baseURL } from "../../../../api/axios";
import SaveButton from "../../../../uicomponents/SaveButton/SaveButton";
import { ScheduleProjectFormContainer } from "../styles";

import { baseAPI } from "../../../../api/axios";
import { useHistory } from "react-router";
import useGetRestaurants from "../../../../hooks/useGetRestaurants";
import useGetEvents from "../../../../hooks/useGetEvents";
import DailyEventsProjectSelector from "./DailyEventsProjectSelector/DailyEventsProjectSelector";

const ScheduleProjectForm = () => {
  const history = useHistory();
  const [schedule, setSchedule] = useState([]);

  const [dayProgram, setDayProgram] = useState({});

  const { restaurantOptions } = useGetRestaurants();
  const { eventOptions } = useGetEvents();

  const [selectedLunchOptions, setselectedLunchOptions] = useState([]);
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
  } = useAxiosFetch(`${baseURL}/project/${activeCode}`);

  const storeSelectedValues = (array, action) => {
    console.log("array=>", array, "action=>", action);
    //in case an option is added
    if (action.action === "select-option") {
      //determine if it is lunch or dinner or event
      //update the state accordingly with array
      if (action.name === "lunch") {
        setselectedLunchOptions(array);
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
        setselectedLunchOptions(array);
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
        setselectedLunchOptions([]);
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

  useEffect(() => {
    console.log("schedule", schedule);
    //add schedule input data to schedule array
  }, [schedule]);

  useEffect(() => {
    setSchedule([...schedule, dayProgram]);
    //add schedule input data to schedule array
  }, [dayProgram]);

  const pushScheduleToServer = () => {
    console.log("push data=>");
    //try catch post schedule to baseURL/addSchedule/:id
    try {
      baseAPI.post(`/addSchedule/${projectByCode._id}`, schedule);
      setTimeout(() => {
        history.push("/");
      }, 1000);
    } catch (err) {
      console.warn(err);
    }
    //if successful, redirect to project page
  };

  useEffect(() => {
    setSchedule([...schedule, dayProgram]);
  }, [dayProgram]);

  const updateSchedule = () => {
    //if counter < daydifference, update schedule
    if (counter < daydifference) {
      setCounter((prevState) => prevState + 1);
    } else if (counter === daydifference) {
      //if counter === daydifference, update schedule and redirect to next page
      pushScheduleToServer();
    }
  };

  const findSelectedOptions = (array, fullArray) => {
    //find the selected options in the array and return them
    let selectedOptionsFullObject = [];
    let flatArray = array.map((item) => item.value);
    //iterate through the lunch options array
    fullArray.forEach((item) => {
      //find the selected lunch options
      if (flatArray.includes(item.name)) {
        selectedOptionsFullObject.push(item);
      }
    });
    return selectedOptionsFullObject;
  };

  const updateInputData = () => {
    setDayProgram({
      ...dayProgram,
      date: whichDay(counter),
      lunch: findSelectedOptions(selectedLunchOptions, restaurantOptions),
      dinner: findSelectedOptions(selectedDinnerOptions, restaurantOptions),
      event: findSelectedOptions(selectedEventOptions, eventOptions),
    });
    updateSchedule();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //find selectedInputOptions in restaurantOptions
    updateInputData();
    setselectedLunchOptions([]);
    setSelectedDinnerOptions([]);
    setSelectedEventOptions([]);
  };

  return (
    <>
      <ScheduleProjectFormContainer onSubmit={handleSubmit}>
        {projectByCode && <p>Date: {startDate}</p>}

        <DailyEventsProjectSelector
          name='event'
          icon='akar-icons:people-group'
          options={eventOptions}
          placeholder='ex :  Event Options'
          storeSelectedValues={storeSelectedValues}
        />
        <DailyEventsProjectSelector
          name='lunch'
          icon='carbon:restaurant'
          options={restaurantOptions}
          placeholder='ex : Lunch Options'
          storeSelectedValues={storeSelectedValues}
        />
        <DailyEventsProjectSelector
          name='dinner'
          icon='cil:dinner'
          options={restaurantOptions}
          placeholder='ex : Dinner Options'
          storeSelectedValues={storeSelectedValues}
        />

        <SaveButton
          text={`Add ${whichDay(counter)} to schedule`}
          type='submit'
        />
      </ScheduleProjectFormContainer>
    </>
  );
};

export default ScheduleProjectForm;
