import ProjectModal from "../../components/ProjectModal/ProjectModal";
import DashboardCard from "../../uicomponents/dashboardCards/dashboardCard/DashboardCard";
import DashboardVendorCard from "../../uicomponents/dashboardCards/dashboardVendorCard/DashboardVendorCard";
import { WelcomeContainer, VendorCardsContainer } from "./styles";
import useDashboard from "./useDashboard";

const Dashboard = () => {
  const { dashboardData, status, setStatus } = useDashboard();

  return (
    <WelcomeContainer>
      <DashboardCard
        icon='akar-icons:key'
        title='Create/Maintain Vendor'
        setStatus={setStatus}
      />

      {status === "show-vendor-cards" && (
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
      <DashboardCard
        icon='ph:projector-screen-chart-light'
        title='See List of Projects'
        setStatus={setStatus}
      />
      {status === "show-list-projects" && (
        <VendorCardsContainer>
          <ProjectModal listingFormat='page' />
        </VendorCardsContainer>
      )}
    </WelcomeContainer>
  );
};

export default Dashboard;
