import {
  AddOptionsToProjectContainer,
  AddOptionsContainer,
  StyledAddOption,
} from "../../styles";
import { Icon } from "@iconify/react";

const AddDateToProject = ({
  lunchOptions,
  pushLunchOptionsToServer,
  removeLunchOptionFromArray,
}) => {
  console.log("lunch options to add =>", lunchOptions);

  return (
    <AddOptionsToProjectContainer>
      <AddOptionsContainer>
        {lunchOptions?.map((lunch) => (
          <StyledAddOption key={lunch}>
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
          </StyledAddOption>
        ))}
      </AddOptionsContainer>
      <button onClick={pushLunchOptionsToServer}>Add Date to Project</button>
    </AddOptionsToProjectContainer>
  );
};

export default AddDateToProject;
