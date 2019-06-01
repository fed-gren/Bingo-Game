import React from "react";
import { connect } from "react-redux";
import Starter from "../components/Starter";
import { start } from "../store/modules/starter";

const StarterContainer = props => {
  const handleStart = () => {
    props.start();
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
