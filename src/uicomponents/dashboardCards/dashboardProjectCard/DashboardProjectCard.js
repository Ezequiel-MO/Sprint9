import { DashboardCardContainer } from "../styles";
import { Icon } from "@iconify/react";

const DashboardProjectCard = ({
  icon,
  title,
  setShowListOfProjects,
  showListOfProjects,
}) => {
  const handleClick = () => {
    setShowListOfProjects(!showListOfProjects);
  };
  return (
    <DashboardCardContainer onClick={handleClick}>
      <Icon icon={icon} width='40' />
      {title}
    </DashboardCardContainer>
  );
};

export default DashboardProjectCard;
