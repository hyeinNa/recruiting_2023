import React from "react";
import "./PopupBackground.css";
import "./PopupBackgroundWeb.css";
function PopupBackgroundWeb(props) {
  return (
    <div className="popup_container_web zoomIn" id="popup">
      <div className="popup_inner_container">
        <div className="popup_content_wrapper">
          <div className="popup_content_title">{props.title}</div>
          <div className="popup_category_web">
            <div className="popup_category_img_wrapper">
              <img
                src="/img/teamInfo/detailActivities/popup/category.png"
                alt="category"
              />
            </div>

            <div className="popup_description_web">{props.description}</div>
          </div>

          <div className="popup_category popup_projectImg_label_wrapper">
            <div className="popup_projectImg_label_text_wrapper">
              <div className="popup_category_img_wrapper">
                <img
                  src="/img/teamInfo/detailActivities/popup/category.png"
                  alt="category"
                />
              </div>

              <div className="popup_category_label">프로젝트 이미지</div>
            </div>
            <div
              className="popup_projectImg_label_github_wrapper"
              onClick={() => {
                window.open(props.gitHubLink);
              }}
            >
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
            <img src={props.imgSrc2} alt="img2" />
            <img src={props.imgSrc3} alt="img3" />
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
