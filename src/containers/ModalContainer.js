import React from "react";
import { connect, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { show, close } from "../store/modules/modal";

const ModalContainer = props => {
  const { message } = props;
  const isShow = useSelector(state => state.modal.isShow);
  const invalidOrder = useSelector(state => state.player.invalidOrder);
  const gameOver = useSelector(state => state.player.gameOver);

  if(invalidOrder) props.show("아직 상대가 고르기 전입니다.");

  if(gameOver === 1) props.show("Player 1 승리!");
  else if(gameOver === 2) props.show("Player 2 승리!");
  else if(gameOver === 3) props.show( "비겼습니다.");
  return (isShow && <Modal message={message} />);
};

const mapStateToProps = ({ modal }) => ({
  message: modal.message
});

const mapDispatchToProps = { show, close };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
