import React from "react";
import BackBtn from "../../../utilis/BackBtn";
import "./MarketingStudyProject.css";
function MarketingStudyProject() {
  return (
    <div className="marketing_study_project_container">
      <BackBtn path="/teaminfo/detail/marketing" />
      <div className="marketing_study_project_inner_container">
        <div className="marketing_study_project_content_container fadeInUp">
          <div className="marketing_study_project_title">
            '마케팅 스터디 프로젝트'
          </div>
          <div className="marketing_study_project_description">
            이화이언 마케팅팀은 이론부터 실제 협업까지, 다양한 프로젝트를 실행
            및 구상 중에 있습니다.
            <br />
            커리큘럼 구상은 팀원 개개인의 니즈를 최우선적으로 고려하여, 매
            학기마다 디벨롭해나갈 예정입니다.
            <br />
            이화이언 마케팅팀으로서 양질의 마케팅 역량을 함께 키워봐요!
          </div>
          <div className="marketing_study_project_plan_wrapper">
            <div className="marketing_study_project_plans">
              <div className="marketing_study_project_plan_inner_container">
                <div className="marketing_study_project_plan_title">
                  개인 노션 포트폴리오 제작
                </div>
                <ul className="marketing_study_project_plan_description">
                  <li className="plan_description1">
                    다양한 기업들의 대표 협업 툴인 ‘노션'의 운영 및 사용 체제에
                    익숙해지기 위한 목적에서부터 출발한 프로젝트입니다.
                    마케터에게 협업 속 개인의 역량 도출 및 기록은 생명!
                  </li>
                  <li>
                    ‘노션’을 활용하여 자기 자신의 커리어와 아이덴티티를 가장 잘
                    나타낼 수 있는 단 하나뿐인 마케팅 포트폴리오를 만들고, 상호
                    피드백을 거쳐 최고의 작업물을 도출해내는 제작
                    프로젝트입니다.
                  </li>
                </ul>
              </div>
            </div>
            <div className="marketing_study_project_plans">
              <div className="marketing_study_project_plan_inner_container">
                <div className="marketing_study_project_plan_title">
                  자체 마케팅 프로젝트 진행
                </div>
                <ul className="marketing_study_project_plan_description">
                  <li className="plan_description1">
                    실제 협찬을 성사한 기업과 함께 자체적인 마케팅 프로젝트를
                    진행하는 커리큘럼으로, 현재 구상 및 기획 중에 있습니다.
                  </li>
                  <li>
                    기업과의 협업, 보다 직접적인 실무 관여를 통해 마케터로서 한
                    발짝 가까이 다가갈 수 있는 기회를 마련하고자 합니다.
                  </li>
                </ul>
              </div>
            </div>
            <div className="marketing_study_project_plans">
              <div className="marketing_study_project_plan_inner_container">
                <div className="marketing_study_project_plan_title">
                  마케팅 공모전 참여
                </div>
                <ul className="marketing_study_project_plan_description">
                  <li className="plan_description1">
                    마케팅 실무로 나아가는 데 있어 공모전 참여 및 수상은
                    무엇보다 중요한 핵심 커리어입니다. 팀원들과 함께
                    광고/아이디어/마케팅/PR 등 다양한 공모전에 참여합니다.
                  </li>
                  <li>
                    공모전 선정부터 과제 분석, 실제 참여 및 협업 과정을 통해
                    개개인의 협업 능력 및 인사이트 도출 능력을 강화하고 실질적인
                    마케팅 커리어를 한 단계씩 쌓아가고자 하는 프로젝트입니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingStudyProject;
