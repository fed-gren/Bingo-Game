import React from "react";
import { useDispatch } from "react-redux";
import "../styles/Modal.css";

export default ({ message }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({ type: "player/CLOSE_MODAL" });
    dispatch({ type: "modal/CLOSE" });
  };
  return (
    <div className="modal_background" onClick={handleClose}>
      <div className="modal">
        <p className="modal_message">{message}</p>
        <button className="btn_ok" onClick={handleClose}>확인</button>
      </div>
    </div>
  );
};
