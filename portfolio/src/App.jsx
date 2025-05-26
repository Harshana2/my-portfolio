import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
