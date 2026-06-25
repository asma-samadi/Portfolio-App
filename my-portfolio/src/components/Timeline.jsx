import { useEffect } from "react";
import "../styles/timeline.css";

const timelineData = [
  {
    year: "2023",
    title: "Started Web Development",
    description:
      "Learned HTML, CSS, JavaScript and built first static websites.",
  },
  {
    year: "2024",
    title: "React Journey Begins",
    description:
      "Started React, hooks, routing and component-based architecture.",
  },
  {
    year: "2025",
    title: "Real Projects",
    description:
      "Built responsive portfolio projects with APIs and modern UI design.",
  },
  {
    year: "Future",
    title: "Full Stack Developer",
    description: "Expanding into backend (Node.js, databases, authentication).",
  },
];

export default function Timeline() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section" id="timeline">
      <h2 className="timeline-title">My Journey</h2>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
