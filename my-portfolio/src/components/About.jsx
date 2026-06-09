import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section>
      <h2>About Me</h2>

      <p>
        I’m Asma Samadi, an aspiring Frontend Developer focused on building
        clean, responsive, and user-friendly web applications.
      </p>

      <p>
        I enjoy working with HTML, CSS, JavaScript, and React. I like turning
        ideas into simple and functional websites that people can use easily.
      </p>

      <p>
        Currently, I’m learning modern web development and building projects to
        improve my skills and become a professional developer in the future.
      </p>

      <div>
        <FaInstagram />
        <FaGithub />
        <FaLinkedin />
      </div>
    </section>
  );
}
