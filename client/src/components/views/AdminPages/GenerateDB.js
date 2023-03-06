import React from "react";
import { useState, useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./GenerateDB.css";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function GenerateDB() {
  const navigate = useNavigate();
  //DB가 존재하는지에 대한 변수
  const [isInDB, setIsInDB] = useState(0);
  const [objectId, setObjectId] = useState("");
  useEffect(() => {
    axios
      .get("/api/admin/landing")
      .then((response) => {
        //로그인 안 했으면 login 창으로
        if (response.data.loggedIn !== true)
          navigate(`/admin/login`, { replace: true });
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });

    axios
      .post("/api/manager/find", {
        key: 1234,
      })
      .then((response) => {
        setIsInDB(response.data.isInDB);
        if (response.data.isInDB === "true") {
          setObjectId(response.data.objectId);
        }
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, []);
  const addDB = () => {
    if (isInDB === "true") {
      alert("이미 DB가 존재합니다.");
    } else {
      axios
        .post("/api/manager/init", {
          key: 1234,
          cardinalNumber: "",
          applicationSubmissionPeriod: "",
          firstPresentationPeriod: "",
          interviewPeriod: "",
          finalPresentationPeriod: "",
          isApplicationPeriod: false,
          masterName: "",
          masterPhoneNumber: "",
          masterTrainingPlace: "",
          doesRecruitMarketing: false,
          doesRecruitDesign: false,
          doesRecruitWebDev: false,
          showResultToApplicant: false,
          is1stResultPeriod: false,
          isFinalResultPeriod: false,
          surveyFormLink: "",
          isMarketingPreAssignment: false,
          isDesignPreAssignment: false,
          isWebDevPreAssignment: false,
          marketingPreAssignment: "",
          designPreAssignment: "",
          webDevPreAssignment: "",
          designPreAssignmentBannerName: "",
          designPreAssignmentPixelSize: "",
          designPreAssignmentSubmitPeriod: "",
          masterTrainingSchedule: "",
          isOnlineInterview: false,
          faceTofaceInterviewPlace: "",
          interviewWaitingPlace: "",
          masterTrainingWaitingPlace: "",
          masterTrainingWaitingTime: "",
        })
        .then((response) => {
          console.log(response.data.basicInfoCreate);
        })
        .catch((error) => {
          console.log("An error occurred: ", error.response);
        });
      alert("DB를 추가하였습니다.");
      window.location.reload();
    }
  };
  return (
    <div>
      <Header />
      <MobileView>
        <div className="generateDB_mobile">
          <div className="generateDB_mobile_inner_container">
            <div className="generateDB_content_container">
              <div className="generateDB_xImg_wrapper">
                <img
                  src="/img/notRegisterPeriod/notPeriodMark.png"
                  className="not_period_checkmark"
                  alt="xImg"
                />
              </div>
              <div className="not_period_text">
                <div className="not_period_large_text">PC로 이용해주세요.</div>
              </div>
              <div className="success_back_to_main_btn">
                <Link to="/">메인으로 돌아가기</Link>
              </div>
            </div>
          </div>
        </div>
      </MobileView>
      <BrowserView>
        <div className="generateDB_container">
          <div className="generateDB_inner_container">
            <div className="generateDB_content_container">
              <div className="generateDB_title">ADMIN</div>
              <div className="generateDB_dbInfo_wrap">
                <div className="dbInfo_labels">
                  <div className="dbInfo_label1">
                    현재 DB 존재 유무 : <div className="pink">{isInDB}</div>
                  </div>
                  <div className="dbInfo_label2">
                    DB Id : <div className="pink">{objectId}</div>
                  </div>
                </div>
                <div className="generateDB_button">
                  <button type="button" onClick={addDB}>
                    <div>
                      <img src="/img/admin/dbGenerate.png" alt="dbPlus" />
                      DB 추가
                    </div>
                  </button>
                </div>
              </div>
              <div className="generateDB_move_buttons">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/admin/modifyInfo/" + objectId, {
                      replace: false,
                    });
                  }}
                >
                  정보 수정하기
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/admin/applicantList", {
                      replace: false,
                    });
                  }}
                >
                  지원자 리스트
                </button>
              </div>
            </div>
          </div>
        </div>
      </BrowserView>

      <Footer />
    </div>
  );
}

export default GenerateDB;
