import { useState } from "react";

const DashboardLogic = () => {
  const [showVendorCards, setShowVendorCards] = useState(false);
  const [showListOfProjects, setShowListOfProjects] = useState(false);

  const dashboardData = [
    {
      icon: "bx:bx-hotel",
      title: "Hotel DB",
      slug: "/hotel-master-form",
    },
    {
      icon: "bx:bx-bus",
      title: "Transportation DB",
      slug: "/transport-master-form",
    },
    {
      icon: "carbon:events",
      title: "Events DB",
      slug: "/event-master-form",
    },
    {
      icon: "bx:bx-restaurant",
      title: "Restaurants DB",
      slug: "/restaurant-master-form",
    },
  ];
  return {
    showVendorCards,
    dashboardData,
    setShowVendorCards,
    showListOfProjects,
    setShowListOfProjects,
  };
};

export default DashboardLogic;
