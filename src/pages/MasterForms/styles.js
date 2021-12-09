import styled, { css } from "styled-components";

// create a css template to use in the component
const InputOnHover = css`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  box-shadow: #e0e0e0 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const MasterFormContainer = styled.form`
  margin: 1rem;
  min-width: 60rem;
  display: flex;
  padding: 1rem;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Right = styled(Left)``;

export const VendorNameAndAddress = styled.fieldset`
  & textarea {
    margin-left: 0.5rem;
    width: 96.5%;

    ${InputOnHover}
  }

  & ::placeholder {
    padding-left: 1rem;
  }
  &:focus {
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const Vendor = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
  & > input {
    width: 100%;
    margin-left: 0.5rem;
    ${InputOnHover}
  }
`;
export const Address = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 0.5rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
  & > input {
    ${InputOnHover}
    margin-left: 0.5rem;
  }
`;

export const GeneralInfo = styled.fieldset`
  margin-bottom: 0.5rem;
`;
export const InfoGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`;

export const Box = styled.div`
  & > input {
    width: 90%;
    ${InputOnHover}
  }
`;

export const Description = styled.fieldset`
  margin-left: 1rem;
  min-width: 20rem;
  & textarea {
    ${InputOnHover}
    width: 95%;
    &::placeholder {
      padding-left: 1rem;
    }
    &:focus {
      border-bottom: 1px solid #e0e0e0;
    }
  }
`;
export const Images = styled.div`
  height: 2.6rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;
