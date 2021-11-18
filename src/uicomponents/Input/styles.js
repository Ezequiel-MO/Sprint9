import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  max-width: 12rem;
  height: 2rem;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #a9ba9d;
  }
`;

export const ScNumberInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const ScNumberInput = styled.input`
  min-height: 2.5rem;
  max-width: 15rem;
`;
