import styled from "styled-components";

export const PMContainer = styled.div`
  border: 1px solid #ccc;
  width: fit-content;
  min-width: 35rem;
  height: fit-content;
  min-height: 35rem;
  margin: auto;
  z-index: 1;
  position: absolute;
  top: 4%;
  left: 30%;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const PMHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
export const PMSearchForm = styled.form`
  margin-left: 1.8rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  position: relative;
  width: 20rem;
  & button {
    display: none;
  }
`;

export const Input = styled.input`
  height: 2rem;
  flex-grow: 1;
  font-size: 1rem;
  padding-left: 2rem;
  font-weight: bold;
  font-size: 0.9rem;
  border: 1px solid #ea5933;
  border-radius: 0.4rem;
  background-color: #f1bfb1;
  &::focus {
    border: 1px solid #ea5933;
  }
`;

export const StyledIcon = styled.span`
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
`;

export const OpenCancelButtons = styled.div`
  position: absolute;
  bottom: 3%;
  right: 3%;
`;
