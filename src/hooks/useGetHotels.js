import { useAxiosFetch } from "./useAxiosFetch";
import { useEffect, useState } from "react";
import { baseURL } from "../api/axios";

const useGetHotels = () => {
  const [hotelOptions, setHotelOptions] = useState([]);
  const {
    data: { hotels: hotelData },
  } = useAxiosFetch(`${baseURL}/hotels`);
  useEffect(() => {
    setHotelOptions(hotelData);
  }, [hotelData]);

  return { hotelOptions };
};

export default useGetHotels;
