import Header from "./components/Header/Header";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Login from "./pages/Login/Login";
import { Container } from "./generalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Router>
      <Header showModal={showModal} setShowModal={setShowModal} />
      <Container onClick={() => setShowModal(false)}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Welcome} />
        </Switch>
      </Container>
      {showModal && <ProjectModal setShowModal={setShowModal} />}
    </Router>
  );
}

export default App;
