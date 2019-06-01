import React from "react";
import PlayerLayout from "./PlayerLayout";
import BingoTable from "./BingoTable";
import ScoreBoard from "./ScoreBoard";
import Notice from "./Notice";

export default ({ nums, message, playerNumber, checked }) => {
  return (
    <PlayerLayout>
      <Notice message={message} />
      <div className="player_name">player {playerNumber}</div>
      <BingoTable
       nums={nums}
       checked={checked}
       playerNumber={playerNumber}
      />
      <ScoreBoard />
    </PlayerLayout>
  );
};
