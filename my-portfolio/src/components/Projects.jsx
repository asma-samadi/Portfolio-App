import ProjectCard from "./projectCard";
import invoiceImg from "../assets/Invoice Flow.PNG";
import climateImg from "../assets/Climate Guide.PNG";
import '../styles/projects.css'

const projects = [
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
    description: "A website for Knowing the weather every time with true info.",
    link: "https://climateguide.netlify.app/",
    techStack: ["HTML", "JavaScript", "CSS"],
    featured: true,
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
