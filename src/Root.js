import React from "react";
import {useSelector} from "react-redux";
import "./styles/reset.css";
import "./styles/style.css";
import Header from "./components/Header";
import PlayerContainer from "./containers/PlayerContainer";

const Root = () => {
  const playing = useSelector(state => state.starter.playing);
  const nowPlayer = useSelector(state => state.orderControl.now);
  const player1Checked = useSelector(state => state.player.player1Checked);
  const player2Checked = useSelector(state => state.player.player2Checked);
  return (
    <>
      <Header title="BINGO!" />
      <div className="player_container">
        <PlayerContainer
          playerNumber={1}
          nowPlayer={playing && nowPlayer}
          checked={player1Checked}
          />
        <PlayerContainer
          playerNumber={2}
          nowPlayer={playing && nowPlayer}
          checked={player2Checked}
          />
      </div>
    </>
  );
};

export default Root;
