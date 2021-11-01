import {
  AddHotelsToProjectContainer,
  AddHotelContainer,
  StyledAddHotel,
} from "../../styles";
import { Icon } from "@iconify/react";

const AddDateToProject = ({
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
      <button onClick={pushLunchOptionsToServer}>Add Date to Project</button>
    </AddHotelsToProjectContainer>
  );
};

export default AddDateToProject;
