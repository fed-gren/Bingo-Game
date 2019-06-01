import React from "react";

export default ({ text, onStart }) => {
  return (
    <button className="starter" onClick={onStart}>
      {text}
    </button>
  );
};
