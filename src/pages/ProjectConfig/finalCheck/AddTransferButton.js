import { useContext } from "react";
import { SelectContext } from "./SelectOptions";
import useScheduleFinalCheck from "./useScheduleFinalCheck";

const AddTransferButton = () => {
  const { transfer } = useContext(SelectContext);
  const { addTransfer } = useScheduleFinalCheck();
  return (
    <button type='button' onClick={() => addTransfer(transfer)}>
      Add {transfer}
    </button>
  );
};

export default AddTransferButton;
