import { StyledAutoCompleteForm, VendorFormContainer } from "./styles";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import AddHotelsToProject from "./AddHotelsToProject/AddHotelsToProject";
import { useAxiosFetch } from "../../hooks/useAxiosFetch";
import { baseAPI } from "../../api/axios";
import { useSelector } from "react-redux";
import { selectActiveCode } from "../../features/ActiveCodeSlice";
import { useHistory } from "react-router";

const HotelForm = ({ icon, iconWidth, placeholder }) => {
  const [hotels, setHotels] = useState([]);
  const [hotelMatch, setHotelMatch] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState("");
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

  const searchHotels = (text) => {
    if (!text) {
      setHotelMatch([]);
      setSelectedHotel(text);
    } else {
      let matches = hotels.filter((hotel) => {
        const regex = new RegExp(`${text}`, "gi");
        return hotel.name.match(regex);
      });
      setSelectedHotel(text);
      setHotelMatch(matches);
    }
  };

  const pushHotelsToServer = () => {
    const hotelsToAddArr = [];
    for (let i = 0; i < hotelToAdd.length; i++) {
      for (let j = 0; j < hotels.length; j++) {
        if (hotels[j].name === hotelToAdd[i]) {
          hotelsToAddArr.push(hotels[j]);
        }
      }
      try {
        const pushHotel = () => {
          baseAPI.post(`/addHotels/${projectByCode._id}`, hotelsToAddArr);
        };
        pushHotel();
        setTimeout(() => history.push("/schedule-config"), 500);
      } catch (err) {
        console.warn(err);
      }
    }
    console.log("hotels to add array =>", hotelsToAddArr);
  };

  const removeHotelFromArray = (hotel) => {
    console.log("hotel=>", hotel);
    setHotelToAdd((prevState) =>
      prevState.filter((elements) => elements !== hotel)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = (str) => str.length === 0;
    if (!isEmpty(selectedHotel)) {
      setHotelToAdd((prevState) => [...prevState, selectedHotel]);
      setSelectedHotel([]);
      setHotelMatch([]);
    }
  };

  return (
    <>
      <VendorFormContainer>
        <div>
          <StyledAutoCompleteForm onSubmit={handleSubmit}>
            <label>
              <Icon icon={icon} width={iconWidth} />
            </label>
            <input
              type='search'
              placeholder={placeholder}
              onChange={(e) => searchHotels(e.target.value)}
              value={selectedHotel}
            />
            <input type='submit' value='Add Hotel' />
          </StyledAutoCompleteForm>
          {hotelMatch &&
            hotelMatch.map((v, i) => (
              <ul key={i}>
                <li onClick={() => setSelectedHotel(v.name)}>{v.name}</li>
              </ul>
            ))}
        </div>
        <AddHotelsToProject
          hotels={hotelToAdd}
          pushHotelsToServer={pushHotelsToServer}
          removeHotelFromArray={removeHotelFromArray}
        />
      </VendorFormContainer>
    </>
  );
};

export default HotelForm;
