import React from "react";
import {useSelector} from "react-redux";
import "./styles/reset.css";
import "./styles/style.css";
import Header from "./components/Header";
import PlayerContainer from "./containers/PlayerContainer";

const Root = () => {
  const playing = useSelector(state => state.starter.playing);
  const player1Message = useSelector(state => state.player.player1Message);
  const player2Message = useSelector(state => state.player.player2Message);
  const player1Checked = useSelector(state => state.player.player1Checked);
  const player2Checked = useSelector(state => state.player.player2Checked);
  return (
    <>
      <Header title="BINGO!" />
      <div className="player_container">
        <PlayerContainer
          playerNumber={1}
          checked={player1Checked}
          message={player1Message}
          />
        <PlayerContainer
          playerNumber={2}
          checked={player2Checked}
          message={player2Message}
          />
      </div>
    </>
  );
};

export default Root;
