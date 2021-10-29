import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { baseAPI } from "../../api/axios";

const RestaurantConfig = () => {
  const history = useHistory();
  const [formIsValid, setFormIsValid] = useState(false);
  const [restaurantInputData, setRestaurantInputData] = useState({
    name: "Barceloneta",
    city: "Barcelona",
    textContent: ["Fish Restaurant in Barcelona's luxury Yacht marine"],
    imageContentUrl: [],
  });

  useEffect(() => {
    if (formIsValid) {
      const restaurantFormData = new FormData();
      for (const [key, value] of Object.entries(restaurantInputData)) {
        restaurantFormData.append(key, value);
      }
      const postRestaurantData = () => {
        baseAPI
          .post("/restaurants", restaurantFormData)
          .then((res) => console.log("res=>", res))
          .catch((err) => console.log(err));
      };
      postRestaurantData();
      setTimeout(() => history.push("/vendor-master"), 500);
    }
  }, []);

  return <h3>Restaurant</h3>;
};

export default RestaurantConfig;
