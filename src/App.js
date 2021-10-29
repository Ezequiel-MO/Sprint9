import Header from "./components/Header/Header";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Login from "./pages/Login/Login";
import ProjectLog from "./pages/ProjectConfig/ProjectLog";
import { Container } from "./generalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserIsSearchingProject,
  SET_UserIsSearchingProject,
} from "./features/UserIsSearchingProjectSlice";
import HotelConfig from "./pages/HotelConfig/HotelConfig";
import ScheduleConfig from "./pages/ScheduleConfig/ScheduleConfig";
import VendorMaster from "./pages/VendorMaster/VendorMaster";
import HotelMaster from "./pages/Master/HotelMaster";
import RestaurantMaster from "./pages/Master/RestaurantMaster";
import EventMaster from "./pages/Master/EventMaster";

function App() {
  const userIsSearchingProject = useSelector(selectUserIsSearchingProject);
  const dispatch = useDispatch();
  return (
    <Router>
      <Header />
      <Container onClick={() => dispatch(SET_UserIsSearchingProject(false))}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/project-form' component={ProjectLog} />
          <Route path='/hotel-config' component={HotelConfig} />
          <Route path='/schedule-config' component={ScheduleConfig} />
          <Route path='/Hotels-master' component={HotelMaster} />
          <Route path='/Restaurants-master' component={RestaurantMaster} />
          <Route path='/Events-master' component={EventMaster} />
          <Route path='/vendor-master' component={VendorMaster} />
          <Route path='/' exact component={Welcome} />
        </Switch>
      </Container>
      {userIsSearchingProject && <ProjectModal />}
    </Router>
  );
}

export default App;
