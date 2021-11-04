import { useAxiosFetch } from "./useAxiosFetch";
import { useEffect, useState } from "react";
import { baseURL } from "../api/axios";

const useGetRestaurants = () => {
  const [restaurantOptions, setRestaurantOptions] = useState([]);
  const {
    data: { restaurants: restaurantData },
  } = useAxiosFetch(`${baseURL}/restaurants`);
  useEffect(() => {
    setRestaurantOptions(restaurantData);
  }, [restaurantData]);

  return { restaurantOptions };
};

export default useGetRestaurants;
