import React from "react";
import Navbars from "./Components/Navbars";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbars />
      <hl></hl>
      <About />
      <hr></hr>
      <Projects />
      <hr></hr>
      <Skills />
      <hr></hr>
      <Experience />
      <hr></hr>
      <Contact />
    </main>
  );
}

export default App;
