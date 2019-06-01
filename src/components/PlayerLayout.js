import React from "react";
import "../styles/PlayerLayout.css";

export default ({ children }) => {
  return (
    <div className="player_layout">
      <div className="notice">blah blah</div>
      {children}
    </div>
  );
};
