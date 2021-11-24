import { useEffect } from "react";
import { useState, useRef } from "react";
import { baseAPI } from "../../../api/axios";
import SaveButton from "../../../uicomponents/SaveButton/SaveButton";
import {
  MasterFormContainer,
  Left,
  VendorNameAndAddress,
  Vendor,
  Address,
  GeneralInfo,
  InfoGrid,
  Box,
  Right,
  Description,
  Images,
} from "./styles";

const HotelMasterForm = () => {
  //capture the state of the form

  const fileInput = useRef();
  const [hotel, setHotel] = useState({
    name: "",
    city: "",
    direction: "",
    numberStars: 0,
    numberRooms: 0,
    checkin_out: "",
    meetingRooms: "",
    wheelChairAccessible: "",
    wifiSpeed: "",
    swimmingPool: "",
    restaurants: "",
  });

  const {
    name,
    city,
    direction,
    numberStars,
    numberRooms,
    checkin_out,
    meetingRooms,
    wheelChairAccessible,
    wifiSpeed,
    swimmingPool,
    restaurants,
  } = hotel;

  const handleChangeHotel = (e) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const [textContent, setTextContent] = useState([]);
  const [formIsValid, setFormIsValid] = useState(false);

  //useEffect
  useEffect(() => {
    //all data from form in a formData variable
    const hotelFormData = new FormData();
    //iterate over the Event object and add the values to the formData object
    for (const key in hotel) {
      hotelFormData.append(key, hotel[key]);
    }
    //append textContent to formData
    hotelFormData.append("textContent", JSON.stringify(textContent));

    //append fileInput.current.files to hotelFormData
    for (let i = 0; i < fileInput.current.files.length; i++) {
      hotelFormData.append("images", fileInput.current.files[i]);
    }

    //if form is valid send hotelFormData to api
    if (formIsValid) {
      //send hotelFormData to api
      baseAPI
        .post("/hotels", hotelFormData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }, [formIsValid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormIsValid(true);
  };

  return (
    <MasterFormContainer onSubmit={handleSubmit}>
      <Left>
        <VendorNameAndAddress>
          <legend>
            <h4>Hotel Name</h4>
          </legend>
          <Vendor>
            <input
              type='text'
              name='name'
              value={name}
              placeholder='Full Hotel name w/category'
              onChange={handleChangeHotel}
            />
          </Vendor>
          <Address>
            <input
              type='text'
              name='direction'
              placeholder='Hotel Address'
              value={direction}
              onChange={handleChangeHotel}
            />
          </Address>
        </VendorNameAndAddress>
        <GeneralInfo>
          <legend>
            <h4>General Info</h4>
          </legend>
          <InfoGrid>
            <Box>
              <input
                type='text'
                name='city'
                value={city}
                placeholder='Enter city'
                onChange={handleChangeHotel}
              />
            </Box>
            <Box>
              <input
                type='number'
                name='numberStars'
                placeholder='star-rated'
                value={numberStars}
                onChange={handleChangeHotel}
              />
            </Box>
            <Box>
              <input
                type='number'
                name='numberRooms'
                placeholder='Number of rooms'
                value={numberRooms}
                onChange={handleChangeHotel}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='wheelchairAccessible'
                placeholder='Wheel chair friendly?'
                value={wheelChairAccessible}
                onChange={handleChangeHotel}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='meetingRooms'
                placeholder='number of meeting rooms'
                value={meetingRooms}
                onChange={handleChangeHotel}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='checkin_out'
                placeholder='check in/out times'
                value={checkin_out}
                onChange={handleChangeHotel}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='wifiSpeed'
                placeholder='Wifi Speed'
                value={wifiSpeed}
                onChange={handleChangeHotel}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='swimmingPool'
                placeholder='Pool ? indoor/outdoor'
                value={swimmingPool}
                onChange={handleChangeHotel}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='restaurants'
                placeholder='Number of Restaurants'
                value={restaurants}
                onChange={handleChangeHotel}
              />
            </Box>
          </InfoGrid>
        </GeneralInfo>
        <SaveButton text='Save Hotel' type='submit' />
      </Left>
      <Right>
        <Description>
          <legend>
            <h4>Hotel Description</h4>
          </legend>
          <textarea
            name='textContent'
            placeholder='write your description of the hotel here ...'
            cols='45'
            rows='14'
            value={textContent}
            onChange={(e) => setTextContent([e.target.value])}
          ></textarea>
        </Description>
        <Images>
          <input type='file' name='imageContentUrl' multiple ref={fileInput} />
        </Images>
      </Right>
    </MasterFormContainer>
  );
};

export default HotelMasterForm;
