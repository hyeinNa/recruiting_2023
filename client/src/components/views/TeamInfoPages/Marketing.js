import React from "react";
import "./teamContent.css";
function Marketing() {
  return (
    <div className="team_content_container">
      <div className="team_content1_wrap team_content_wrap">
        <div className="team_content_label">
          마케팅팀에서는 이런 활동을 하고 있어요!
        </div>
        <ul className="team_content">
          <li>
            매년 정기적으로 개최되는 이화이언의 대표 행사 '오월드림'과
            '배꽃정원'의 전반적인 내용을 기획하고 총괄합니다.
          </li>
          <li>
            매주 이화이언 공식 인스타그램에 업로드될 콘텐츠를 논의하고 제작하며
            세부적인 마케팅 실무에 대해 공부합니다.
          </li>
          <li>
            기업, 외부인과의 컨택 및 총괄을 담당하며 인사 및 대외협력 실무에
            관해서도 접해볼 수 있어요!
          </li>
        </ul>
      </div>
      <div className="team_content_wrap">
        <div className="team_content_label">
          마케팅팀에서는 이런 경험들을 할 수 있어요!
        </div>
        <ul className="team_content">
          <li>
            기획부터 기업과의 컨택까지, 마케팅 실무의 모든 것을 체험할 수
            있습니다.
          </li>
          <li>
            SNS 콘텐츠를 기획하고, 실제 제작하여 업로드하는 과정까지 콘텐츠
            마케터 실무의 전반을 체험할 수 있어요.
          </li>
        </ul>
      </div>
      <div className="team_content_wrap">
        <div className="team_content_label">이런 사람을 원해요!</div>
        <ul className="team_content">
          <li>
            이화이언에 대한 열정과 애정을 기반으로 다채로운 행사를 기획할 수
            있는 사람을 원해요!
          </li>
          <li>
            마케팅 지식이 많이 없더라도, 본인의 아이디어를 실제 행사나 전략으로
            반영하고자 노력하는 사람을 원해요!
          </li>
        </ul>
      </div>
      <div className="goSubActivity">
        <img
          src="/img/teamInfo/goSubActivityMarketing.png"
          alt="goSubActivity"
        />
      </div>
    </div>
  );
}

export default Marketing;
