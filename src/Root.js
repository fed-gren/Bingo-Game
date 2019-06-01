import React from "react";
import "./styles/reset.css";
import "./styles/style.css";
import Header from "./components/Header";
import Player from "./components/Player";

const Root = () => {
  return (
    <>
      <Header title="BINGO!" />
      <div className="player_container">
        <Player />
        <Player />
      </div>
    </>
  );
};

export default Root;
