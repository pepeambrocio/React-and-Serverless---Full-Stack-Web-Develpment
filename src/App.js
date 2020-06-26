import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import HighScores from "./pages/HighScores";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Container } from "./styled/Container";
import { Main } from "./styled/Main";
import Global from "./styled/Global";
import { useAuth0 } from "./auth";

function App() {
  const { loading } = useAuth0();
  if (loading) {
    return (
      <>
        <Global />

        <Main>
          <p>Loading...</p>
        </Main>
      </>
    );
  }
  return (
    <Router>
      <Global />
      <Main>
        {loading && <p>Loading...</p>}
        {!loading && (
          <Container>
            <Navbar />
            <Switch>
              <Route path="/game" component={Game} />
              <Route path="/highScores" component={HighScores} />
              <Route path="/gameOver" component={GameOver} />
              <Route path="/" component={Home} />
            </Switch>
          </Container>
        )}
      </Main>
    </Router>
  );
}

export default App;
