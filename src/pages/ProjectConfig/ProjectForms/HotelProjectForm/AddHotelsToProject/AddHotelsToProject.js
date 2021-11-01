import {
  AddHotelsToProjectContainer,
  AddOptionsContainer,
  StyledAddOption,
} from "./styles";
import { Icon } from "@iconify/react";
import SaveButton from "../../../../../uicomponents/SaveButton/SaveButton";

const AddHotelsToProject = ({
  hotels,
  pushHotelsToServer,
  removeHotelFromArray,
}) => {
  console.log("hotels to add =>", hotels);

  return (
    <AddHotelsToProjectContainer>
      <AddOptionsContainer>
        {hotels.map((hotel) => (
          <StyledAddOption key={hotel}>
            <button onClick={() => removeHotelFromArray(hotel)}>
              <span>
                <Icon
                  icon='octicon:x-circle-fill-12'
                  color='#ea5933'
                  width='20'
                />
              </span>
            </button>

            <h4>{hotel}</h4>
          </StyledAddOption>
        ))}
      </AddOptionsContainer>
      <SaveButton text='Add Hotels to Project' onClick={pushHotelsToServer} />
    </AddHotelsToProjectContainer>
  );
};

export default AddHotelsToProject;
