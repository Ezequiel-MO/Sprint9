import styled from "styled-components";

export const Table = styled.table`
  border: 1px solid #ea5933;
  width: 95%;
  height: fit-content;
  margin: 0 auto;
  border-radius: 0.5rem;

  & tbody tr {
    cursor: pointer;
    :nth-of-type(odd) {
      background-color: #f1bfb1;
    }
    :hover {
      background-color: #ea5933;
      color: #fff;
    }
  }

  & tbody tr:first-child {
    cursor: default;
  }

  & tbody tr th {
    background-color: #ea5933;
    color: #000;
  }
`;
