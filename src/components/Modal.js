import React from "react";
import "../styles/Modal.css";

export default ({ type, message }) => {
  return (
    <div className="modal_background">
      <div className="modal">
        <p className="modal_message">{message}</p>
        <button className="btn_ok">확인</button>
      </div>
    </div>
  );
};
