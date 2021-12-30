import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { baseAPI } from "../../../../../api/axios";

const useHotelRatesTabs = (
  projectByCode,
  hotelOptions,
  selectedHotelOptions
) => {
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState(0);

  const [hotelRates, setHotelRates] = useState({
    DUInr: null,
    DUIprice: null,
    DoubleRoomNr: null,
    DoubleRoomPrice: null,
    breakfast: null,
    DailyTax: null,
  });

  const sendHotelRates = async (hotel) => {
    try {
      const response = await baseAPI.post(`/addHotels/${projectByCode._id}`, [
        { ...hotel, price: [hotelRates] },
      ]);
      console.log(response);

      if (selectedTab === selectedHotelOptions.length - 1) {
        history.push("/schedule-project-form");
      } else {
        setSelectedTab(selectedTab + 1);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = (e, selectedHotel) => {
    e.preventDefault();
    const hotelMatch = hotelOptions.find(
      (hotel) => hotel.name === selectedHotel.value
    );
    sendHotelRates(hotelMatch);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelRates({ ...hotelRates, [name]: value });
  };

  return { handleChange, handleSubmit, selectedTab };
};

export default useHotelRatesTabs;
