import { Icon } from "@iconify/react";
import { StyledAutoCompleteForm } from "./styles";
import { useState, useEffect } from "react";
import { useAxiosFetch } from "../../hooks/useAxiosFetch";

const AddLunchOptions = () => {
  const [lunchOptions, setLunchOptions] = useState([]);
  const [restaurantMatch, setRestaurantMatch] = useState([]);
  const [selectedLunchOption, setSelectedLunchOption] = useState("");

  const {
    data: { restaurants: restaurantData },
  } = useAxiosFetch("https://cutt-events.herokuapp.com/restaurants");

  console.log("restaurant data=>", restaurantData);

  useEffect(() => {
    setLunchOptions(restaurantData);
  }, [restaurantData]);

  const searchRestaurants = (text) => {
    if (!text) {
      setRestaurantMatch([]);
      setSelectedLunchOption(text);
    } else {
      let matches = lunchOptions.filter((lunch) => {
        const regex = new RegExp(`${text}`, "gi");
        return lunch.name.match(regex);
      });
      setSelectedLunchOption(text);
      setRestaurantMatch(matches);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <StyledAutoCompleteForm onSubmit={handleSubmit}>
        <label>
          <Icon icon='carbon:restaurant' width='28' />
        </label>
        <input
          type='search'
          placeholder='ex : Add Lunch Options'
          name='lunch'
          onChange={(e) => searchRestaurants(e.target.value)}
          value={selectedLunchOption}
        />
        <input type='submit' value='Add to your Day' />
      </StyledAutoCompleteForm>
      {restaurantMatch &&
        restaurantMatch.map((v, i) => (
          <ul key={i}>
            <li onClick={() => setSelectedLunchOption(v.name)}>{v.name}</li>
          </ul>
        ))}
    </>
  );
};

export default AddLunchOptions;
