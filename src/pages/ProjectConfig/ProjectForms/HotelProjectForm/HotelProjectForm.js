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

const HotelProjectForm = () => {
  const [hotels, setHotels] = useState([]);

  const [hotelToAdd, setHotelToAdd] = useState([]);
  const {
    data: { hotels: hotelData },
  } = useAxiosFetch("https://cutt-events.herokuapp.com/hotels");
  const activeCode = useSelector(selectActiveCode);
  const history = useHistory();

  const {
    data: { project: projectByCode },
  } = useAxiosFetch(`https://cutt-events.herokuapp.com/project/${activeCode}`);

  console.log("project by code =>", projectByCode);

  useEffect(() => {
    setHotels(hotelData);
  }, [hotelData]);

  console.log("hotel to add =>", hotelToAdd, "hotels =>", hotels);

  const hotelsToAddArr = [];
  const pushHotelsToServer = () => {
    for (let i = 0; i < hotelToAdd.length; i++) {
      for (let j = 0; j < hotels.length; j++) {
        if (hotels[j].name === hotelToAdd[i].label) {
          hotelsToAddArr.push(hotels[j]);
        }
      }
      try {
        const pushHotel = () => {
          if (projectByCode._id) {
            baseAPI.post(`/addHotels/${projectByCode._id}`, hotelsToAddArr);
            pushHotel();
          }
        };
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pushHotelsToServer();
    setTimeout(() => history.push("/schedule-project-form"), 500);
  };

  let valueLabelpairs = [];
  useEffect(() => {
    for (let i = 0; i < hotels?.length; i++) {
      valueLabelpairs.push({
        value: hotels[i].name,
        label: hotels[i].name,
      });
    }
    console.log("value label pairs=>", valueLabelpairs);
  }, [hotels, valueLabelpairs]);

  useEffect(() => {
    console.log("hotel to add =>", hotelToAdd);
  }, [hotelToAdd]);

  const storeSelectedValues = (array, action) => {
    if (action.action === "select-option" || action.action === "remove-value") {
      setHotelToAdd(array);
    } else if (action.action === "clear") {
      setHotelToAdd([]);
    }
  };

  return (
    <>
      <HotelFormContainer>
        <div>
          <AutoCompleteForm onSubmit={handleSubmit}>
            <label>
              <Icon icon='bx:bx-hotel' width='28' />
            </label>
            <Select
              components={makeAnimated()}
              name='hotel'
              options={valueLabelpairs}
              noOptionsMessage={() => "No options selected :("}
              placeholder='Add your hotels'
              isSearchable
              isClearable
              isMulti
              onChange={storeSelectedValues}
            />
            <input type='submit' value='Add Hotels to Project' />
          </AutoCompleteForm>
        </div>
      </HotelFormContainer>
    </>
  );
};

export default HotelProjectForm;
