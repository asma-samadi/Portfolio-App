import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div className="nav-icons">
        <a href="#" target="_blank">
          <FaInstagram />
        </a>

        <a href="https://github.com/asma-samadi" target="_blank">
          <FaGithub />
        </a>

        <a href="linkedin.com/in/asma-samadi-02854a382" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}
