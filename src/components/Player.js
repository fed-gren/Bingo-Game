import React from "react";
import PlayerLayout from "./PlayerLayout";
import BingoTable from "./BingoTable";
import ScoreBoard from "./ScoreBoard";
import Notice from "./Notice";

export default () => {
  return (
    <PlayerLayout>
      <Notice message="Notice message" />
      <div className="player_name">player</div>
      <BingoTable />
      <ScoreBoard />
    </PlayerLayout>
  );
};
