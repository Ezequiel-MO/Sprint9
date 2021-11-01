import { VendorCardContainer } from "./styles";

const VendorCard = ({ vendor }) => {
  return (
    <VendorCardContainer>
      <h3>{vendor}</h3>
    </VendorCardContainer>
  );
};

export default VendorCard;
