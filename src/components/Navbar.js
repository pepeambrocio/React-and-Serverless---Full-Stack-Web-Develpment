import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          Learn.Build.<span>Type.</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/highScores">HighScores</Link>
        </li>
        <li>
          <Link to="/Game">Game</Link>
        </li>
        <li>
          <Link to="/gameOver">GameOver</Link>
        </li>
      </ul>
    </nav>
  );
}
