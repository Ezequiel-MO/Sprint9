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
import ProjectSelector from "../ProjectSelector/ProjectSelector";
import { findSelectedOptions, whichDay } from "../../utils/utils";
import useComputeTotalDays from "../../../../hooks/useComputeTotalDays";

const ScheduleProjectForm = () => {
  const history = useHistory();
  const [schedule, setSchedule] = useState([]);

  const [dayProgram, setDayProgram] = useState({});

  const { restaurantOptions } = useGetRestaurants();
  const { eventOptions } = useGetEvents();

  const [selectedLunchOptions, setSelectedLunchOptions] = useState([]);
  const [selectedDinnerOptions, setSelectedDinnerOptions] = useState([]);
  const [selectedMorningEventOptions, setSelectedMorningEventOptions] =
    useState([]);
  const [selectedAfternoonEventOptions, setSelectedAfternoonEventOptions] =
    useState([]);

  const [counter, setCounter] = useState(1);

  const [formIsValid, setFormIsValid] = useState(false);

  const activeCode = useSelector(selectActiveCode);

  // fetch project by code
  const {
    data: { project: projectByCode },
  } = useAxiosFetch(`${baseURL}/project/${activeCode}`);

  // use useComputeTotalDays hook to compute total days
  const { totalDays } = useComputeTotalDays(projectByCode);

  const storeSelectedValues = (array, action) => {
    //in case an option is added or removed
    if (action.action === "select-option" || action.action === "remove-value") {
      //determine if it is lunch or dinner or event
      //update the state accordingly with array
      if (action.name === "lunch") {
        setSelectedLunchOptions(array);
      } else if (action.name === "dinner") {
        setSelectedDinnerOptions(array);
      } else if (action.name === "morning-event") {
        setSelectedMorningEventOptions(array);
      } else if (action.name === "afternoon-event") {
        setSelectedAfternoonEventOptions(array);
      }
      //if the whole select is cleared
      else if (action.action === "clear") {
        //determine if it is lunch or dinner or event
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

  //useEffect to post schedule to database when formIsValid is true
  useEffect(() => {
    if (formIsValid) {
      try {
        baseAPI
          .post(`/addSchedule/${projectByCode._id}`, schedule)
          .then((response) => {
            console.log("response=>", response);
            history.push("/");
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [formIsValid]);

  useEffect(() => {
    if (counter < totalDays) {
      setSchedule([...schedule, dayProgram]);
      setCounter((prevState) => prevState + 1);
    } else if (counter === totalDays) {
      //if counter === daydifference, update schedule and redirect to next page
      setSchedule([...schedule, dayProgram]);
      setFormIsValid(true);
    }
  }, [dayProgram]);

  const updateInputData = () => {
    //update dayProgram
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
    //find selectedInputOptions in restaurantOptions
    updateInputData();
    setSelectedLunchOptions([]);
    setSelectedDinnerOptions([]);
    setSelectedMorningEventOptions([]);
    setSelectedAfternoonEventOptions([]);
  };

  return (
    <>
      <ScheduleProjectFormContainer onSubmit={handleSubmit}>
        {projectByCode && <p>Date: {projectByCode.arrivalDay}</p>}
        <ProjectSelector
          name='morning-event'
          icon='vaadin:morning'
          options={eventOptions}
          placeholder='ex :  Morning Event Options'
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
          name='afternoon-event'
          icon='ph:clock-afternoon-duotone'
          options={eventOptions}
          placeholder='ex :  Afternoon Event Options'
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
