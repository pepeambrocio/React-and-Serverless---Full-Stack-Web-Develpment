import React from "react";
import {
  StyledGame,
  StyledScore,
  StyleTimer,
  StyledCharacter,
} from "../styled/Game";
import { Strong } from "../styled/Random";

export default function Game() {
  return (
    <StyledGame>
      <StyledScore>
        Score:<Strong>0</Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyleTimer>
        Time: <Strong>00: 000</Strong>
      </StyleTimer>
    </StyledGame>
  );
}
