import styled from "styled-components";

export const StyledSaveButton = styled.button`
  position: relative;
  background-color: transparent;
  margin: auto;
  padding: 19px 22px;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 28px;
    background: #ddbcb0;
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;
  }
  & span {
    position: relative;
    font-size: 16px;
    line-height: 18px;
    font-weight: 900;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    vertical-align: middle;
  }
  & svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #111;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }
  &:hover::before {
    width: 100%;
    background: #ddbcb0;
  }
  &:hover svg {
    transform: translateX(0);
  }
  &:active {
    transform: scale(0.96);
  }
`;
