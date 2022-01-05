import { Form } from "formik";
import styled from "styled-components";

export const ProjectLogContainer = styled(Form)`
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1rem;
`;
export const ProjectConfiguration = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 10px;
`;
export const GroupContainer = styled.fieldset`
  border: 3px solid #a9ba9d;
  border-radius: 1rem;
  padding: 1rem;
`;

export const ProjectResults = styled.div`
  border: ${({ validForm }) =>
    validForm ? `3px solid green` : `3px solid #a9ba9d;`};
  background-color: ${({ validForm }) => validForm && `lightgreen`};
  border-radius: 1rem;
  padding: 0.5rem;
`;
