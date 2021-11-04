import styled from "styled-components";

export const ScheduleProjectFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const HotelFormContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const AutoCompleteForm = styled.form`
  min-width: 500px;
  margin: 1rem;
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
})``;

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
