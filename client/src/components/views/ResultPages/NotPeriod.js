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
  // const [applicationSubmissionPeriod, setisApplicationSubmissionPeriod] = useState("");
  // const [firstPresentationPeriod, setisFirstPresentationPeriod] = useState("");
  // const [interviewPeriod, setisInterviewPeriod] = useState("");
  // const [finalPresentationPeriod, setisFinalPresentationPeriod] = useState("");


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

  useEffect(() => {
    try {
      const response = axios.get('api/var/load', {})
      setis1stResultPeriod(response.data.is1stResultPeriod);
      setisFinalResultPeriod(response.data.isFinalResultPeriod);
      //    setisApplicationSubmissionPeriod(response.data.applicationSubmissionPeriod),
      //         setisFirstPresentationPeriod(response.data.finalPresentationPeriod),
      //         setisInterviewPeriod(response.data.interviewPeriod), 
      //         setisFinalPresentationPeriod(response.data.finalPresentationPeriod)
    } catch (e) {
      console.error('error');
    }
  }, [])

  //결과 확인 기간인지를 알려주는 변수: is1stResultPeriod, isFinalResultPeriod
  //결과 확인 아닌 기간에 따라 보여지는 화면 다르게
  if (!is1stResultPeriod && !isFinalResultPeriod) {
    return (
      <div className="not_Both_ResultPeriods">
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
                <p><b>01</b></p>
                <p><b>지원서 제출</b></p>
                <p></p>
              </div>
              <div>
                <p><b>02</b></p>
                <p><b>서류 검토</b></p>
              </div>
              <div>
                <p><b>03</b></p>
                <p><b>1차 발표</b></p>

              </div>
              <div>
                <p><b>04</b></p>
                <p><b>심층 면접</b></p>
              </div>
              <div>
                <p><b>05</b></p>
                <p><b>최종 합격</b></p>
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
  else if (!is1stResultPeriod) {
    return (
      <div>

      </div>
    )
  } else if (!isFinalResultPeriod) {
    return (
      <div>

      </div>
      // <div>
      //   NotFinalPassPeriod
      //   <div>지원 기간 여부 : {pass}</div>
      // </div>
    );
  }
}

export default NotPeriod;
