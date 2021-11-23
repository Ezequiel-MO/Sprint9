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

  const sendHotelRates = async (hotel) => {
    try {
      const response = await baseAPI.post(`/addHotels/${projectByCode._id}`, [
        { ...hotel, price: [hotelRates] },
      ]);
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = (e, selectedHotel) => {
    e.preventDefault();
    const hotelMatch = hotelOptions.find(
      (hotel) => hotel.name === selectedHotel.value
    );
    sendHotelRates(hotelMatch);
    setSelectedTab(selectedTab + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelRates({ ...hotelRates, [name]: value });
  };

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
