import styled from "styled-components";

//#c7baae tierra, #f5f1e9 arena, #ddbcb0 arcilla, #7f847a ceniza , #a9c4b5 laurel

export const ScFieldset = styled.fieldset`
  background-color: #f5f1e9;
  padding: 0;
  border: 1px solid #ddbcb0;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & legend {
    font-size: 1.1rem;
    font-weight: bold;
    color: #ea5933;
    padding: 0.5rem;
  }
  & div {
    display: flex;
    flex-wrap: wrap;
    margin: 0.2rem;
    & label {
      margin-left: 1rem;
      min-width: 20rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.2rem;
      font-weight: bold;
      color: #7f847a;
      align-items: center;
      & input {
        min-width: 75px;
        height: 2rem;
        border: 1px solid #ddbcb0;
        border-radius: 0.5rem;
        padding: 0.5rem;
        &:focus {
          outline: none;
        }
      }
      & input::-webkit-outer-spin-button,
      & input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      & input[type="number"] {
        -moz-appearance: textfield;
      }
    }
  }
`;
