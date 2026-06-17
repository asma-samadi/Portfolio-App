import { useState } from "react";
import "../styles/aboutMe.css";

export default function About() {
  const [emoji, setEmoji] = useState("🙂");
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setEmoji("🚀");
    setClicks((prev) => prev + 1);
  };

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      {/* AVATAR */}
      <div
        className="avatar-box"
        onMouseEnter={() => setEmoji("👋")}
        onMouseLeave={() => setEmoji("🙂")}
        onClick={handleClick}
      >
        <div className="avatar">{emoji}</div>
      </div>

      {/* COUNTER */}
      <p className="click-counter">Clicked 🚀 {clicks} times</p>

      <p className="about-text">
        I’m a frontend developer passionate about building modern web apps.
      </p>
    </section>
  );
}
