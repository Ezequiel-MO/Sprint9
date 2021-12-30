import { useRef } from "react";
import SaveButton from "../../uicomponents/SaveButton/SaveButton";
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
import useMasterForm from "./useMasterForm";

const EventMasterForm = () => {
  const fileInput = useRef();
  const events = "events";
  const {
    typeOfVendor,
    handleSubmit,
    handleChange,
    introduction,
    textContent,
    handleTextDescription,
    handleTextIntroduction,
    handleCoordsChange,
  } = useMasterForm(fileInput, events);

  const { name, city, titleSidebar, title, price, latitude, longitude } =
    typeOfVendor;

  return (
    <MasterFormContainer onSubmit={handleSubmit}>
      <Left>
        <VendorNameAndAddress>
          <legend>
            <h4>Event Name</h4>
          </legend>
          <Vendor>
            <input
              type='text'
              name='name'
              value={name}
              placeholder='Enter Event name'
              onChange={handleChange}
            />
          </Vendor>
          <Address>
            <input
              type='text'
              name='city'
              placeholder='City'
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
                type='text'
                name='title'
                placeholder='event title'
                value={title}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='titleSidebar'
                placeholder='event title sidebar'
                value={titleSidebar}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='price'
                placeholder='Cost Activity p.person'
                value={price}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='longitude'
                placeholder='coordinates : longitude'
                value={longitude}
                onChange={handleCoordsChange}
              />
            </Box>
            <Box>
              <input
                type='text'
                name='latitude'
                placeholder='coordinates: latitude'
                value={latitude}
                onChange={handleCoordsChange}
              />
            </Box>
          </InfoGrid>
        </GeneralInfo>
        <SaveButton text='Save Event' type='submit' />
      </Left>
      <Right>
        <Description>
          <legend>
            <h4>Description</h4>
          </legend>
          <textarea
            name='textContent'
            placeholder='write your Event description here ...'
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

export default EventMasterForm;
