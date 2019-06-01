import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/BingoTable.css";

export default ({ nums, checked, playerNumber }) => {
  const blockClassNames = nums.map((num, index) => {
    if (checked[index]) return "bingo_block checked";
    else return "bingo_block";
  });

  const dispatch = useDispatch();
  const now = useSelector(state => state.player.now);

  const handleClick = ({target}) => {
    if(target.className === "bingo_block checked" && (now === playerNumber)) return;
    let selectedNum = Number(target.innerText);
    dispatch({ type: "player/CHECK_SELECTED_NUM", selectedNum: selectedNum, playerNumber: playerNumber});
  };

  return (
    <div className="bingo_container">
      {nums.map((data, index) => (
        <div
          className={blockClassNames[index]}
          key={index}
          onClick={handleClick}
        >
          {data}
        </div>
      ))}
    </div>
  );
};
