import styled from "styled-components";

export const StyledAutoCompleteForm = styled.form`
  margin: 1rem;
  display: -webkit-box;
  display: flex;
  z-index: 10;
  position: relative;
  width: 500px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  & label {
    display: flex;
    align-items: center;
  }
  & > * {
    border: 0;
    padding: 0 0 0 10px;
    background: #fff;
    line-height: 50px;
    font-size: 1rem;
    border-radius: 0;
    outline: 0;
    -webkit-appearance: none;
  }
  & input[type="submit"] {
    background: #a9ba9d;
    border: 1px solid #a9ba9d;
    color: #fff;
    font-weight: 800;
    padding: 0 30px;
    cursor: pointer;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
  }
  & input[type="submit"]:hover {
    background: #ddbcb0;
    border: 1px solid #ddbcb0;
  }
  & input[type="search"] {
    flex-basis: 500px;
  }
`;
