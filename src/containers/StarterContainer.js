import React from "react";
import { connect, useDispatch } from "react-redux";
import Starter from "../components/Starter";
import { start } from "../store/modules/starter";

const StarterContainer = props => {
  const dispatch = useDispatch();
  const handleStart = () => {
    props.start();
    dispatch({ type: 'player/NUMS_GENERATOR' });
    dispatch({ type: "player/TOGGLE" });
  };

  const { text } = props;

  return <Starter text={text} onStart={handleStart} />;
};

const mapStateToProps = ({ starter }) => ({
  text: starter.text
});

const mapDispatchToProps = { start };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarterContainer);
