import { useState, useEffect } from "react";
import { baseAPI } from "../../../api/axios";

const RestaurantMFLogic = (fileInput) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [textContent, setTextContent] = useState([]);
  const [introduction, setIntroduction] = useState([]);
  const [restaurant, setRestaurant] = useState({
    name: "",
    city: "",
    longitude: "",
    latitude: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleTextIntroduction = (e) => {
    setIntroduction([e.target.value]);
  };

  const handleTextDescription = (e) => {
    setTextContent([e.target.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormIsValid(true);
  };

  useEffect(() => {
    const formData = new FormData();
    for (const key in restaurant) {
      formData.append(key, restaurant[key]);
    }
    formData.append("textContent", JSON.stringify(textContent));
    formData.append("introduction", JSON.stringify(introduction));
    for (let i = 0; i < fileInput.current.files.length; i++) {
      formData.append("images", fileInput.current.files[i]);
    }
    if (formIsValid) {
      baseAPI
        .post("/restaurants", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }, [formIsValid]);
  return {
    handleChange,
    handleSubmit,
    handleTextIntroduction,
    handleTextDescription,
    restaurant,
    introduction,
    textContent,
  };
};

export default RestaurantMFLogic;
