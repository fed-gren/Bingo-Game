import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Modal from "../components/Modal";
import { show, close } from "../store/modules/modal";

const ModalContainer = props => {
  const dispatch = useDispatch();
  const { message } = props;
  const isShow = useSelector(state => state.modal.isShow);
  const invalidOrder = useSelector(state => state.player.invalidOrder);
  if(invalidOrder) dispatch({type: "modal/SHOW", message: "아직 상대가 고르기 전입니다."});
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
