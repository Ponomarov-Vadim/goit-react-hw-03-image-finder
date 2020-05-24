import React from "react";
import styled from "./modal.module.css";

const Modal = ({ url, onCloseModal }) => (
  <div className={styled.Overlay} onClick={onCloseModal}>
    <div className={styled.Modal}>
      <img src={url} alt="" />
    </div>
  </div>
);

export default Modal;
