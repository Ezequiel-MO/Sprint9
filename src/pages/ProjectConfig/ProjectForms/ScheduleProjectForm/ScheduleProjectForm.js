import SaveButton from "../../../../uicomponents/SaveButton/SaveButton";
import { ScheduleProjectFormContainer } from "../styles";
import ProjectSelector from "../ProjectSelector/ProjectSelector";
import useScheduleProjectForm from "./useScheduleProjectForm";

const ScheduleProjectForm = () => {
  const {
    handleSubmit,
    projectByCode,
    eventOptions,
    restaurantOptions,
    selectedLunchOptions,
    selectedDinnerOptions,
    selectedMorningEventOptions,
    selectedAfternoonEventOptions,
    storeSelectedValues,
    counter,
    whichDay,
  } = useScheduleProjectForm();

  return (
    <>
      <ScheduleProjectFormContainer onSubmit={handleSubmit}>
        {projectByCode && <p>Date: {projectByCode.arrivalDay}</p>}
        <ProjectSelector
          name='morning-event'
          icon='vaadin:morning'
          options={eventOptions}
          placeholder='ex :  Morning Event Options'
          storeSelectedValues={storeSelectedValues}
          value={selectedMorningEventOptions}
        />
        <ProjectSelector
          name='lunch'
          icon='carbon:restaurant'
          options={restaurantOptions}
          placeholder='ex : Lunch Options'
          storeSelectedValues={storeSelectedValues}
          value={selectedLunchOptions}
        />
        <ProjectSelector
          name='afternoon-event'
          icon='ph:clock-afternoon-duotone'
          options={eventOptions}
          placeholder='ex :  Afternoon Event Options'
          storeSelectedValues={storeSelectedValues}
          value={selectedAfternoonEventOptions}
        />
        <ProjectSelector
          name='dinner'
          icon='cil:dinner'
          options={restaurantOptions}
          placeholder='ex : Dinner Options'
          storeSelectedValues={storeSelectedValues}
          value={selectedDinnerOptions}
        />

        <SaveButton
          text={`Add ${whichDay(counter)} to schedule`}
          type='submit'
        />
      </ScheduleProjectFormContainer>
    </>
  );
};

export default ScheduleProjectForm;
