import About from "../components/About";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import FeedbackWall from "../components/FeedBackWall";
import Layout from "../components/layout/Layout";

import "../index.css";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ScrollReveal from "scrollreveal";

export default function Home() {
  const [active, setActive] = useState("about");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
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
  }, [setActive]);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "40px",
      duration: 800,
      easing: "ease-out",
      reset: false,
    });

    sr.reveal(".hero", { origin: "top" });
    sr.reveal("#about", { origin: "left" });
    sr.reveal("#aboutMe", { origin: "bottom" });
    sr.reveal("#skills", { origin: "right" });
    sr.reveal("#projects", { origin: "bottom" });
    sr.reveal("#feedBack", { origin: "bottom" });
    sr.reveal("#contact", { origin: "bottom" });

    return () => sr.destroy?.();
  }, []);

  useEffect(() => {
    const path = location.pathname.replace("/", "");

    if (!path) return;

    const section = document.getElementById(path);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const path = location.pathname.replace("/", "");

    if (path) {
      const el = document.getElementById(path);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Layout active={active} setActive={setActive}>
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
      </Layout>
    </>
  );
}
