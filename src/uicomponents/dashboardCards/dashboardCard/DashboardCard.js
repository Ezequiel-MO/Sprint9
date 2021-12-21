import { DashboardCardContainer } from "../styles";
import { Icon } from "@iconify/react";

const DashboardCard = ({ icon, title, setStatus }) => {
  const handleClick = () => {
    if (title === "Create/Maintain Vendor") {
      setStatus("show-vendor-cards");
    } else if (title === "See List of Projects") {
      setStatus("show-list-projects");
    }
  };
  return (
    <DashboardCardContainer onClick={handleClick}>
      <Icon icon={icon} width='40' />
      {title}
    </DashboardCardContainer>
  );
};

export default DashboardCard;
