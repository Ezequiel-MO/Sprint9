import Header from "./components/Header/Header";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import { Container } from "./generalStyles";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserIsSearchingProject,
  SET_UserIsSearchingProject,
} from "./features/UserIsSearchingProjectSlice";
import { Dashboard, HotelProjectForm } from "./pages";
import PrivateRoute from "./auth/PrivateRoute";
import { selectAuthRoutes } from "./features/authRoutesSlice";
import { routes } from "./routes/routes";

function App() {
  const userIsSearchingProject = useSelector(selectUserIsSearchingProject);
  const dispatch = useDispatch();
  const authRoutes = useSelector(selectAuthRoutes);

  return (
    <Router>
      <Header />
      <Container onClick={() => dispatch(SET_UserIsSearchingProject(false))}>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} />
          ))}
          <PrivateRoute
            path='/hotel-project-form'
            isAuth={authRoutes["hotelProjectForm"]}
          >
            <Route component={HotelProjectForm} />
          </PrivateRoute>
          <Route path='/' exact component={Dashboard} />
          <Route path='/*' component={() => <Redirect to='/' />} />
        </Switch>
      </Container>
      {userIsSearchingProject && <ProjectModal listingFormat='modal' />}
    </Router>
  );
}

export default App;
