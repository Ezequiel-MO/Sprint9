import styled from "styled-components";

export const AddHotelsToProjectContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: fit-content;
  justify-content: space-around;
  margin-top: 0.7rem;
`;

export const AddHotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const StyledAddHotel = styled.div`
  flex-grow: 1;
  display: inline-flex;
  align-items: center;
  width: 90%;
  border: 1px solid #ea5933;
  margin: 0.1rem;
  border-radius: 10px;
  padding-left: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  & span {
    padding-right: 1rem;
  }
`;
