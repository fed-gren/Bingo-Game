import React from "react";
import "../styles/BingoTable.css";

export default () => {
  const dummyData = [];
  for (let i = 0; i < 25; i += 1) {
    dummyData.push(i);
  }
  return (
    <div className="bingo_container">
      {dummyData.map((data, index) => (
        <div className="bingo_block" key={index}>
          {data}
        </div>
      ))}
    </div>
  );
};
