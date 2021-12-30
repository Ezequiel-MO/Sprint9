import AddService from "./AddService";
import DialogBox from "../../../uicomponents/dialogBox/DialogBox";
import TransferCo from "./TransferCo";
import ListOfServices from "./ListOfServices";
import { ScButton } from "./styles";
import useTransfersMasterForm from "./useTransfersMasterForm";

const TransfersMasterForm = () => {
  const {
    handleSubmit,
    companyValues,
    setCompanyValues,
    handleAddService,
    status,
    setStatus,
    setSubmitReady,
    submitReady,
    services,
    handleLeave,
    errorMessage,
  } = useTransfersMasterForm();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TransferCo
          companyValues={companyValues}
          setCompanyValues={setCompanyValues}
        />
        <AddService
          onAddService={handleAddService}
          status={status}
          setStatus={setStatus}
          companyValues={companyValues}
          setCompanyValues={setCompanyValues}
          setSubmitReady={setSubmitReady}
        />
        <ListOfServices
          services={services}
          companyValues={companyValues}
          setCompanyValues={setCompanyValues}
          status={status}
        />
        <ScButton type='button' disabled={!submitReady} onClick={handleLeave}>
          If you have added all services for this Transfer vendor, click here to
          leave this form
        </ScButton>
      </form>
      {errorMessage && <DialogBox message={errorMessage} />}
      {status === "leaving" && (
        <DialogBox message='Thanks for submitting the form' />
      )}
    </div>
  );
};

export default TransfersMasterForm;
