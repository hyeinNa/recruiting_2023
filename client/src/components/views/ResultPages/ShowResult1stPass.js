import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ShowResult1stPass.css";
function ShowResult() {
  //url에서 지원자 고유 id 알아내기
  const interviewWaitingTime = "";  //수정필요
  const pathName = window.location.pathname;
  const applicantId = pathName.substring(8, pathName.length);
  const [inputs, setInputs] = useState({
    name: "",
    team: "",
    pass: "",
  });
  const { name, team, pass } = inputs;
  //첫 렌더링 때, url에서 알아낸 지원자 id를 통해 지원자의 지원 팀과 통과 여부를 확인하기
  useEffect(() => {
    axios
      .post("/api/update/get", {
        id: applicantId,
      })
      .then((response) => {
        setInputs({
          name: response.data.name,
          team: response.data.team,
          pass: response.data.pass,
        });
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, [applicantId]);
  //변수 team과 pass에 저장된 값에 따라 다른 결과 페이지가 보이도록 하기.
  //팀 :  web,design,marketing
  //합격 여부 : 1stPass, finalPass, fail
  //지원기간이 아닌 경우는 다른 페이지에서 다룸

  return (
    <div className="register_showResult">
      <Header />
      <div className="register_showResult_container">
        <div className="register_showResult_inner_container">
          <div className="register_showResult_main_content_container">
            <div className="register_showResult_main_content">
              안녕하세요, {name}님.
              <br />
              이화이언 {cardinalNumber}기 수습 운영진 모집에 1차 합격하신 것을 진심으로 축하드립니다!
            </div>
            <div className="register_showResult_main_content_description">
              2차 면접은 하단에 기재된 일정에 따라 대면 면접으로 진행될 예정입니다.
            </div>
            <div className="register_showResult_main_content_survey_container">
              <div className="register_showResult_main_content_survey">
                심층면접 진행 전, 설문하러 가기 버튼을 통해 설문을 진행해 주세요.
              </div>
              <a href={surveyFormLink} className="register_ShowResult_main_content_survey_link">
                → 설문하러 가기
              </a>
            </div>

          </div>
          <div className="register_showResult_interview_container"></div>
          <div className="register_showResult_interview_date">
            면접일정 : {interviewPeriod}
            <br />
            면접장소 : {surveyFormLink}
          </div>
          <ul className="register_showResult_interview_content">
            <li>일찍 오신 분들은 {interviewWaitingPlace}({interviewWaitingTime}부터 이용 가능)에서 대기하실 수 있습니다</li>
            <li>면접의 경우, 불가피하게 배정된 면접 시간에서 10분 내외로 지연될 수 있습니다.</li>
            <li>추가적인 문의사항이 있으신 경우, 마스터 {masterName}({masterPhoneNumber})에게 연락 부탁드립니다.</li>
          </ul>
        </div>
        <div className="register_showResult_button_container">
          <button
            className="register_showResult_mainPage_button"
            onClick={handleClickButton}
          >
            메인으로 돌아가기
          </button>
        </div>
      </div >
    </div >
  );
}

export default ShowResult;