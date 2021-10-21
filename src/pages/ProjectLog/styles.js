import styled from "styled-components";

export const ProjectLogContainer = styled.form`
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 3rem;
`;
export const ProjectConfiguration = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 10px;
`;
export const GroupContainer = styled.div`
  border: 3px solid #a9ba9d;
  border-radius: 1rem;
  & h3 {
    padding-left: 1rem;
  }
`;

export const GroupDates = styled.div``;
export const GroupLocation = styled.div``;

export const ProjectResults = styled.div`
  border: ${({ validForm }) =>
    validForm ? `3px solid green` : `3px solid #a9ba9d;`};
  border-radius: 1rem;
  padding: 1rem;
`;
