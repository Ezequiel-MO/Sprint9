import { DashboardCardContainer } from "../styles";
import { Icon } from "@iconify/react";
import DashboardCardLogic from "./DashboardVCLogic";

const DashboardVendorCard = ({ slug, icon, title }) => {
  const { handleClick } = DashboardCardLogic(slug);
  return (
    <DashboardCardContainer onClick={handleClick}>
      <Icon icon={icon} width='40' />
      {title}
    </DashboardCardContainer>
  );
};

export default DashboardVendorCard;
