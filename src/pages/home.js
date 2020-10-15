import React from "react";
import Services from "../layouts/services page";
import Intro from "../layouts/intro";
import Intro2 from "../layouts/intro2";
import Projects from "../layouts/project";
import About from "../layouts/about/index";
import Contact from "../layouts/contact";

function Home() {
  return (
    <div>
      <Intro />
      <Services />
      <Intro2 />
      <Projects />

      <About />

      <Contact />
    </div>
  );
}

export default Home;
