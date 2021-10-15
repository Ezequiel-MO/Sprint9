import styled from "styled-components";

export const PMContainer = styled.div`
  border: 1px solid #ccc;
  width: 50rem;
  height: 36rem;
  margin: auto;
  z-index: 1;
  position: absolute;
  top: 20%;
  left: 20%;
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
export const PMSearchInput = styled.div`
  border: 1px solid black;
  margin: 1rem;
  height: 2.5rem;
  border-radius: 0.5rem;
`;
export const PMFilters = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 1rem;
`;
export const PMTable = styled.div`
  border: 1px solid black;
  width: 48rem;
  height: 10rem;
  margin: 0 auto;
`;
export const OpenCancelButtons = styled.div`
  position: absolute;
  bottom: 3%;
  right: 3%;
`;
