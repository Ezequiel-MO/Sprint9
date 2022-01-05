import SelectCapacity from "./SelectCapacity";
import SelectCity from "./SelectCity";
import SelectOptions from "./SelectOptions";
import SelectVendor from "./SelectVendor";
import { Increment } from "./increment/Increment";
import AddTransferButton from "./AddTransferButton";
import useScheduleFinalCheck from "./useScheduleFinalCheck";

const AddTransfer = ({ transfer }) => {
  const { transferDetails, handleChange, options } = useScheduleFinalCheck();

  return (
    <SelectOptions
      options={options}
      transferDetails={transferDetails}
      handleChange={handleChange}
      className='select-options'
      transfer={transfer}
    >
      <SelectCity />
      <SelectVendor />
      <SelectCapacity />
      <Increment />
      <AddTransferButton />
    </SelectOptions>
  );
};

export default AddTransfer;
