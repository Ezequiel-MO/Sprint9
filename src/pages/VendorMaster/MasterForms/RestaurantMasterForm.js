import { useRef } from "react";
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
import RestaurantMFLogic from "./RestaurantMFLogic";

const RestaurantMasterForm = () => {
  const fileInput = useRef();
  const {
    handleChange,
    handleSubmit,
    restaurant,
    introduction,
    handleTextDescription,
    handleTextIntroduction,
    textContent,
  } = RestaurantMFLogic(fileInput);
  const { name, city, longitude, latitude, price } = restaurant;

  return (
    <MasterFormContainer onSubmit={handleSubmit}>
      <Left>
        <VendorNameAndAddress>
          <legend>
            <h4>Restaurant Name</h4>
          </legend>
          <Vendor>
            <input
              type='text'
              name='name'
              value={name}
              placeholder='Enter restaurant name ...'
              onChange={handleChange}
            />
          </Vendor>
          <Address>
            <input
              type='text'
              name='city'
              placeholder='City ...'
              value={city}
              onChange={handleChange}
            />
          </Address>
          <textarea
            name='textContent'
            placeholder='write any introduction here ...'
            value={introduction}
            onChange={handleTextIntroduction}
          ></textarea>
        </VendorNameAndAddress>
        <GeneralInfo>
          <legend>
            <h4>General Info</h4>
          </legend>
          <InfoGrid>
            <Box>
              <input
                type='number'
                name='longitude'
                placeholder='coordinates : longitude'
                value={longitude}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <input
                type='number'
                name='latitude'
                placeholder='coordinates: latitude'
                value={latitude}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='price'
                placeholder='min menu price'
                value={price}
                onChange={handleChange}
              />
            </Box>
          </InfoGrid>
        </GeneralInfo>
        <SaveButton text='Save Restaurant' type='submit' />
      </Left>
      <Right>
        <Description>
          <legend>
            <h4>Description</h4>
          </legend>
          <textarea
            name='textContent'
            cols='45'
            rows='14'
            placeholder='write your restaurant description here ...'
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

export default RestaurantMasterForm;
