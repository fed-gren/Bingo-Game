import React from "react";
import {useSelector} from "react-redux";
import "./styles/reset.css";
import "./styles/style.css";
import Header from "./components/Header";
import PlayerContainer from "./containers/PlayerContainer";

const Root = () => {
  const playing = useSelector(state => state.starter.playing);
  const nowPlayer = useSelector(state => state.orderControl.now);
  return (
    <>
      <Header title="BINGO!" />
      <div className="player_container">
        <PlayerContainer
          playerNumber={1}
          nowPlayer={playing && nowPlayer}
          />
        <PlayerContainer
          playerNumber={2}
          nowPlayer={playing && nowPlayer}
          />
      </div>
    </>
  );
};

export default Root;
