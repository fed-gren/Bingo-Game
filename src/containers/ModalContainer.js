import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Modal from "../components/Modal";
import { show, close } from "../store/modules/modal";

const ModalContainer = props => {
  const dispatch = useDispatch();
  const { message } = props;
  const isShow = useSelector(state => state.modal.isShow);
  const invalidOrder = useSelector(state => state.player.invalidOrder);
  const gameOver = useSelector(state => state.player.gameOver);

  if(invalidOrder) dispatch({type: "modal/SHOW", message: "아직 상대가 고르기 전입니다."});

  if(gameOver === 1) dispatch({type: "modal/SHOW", message: "Player 1 승리!"});
  else if(gameOver === 2) dispatch({type: "modal/SHOW", message: "Player 2 승리!"});
  else if(gameOver === 3) dispatch({type: "modal/SHOW", message: "비겼습니다."});
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
