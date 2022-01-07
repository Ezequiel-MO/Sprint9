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
    selectedOptions,
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
          value={selectedOptions["morning-event"]}
        />
        <ProjectSelector
          name='lunch'
          icon='carbon:restaurant'
          options={restaurantOptions}
          placeholder='ex : Lunch Options'
          storeSelectedValues={storeSelectedValues}
          value={selectedOptions.lunch}
        />
        <ProjectSelector
          name='afternoon-event'
          icon='ph:clock-afternoon-duotone'
          options={eventOptions}
          placeholder='ex :  Afternoon Event Options'
          storeSelectedValues={storeSelectedValues}
          value={selectedOptions["afternoon-event"]}
        />
        <ProjectSelector
          name='dinner'
          icon='cil:dinner'
          options={restaurantOptions}
          placeholder='ex : Dinner Options'
          storeSelectedValues={storeSelectedValues}
          value={selectedOptions.dinner}
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
