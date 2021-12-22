import styled from "styled-components";

//#c7baae tierra, #f5f1e9 arena, #ddbcb0 arcilla, #7f847a ceniza , #a9c4b5 laurel

export const ScFieldset = styled.fieldset`
  width: 80%;
  background-color: #f5f1e9;
  padding-bottom: 0.7rem;
  border: 1px solid #ddbcb0;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  & legend {
    font-size: 1.1rem;
    font-weight: bold;
    color: #ea5933;
    padding: 0.5rem;
  }
  &  button {
          position: absolute;
           top: 2%;
           right: 10%
    }
  & div {
    display: flex;
    flex-wrap: wrap;
    margin: 0.2rem;
    & p {
        margin: 0.2rem;
        border: 2px solid #ea5933;
    }
    & label {      
      min-width: 20rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      font-weight: bold;
      color: #7f847a;
      align-items: center;
      & input {
        height: 1.8rem;
        border: 1px solid #ddbcb0;
        border-radius: 0.5rem;
        font-weight: bolder;
        padding-left: 0.3rem;
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
`;

export const AddServiceContainer = styled.div`
  margin-left: 2.7rem;
  margin-bottom: 1rem;
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & label {
    margin-left: 0.7rem;
    min-width: 20rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 0.2rem;
    font-weight: bold;
    color: #7f847a;
    align-items: center;
  }
`;

export const ScSelect = styled.select`
  margin-left: 1.3rem;
  padding: 0.3rem 1.5rem;
  outline: none;
  background-color: #c7baae;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  letter-spacing: 0.1rem;
  font-weight: bolder;
  font-size: 1rem;
  color: #fff;
  & option {
    color: #f5f1e9;
    font-weight: bolder;
    letter-spacing: 0.1rem;
    padding: 0.1rem;
  }
`;

export const ScButton = styled.button`
  align-items: center;
  appearance: none;
  background-clip: padding-box;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #7f847a;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 800;
  justify-content: center;
  line-height: 24px;
  margin-bottom: 10px;
  min-height: 64px;
  outline: none;
  overflow: visible;
  padding: 10px 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: auto;
  word-break: keep-all;
  z-index: 0;

  &:before,
  &:after {
    border-radius: 10px;
  }

  &:before {
    background-color: rgba(249, 58, 19, 0.32);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -2;
  }
  &:after {
    background-color: initial;
    background-image: linear-gradient(92.83deg, #f5f1e9 0, #c7baae 100%);
    bottom: 4px;
    content: "";
    display: block;
    left: 4px;
    overflow: hidden;
    position: absolute;
    right: 4px;
    top: 4px;
    transition: all 100ms ease-out;
    z-index: -1;
  }
  &:hover:not(:disabled):after {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    transition-timing-function: ease-in;
  }
  &:active:not(:disabled) {
    color: #ccc;
  }
  &:active:not(:disabled):after {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),
      linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
    bottom: 4px;
    left: 4px;
    right: 4px;
    top: 4px;
  }
  &:disabled {
    cursor: default;
    opacity: 0.24;
  }
`;
