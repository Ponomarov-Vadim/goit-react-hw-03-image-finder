import React from "react";

import styled from "./button.module.css";

const Button = ({ handleClick }) => (
  <div className={styled.ButtonWrapper}>
    <button className={styled.Button} onClick={handleClick}>
      Load more
    </button>
  </div>
);

export default Button;
