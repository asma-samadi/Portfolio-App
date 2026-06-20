import { useState } from "react";
import "../styles/projects.css";
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-item">
      {/* LEFT IMAGE */}
      <img src={project.image} alt={project.name} className="project-img" />

      {/* RIGHT CONTENT */}
      <div className="project-content">
        {/* PROGRESS BAR */}
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={project.progress || 70}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-fill"
            style={{ width: `${project.progress || 70}%` }}
          ></div>
        </div>

        <div className="progress-number">{project.progress || 70}%</div>

        {/* TITLE */}
        <div className="project-title">
          <a href={project.link} target="_blank" rel="noreferrer">
            {project.name} <MdArrowOutward />
          </a>

          {project.featured && <span className="featured">★ Featured</span>}
        </div>

        <p className="project-desc">{project.description}</p>

        <div className="tech-stack">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <button
          className="details-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? "Hide Details" : "View Details"}
        </button>

        <Link to={`/projects/${project.id}`} className="details-btn">
          View Full Details
        </Link>

        {expanded && (
          <div className="extra-details">
            <p>Project built for learning frontend development.</p>
          </div>
        )}
      </div>
    </div>
  );
}
