import "../../styles/hero.css";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <h1>Asma Samadi</h1>
      <div className="intro-line">
  <p>I'm</p>

  <span className="typewriter">
    <Typewriter
      words={[
        "an Aspiring Frontend Developer",
        "Building Projects with React",
        "Passionate About JavaScript",
        "Always Learning",
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</div>
        <span>
          <br />
          <br />
          <p className="skill-text">
            I build modern, responsive web projects while improving my skills in
            JavaScript and React.
          </p>
        </span>
    </section>
  );
}
