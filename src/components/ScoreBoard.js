import React from "react";
import { useSelector } from "react-redux";
import "../styles/ScoreBoard.css";

export default ({playerNumber}) => {
  let rowBingoList, colBingoList, crossBingoList, totalScore;
  if(playerNumber === 1) {
    rowBingoList = useSelector(state => state.player.player1RowBingoList);
    colBingoList = useSelector(state => state.player.player1ColBingoList);
    crossBingoList = useSelector(state => state.player.player1CrossBingoList);
    totalScore = useSelector(state => state.player.player1TotalScore);
  } else if(playerNumber === 2) {
    rowBingoList = useSelector(state => state.player.player2RowBingoList);
    colBingoList = useSelector(state => state.player.player2ColBingoList);
    crossBingoList = useSelector(state => state.player.player2CrossBingoList);
    totalScore = useSelector(state => state.player.player2TotalScore);
  }

  return (
    <div className="score_board">
      <p>빙고 완성 목록</p>
      <div className="bingo_list">
        <div className="row_list">
          <p className="">가로</p>
          {rowBingoList && rowBingoList.map((bingoNum, index) => (
            <div className="row_bingo" key={index}>{bingoNum}</div>
          ))}
        </div>
        <div className="col_list">
          <p className="">세로</p>
          {colBingoList && colBingoList.map((bingoNum, index) => (
            <div className="col_bingo" key={index}>{bingoNum}</div>
          ))}
        </div>
        <div className="cross_list">
          <p className="">대각선</p>
          {crossBingoList && crossBingoList.map((bingoNum, index) => (
            <div className="cross_bingo" key={index}>{bingoNum}</div>
          ))}
        </div>
      </div>
      <div className="total_score">빙고 완성 갯수 : {totalScore}</div>
    </div>
  );
};
