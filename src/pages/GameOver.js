import React from "react";
import { useScore } from "../contexts/ScoreContext";
import { StyledLink } from "../styled/Navbar";

export default function GameOver({ history }) {
  const [score] = useScore();

  if (score === -1) {
    history.push("/");
  }
  return (
    <div>
      <h1> {score} </h1>
      <StyledLink to="/">Go Home</StyledLink>
      <StyledLink to="/game">Play Again?</StyledLink>
    </div>
  );
}
