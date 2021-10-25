import { StyledAutoCompleteForm } from "./styles";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import axios from "axios";

const AutoCompleteForm = ({ icon, iconWidth, placeholder }) => {
  const [hotels, setHotels] = useState([]);
  const [hotelMatch, setHotelMatch] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState("");

  useEffect(() => {
    const hotelsURL = "https://cutt-events.herokuapp.com/hotels";
    try {
      const loadHotels = async () => {
        const {
          data: { hotels },
        } = await axios.get(hotelsURL);
        setHotels(hotels);
      };
      loadHotels();
    } catch (err) {
      console.warn(err);
    }
  }, []);

  useEffect(() => {
    console.log("hotel match=>", hotelMatch);
  }, [hotelMatch]);

  console.log("hotels here =>", hotels);

  const searchHotels = (text) => {
    if (!text) {
      setHotelMatch([]);
      setSelectedHotel(text);
    } else {
      let matches = hotels.filter((hotel) => {
        const regex = new RegExp(`^${text}`, "gi");
        return hotel.name.match(regex);
      });
      setSelectedHotel(text);
      setHotelMatch(matches);
    }
  };

  const handleClick = (string) => {
    setSelectedHotel(string);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
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
            <li onClick={() => handleClick(v.name)}>{v.name}</li>
          </ul>
        ))}
    </>
  );
};

export default AutoCompleteForm;
