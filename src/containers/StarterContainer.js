import React from "react";
import { connect } from "react-redux";
import Starter from "../components/Starter";
import { start } from "../store/modules/starter";
import { startGame } from "../store/modules/player";

const StarterContainer = props => {
  const handleStart = () => {
    props.start();
    props.startGame();
  };

  const { text } = props;

  return <Starter text={text} onStart={handleStart} />;
};

const mapStateToProps = ({ starter }) => ({
  text: starter.text
});

const mapDispatchToProps = { start, startGame };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarterContainer);
