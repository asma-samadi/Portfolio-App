import "../styles/skills.css";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const skillsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const skills = [
  {
    name: "React",
    level: 85,
    fact: "⚛️ Built multiple projects with React.",
  },
  {
    name: "JavaScript",
    level: 80,
    fact: "⚡ Enjoy solving problems with JavaScript.",
  },
  {
    name: "HTML",
    level: 95,
    fact: "🌐 Strong understanding of semantic HTML.",
  },
  {
    name: "CSS",
    level: 90,
    fact: "🎨 Love creating responsive layouts.",
  },
];

  // 👇 Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills-section page-transition" ref={skillsRef}>
      <h2>⚡ Skills</h2>

      <p className="skills-intro">
        I build modern frontend projects using React and JavaScript 🚀
      </p>

      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: visible ? `${skill.level}%` : "0%",
                }}
              ></div>
            </div>

            <p className="fun-fact">{skill.fact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}