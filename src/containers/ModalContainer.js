import React from "react";
import { connect, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { show, close } from "../store/modules/modal";

const ModalContainer = props => {
  const { message } = props;
  const isShow = useSelector(state => state.modal.isShow);
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
