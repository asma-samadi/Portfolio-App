import "../styles/about.css";
import { useState } from "react";

export default function About() {
   const [showMore, setShowMore] = useState(false);

  return (
    <section className="section-about" id="about">
      <h2>ABOUT</h2>
      <p>
        I’m an aspiring <span className="highlight">Frontend Developer</span>{" "}
        focused on building responsive, accessible, and user-centered web
        applications. I enjoy turning ideas into clean and functional digital
        experiences using modern web technologies such as{" "}
        <span className="highlight">HTML</span>,
        <span className="highlight"> CSS</span>,
        <span className="highlight"> JavaScript</span>, and
        <span className="highlight"> React</span>. My goal is to create
        interfaces that are not only visually appealing but also intuitive and
        efficient for users.
        <br />
        <br />I am currently dedicating my time to strengthening my
        <span className="highlight"> frontend development</span> skills through
        consistent practice and project-based learning. I focus on understanding
        <span className="highlight"> core programming concepts</span>, improving
        my problem-solving abilities, and writing clean, maintainable code. I am
        especially interested in
        <span className="highlight"> React development</span> and building
        <span className="highlight"> reusable components</span> that improve
        scalability and structure in web applications.
        <br />
        <br />
        {showMore && (
          <div className="extra-content">
            <p>
              Beyond coding, I enjoy exploring modern
              <span className="highlight"> UI design</span> trends and learning
              how thoughtful design decisions impact
              <span className="highlight"> user experience</span>. I aim to
              bridge the gap between <span className="highlight">design</span>{" "}
              and
              <span className="highlight"> development</span> by creating
              websites that are simple, fast, and accessible. I am committed to
              <span className="highlight"> continuous learning</span> and
              growing into a professional developer who builds meaningful and
              impactful
              <span className="highlight"> digital products</span>.
            </p>

            <div className="hobbies-box">
              <h3>My Hobbies</h3>

              <ul className="hobbies-list">
                <li>🌍 Learning Languages</li>
                <li>💻 Building Websites</li>
                <li>📖 Reading</li>
                <li>⚛️ Learning React</li>
              </ul>
            </div>
          </div>
        )}
      </p>

      <button onClick={() => setShowMore(!showMore)} className="details-btn">
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}
