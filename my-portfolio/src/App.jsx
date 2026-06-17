import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FeedbackWall from "./components/FeedBackWall";

import "./index.css";

import { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import ScrollReveal from "scrollreveal";


const VALID_THEMES = ["dark", "light", "forest"];

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        setShowLoader(false);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const savedTheme = localStorage.getItem("theme");

  const [theme, setTheme] = useState(
    VALID_THEMES.includes(savedTheme) ? savedTheme : "dark",
  );

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showButton, setShowButton] = useState(false);
  const [active, setActive] = useState("about");

  const isScrollingRef = useRef(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // SAVE THEME
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleMouseMove = (e) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  };

  // ScrollReveal
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "4px",
      duration: 800,
      easing: "ease-out",
      reset: false,
      cleanup: true,
    });

    sr.reveal(".hero", { origin: "top", delay: 300 });
    sr.reveal("#about", { origin: "left", delay: 300 });
    sr.reveal("#aboutMe", { origin: "bottom", delay: 300 });
    sr.reveal("#skills", { origin: "right", delay: 300 });
    sr.reveal("#projects", { origin: "bottom", delay: 300 });
    sr.reveal("#feedBack", { origin: "bottom", delay: 300 });
    sr.reveal("#contact", { origin: "bottom", delay: 300 });

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => sr.destroy?.();
  }, []);

  // Scroll button
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const sections = [
        "about",
        "aboutMe",
        "skills",
        "projects",
        "feedBack",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let current = "about";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* THEME BUTTONS */}
      <div className="theme-switcher">
        <button
          className={`theme-btn ${theme === "dark" ? "active-theme" : ""}`}
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>

        <button
          className={`theme-btn ${theme === "light" ? "active-theme" : ""}`}
          onClick={() => setTheme("light")}
        >
          Light
        </button>

        <button
          className={`theme-btn ${theme === "forest" ? "active-theme" : ""}`}
          onClick={() => setTheme("forest")}
        >
          Forest
        </button>
      </div>

      <div className="layout">
        {showButton && (
          <button
            className="back-top"
            onClick={() => {
              isScrollingRef.current = true;

              window.scrollTo({ top: 0, behavior: "smooth" });

              setTimeout(() => {
                isScrollingRef.current = false;
                setActive("about");
              }, 700);
            }}
          >
            <FaArrowUp /> Back to the Top
          </button>
        )}

        <div className="left">
          <Hero />
          <Navbar active={active} setActive={setActive} />
        </div>

        <div className="right">
          <section id="about">
            <About />
          </section>
          <section id="aboutMe">
            <AboutMe />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="feedBack">
            <FeedbackWall />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

