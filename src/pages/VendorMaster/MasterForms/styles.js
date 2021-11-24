import styled from "styled-components";

export const MasterFormContainer = styled.form`
  margin: 1rem;
  height: 28rem;
  width: 60rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  box-shadow: #e0e0e0 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const Left = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Right = styled(Left)``;

export const VendorNameAndAddress = styled.fieldset`
  padding: 0.5rem;
`;

export const Vendor = styled.div`
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  & > input {
    width: 100%;
    height: 2rem;
  }
`;
export const Address = styled(Vendor)``;

export const GeneralInfo = styled.fieldset`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  flex: 1;
`;
export const GeneralInfoGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`;

export const RestaurantInfoGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`;

export const EventInfoGrid = styled(RestaurantInfoGrid)``;
export const Box = styled.div``;

export const DescriptionGrid = styled.fieldset`
  padding: 0;
`;
export const Description = styled.div`
  margin: 0 auto;
  & textarea {
    border: none;
    border-bottom: 1px solid #e0e0e0;
    height: 16.8rem;
    width: 95%;
    font-size: 1rem;
    padding-left: 1rem;
    outline: none;
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
  & input {
    cursor: pointer;
  }
`;
