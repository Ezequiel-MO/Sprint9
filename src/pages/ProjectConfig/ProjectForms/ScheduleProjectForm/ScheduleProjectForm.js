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
import useGetHotels from "../../../../hooks/useGetHotels";
import ProjectSelector from "./ProjectSelector/ProjectSelector";
import axios from "axios";

const ScheduleProjectForm = () => {
  const history = useHistory();
  const [schedule, setSchedule] = useState([]);

  const [dayProgram, setDayProgram] = useState({});
  const [projectHotels, setProjectHotels] = useState([]);

  const { restaurantOptions } = useGetRestaurants();
  const { eventOptions } = useGetEvents();
  const { hotelOptions } = useGetHotels();

  const [selectedHotelOptions, setSelectedHotelOptions] = useState([]);
  const [selectedLunchOptions, setselectedLunchOptions] = useState([]);
  const [selectedDinnerOptions, setSelectedDinnerOptions] = useState([]);
  const [selectedEventOptions, setSelectedEventOptions] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [counter, setCounter] = useState(1);
  const [daydifference, setDayDifference] = useState(0);

  const activeCode = useSelector(selectActiveCode);

  // fetch project by code
  const {
    data: { project: projectByCode },
  } = useAxiosFetch(`${baseURL}/project/${activeCode}`);

  const storeSelectedValues = (array, action) => {
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
      } else if (action.name === "hotel") {
        setSelectedHotelOptions(array);
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
        } else if (action.name === "hotel") {
          setSelectedHotelOptions(array);
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
        } else if (action.name === "hotel") {
          setSelectedHotelOptions([]);
        }
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

  const pushScheduleToServer = () => {
    try {
      baseAPI
        .post(`/addSchedule/${projectByCode._id}`, schedule)
        .then((response) => {
          history.push("/");
        });
    } catch (err) {
      console.warn(err);
    }
    //if successful, redirect to project page
  };

  const pushHotelsToServer = () => {
    console.log("hotels pushed now to server :)=>", projectHotels);
    try {
      baseAPI
        .post(`/addHotels/${projectByCode._id}`, projectHotels)
        .then((response) => {
          console.log("response=>", response);
          pushScheduleToServer();
        });
    } catch (err) {
      console.warn(err);
    }
  };

  const updateProgram = () => {
    //if counter < daydifference, update schedule
    if (counter < daydifference) {
      setCounter((prevState) => prevState + 1);
    } else if (counter === daydifference) {
      //if counter === daydifference, update schedule and redirect to next page
      pushHotelsToServer();
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

  useEffect(() => {
    console.log("updated schedule =>", schedule);
  }, [schedule]);

  useEffect(() => {
    setSchedule([...schedule, dayProgram]);
    console.log("program elements =>", dayProgram, projectHotels);
  }, [dayProgram, projectHotels]);

  const updateInputData = () => {
    setDayProgram({
      ...dayProgram,
      date: whichDay(counter),
      lunch: findSelectedOptions(selectedLunchOptions, restaurantOptions),
      dinner: findSelectedOptions(selectedDinnerOptions, restaurantOptions),
      event: findSelectedOptions(selectedEventOptions, eventOptions),
    });
    setProjectHotels(findSelectedOptions(selectedHotelOptions, hotelOptions));
    updateProgram();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //find selectedInputOptions in restaurantOptions
    updateInputData();
    setselectedLunchOptions([]);
    setSelectedDinnerOptions([]);
    setSelectedEventOptions([]);
    setSelectedHotelOptions([]);
  };

  return (
    <>
      <ScheduleProjectFormContainer onSubmit={handleSubmit}>
        <ProjectSelector
          name='hotel'
          icon='bx:bx-hotel'
          options={hotelOptions}
          placeholder='ex :  Hotel Options'
          storeSelectedValues={storeSelectedValues}
        />
        {projectByCode && <p>Date: {startDate}</p>}
        <ProjectSelector
          name='event'
          icon='akar-icons:people-group'
          options={eventOptions}
          placeholder='ex :  Event Options'
          storeSelectedValues={storeSelectedValues}
        />
        <ProjectSelector
          name='lunch'
          icon='carbon:restaurant'
          options={restaurantOptions}
          placeholder='ex : Lunch Options'
          storeSelectedValues={storeSelectedValues}
        />
        <ProjectSelector
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
