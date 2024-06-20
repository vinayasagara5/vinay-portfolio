import { useState } from "react";
import PortPolfolio from "./PortPolfolio";
import "./App.css";
import Contact from "./components/contact/Contact";
import Title from "./components/title/Title";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="App"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <PortPolfolio />
      <Title subTitle="Contact Me" title="Get in Touch" />

      <Contact />
    </div>
  );
}

export default App;
