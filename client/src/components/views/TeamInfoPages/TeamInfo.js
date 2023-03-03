import React from "react";
import { useState } from "react";
import "./TeamInfo.css";
import Marketing from "./InfoContent/Marketing";
import Design from "./InfoContent/Design";
import WebDev from "./InfoContent/WebDev";
function TeamInfo() {
  const [teamContent, setTeamContent] = useState("marketing");
  const [isClicked, setIsClicked] = useState([true, false, false]);
  const selectComponent = {
    marketing: <Marketing />,
    design: <Design />,
    webdev: <WebDev />,
  };
  const handleClickButton = (e) => {
    const { name } = e.target;
    setTeamContent(name);
    console.log(e.target.name);
    if (e.target.name === "marketing") setIsClicked([true, false, false]);
    else if (e.target.name === "design") setIsClicked([false, true, false]);
    else setIsClicked([false, false, true]);
  };
  return (
    <div className="teamInfo_container">
      <div className="teamInfo_inner_container">
        <div className="teamInfo_content_container">
          <div className="teamInfo_title">팀 소개</div>
          <div className="teamInfo_title_description">
            이화이언은 재학생들이 직접 운영하고 있는 '이화를 사랑하는 사람들을
            위한' 비영리 집단입니다.
            <br />
            이화이언을 이용하는 이화인들을 위한 다양한 프로그램을 운영하기 위해
            활동하는 운영진은
            <br />
            마케팅팀, 디자인팀, 웹개발팀으로 구성되어 있습니다.
          </div>
          <div className="teamInfo_button_container">
            <button
              className={`teamInfo_marketing_btn teamInfo_btn ${isClicked[0] ? "clicked" : "unclicked"
                }`}
              onClick={handleClickButton}
              name="marketing"
            >
              마케팅팀
            </button>
            <button
              className={`teamInfo_design_btn teamInfo_btn ${isClicked[1] ? "clicked" : "unclicked"
                }`}
              onClick={handleClickButton}
              name="design"
            >
              디자인팀
            </button>
            <button
              className={`teamInfo_webdev_btn teamInfo_btn ${isClicked[2] ? "clicked" : "unclicked"
                }`}
              onClick={handleClickButton}
              name="webdev"
            >
              웹개발팀
            </button>
          </div>
          <div className="teamInfo_team_content_container">
            {selectComponent[teamContent]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamInfo;
