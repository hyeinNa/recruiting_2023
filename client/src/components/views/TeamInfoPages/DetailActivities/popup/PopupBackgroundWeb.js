import React from "react";
import "./PopupBackground.css";
import "./PopupBackgroundWeb.css";
function PopupBackgroundWeb(props) {
  return (
    <div className="popup_container" id="popup">
      <div className="popup_inner_container">
        <div className="popup_content_wrapper">
          <div className="popup_content_title">{props.title}2022배꽃정원</div>
          <div className="popup_category_web">
            <img
              src="/img/teamInfo/detailActivities/popup/category.png"
              alt="category"
            />
            <div className="popup_description_web">
              {props.description}11월 24일부터 12월 1일까지 ‘이화이언 테마마크'
              컨셉으로 진행 된 2022 배꽃정원 온라인 행사 사이트입니다.
            </div>
          </div>

          <div className="popup_category popup_projectImg_label_wrapper">
            <div className="popup_projectImg_label_text_wrapper">
              <img
                src="/img/teamInfo/detailActivities/popup/category.png"
                alt="category"
              />
              <div className="popup_category_label">프로젝트 이미지</div>
            </div>
            <div className="popup_projectImg_label_github_wrapper">
              <div className="github_label">GitHub</div>
              <div className="github_logo">
                <img
                  src="/img/teamInfo/detailActivities/web/project/popup/github-mark.png"
                  alt="goGithub"
                />
              </div>
            </div>
          </div>
          <div className="popup_img_container_webProject">
            <img src={props.imgSrc1} alt="img1" />
            <img src={props.imgSrc1} alt="img1" />
            <img src={props.imgSrc1} alt="img1" />
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

export default PopupBackgroundWeb;
