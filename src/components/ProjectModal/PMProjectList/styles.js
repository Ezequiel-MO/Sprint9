import styled from "styled-components";

export const ScTh = styled.th`
  cursor: pointer;
  position: relative;
  & div {
    position: absolute;
    z-index: 20;
    background-color: #fff;
    width: 8rem;
    height: fit-content;
    display: none;
    & p {
      padding: 0.2rem;
    }
    & p:hover {
      color: #fff;
      background-color: #ea5933;
    }
    & p:first-child,
    & p:first-child:hover {
      cursor: default;
      color: #e6e6e6;
      letter-spacing: 0.3rem;
      background-color: #fff;
    }
  }

  &:hover > div {
    display: block;
    border-radius: 0.5rem;
    padding: 0 0 1rem 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
