import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
