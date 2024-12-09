import NavBar from "./components/nav/NavBar";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import AdsComponent from "./components/AdsComponent.tsx";

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <AdsComponent adClient={'ca-pub-6804902721181070'} adSlot={'3002495529'}/>
    </>
  );
}

export default App;