import SaveButton from "../../../../uicomponents/SaveButton/SaveButton";
import { ScheduleProjectFormContainer } from "../styles";
import ProjectSelector from "../ProjectSelector/ProjectSelector";
import SchedulePFLogic from "./SchedulePFLogic";

const ScheduleProjectForm = () => {
  const {
    handleSubmit,
    projectByCode,
    eventOptions,
    restaurantOptions,
    storeSelectedValues,
    counter,
    whichDay,
  } = SchedulePFLogic();

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
        />
        <ProjectSelector
          name='lunch'
          icon='carbon:restaurant'
          options={restaurantOptions}
          placeholder='ex : Lunch Options'
          storeSelectedValues={storeSelectedValues}
        />
        <ProjectSelector
          name='afternoon-event'
          icon='ph:clock-afternoon-duotone'
          options={eventOptions}
          placeholder='ex :  Afternoon Event Options'
          storeSelectedValues={storeSelectedValues}
        />
        <ProjectSelector
          name='dinner'
          icon='cil:dinner'
          options={restaurantOptions}
          placeholder='ex : Dinner Options'
          storeSelectedValues={storeSelectedValues}
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
