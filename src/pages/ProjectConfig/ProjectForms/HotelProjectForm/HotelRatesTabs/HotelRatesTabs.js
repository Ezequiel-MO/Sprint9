import {
  HotelRatesTabsContainer,
  Tabs,
  TabPanel,
  HotelRatesCard,
} from "../../styles";
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
      {selectedHotelOptions?.map((hotelOption, index) => (
        <HotelRatesTabsContainer key={hotelOption.value}>
          <Tabs onClick={() => changeSelectedTab(index)}>
            {hotelOption.value}
          </Tabs>
          <TabPanel>{renderTabContent(index, hotelOption)}</TabPanel>
        </HotelRatesTabsContainer>
      ))}
    </HotelRatesCard>
  );
};

export default HotelRatesTabs;
