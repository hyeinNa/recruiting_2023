import React from "react";
import ImageTemplate from "./ImageTemplate";
import "./PopupBackground.css";
function PopupBackground(props) {
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
            <ImageTemplate
              direction={props.direction}
              imgNum={props.imgNum}
              imgSrc1={props.imgSrc1}
              imgSrc2={props.imgSrc2}
            />
          </div>
        </div>
      </div>
      <div className="popup_exitBtn_wrapper" onClick={props.closePopUp}>
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
