import { useEffect } from "react";
import { useState, useRef } from "react";
import { baseAPI } from "../../../../api/axios";
import SaveButton from "../../../../uicomponents/SaveButton/SaveButton";
import {
  MasterFormContainer,
  Left,
  VendorNameAndAddress,
  Vendor,
  Address,
  GeneralInfo,
  EventInfoGrid,
  Box,
  Right,
  DescriptionGrid,
  Description,
  Images,
} from "../styles";

const EventMasterForm = () => {
  //capture the state of the form

  const fileInput = useRef();
  const [event, setEvent] = useState({
    name: "",
    city: "",
    titleSidebar: "",
    title: "",
    horario: "",
    price: 0,
    latitude: "",
    longitude: "",
  });

  const {
    name,
    city,
    titleSidebar,
    title,
    horario,
    price,
    latitude,
    longitude,
  } = event;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const [textContent, setTextContent] = useState([]);
  const [introduction, setIntroduction] = useState([]);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    //capture the inputs of the form in a formData object
    const formData = new FormData();
    //iterate over the Event object and add the values to the formData object
    for (const key in event) {
      formData.append(key, event[key]);
    }
    //append textContent to formData
    formData.append("textContent", JSON.stringify(textContent));
    //append introduction to formData
    formData.append("introduction", JSON.stringify(introduction));
    //iterate the files of the fileInput ref and add them to the formData object
    for (let i = 0; i < fileInput.current.files.length; i++) {
      formData.append("images", fileInput.current.files[i]);
    }
    //if form is valid send formData to api
    if (formIsValid) {
      //send formData to api
      baseAPI
        .post("/events", formData)
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
          <h4>Event Name</h4>
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
            cols='80'
            rows='5'
            placeholder='write any introduction here ...'
            value={introduction}
            onChange={(e) => setIntroduction([e.target.value])}
          ></textarea>
        </VendorNameAndAddress>
        <GeneralInfo>
          <h4>General Info</h4>
          <EventInfoGrid>
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
                name='horario'
                placeholder='AM or PM'
                value={horario}
                onChange={handleChange}
              />
            </Box>
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
          </EventInfoGrid>
        </GeneralInfo>
        <SaveButton text='Save Event' type='submit' />
      </Left>
      <Right>
        <h4>Description</h4>
        <DescriptionGrid>
          <Description>
            <textarea
              name='textContent'
              cols='42'
              rows='23'
              placeholder='write your Event description here ...'
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

export default EventMasterForm;
