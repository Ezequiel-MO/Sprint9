import Header from "./components/Header/Header";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import { Container } from "./generalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserIsSearchingProject,
  SET_UserIsSearchingProject,
} from "./features/UserIsSearchingProjectSlice";
import {
  ProjectLog,
  ScheduleProjectForm,
  HotelMasterForm,
  RestaurantMasterForm,
  EventMasterForm,
  HotelProjectForm,
  TransfersMasterForm,
  ScheduleFinalCheck,
  Login,
} from "./pages";
import PrivateRoute from "./auth/PrivateRoute";
import { selectAuthRoutes } from "./features/authRoutesSlice";

function App() {
  const userIsSearchingProject = useSelector(selectUserIsSearchingProject);
  const dispatch = useDispatch();
  const authRoutes = useSelector(selectAuthRoutes);

  return (
    <Router>
      <Header />
      <Container onClick={() => dispatch(SET_UserIsSearchingProject(false))}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/project-log' component={ProjectLog} />
          <PrivateRoute
            path='/hotel-project-form'
            isAuth={authRoutes["hotelProjectForm"]}
          >
            <Route component={HotelProjectForm} />
          </PrivateRoute>
          <Route
            path='/schedule-project-form'
            component={ScheduleProjectForm}
          />
          <Route path='/schedule-check' component={ScheduleFinalCheck} />
          <Route path='/hotel-master-form' component={HotelMasterForm} />
          <Route
            path='/restaurant-master-form'
            component={RestaurantMasterForm}
          />
          <Route path='/event-master-form' component={EventMasterForm} />
          <Route
            path='/transfers-master-form'
            component={TransfersMasterForm}
          />
          <Route path='/' exact component={Dashboard} />
        </Switch>
      </Container>
      {userIsSearchingProject && <ProjectModal listingFormat='modal' />}
    </Router>
  );
}

export default App;
