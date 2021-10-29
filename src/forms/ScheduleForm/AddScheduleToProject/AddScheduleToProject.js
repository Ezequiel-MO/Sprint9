import SaveButton from "../../../uicomponents/SaveButton/SaveButton";
import {
  AddHotelsToProjectContainer,
  AddHotelContainer,
  StyledAddHotel,
} from "./styles";
import { Icon } from "@iconify/react";

const AddScheduleToProject = ({ schedule, addDayToSchedule }) => {
  return (
    <AddHotelsToProjectContainer>
      <AddHotelContainer>
        <h3>Display Schedule Object</h3>
      </AddHotelContainer>
      <SaveButton text='Add Day to Schedule' onClick={addDayToSchedule} />
    </AddHotelsToProjectContainer>
  );
};

export default AddScheduleToProject;
