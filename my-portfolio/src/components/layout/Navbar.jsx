import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "../../styles/navbar.css";

export default function Navbar({ active }) {

  return (
    <nav>
      <ul className="nav-links">
        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#timeline"
            className={active === "timeline" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("timeline")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Journey
          </a>
        </li>

        <li>
          <a
            href="#feedBack"
            className={active === "feedBack" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("feedBack")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Feedback
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-icons desktop-icons">
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://github.com/asma-samadi">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/asma-samadi-811711382/">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}
