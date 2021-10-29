import styled from "styled-components";

export const VendorCardContainer = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: 1rem;
  width: 20rem;
  margin: 1rem;
  background-color: #ddbcb0;
  color: #fff;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #a9ba9d;
    -webkit-box-shadow: 0px 2px 15px 3px rgba(0, 0, 0, 0.36);
    box-shadow: 0px 2px 15px 3px rgba(0, 0, 0, 0.36);
    color: #000;
  }
  &:active {
    transform: scale(1.06);
  }
`;
