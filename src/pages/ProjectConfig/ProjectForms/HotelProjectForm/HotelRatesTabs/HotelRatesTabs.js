import { ScHotelRatesTabs, Tabs, TabPanel, HotelRatesCard } from "../../styles";
import HotelRatesForm from "./HotelRatesForm/HotelRatesForm";
import useHotelRatesTabs from "./useHotelRatesTabs";

const HotelRatesTabs = ({
  selectedHotelOptions,
  projectByCode,
  hotelOptions,
}) => {
  const { handleSubmit, handleChange, selectedTab } = useHotelRatesTabs(
    projectByCode,
    hotelOptions,
    selectedHotelOptions
  );
  return (
    <HotelRatesCard>
      <ScHotelRatesTabs>
        {selectedHotelOptions?.map((selectedHotel, index) => (
          <Tabs
            key={selectedHotel.value}
            value={index}
            disabled={index !== selectedTab ? true : false}
          >
            {selectedHotel.value}
          </Tabs>
        ))}
      </ScHotelRatesTabs>
      {selectedHotelOptions?.map((selectedHotel, index) => (
        <TabPanel key={selectedHotel.value}>
          {index === selectedTab && (
            <HotelRatesForm
              hotelOption={selectedHotel}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              hotelRates={selectedHotel}
            />
          )}
        </TabPanel>
      ))}
    </HotelRatesCard>
  );
};

export default HotelRatesTabs;
