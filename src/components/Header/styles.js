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

export const HeaderRight = styled.div``;
