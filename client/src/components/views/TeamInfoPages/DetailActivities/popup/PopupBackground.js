import React, { useEffect, useState } from "react";
import "./PopupBackground.css";
function PopupBackground(props) {
  const [isExit, setIsExit] = useState(false);
  const clickXbtn = () => {
    setIsExit(true);
  };
  useEffect(() => {
    document.getElementById("popup").style.visibility = "visible";
  }, []);
  const close = () => {
    document.getElementById("popup").style.visibility = "hidden";
  };
  return (
    <div className="popup_container" id="popup">
      <div className="popup_inner_container">
        <div className="popup_content_wrapper">
          <div className="popup_content_title">{props.title}</div>
          <div className="popup_category">
            <img
              src="/img/teamInfo/detailActivities/popup/category.png"
              alt="category"
            />
            <div className="popup_category_label">{props.label}</div>
          </div>
          <div className="popup_description">{props.description}</div>
          <div className="popup_category">
            <img
              src="/img/teamInfo/detailActivities/popup/category.png"
              alt="category"
            />
            <div className="popup_category_label">관련이미지</div>
          </div>
          <div className="popup_img_container">
            <img />
          </div>
        </div>
      </div>
      <div className="popup_exitBtn_wrapper" onClick={close}>
        <div className="popup_exitBtn_x">
          <img
            className="popup_xBtn"
            src="/img/teamInfo/detailActivities/popup/xBtn.png"
            alt="exit"
          />
        </div>
      </div>
    </div>
  );
}

export default PopupBackground;
