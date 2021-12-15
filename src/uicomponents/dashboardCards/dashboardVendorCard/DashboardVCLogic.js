import { useHistory } from "react-router-dom";

const DashboardCardLogic = (
  slug,
  showVendorCards,
  setShowVendorCards,
  title
) => {
  const history = useHistory();
  const handleClick = () => {
    if (title === "Create/Maintain Vendor") {
      setShowVendorCards(!showVendorCards);
    } else {
      history.push(`${slug}`);
    }
  };
  return { handleClick };
};

export default DashboardCardLogic;
