import "../styles/projects.css";

export default function ProjectCard({ project }) {
  return (
    <section id="projects">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="project-card">
          <img src={project.image} alt={project.name} />

          <div className="project-card-content">
            {project.featured && <span className="featured">Featured</span>}

            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
