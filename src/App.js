import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contactme";
import About from "./components/AboutMe";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Project from "./components/Project";
const App = () => {
  return (
    <div className="mt-0">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
