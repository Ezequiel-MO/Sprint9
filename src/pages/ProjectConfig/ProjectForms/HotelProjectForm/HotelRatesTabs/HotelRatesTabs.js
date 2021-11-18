import { ScHotelRatesTabs, Tabs, TabPanel, HotelRatesCard } from "../../styles";
import HotelRatesForm from "./HotelRatesForm/HotelRatesForm";
import { useState } from "react";
import { useEffect } from "react";

const HotelRatesTabs = ({ selectedHotelOptions }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [hotelRates, setHotelRates] = useState({
    DUInr: 0,
    DUIprice: 0,
    DoubleRoomNr: 0,
    DoubleRoomPrice: 0,
    breakfast: 0,
    DailyTax: 0,
  });
  const [hotelPrice, setHotelPrice] = useState({});

  const changeSelectedTab = (index) => {
    setSelectedTab(index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelRates({ ...hotelRates, [name]: value });
  };

  useEffect(() => {
    console.log("hotel price", hotelPrice);
  }, [hotelPrice]);

  const handleSubmit = (e, hotelOption) => {
    e.preventDefault();
    setHotelPrice({ ...hotelPrice, [hotelOption.value]: hotelRates });
  };

  const renderTabContent = (index, hotelOption) => {
    if (index === selectedTab) {
      return (
        <HotelRatesForm
          hotelOption={hotelOption}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          hotelRates={hotelRates}
        />
      );
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
        <TabPanel key={hotelOption.value}>
          {renderTabContent(index, hotelOption)}
        </TabPanel>
      ))}
    </HotelRatesCard>
  );
};

export default HotelRatesTabs;
