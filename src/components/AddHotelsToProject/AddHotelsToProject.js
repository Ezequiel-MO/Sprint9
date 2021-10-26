import SaveButton from "../../uicomponents/SaveButton/SaveButton";
import {
  AddHotelsToProjectContainer,
  AddHotelContainer,
  StyledAddHotel,
} from "./styles";
import { Icon } from "@iconify/react";

const AddHotelsToProject = ({ hotels, handleClick }) => {
  console.log("hotels to add =>", hotels);

  return (
    <AddHotelsToProjectContainer>
      <AddHotelContainer>
        {hotels.map((hotel) => (
          <StyledAddHotel key={hotel}>
            <span>
              <Icon
                icon='octicon:x-circle-fill-12'
                color='#ea5933'
                width='20'
              />
            </span>
            <h4>{hotel}</h4>
          </StyledAddHotel>
        ))}
      </AddHotelContainer>
      <SaveButton text='Add Hotels to Project' onClick={handleClick} />
    </AddHotelsToProjectContainer>
  );
};

export default AddHotelsToProject;
