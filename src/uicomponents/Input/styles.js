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
  align-items: center;
  margin-bottom: 1rem;
  margin-right: 1rem;
  & label {
    margin-left: 1rem;
  }
`;

export const ScNumberInput = styled.input`
  max-width: 5rem;
`;

export const ScFileInput = styled.input`
  height: 0;
  overflow: hidden;
  width: 0;
`;
