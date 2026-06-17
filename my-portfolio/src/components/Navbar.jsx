import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar({ active, setActive }) {

  return (
    <nav>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => setActive("about")}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active" : ""}
            onClick={() => setActive("skills")}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={() => setActive("projects")}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#feedBack"
            className={active === "feedBack" ? "active" : ""}
            onClick={() => setActive("feedBack")}
          >
            Feedback
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={() => setActive("contact")}
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
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}
