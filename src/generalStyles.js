import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.2rem;
  padding: 0.5rem;
  font-weight: bold;
  font-size: 0.9rem;
  border: 1px solid #ea5933;
  border-radius: 0.4rem;
  background-color: #f1bfb1;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  cursor: pointer;
  &:hover {
    background-color: #ea5933;
    color: #fff;
  }
  &:active {
    transform: scale(1.04);
  }
  & span svg {
    margin-right: 0.8rem;
    &:hover {
      color: red;
    }
  }
`;
