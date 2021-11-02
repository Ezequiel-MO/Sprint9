import { Icon } from "@iconify/react";
import { StyledAutoCompleteForm } from "../../styles";
const DailyEventsProjectForm = ({
  cat,
  icon,
  placeholder,
  name,
  value,
  searchRestaurants,
  restaurantMatch,
  setSelectedOption,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <StyledAutoCompleteForm onSubmit={handleSubmit}>
        <label>
          <Icon icon={icon} width='28' />
        </label>
        <input
          type='search'
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) => searchRestaurants(e.target.value, cat)}
        />
        <input type='submit' value='Add to your Day' />
      </StyledAutoCompleteForm>
      {restaurantMatch &&
        restaurantMatch.map((v, i) => (
          <ul key={i}>
            <li onClick={() => setSelectedOption(v.name)}>{v.name}</li>
          </ul>
        ))}
    </div>
  );
};

export default DailyEventsProjectForm;
