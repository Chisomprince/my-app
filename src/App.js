import React from "react";
import Nav from "./layouts/nav/index";
import Home from "./pages/home";
import Footer from "./pages/Footer";
import AboutPage from "./pages/aboutpage";
import ProjectPage from "./pages/projectpage";
import LearnPage from "./pages/learnPage";
import Contact from "./layouts/contact";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/learn" component={LearnPage} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
