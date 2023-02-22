import React from "react";
import "./teamContent.css";
function Design() {
  return (
    <div className="team_content_container">
      <div className="team_content1_wrap team_content_wrap">
        <div className="team_content_label">
          디자인팀에서는 어떤 활동을 하나요?
        </div>
        <ul className="team_content">
          <li>디자인팀은 이화이언 내의 전반적인 디자인을 책임지고 있습니다.</li>
          <li>
            디자인팀의 활동은 크게 온라인 활동과 오프라인 활동으로 나뉩니다.
            온라인 활동으로는 이화이언의 배너, 팝업, SNS 이미지 , 브로슈어를
            제작합니다. 오프라인 활동으로는 오프라인 행사를 위한 공간 디자인,
            각종 행사 컨셉에 맞춘 굿즈 제작, 그리고 운영진을 위한 굿즈 제작 등을
            담당하고 있습니다.
          </li>
        </ul>
      </div>
      <div className="team_content_wrap">
        <div className="team_content_label">
          디자인팀에서는 이런 경험들을 할 수 있어요!
        </div>
        <ul className="team_content">
          <li>
            디자인팀 내 선후배 간의 끈끈한 교류가 이루어지며, 서로 작업물에 대해
            피드백을 나누며 발전해나갈 수 있습니다.
          </li>
          <li>
            마케팅팀, 웹개발팀과의 협업 경험을 쌓아 실무를 경험할 수 있습니다.
          </li>
          <li>
            다양한 온오프라인 게시물과 굿즈를 직접 제안하고 디자인함으로써
            완성도 높은 포트폴리오를 쌓을 수 있습니다.
          </li>
        </ul>
      </div>
      <div className="team_content_wrap">
        <div className="team_content_label">이런 사람을 원해요!</div>
        <ul className="team_content">
          <li>
            주도적으로 컨셉을 제시하고 이를 시각적으로 완성도 있게 구현할 수
            있는 사람을 원해요!
          </li>
          <li>
            디자인에 대한 열정을 바탕으로 책임감 있게 업무를 수행할 수 있는
            사람을 원해요!
          </li>
          <li>
            평소 이화이언에서 진행하는 행사에 관심을 가지고 눈여겨보았던 사람을
            원해요!
          </li>
        </ul>
      </div>
      <div className="goSubActivity">
        <img src="/img/teamInfo/goSubActivityDesign.png" alt="goSubActivity" />
      </div>
    </div>
  );
}

export default Design;
