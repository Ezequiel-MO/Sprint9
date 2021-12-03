import DashboardCard from "../../uicomponents/dashboardCard/DashboardCard";
import DashboardLogic from "./DashboardLogic";
import { WelcomeContainer, VendorCardsContainer } from "./styles";

const Dashboard = () => {
  const { showVendorCards, setShowVendorCards, dashboardData } =
    DashboardLogic();

  return (
    <WelcomeContainer>
      <DashboardCard
        icon='akar-icons:key'
        title='Create/Maintain Vendor'
        showVendorCards={showVendorCards}
        setShowVendorCards={setShowVendorCards}
      />
      {showVendorCards && (
        <VendorCardsContainer>
          {dashboardData.map((item) => (
            <DashboardCard
              key={item.icon}
              icon={item.icon}
              title={item.title}
              slug={item.slug}
            />
          ))}
        </VendorCardsContainer>
      )}
    </WelcomeContainer>
  );
};

export default Dashboard;
