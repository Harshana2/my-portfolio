import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";

const App = () => {
  return (
    <div>
      <CustomCursor />
      <NavBar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
