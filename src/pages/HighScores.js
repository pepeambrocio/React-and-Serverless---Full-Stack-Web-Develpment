import React, { useState, useEffect } from "react";
import { ScoreList, ScoreLI } from "../styled/HighScore";

export default function HighScores() {
  //use the fetch API to call getHighScore function
  //display those scores
  const [highScore, setHighScores] = useState([]);

  //use the fetch API to call getHighScores function
  useEffect(() => {
    const loadHighScore = async () => {
      try {
        const res = await fetch("/.netlify/functions/getHighScores");
        const scores = await res.json();
        setHighScores(scores);
      } catch (err) {
        console.log(err);
      }
    };
    loadHighScore();
  });
  return (
    <div>
      <h1> HighScores </h1>
      <ScoreList>
        {highScore.map((score) => (
          <ScoreLI key={score.id}>
            {score.fields.name} - {score.fields.score}
          </ScoreLI>
        ))}
      </ScoreList>
    </div>
  );
}
