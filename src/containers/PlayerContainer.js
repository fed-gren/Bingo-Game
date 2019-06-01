import React from "react";
import { connect, useSelector } from "react-redux";
import Player from "../components/Player";
import { numsGenerator } from "../store/modules/player";

const PlayerContainer = ({
  playerNumber,
  player1Nums,
  player2Nums,
  nowPlayer,
  checked
}) => {
  const nums = playerNumber === 1 ? player1Nums : player2Nums;
  let message;

  if (nowPlayer === false) message = `빙고 한 게임 할까요?`;
  else if (nowPlayer === playerNumber) message = `숫자를 골라주세요.`;
  else message = `상대를 기다리는 중입니다.`;
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
