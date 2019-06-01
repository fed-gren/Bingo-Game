import React from "react";
import "./styles/reset.css";
import "./styles/style.css";
import Header from "./components/Header";
import Player from "./components/Player";
import PlayerContainer from "./containers/PlayerContainer";

const Root = () => {
  return (
    <>
      <Header title="BINGO!" />
      <div className="player_container">
        <PlayerContainer
          playerNumber={1}
        />
        <PlayerContainer
          playerNumber={2}
        />
      </div>
    </>
  );
};

export default Root;
