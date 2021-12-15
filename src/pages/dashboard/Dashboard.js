import ProjectModal from "../../components/ProjectModal/ProjectModal";
import DashboardProjectCard from "../../uicomponents/dashboardCards/dashboardProjectCard/DashboardProjectCard";
import DashboardVendorCard from "../../uicomponents/dashboardCards/dashboardVendorCard/DashboardVendorCard";
import DashboardLogic from "./DashboardLogic";
import { WelcomeContainer, VendorCardsContainer } from "./styles";

const Dashboard = () => {
  const {
    showVendorCards,
    setShowVendorCards,
    dashboardData,
    showListOfProjects,
    setShowListOfProjects,
  } = DashboardLogic();

  return (
    <WelcomeContainer>
      <DashboardVendorCard
        icon='akar-icons:key'
        title='Create/Maintain Vendor'
        showVendorCards={showVendorCards}
        setShowVendorCards={setShowVendorCards}
      />

      {showVendorCards && (
        <VendorCardsContainer>
          {dashboardData.map((item) => (
            <DashboardVendorCard
              key={item.icon}
              icon={item.icon}
              title={item.title}
              slug={item.slug}
            />
          ))}
        </VendorCardsContainer>
      )}
      <DashboardProjectCard
        icon='ph:projector-screen-chart-light'
        title='See List of Projects'
        showListOfProjects={showListOfProjects}
        setShowListOfProjects={setShowListOfProjects}
      />
      {showListOfProjects && (
        <VendorCardsContainer>
          <ProjectModal listingFormat='page' />
        </VendorCardsContainer>
      )}
    </WelcomeContainer>
  );
};

export default Dashboard;
