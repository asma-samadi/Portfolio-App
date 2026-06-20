import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";
import allProjects from "../data/projects";

export default function Projects() {
const [filter, setFilter] = useState("All");
const [search, setSearch] = useState("");

const [updates, setUpdates] = useState([
{
id: 1,
text: "Portfolio updated 🎨",
},
]);

const filteredProjects = allProjects.filter((project) => {
const matchesFilter =
filter === "All" || project.techStack.includes(filter);

const matchesSearch = project.name
  .toLowerCase()
  .includes(search.toLowerCase());

return matchesFilter && matchesSearch;

});

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
<section className="projects-section page-transition" id="projects"> 
  <h2>Projects</h2>

  {/* SEARCH */}
  <input
    type="text"
    placeholder="Search projects..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="project-search"
  />

  {/* FILTER BUTTONS */}
  <div className="filter-buttons">
    {["All", "HTML", "JavaScript", "CSS"].map((tech) => (
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
