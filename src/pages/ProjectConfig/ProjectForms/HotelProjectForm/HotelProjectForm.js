import { useState, useEffect } from "react";
import { useAxiosFetch } from "../../../../hooks/useAxiosFetch";
import { useSelector } from "react-redux";
import { selectActiveCode } from "../../../../features/ActiveCodeSlice";
import { useHistory } from "react-router";
import { baseAPI } from "../../../../api/axios";
import {
  HotelProjectFormContainer,
  HotelFormContainer,
  AutoCompleteForm,
} from "../styles";
import useGetHotels from "../../../../hooks/useGetHotels";
import SaveButton from "../../../../uicomponents/SaveButton/SaveButton";
import { findSelectedOptions } from "../../utils/utils";
import ProjectSelector from "../ProjectSelector/ProjectSelector";
import HotelRatesTabs from "./HotelRatesTabs/HotelRatesTabs";

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
      if (projectByCode) {
        try {
          baseAPI
            .post(`/addHotels/${projectByCode._id}`, hotels)
            .then((res) => {
              console.log(res);
              setTimeout(() => history.push("/schedule-project-form"), 1000);
            });
        } catch (err) {
          console.warn(err);
        }
      } else alert("Loading project ...");
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
    /*  setFormIsValid(true); */
  };

  return (
    <>
      <HotelFormContainer>
        <AutoCompleteForm onSubmit={handleSubmit}>
          <ProjectSelector
            name='hotel'
            icon='bx:bx-hotel'
            options={hotelOptions}
            placeholder='ex : Hotel Options'
            storeSelectedValues={storeSelectedValues}
          />
        </AutoCompleteForm>
        {!formIsValid && (
          <HotelProjectFormContainer>
            <HotelRatesTabs
              hotelOptions={hotelOptions}
              selectedHotelOptions={selectedHotelOptions}
              projectByCode={projectByCode}
            />
          </HotelProjectFormContainer>
        )}
        {formIsValid && (
          <SaveButton text={"Add Hotels to project"} type='submit' />
        )}
      </HotelFormContainer>
    </>
  );
};

export default HotelProjectForm;
