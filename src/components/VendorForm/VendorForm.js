import { StyledAutoCompleteForm, VendorFormContainer } from "./styles";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { baseAPI } from "../../api/axios";
import AddHotelsToProject from "../AddHotelsToProject/AddHotelsToProject";

const VendorForm = ({ icon, iconWidth, placeholder }) => {
  const [hotels, setHotels] = useState([]);
  const [hotelMatch, setHotelMatch] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState("");
  const [hotelToAdd, setHotelToAdd] = useState([]);

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
          baseAPI.post("/addHotels/6177b0a9d3cae34ada99a284", hotelsToAddArr);
        };
        pushHotel();
      } catch (err) {
        console.warn(err);
      }
    }
    console.log("hotels to add array =>", hotelsToAddArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHotelToAdd((prevState) => [...prevState, selectedHotel]);
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
          handleClick={pushHotelsToServer}
        />
      </VendorFormContainer>
    </>
  );
};

export default VendorForm;
