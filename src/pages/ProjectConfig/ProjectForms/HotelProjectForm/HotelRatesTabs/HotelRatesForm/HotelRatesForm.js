import { TabPanel } from "../../../styles";

const HotelRatesForm = ({ hotelOption }) => {
  return (
    <TabPanel>
      <h2>{`${hotelOption.value}`} </h2>
      <form>
        <input type='number' placeholder='Number of DUIs rooms' />
        <input type='number' placeholder='DUI room rate' />
        <input type='number' placeholder='Number of Double/Twin rooms' />
        <input type='number' placeholder='Double/Twin room rate' />
        <input type='number' placeholder='Breakfast cost if not included' />
        <input type='number' placeholder='Daily city tax' />
      </form>
    </TabPanel>
  );
};

export default HotelRatesForm;
