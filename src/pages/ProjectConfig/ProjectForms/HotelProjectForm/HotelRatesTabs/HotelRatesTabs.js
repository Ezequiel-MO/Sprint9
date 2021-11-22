import { ScHotelRatesTabs, Tabs, TabPanel, HotelRatesCard } from "../../styles";
import HotelRatesForm from "./HotelRatesForm/HotelRatesForm";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { baseAPI } from "../../../../../api/axios";

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
  const [hotelMatch, setHotelMatch] = useState({});
  const [hotelMatchWithPrice, setHotelMatchWithPrice] = useState({});

  useEffect(() => {
    console.log("hotel match with price", hotelMatchWithPrice);
    try {
      baseAPI
        .post(`/addHotels/${projectByCode._id}`, [hotelMatchWithPrice])
        .then((response) => {
          console.log("response=>", response);
          if (selectedTab === selectedHotelOptions.length - 1) {
            history.push("/schedule-project-form");
          }
        });
    } catch (e) {
      console.log("error", e);
    }
  }, [hotelMatchWithPrice]);

  useEffect(() => {
    console.log("hotel match", hotelMatch);
    setHotelMatchWithPrice({ ...hotelMatch, price: [hotelRates] });
  }, [hotelMatch]);

  useEffect(() => {
    console.log("hotel price", hotelPrice);
    const hotelMatch = hotelOptions.find(
      (hotel) => hotel.name === Object.keys(hotelPrice)[0]
    );
    setHotelMatch(hotelMatch);
  }, [hotelPrice]);

  const updateHotelRates = (hotelOption) => {
    setHotelPrice({ ...hotelPrice, [hotelOption.value]: hotelRates });
  };

  const handleSubmit = (e, hotelOption) => {
    e.preventDefault();
    console.log("hotelOption", hotelOption);
    console.log("hotel rates", hotelRates);
    updateHotelRates(hotelOption);
    setSelectedTab(selectedTab + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelRates({ ...hotelRates, [name]: value });
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
