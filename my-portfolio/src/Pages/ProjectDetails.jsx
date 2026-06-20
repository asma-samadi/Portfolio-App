import { useParams, Link } from "react-router-dom";
import "../styles/projectDetails.css";

import allProjects from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = allProjects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="project-details">
      {/* BACK BUTTON */}
      <Link to="/projects" className="back-btn">
        ← Back
      </Link>

      {/* IMAGE */}
      <img src={project.image} alt={project.name} />

      {/* TITLE */}
      <h1>
        {project.name} {project.featured && <span>⭐ Featured</span>}
      </h1>

      {/* DESCRIPTION */}
      <p>{project.description}</p>

      {/* TECH STACK */}
      <div className="tech-stack">
        {project.techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {/* PROGRESS */}
      <div className="progress-bar">
        <div style={{ width: `${project.progress || 70}%` }} />
      </div>

      {/* STATUS */}
      <h3>Status: {project.status || "In Progress"}</h3>

      {/* BUTTONS */}
      <div className="buttons">
        <a href={project.link} target="_blank">
          View Live
        </a>

        <a href={project.codeLink || "#"} target="_blank">
          View Code
        </a>
      </div>
    </div>
  );
}
