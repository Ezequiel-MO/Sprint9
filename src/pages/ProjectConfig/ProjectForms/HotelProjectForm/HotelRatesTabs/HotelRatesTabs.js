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
    DUInr: null,
    DUIprice: null,
    DoubleRoomNr: null,
    DoubleRoomPrice: null,
    breakfast: null,
    DailyTax: null,
  });

  const sendHotelRates = async (hotel) => {
    try {
      const response = await baseAPI.post(`/addHotels/${projectByCode._id}`, [
        { ...hotel, price: [hotelRates] },
      ]);
      console.log(response);
      //if selectedTab equals selectedHotelOptions.length - 1, redirect to next page
      if (selectedTab === selectedHotelOptions.length - 1) {
        history.push("/schedule-project-form");
      }
      //else set selectedTab to selectedTab + 1
      else {
        setSelectedTab(selectedTab + 1);
      }
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
