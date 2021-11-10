import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useAxiosFetch } from "../../../../hooks/useAxiosFetch";
import { useSelector } from "react-redux";
import { selectActiveCode } from "../../../../features/ActiveCodeSlice";
import { useHistory } from "react-router";
import { baseAPI } from "../../../../api/axios";
import { HotelFormContainer, AutoCompleteForm } from "../styles";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import useGetHotels from "../../../../hooks/useGetHotels";
import ProjectSelector from "../ScheduleProjectForm/ProjectSelector/ProjectSelector";
import SaveButton from "../../../../uicomponents/SaveButton/SaveButton";
import { findSelectedOptions } from "../../utils/utils";

const HotelProjectForm = () => {
  const activeCode = useSelector(selectActiveCode);
  const history = useHistory();
  const [formIsValid, setFormIsValid] = useState(false);

  const [hotels, setHotels] = useState([]);

  const { hotelOptions } = useGetHotels();

  const [selectedHotelOptions, setSelectedHotelOptions] = useState([]);

  const {
    data: { project: projectByCode },
  } = useAxiosFetch(`https://cutt-events.herokuapp.com/project/${activeCode}`);

  useEffect(() => {
    if (formIsValid) {
      try {
        baseAPI.post(`/addHotels/${projectByCode._id}`, hotels).then((res) => {
          console.log(res);
        });
      } catch (err) {
        console.warn(err);
      }
    }
  }, [formIsValid]);

  const storeSelectedValues = (array, action) => {
    if (action.action === "select-option" || action.action === "remove-value") {
      setSelectedHotelOptions(array);
    } else if (action.action === "clear") {
      setSelectedHotelOptions([]);
    }
  };

  const updateInputData = () => {
    setHotels(findSelectedOptions(selectedHotelOptions, hotelOptions));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInputData();
    setTimeout(() => history.push("/schedule-project-form"), 500);
  };

  return (
    <>
      <HotelFormContainer>
        <div>
          <AutoCompleteForm onSubmit={handleSubmit}>
            <ProjectSelector
              name='hotel'
              icon='bx:bx-hotel'
              options={hotelOptions}
              placeholder='ex : Hotel Options'
              storeSelectedValues={storeSelectedValues}
            />

            <SaveButton text={"Add Hotels to project"} type='submit' />
          </AutoCompleteForm>
        </div>
      </HotelFormContainer>
    </>
  );
};

export default HotelProjectForm;
