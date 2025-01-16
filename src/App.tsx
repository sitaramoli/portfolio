import NavBar from "./components/nav/NavBar";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  );
}

export default App;