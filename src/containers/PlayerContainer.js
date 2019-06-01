import React from "react";
import { connect, useSelector } from "react-redux";
import Player from "../components/Player";
import { numsGenerator } from "../store/modules/player";

const PlayerContainer = ({
  playerNumber,
  player1Nums,
  player2Nums,
  checked,
  message
}) => {
  const nums = playerNumber === 1 ? player1Nums : player2Nums;

  return (
    <Player
      nums={nums}
      message={message}
      playerNumber={playerNumber}
      checked={checked}
    />
  );
};

const mapStateToProps = ({ player }) => ({
  player1Nums: player.player1Nums,
  player2Nums: player.player2Nums
});

const mapDispatchToProps = { numsGenerator };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);
