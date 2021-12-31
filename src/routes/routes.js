import {
  Login,
  ProjectLog,
  ScheduleProjectForm,
  ScheduleFinalCheck,
  HotelMasterForm,
  EventMasterForm,
  TransfersMasterForm,
  Dashboard,
} from "../pages";

export const routes = [
  {
    path: "/login",
    Component: Login,
    name: "login",
  },
  {
    path: "/project-log",
    Component: "ProjectLog",
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
    path: "/transfers-master-form",
    Component: TransfersMasterForm,
    name: "transfersMasterForm",
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    name: "dashboard",
  },
];
