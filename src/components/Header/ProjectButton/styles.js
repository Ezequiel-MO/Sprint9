import styled from "styled-components";

export const ProjectButtonContainer = styled.button`
  border: none;
  border-radius: 4px;
  height: 2rem;
  width: 13rem;
  min-width: 13rem;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  & span svg {
    border-left: 2px solid #ccc;
    margin-left: 1rem;
  }
`;
