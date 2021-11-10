import { useEffect } from "react";
import { useState, useRef } from "react";
import { baseAPI } from "../../../../api/axios";
import SaveButton from "../../../../uicomponents/SaveButton/SaveButton";
import {
  MasterFormContainer,
  Left,
  VendorNameAndAddress,
  VendorGrid,
  Vendor,
  Address,
  GeneralInfo,
  GeneralInfoGrid,
  Box,
  Right,
  DescriptionGrid,
  Description,
  Images,
} from "../styles";

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
    wheelChairAccessible: false,
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
          <h4>Hotel Name</h4>
          <VendorGrid>
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
          </VendorGrid>
        </VendorNameAndAddress>
        <GeneralInfo>
          <h4>General Info</h4>
          <GeneralInfoGrid>
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
              <label htmlFor='wheelchairAccessible'>
                Wheelchair accessible
              </label>
              <input
                type='checkbox'
                name='wheelchairAccessible'
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
                type='string'
                name='restaurants'
                placeholder='Number of Restaurants'
                value={restaurants}
                onChange={handleChangeHotel}
              />
            </Box>
          </GeneralInfoGrid>
        </GeneralInfo>
        <SaveButton text='Save Hotel' type='submit' />
      </Left>
      <Right>
        <h4>Description</h4>
        <DescriptionGrid>
          <Description>
            <textarea
              name='textContent'
              cols='45'
              rows='23'
              placeholder='write your description of the hotel here ...'
              value={textContent}
              onChange={(e) => setTextContent([e.target.value])}
            ></textarea>
          </Description>
          <Images>
            <input
              type='file'
              name='imageContentUrl'
              multiple
              ref={fileInput}
            />
          </Images>
        </DescriptionGrid>
      </Right>
    </MasterFormContainer>
  );
};

export default HotelMasterForm;
