import React, { useState, useEffect } from "react";
import "./teamContent.css";
import "./webTechColor.css";
import "../../utilis/ani.css";
function WebDev() {
  const [isAni, setIsAni] = useState(false);
  return (
    <div className="team_content_container fadeIn">
      <div className="team_content1_wrap team_content_wrap">
        <div className="team_content_label">
          웹개발팀에서는 이런 경험들을 할 수 있어요!
        </div>
        <ul className="team_content">
          <li>React와 Node.js를 기반으로 한 행사 사이트를 개발합니다.</li>
          <li>
            사이트 기획부터 와이어프레임 제작과 개발까지, 사이트 개발의 전반적인
            과정을 모두 체험할 수 있습니다.
          </li>
          <li>개발한 사이트를 실제 유저들이 이용하는 경험을 할 수 있습니다.</li>
          <li>
            Git과 Github를 이용한 협업, 다른 팀과의 협업을 경험할 수 있습니다.
          </li>
          <li>프론트엔드와 백엔드를 모두 체험해 볼 수 있습니다.</li>
        </ul>
      </div>
      <div className="team_content_wrap">
        <div className="team_content_label">
          웹개발팀에서는 이런 활동들도 하고 있어요!
        </div>
        <ul className="team_content">
          <li>주 1회의 모각코 시간을 통해 함께 코딩하는 시간을 갖습니다.</li>
          <li>더 공부하고 싶은 부분에 대한 스터디를 진행하고 있습니다.</li>
          <li>한달에 1회 팀 회식을 진행하여 친목을 도모하고 있습니다.</li>
        </ul>
      </div>
      <div className="team_content_wrap">
        <div className="team_content_label">
          웹개발팀 수습 운영진은 어떤 일을 하나요?
        </div>
        <ul className="team_content">
          <li>
            수습 운영진은 수습 기간 동안, 매주 주어지는 수습 과제를 통해 웹
            개발에 필요한 지식을 습득합니다.
          </li>
          <li>습득한 지식으로 간단한 토이 프로젝트를 진행해 봅니다.</li>
          <li>
            수습 기간이 끝난 후, 정운영진으로서 본격적인 행사 사이트 개발에
            참여하게 됩니다.
          </li>
        </ul>
      </div>
      <div className="team_content_wrap">
        <div className="team_content_label">이런 사람을 원해요!</div>
        <ul className="team_content">
          <li>
            웹 개발 지식이 부족하더라도, 배우려는 열정이 넘치는 사람을 원해요!
          </li>
          <li>업무에 책임감을 갖고, 업무 기한을 지킬 수 있는 사람을 원해요!</li>
        </ul>
      </div>
      <div className="team_content_wrap">
        <div className="team_content_label">
          웹개발팀에서는 이런 기술들을 사용해요!
        </div>
        <div className="web_tech_container">
          <div className="web_tech_items" id="html">
            HTML
          </div>
          <div className="web_tech_items" id="css">
            CSS
          </div>
          <div className="web_tech_items" id="javascript">
            JavaScript
          </div>
          <div className="web_tech_items" id="react">
            React
          </div>
          <div className="web_tech_items" id="nodejs">
            Node.js
          </div>
          <div className="web_tech_items" id="aws">
            AWS
          </div>
          <div className="web_tech_items" id="mongodb">
            mongo DB
          </div>
          <div className="web_tech_items" id="git">
            Git
          </div>
        </div>
      </div>
      <div className="goSubActivity">
        <img src="/img/teamInfo/goSubActivityWeb.png" alt="goSubActivity" />
      </div>
    </div>
  );
}

export default WebDev;
