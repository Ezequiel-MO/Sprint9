import { ScHotelRatesTabs, Tabs, TabPanel, HotelRatesCard } from "../../styles";
import HotelRatesForm from "./HotelRatesForm/HotelRatesForm";
import { useState } from "react";

const HotelRatesTabs = ({ selectedHotelOptions }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const changeSelectedTab = (index) => {
    setSelectedTab(index);
  };

  const renderTabContent = (index, hotelOption) => {
    if (index === selectedTab) {
      return <HotelRatesForm hotelOption={hotelOption} />;
    }
  };

  return (
    <HotelRatesCard>
      <ScHotelRatesTabs>
        {selectedHotelOptions?.map((hotelOption, index) => (
          <Tabs
            key={hotelOption.value}
            onClick={() => changeSelectedTab(index)}
          >
            {hotelOption.value}
          </Tabs>
        ))}
      </ScHotelRatesTabs>
      {selectedHotelOptions?.map((hotelOption, index) => (
        <TabPanel>{renderTabContent(index, hotelOption)}</TabPanel>
      ))}
    </HotelRatesCard>
  );
};

export default HotelRatesTabs;
