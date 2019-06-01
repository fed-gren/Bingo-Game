import React from "react";
import PlayerLayout from "./PlayerLayout";
import BingoTable from "./BingoTable";

export default () => {
  return (
    <PlayerLayout>
      <div className="player_name">player</div>
      <BingoTable />
    </PlayerLayout>
  );
};
