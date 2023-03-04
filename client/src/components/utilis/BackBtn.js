import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackBtn.css";
function BackBtn(props) {
  const navigate = useNavigate();
  return (
    <div
      className="back_btn"
      onClick={() => {
        navigate(props.path, { replace: false });
      }}
    ></div>
  );
}

export default BackBtn;
