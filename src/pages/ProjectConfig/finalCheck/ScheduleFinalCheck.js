import { ScheduleProjectFormContainer } from "../ProjectForms/styles";
import "./styles.css";
import useScheduleFinalCheck from "./useScheduleFinalCheck";
import AddTransfer from "./AddTransfer";

const ScheduleFinalCheck = () => {
  const { status, handleSubmit } = useScheduleFinalCheck();

  if (status === "valid") {
    return (
      <ScheduleProjectFormContainer>
        <h1>Project successfully created!</h1>
      </ScheduleProjectFormContainer>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Check Form</h1>
      <AddTransfer transfer='transfer-in' />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default ScheduleFinalCheck;
