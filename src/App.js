import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/AboutMe";
import Home from "./components/Home";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
};

export default App;
