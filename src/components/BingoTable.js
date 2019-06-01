import React from "react";
import "../styles/BingoTable.css";

export default ({nums}) => {
  return (
    <div className="bingo_container">
      {nums.map((data, index) => (
        <div className="bingo_block" key={index}>
          {data}
        </div>
      ))}
    </div>
  );
};
