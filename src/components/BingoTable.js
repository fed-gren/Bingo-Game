import React from "react";
import "../styles/BingoTable.css";

export default ({nums, checked}) => {
  const blockClassNames = nums.map((num, index) => {
    if(checked[index]) return "bingo_block checekd";
    else return "bingo_block";
  });
  console.log(blockClassNames);
  return (
    <div className="bingo_container">
      {nums.map((data, index) => (
        <div className={blockClassNames[index]} key={index}>
          {data}
        </div>
      ))}
    </div>
  );
};
