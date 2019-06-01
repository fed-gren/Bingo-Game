import React from "react";
import "../styles/Header.css";
import StarterContainer from "../containers/StarterContainer";

export default ({ title }) => {
  return (
    <header>
      <h1 className="title">{title}</h1>
      <StarterContainer />
    </header>
  );
};
