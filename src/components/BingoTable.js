import React from "react";
import { useDispatch } from "react-redux";
import "../styles/BingoTable.css";

export default ({ nums, checked }) => {
  const blockClassNames = nums.map((num, index) => {
    if (checked[index]) return "bingo_block checked";
    else return "bingo_block";
  });

  const dispatch = useDispatch();

  const handleClick = e => {
    let selectedNum = Number(e.target.innerText);
    dispatch({ type: "player/CHECK_SELECTED_NUM", selectedNum: selectedNum});
    dispatch({ type: "player/TOGGLE" });
  };

  return (
    <div className="bingo_container">
      {nums.map((data, index) => (
        <div
          className={blockClassNames[index]}
          key={index}
          onClick={handleClick}
          data-key={index}
        >
          {data}
        </div>
      ))}
    </div>
  );
};
