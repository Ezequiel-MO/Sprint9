import styled from "styled-components";

export const DashboardCardContainer = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid #ea5933;
  border-radius: 6px;
  min-width: 16rem;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ddbcb0;
  font-size: 1rem;
  font-weight: 700;
  color: #ea5933;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  & > svg {
    margin-right: 10px;
  }
  &:hover {
    background-color: #ea5933;
    color: #fff;
  }
`;
