import { AutoCompleteDiv, VendorFormContainer } from "./styles";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useAxiosFetch } from "../../hooks/useAxiosFetch";
import { useSelector } from "react-redux";
import { selectActiveCode } from "../../features/ActiveCodeSlice";
import { baseAPI } from "../../api/axios";
import { useHistory } from "react-router";
import SaveButton from "../../uicomponents/SaveButton/SaveButton";
import AddLunchOptions from "./AddLunchOptions";

const ScheduleForm = () => {
  const [schedule, setSchedule] = useState([]);
  const [scheduleInputData, setScheduleInputData] = useState({
    date: "Arrival Day - Nov 23rd 2021",
    events: [],
    dinner: [],
  });
  const history = useHistory();
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
      <VendorFormContainer>
        <AutoCompleteDiv>
          <label>
            <Icon icon='bx:bx-calendar' width='28' />
          </label>
          <input
            type='search'
            placeholder='ex : Arrival Day - Nov 3rd 2021'
            name='date'
            onChange={handleChange}
            value={date}
          />
        </AutoCompleteDiv>
        <AutoCompleteDiv>
          <label>
            <Icon icon='carbon:events' width='28' />
          </label>
          <input
            type='search'
            placeholder='ex : Add Events One by One'
            name='events'
            onChange={handleChange}
            value={events}
          />
          <input type='button' value='Add to your Day' />
        </AutoCompleteDiv>
        <AddLunchOptions />
        <AutoCompleteDiv>
          <label>
            <Icon icon='cil:dinner' width='28' />
          </label>
          <input
            type='search'
            placeholder='ex : Add Dinner Options'
            name='dinner'
            onChange={handleChange}
            value={dinner}
          />
          <input type='button' value='Add to your Day' />
        </AutoCompleteDiv>
        {/* {hotelMatch &&
            hotelMatch.map((v, i) => (
              <ul key={i}>
                <li onClick={() => setSelectedHotel(v.name)}>{v.name}</li>
              </ul>
            ))} */}

        <SaveButton type='button' text='Add Day to Schedule' />
      </VendorFormContainer>
    </>
  );
};

export default ScheduleForm;
