import { DashboardCardContainer } from "../styles";
import { Icon } from "@iconify/react";
import DashboardCardLogic from "./DashboardVCLogic";

const DashboardVendorCard = ({
  slug,
  icon,
  title,
  showVendorCards,
  setShowVendorCards,
}) => {
  const { handleClick } = DashboardCardLogic(
    slug,
    showVendorCards,
    setShowVendorCards,
    title
  );

  return (
    <DashboardCardContainer onClick={handleClick}>
      <Icon icon={icon} width='40' />
      {title}
    </DashboardCardContainer>
  );
};

export default DashboardVendorCard;
