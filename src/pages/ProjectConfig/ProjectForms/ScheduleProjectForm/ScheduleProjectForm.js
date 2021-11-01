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

const ScheduleProjectForm = () => {
  const [schedule, setSchedule] = useState([]);
  const [scheduleInputData, setScheduleInputData] = useState({
    date: "Arrival Day - Nov 23rd 2021",
    events: [],
    dinner: [],
  });

  const { date, events, dinner } = scheduleInputData;
  const activeCode = useSelector(selectActiveCode);

  // fetch project by code
  const {
    data: { project: projectByCode },
  } = useAxiosFetch(`https://cutt-events.herokuapp.com/project/${activeCode}`);

  console.log("project by code =>", projectByCode);

  useEffect(
    () =>
      console.log(
        "schedule input data=>",
        scheduleInputData,
        "schedule =>",
        schedule
      ),
    [scheduleInputData, schedule]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScheduleInputData((prevState) => ({
      ...prevState,
      [name]: [{ value }],
    }));
  };

  useEffect(() => {
    try {
      const pushScheduleToServer = () => {
        baseAPI.post(`/addSchedule/${projectByCode._id}`, {
          date: schedule.date,
          events: [
            {
              name: "city tour",
              city: "Barcelona",
              titleSideBar: "city tour",
              title: "City tour",
              textContent: ["bla bla"],
              imageContentUrl: [],
            },
          ],
          lunch: [],
          dinner: [],
        });
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

  return (
    <>
      <ScheduleProjectFormContainer>
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
