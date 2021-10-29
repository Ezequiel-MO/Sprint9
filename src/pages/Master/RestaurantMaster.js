import { useEffect, useState } from "react";
import { baseAPI } from "../../api/axios";
import { useHistory } from "react-router-dom";

const RestaurantMaster = () => {
  const history = useHistory();
  const [restaurantInputData, setRestaurantInputData] = useState({
    name: "Barceloneta",
    city: "Barcelona",
    textContent: ["Fish Restaurant in Barcelona's luxury Yacht marine"],
    imageContentUrl: [],
  });

  useEffect(() => {
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
  }, []);

  return <h1>Restaurant master</h1>;
};

export default RestaurantMaster;
