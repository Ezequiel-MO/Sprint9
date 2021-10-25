import { StyledAutoCompleteForm } from "./styles";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { baseAPI } from "../../../api/axios";

const AutoCompleteForm = ({ icon, iconWidth, placeholder }) => {
  const [hotels, setHotels] = useState([]);
  const [hotelMatch, setHotelMatch] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState("");

  useEffect(() => {
    console.log("hotels=>", hotels);
  }, [hotels]);

  useEffect(() => {
    /* try {
      const pushHotel = () => {
        baseAPI.post(`/addHotels/${hotels[0]._id}`);
      };
      pushHotel();
    } catch (err) {
      console.warn(err);
    } */
  }, [selectedHotel]);

  useEffect(() => {
    try {
      const loadHotels = async () => {
        const {
          data: { hotels },
        } = await baseAPI.get("/hotels");
        setHotels(hotels);
      };
      loadHotels();
    } catch (err) {
      console.warn(err);
    }
  }, []);

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
            <li onClick={() => setSelectedHotel(v.name)}>{v.name}</li>
          </ul>
        ))}
    </>
  );
};

export default AutoCompleteForm;
