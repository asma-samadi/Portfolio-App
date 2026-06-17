import { useState } from "react";
import "../styles/projects.css";

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-item">
      {/* LEFT IMAGE */}
      <img src={project.image} alt={project.name} className="project-img" />

      {/* RIGHT CONTENT */}
      <div className="project-content">
        <div className="project-title">
          <a href={project.link} target="_blank" rel="noreferrer">
            {project.name}
          </a>

          {project.featured && <span className="featured">★ Featured</span>}
        </div>

        <p className="project-desc">{project.description}</p>

        <div className="tech-stack">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <button className="details-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide Details" : "View Details"}
        </button>

        {expanded && (
          <div className="extra-details">
            <p>Project built for learning frontend development.</p>
          </div>
        )}
      </div>
    </div>
  );
}
