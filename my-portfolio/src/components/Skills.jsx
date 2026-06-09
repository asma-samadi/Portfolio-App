export default function Skills() {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React"],
    Tools: ["Git", "GitHub", "VS Code", "Vite"],
    "Currently Learning": ["Node.js", "Responsive Design"],
  };

  return (
    <section id="skills">
      <h2>Skills</h2>

      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>

          <div className="skills-container">
            {skillList.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
