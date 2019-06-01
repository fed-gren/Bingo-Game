import React from "react";
import { connect } from "react-redux";
import Player from "../components/Player";
import { numsGenerator } from "../store/modules/player";

const PlayerContainer = props => {
  const handleNumGenerate = () => {
    props.numsGenerator();
  };

  const nums = (props.playerNumber === 1) ? props.player1Nums : props.player2Nums;
  return <Player onGenerate={handleNumGenerate} nums={nums} />;
};

const mapStateToProps = ({ player }) => ({
  player1Nums: player.player1Nums,
  player2Nums: player.player2Nums,
});

const mapDispatchToProps = { numsGenerator };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);
