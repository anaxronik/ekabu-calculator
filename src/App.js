import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Pricing } from "./pages/Pricing/Pricing";
import { Calculator } from "./pages/Calculator/Calculator";
import { Navibar } from "./components/Navibar";
import { RegistrationPage } from "./pages/RegistrationPage";

function App() {
  return (
    <>
      <Router>
        <Navibar />
        <Container>
          <Switch>
            <Route path="/" exact>
              <Calculator />
            </Route>
            <Route path="/price">
              <Pricing />
            </Route>
            <Route path="/history">History here</Route>
            <Route path="/registration">
              <RegistrationPage />
            </Route>
            <Route path="/login">LOGIN HERE</Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
