import React from "react";
import { Link } from "react-router-dom";
import {
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
  StyledLink,
} from "../styled/Navbar";
import { Accent } from "../styled/Random";

export default function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <Link to="/">
          Learn.Build.<Accent>Type.</Accent>
        </Link>
      </div>
      <StyledNavItems>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/highScores">HighScores</StyledLink>
        </li>
        <li>
          <StyledLink to="/Game">Game</StyledLink>
        </li>
        <li>
          <StyledLink to="/gameOver">GameOver</StyledLink>
        </li>
      </StyledNavItems>
    </StyledNavbar>
  );
}
