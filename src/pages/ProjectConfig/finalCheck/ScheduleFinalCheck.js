import { ScheduleProjectFormContainer } from "../ProjectForms/styles";
import "./styles.css";
import SelectCapacity from "./SelectCapacity";
import SelectCity from "./SelectCity";
import SelectOptions from "./SelectOptions";
import SelectVendor from "./SelectVendor";
import useScheduleFinalCheck from "./useScheduleFinalCheck";
import { Increment } from "./increment/Increment";
import AddTransfer from "./AddTransfer";

const ScheduleFinalCheck = () => {
  const { status, handleSubmit, transferDetails, handleChange, options } =
    useScheduleFinalCheck();

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
      <SelectOptions
        options={options}
        transferDetails={transferDetails}
        handleChange={handleChange}
        className='select-options'
        transfer='transfer-in'
      >
        <SelectCity />
        <SelectVendor />
        <SelectCapacity />
        <Increment />
        <AddTransfer />
      </SelectOptions>
      <SelectOptions
        options={options}
        transferDetails={transferDetails}
        handleChange={handleChange}
        className='select-options'
        transfer='transfer-out'
      >
        <SelectCity />
        <SelectVendor />
        <SelectCapacity />
        <Increment />
        <AddTransfer />
      </SelectOptions>
      <button type='submit'>Submit</button>
    </form>
  );

  /* 
     

      {addTransfers.transferIn && (
        <div style={{ display: "flex" }}>
          <p>
            Transfer In , {capacity} Seater Bus , cost {vendorCost}€
          </p>
        </div>
      )}

      {addTransfers.transferOut && (
        <div style={{ display: "flex" }}>
          <p>
            Transfer Out , {capacity} Seater Bus , cost {vendorCost}€
          </p>
        </div>
      )}

      <button type='submit' disabled={status === "selecting"}>
        Submit Form
      </button>
    </form>
  ); */
};

export default ScheduleFinalCheck;
