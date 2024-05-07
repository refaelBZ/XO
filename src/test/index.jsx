// TestComponent.jsx
import React from "react";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/kobi">Kobi</Link>
          </li>
          <li>
            <Link to="/ronini">Ronini</Link>
          </li>
          <li>
            <Link to="/refael">Refael</Link>
          </li>
        </ul>
      </nav>
      {/* 
      <Routes>
        
      </Routes> */}
    </div>
  );
};

export default Test;
