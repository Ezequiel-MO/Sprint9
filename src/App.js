import Header from "./components/Header/Header";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Login from "./pages/Login/Login";
import { Container } from "./generalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserIsSearchingProject,
  SET_UserIsSearchingProject,
} from "./features/UserIsSearchingProjectSlice";

function App() {
  const userIsSearchingProject = useSelector(selectUserIsSearchingProject);
  const dispatch = useDispatch();
  return (
    <Router>
      <Header />
      <Container onClick={() => dispatch(SET_UserIsSearchingProject(false))}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Welcome} />
        </Switch>
      </Container>
      {userIsSearchingProject && <ProjectModal />}
    </Router>
  );
}

export default App;
