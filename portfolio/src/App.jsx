import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <div>
      <CustomCursor />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
