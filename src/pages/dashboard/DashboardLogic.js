import { useState } from "react";

const DashboardLogic = () => {
  const [status, setStatus] = useState("");

  const dashboardData = [
    {
      icon: "bx:bx-hotel",
      title: "Hotel DB",
      slug: "/hotel-master-form",
    },
    {
      icon: "bx:bx-bus",
      title: "Transportation DB",
      slug: "/transfers-master-form",
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
    dashboardData,
    status,
    setStatus,
  };
};

export default DashboardLogic;
