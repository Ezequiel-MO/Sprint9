import {
  AddHotelsToProjectContainer,
  AddHotelContainer,
  StyledAddHotel,
} from "../../styles";
import { Icon } from "@iconify/react";
import SaveButton from "../../../../../../uicomponents/SaveButton/SaveButton";

const AddLunchOptionsToProject = ({
  lunchOptions,
  pushLunchOptionsToServer,
  removeLunchOptionFromArray,
}) => {
  console.log("lunch options to add =>", lunchOptions);

  return (
    <AddHotelsToProjectContainer>
      <AddHotelContainer>
        {lunchOptions?.map((lunch) => (
          <StyledAddHotel key={lunch}>
            <button onClick={() => removeLunchOptionFromArray(lunch)}>
              <span>
                <Icon
                  icon='octicon:x-circle-fill-12'
                  color='#ea5933'
                  width='20'
                />
              </span>
            </button>

            <h4>{lunch}</h4>
          </StyledAddHotel>
        ))}
      </AddHotelContainer>
      <button onClick={pushLunchOptionsToServer}>
        Add Lunch options to Project
      </button>
    </AddHotelsToProjectContainer>
  );
};

export default AddLunchOptionsToProject;
