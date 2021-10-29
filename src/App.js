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
import VendorMaster from "./pages/VendorMaster/VendorMaster";
import ScheduleConfig from "./pages/VendorConfiguration/ScheduleConfig";
import HotelConfig from "./pages/VendorConfiguration/HotelConfig";
import RestaurantConfig from "./pages/VendorConfiguration/RestaurantConfig";
import EventConfig from "./pages/VendorConfiguration/EventConfig";

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
          <Route path='/schedule-config' component={ScheduleConfig} />
          <Route path='/Hotels-master' component={HotelConfig} />
          <Route path='/Restaurants-master' component={RestaurantConfig} />
          <Route path='/Events-master' component={EventConfig} />
          <Route path='/vendor-master' component={VendorMaster} />
          <Route path='/' exact component={Welcome} />
        </Switch>
      </Container>
      {userIsSearchingProject && <ProjectModal />}
    </Router>
  );
}

export default App;
