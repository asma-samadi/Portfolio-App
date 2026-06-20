import Home from "./Pages/Home";
import NotFound from './Pages/NotFound';
import ProjectDetails from './Pages/ProjectDetails'

import "./index.css";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";

function App() {
  const [showLoader, setShowLoader] = useState(() => {
    return !sessionStorage.getItem("loaded");
  });

  const [fadeOut, setFadeOut] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem("loaded", "true");
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  };

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (showLoader) {
    return (
      <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
        <div className="loader-inner">
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
        </div>
        <h1 className="loader-text">Loading</h1>
      </div>
    );
  }


  return (
    <div
      className={theme}
      onMouseMove={handleMouseMove}
      style={{
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
      }}
    >
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="theme-switcher">
        <button className="theme-btn" onClick={() => setTheme("dark")}>
          Dark
        </button>
        <button className="theme-btn" onClick={() => setTheme("light")}>
          Light
        </button>
        <button className="theme-btn" onClick={() => setTheme("forest")}>
          Forest
        </button>
      </div>

      {showButton && (
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp /> Back to Top
        </button>
      )}

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/skills" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/feedback" element={<Home />} />
            <Route path="/contact" element={<Home />} />

            <Route path="/projects/:id" element={<ProjectDetails />} />
            
            <Route path="*" element={<NotFound />} />
        </Routes>

    </div>
  );
}

export default App;
