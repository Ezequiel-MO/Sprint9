import {
  HotelProjectFormContainer,
  HotelFormContainer,
  AutoCompleteForm,
} from "../styles";
import SaveButton from "../../../../uicomponents/SaveButton/SaveButton";
import ProjectSelector from "../ProjectSelector/ProjectSelector";
import HotelRatesTabs from "./HotelRatesTabs/HotelRatesTabs";
import useHotelProjectForm from "./useHotelProjectForm";

const HotelProjectForm = () => {
  const {
    handleSubmit,
    hotelOptions,
    storeSelectedValues,
    selectedOptions,
    projectByCode,
    formIsValid,
  } = useHotelProjectForm();
  console.log("selected options", selectedOptions);
  return (
    <>
      <HotelFormContainer>
        <AutoCompleteForm onSubmit={handleSubmit}>
          <ProjectSelector
            name='hotel'
            icon='bx:bx-hotel'
            options={hotelOptions}
            placeholder='ex : Hotel Options'
            storeSelectedValues={storeSelectedValues}
          />
        </AutoCompleteForm>
        {!formIsValid && (
          <HotelProjectFormContainer>
            <HotelRatesTabs
              hotelOptions={hotelOptions}
              selectedHotelOptions={selectedOptions["hotel"]}
              projectByCode={projectByCode}
            />
          </HotelProjectFormContainer>
        )}
        {formIsValid && (
          <SaveButton text={"Add Hotels to project"} type='submit' />
        )}
      </HotelFormContainer>
    </>
  );
};

export default HotelProjectForm;
