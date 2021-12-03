import Header from "./components/Header/Header";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Login from "./pages/Login/Login";
import { Container } from "./generalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserIsSearchingProject,
  SET_UserIsSearchingProject,
} from "./features/UserIsSearchingProjectSlice";
import ProjectLog from "./pages/ProjectConfig/ProjectLog/ProjectLog";
import ScheduleProjectForm from "./pages/ProjectConfig/ProjectForms/ScheduleProjectForm/ScheduleProjectForm";
import HotelMasterForm from "./pages/VendorMaster/MasterForms/HotelMasterForm";
import RestaurantMasterForm from "./pages/VendorMaster/MasterForms/RestaurantMasterForm";
import EventMasterForm from "./pages/VendorMaster/MasterForms/EventMasterForm";
import HotelProjectForm from "./pages/ProjectConfig/ProjectForms/HotelProjectForm/HotelProjectForm";

function App() {
  const userIsSearchingProject = useSelector(selectUserIsSearchingProject);
  const dispatch = useDispatch();
  return (
    <Router>
      <Header />
      <Container onClick={() => dispatch(SET_UserIsSearchingProject(false))}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/project-log' component={ProjectLog} />
          <Route path='/hotel-project-form' component={HotelProjectForm} />
          <Route
            path='/schedule-project-form'
            component={ScheduleProjectForm}
          />
          <Route path='/hotel-master-form' component={HotelMasterForm} />
          <Route
            path='/restaurant-master-form'
            component={RestaurantMasterForm}
          />
          <Route path='/event-master-form' component={EventMasterForm} />
          <Route path='/' exact component={Dashboard} />
        </Switch>
      </Container>
      {userIsSearchingProject && <ProjectModal />}
    </Router>
  );
}

export default App;
