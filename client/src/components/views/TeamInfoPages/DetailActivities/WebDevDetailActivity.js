import React from "react";
import { useState } from "react";
import BackBtn from "../../../utilis/BackBtn";
import "./WebDevDetailActivity.css";
import WebProjectTemplate from "./webProject/WebProjectTemplate";
import projectImg from "./webProject/webProjectImg.json";
function WebDevDetailActivity() {
  const [year, setYear] = useState(2022);
  const [isClicked, setIsClicked] = useState([false, false, true]);
  const clickYearBtn = (year) => {
    setYear(year);
    if (year === 2022) setIsClicked([false, false, true]);
    else if (year === 2021) setIsClicked([false, true, false]);
    else if (year === 2020) setIsClicked([true, false, false]);
  };
  return (
    <div className="web_detail_activity_container">
      <BackBtn path="/" />
      <div className="web_detail_actvity_inner_container">
        <div className="web_detail_activity_content_container">
          <div className="part1_container">
            <div className="web_detail_activity_title part1_title">
              웹개발팀 활동 내용
            </div>
            <div className="web_detail_activity_description part1_description">
              이화이언 웹개발팀은 이화이언 행사 사이트 개발 및 이화이언의
              전반적인 기술 업무를 담당하고 있습니다.
              <br /> 이화이언 웹개발팀에서는 프론트 엔드와 백 엔드 업무를 모두
              경험해보며, 어떤 분야가 자신의 적성에 맞는지 찾아갈 수 있습니다.
            </div>
            <div className="part1_webProject_container">
              <div className="webProject_year_btns_container">
                <button
                  className={`webProject_year_btn ${
                    isClicked[2] ? "clicked" : "unclicked"
                  }`}
                  onClick={() => {
                    clickYearBtn(2022);
                  }}
                >
                  2022
                </button>
                <button
                  className={`webProject_year_btn ${
                    isClicked[1] ? "clicked" : "unclicked"
                  }`}
                  onClick={() => {
                    clickYearBtn(2021);
                  }}
                >
                  2021
                </button>
                <button
                  className={`webProject_year_btn ${
                    isClicked[0] ? "clicked" : "unclicked"
                  }`}
                  onClick={() => {
                    clickYearBtn(2020);
                  }}
                >
                  2020
                </button>
              </div>
              <div className="part1_projects_content_wrapper">
                {projectImg[year].map((data) => {
                  return <WebProjectTemplate name={data.name} src={data.src} />;
                })}
              </div>
            </div>
          </div>
          <div className="part2_container">
            <div className="web_deatil_activity_subTitle">
              와이어프레임 제작부터 개발, 배포까지
            </div>
            <div className="web_detail_activity_title">
              실제 유저들이 이용하는 행사 사이트 제작
            </div>
            <div className="part2_img_container">
              <div className="part2_wireframe_wrapper">
                <img
                  src="/img/teamInfo/detailActivities/web/wireframe.png"
                  alt="wireframe"
                />
              </div>
              <div className="part2_eventpage_wrapper">
                <img
                  src="/img/teamInfo/detailActivities/web/eventpage.png"
                  alt="eventpage"
                />
              </div>
            </div>
            <div className="part2_process_container">
              <div className="process_step_wrapper">
                <div className="process_label">마케팅팀</div>
                <div className="process_step">기획안 전달</div>
              </div>
              <div className="process_arrow">
                <img
                  src="/img/teamInfo/detailActivities/web/arrow.png"
                  alt="arrow"
                />
              </div>
              <div className="process_step">Figma를 통한 와이어프레임 제작</div>
              <div className="process_arrow">
                <img
                  src="/img/teamInfo/detailActivities/web/arrow.png"
                  alt="arrow"
                />
              </div>
              <div className="process_step_wrapper">
                <div className="process_label">디자인팀</div>
                <div className="process_step">디자인 전달</div>
              </div>
              <div className="process_arrow">
                <img
                  src="/img/teamInfo/detailActivities/web/arrow.png"
                  alt="arrow"
                />
              </div>
              <div className="process_step">개발</div>
              <div className="process_arrow">
                <img
                  src="/img/teamInfo/detailActivities/web/arrow.png"
                  alt="arrow"
                />
              </div>
              <div className="process_step">피드백 및 수정</div>
              <div className="process_arrow">
                <img
                  src="/img/teamInfo/detailActivities/web/arrow.png"
                  alt="arrow"
                />
              </div>
              <div className="process_step">배포</div>
              <div className="process_arrow">
                <img
                  src="/img/teamInfo/detailActivities/web/arrow.png"
                  alt="arrow"
                />
              </div>
              <div className="process_step">이용자 분석</div>
            </div>
            <div className="web_detail_activity_description part2_description">
              이화이언 웹개발팀에서는 마케팅팀과 디자인팀과의 협업을 바탕으로
              <br />
              와이어프레임 제작부터 개발, 배포까지 웹 개발의 전반적인 과정을
              체험해 볼 수 있습니다.
              <br />
              배포에 그치지 않고, 실제 이화이언 유저들이 개발한 행사 사이트를
              이용하는 소중한 경험까지 얻을 수 있습니다.
            </div>
            <div className="part2_statistic_container">
              <div className="part2_statistic_img_wrapper">
                <img
                  src="/img/teamInfo/detailActivities/web/user_statistic.png"
                  alt="statistic"
                  className="statistic_img"
                />
              </div>

              <div className="part2_statistic_description">
                총 이용자 수 : 약 <div className="pink">1200</div>명<br />
                전체 이벤트 수 : 약 <div className="pink"> 6.1</div>만 회<br />
                <div className="statistic_annotation">
                  * 2022 배꽃정원 행사 사이트 기준
                </div>
              </div>
            </div>
          </div>
          <div className="part3_container">
            <div className="web_detail_activity_title part3_title">
              웹 스터디와 모각코를 통한 개발 실력 향상
            </div>
            <div className="web_detail_activity_description">
              이화이언에서 지원해주는 강의와 도서를 통해, 운영진끼리 자체적으로
              웹 스터디를 진행할 수 있습니다.
              <br />
              매주 1회 방학 중에는 디스코드를 통해, 학기 중에는 대면으로 모여,
              각자 코딩하는 시간(줄여서 모.각.코)을 갖습니다.
              <br />
              코드에 대해 서로 의견을 나누며, 개인의 개발 실력 향상을
              도모합니다.
            </div>
          </div>
          <div className="part3_img_container">
            <div className="part3_study_img_wrapper">
              <div className="part3_study1 part3_study">
                <img
                  src="/img/teamInfo/detailActivities/web/study1.png"
                  alt="study1"
                />
              </div>
              <div className="part3_study2 part3_study">
                <img
                  src="/img/teamInfo/detailActivities/web/study2.png"
                  alt="study2"
                />
              </div>
              <div className="part3_study3 part3_study">
                <img
                  src="/img/teamInfo/detailActivities/web/study3.png"
                  alt="study3"
                />
              </div>
            </div>
            <div className="part3_discord_img_wrapper">
              <img
                src="/img/teamInfo/detailActivities/web/discord.png"
                alt="discord"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDevDetailActivity;
