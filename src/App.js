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
import { mockSchedule } from "./data/projects-data";
import ScheduleConfig from "./pages/ScheduleConfig/ScheduleConfig";

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
          <Route path='/' component={Welcome} />
        </Switch>
      </Container>
      {userIsSearchingProject && <ProjectModal />}
    </Router>
  );
}

export default App;
