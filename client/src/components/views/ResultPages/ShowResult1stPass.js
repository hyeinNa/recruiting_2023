import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import "./ShowResult.css";

function ShowResult1stPass(props) {
  //변수 team과 pass에 저장된 값에 따라 다른 결과 페이지가 보이도록 하기.
  //팀 :  web,design,marketing
  //합격 여부 : 1stPass, finalPass, fail
  //지원기간이 아닌 경우는 다른 페이지에서 다룸

  const [cardinalNumber, setCardinalNumber] = useState("");
  const [surveyFormLink, setSurveyFormLink] = useState("");
  const [interviewPeriod, setInterviewPeriod] = useState("");
  const [faceTofaceInterviewPlace, setfaceTofaceInterviewPlace] = useState("");
  const [interviewWaitingPlace, setInterviewWaitingPlace] = useState("");
  const [masterName, setMasterName] = useState("");
  const [masterPhoneNumber, setMasterPhoneNumber] = useState("");
  const [isOnlineInterview, setIsOnlineInterview] = useState("");
  const [isDesignPreAssignment, setIsDesignPreAssignment] = useState("");
  // const [designPreAssignment, setDesignPreAssignment] = useState("");


  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          setCardinalNumber("");
          setSurveyFormLink("");
          setInterviewPeriod("");
          setfaceTofaceInterviewPlace("");
          setInterviewWaitingPlace("");
          setMasterName("");
          setMasterPhoneNumber("");
          setIsOnlineInterview("");
          setIsDesignPreAssignment("");
          //setDesignPreAssignment("");

        } else {
          setCardinalNumber(response.data.cardinalNumber);
          setSurveyFormLink(response.data.surveyFormLink);
          setInterviewPeriod(response.data.interviewPeriod);
          setfaceTofaceInterviewPlace(response.data.faceTofaceInterviewPlace);
          setInterviewWaitingPlace(response.data.interviewWaitingPlace);
          setMasterName(response.data.masterName);
          setMasterPhoneNumber(response.data.masterPhoneNumber);
          setIsOnlineInterview(response.data.master.isOnlineInterview);
          setIsDesignPreAssignment(response.data.master.isDesignPreAssignment);
          //setDesignPreAssignment(response.data.master.designPreAssignment);
        }
      });
  }, []);

  //웹개발, 마케팅팀 사전과제 있을 시에 사용
  /* 
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          setIsMarketingPreAssignment("");
          setIsDesignPreAssignment("");
          setIsWebDevPreAssignment("");
          setMarketingPreAssignment("");
          setDesignPreAssignment("");
          setWebDevPreAssignment("");
        } else {
          setIsMarketingPreAssignment(response.data.isMarketingPreAssignment);
          setIsDesignPreAssignment(response.data.isDesignPreAssignment);
          setIsWebDevPreAssignment(response.data.isWebDevPreAssignment);
          setMarketingPreAssignment(response.data.marketingPreAssignment);
          setDesignPreAssignment(response.data.master.designPreAssignment);
          setWebDevPreAssignment(response.data.master.webDevPreAssignment);
        }
      });
  }, []);

  */

  return (
    <div className="register_showResult">
      <Header />
      <div className="register_showResult_container">
        <div className="register_showResult_inner_container">
          <div className="register_showResult_main_content_container">
            <div className="register_showResult_main_content">
              안녕하세요, {props.name}님.
              <br />
              이화이언 {cardinalNumber}기 수습 운영진 모집에 1차 합격하신 것을
              진심으로 축하드립니다!
            </div>
            <div className="register_showResult_main_content_description">
              {
                isOnlineInterview === "true"
                  ? <p>2차 면접은 하단에 기재된 일정에 따라 비대면 면접으로 진행될
                    예정입니다.</p>
                  : <p>2차 면접은 하단에 기재된 일정에 따라 대면 면접으로 진행될
                    예정입니다.</p>
              }
            </div>
            <div className="register_showResult_main_content_survey_container">
              <div className="register_showResult_main_content_survey">
                심층면접 진행 전, 설문하러 가기 버튼을 통해 설문을 진행해
                주세요.
              </div>
              <a
                href={surveyFormLink}
                className="register_showResult_main_content_survey_link"
              >
                → 설문하러 가기
              </a>
            </div>
          </div>
          <div className="register_showResult_preAssignment_container">
            <div className="register_showResult_preAssignment_content">
              {
                props.team === "Design" && isDesignPreAssignment === "true"
                  ? <p>디자인팀 과제</p>
                  : null
              }
            </div>
          </div>
          <div className="register_showResult_interview_container">
            {
              isOnlineInterview === "true"
                ?
                <p>
                  <div className="register_showResult_interview_date">
                    면접일정 : {interviewPeriod}
                  </div>
                  <ul className="register_showResult_interview_content">
                    <li>
                      면접 당일에 문자로 발송되는 줌 링크로 면접 시간에 맞춰 접속해주시기 바랍니다.
                    </li>
                    <li>
                      면접의 경우, 불가피하게 배정된 면접 시간에서 10분 내외로 지연될 수
                      있습니다.
                    </li>
                    <li>
                      추가적인 문의사항이 있으신 경우, 마스터 {masterName}(
                      {masterPhoneNumber})에게 연락 부탁드립니다.
                    </li>
                  </ul>
                </p>
                : <p>
                  <div className="register_showResult_interview_date">
                    면접일정 : {interviewPeriod}
                    <br />
                    면접장소 : {faceTofaceInterviewPlace}
                  </div>
                  <ul className="register_showResult_interview_content">
                    <li>
                      일찍 오신 분들은 ({interviewWaitingPlace}
                      부터 이용 가능)에서 대기하실 수 있습니다
                    </li>
                    <li>
                      면접의 경우, 불가피하게 배정된 면접 시간에서 10분 내외로 지연될 수
                      있습니다.
                    </li>
                    <li>
                      추가적인 문의사항이 있으신 경우, 마스터 {masterName}(
                      {masterPhoneNumber})에게 연락 부탁드립니다.
                    </li>
                  </ul>
                </p>
            }
          </div>
        </div>
        <div className="register_showResult_button_container">
          <div className="register_showResult_back_to_main_container">
            <Link to="/">메인으로 돌아가기</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShowResult1stPass;
