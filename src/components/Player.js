import React from "react";
import PlayerLayout from "./PlayerLayout";
import BingoTable from "./BingoTable";
import ScoreBoardContainer from "../containers/ScoreBoardContainer";
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
      <ScoreBoardContainer playerNumber={playerNumber}/>
    </PlayerLayout>
  );
};
