import { Link } from "react-router-dom";
import { VendorMasterContainer } from "./styles";
import VendorCard from "./VendorCard/VendorCard";

const MasterLog = () => {
  return (
    <VendorMasterContainer>
      <h2>Upload New vendors</h2>
      {["Hotels", "Restaurants", "Events"].map((vendor) => (
        <Link key={vendor} to={`/${vendor}-master`}>
          <VendorCard vendor={vendor} />
        </Link>
      ))}
    </VendorMasterContainer>
  );
};

export default MasterLog;
