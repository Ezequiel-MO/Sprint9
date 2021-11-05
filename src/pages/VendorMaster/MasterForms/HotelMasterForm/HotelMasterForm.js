import {
  MasterFormContainer,
  Left,
  HotelNameAndAddress,
  HotelGrid,
  Hotel,
  Address,
  GeneralInfo,
  GeneralInfoGrid,
  Box,
  Right,
  DescriptionGrid,
  Description,
  Images,
} from "./styles";

const HotelMasterForm = () => {
  return (
    <MasterFormContainer>
      <Left>
        <HotelNameAndAddress>
          <h4>Hotel Name</h4>
          <HotelGrid>
            <Hotel>
              <input
                type='text'
                name='hotel'
                placeholder='Full Hotel name w/category'
              />
            </Hotel>
            <Address>
              <input type='text' name='address' placeholder='Hotel Address' />
            </Address>
          </HotelGrid>
        </HotelNameAndAddress>
        <GeneralInfo>
          <h4>General Info</h4>
          <GeneralInfoGrid>
            <Box>
              <input type='text' name='city' />
            </Box>
            <Box>
              <input type='number' name='stars' />
            </Box>
            <Box>
              <input type='number' name='nr_rooms' />
            </Box>
            <Box>
              <label htmlFor='wheelchair'>Wheelchair accessible</label>
              <input type='checkbox' name='wheelchair' />
            </Box>
            <Box>
              <input type='number' name='nr_meeting_rooms' />
            </Box>
            <Box>
              <input type='text' name='check in/out' />
            </Box>
            <Box>
              <label htmlFor='wifi'>Wifi speed</label>
              <input type='checkbox' name='wifi' />
            </Box>
            <Box>
              <input type='text' name='pool' />
            </Box>
            <Box>
              <input type='number' name='restaurants' />
            </Box>
          </GeneralInfoGrid>
        </GeneralInfo>
      </Left>
      <Right>
        <h4>Description</h4>
        <DescriptionGrid>
          <Description>
            <textarea
              name='description'
              cols='45'
              rows='23'
              placeholder='write your description of the hotel here ...'
            ></textarea>
          </Description>
          <Images>
            <input type='file' name='images' multiple />
          </Images>
        </DescriptionGrid>
      </Right>
    </MasterFormContainer>
  );
};

export default HotelMasterForm;
