import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

import invoiceImg from "../assets/Invoice Flow.PNG";
import climateImg from "../assets/Climate Guide.PNG";

const allProjects = [
  {
    id: 1,
    name: "Freelance Invoice App",
    image: invoiceImg,
    description: "Manage clients and invoices.",
    link: "https://asma-samadi.github.io/freelance-invoice-app/",
    techStack: ["HTML", "JavaScript", "CSS"],
    featured: true,
  },
  {
    id: 2,
    name: "Climate Guide",
    image: climateImg,
    description: "Weather tracking website with real-time info.",
    link: "https://climateguide.netlify.app/",
    techStack: ["HTML", "JavaScript", "CSS"],
    featured: true,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const [updates, setUpdates] = useState([
    {
      id: 1,
      text: "Portfolio updated 🎨",
    },
  ]);

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.techStack.includes(filter));

      const messages = [
        "Climate Guide deployed successfully 🌤️",
        "Portfolio updated 🎨",
        "New React feature added ⚛️",
        "Project details improved 🚀",
      ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newUpdate = {
        id: Date.now(),
        text: messages[Math.floor(Math.random() * messages.length)],
      };

      setUpdates([newUpdate]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        {["All", "React", "JavaScript", "CSS"].map((tech) => (
          <button
            key={tech}
            className={filter === tech ? "active" : ""}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* PROJECT LIST */}
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* UPDATES */}
      <div className="updates-box">
        <h3>Live Project Updates</h3>

        {updates.length === 0 && <p>No updates yet...</p>}

        {updates.map((u) => (
          <p key={u.id}>⚡ {u.text}</p>
        ))}
      </div>
    </section>
  );
}
