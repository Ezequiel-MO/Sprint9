import styled from "styled-components";

export const ScheduleProjectFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const HotelFormContainer = styled.div`
  min-height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const HotelProjectFormContainer = styled.div`
  display: flex;
  margin: 1rem 1rem 1rem 0;
`;

export const AutoCompleteForm = styled.form`
  min-width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  & > * {
    border: 0;
    padding: 0 0 0 10px;
    background: #fff;
    line-height: 50px;
    font-size: 1rem;
    border-radius: 0;
    outline: 0;
    -webkit-appearance: none;
  }
  & label {
    display: flex;
    align-items: center;
  }

  & select {
    flex-wrap: wrap;
  }
  & input[type="submit"] {
    background: #a9ba9d;
    border: 1px solid #a9ba9d;
    color: #fff;
    font-weight: 800;
    padding: 0 10px;
    cursor: pointer;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    &:hover {
      background: #ddbcb0;
      border: 1px solid #ddbcb0;
    }
  }
`;

export const AutoCompleteDiv = styled(AutoCompleteForm).attrs({
  as: "div",
})`
  margin: 1rem;
`;

export const AddOptionsToProjectContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: fit-content;
  justify-content: space-around;
  margin-top: 0.7rem;
  & button {
    background-color: transparent;
    border: none;
  }
  & button span {
    cursor: pointer;
  }
  & button:active {
    transform: scale(1.1);
  }
`;

export const AddOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const StyledAddOption = styled.div`
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

export const HotelRatesCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ScHotelRatesTabs = styled.div`
  display: flex;
  width: fit-content;
  margin-top: 1rem;
`;

export const Tabs = styled.button`
  border: 1px solid black;
  padding: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
`;

export const TabPanel = styled.div``;

export const HotelRatesFormContainer = styled.div`
  min-width: 50rem;
`;

export const ScForm = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
