import { ScHotelRatesTabs, Tabs, TabPanel, HotelRatesCard } from "../../styles";
import HotelRatesForm from "./HotelRatesForm/HotelRatesForm";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const HotelRatesTabs = ({
  selectedHotelOptions,
  projectByCode,
  hotelOptions,
}) => {
  const history = useHistory();
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
  const [hotelPrices, setHotelPrices] = useState([]);
  const [hotelMatch, setHotelMatch] = useState({});
  const [formIsValid, setFormIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelRates({ ...hotelRates, [name]: value });
  };

  useEffect(() => {
    console.log("hotel Prices", hotelPrices);
  }, [hotelPrices]);

  useEffect(() => {
    console.log("hotel match with price", hotelMatch);
    console.log("hotel Prices", hotelPrices);
    setHotelPrices([...hotelPrices, hotelMatch]);
  }, [hotelMatch]);

  useEffect(() => {
    //find object in hotelOptions array that has the same name key as hotelPrice key
    const hotelMatch = hotelOptions.find(
      (hotel) => hotel.name === Object.keys(hotelPrice)[0]
    );
    //add key price to hotelMatch object with value of hotelPrice value
    hotelMatch &&
      setHotelMatch({ ...hotelMatch, price: [Object.values(hotelPrice)[0]] });
  }, [hotelPrice]);

  const updateHotelPrice = (hotelOption) => {
    setHotelPrice({ ...hotelPrice, [hotelOption.value]: hotelRates });
  };

  const handleSubmit = (e, hotelOption) => {
    e.preventDefault();
    updateHotelPrice(hotelOption);
    setSelectedTab(selectedTab + 1);
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
            value={index}
            disabled={index !== selectedTab ? true : false}
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
