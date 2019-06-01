import React from "react";
import { connect } from "react-redux";
import ScoreBoard from "../components/ScoreBoard";

const ScoreBoardContainer = props => {
  let rowBingoList, colBingoList, crossBingoList, totalScore;
  if (props.playerNumber === 1) {
    rowBingoList = props.player1RowBingoList;
    colBingoList = props.player1ColBingoList;
    crossBingoList = props.player1CrossBingoList;
    totalScore = props.player1TotalScore;
  } else if (props.playerNumber === 2) {
    rowBingoList = props.player2RowBingoList;
    colBingoList = props.player2ColBingoList;
    crossBingoList = props.player2CrossBingoList;
    totalScore = props.player2TotalScore;
  }

  return (
    <ScoreBoard
      playerNumber={props.playerNumber}
      rowBingoList={rowBingoList}
      colBingoList={colBingoList}
      crossBingoList={crossBingoList}
      totalScore={totalScore}
    />
  );
};

const mapStateToProps = ({ player }) => ({
  player1RowBingoList: player.player1RowBingoList,
  player1ColBingoList: player.player1ColBingoList,
  player1CrossBingoList: player.player1CrossBingoList,
  player1TotalScore: player.player1TotalScore,
  player2RowBingoList: player.player2RowBingoList,
  player2ColBingoList: player.player2ColBingoList,
  player2CrossBingoList: player.player2CrossBingoList,
  player2TotalScore: player.player2TotalScore,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreBoardContainer);
