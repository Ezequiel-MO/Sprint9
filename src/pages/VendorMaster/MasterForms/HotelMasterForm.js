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
import { useRef } from "react";
import MasterFormLogic from "./MasterFormLogic";

const HotelMasterForm = () => {
  const fileInput = useRef();
  const hotels = "hotels";
  const {
    handleSubmit,
    typeOfVendor,
    textContent,
    handleChange,
    handleCheckboxChange,
    handleTextDescription,
  } = MasterFormLogic(fileInput, hotels);

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
    latitude,
    longitude,
  } = typeOfVendor;

  return (
    <MasterFormContainer onSubmit={handleSubmit}>
      <Left>
        <VendorNameAndAddress>
          <legend>
            <h4>Hotel Name & Address</h4>
          </legend>
          <Vendor>
            <input
              type='text'
              name='name'
              value={name}
              placeholder='Full Hotel name w/category'
              onChange={handleChange}
            />
          </Vendor>
          <Address>
            <input
              type='text'
              name='direction'
              placeholder='Hotel Address'
              value={direction}
              onChange={handleChange}
            />
            <input
              type='text'
              name='latitude'
              placeholder='Coords: latitude'
              value={latitude}
              onChange={handleChange}
            />
            <input
              type='text'
              name='longitude'
              placeholder='Coords: longitude'
              value={longitude}
              onChange={handleChange}
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
                onChange={handleChange}
              />
            </Box>
            <Box>
              <input
                type='number'
                name='numberStars'
                placeholder='star-rated'
                value={numberStars}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <input
                type='number'
                name='numberRooms'
                placeholder='Number of rooms'
                value={numberRooms}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <input
                type='checkbox'
                id='handicapped'
                name='wheelChairAccesible'
                checked={wheelChairAccessible}
                onChange={handleCheckboxChange}
              />
              <label htmlFor='handicapped'>Wheel chair friendly?</label>
            </Box>
            <Box>
              <input
                type='text'
                name='meetingRooms'
                placeholder='number of meeting rooms'
                value={meetingRooms}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='checkin_out'
                placeholder='check in/out times'
                value={checkin_out}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='wifiSpeed'
                placeholder='Wifi Speed'
                value={wifiSpeed}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='swimmingPool'
                placeholder='Pool ? indoor/outdoor'
                value={swimmingPool}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='restaurants'
                placeholder='Number of Restaurants'
                value={restaurants}
                onChange={handleChange}
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
            onChange={handleTextDescription}
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
