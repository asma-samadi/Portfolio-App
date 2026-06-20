import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Layout({ children, active, setActive }) {
  return (
    <div className="layout">
      <div className="left">
        <Hero />
        <Navbar active={active} setActive={setActive} />
      </div>

      <div className="right">{children}</div>
    </div>
  );
}
