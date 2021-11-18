import NumberInput from "../../../../../../uicomponents/Input/NumberInput";
import SaveButton from "../../../../../../uicomponents/SaveButton/SaveButton";
import { HotelRatesFormContainer, ScForm, Row1, Row2 } from "../../../styles";

const HotelRatesForm = ({ hotelOption }) => {
  return (
    <HotelRatesFormContainer>
      <h2>{`${hotelOption.value}`} </h2>
      <ScForm>
        <NumberInput placeholder='Number of DUIs rooms' />
        <NumberInput placeholder='DUI room rate' />
        <NumberInput placeholder='Breakfast cost if not included' />
        <NumberInput placeholder='Number of Double/Twin rooms' />
        <NumberInput placeholder='Double/Twin room rate' />
        <NumberInput placeholder='Daily city tax' />
        <SaveButton text='Save hotel rates' type='submit' />
      </ScForm>
    </HotelRatesFormContainer>
  );
};

export default HotelRatesForm;
