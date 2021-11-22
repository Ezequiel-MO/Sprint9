import NumberInput from "../../../../../../uicomponents/Input/NumberInput";
import SaveButton from "../../../../../../uicomponents/SaveButton/SaveButton";
import { HotelRatesFormContainer, ScForm } from "../../../styles";

const HotelRatesForm = ({
  hotelOption,
  handleSubmit,
  handleChange,
  hotelRates,
}) => {
  return (
    <HotelRatesFormContainer>
      <h2>{`${hotelOption.value}`} </h2>
      <ScForm onSubmit={(e) => handleSubmit(e, hotelOption)}>
        <NumberInput
          placeholder='Number of DUIs rooms'
          name='DUInr'
          value={hotelRates.DUInr}
          onChange={handleChange}
        />
        <NumberInput
          placeholder='DUI room rate'
          name='DUIprice'
          value={hotelRates.DUIprice}
          onChange={handleChange}
        />
        <NumberInput
          placeholder='Breakfast cost if not included'
          name='breakfast'
          value={hotelRates.breakfast}
          onChange={handleChange}
        />
        <NumberInput
          placeholder='Number of Double/Twin rooms'
          name='DoubleRoomNr'
          value={hotelRates.DoubleRoomNr}
          onChange={handleChange}
        />
        <NumberInput
          placeholder='Double/Twin room rate'
          name='DoubleRoomPrice'
          value={hotelRates.DoubleRoomPrice}
          onChange={handleChange}
        />
        <NumberInput
          placeholder='Daily city tax'
          name='DailyTax'
          value={hotelRates.DailyTax}
          onChange={handleChange}
        />
        <SaveButton text='Save hotel rates' type='submit' />
      </ScForm>
    </HotelRatesFormContainer>
  );
};

export default HotelRatesForm;
