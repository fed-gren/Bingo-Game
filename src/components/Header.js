import React from "react";
import "../styles/Header.css";

export default ({ title }) => {
  return (
    <header>
      <h1 className="title">{title}</h1>
      <button className="starter">start</button>
    </header>
  );
};
