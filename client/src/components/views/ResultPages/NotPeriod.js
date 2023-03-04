import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import './NotPeriod.css';
function NotPeriod() {
  //url에서 지원자 고유 id 알아내기
  const pathName = window.location.pathname;
  const applicantId = pathName.substring(18, pathName.length);
  const [pass, setPass] = useState("");
  const [is1stResultPeriod, setis1stResultPeriod] = useState("");
  const [isFinalResultPeriod, setisFinalResultPeriod] = useState("");
  const [applicationSubmissionPeriod, setApplicationSubmissionPeriod] = useState("");
  const [firstPresentationPeriod, setFirstPresentationPeriod] = useState("");
  const [interviewPeriod, setInterviewPeriod] = useState("");
  const [finalPresentationPeriod, setFinalPresentationPeriod] = useState("");
  const [showResultToApplicant, setshowResultToApplicant] = useState("");


  //첫 렌더링 때, url에서 알아낸 지원자 id를 통해 몇차 결과 확인 기간이 아닌지 확인
  useEffect(() => {
    axios
      .post("/api/update/get", {
        id: applicantId,
      })
      .then((response) => {
        setPass(response.data.pass);
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, [applicantId]);
  //현재 어떤 기간인지 받아오기
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          setis1stResultPeriod("");
          setisFinalResultPeriod("");
        } else {
          setis1stResultPeriod(response.data.is1stResultPeriod);
          setisFinalResultPeriod(response.data.isFinalResultPeriod);
        }
      });
  }, []);
  //결과 발표 일정 받아오기
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          setApplicationSubmissionPeriod("");
          setFirstPresentationPeriod("");
          setInterviewPeriod("");
          setFinalPresentationPeriod("");
          setshowResultToApplicant("");
        } else {
          setApplicationSubmissionPeriod(response.data.applicationSubmissionPeriod);
          setFirstPresentationPeriod(response.data.firstPresentationPeriod);
          setInterviewPeriod(response.data.interviewPeriod);
          setFinalPresentationPeriod(response.data.finalPresentationPeriod);
          setshowResultToApplicant(response.data.showResultToApplicant);
        }
      });
  }, []);

  //결과 확인 기간인지를 알려주는 변수: is1stResultPeriod, isFinalResultPeriod
  //결과 확인 아닌 기간에 따라 보여지는 화면 다르게
  if (is1stResultPeriod && !showResultToApplicant) {
    return (
      <div className="ResultPeriods">
        <Header />
        <div className="not_first_wrapper">
          <div className="not_first_inner_container">
            <div className="not_first_text_container">
              아직 1차 발표 기간이 아닙니다!
            </div>
            <div className="not_first_text_small_container">
              지원자님의 서류를 검토하고 있습니다. <br></br> 조금만 더 기다려주세요!
            </div>
            <div className="not_first_circles">
              <div>
                <p><b><u>01</u></b></p>
                <p><b>지원서 제출</b></p>
                <p>{applicationSubmissionPeriod}</p>
              </div>
              <p className="arrow">></p>
              <div>
                <p><b><u>02</u></b></p>
                <p><b>서류 검토</b></p>
              </div>
              <p className="arrow">></p>
              <div>
                <p><b><u>03</u></b></p>
                <p><b>1차 발표</b></p>
                <p>{firstPresentationPeriod}</p>
              </div>
              <p className="arrow">></p>
              <div>
                <p><b><u>04</u></b></p>
                <p><b>심층 면접</b></p>
                <p>{interviewPeriod}</p>
              </div>
              <p className="arrow">></p>
              <div>
                <p><b><u>05</u></b></p>
                <p><b>최종 합격</b></p>
                <p>{finalPresentationPeriod}</p>
              </div>
            </div>
            <div className="back_to_main_btn">
              <Link to='/'>메인으로 돌아가기</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  if (isFinalResultPeriod && !showResultToApplicant) {
    return (<div className="ResultPeriods">
      <Header />
      <div className="not_final_wrapper">
        <div className="not_final_inner_container">
          <div className="not_final_text_container">
            아직 최종 발표 기간이 아닙니다!
          </div>
          <div className="not_final_text_small_container">
            지원자님의 면접 결과를 신중하게 상의하고 있습니다. <br></br> 조금만 더 기다려주세요!
          </div>
          <div className="not_final_circles">
            <div>
              <p><b><u>01</u></b></p>
              <p><b>지원서 제출</b></p>
              <p>{applicationSubmissionPeriod}</p>
            </div>
            <p className="arrow">></p>
            <div>
              <p><b><u>02</u></b></p>
              <p><b>서류 검토</b></p>
            </div>
            <p className="arrow">></p>
            <div>
              <p><b><u>03</u></b></p>
              <p><b>1차 발표</b></p>
              <p>{firstPresentationPeriod}</p>
            </div>
            <p className="arrow">></p>
            <div>
              <p><b><u>04</u></b></p>
              <p><b>심층 면접</b></p>
              <p>{interviewPeriod}</p>
            </div>
            <p className="arrow">></p>
            <div>
              <p><b><u>05</u></b></p>
              <p><b>최종 합격</b></p>
              <p>{finalPresentationPeriod}</p>
            </div>
          </div>
          <div className="back_to_main_btn">
            <Link to='/'>메인으로 돌아가기</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    );
  }
  else if (!showResultToApplicant) {
    return (
      <div className="ResultPeriods">
        <Header />
        <div className="not_both_wrapper">
          <div className="not_both_inner_container">
            <div className="not_both_text_container">
              아직 결과 확인 기간이 아닙니다!
            </div>
            <div className="not_both_text_small_container">
              상단의 지원하기 버튼을 통해 <br></br> 이화이언 수습운영진에 지원하세요!
            </div>
            <div className="circles">
              <div>
                <p><b><u>01</u></b></p>
                <p><b>지원서 제출</b></p>
                <p>{applicationSubmissionPeriod}</p>
              </div>
              <p className="arrow">></p>
              <div>
                <p><b><u>02</u></b></p>
                <p><b>서류 검토</b></p>
              </div>
              <p className="arrow">></p>
              <div>
                <p><b><u>03</u></b></p>
                <p><b>1차 발표</b></p>
                <p>{firstPresentationPeriod}</p>
              </div>
              <p className="arrow">></p>
              <div>
                <p><b><u>04</u></b></p>
                <p><b>심층 면접</b></p>
                <p>{interviewPeriod}</p>
              </div>
              <p className="arrow">></p>
              <div>
                <p><b><u>05</u></b></p>
                <p><b>최종 합격</b></p>
                <p>{finalPresentationPeriod}</p>
              </div>
            </div>
            <div className="back_to_main_btn">
              <Link to='/'>메인으로 돌아가기</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default NotPeriod;
