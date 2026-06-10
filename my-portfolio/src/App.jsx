import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./index.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      className={darkMode ? "dark" : "light"}
      onMouseMove={handleMouseMove}
      style={{
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
      }}
    >
      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="layout">
        <div className="left">
          <Hero />
          <Navbar />
        </div>
        <div className="right">
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
