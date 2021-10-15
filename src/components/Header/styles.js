import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding: 1rem;
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 0.25;
  & img {
    width: 8rem;
    margin: 0 1rem;
  }
`;

export const RegularButton = styled.button`
  cursor: pointer;
  border: none;
  height: 2rem;
  border-radius: 4px;
`;

export const ProjectButton = styled.button`
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
export const HeaderRight = styled.div``;
