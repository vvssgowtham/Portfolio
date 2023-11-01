import React from "react";
import Navbars from "./Components/Navbars";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbars />
      <hl></hl>
      <About />
      <hl></hl>
      <Projects />
      <hr></hr>
      <Skills />
      <hr></hr>
    </main>
  );
}

export default App;
