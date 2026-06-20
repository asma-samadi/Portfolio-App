import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "../../styles/navbar.css";
import { NavLink } from 'react-router-dom'

export default function Navbar({ active }) {

  return (
    <nav>
      <ul className='nav-links'>
        <li>
          <NavLink
            to="/"
            className={active === "about" ? "active" : ""}
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/skills"
            className={active === "skills" ? "active" : ""}
            onClick={() =>
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={active === "projects" ? "active" : ""}
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/feedBack"
            className={active === "feedBack" ? "active" : ""}
            onClick={() =>
              document
                .getElementById("feedBack")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Feedback
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={active === "contact" ? "active" : ""}
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </NavLink>
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
