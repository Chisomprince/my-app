import React from "react";
import Nav from "./layouts/nav/index";
import Home from "./pages/home";
import Footer from "./pages/Footer";
import AboutPage from "./pages/aboutpage";
import ProjectPage from "./pages/projectpage";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/projects" component={ProjectPage} />
          </div>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
