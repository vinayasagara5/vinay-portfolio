import { useState } from 'react';
import PortPolfolio from './PortPolfolio';
import './App.css';


function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="App"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {isHovered && (
        <div
          className="shadow"
          style={{
            background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
          }}
        />
      )}
      <PortPolfolio />
    </div>
  );
}

export default App;
