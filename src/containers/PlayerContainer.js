import React from "react";
import { connect } from "react-redux";
import Player from "../components/Player";
import { numsGenerator } from "../store/modules/player";

const PlayerContainer = props => {
  const handleNumGenerate = () => {
    props.numsGenerator();
  };

  const nums = props.nums;

  return <Player onGenerate={handleNumGenerate} nums={nums} />;
};

const mapStateToProps = ({ bingoTable }) => ({
  nums: bingoTable.nums,
});

const mapDispatchToProps = { numsGenerator };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);
