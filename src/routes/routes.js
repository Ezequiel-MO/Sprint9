import {
  ProjectLog,
  ScheduleProjectForm,
  HotelMasterForm,
  RestaurantMasterForm,
  EventMasterForm,
  TransfersMasterForm,
  ScheduleFinalCheck,
  Login,
} from "../pages";

export const routes = [
  {
    path: "/login",
    Component: Login,
    name: "login",
  },
  {
    path: "/project-log",
    Component: ProjectLog,
    name: "projectLog",
  },
  {
    path: "/schedule-project-form",
    Component: ScheduleProjectForm,
    name: "scheduleProjectForm",
  },
  {
    path: "/schedule-check",
    Component: ScheduleFinalCheck,
    name: "scheduleCheck",
  },
  {
    path: "/hotel-master-form",
    Component: HotelMasterForm,
    name: "hotelMasterForm",
  },
  {
    path: "/event-master-form",
    Component: EventMasterForm,
    name: "eventMasterForm",
  },
  {
    path: "/restaurant-master-form",
    Component: RestaurantMasterForm,
    name: "restaurantMasterForm",
  },
  {
    path: "/transfers-master-form",
    Component: TransfersMasterForm,
    name: "transfersMasterForm",
  },
];
