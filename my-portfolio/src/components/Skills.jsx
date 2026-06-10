import '../styles/skills.css'

export default function Skills() {
  const frontend = ["HTML", "CSS", "JavaScript", "React"];
  const tools = ["Git", "GitHub", "VS Code", "Vite"];
  const learning = ["Node.js", "Backend Development", "Web Accessibility"];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <p className="skills-intro">
        Over the past year, I’ve been building projects and strengthening my
        frontend development skills. I enjoy creating responsive user
        interfaces, learning modern development practices, and continuously
        improving my understanding of web technologies.
      </p>

      <div className="skill-group">
        <h3>Frontend Development</h3>
        <div className="skills-container">
          {frontend.map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="skill-group">
        <h3>Tools & Workflow</h3>
        <div className="skills-container">
          {tools.map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="skill-group">
        <h3>Exploring</h3>
        <div className="skills-container">
          {learning.map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}